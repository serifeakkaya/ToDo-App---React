import { useState } from 'react';
import './index.css';

function App() {
  // STATE YÖNETİMİ
  // Todo listesi - her todo bir obje: {id, text, completed}
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn JavaScript', completed: true },
    { id: 2, text: 'Learn React', completed: false },
    { id: 3, text: 'Have a life!', completed: false }
  ]);
  
  // Yeni todo input değeri
  const [newTodo, setNewTodo] = useState('');
  
  // Filtreleme durumu: 'all', 'active', 'completed'
  const [filter, setFilter] = useState('all');
  
  // Düzenleme modundaki todo'nun id'si
  const [editingId, setEditingId] = useState(null);
  
  // Düzenleme input değeri
  const [editText, setEditText] = useState('');

  // YENİ TODO EKLEME
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return; // Boş todo eklenmez
    
    const todo = {
      id: Date.now(), // Benzersiz ID için timestamp
      text: newTodo,
      completed: false
    };
    
    setTodos([...todos, todo]); // Yeni todo'yu listeye ekle
    setNewTodo(''); // Input'u temizle
  };

  // TODO'YU TAMAMLANMIŞ/TAMAMLANMAMIŞ YAPMA
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // TODO SİLME
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // TÜM TODO'LARI TAMAMLANMIŞ/TAMAMLANMAMIŞ YAPMA
  const toggleAll = () => {
    const allCompleted = todos.every(todo => todo.completed);
    setTodos(todos.map(todo => ({ ...todo, completed: !allCompleted })));
  };

  // TAMAMLANMIŞ TODO'LARI TEMİZLEME
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // DÜZENLEME MODUNU BAŞLATMA
  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // DÜZENLEMEYİ KAYDETME
  const saveEdit = (id) => {
    if (editText.trim() === '') {
      deleteTodo(id); // Boş text ise todo'yu sil
    } else {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: editText } : todo
      ));
    }
    setEditingId(null);
    setEditText('');
  };

  // DÜZENLEMEYİ İPTAL ETME
  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  // DÜZENLEME INPUT KLAVYE OLAYLARI
  const handleEditKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      saveEdit(id);
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  // YENİ TODO INPUT KLAVYE OLAYLARI
  const handleNewTodoKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo(e);
    }
  };

  // FİLTRELENMİŞ TODO LİSTESİNİ ALMA
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  // HESAPLAMALAR
  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;
  const filteredTodos = getFilteredTodos();

  return (
    <>
      <section className="todoapp">
        {/* HEADER - Başlık ve yeni todo input */}
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleNewTodoKeyDown}
          />
        </header>

        {/* ANA İÇERİK - Todo listesi sadece todo varsa gösterilir */}
        {todos.length > 0 && (
          <>
            <section className="main">
              {/* Tümünü tamamla checkbox'ı */}
              <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                checked={todos.every(todo => todo.completed)}
                onChange={toggleAll}
              />
              <label htmlFor="toggle-all">Mark all as complete</label>
              
              {/* TODO LİSTESİ */}
              <ul className="todo-list">
                {filteredTodos.map(todo => (
                  <li
                    key={todo.id}
                    className={`${todo.completed ? 'completed' : ''} ${editingId === todo.id ? 'editing' : ''}`}
                  >
                    <div className="view">
                      {/* Tamamlanma checkbox'ı */}
                      <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                      />
                      {/* Todo metni - çift tıklama ile düzenleme */}
                      <label onDoubleClick={() => startEdit(todo.id, todo.text)}>
                        {todo.text}
                      </label>
                      {/* Silme butonu */}
                      <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
                    </div>
                    
                    {/* Düzenleme input'u */}
                    {editingId === todo.id && (
                      <input
                        className="edit"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onBlur={() => saveEdit(todo.id)}
                        onKeyDown={(e) => handleEditKeyDown(e, todo.id)}
                        autoFocus
                      />
                    )}
                  </li>
                ))}
              </ul>
            </section>

            {/* FOOTER - İstatistikler ve filtreler */}
            <footer className="footer">
              {/* Kalan todo sayısı */}
              <span className="todo-count">
                <strong>{activeTodosCount}</strong> {activeTodosCount === 1 ? 'item' : 'items'} left
              </span>
              
              {/* Filtre butonları */}
              <ul className="filters">
                <li>
                  <a
                    href="#/"
                    className={filter === 'all' ? 'selected' : ''}
                    onClick={(e) => { e.preventDefault(); setFilter('all'); }}
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    href="#/active"
                    className={filter === 'active' ? 'selected' : ''}
                    onClick={(e) => { e.preventDefault(); setFilter('active'); }}
                  >
                    Active
                  </a>
                </li>
                <li>
                  <a
                    href="#/completed"
                    className={filter === 'completed' ? 'selected' : ''}
                    onClick={(e) => { e.preventDefault(); setFilter('completed'); }}
                  >
                    Completed
                  </a>
                </li>
              </ul>
              
              {/* Tamamlanmışları temizle butonu */}
              {completedTodosCount > 0 && (
                <button className="clear-completed" onClick={clearCompleted}>
                  Clear completed
                </button>
              )}
            </footer>
          </>
        )}
      </section>

      {/* BİLGİ FOOTER */}
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>
  );
}

export default App;

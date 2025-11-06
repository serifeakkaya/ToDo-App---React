# 📝 React Todo App

Klasik **TodoMVC** yapısına benzer, tamamen **React** ile yazılmış basit bir görev yönetim uygulamasıdır.  
Kullanıcılar görev ekleyebilir, düzenleyebilir, tamamlayabilir veya silebilir.

---

## 🚀 Özellikler

- 🆕 **Yeni görev ekleme** (Enter tuşuyla)
- ✅ **Görev tamamlama / geri alma**
- ✏️ **Çift tıklayarak düzenleme** (Enter ile kaydet, ESC ile iptal)
- 🗑️ **Görev silme**
- 🔄 **Tümünü tamamla / tamamlanmamış yap**
- 🔍 **Filtreleme:** All / Active / Completed
- 🧹 **Tamamlanan görevleri temizleme**

---

## 📁 Proje Yapısı

```bash
src/
├── App.js          # Ana React bileşeni
├── index.js        # React DOM render dosyası
├── index.css       # Stil dosyaları (TodoMVC uyumlu)
└── ...
```

---

## ⚙️ Kurulum Adımları

### 1️⃣ Projeyi Klonla
```bash
git clone https://github.com/kullanici-adi/todo-app.git
cd todo-app
```

### 2️⃣ Gerekli Paketleri Kur
```bash
npm install
```
veya
```bash
yarn install
```

### 3️⃣ Uygulamayı Başlat
```bash
npm start
```
veya
```bash
yarn start
```

Tarayıcıda otomatik olarak şu adres açılacaktır:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 💡 Kullanım Rehberi

| İşlem | Nasıl Yapılır |
|--------|----------------|
| 🧾 Yeni görev ekleme | Input’a yaz → Enter’a bas |
| ✅ Görev tamamlama | Checkbox’a tıkla |
| ✏️ Görev düzenleme | Metne çift tıkla |
| 🗑️ Görev silme | Çöp kutusu ikonuna tıkla |
| 🔍 Filtreleme | Alt kısımdan All / Active / Completed seç |
| 🧹 Temizleme | “Clear completed” butonuna tıkla |

---

## 🧠 Kullanılan React Özellikleri

- **useState:** Uygulama durumunu yönetmek için.
- **useEffect:** Gelecekte localStorage veya yan etkiler için.
- **Conditional Rendering:** Filtreleme ve footer görünümü için.
- **Event Handling:** onClick, onChange, onKeyDown olaylarını yönetmek için.
- **Dynamic Class Names:** CSS sınıflarını görev durumuna göre değiştirmek için.

---

## 🧩 Geliştirme Notları

- `useEffect` kullanarak görevleri **localStorage** içinde saklayabilirsiniz.
- Filtre butonlarını `<a>` yerine `<button>` etiketiyle oluşturmak **erişilebilirlik** açısından daha uygundur.
- Stil dosyasını özelleştirerek kendi **tema renklerinizi** ve **yazı tipinizi** kullanabilirsiniz.

---

## 🧪 Test Çalıştırma

```bash
npm test
```

Varsayılan olarak **React Testing Library** veya **Jest** ile testler çalıştırılabilir.

---

## 🏗️ Üretim Ortamı (Build)

```bash
npm run build
```

Bu komut sonrasında proje `build/` klasöründe dağıtıma hazır hale gelir.

---

## 👩‍💻 Katkı Rehberi

Katkıda bulunmak istersen:

1. 🔱 Depoyu **fork** et.
2. 🌿 Yeni bir **branch** oluştur (`feature/yeni-özellik` gibi).
3. 💾 Değişiklikleri yap ve **commit** et.
4. 🚀 **Pull request** gönder.

---

## 📄 Lisans

Bu proje **MIT Lisansı** ile açık kaynaklıdır.

---

> 💬 *Hazırlayan:* **Şerife Akkaya**  
> 📅 *Son güncelleme:* Kasım 2025  
> 🌸 *React ile oluşturuldu, sevgiyle düzenlendi.*
```

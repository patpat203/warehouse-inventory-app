# Warehouse Inventory App

A simple web-based warehouse inventory management system built for DES422 final project.

## 📌 Live Demo
https://<YourUsername>.github.io/warehouse-inventory-app/

## 🛠️ Technologies
- **HTML**, **CSS**, **JavaScript** (no frameworks)
- Frontend-only; uses in-memory mock data

## 🔍 Features

1. **Signup & Login**  
   - Users can register new accounts or log in.  
   - Includes a special **admin** account (`admin`/`admin`).

2. **Inventory Dashboard**  
   - Displays 20 items (Item A–T), each starting with **100** units.  
   - **Search** bar filters items in real time.  
   - **Withdraw** button reduces quantity immediately.

3. **Withdrawal Log**  
   - Logs each withdrawal with **timestamp** and **username**.  
   - Regular users see only their own history.  
   - Admin sees everyone’s logs.

4. **Admin Panel**  
   - Only visible to `admin`.  
   - **Add new items** (auto-starting at 100 units).  
   - **View all withdrawal logs**.

## 🚀 Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/<YourUsername>/warehouse-inventory-app.git
   ```

2. **Open in browser**  
   - Double-click `index.html`, or  
   - Visit the [Live Demo](https://<YourUsername>.github.io/warehouse-inventory-app/)

3. **Use the app**  
   - **Sign up** or log in with `admin`/`admin`.  
   - Try **searching**, **withdrawing**, and (if admin) **adding items** or **viewing logs**.

## 📄 Screenshots

_Add screenshots into a `screenshots/` folder and reference here:_

```
screenshots/login.png  
screenshots/dashboard.png  
screenshots/admin.png
```

## 💾 Data Persistence

- All data is stored in-memory (no real backend).  
- Page reload resets all data.

---

**Chanakarn Suwansinpan**  
Sirindhorn International Institute of Technology, TU  
DES422 Web App 2024/2 Term Project

# Warehouse Inventory App

A simple web-based warehouse inventory management system built for DES422 final project.

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

## 🚀 How to Use

1. **Open** `index.html` in any modern browser.  
2. **Sign up** for a new account or **log in** with:
   - **Username:** `admin`  
   - **Password:** `admin`

3. **Try it out**:
   - Search and withdraw items.  
   - As admin, add new items and view all logs.

## 📄 Mockup

Open the **`mockup.pdf`** file to view the UI design for all screens.

## 💾 Data Persistence

- All data is stored in-memory (no real backend).  
- Page reload resets all data.

---

**Chanakarn Suwansinpan**  
Sirindhorn International Institute of Technology, TU  
DES422 Web App 2024/2 Term Project

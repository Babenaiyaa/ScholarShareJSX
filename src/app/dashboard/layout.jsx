import NavBar from "../components/NavBar/NavBar";
export default function DashboardLayout({ children }) {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <aside style={{ width: "250px", background: "#222", color: "white", padding: "20px" }}>
          <h2>Dashboard</h2>
          <ul>
            <li><a href="/dashboard">Home</a></li>
            <li><a href="/dashboard/reports">Reports</a></li>
          </ul>
        </aside>
  
        {/* Main Content */}
        <main style={{ flex: 1, padding: "20px" }}>{children}</main>
      </div>
    );
  }
  
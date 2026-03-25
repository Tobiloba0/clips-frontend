import Sidebar from "./components/navigation/Sidebar";
import ProcessDashboard from "./components/ProcessDashboard";
import ConnectAccountsSection from "./components/ConnectAccountsSection";
import RecentProjects from "./components/recentProject";
import ProgressCard from "@/components/ProgressCard";
import MetricsCards from "./components/MetricsCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* ── Sidebar ── */}
      <Sidebar />

      {/* ── Main content area (offset by sidebar width) ── */}
      <main className="pl-64 min-h-screen">
        <div className="w-[90%] max-w-6xl mx-auto py-10">

          {/* ── Page header ── */}
          <div className="mb-8">
            <h1
              className="text-2xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Dashboard
            </h1>
            <p className="text-sm text-white/35 mt-1">
              Welcome back — here's what's happening with your content.
            </p>
          </div>

          {/* ── AI Processing progress ── */}
          <ProgressCard
            percentage={87}
            estimatedTimeRemaining="1 minute 15 seconds"
          />

          {/* ── Metrics row ── */}
          <MetricsCards />

          {/* ── Two-column grid: pipeline + accounts ── */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
            <ProcessDashboard />
            <ConnectAccountsSection />
          </div>

          {/* ── Recent Projects ── */}
          <div className="mt-8">
            <RecentProjects />
          </div>

        </div>
      </main>
    </div>
  );
}
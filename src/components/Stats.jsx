import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ label, value, trend, up }) => (
  <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
    <div className="text-white/60 text-sm">{label}</div>
    <div className="mt-2 flex items-end gap-2">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className={`text-xs inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${up ? 'bg-emerald-500/15 text-emerald-300' : 'bg-rose-500/15 text-rose-300'}`}>
        {up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {trend}
      </div>
    </div>
  </div>
);

function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard label="Total Balance" value="$24,180" trend="+4.2%" up />
      <StatCard label="Monthly Spend" value="$3,942" trend="-1.1%" />
      <StatCard label="Active Cards" value="5" trend="+1" up />
      <StatCard label="Upcoming Bills" value="$820" trend="In 5 days" />
    </div>
  );
}

export default Stats;

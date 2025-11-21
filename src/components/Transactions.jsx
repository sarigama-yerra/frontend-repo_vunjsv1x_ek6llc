import { CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Row = ({ icon: Icon, name, date, amount, positive }) => (
  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
    <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/70">
      <Icon size={18} />
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-white truncate">{name}</div>
      <div className="text-xs text-white/60">{date}</div>
    </div>
    <div className={`text-sm font-medium ${positive ? 'text-emerald-300' : 'text-rose-300'}`}>{positive ? '+' : '-'}{amount}</div>
    {positive ? <ArrowUpRight size={16} className="text-emerald-300" /> : <ArrowDownRight size={16} className="text-rose-300" />}
  </div>
);

function Transactions() {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-white/80 font-medium">Recent Transactions</div>
        <button className="text-xs px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white/80">View all</button>
      </div>
      <div className="flex flex-col divide-y divide-white/5">
        <Row icon={CreditCard} name="Spotify Premium" date="Aug 24, 2025" amount="$9.99" />
        <Row icon={CreditCard} name="Apple Pay - Grocery" date="Aug 23, 2025" amount="$62.45" />
        <Row icon={CreditCard} name="Stripe Payout" date="Aug 21, 2025" amount="$1,240.00" positive />
        <Row icon={CreditCard} name="Uber" date="Aug 20, 2025" amount="$18.60" />
      </div>
    </div>
  );
}

export default Transactions;

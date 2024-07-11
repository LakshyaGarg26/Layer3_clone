// app/quests/questCard.tsx
interface QuestCardProps {
    quest: {
      id: number;
      title: string;
      description: string;
      reward: number;
    };
  }
  
  export default function QuestCard({ quest }: QuestCardProps) {
    return (
      <div className="bg-foreground p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-2 text-textPrimary">{quest.title}</h2>
        <p className="text-textSecondary mb-4">{quest.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-accent font-bold">Reward</span>
          <span className="text-green-500">{quest.reward} XP</span>
        </div>
      </div>
    );
  }
  
// app/quests/page.tsx
import FeaturedCarousel from './featuredCarousel';
import QuestCard from './questCard';

const quests = [
  { id: 1, title: 'Quest 1', description: 'Complete task 1', reward: 50 },
  { id: 2, title: 'Quest 2', description: 'Complete task 2', reward: 30 },
  // Add more quests as needed
];

export default function QuestsPage() {
  return (
    <div className="container mx-auto p-4">
      <FeaturedCarousel />
     
    </div>
  );
}

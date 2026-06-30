import { useState } from "react";
import { Heart } from "lucide-react";

import Card from "../../ui/Card";
import type { MemoryItem } from "../../../types/vault";

type Props = {
  memory: MemoryItem;
};

export default function MemoryCard({ memory }: Props) {
  const [isFavorite, setIsFavorite] = useState(memory.isFavorite ?? false);

  return (
    <Card className="memory-card">
      <div className="memory-card__top">
        <div className="memory-card__header">
          <p className="memory-card__source">{memory.source}</p>
          <button
            type="button"
            className={`memory-card__favorite ${isFavorite ? "active" : ""}`}
            onClick={() => setIsFavorite((value) => !value)}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>

        <div className="memory-card__meta">
          <span className="memory-card__created">Created {memory.createdAt}</span>
          <span className="memory-card__category">{memory.category}</span>
        </div>

        <h3 className="memory-card__title">{memory.title}</h3>
        <p className="memory-card__description">{memory.description}</p>
      </div>

      <div className="memory-card__footer">
        <div className="memory-card__tags">
          {memory.tags.map((tag) => (
            <span key={tag} className="memory-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

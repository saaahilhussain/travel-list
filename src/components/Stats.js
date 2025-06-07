export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  console.log(packedItems);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything packed! Good to go ✈️"
          : `You have ${numItems} items in your list, you already added ${packedItems}
        items (${percentage}%)`}
      </em>
    </footer>
  );
}

export const SearchProducts = ({setProductName}) => {
  return (
    <div>
      <input type="text" placeholder="BUSQUE AQUI"
      onChange={(e) => setProductName(e.target.value)} />
    </div>
  );
};

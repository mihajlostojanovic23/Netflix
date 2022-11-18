import CategoryItem from './CategoryItem';

interface Categories {
  programs: any;
  id: any;
}

function Category({ programs, id }: Categories) {
  return (
    <div className={`menu_category${id} flex`}>
      {programs?.map((categ: any, index: any) => (
        <div key={index} className="mx-[5px]">
          <CategoryItem {...categ} />
        </div>
      ))}
    </div>
  );
}

export default Category;

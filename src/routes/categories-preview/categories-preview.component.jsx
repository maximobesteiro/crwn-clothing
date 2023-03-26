import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectIsCategoriesLoading
} from '../../store/categories/categories.selector';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
        ))
      )}
    </>
  );
};

export default CategoriesPreview;

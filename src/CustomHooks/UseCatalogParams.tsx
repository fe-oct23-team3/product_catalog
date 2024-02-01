import { useLocation, useSearchParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useContextProvider } from '../context/ProductsContext';

import { SearchParams, getSearchWith } from '../utils/searchHelper';
import { GetParams } from '../types/Product';

export type SelectValue = Pick<GetParams, 'order' | 'direction'>;
export const useCatalogParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '';
  const order = searchParams.get('order') || 'year';
  const direction = searchParams.get('direction') || 'DESC';
  const { pathname } = useLocation();
  const catalogPath = pathname.split('/')[1];
  const siblingCount = 1;
  const {
    products,
    setParams,
  } = useContextProvider();
  const productsCount = products?.count;
  const productsCatalog = products?.rows;
  const totalProductCount = products?.count || 1;
  const limitToNumer = Number(limit);
  const totalPages = !limitToNumer ? 1
    : Math.ceil(totalProductCount / limitToNumer);

  const setSearchWith = useCallback((params:SearchParams) => {
    const search = getSearchWith(searchParams, params);

    setSearchParams(search);
  }, [searchParams, setSearchParams]);

  const handleLimitChange = (event: string,
    value:string) => {
    setSearchWith({ [value]: event || null });
  };

  const handleSelectChange = (value:SelectValue) => {
    setSearchWith({ ...value });
  };

  const checkPageValue = useCallback(() => {
    if (Number(page) && totalPages < Number(page)) {
      setSearchWith({ page: null });

      return '';
    }

    return Number(page) > 1 ? Number(page) - 1 : 0;
  }, [page, setSearchWith, totalPages]);

  useEffect(() => {
    setParams(newParams => ({
      ...newParams,
      type: catalogPath,
      page: +checkPageValue(),
      limit,
      order,
      direction,
    }));
  }, [checkPageValue, setParams, limit, order, direction, catalogPath]);

  return {
    handleSelectChange,
    siblingCount,
    productsCount,
    productsCatalog,
    limit,
    page,
    searchParams,
    handleLimitChange,
    catalogPath,
    totalPages,
    order,
    direction,
    setSearchWith,
  };
};

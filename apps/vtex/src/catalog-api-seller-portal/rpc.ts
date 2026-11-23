import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiCatalogSellerPortalBrands(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['catalog-seller-portal'].brands.$get(args, options))
}

export async function postApiCatalogSellerPortalBrands(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['brands']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['catalog-seller-portal'].brands.$post(args, options))
}

export async function getApiCatalogSellerPortalBrandsBrandId(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['catalog-seller-portal'].brands[':brandId'].$get(args, options),
  )
}

export async function putApiCatalogSellerPortalBrandsBrandId(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['brands'][':brandId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['catalog-seller-portal'].brands[':brandId'].$put(args, options),
  )
}

export async function getApiCatalogSellerPortalCategoryTree(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['catalog-seller-portal']['category-tree'].$get(args, options),
  )
}

export async function putApiCatalogSellerPortalCategoryTree(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['category-tree']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['catalog-seller-portal']['category-tree'].$put(args, options),
  )
}

export async function postApiCatalogSellerPortalCategoryTreeCategories(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['category-tree']['categories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['catalog-seller-portal']['category-tree'].categories.$post(args, options),
  )
}

export async function getApiCatalogSellerPortalCategoryTreeCategoriesCategoryId(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['category-tree']['categories'][':categoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['catalog-seller-portal']['category-tree'].categories[':categoryId'].$get(
      args,
      options,
    ),
  )
}

export async function postApiCatalogSellerPortalProducts(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['products']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['catalog-seller-portal'].products.$post(args, options))
}

export async function getApiCatalogSellerPortalProductsParam(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':param']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['catalog-seller-portal'].products[':param'].$get(args, options),
  )
}

export async function getApiCatalogSellerPortalProductsProductId(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['catalog-seller-portal'].products[':productId'].$get(args, options),
  )
}

export async function putApiCatalogSellerPortalProductsProductId(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['catalog-seller-portal'].products[':productId'].$put(args, options),
  )
}

export async function getApiCatalogSellerPortalProductsProductIdDescription(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['catalog-seller-portal'].products[':productId'].description.$get(args, options),
  )
}

export async function putApiCatalogSellerPortalProductsProductIdDescription(
  args: InferRequestType<
    (typeof client.api)['catalog-seller-portal']['products'][':productId']['description']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['catalog-seller-portal'].products[':productId'].description.$put(args, options),
  )
}

export async function getApiCatalogSellerPortalSkusSearch(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['_search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['catalog-seller-portal'].skus._search.$get(args, options))
}

export async function getApiCatalogSellerPortalSkusIds(
  args: InferRequestType<(typeof client.api)['catalog-seller-portal']['skus']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['catalog-seller-portal'].skus.ids.$get(args, options))
}

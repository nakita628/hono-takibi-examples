import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiCatalogSystemPubFacetsCategoryCategoryId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.facets.category)[':categoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.facets.category[':categoryId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPubFacetsSearchTerm(
  args: InferRequestType<(typeof client.api.catalog_system.pub.facets.search)[':term']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.facets.search[':term'].$get(args, options),
  )
}

export async function getApiCatalogSystemPubProductsCrosssellingAccessoriesProductId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.accessories)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.products.crossselling.accessories[':productId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiCatalogSystemPubProductsCrosssellingShowtogetherProductId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.showtogether)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.products.crossselling.showtogether[':productId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiCatalogSystemPubProductsCrosssellingSimilarsProductId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.similars)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.products.crossselling.similars[':productId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPubProductsCrosssellingSuggestionsProductId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.suggestions)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.products.crossselling.suggestions[':productId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiCatalogSystemPubProductsCrosssellingWhoboughtalsoboughtProductId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whoboughtalsobought)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.products.crossselling.whoboughtalsobought[':productId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiCatalogSystemPubProductsCrosssellingWhosawalsoboughtProductId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsobought)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.products.crossselling.whosawalsobought[':productId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiCatalogSystemPubProductsCrosssellingWhosawalsosawProductId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.crossselling.whosawalsosaw)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.products.crossselling.whosawalsosaw[':productId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiCatalogSystemPubProductsOffersProductId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.products.offers[':productId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPubProductsOffersProductIdSkuSkuId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.offers)[':productId']['sku'][':skuId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.products.offers[':productId'].sku[':skuId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPubProductsSearch(
  args: InferRequestType<typeof client.api.catalog_system.pub.products.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog_system.pub.products.search.$get(args, options))
}

export async function getApiCatalogSystemPubProductsSearchProductTextLinkP(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.search)[':product-text-link']['p']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.products.search[':product-text-link'].p.$get(args, options),
  )
}

export async function getApiCatalogSystemPubProductsSearchSearch(
  args: InferRequestType<(typeof client.api.catalog_system.pub.products.search)[':search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.products.search[':search'].$get(args, options),
  )
}

export async function getBuscaautocomplete(
  args: InferRequestType<typeof client.buscaautocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buscaautocomplete.$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOrganizationsOrganizationUuidCategoriesV2(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['categories']['v2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].categories.v2.$get(args, options),
  )
}

export async function postOrganizationsOrganizationUuidCategoriesV2(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['categories']['v2']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].categories.v2.$post(args, options),
  )
}

export async function deleteOrganizationsOrganizationUuidCategoriesV2CategoryUuid(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['categories']['v2'][':categoryUuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].categories.v2[':categoryUuid'].$delete(args, options),
  )
}

export async function patchOrganizationsOrganizationUuidCategoriesV2CategoryUuid(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['categories']['v2'][':categoryUuid']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].categories.v2[':categoryUuid'].$patch(args, options),
  )
}

export async function getOrganizationsOrganizationUuidDiscounts(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['discounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].discounts.$get(args, options),
  )
}

export async function postOrganizationsOrganizationUuidDiscounts(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['discounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].discounts.$post(args, options),
  )
}

export async function getOrganizationsOrganizationUuidDiscountsDiscountUuid(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].discounts[':discountUuid'].$get(args, options),
  )
}

export async function putOrganizationsOrganizationUuidDiscountsDiscountUuid(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].discounts[':discountUuid'].$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationUuidDiscountsDiscountUuid(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['discounts'][':discountUuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].discounts[':discountUuid'].$delete(args, options),
  )
}

export async function getOrganizationsOrganizationUuidImages(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationUuid'].images.$get(args, options))
}

export async function getOrganizationsOrganizationUuidImportStatus(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['import']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].import.status.$get(args, options),
  )
}

export async function getOrganizationsOrganizationUuidImportStatusImportUuid(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['import']['status'][':importUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].import.status[':importUuid'].$get(args, options),
  )
}

export async function postOrganizationsOrganizationUuidImportV2(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['import']['v2']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].import.v2.$post(args, options),
  )
}

export async function getOrganizationsOrganizationUuidLibrary(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['library']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationUuid'].library.$get(args, options))
}

export async function getOrganizationsOrganizationUuidProducts(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':organizationUuid'].products.$get(args, options))
}

export async function postOrganizationsOrganizationUuidProducts(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].products.$post(args, options),
  )
}

export async function deleteOrganizationsOrganizationUuidProducts(
  args: InferRequestType<(typeof client.organizations)[':organizationUuid']['products']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].products.$delete(args, options),
  )
}

export async function postOrganizationsOrganizationUuidProductsOnlineSlug(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['online']['slug']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].products.online.slug.$post(args, options),
  )
}

export async function getOrganizationsOrganizationUuidProductsOptions(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].products.options.$get(args, options),
  )
}

export async function getOrganizationsOrganizationUuidProductsV2(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['v2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].products.v2.$get(args, options),
  )
}

export async function getOrganizationsOrganizationUuidProductsV2Count(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['v2']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].products.v2.count.$get(args, options),
  )
}

export async function putOrganizationsOrganizationUuidProductsV2ProductUuid(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products']['v2'][':productUuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].products.v2[':productUuid'].$put(args, options),
  )
}

export async function getOrganizationsOrganizationUuidProductsProductUuid(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].products[':productUuid'].$get(args, options),
  )
}

export async function deleteOrganizationsOrganizationUuidProductsProductUuid(
  args: InferRequestType<
    (typeof client.organizations)[':organizationUuid']['products'][':productUuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organizationUuid'].products[':productUuid'].$delete(args, options),
  )
}

export async function getV1Taxes(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.taxes.$get(undefined, options))
}

export async function postV1Taxes(
  args: InferRequestType<typeof client.v1.taxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.taxes.$post(args, options))
}

export async function getV1TaxesCount(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.taxes.count.$get(undefined, options))
}

export async function getV1TaxesSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.taxes.settings.$get(undefined, options))
}

export async function putV1TaxesSettings(
  args: InferRequestType<typeof client.v1.taxes.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.taxes.settings.$put(args, options))
}

export async function getV1TaxesTaxRateUuid(
  args: InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.taxes[':taxRateUuid'].$get(args, options))
}

export async function putV1TaxesTaxRateUuid(
  args: InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.taxes[':taxRateUuid'].$put(args, options))
}

export async function deleteV1TaxesTaxRateUuid(
  args: InferRequestType<(typeof client.v1.taxes)[':taxRateUuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.taxes[':taxRateUuid'].$delete(args, options))
}

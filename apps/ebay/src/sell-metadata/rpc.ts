import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCountryCountryCodeSalesTaxJurisdiction(
  args: InferRequestType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.country[':countryCode'].sales_tax_jurisdiction.$get(args, options),
  )
}

export async function getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPolicies(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketplace[':marketplace_id'].get_automotive_parts_compatibility_policies.$get(
      args,
      options,
    ),
  )
}

export async function getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPolicies(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketplace[':marketplace_id'].get_extended_producer_responsibility_policies.$get(
      args,
      options,
    ),
  )
}

export async function getMarketplaceMarketplaceIdGetHazardousMaterialsLabels(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketplace[':marketplace_id'].get_hazardous_materials_labels.$get(args, options),
  )
}

export async function getMarketplaceMarketplaceIdGetItemConditionPolicies(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketplace[':marketplace_id'].get_item_condition_policies.$get(args, options),
  )
}

export async function getMarketplaceMarketplaceIdGetListingStructurePolicies(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketplace[':marketplace_id'].get_listing_structure_policies.$get(args, options),
  )
}

export async function getMarketplaceMarketplaceIdGetNegotiatedPricePolicies(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketplace[':marketplace_id'].get_negotiated_price_policies.$get(args, options),
  )
}

export async function getMarketplaceMarketplaceIdGetReturnPolicies(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketplace[':marketplace_id'].get_return_policies.$get(args, options),
  )
}

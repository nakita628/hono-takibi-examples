import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCountryKey() {
  return ['country'] as const
}

export function getMarketplaceKey() {
  return ['marketplace'] as const
}

export function getGetCountryCountryCodeSalesTaxJurisdictionKey(
  args: InferRequestType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>,
) {
  return ['country', '/country/:countryCode/sales_tax_jurisdiction', args] as const
}

export function useGetCountryCountryCodeSalesTaxJurisdiction<TError = unknown>(
  args: InferRequestType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCountryCountryCodeSalesTaxJurisdictionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.country[':countryCode'].sales_tax_jurisdiction.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCountryCountryCodeSalesTaxJurisdiction<TError = unknown>(
  args: InferRequestType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCountryCountryCodeSalesTaxJurisdictionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.country[':countryCode'].sales_tax_jurisdiction.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesKey(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
  >,
) {
  return [
    'marketplace',
    '/marketplace/:marketplace_id/get_automotive_parts_compatibility_policies',
    args,
  ] as const
}

export function useGetMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_automotive_parts_compatibility_policies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_automotive_parts_compatibility_policies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesKey(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
  >,
) {
  return [
    'marketplace',
    '/marketplace/:marketplace_id/get_extended_producer_responsibility_policies',
    args,
  ] as const
}

export function useGetMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_extended_producer_responsibility_policies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_extended_producer_responsibility_policies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketplaceMarketplaceIdGetHazardousMaterialsLabelsKey(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
  >,
) {
  return [
    'marketplace',
    '/marketplace/:marketplace_id/get_hazardous_materials_labels',
    args,
  ] as const
}

export function useGetMarketplaceMarketplaceIdGetHazardousMaterialsLabels<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetHazardousMaterialsLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_hazardous_materials_labels.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketplaceMarketplaceIdGetHazardousMaterialsLabels<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetHazardousMaterialsLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_hazardous_materials_labels.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketplaceMarketplaceIdGetItemConditionPoliciesKey(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
  >,
) {
  return ['marketplace', '/marketplace/:marketplace_id/get_item_condition_policies', args] as const
}

export function useGetMarketplaceMarketplaceIdGetItemConditionPolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetItemConditionPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_item_condition_policies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketplaceMarketplaceIdGetItemConditionPolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetItemConditionPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_item_condition_policies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketplaceMarketplaceIdGetListingStructurePoliciesKey(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
  >,
) {
  return [
    'marketplace',
    '/marketplace/:marketplace_id/get_listing_structure_policies',
    args,
  ] as const
}

export function useGetMarketplaceMarketplaceIdGetListingStructurePolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetListingStructurePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_listing_structure_policies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketplaceMarketplaceIdGetListingStructurePolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetListingStructurePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_listing_structure_policies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketplaceMarketplaceIdGetNegotiatedPricePoliciesKey(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
  >,
) {
  return [
    'marketplace',
    '/marketplace/:marketplace_id/get_negotiated_price_policies',
    args,
  ] as const
}

export function useGetMarketplaceMarketplaceIdGetNegotiatedPricePolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetNegotiatedPricePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_negotiated_price_policies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketplaceMarketplaceIdGetNegotiatedPricePolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetNegotiatedPricePoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_negotiated_price_policies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketplaceMarketplaceIdGetReturnPoliciesKey(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']
  >,
) {
  return ['marketplace', '/marketplace/:marketplace_id/get_return_policies', args] as const
}

export function useGetMarketplaceMarketplaceIdGetReturnPolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetReturnPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_return_policies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketplaceMarketplaceIdGetReturnPolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketplaceMarketplaceIdGetReturnPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketplace[':marketplace_id'].get_return_policies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

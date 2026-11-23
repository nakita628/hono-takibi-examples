import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCountryKey() {
  return ['country'] as const
}

export function getMarketplaceKey() {
  return ['marketplace'] as const
}

export function getCountryCountryCodeSalesTaxJurisdictionQueryKey(
  args: InferRequestType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>,
) {
  return ['country', '/country/:countryCode/sales_tax_jurisdiction', args] as const
}

export function getCountryCountryCodeSalesTaxJurisdictionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCountryCountryCodeSalesTaxJurisdictionQueryKey>
  >({
    queryKey: getCountryCountryCodeSalesTaxJurisdictionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.country[':countryCode'].sales_tax_jurisdiction.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCountryCountryCodeSalesTaxJurisdiction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCountryCountryCodeSalesTaxJurisdictionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCountryCountryCodeSalesTaxJurisdictionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCountryCountryCodeSalesTaxJurisdiction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCountryCountryCodeSalesTaxJurisdictionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCountryCountryCodeSalesTaxJurisdictionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesQueryKey(
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

export function getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesQueryKey>
  >({
    queryKey: getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_automotive_parts_compatibility_policies.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPolicies<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPolicies<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesQueryKey(
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

export function getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesQueryKey>
  >({
    queryKey: getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_extended_producer_responsibility_policies.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPolicies<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPolicies<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsQueryKey(
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

export function getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsQueryKey>
  >({
    queryKey: getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_hazardous_materials_labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMarketplaceMarketplaceIdGetHazardousMaterialsLabels<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMarketplaceMarketplaceIdGetHazardousMaterialsLabels<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetItemConditionPoliciesQueryKey(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
  >,
) {
  return ['marketplace', '/marketplace/:marketplace_id/get_item_condition_policies', args] as const
}

export function getMarketplaceMarketplaceIdGetItemConditionPoliciesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMarketplaceMarketplaceIdGetItemConditionPoliciesQueryKey>
  >({
    queryKey: getMarketplaceMarketplaceIdGetItemConditionPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_item_condition_policies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMarketplaceMarketplaceIdGetItemConditionPolicies<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMarketplaceMarketplaceIdGetItemConditionPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMarketplaceMarketplaceIdGetItemConditionPoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMarketplaceMarketplaceIdGetItemConditionPolicies<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMarketplaceMarketplaceIdGetItemConditionPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMarketplaceMarketplaceIdGetItemConditionPoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetListingStructurePoliciesQueryKey(
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

export function getMarketplaceMarketplaceIdGetListingStructurePoliciesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMarketplaceMarketplaceIdGetListingStructurePoliciesQueryKey>
  >({
    queryKey: getMarketplaceMarketplaceIdGetListingStructurePoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_listing_structure_policies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMarketplaceMarketplaceIdGetListingStructurePolicies<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMarketplaceMarketplaceIdGetListingStructurePoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMarketplaceMarketplaceIdGetListingStructurePoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMarketplaceMarketplaceIdGetListingStructurePolicies<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMarketplaceMarketplaceIdGetListingStructurePoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMarketplaceMarketplaceIdGetListingStructurePoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesQueryKey(
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

export function getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesQueryKey>
  >({
    queryKey: getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_negotiated_price_policies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMarketplaceMarketplaceIdGetNegotiatedPricePolicies<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMarketplaceMarketplaceIdGetNegotiatedPricePolicies<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetReturnPoliciesQueryKey(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']
  >,
) {
  return ['marketplace', '/marketplace/:marketplace_id/get_return_policies', args] as const
}

export function getMarketplaceMarketplaceIdGetReturnPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getMarketplaceMarketplaceIdGetReturnPoliciesQueryKey>
  >({
    queryKey: getMarketplaceMarketplaceIdGetReturnPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_return_policies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMarketplaceMarketplaceIdGetReturnPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMarketplaceMarketplaceIdGetReturnPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMarketplaceMarketplaceIdGetReturnPoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMarketplaceMarketplaceIdGetReturnPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getMarketplaceMarketplaceIdGetReturnPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMarketplaceMarketplaceIdGetReturnPoliciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

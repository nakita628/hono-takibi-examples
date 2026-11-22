import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>
  >,
) {
  return ['country', '/country/:countryCode/sales_tax_jurisdiction', toValue(args)] as const
}

export function getCountryCountryCodeSalesTaxJurisdictionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCountryCountryCodeSalesTaxJurisdictionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.country[':countryCode'].sales_tax_jurisdiction.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.country)[':countryCode']['sales_tax_jurisdiction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getCountryCountryCodeSalesTaxJurisdictionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCountryCountryCodeSalesTaxJurisdictionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.country[':countryCode'].sales_tax_jurisdiction.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
    >
  >,
) {
  return [
    'marketplace',
    '/marketplace/:marketplace_id/get_automotive_parts_compatibility_policies',
    toValue(args),
  ] as const
}

export function getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_automotive_parts_compatibility_policies.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_automotive_parts_compatibility_policies']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketplace[':marketplace_id'].get_automotive_parts_compatibility_policies.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
    >
  >,
) {
  return [
    'marketplace',
    '/marketplace/:marketplace_id/get_extended_producer_responsibility_policies',
    toValue(args),
  ] as const
}

export function getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_extended_producer_responsibility_policies.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_extended_producer_responsibility_policies']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketplace[':marketplace_id'].get_extended_producer_responsibility_policies.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
    >
  >,
) {
  return [
    'marketplace',
    '/marketplace/:marketplace_id/get_hazardous_materials_labels',
    toValue(args),
  ] as const
}

export function getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_hazardous_materials_labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_hazardous_materials_labels']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketplace[':marketplace_id'].get_hazardous_materials_labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetItemConditionPoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
    >
  >,
) {
  return [
    'marketplace',
    '/marketplace/:marketplace_id/get_item_condition_policies',
    toValue(args),
  ] as const
}

export function getMarketplaceMarketplaceIdGetItemConditionPoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketplaceMarketplaceIdGetItemConditionPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_item_condition_policies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_item_condition_policies']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getMarketplaceMarketplaceIdGetItemConditionPoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketplaceMarketplaceIdGetItemConditionPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketplace[':marketplace_id'].get_item_condition_policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetListingStructurePoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
    >
  >,
) {
  return [
    'marketplace',
    '/marketplace/:marketplace_id/get_listing_structure_policies',
    toValue(args),
  ] as const
}

export function getMarketplaceMarketplaceIdGetListingStructurePoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketplaceMarketplaceIdGetListingStructurePoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_listing_structure_policies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_listing_structure_policies']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getMarketplaceMarketplaceIdGetListingStructurePoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketplaceMarketplaceIdGetListingStructurePoliciesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketplace[':marketplace_id'].get_listing_structure_policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
    >
  >,
) {
  return [
    'marketplace',
    '/marketplace/:marketplace_id/get_negotiated_price_policies',
    toValue(args),
  ] as const
}

export function getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_negotiated_price_policies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketplace)[':marketplace_id']['get_negotiated_price_policies']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketplace[':marketplace_id'].get_negotiated_price_policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketplaceMarketplaceIdGetReturnPoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']>
  >,
) {
  return ['marketplace', '/marketplace/:marketplace_id/get_return_policies', toValue(args)] as const
}

export function getMarketplaceMarketplaceIdGetReturnPoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketplaceMarketplaceIdGetReturnPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketplace[':marketplace_id'].get_return_policies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketplace)[':marketplace_id']['get_return_policies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getMarketplaceMarketplaceIdGetReturnPoliciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketplaceMarketplaceIdGetReturnPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketplace[':marketplace_id'].get_return_policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

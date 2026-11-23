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

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-customers',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-customers'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-customers'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-disputes',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-disputes'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-disputes'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-info',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-info'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data['commerce-info'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-locations',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-locations'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-locations'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-orders',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-orders'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersQueryKey>
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data['commerce-orders'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-paymentMethods',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data[
          'commerce-paymentMethods'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-paymentMethods'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-payments',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-payments'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCommercePayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-payments'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-productCategories',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data[
          'commerce-productCategories'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-productCategories'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-products',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-products'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCommerceProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-products'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-taxComponents',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data[
          'commerce-taxComponents'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-taxComponents'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
    >
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-transactions',
    toValue(args),
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data[
          'commerce-transactions'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
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
                    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsQueryKey
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
              (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':companyId'].connections[':connectionId'].data[
            'commerce-transactions'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

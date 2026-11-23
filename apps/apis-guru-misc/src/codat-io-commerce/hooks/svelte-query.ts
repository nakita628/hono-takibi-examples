import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-customers',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-customers'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomers<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-customers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-disputes',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-disputes'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputes<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-disputes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-info',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-info'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfo<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-info']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-locations',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-locations'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocations<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-locations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-orders',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-orders'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrders<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-orders']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-paymentMethods',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data[
          'commerce-paymentMethods'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethods<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-paymentMethods']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-payments',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-payments'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCommercePayments<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-payments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-productCategories',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data[
          'commerce-productCategories'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategories<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-productCategories']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-products',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data['commerce-products'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCommerceProducts<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-products']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-taxComponents',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data[
          'commerce-taxComponents'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-taxComponents']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/connections/:connectionId/data/commerce-transactions',
    args,
  ] as const
}

export function getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].connections[':connectionId'].data[
          'commerce-transactions'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactions<
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
  args: () => InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['commerce-transactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

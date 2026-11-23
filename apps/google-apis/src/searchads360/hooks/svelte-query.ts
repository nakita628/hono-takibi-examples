import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV0Key() {
  return ['v0'] as const
}

export function getV0CustomersCustomerIdCustomColumnsQueryKey(
  args: InferRequestType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>,
) {
  return ['v0', '/v0/customers/:customerId/customColumns', args] as const
}

export function getV0CustomersCustomerIdCustomColumnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0CustomersCustomerIdCustomColumnsQueryKey>
  >({
    queryKey: getV0CustomersCustomerIdCustomColumnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0.customers[':customerId'].customColumns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV0CustomersCustomerIdCustomColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v0.customers)[':customerId']['customColumns']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV0CustomersCustomerIdCustomColumnsQueryKey>
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
      ...getV0CustomersCustomerIdCustomColumnsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV0CustomersCustomerIdSearchAds360SearchMutationKey() {
  return ['v0', '/v0/customers/:customerId/searchAds360:search', 'POST'] as const
}

export function getPostV0CustomersCustomerIdSearchAds360SearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v0.customers)[':customerId']['searchAds360:search']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.customers)[':customerId']['searchAds360:search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV0CustomersCustomerIdSearchAds360SearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v0.customers)[':customerId']['searchAds360:search']['$post']
      >,
    ) {
      return parseResponse(
        client.v0.customers[':customerId']['searchAds360:search'].$post(args, options),
      )
    },
  })
}

export function createPostV0CustomersCustomerIdSearchAds360Search<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v0.customers)[':customerId']['searchAds360:search']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v0.customers)[':customerId']['searchAds360:search']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV0CustomersCustomerIdSearchAds360SearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV0CustomersCustomerIdSearchAds360SearchStreamMutationKey() {
  return ['v0', '/v0/customers/:customerId/searchAds360:searchStream', 'POST'] as const
}

export function getPostV0CustomersCustomerIdSearchAds360SearchStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v0.customers)[':customerId']['searchAds360:searchStream']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v0.customers)[':customerId']['searchAds360:searchStream']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV0CustomersCustomerIdSearchAds360SearchStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v0.customers)[':customerId']['searchAds360:searchStream']['$post']
      >,
    ) {
      return parseResponse(
        client.v0.customers[':customerId']['searchAds360:searchStream'].$post(args, options),
      )
    },
  })
}

export function createPostV0CustomersCustomerIdSearchAds360SearchStream<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v0.customers)[':customerId']['searchAds360:searchStream']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v0.customers)[':customerId']['searchAds360:searchStream']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV0CustomersCustomerIdSearchAds360SearchStreamMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV0SearchAds360FieldsSearchMutationKey() {
  return ['v0', '/v0/searchAds360Fields:search', 'POST'] as const
}

export function getPostV0SearchAds360FieldsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0)['searchAds360Fields:search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v0)['searchAds360Fields:search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV0SearchAds360FieldsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v0)['searchAds360Fields:search']['$post']>,
    ) {
      return parseResponse(client.v0['searchAds360Fields:search'].$post(args, options))
    },
  })
}

export function createPostV0SearchAds360FieldsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v0)['searchAds360Fields:search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v0)['searchAds360Fields:search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV0SearchAds360FieldsSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV0ResourceNameQueryKey(
  args: InferRequestType<(typeof client.v0)[':resourceName']['$get']>,
) {
  return ['v0', '/v0/:resourceName', args] as const
}

export function getV0ResourceNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v0)[':resourceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v0)[':resourceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0)[':resourceName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0ResourceNameQueryKey>
  >({
    queryKey: getV0ResourceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v0[':resourceName'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV0ResourceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v0)[':resourceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v0)[':resourceName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v0)[':resourceName']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV0ResourceNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV0ResourceNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

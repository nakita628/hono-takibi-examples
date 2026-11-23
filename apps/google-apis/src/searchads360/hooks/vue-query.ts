import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV0Key() {
  return ['v0'] as const
}

export function getV0CustomersCustomerIdCustomColumnsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>
  >,
) {
  return ['v0', '/v0/customers/:customerId/customColumns', toValue(args)] as const
}

export function getV0CustomersCustomerIdCustomColumnsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0CustomersCustomerIdCustomColumnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0.customers[':customerId'].customColumns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0CustomersCustomerIdCustomColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV0CustomersCustomerIdCustomColumnsQueryKey>
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
          Awaited<ReturnType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0CustomersCustomerIdCustomColumnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0CustomersCustomerIdCustomColumnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0.customers[':customerId'].customColumns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV0CustomersCustomerIdSearchAds360Search<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0CustomersCustomerIdSearchAds360SearchMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV0CustomersCustomerIdSearchAds360SearchStream<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0CustomersCustomerIdSearchAds360SearchStreamMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV0SearchAds360FieldsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0SearchAds360FieldsSearchMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV0ResourceNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0)[':resourceName']['$get']>>,
) {
  return ['v0', '/v0/:resourceName', toValue(args)] as const
}

export function getV0ResourceNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0)[':resourceName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV0ResourceNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v0[':resourceName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV0ResourceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v0)[':resourceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v0)[':resourceName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0)[':resourceName']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0)[':resourceName']['$get']>>>
            >
          >,
          ReturnType<typeof getV0ResourceNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0)[':resourceName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV0ResourceNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV0ResourceNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v0[':resourceName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

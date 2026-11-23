import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCustomerSupportKey() {
  return ['customer-support'] as const
}

export function getCustomerSupportCustomersQueryKey(
  args: InferRequestType<(typeof client)['customer-support']['customers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customer-support', '/customer-support/customers', keyArgs] as const
}

export function getCustomerSupportCustomersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-support']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer-support']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer-support']['customers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerSupportCustomersQueryKey>
  >({
    queryKey: getCustomerSupportCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['customer-support'].customers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomerSupportCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-support']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer-support']['customers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['customer-support']['customers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomerSupportCustomersQueryKey>
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
      ...getCustomerSupportCustomersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomerSupportCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-support']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer-support']['customers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['customer-support']['customers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomerSupportCustomersQueryKey>
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
      ...getCustomerSupportCustomersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCustomerSupportCustomersMutationKey() {
  return ['customer-support', '/customer-support/customers', 'POST'] as const
}

export function getPostCustomerSupportCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer-support']['customers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['customer-support']['customers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomerSupportCustomersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['customer-support']['customers']['$post']>,
    ) {
      return parseResponse(client['customer-support'].customers.$post(args, options))
    },
  })
}

export function usePostCustomerSupportCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['customer-support']['customers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['customer-support']['customers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomerSupportCustomersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomerSupportCustomersIdQueryKey(
  args: InferRequestType<(typeof client)['customer-support']['customers'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customer-support', '/customer-support/customers/:id', keyArgs] as const
}

export function getCustomerSupportCustomersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-support']['customers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer-support']['customers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer-support']['customers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerSupportCustomersIdQueryKey>
  >({
    queryKey: getCustomerSupportCustomersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['customer-support'].customers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomerSupportCustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-support']['customers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer-support']['customers'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['customer-support']['customers'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomerSupportCustomersIdQueryKey>
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
      ...getCustomerSupportCustomersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomerSupportCustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-support']['customers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer-support']['customers'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['customer-support']['customers'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomerSupportCustomersIdQueryKey>
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
      ...getCustomerSupportCustomersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCustomerSupportCustomersIdMutationKey() {
  return ['customer-support', '/customer-support/customers/:id', 'DELETE'] as const
}

export function getDeleteCustomerSupportCustomersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer-support']['customers'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['customer-support']['customers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomerSupportCustomersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['customer-support']['customers'][':id']['$delete']>,
    ) {
      return parseResponse(client['customer-support'].customers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCustomerSupportCustomersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['customer-support']['customers'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['customer-support']['customers'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCustomerSupportCustomersIdMutationOptions<
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

export function getPatchCustomerSupportCustomersIdMutationKey() {
  return ['customer-support', '/customer-support/customers/:id', 'PATCH'] as const
}

export function getPatchCustomerSupportCustomersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer-support']['customers'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['customer-support']['customers'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCustomerSupportCustomersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['customer-support']['customers'][':id']['$patch']>,
    ) {
      return parseResponse(client['customer-support'].customers[':id'].$patch(args, options))
    },
  })
}

export function usePatchCustomerSupportCustomersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['customer-support']['customers'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['customer-support']['customers'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCustomerSupportCustomersIdMutationOptions<
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

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

export function getCustomerSupportKey() {
  return ['customer-support'] as const
}

export function getCustomerSupportCustomersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['customer-support']['customers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customer-support', '/customer-support/customers', keyArgs] as const
}

export function getCustomerSupportCustomersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['customer-support']['customers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomerSupportCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['customer-support'].customers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['customer-support']['customers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer-support']['customers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomerSupportCustomersQueryKey>
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
          Awaited<ReturnType<(typeof client)['customer-support']['customers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerSupportCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomerSupportCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['customer-support'].customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['customer-support']['customers'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customer-support', '/customer-support/customers/:id', keyArgs] as const
}

export function getCustomerSupportCustomersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['customer-support']['customers'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomerSupportCustomersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['customer-support'].customers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['customer-support']['customers'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer-support']['customers'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomerSupportCustomersIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['customer-support']['customers'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerSupportCustomersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomerSupportCustomersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['customer-support'].customers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['customer-support']['customers'][':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['customer-support']['customers'][':id']['$patch']>,
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

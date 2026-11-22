import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createCustomerSupportCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-support']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['customer-support']['customers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCustomerSupportCustomersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostCustomerSupportCustomers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomerSupportCustomersMutationOptions<
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

export function createCustomerSupportCustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-support']['customers'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['customer-support']['customers'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCustomerSupportCustomersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteCustomerSupportCustomersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCustomerSupportCustomersIdMutationOptions<
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

export function createPatchCustomerSupportCustomersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCustomerSupportCustomersIdMutationOptions<
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

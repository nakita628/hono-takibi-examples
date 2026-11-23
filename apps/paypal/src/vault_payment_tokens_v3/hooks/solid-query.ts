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

export function getV3Key() {
  return ['v3'] as const
}

export function getV3VaultPaymentTokensQueryKey(
  args: InferRequestType<(typeof client.v3.vault)['payment-tokens']['$get']>,
) {
  return ['v3', '/v3/vault/payment-tokens', args] as const
}

export function getV3VaultPaymentTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.vault)['payment-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3VaultPaymentTokensQueryKey>
  >({
    queryKey: getV3VaultPaymentTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.vault['payment-tokens'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3VaultPaymentTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.vault)['payment-tokens']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3VaultPaymentTokensQueryKey>
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
      ...getV3VaultPaymentTokensQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV3VaultPaymentTokensMutationKey() {
  return ['v3', '/v3/vault/payment-tokens', 'POST'] as const
}

export function getPostV3VaultPaymentTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.vault)['payment-tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3VaultPaymentTokensMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.vault)['payment-tokens']['$post']>) {
      return parseResponse(client.v3.vault['payment-tokens'].$post(args, options))
    },
  })
}

export function createPostV3VaultPaymentTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3.vault)['payment-tokens']['$post']>,
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
    const mutationDefaults = getPostV3VaultPaymentTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3VaultPaymentTokensIdQueryKey(
  args: InferRequestType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>,
) {
  return ['v3', '/v3/vault/payment-tokens/:id', args] as const
}

export function getV3VaultPaymentTokensIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3VaultPaymentTokensIdQueryKey>
  >({
    queryKey: getV3VaultPaymentTokensIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.vault['payment-tokens'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3VaultPaymentTokensId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3VaultPaymentTokensIdQueryKey>
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
      ...getV3VaultPaymentTokensIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV3VaultPaymentTokensIdMutationKey() {
  return ['v3', '/v3/vault/payment-tokens/:id', 'DELETE'] as const
}

export function getDeleteV3VaultPaymentTokensIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.vault)['payment-tokens'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3VaultPaymentTokensIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.vault)['payment-tokens'][':id']['$delete']>,
    ) {
      return parseResponse(client.v3.vault['payment-tokens'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteV3VaultPaymentTokensId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v3.vault)['payment-tokens'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV3VaultPaymentTokensIdMutationOptions<
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

export function getPostV3VaultSetupTokensMutationKey() {
  return ['v3', '/v3/vault/setup-tokens', 'POST'] as const
}

export function getPostV3VaultSetupTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.vault)['setup-tokens']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.vault)['setup-tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3VaultSetupTokensMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.vault)['setup-tokens']['$post']>) {
      return parseResponse(client.v3.vault['setup-tokens'].$post(args, options))
    },
  })
}

export function createPostV3VaultSetupTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.vault)['setup-tokens']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3.vault)['setup-tokens']['$post']>,
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
    const mutationDefaults = getPostV3VaultSetupTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3VaultSetupTokensIdQueryKey(
  args: InferRequestType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>,
) {
  return ['v3', '/v3/vault/setup-tokens/:id', args] as const
}

export function getV3VaultSetupTokensIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3VaultSetupTokensIdQueryKey>
  >({
    queryKey: getV3VaultSetupTokensIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.vault['setup-tokens'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3VaultSetupTokensId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3VaultSetupTokensIdQueryKey>
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
      ...getV3VaultSetupTokensIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

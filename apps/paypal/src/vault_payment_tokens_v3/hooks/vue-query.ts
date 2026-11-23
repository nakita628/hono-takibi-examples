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

export function getV3Key() {
  return ['v3'] as const
}

export function getV3VaultPaymentTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.vault)['payment-tokens']['$get']>>,
) {
  return ['v3', '/v3/vault/payment-tokens', toValue(args)] as const
}

export function getV3VaultPaymentTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.vault)['payment-tokens']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3VaultPaymentTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.vault['payment-tokens'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3VaultPaymentTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.vault)['payment-tokens']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3VaultPaymentTokensQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3VaultPaymentTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3VaultPaymentTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.vault['payment-tokens'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV3VaultPaymentTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostV3VaultPaymentTokensMutationOptions<TError, TOnMutateResult>(
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

export function getV3VaultPaymentTokensIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>
  >,
) {
  return ['v3', '/v3/vault/payment-tokens/:id', toValue(args)] as const
}

export function getV3VaultPaymentTokensIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3VaultPaymentTokensIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.vault['payment-tokens'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3VaultPaymentTokensId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3VaultPaymentTokensIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.vault)['payment-tokens'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3VaultPaymentTokensIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3VaultPaymentTokensIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.vault['payment-tokens'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV3VaultPaymentTokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteV3VaultPaymentTokensIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostV3VaultSetupTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostV3VaultSetupTokensMutationOptions<TError, TOnMutateResult>(
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

export function getV3VaultSetupTokensIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>>,
) {
  return ['v3', '/v3/vault/setup-tokens/:id', toValue(args)] as const
}

export function getV3VaultSetupTokensIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3VaultSetupTokensIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.vault['setup-tokens'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3VaultSetupTokensId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3VaultSetupTokensIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.vault)['setup-tokens'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3VaultSetupTokensIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3VaultSetupTokensIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.vault['setup-tokens'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

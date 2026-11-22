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

export function getAccountKey() {
  return ['account'] as const
}

export function getBlockKey() {
  return ['block'] as const
}

export function getBlockchainKey() {
  return ['blockchain'] as const
}

export function getContractKey() {
  return ['contract'] as const
}

export function getEchoKey() {
  return ['echo'] as const
}

export function getErc20Key() {
  return ['erc20'] as const
}

export function getKeyKey() {
  return ['key'] as const
}

export function getTransactionKey() {
  return ['transaction'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getWalletKey() {
  return ['wallet'] as const
}

export function getOptionsMutationKey() {
  return ['', '/', 'OPTIONS'] as const
}

export function getOptionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$options>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsMutationKey(),
    async mutationFn() {
      return parseResponse(client.index.$options(undefined, options))
    },
  })
}

export function useOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$options>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getOptionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountMutationKey() {
  return ['account', '/account', 'POST'] as const
}

export function getPostAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAccountMutationKey(),
    async mutationFn() {
      return parseResponse(client.account.$post(undefined, options))
    },
  })
}

export function usePostAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsAccountMutationKey() {
  return ['account', '/account', 'OPTIONS'] as const
}

export function getOptionsAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$options>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsAccountMutationKey(),
    async mutationFn() {
      return parseResponse(client.account.$options(undefined, options))
    },
  })
}

export function useOptionsAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$options>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getOptionsAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)[':id']['$get']>>,
) {
  return ['account', '/account/:id', toValue(args)] as const
}

export function getAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAccountIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsAccountIdMutationKey() {
  return ['account', '/account/:id', 'OPTIONS'] as const
}

export function getOptionsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':id']['$options']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.account)[':id']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)[':id']['$options']>) {
      return parseResponse(client.account[':id'].$options(args, options))
    },
  })
}

export function useOptionsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':id']['$options']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.account)[':id']['$options']>,
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
  const mutationDefaults = getOptionsAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getBlockQueryKey() {
  return ['block', '/block'] as const
}

export function getBlockQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBlockQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.block.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBlock<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.block.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.block.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.block.$get>>>>>,
          ReturnType<typeof getBlockQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.block.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBlockQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBlockQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.block.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsBlockMutationKey() {
  return ['block', '/block', 'OPTIONS'] as const
}

export function getOptionsBlockMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.block.$options>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsBlockMutationKey(),
    async mutationFn() {
      return parseResponse(client.block.$options(undefined, options))
    },
  })
}

export function useOptionsBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.block.$options>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getOptionsBlockMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBlockIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.block)[':id']['$get']>>,
) {
  return ['block', '/block/:id', toValue(args)] as const
}

export function getBlockIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.block)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlockIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.block[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBlockId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.block)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.block)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.block)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.block)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBlockIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.block)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBlockIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlockIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.block[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsBlockIdMutationKey() {
  return ['block', '/block/:id', 'OPTIONS'] as const
}

export function getOptionsBlockIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.block)[':id']['$options']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.block)[':id']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsBlockIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.block)[':id']['$options']>) {
      return parseResponse(client.block[':id'].$options(args, options))
    },
  })
}

export function useOptionsBlockId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.block)[':id']['$options']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.block)[':id']['$options']>,
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
  const mutationDefaults = getOptionsBlockIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBlockIdTransactionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.block)[':id']['transaction']['$get']>>,
) {
  return ['block', '/block/:id/transaction', toValue(args)] as const
}

export function getBlockIdTransactionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.block)[':id']['transaction']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlockIdTransactionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.block[':id'].transaction.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlockIdTransaction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.block)[':id']['transaction']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.block)[':id']['transaction']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.block)[':id']['transaction']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.block)[':id']['transaction']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlockIdTransactionQueryKey>
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
          Awaited<ReturnType<(typeof client.block)[':id']['transaction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlockIdTransactionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlockIdTransactionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.block[':id'].transaction.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsBlockIdTransactionMutationKey() {
  return ['block', '/block/:id/transaction', 'OPTIONS'] as const
}

export function getOptionsBlockIdTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.block)[':id']['transaction']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.block)[':id']['transaction']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsBlockIdTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.block)[':id']['transaction']['$options']>,
    ) {
      return parseResponse(client.block[':id'].transaction.$options(args, options))
    },
  })
}

export function useOptionsBlockIdTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.block)[':id']['transaction']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.block)[':id']['transaction']['$options']>,
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
  const mutationDefaults = getOptionsBlockIdTransactionMutationOptions<TError, TOnMutateResult>(
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

export function getBlockIdTransactionIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.block)[':id']['transaction'][':index']['$get']>
  >,
) {
  return ['block', '/block/:id/transaction/:index', toValue(args)] as const
}

export function getBlockIdTransactionIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.block)[':id']['transaction'][':index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlockIdTransactionIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.block[':id'].transaction[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlockIdTransactionIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.block)[':id']['transaction'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.block)[':id']['transaction'][':index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.block)[':id']['transaction'][':index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.block)[':id']['transaction'][':index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlockIdTransactionIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.block)[':id']['transaction'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlockIdTransactionIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlockIdTransactionIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.block[':id'].transaction[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsBlockIdTransactionIndexMutationKey() {
  return ['block', '/block/:id/transaction/:index', 'OPTIONS'] as const
}

export function getOptionsBlockIdTransactionIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.block)[':id']['transaction'][':index']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.block)[':id']['transaction'][':index']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsBlockIdTransactionIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.block)[':id']['transaction'][':index']['$options']>,
    ) {
      return parseResponse(client.block[':id'].transaction[':index'].$options(args, options))
    },
  })
}

export function useOptionsBlockIdTransactionIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.block)[':id']['transaction'][':index']['$options']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.block)[':id']['transaction'][':index']['$options']>,
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
  const mutationDefaults = getOptionsBlockIdTransactionIndexMutationOptions<
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

export function getBlockchainQueryKey() {
  return ['blockchain', '/blockchain'] as const
}

export function getBlockchainQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBlockchainQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blockchain.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBlockchain<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blockchain.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blockchain.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blockchain.$get>>>>
          >,
          ReturnType<typeof getBlockchainQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blockchain.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBlockchainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBlockchainQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.blockchain.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsBlockchainMutationKey() {
  return ['blockchain', '/blockchain', 'OPTIONS'] as const
}

export function getOptionsBlockchainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blockchain.$options>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsBlockchainMutationKey(),
    async mutationFn() {
      return parseResponse(client.blockchain.$options(undefined, options))
    },
  })
}

export function useOptionsBlockchain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blockchain.$options>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getOptionsBlockchainMutationOptions<TError, TOnMutateResult>(
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

export function getBlockchainIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blockchain)[':id']['$get']>>,
) {
  return ['blockchain', '/blockchain/:id', toValue(args)] as const
}

export function getBlockchainIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blockchain)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlockchainIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blockchain[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlockchainId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.blockchain)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blockchain)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.blockchain)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.blockchain)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBlockchainIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.blockchain)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlockchainIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlockchainIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blockchain[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsBlockchainIdMutationKey() {
  return ['blockchain', '/blockchain/:id', 'OPTIONS'] as const
}

export function getOptionsBlockchainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.blockchain)[':id']['$options']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.blockchain)[':id']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsBlockchainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.blockchain)[':id']['$options']>) {
      return parseResponse(client.blockchain[':id'].$options(args, options))
    },
  })
}

export function useOptionsBlockchainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blockchain)[':id']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.blockchain)[':id']['$options']>,
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
  const mutationDefaults = getOptionsBlockchainIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostContractMutationKey() {
  return ['contract', '/contract', 'POST'] as const
}

export function getPostContractMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contract.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostContractMutationKey(),
    async mutationFn() {
      return parseResponse(client.contract.$post(undefined, options))
    },
  })
}

export function usePostContract<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contract.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostContractMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsContractMutationKey() {
  return ['contract', '/contract', 'OPTIONS'] as const
}

export function getOptionsContractMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contract.$options>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsContractMutationKey(),
    async mutationFn() {
      return parseResponse(client.contract.$options(undefined, options))
    },
  })
}

export function useOptionsContract<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contract.$options>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getOptionsContractMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContractIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contract)[':id']['$get']>>,
) {
  return ['contract', '/contract/:id', toValue(args)] as const
}

export function getContractIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contract)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContractIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contract[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContractId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contract)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getContractIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContractIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContractIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contract[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContractIdMutationKey() {
  return ['contract', '/contract/:id', 'POST'] as const
}

export function getPostContractIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contract)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContractIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contract)[':id']['$post']>) {
      return parseResponse(client.contract[':id'].$post(args, options))
    },
  })
}

export function usePostContractId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.contract)[':id']['$post']>,
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
  const mutationDefaults = getPostContractIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsContractIdMutationKey() {
  return ['contract', '/contract/:id', 'OPTIONS'] as const
}

export function getOptionsContractIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$options']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contract)[':id']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsContractIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contract)[':id']['$options']>) {
      return parseResponse(client.contract[':id'].$options(args, options))
    },
  })
}

export function useOptionsContractId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$options']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.contract)[':id']['$options']>,
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
  const mutationDefaults = getOptionsContractIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsEchoMutationKey() {
  return ['echo', '/echo', 'OPTIONS'] as const
}

export function getOptionsEchoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.echo.$options>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsEchoMutationKey(),
    async mutationFn() {
      return parseResponse(client.echo.$options(undefined, options))
    },
  })
}

export function useOptionsEcho<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.echo.$options>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getOptionsEchoMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getErc20QueryKey() {
  return ['erc20', '/erc20'] as const
}

export function getErc20QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getErc20QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.erc20.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useErc20<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$get>>>>>,
          ReturnType<typeof getErc20QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getErc20QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getErc20QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.erc20.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostErc20MutationKey() {
  return ['erc20', '/erc20', 'POST'] as const
}

export function getPostErc20MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostErc20MutationKey(),
    async mutationFn() {
      return parseResponse(client.erc20.$post(undefined, options))
    },
  })
}

export function usePostErc20<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$post>>>>>,
          TError,
          void,
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
  const mutationDefaults = getPostErc20MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsErc20MutationKey() {
  return ['erc20', '/erc20', 'OPTIONS'] as const
}

export function getOptionsErc20MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$options>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsErc20MutationKey(),
    async mutationFn() {
      return parseResponse(client.erc20.$options(undefined, options))
    },
  })
}

export function useOptionsErc20<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$options>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getOptionsErc20MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getErc20AddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.erc20)[':address']['$get']>>,
) {
  return ['erc20', '/erc20/:address', toValue(args)] as const
}

export function getErc20AddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.erc20)[':address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getErc20AddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.erc20[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useErc20Address<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.erc20)[':address']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.erc20)[':address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.erc20)[':address']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.erc20)[':address']['$get']>>>
            >
          >,
          ReturnType<typeof getErc20AddressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.erc20)[':address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getErc20AddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getErc20AddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.erc20[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostErc20AddressMutationKey() {
  return ['erc20', '/erc20/:address', 'POST'] as const
}

export function getPostErc20AddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.erc20)[':address']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.erc20)[':address']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostErc20AddressMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.erc20)[':address']['$post']>) {
      return parseResponse(client.erc20[':address'].$post(args, options))
    },
  })
}

export function usePostErc20Address<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.erc20)[':address']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.erc20)[':address']['$post']>,
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
  const mutationDefaults = getPostErc20AddressMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsErc20AddressMutationKey() {
  return ['erc20', '/erc20/:address', 'OPTIONS'] as const
}

export function getOptionsErc20AddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.erc20)[':address']['$options']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.erc20)[':address']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsErc20AddressMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.erc20)[':address']['$options']>) {
      return parseResponse(client.erc20[':address'].$options(args, options))
    },
  })
}

export function useOptionsErc20Address<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.erc20)[':address']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.erc20)[':address']['$options']>,
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
  const mutationDefaults = getOptionsErc20AddressMutationOptions<TError, TOnMutateResult>(
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

export function getKeyQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.key.$get>>) {
  return ['key', '/key', toValue(args)] as const
}

export function getKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.key.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.key.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKey<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.key.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$get>>>>>,
          ReturnType<typeof getKeyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.key.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKeyMutationKey() {
  return ['key', '/key', 'POST'] as const
}

export function getPostKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostKeyMutationKey(),
    async mutationFn() {
      return parseResponse(client.key.$post(undefined, options))
    },
  })
}

export function usePostKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$post>>>>>,
          TError,
          void,
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
  const mutationDefaults = getPostKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsKeyMutationKey() {
  return ['key', '/key', 'OPTIONS'] as const
}

export function getOptionsKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$options>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsKeyMutationKey(),
    async mutationFn() {
      return parseResponse(client.key.$options(undefined, options))
    },
  })
}

export function useOptionsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$options>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getOptionsKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteKeyKeyMutationKey() {
  return ['key', '/key/:key', 'DELETE'] as const
}

export function getDeleteKeyKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':key']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.key)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKeyKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.key)[':key']['$delete']>) {
      return parseResponse(client.key[':key'].$delete(args, options))
    },
  })
}

export function useDeleteKeyKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':key']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.key)[':key']['$delete']>,
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
  const mutationDefaults = getDeleteKeyKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsKeyKeyMutationKey() {
  return ['key', '/key/:key', 'OPTIONS'] as const
}

export function getOptionsKeyKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':key']['$options']>>>>
    >,
    TError,
    InferRequestType<(typeof client.key)[':key']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsKeyKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.key)[':key']['$options']>) {
      return parseResponse(client.key[':key'].$options(args, options))
    },
  })
}

export function useOptionsKeyKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':key']['$options']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.key)[':key']['$options']>,
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
  const mutationDefaults = getOptionsKeyKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTransactionMutationKey() {
  return ['transaction', '/transaction', 'POST'] as const
}

export function getPostTransactionMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionMutationKey(),
    async mutationFn() {
      return parseResponse(client.transaction.$post(undefined, options))
    },
  })
}

export function usePostTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostTransactionMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsTransactionMutationKey() {
  return ['transaction', '/transaction', 'OPTIONS'] as const
}

export function getOptionsTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$options>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsTransactionMutationKey(),
    async mutationFn() {
      return parseResponse(client.transaction.$options(undefined, options))
    },
  })
}

export function useOptionsTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$options>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getOptionsTransactionMutationOptions<TError, TOnMutateResult>(
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

export function getTransactionHashQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transaction)[':hash']['$get']>>,
) {
  return ['transaction', '/transaction/:hash', toValue(args)] as const
}

export function getTransactionHashQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transaction)[':hash']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionHashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transaction[':hash'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':hash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transaction)[':hash']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transaction)[':hash']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transaction)[':hash']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTransactionHashQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':hash']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionHashQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionHashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transaction[':hash'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsTransactionHashMutationKey() {
  return ['transaction', '/transaction/:hash', 'OPTIONS'] as const
}

export function getOptionsTransactionHashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':hash']['$options']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.transaction)[':hash']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsTransactionHashMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.transaction)[':hash']['$options']>) {
      return parseResponse(client.transaction[':hash'].$options(args, options))
    },
  })
}

export function useOptionsTransactionHash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transaction)[':hash']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transaction)[':hash']['$options']>,
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
  const mutationDefaults = getOptionsTransactionHashMutationOptions<TError, TOnMutateResult>(
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

export function getTransactionHashReceiptQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transaction)[':hash']['receipt']['$get']>>,
) {
  return ['transaction', '/transaction/:hash/receipt', toValue(args)] as const
}

export function getTransactionHashReceiptQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transaction)[':hash']['receipt']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionHashReceiptQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transaction[':hash'].receipt.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionHashReceipt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transaction)[':hash']['receipt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transaction)[':hash']['receipt']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transaction)[':hash']['receipt']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transaction)[':hash']['receipt']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTransactionHashReceiptQueryKey>
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
          Awaited<ReturnType<(typeof client.transaction)[':hash']['receipt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionHashReceiptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionHashReceiptQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transaction[':hash'].receipt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsTransactionHashReceiptMutationKey() {
  return ['transaction', '/transaction/:hash/receipt', 'OPTIONS'] as const
}

export function getOptionsTransactionHashReceiptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transaction)[':hash']['receipt']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transaction)[':hash']['receipt']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsTransactionHashReceiptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transaction)[':hash']['receipt']['$options']>,
    ) {
      return parseResponse(client.transaction[':hash'].receipt.$options(args, options))
    },
  })
}

export function useOptionsTransactionHashReceipt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transaction)[':hash']['receipt']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transaction)[':hash']['receipt']['$options']>,
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
  const mutationDefaults = getOptionsTransactionHashReceiptMutationOptions<TError, TOnMutateResult>(
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

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          ReturnType<typeof getVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsVersionMutationKey() {
  return ['version', '/version', 'OPTIONS'] as const
}

export function getOptionsVersionMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$options>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsVersionMutationKey(),
    async mutationFn() {
      return parseResponse(client.version.$options(undefined, options))
    },
  })
}

export function useOptionsVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$options>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getOptionsVersionMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWalletQueryKey() {
  return ['wallet', '/wallet'] as const
}

export function getWalletQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWalletQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wallet.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWallet<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$get>>>>>,
          ReturnType<typeof getWalletQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWalletQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWalletQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.wallet.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWalletMutationKey() {
  return ['wallet', '/wallet', 'POST'] as const
}

export function getPostWalletMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostWalletMutationKey(),
    async mutationFn() {
      return parseResponse(client.wallet.$post(undefined, options))
    },
  })
}

export function usePostWallet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostWalletMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsWalletMutationKey() {
  return ['wallet', '/wallet', 'OPTIONS'] as const
}

export function getOptionsWalletMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$options>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsWalletMutationKey(),
    async mutationFn() {
      return parseResponse(client.wallet.$options(undefined, options))
    },
  })
}

export function useOptionsWallet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$options>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getOptionsWalletMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWalletAccountQueryKey() {
  return ['wallet', '/wallet/account'] as const
}

export function getWalletAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWalletAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wallet.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWalletAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$get>>>>
          >,
          ReturnType<typeof getWalletAccountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWalletAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWalletAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.wallet.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWalletAccountMutationKey() {
  return ['wallet', '/wallet/account', 'POST'] as const
}

export function getPostWalletAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostWalletAccountMutationKey(),
    async mutationFn() {
      return parseResponse(client.wallet.account.$post(undefined, options))
    },
  })
}

export function usePostWalletAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostWalletAccountMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsWalletAccountMutationKey() {
  return ['wallet', '/wallet/account', 'OPTIONS'] as const
}

export function getOptionsWalletAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$options>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getOptionsWalletAccountMutationKey(),
    async mutationFn() {
      return parseResponse(client.wallet.account.$options(undefined, options))
    },
  })
}

export function useOptionsWalletAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$options>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getOptionsWalletAccountMutationOptions<TError, TOnMutateResult>(
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

export function getWalletAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wallet.account)[':id']['$get']>>,
) {
  return ['wallet', '/wallet/account/:id', toValue(args)] as const
}

export function getWalletAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wallet.account)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWalletAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wallet.account[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWalletAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wallet.account)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wallet.account)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wallet.account)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wallet.account)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWalletAccountIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.wallet.account)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWalletAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wallet.account[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsWalletAccountIdMutationKey() {
  return ['wallet', '/wallet/account/:id', 'OPTIONS'] as const
}

export function getOptionsWalletAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.wallet.account)[':id']['$options']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.wallet.account)[':id']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsWalletAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.wallet.account)[':id']['$options']>) {
      return parseResponse(client.wallet.account[':id'].$options(args, options))
    },
  })
}

export function useOptionsWalletAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wallet.account)[':id']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wallet.account)[':id']['$options']>,
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
  const mutationDefaults = getOptionsWalletAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostWalletAccountIdContractMutationKey() {
  return ['wallet', '/wallet/account/:id/contract', 'POST'] as const
}

export function getPostWalletAccountIdContractMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallet.account)[':id']['contract']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wallet.account)[':id']['contract']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletAccountIdContractMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wallet.account)[':id']['contract']['$post']>,
    ) {
      return parseResponse(client.wallet.account[':id'].contract.$post(args, options))
    },
  })
}

export function usePostWalletAccountIdContract<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wallet.account)[':id']['contract']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wallet.account)[':id']['contract']['$post']>,
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
  const mutationDefaults = getPostWalletAccountIdContractMutationOptions<TError, TOnMutateResult>(
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

export function getPostWalletAccountIdErc20MutationKey() {
  return ['wallet', '/wallet/account/:id/erc20', 'POST'] as const
}

export function getPostWalletAccountIdErc20MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallet.account)[':id']['erc20']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wallet.account)[':id']['erc20']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletAccountIdErc20MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wallet.account)[':id']['erc20']['$post']>,
    ) {
      return parseResponse(client.wallet.account[':id'].erc20.$post(args, options))
    },
  })
}

export function usePostWalletAccountIdErc20<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wallet.account)[':id']['erc20']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wallet.account)[':id']['erc20']['$post']>,
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
  const mutationDefaults = getPostWalletAccountIdErc20MutationOptions<TError, TOnMutateResult>(
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

export function getPostWalletAccountIdPayMutationKey() {
  return ['wallet', '/wallet/account/:id/pay', 'POST'] as const
}

export function getPostWalletAccountIdPayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallet.account)[':id']['pay']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wallet.account)[':id']['pay']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletAccountIdPayMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wallet.account)[':id']['pay']['$post']>,
    ) {
      return parseResponse(client.wallet.account[':id'].pay.$post(args, options))
    },
  })
}

export function usePostWalletAccountIdPay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wallet.account)[':id']['pay']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wallet.account)[':id']['pay']['$post']>,
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
  const mutationDefaults = getPostWalletAccountIdPayMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsWalletAccountIdPayMutationKey() {
  return ['wallet', '/wallet/account/:id/pay', 'OPTIONS'] as const
}

export function getOptionsWalletAccountIdPayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallet.account)[':id']['pay']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wallet.account)[':id']['pay']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsWalletAccountIdPayMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wallet.account)[':id']['pay']['$options']>,
    ) {
      return parseResponse(client.wallet.account[':id'].pay.$options(args, options))
    },
  })
}

export function useOptionsWalletAccountIdPay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wallet.account)[':id']['pay']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wallet.account)[':id']['pay']['$options']>,
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
  const mutationDefaults = getOptionsWalletAccountIdPayMutationOptions<TError, TOnMutateResult>(
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

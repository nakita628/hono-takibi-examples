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

export function getV1Key() {
  return ['v1'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV1AccountsQueryKey() {
  return ['v1', '/v1/accounts'] as const
}

export function getV1AccountsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AccountsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
          >,
          ReturnType<typeof getV1AccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AccountsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AccountsMutationKey() {
  return ['v1', '/v1/accounts', 'POST'] as const
}

export function getPostV1AccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.accounts.$post>) {
      return parseResponse(client.v1.accounts.$post(args, options))
    },
  })
}

export function usePostV1Accounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.accounts.$post>,
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
  const mutationDefaults = getPostV1AccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AccountsIcanQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':ican']['$get']>>,
) {
  return ['v1', '/v1/accounts/:ican', toValue(args)] as const
}

export function getV1AccountsIcanQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':ican']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsIcanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':ican'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsIcan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':ican']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsIcanQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsIcanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsIcanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':ican'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsIcanTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:ican/transactions', toValue(args)] as const
}

export function getV1AccountsIcanTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsIcanTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':ican'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsIcanTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsIcanTransactionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsIcanTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsIcanTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':ican'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsIcanTransactionsFilterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>
  >,
) {
  return ['v1', '/v1/accounts/:ican/transactions/filter', toValue(args)] as const
}

export function getV1AccountsIcanTransactionsFilterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsIcanTransactionsFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':ican'].transactions.filter.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsIcanTransactionsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>
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
                  ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsIcanTransactionsFilterQueryKey>
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
            ReturnType<(typeof client.v1.accounts)[':ican']['transactions']['filter']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsIcanTransactionsFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsIcanTransactionsFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':ican'].transactions.filter.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AppsMutationKey() {
  return ['v1', '/v1/apps', 'POST'] as const
}

export function getPostV1AppsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.apps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.apps.$post>) {
      return parseResponse(client.v1.apps.$post(args, options))
    },
  })
}

export function usePostV1Apps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.apps.$post>,
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
  const mutationDefaults = getPostV1AppsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1AppsAccesstokensMutationKey() {
  return ['v1', '/v1/apps/accesstokens', 'POST'] as const
}

export function getPostV1AppsAccesstokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.accesstokens.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.apps.accesstokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppsAccesstokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.apps.accesstokens.$post>) {
      return parseResponse(client.v1.apps.accesstokens.$post(args, options))
    },
  })
}

export function usePostV1AppsAccesstokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.accesstokens.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.apps.accesstokens.$post>,
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
  const mutationDefaults = getPostV1AppsAccesstokensMutationOptions<TError, TOnMutateResult>(
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

export function getV1AspspsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.aspsps.$get>>,
) {
  return ['v1', '/v1/aspsps', toValue(args)] as const
}

export function getV1AspspsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.aspsps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AspspsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.aspsps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Aspsps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.aspsps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.aspsps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.aspsps.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.aspsps.$get>>>>
          >,
          ReturnType<typeof getV1AspspsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.aspsps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AspspsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AspspsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.aspsps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.batches.$get>>,
) {
  return ['v1', '/v1/batches', toValue(args)] as const
}

export function getV1BatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.batches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.batches.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Batches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.batches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>
          >,
          ReturnType<typeof getV1BatchesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.batches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1BatchesMutationKey() {
  return ['v1', '/v1/batches', 'POST'] as const
}

export function getPostV1BatchesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.batches.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BatchesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.batches.$post>) {
      return parseResponse(client.v1.batches.$post(args, options))
    },
  })
}

export function usePostV1Batches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.batches.$post>,
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
  const mutationDefaults = getPostV1BatchesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BatchesBatchUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.batches)[':batchUuid']['$get']>>,
) {
  return ['v1', '/v1/batches/:batchUuid', toValue(args)] as const
}

export function getV1BatchesBatchUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.batches)[':batchUuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BatchesBatchUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.batches[':batchUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BatchesBatchUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.batches)[':batchUuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BatchesBatchUuidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchesBatchUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BatchesBatchUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.batches[':batchUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1BatchesBatchUuidMutationKey() {
  return ['v1', '/v1/batches/:batchUuid', 'PUT'] as const
}

export function getPutV1BatchesBatchUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BatchesBatchUuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['$put']>) {
      return parseResponse(client.v1.batches[':batchUuid'].$put(args, options))
    },
  })
}

export function usePutV1BatchesBatchUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.batches)[':batchUuid']['$put']>,
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
  const mutationDefaults = getPutV1BatchesBatchUuidMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1BatchesBatchUuidMutationKey() {
  return ['v1', '/v1/batches/:batchUuid', 'DELETE'] as const
}

export function getDeleteV1BatchesBatchUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BatchesBatchUuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['$delete']>) {
      return parseResponse(client.v1.batches[':batchUuid'].$delete(args, options))
    },
  })
}

export function useDeleteV1BatchesBatchUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.batches)[':batchUuid']['$delete']>,
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
  const mutationDefaults = getDeleteV1BatchesBatchUuidMutationOptions<TError, TOnMutateResult>(
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

export function getV1BatchesBatchUuidApprovalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>
  >,
) {
  return ['v1', '/v1/batches/:batchUuid/approvals', toValue(args)] as const
}

export function getV1BatchesBatchUuidApprovalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BatchesBatchUuidApprovalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.batches[':batchUuid'].approvals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BatchesBatchUuidApprovals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1BatchesBatchUuidApprovalsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['approvals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchesBatchUuidApprovalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BatchesBatchUuidApprovalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.batches[':batchUuid'].approvals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BatchesBatchUuidBanktransfersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>
  >,
) {
  return ['v1', '/v1/batches/:batchUuid/banktransfers', toValue(args)] as const
}

export function getV1BatchesBatchUuidBanktransfersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BatchesBatchUuidBanktransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.batches[':batchUuid'].banktransfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BatchesBatchUuidBanktransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>
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
                  ReturnType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BatchesBatchUuidBanktransfersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchesBatchUuidBanktransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BatchesBatchUuidBanktransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.batches[':batchUuid'].banktransfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1BatchesBatchUuidBanktransfersMutationKey() {
  return ['v1', '/v1/batches/:batchUuid/banktransfers', 'POST'] as const
}

export function getPostV1BatchesBatchUuidBanktransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BatchesBatchUuidBanktransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$post']>,
    ) {
      return parseResponse(client.v1.batches[':batchUuid'].banktransfers.$post(args, options))
    },
  })
}

export function usePostV1BatchesBatchUuidBanktransfers<
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
                  ReturnType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.batches)[':batchUuid']['banktransfers']['$post']>,
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
  const mutationDefaults = getPostV1BatchesBatchUuidBanktransfersMutationOptions<
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

export function getDeleteV1BatchesBatchUuidBanktransfersItemUuidMutationKey() {
  return ['v1', '/v1/batches/:batchUuid/banktransfers/:itemUuid', 'DELETE'] as const
}

export function getDeleteV1BatchesBatchUuidBanktransfersItemUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.batches)[':batchUuid']['banktransfers'][':itemUuid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.batches)[':batchUuid']['banktransfers'][':itemUuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BatchesBatchUuidBanktransfersItemUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.batches)[':batchUuid']['banktransfers'][':itemUuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.batches[':batchUuid'].banktransfers[':itemUuid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1BatchesBatchUuidBanktransfersItemUuid<
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
                    (typeof client.v1.batches)[':batchUuid']['banktransfers'][':itemUuid']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.batches)[':batchUuid']['banktransfers'][':itemUuid']['$delete']
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
  const mutationDefaults = getDeleteV1BatchesBatchUuidBanktransfersItemUuidMutationOptions<
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

export function getV1BatchesBatchUuidInternaltransfersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>
  >,
) {
  return ['v1', '/v1/batches/:batchUuid/internaltransfers', toValue(args)] as const
}

export function getV1BatchesBatchUuidInternaltransfersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BatchesBatchUuidInternaltransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.batches[':batchUuid'].internaltransfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BatchesBatchUuidInternaltransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>
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
                  ReturnType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BatchesBatchUuidInternaltransfersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchesBatchUuidInternaltransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BatchesBatchUuidInternaltransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.batches[':batchUuid'].internaltransfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1BatchesBatchUuidInternaltransfersMutationKey() {
  return ['v1', '/v1/batches/:batchUuid/internaltransfers', 'POST'] as const
}

export function getPostV1BatchesBatchUuidInternaltransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BatchesBatchUuidInternaltransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.batches)[':batchUuid']['internaltransfers']['$post']
      >,
    ) {
      return parseResponse(client.v1.batches[':batchUuid'].internaltransfers.$post(args, options))
    },
  })
}

export function usePostV1BatchesBatchUuidInternaltransfers<
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
                  ReturnType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.batches)[':batchUuid']['internaltransfers']['$post']>,
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
  const mutationDefaults = getPostV1BatchesBatchUuidInternaltransfersMutationOptions<
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

export function getDeleteV1BatchesBatchUuidInternaltransfersItemUuidMutationKey() {
  return ['v1', '/v1/batches/:batchUuid/internaltransfers/:itemUuid', 'DELETE'] as const
}

export function getDeleteV1BatchesBatchUuidInternaltransfersItemUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.batches)[':batchUuid']['internaltransfers'][':itemUuid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.batches)[':batchUuid']['internaltransfers'][':itemUuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BatchesBatchUuidInternaltransfersItemUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.batches)[':batchUuid']['internaltransfers'][':itemUuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.batches[':batchUuid'].internaltransfers[':itemUuid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1BatchesBatchUuidInternaltransfersItemUuid<
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
                    (typeof client.v1.batches)[':batchUuid']['internaltransfers'][':itemUuid']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.batches)[':batchUuid']['internaltransfers'][':itemUuid']['$delete']
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
  const mutationDefaults = getDeleteV1BatchesBatchUuidInternaltransfersItemUuidMutationOptions<
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

export function getV1CardsQueryKey() {
  return ['v1', '/v1/cards'] as const
}

export function getV1CardsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1CardsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.cards.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Cards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>
          >,
          ReturnType<typeof getV1CardsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1CardsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.cards.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1CardsMutationKey() {
  return ['v1', '/v1/cards', 'POST'] as const
}

export function getPostV1CardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.cards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.cards.$post>) {
      return parseResponse(client.v1.cards.$post(args, options))
    },
  })
}

export function usePostV1Cards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.cards.$post>,
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
  const mutationDefaults = getPostV1CardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1CardsCardIdBlockMutationKey() {
  return ['v1', '/v1/cards/:cardId/block', 'POST'] as const
}

export function getPostV1CardsCardIdBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['block']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.cards)[':cardId']['block']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsCardIdBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.cards)[':cardId']['block']['$post']>,
    ) {
      return parseResponse(client.v1.cards[':cardId'].block.$post(args, options))
    },
  })
}

export function usePostV1CardsCardIdBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['block']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.cards)[':cardId']['block']['$post']>,
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
  const mutationDefaults = getPostV1CardsCardIdBlockMutationOptions<TError, TOnMutateResult>(
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

export function getV1CardsCardIdTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>
  >,
) {
  return ['v1', '/v1/cards/:cardId/transactions', toValue(args)] as const
}

export function getV1CardsCardIdTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CardsCardIdTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.cards[':cardId'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CardsCardIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CardsCardIdTransactionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardsCardIdTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CardsCardIdTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.cards[':cardId'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1CardsCardIdUnblockMutationKey() {
  return ['v1', '/v1/cards/:cardId/unblock', 'POST'] as const
}

export function getPostV1CardsCardIdUnblockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['unblock']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.cards)[':cardId']['unblock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CardsCardIdUnblockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.cards)[':cardId']['unblock']['$post']>,
    ) {
      return parseResponse(client.v1.cards[':cardId'].unblock.$post(args, options))
    },
  })
}

export function usePostV1CardsCardIdUnblock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.cards)[':cardId']['unblock']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.cards)[':cardId']['unblock']['$post']>,
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
  const mutationDefaults = getPostV1CardsCardIdUnblockMutationOptions<TError, TOnMutateResult>(
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

export function getV1DirectdebitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.directdebits.$get>>,
) {
  return ['v1', '/v1/directdebits', toValue(args)] as const
}

export function getV1DirectdebitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.directdebits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DirectdebitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.directdebits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Directdebits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.directdebits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.directdebits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.directdebits.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.directdebits.$get>>>
            >
          >,
          ReturnType<typeof getV1DirectdebitsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.directdebits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DirectdebitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DirectdebitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.directdebits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DirectdebitsDirectDebitUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>
  >,
) {
  return ['v1', '/v1/directdebits/:directDebitUuid', toValue(args)] as const
}

export function getV1DirectdebitsDirectDebitUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DirectdebitsDirectDebitUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.directdebits[':directDebitUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DirectdebitsDirectDebitUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DirectdebitsDirectDebitUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.directdebits)[':directDebitUuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DirectdebitsDirectDebitUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DirectdebitsDirectDebitUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.directdebits[':directDebitUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DirectdebitsDirectDebitUuidRejectMutationKey() {
  return ['v1', '/v1/directdebits/:directDebitUuid/reject', 'POST'] as const
}

export function getPostV1DirectdebitsDirectDebitUuidRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.directdebits)[':directDebitUuid']['reject']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.directdebits)[':directDebitUuid']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DirectdebitsDirectDebitUuidRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.directdebits)[':directDebitUuid']['reject']['$post']
      >,
    ) {
      return parseResponse(client.v1.directdebits[':directDebitUuid'].reject.$post(args, options))
    },
  })
}

export function usePostV1DirectdebitsDirectDebitUuidReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.directdebits)[':directDebitUuid']['reject']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.directdebits)[':directDebitUuid']['reject']['$post']>,
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
  const mutationDefaults = getPostV1DirectdebitsDirectDebitUuidRejectMutationOptions<
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

export function getV1MandatesQueryKey() {
  return ['v1', '/v1/mandates'] as const
}

export function getV1MandatesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1MandatesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.mandates.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Mandates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.mandates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.mandates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.mandates.$get>>>>
          >,
          ReturnType<typeof getV1MandatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.mandates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MandatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1MandatesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.mandates.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1MandatesMandateUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$get']>>,
) {
  return ['v1', '/v1/mandates/:mandateUuid', toValue(args)] as const
}

export function getV1MandatesMandateUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MandatesMandateUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.mandates[':mandateUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MandatesMandateUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MandatesMandateUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MandatesMandateUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MandatesMandateUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.mandates[':mandateUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1MandatesMandateUuidMutationKey() {
  return ['v1', '/v1/mandates/:mandateUuid', 'POST'] as const
}

export function getPostV1MandatesMandateUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MandatesMandateUuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$post']>) {
      return parseResponse(client.v1.mandates[':mandateUuid'].$post(args, options))
    },
  })
}

export function usePostV1MandatesMandateUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['$post']>,
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
  const mutationDefaults = getPostV1MandatesMandateUuidMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1MandatesMandateUuidActivateMutationKey() {
  return ['v1', '/v1/mandates/:mandateUuid/activate', 'POST'] as const
}

export function getPostV1MandatesMandateUuidActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['activate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MandatesMandateUuidActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['activate']['$post']>,
    ) {
      return parseResponse(client.v1.mandates[':mandateUuid'].activate.$post(args, options))
    },
  })
}

export function usePostV1MandatesMandateUuidActivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.mandates)[':mandateUuid']['activate']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['activate']['$post']>,
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
  const mutationDefaults = getPostV1MandatesMandateUuidActivateMutationOptions<
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

export function getPostV1MandatesMandateUuidCancelMutationKey() {
  return ['v1', '/v1/mandates/:mandateUuid/cancel', 'POST'] as const
}

export function getPostV1MandatesMandateUuidCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.mandates)[':mandateUuid']['cancel']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MandatesMandateUuidCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['cancel']['$post']>,
    ) {
      return parseResponse(client.v1.mandates[':mandateUuid'].cancel.$post(args, options))
    },
  })
}

export function usePostV1MandatesMandateUuidCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.mandates)[':mandateUuid']['cancel']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.mandates)[':mandateUuid']['cancel']['$post']>,
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
  const mutationDefaults = getPostV1MandatesMandateUuidCancelMutationOptions<
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

export function getV1PayeesQueryKey() {
  return ['v1', '/v1/payees'] as const
}

export function getV1PayeesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PayeesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payees.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Payees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payees.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payees.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payees.$get>>>>
          >,
          ReturnType<typeof getV1PayeesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PayeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PayeesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payees.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PaymentrequestsMutationKey() {
  return ['v1', '/v1/paymentrequests', 'POST'] as const
}

export function getPostV1PaymentrequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentrequests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.paymentrequests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentrequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.paymentrequests.$post>) {
      return parseResponse(client.v1.paymentrequests.$post(args, options))
    },
  })
}

export function usePostV1Paymentrequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentrequests.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.paymentrequests.$post>,
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
  const mutationDefaults = getPostV1PaymentrequestsMutationOptions<TError, TOnMutateResult>(
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

export function getV1PaymentsPaymentUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payments)[':paymentUuid']['$get']>>,
) {
  return ['v1', '/v1/payments/:paymentUuid', toValue(args)] as const
}

export function getV1PaymentsPaymentUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payments)[':paymentUuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentsPaymentUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payments[':paymentUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentsPaymentUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments)[':paymentUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payments)[':paymentUuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':paymentUuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments)[':paymentUuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PaymentsPaymentUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.payments)[':paymentUuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsPaymentUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentsPaymentUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payments[':paymentUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UserUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.user)[':userId']['$get']>>,
) {
  return ['v1', '/v1/user/:userId', toValue(args)] as const
}

export function getV1UserUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.user)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UserUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.user[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UserUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.user)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.user)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.user)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.user)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getV1UserUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.user)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UserUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.user[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersQueryKey() {
  return ['v1', '/v1/users'] as const
}

export function getV1UsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1UsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
          >,
          ReturnType<typeof getV1UsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1UsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3AccountsIcanTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>
  >,
) {
  return ['v3', '/v3/accounts/:ican/transactions', toValue(args)] as const
}

export function getV3AccountsIcanTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3AccountsIcanTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.accounts[':ican'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3AccountsIcanTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3AccountsIcanTransactionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.accounts)[':ican']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3AccountsIcanTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3AccountsIcanTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.accounts[':ican'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

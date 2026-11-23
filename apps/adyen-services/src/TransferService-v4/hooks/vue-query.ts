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

export function getCashoutsKey() {
  return ['cashouts'] as const
}

export function getGrantsKey() {
  return ['grants'] as const
}

export function getTransactionsKey() {
  return ['transactions'] as const
}

export function getTransfersKey() {
  return ['transfers'] as const
}

export function getGrantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.grants.$get>>,
) {
  return ['grants', '/grants', toValue(args)] as const
}

export function getGrantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.grants.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grants.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGrants<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.grants.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
          ReturnType<typeof getGrantsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGrantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.grants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGrantsMutationKey() {
  return ['grants', '/grants', 'POST'] as const
}

export function getPostGrantsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$post>>>>>,
    TError,
    InferRequestType<typeof client.grants.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGrantsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.grants.$post>) {
      return parseResponse(client.grants.$post(args, options))
    },
  })
}

export function usePostGrants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.grants.$post>,
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
  const mutationDefaults = getPostGrantsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGrantsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grants)[':id']['$get']>>,
) {
  return ['grants', '/grants/:id', toValue(args)] as const
}

export function getGrantsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grants)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrantsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.grants[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGrantsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.grants)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getGrantsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGrantsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrantsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.grants[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
) {
  return ['transactions', '/transactions', toValue(args)] as const
}

export function getTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          ReturnType<typeof getTransactionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransactionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':id']['$get']>>,
) {
  return ['transactions', '/transactions/:id', toValue(args)] as const
}

export function getTransactionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTransactionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransfersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transfers.$get>>,
) {
  return ['transfers', '/transfers', toValue(args)] as const
}

export function getTransfersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transfers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transfers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transfers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfers.$get>>>>
          >,
          ReturnType<typeof getTransfersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTransfersMutationKey() {
  return ['transfers', '/transfers', 'POST'] as const
}

export function getPostTransfersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfers.$post>>>>>,
    TError,
    InferRequestType<typeof client.transfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransfersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfers.$post>) {
      return parseResponse(client.transfers.$post(args, options))
    },
  })
}

export function usePostTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.transfers.$post>,
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
  const mutationDefaults = getPostTransfersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTransfersApproveMutationKey() {
  return ['transfers', '/transfers/approve', 'POST'] as const
}

export function getPostTransfersApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfers.approve.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transfers.approve.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransfersApproveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfers.approve.$post>) {
      return parseResponse(client.transfers.approve.$post(args, options))
    },
  })
}

export function usePostTransfersApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfers.approve.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfers.approve.$post>,
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
  const mutationDefaults = getPostTransfersApproveMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransfersCancelMutationKey() {
  return ['transfers', '/transfers/cancel', 'POST'] as const
}

export function getPostTransfersCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfers.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transfers.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransfersCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfers.cancel.$post>) {
      return parseResponse(client.transfers.cancel.$post(args, options))
    },
  })
}

export function usePostTransfersCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transfers.cancel.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transfers.cancel.$post>,
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
  const mutationDefaults = getPostTransfersCancelMutationOptions<TError, TOnMutateResult>(
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

export function getTransfersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transfers)[':id']['$get']>>,
) {
  return ['transfers', '/transfers/:id', toValue(args)] as const
}

export function getTransfersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transfers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransfersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transfers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransfersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transfers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTransfersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransfersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransfersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transfers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTransfersTransferIdReturnsMutationKey() {
  return ['transfers', '/transfers/:transferId/returns', 'POST'] as const
}

export function getPostTransfersTransferIdReturnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transfers)[':transferId']['returns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transfers)[':transferId']['returns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransfersTransferIdReturnsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transfers)[':transferId']['returns']['$post']>,
    ) {
      return parseResponse(client.transfers[':transferId'].returns.$post(args, options))
    },
  })
}

export function usePostTransfersTransferIdReturns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transfers)[':transferId']['returns']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transfers)[':transferId']['returns']['$post']>,
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
  const mutationDefaults = getPostTransfersTransferIdReturnsMutationOptions<
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

export function getPostCashoutsMutationKey() {
  return ['cashouts', '/cashouts', 'POST'] as const
}

export function getPostCashoutsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cashouts.$post>>>>>,
    TError,
    InferRequestType<typeof client.cashouts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCashoutsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cashouts.$post>) {
      return parseResponse(client.cashouts.$post(args, options))
    },
  })
}

export function usePostCashouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cashouts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.cashouts.$post>,
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
  const mutationDefaults = getPostCashoutsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

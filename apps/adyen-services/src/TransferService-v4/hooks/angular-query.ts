import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getGrantsQueryKey(args: InferRequestType<typeof client.grants.$get>) {
  return ['grants', '/grants', args] as const
}

export function getGrantsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.grants.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGrantsQueryKey>
  >({
    queryKey: getGrantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.grants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGrants<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.grants.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGrantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGrantsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostGrants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grants.$post>>>>>,
        TError,
        InferRequestType<typeof client.grants.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGrantsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGrantsIdQueryKey(args: InferRequestType<(typeof client.grants)[':id']['$get']>) {
  return ['grants', '/grants/:id', args] as const
}

export function getGrantsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.grants)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGrantsIdQueryKey>
  >({
    queryKey: getGrantsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.grants[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGrantsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.grants)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.grants)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGrantsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGrantsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTransactionsQueryKey(args: InferRequestType<typeof client.transactions.$get>) {
  return ['transactions', '/transactions', args] as const
}

export function getTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.transactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionsQueryKey>
  >({
    queryKey: getTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTransactionsIdQueryKey(
  args: InferRequestType<(typeof client.transactions)[':id']['$get']>,
) {
  return ['transactions', '/transactions/:id', args] as const
}

export function getTransactionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsIdQueryKey>
  >({
    queryKey: getTransactionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.transactions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTransactionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTransfersQueryKey(args: InferRequestType<typeof client.transfers.$get>) {
  return ['transfers', '/transfers', args] as const
}

export function getTransfersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.transfers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransfersQueryKey>
  >({
    queryKey: getTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transfers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.transfers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTransfersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.transfers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransfersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTransfersApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfers.approve.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfers.approve.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransfersApproveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTransfersCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transfers.cancel.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transfers.cancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransfersCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTransfersIdQueryKey(
  args: InferRequestType<(typeof client.transfers)[':id']['$get']>,
) {
  return ['transfers', '/transfers/:id', args] as const
}

export function getTransfersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transfers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransfersIdQueryKey>
  >({
    queryKey: getTransfersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transfers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTransfersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.transfers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.transfers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransfersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTransfersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTransfersTransferIdReturns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransfersTransferIdReturnsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCashouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cashouts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.cashouts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCashoutsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

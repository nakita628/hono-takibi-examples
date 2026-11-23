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

export function getGiftcardprovidersKey() {
  return ['giftcardproviders'] as const
}

export function getGiftcardprovidersQueryKey(
  args: InferRequestType<typeof client.giftcardproviders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['giftcardproviders', '/giftcardproviders', keyArgs] as const
}

export function getGiftcardprovidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.giftcardproviders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardprovidersQueryKey>
  >({
    queryKey: getGiftcardprovidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGiftcardproviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.giftcardproviders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGiftcardprovidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGiftcardprovidersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutGiftcardprovidersGiftCardProviderIDMutationKey() {
  return ['giftcardproviders', '/giftcardproviders/:giftCardProviderID', 'PUT'] as const
}

export function getPutGiftcardprovidersGiftCardProviderIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGiftcardprovidersGiftCardProviderIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>,
    ) {
      return parseResponse(client.giftcardproviders[':giftCardProviderID'].$put(args, options))
    },
  })
}

export function injectPutGiftcardprovidersGiftCardProviderID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>,
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
    const mutationDefaults = getPutGiftcardprovidersGiftCardProviderIDMutationOptions<
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

export function getDeleteGiftcardprovidersGiftCardProviderIDMutationKey() {
  return ['giftcardproviders', '/giftcardproviders/:giftCardProviderID', 'DELETE'] as const
}

export function getDeleteGiftcardprovidersGiftCardProviderIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGiftcardprovidersGiftCardProviderIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>,
    ) {
      return parseResponse(client.giftcardproviders[':giftCardProviderID'].$delete(args, options))
    },
  })
}

export function injectDeleteGiftcardprovidersGiftCardProviderID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>,
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
    const mutationDefaults = getDeleteGiftcardprovidersGiftCardProviderIDMutationOptions<
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

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsMutationKey() {
  return ['giftcardproviders', '/giftcardproviders/:giftCardProviderID/giftcards', 'POST'] as const
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGiftcardprovidersGiftCardProviderIDGiftcardsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']
      >,
    ) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards.$post(args, options),
      )
    },
  })
}

export function injectPostGiftcardprovidersGiftCardProviderIDGiftcards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']
        >,
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
    const mutationDefaults = getPostGiftcardprovidersGiftCardProviderIDGiftcardsMutationOptions<
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

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsSearchMutationKey() {
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/_search',
    'POST',
  ] as const
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGiftcardprovidersGiftCardProviderIDGiftcardsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
      >,
    ) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards._search.$post(args, options),
      )
    },
  })
}

export function injectPostGiftcardprovidersGiftCardProviderIDGiftcardsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
        >,
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
    const mutationDefaults =
      getPostGiftcardprovidersGiftCardProviderIDGiftcardsSearchMutationOptions<
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

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryKey>
  >({
    queryKey: getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey>
  >({
    queryKey: getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsMutationKey() {
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions',
    'POST',
  ] as const
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
      >,
    ) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
        >,
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
    const mutationDefaults =
      getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsMutationOptions<
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

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/cancellations',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryKey
    >
  >({
    queryKey:
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':tId'
        ].cancellations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsMutationKey() {
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/cancellations',
    'POST',
  ] as const
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
      >,
    ) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':tId'
        ].cancellations.$post(args, options),
      )
    },
  })
}

export function injectPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
        >,
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
    const mutationDefaults =
      getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsMutationOptions<
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

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/settlements',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryKey
    >
  >({
    queryKey:
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':tId'
        ].settlements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsMutationKey() {
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/settlements',
    'POST',
  ] as const
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
      >,
    ) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':tId'
        ].settlements.$post(args, options),
      )
    },
  })
}

export function injectPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
        >,
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
    const mutationDefaults =
      getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsMutationOptions<
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

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:transactionID',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryKey
    >
  >({
    queryKey:
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':transactionID'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:transactionID/authorization',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey
    >
  >({
    queryKey:
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':transactionID'
        ].authorization.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGiftcardprovidersGiftCardProviderIdQueryKey(
  args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['giftcardproviders', '/giftcardproviders/:giftCardProviderId', keyArgs] as const
}

export function getGiftcardprovidersGiftCardProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardprovidersGiftCardProviderIdQueryKey>
  >({
    queryKey: getGiftcardprovidersGiftCardProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGiftcardprovidersGiftCardProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGiftcardprovidersGiftCardProviderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGiftcardprovidersGiftCardProviderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

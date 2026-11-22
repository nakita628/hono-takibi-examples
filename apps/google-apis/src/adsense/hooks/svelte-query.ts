import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAdclientsKey() {
  return ['adclients'] as const
}

export function getAlertsKey() {
  return ['alerts'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getSavedadstylesKey() {
  return ['savedadstyles'] as const
}

export function getAccountsQueryKey(args: InferRequestType<typeof client.accounts.$get>) {
  return ['accounts', '/accounts', args] as const
}

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
) {
  return ['accounts', '/accounts/:accountId', args] as const
}

export function getAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >({
    queryKey: getAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsAccountIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/adclients', args] as const
}

export function getAccountsAccountIdAdclientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdAdclients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAdclientsQueryKey>
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
      ...getAccountsAccountIdAdclientsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsAdClientIdAdcodeQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adcode', args] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdcodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdcodeQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsAdClientIdAdcodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adcode.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdAdclientsAdClientIdAdcode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdcodeQueryKey>
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
      ...getAccountsAccountIdAdclientsAdClientIdAdcodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', args] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdAdclientsAdClientIdAdunits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey>
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
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId', args] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey>
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
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId/adcode',
    args,
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey>
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
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId/customchannels',
    args,
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits[
          ':adUnitId'
        ].customchannels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey
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
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsAdClientIdCustomchannelsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/customchannels', args] as const
}

export function getAccountsAccountIdAdclientsAdClientIdCustomchannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdCustomchannelsQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsAdClientIdCustomchannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].customchannels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdAdclientsAdClientIdCustomchannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdCustomchannelsQueryKey>
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
      ...getAccountsAccountIdAdclientsAdClientIdCustomchannelsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/customchannels/:customChannelId',
    args,
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].customchannels[
          ':customChannelId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey
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
      ...getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/customchannels/:customChannelId/adunits',
    args,
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey
    >
  >({
    queryKey:
      getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].customchannels[
          ':customChannelId'
        ].adunits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey
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
      ...getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdAdclientsAdClientIdUrlchannelsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/urlchannels', args] as const
}

export function getAccountsAccountIdAdclientsAdClientIdUrlchannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdUrlchannelsQueryKey>
  >({
    queryKey: getAccountsAccountIdAdclientsAdClientIdUrlchannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].urlchannels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdAdclientsAdClientIdUrlchannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdUrlchannelsQueryKey>
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
      ...getAccountsAccountIdAdclientsAdClientIdUrlchannelsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdAlertsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['alerts']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/alerts', args] as const
}

export function getAccountsAccountIdAlertsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['alerts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAlertsQueryKey>
  >({
    queryKey: getAccountsAccountIdAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].alerts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['alerts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['alerts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdAlertsQueryKey>
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
      ...getAccountsAccountIdAlertsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteAccountsAccountIdAlertsAlertIdMutationKey() {
  return ['accounts', '/accounts/:accountId/alerts/:alertId', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdAlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['alerts'][':alertId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountId']['alerts'][':alertId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdAlertsAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountId']['alerts'][':alertId']['$delete']
      >,
    ) {
      return parseResponse(client.accounts[':accountId'].alerts[':alertId'].$delete(args, options))
    },
  })
}

export function createDeleteAccountsAccountIdAlertsAlertId<
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
                ReturnType<(typeof client.accounts)[':accountId']['alerts'][':alertId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':accountId']['alerts'][':alertId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountsAccountIdAlertsAlertIdMutationOptions<
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

export function getAccountsAccountIdPaymentsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['payments']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/payments', args] as const
}

export function getAccountsAccountIdPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['payments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdPaymentsQueryKey>
  >({
    queryKey: getAccountsAccountIdPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['payments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['payments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdPaymentsQueryKey>
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
      ...getAccountsAccountIdPaymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdReportsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/reports', args] as const
}

export function getAccountsAccountIdReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdReportsQueryKey>
  >({
    queryKey: getAccountsAccountIdReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdReportsQueryKey>
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
      ...getAccountsAccountIdReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdReportsSavedQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/reports/saved', args] as const
}

export function getAccountsAccountIdReportsSavedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdReportsSavedQueryKey>
  >({
    queryKey: getAccountsAccountIdReportsSavedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].reports.saved.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdReportsSaved<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdReportsSavedQueryKey>
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
      ...getAccountsAccountIdReportsSavedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdReportsSavedReportIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/reports/:savedReportId', args] as const
}

export function getAccountsAccountIdReportsSavedReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdReportsSavedReportIdQueryKey>
  >({
    queryKey: getAccountsAccountIdReportsSavedReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].reports[':savedReportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdReportsSavedReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdReportsSavedReportIdQueryKey>
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
      ...getAccountsAccountIdReportsSavedReportIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdSavedadstylesQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>,
) {
  return ['accounts', '/accounts/:accountId/savedadstyles', args] as const
}

export function getAccountsAccountIdSavedadstylesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdSavedadstylesQueryKey>
  >({
    queryKey: getAccountsAccountIdSavedadstylesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].savedadstyles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdSavedadstyles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdSavedadstylesQueryKey>
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
      ...getAccountsAccountIdSavedadstylesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAccountIdSavedadstylesSavedAdStyleIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountId/savedadstyles/:savedAdStyleId', args] as const
}

export function getAccountsAccountIdSavedadstylesSavedAdStyleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdSavedadstylesSavedAdStyleIdQueryKey>
  >({
    queryKey: getAccountsAccountIdSavedadstylesSavedAdStyleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].savedadstyles[':savedAdStyleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountIdSavedadstylesSavedAdStyleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdSavedadstylesSavedAdStyleIdQueryKey>
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
      ...getAccountsAccountIdSavedadstylesSavedAdStyleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAdclientsQueryKey(args: InferRequestType<typeof client.adclients.$get>) {
  return ['adclients', '/adclients', args] as const
}

export function getAdclientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.adclients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdclientsQueryKey>
  >({
    queryKey: getAdclientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAdclients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.adclients.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdclientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAdclientsAdClientIdAdunitsQueryKey(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['adunits']['$get']>,
) {
  return ['adclients', '/adclients/:adClientId/adunits', args] as const
}

export function getAdclientsAdClientIdAdunitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adclients)[':adClientId']['adunits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['adunits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['adunits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdAdunitsQueryKey>
  >({
    queryKey: getAdclientsAdClientIdAdunitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients[':adClientId'].adunits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdclientsAdClientIdAdunits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adclients)[':adClientId']['adunits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.adclients)[':adClientId']['adunits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.adclients)[':adClientId']['adunits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsAdClientIdAdunitsQueryKey>
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
      ...getAdclientsAdClientIdAdunitsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAdclientsAdClientIdAdunitsAdUnitIdQueryKey(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>,
) {
  return ['adclients', '/adclients/:adClientId/adunits/:adUnitId', args] as const
}

export function getAdclientsAdClientIdAdunitsAdUnitIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdAdunitsAdUnitIdQueryKey>
  >({
    queryKey: getAdclientsAdClientIdAdunitsAdUnitIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients[':adClientId'].adunits[':adUnitId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdclientsAdClientIdAdunitsAdUnitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsAdClientIdAdunitsAdUnitIdQueryKey>
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
      ...getAdclientsAdClientIdAdunitsAdUnitIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
) {
  return ['adclients', '/adclients/:adClientId/adunits/:adUnitId/adcode', args] as const
}

export function getAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey>
  >({
    queryKey: getAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdclientsAdClientIdAdunitsAdUnitIdAdcode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey>
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
      ...getAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
) {
  return ['adclients', '/adclients/:adClientId/adunits/:adUnitId/customchannels', args] as const
}

export function getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey>
  >({
    queryKey: getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients[':adClientId'].adunits[':adUnitId'].customchannels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdclientsAdClientIdAdunitsAdUnitIdCustomchannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey>
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
      ...getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAdclientsAdClientIdCustomchannelsQueryKey(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>,
) {
  return ['adclients', '/adclients/:adClientId/customchannels', args] as const
}

export function getAdclientsAdClientIdCustomchannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdCustomchannelsQueryKey>
  >({
    queryKey: getAdclientsAdClientIdCustomchannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients[':adClientId'].customchannels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdclientsAdClientIdCustomchannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsAdClientIdCustomchannelsQueryKey>
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
      ...getAdclientsAdClientIdCustomchannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
  >,
) {
  return ['adclients', '/adclients/:adClientId/customchannels/:customChannelId', args] as const
}

export function getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey>
  >({
    queryKey: getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients[':adClientId'].customchannels[':customChannelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdclientsAdClientIdCustomchannelsCustomChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey>
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
      ...getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
) {
  return [
    'adclients',
    '/adclients/:adClientId/customchannels/:customChannelId/adunits',
    args,
  ] as const
}

export function getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey>
  >({
    queryKey: getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients[':adClientId'].customchannels[':customChannelId'].adunits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdclientsAdClientIdCustomchannelsCustomChannelIdAdunits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey>
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
      ...getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAdclientsAdClientIdUrlchannelsQueryKey(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>,
) {
  return ['adclients', '/adclients/:adClientId/urlchannels', args] as const
}

export function getAdclientsAdClientIdUrlchannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdUrlchannelsQueryKey>
  >({
    queryKey: getAdclientsAdClientIdUrlchannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adclients[':adClientId'].urlchannels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdclientsAdClientIdUrlchannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdclientsAdClientIdUrlchannelsQueryKey>
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
      ...getAdclientsAdClientIdUrlchannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAlertsQueryKey(args: InferRequestType<typeof client.alerts.$get>) {
  return ['alerts', '/alerts', args] as const
}

export function getAlertsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.alerts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAlertsQueryKey>
  >({
    queryKey: getAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAlerts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.alerts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlertsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteAlertsAlertIdMutationKey() {
  return ['alerts', '/alerts/:alertId', 'DELETE'] as const
}

export function getDeleteAlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alertId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.alerts)[':alertId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAlertsAlertIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.alerts)[':alertId']['$delete']>) {
      return parseResponse(client.alerts[':alertId'].$delete(args, options))
    },
  })
}

export function createDeleteAlertsAlertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alertId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.alerts)[':alertId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAlertsAlertIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMetadataDimensionsQueryKey(
  args: InferRequestType<typeof client.metadata.dimensions.$get>,
) {
  return ['metadata', '/metadata/dimensions', args] as const
}

export function getMetadataDimensionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metadata.dimensions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataDimensionsQueryKey>
  >({
    queryKey: getMetadataDimensionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.dimensions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetadataDimensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metadata.dimensions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataDimensionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetadataDimensionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetadataMetricsQueryKey(
  args: InferRequestType<typeof client.metadata.metrics.$get>,
) {
  return ['metadata', '/metadata/metrics', args] as const
}

export function getMetadataMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metadata.metrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataMetricsQueryKey>
  >({
    queryKey: getMetadataMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.metrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetadataMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metadata.metrics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetadataMetricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPaymentsQueryKey(args: InferRequestType<typeof client.payments.$get>) {
  return ['payments', '/payments', args] as const
}

export function getPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPaymentsQueryKey>
  >({
    queryKey: getPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.payments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportsQueryKey(args: InferRequestType<typeof client.reports.$get>) {
  return ['reports', '/reports', args] as const
}

export function getReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsQueryKey>
  >({
    queryKey: getReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportsSavedQueryKey(args: InferRequestType<typeof client.reports.saved.$get>) {
  return ['reports', '/reports/saved', args] as const
}

export function getReportsSavedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reports.saved.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsSavedQueryKey>
  >({
    queryKey: getReportsSavedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.saved.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReportsSaved<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reports.saved.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportsSavedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsSavedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportsSavedReportIdQueryKey(
  args: InferRequestType<(typeof client.reports)[':savedReportId']['$get']>,
) {
  return ['reports', '/reports/:savedReportId', args] as const
}

export function getReportsSavedReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':savedReportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':savedReportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':savedReportId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsSavedReportIdQueryKey>
  >({
    queryKey: getReportsSavedReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports[':savedReportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportsSavedReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':savedReportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reports)[':savedReportId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports)[':savedReportId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsSavedReportIdQueryKey>
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
      ...getReportsSavedReportIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSavedadstylesQueryKey(args: InferRequestType<typeof client.savedadstyles.$get>) {
  return ['savedadstyles', '/savedadstyles', args] as const
}

export function getSavedadstylesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.savedadstyles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSavedadstylesQueryKey>
  >({
    queryKey: getSavedadstylesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.savedadstyles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSavedadstyles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.savedadstyles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSavedadstylesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSavedadstylesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSavedadstylesSavedAdStyleIdQueryKey(
  args: InferRequestType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>,
) {
  return ['savedadstyles', '/savedadstyles/:savedAdStyleId', args] as const
}

export function getSavedadstylesSavedAdStyleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSavedadstylesSavedAdStyleIdQueryKey>
  >({
    queryKey: getSavedadstylesSavedAdStyleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.savedadstyles[':savedAdStyleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSavedadstylesSavedAdStyleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSavedadstylesSavedAdStyleIdQueryKey>
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
      ...getSavedadstylesSavedAdStyleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

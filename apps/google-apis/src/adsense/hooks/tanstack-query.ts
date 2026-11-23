import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAccountsAccountIdAdclients<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdAdclientsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdAdclients<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdAdclientsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdAdclientsAdClientIdAdcode<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdAdcodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdAdclientsAdClientIdAdcode<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdAdcodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdAdclientsAdClientIdAdunits<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdAdclientsAdClientIdAdunits<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcode<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcode<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannels<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannels<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdAdclientsAdClientIdCustomchannels<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdCustomchannelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdAdclientsAdClientIdCustomchannels<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdCustomchannelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunits<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunits<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdAdclientsAdClientIdUrlchannels<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdUrlchannelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdAdclientsAdClientIdUrlchannels<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdAdclientsAdClientIdUrlchannelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdAlerts<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdAlertsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdAlerts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdAlertsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDeleteAccountsAccountIdAlertsAlertId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsAccountIdAlertsAlertIdMutationOptions<
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

export function useAccountsAccountIdPayments<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdPaymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdPayments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdPaymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdReports<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdReports<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdReportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdReportsSaved<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdReportsSavedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdReportsSaved<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdReportsSavedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdReportsSavedReportId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdReportsSavedReportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdReportsSavedReportId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdReportsSavedReportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdSavedadstyles<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdSavedadstylesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdSavedadstyles<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdSavedadstylesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAccountsAccountIdSavedadstylesSavedAdStyleId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountsAccountIdSavedadstylesSavedAdStyleIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdSavedadstylesSavedAdStyleId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountsAccountIdSavedadstylesSavedAdStyleIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAdclients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.adclients.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdclientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdclients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.adclients.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdclientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAdclientsAdClientIdAdunits<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdclientsAdClientIdAdunitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdclientsAdClientIdAdunits<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdclientsAdClientIdAdunitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAdclientsAdClientIdAdunitsAdUnitId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdclientsAdClientIdAdunitsAdUnitIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdclientsAdClientIdAdunitsAdUnitId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdclientsAdClientIdAdunitsAdUnitIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAdclientsAdClientIdAdunitsAdUnitIdAdcode<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdclientsAdClientIdAdunitsAdUnitIdAdcode<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAdclientsAdClientIdAdunitsAdUnitIdCustomchannels<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdclientsAdClientIdAdunitsAdUnitIdCustomchannels<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAdclientsAdClientIdCustomchannels<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdclientsAdClientIdCustomchannelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdclientsAdClientIdCustomchannels<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdclientsAdClientIdCustomchannelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAdclientsAdClientIdCustomchannelsCustomChannelId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdclientsAdClientIdCustomchannelsCustomChannelId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAdclientsAdClientIdCustomchannelsCustomChannelIdAdunits<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdclientsAdClientIdCustomchannelsCustomChannelIdAdunits<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAdclientsAdClientIdUrlchannels<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdclientsAdClientIdUrlchannelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdclientsAdClientIdUrlchannels<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdclientsAdClientIdUrlchannelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAlerts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.alerts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAlertsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAlerts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.alerts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAlertsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDeleteAlertsAlertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAlertsAlertIdMutationOptions<TError, TOnMutateResult>(
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

export function useMetadataDimensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata.dimensions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetadataDimensionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetadataDimensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata.dimensions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetadataDimensionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useMetadataMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata.metrics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetadataMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetadataMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.metadata.metrics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetadataMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useReportsSaved<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.saved.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportsSavedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportsSaved<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.reports.saved.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportsSavedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useReportsSavedReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':savedReportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':savedReportId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportsSavedReportIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportsSavedReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':savedReportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':savedReportId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportsSavedReportIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSavedadstyles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.savedadstyles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSavedadstylesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSavedadstyles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.savedadstyles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSavedadstylesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSavedadstylesSavedAdStyleId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSavedadstylesSavedAdStyleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSavedadstylesSavedAdStyleId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSavedadstylesSavedAdStyleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

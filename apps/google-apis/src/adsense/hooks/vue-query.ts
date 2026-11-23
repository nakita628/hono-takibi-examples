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

export function getAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
) {
  return ['accounts', '/accounts', toValue(args)] as const
}

export function getAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          ReturnType<typeof getAccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
) {
  return ['accounts', '/accounts/:accountId', toValue(args)] as const
}

export function getAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAdclientsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients', toValue(args)] as const
}

export function getAccountsAccountIdAdclientsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAdclientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['adclients']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdAdclientsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['adclients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAdclientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdAdclientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAdclientsAdClientIdAdcodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
    >
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adcode', toValue(args)] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdcodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdAdcodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adcode.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adcode']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdcodeQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdAdcodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].adcode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
    >
  >,
) {
  return ['accounts', '/accounts/:accountId/adclients/:adClientId/adunits', toValue(args)] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdAdunitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].adunits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
    >
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId',
    toValue(args),
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
    >
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId/adcode',
    toValue(args),
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['adcode']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
    >
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/adunits/:adUnitId/customchannels',
    toValue(args),
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].adunits[
          ':adUnitId'
        ].customchannels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].adunits[
            ':adUnitId'
          ].customchannels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAdclientsAdClientIdCustomchannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
    >
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/customchannels',
    toValue(args),
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdCustomchannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdCustomchannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].customchannels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdCustomchannelsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdCustomchannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].customchannels.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
    >
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/customchannels/:customChannelId',
    toValue(args),
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].customchannels[
          ':customChannelId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].customchannels[
            ':customChannelId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
    >
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/customchannels/:customChannelId/adunits',
    toValue(args),
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].customchannels[
          ':customChannelId'
        ].adunits.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].customchannels[
            ':customChannelId'
          ].adunits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAdclientsAdClientIdUrlchannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
    >
  >,
) {
  return [
    'accounts',
    '/accounts/:accountId/adclients/:adClientId/urlchannels',
    toValue(args),
  ] as const
}

export function getAccountsAccountIdAdclientsAdClientIdUrlchannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdUrlchannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].adclients[':adClientId'].urlchannels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['adclients'][':adClientId']['urlchannels']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAccountsAccountIdAdclientsAdClientIdUrlchannelsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdAdclientsAdClientIdUrlchannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].adclients[':adClientId'].urlchannels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAlertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['alerts']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/alerts', toValue(args)] as const
}

export function getAccountsAccountIdAlertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['alerts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['alerts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['alerts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdAlertsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['alerts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.accounts)[':accountId']['alerts'][':alertId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':accountId']['alerts'][':alertId']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['payments']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/payments', toValue(args)] as const
}

export function getAccountsAccountIdPaymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['payments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['payments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['payments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdPaymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['payments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/reports', toValue(args)] as const
}

export function getAccountsAccountIdReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['reports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdReportsSavedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/reports/saved', toValue(args)] as const
}

export function getAccountsAccountIdReportsSavedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdReportsSavedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].reports.saved.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdReportsSavedQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['reports']['saved']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdReportsSavedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdReportsSavedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].reports.saved.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdReportsSavedReportIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/reports/:savedReportId', toValue(args)] as const
}

export function getAccountsAccountIdReportsSavedReportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdReportsSavedReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].reports[':savedReportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAccountsAccountIdReportsSavedReportIdQueryKey>
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
            ReturnType<(typeof client.accounts)[':accountId']['reports'][':savedReportId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdReportsSavedReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdReportsSavedReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].reports[':savedReportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdSavedadstylesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountId/savedadstyles', toValue(args)] as const
}

export function getAccountsAccountIdSavedadstylesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdSavedadstylesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].savedadstyles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdSavedadstylesQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['savedadstyles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdSavedadstylesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdSavedadstylesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].savedadstyles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdSavedadstylesSavedAdStyleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
    >
  >,
) {
  return ['accounts', '/accounts/:accountId/savedadstyles/:savedAdStyleId', toValue(args)] as const
}

export function getAccountsAccountIdSavedadstylesSavedAdStyleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdSavedadstylesSavedAdStyleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountId'].savedadstyles[':savedAdStyleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountId']['savedadstyles'][':savedAdStyleId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAccountsAccountIdSavedadstylesSavedAdStyleIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdSavedadstylesSavedAdStyleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountId'].savedadstyles[':savedAdStyleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdclientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adclients.$get>>,
) {
  return ['adclients', '/adclients', toValue(args)] as const
}

export function getAdclientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adclients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdclientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdclients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adclients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>
          >,
          ReturnType<typeof getAdclientsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adclients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdclientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdclientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdclientsAdClientIdAdunitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['adunits']['$get']>
  >,
) {
  return ['adclients', '/adclients/:adClientId/adunits', toValue(args)] as const
}

export function getAdclientsAdClientIdAdunitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['adunits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdclientsAdClientIdAdunitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients[':adClientId'].adunits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['adunits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.adclients)[':adClientId']['adunits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdclientsAdClientIdAdunitsQueryKey>
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
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['adunits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdAdunitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdclientsAdClientIdAdunitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients[':adClientId'].adunits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdclientsAdClientIdAdunitsAdUnitIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>
  >,
) {
  return ['adclients', '/adclients/:adClientId/adunits/:adUnitId', toValue(args)] as const
}

export function getAdclientsAdClientIdAdunitsAdUnitIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdclientsAdClientIdAdunitsAdUnitIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients[':adClientId'].adunits[':adUnitId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']
                  >
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
                  ReturnType<
                    (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdclientsAdClientIdAdunitsAdUnitIdQueryKey>
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
            ReturnType<(typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdAdunitsAdUnitIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdclientsAdClientIdAdunitsAdUnitIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients[':adClientId'].adunits[':adUnitId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
    >
  >,
) {
  return ['adclients', '/adclients/:adClientId/adunits/:adUnitId/adcode', toValue(args)] as const
}

export function getAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['adcode']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdclientsAdClientIdAdunitsAdUnitIdAdcodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients[':adClientId'].adunits[':adUnitId'].adcode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
    >
  >,
) {
  return [
    'adclients',
    '/adclients/:adClientId/adunits/:adUnitId/customchannels',
    toValue(args),
  ] as const
}

export function getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients[':adClientId'].adunits[':adUnitId'].customchannels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['adunits'][':adUnitId']['customchannels']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients[':adClientId'].adunits[':adUnitId'].customchannels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdclientsAdClientIdCustomchannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>
  >,
) {
  return ['adclients', '/adclients/:adClientId/customchannels', toValue(args)] as const
}

export function getAdclientsAdClientIdCustomchannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdclientsAdClientIdCustomchannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients[':adClientId'].customchannels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdclientsAdClientIdCustomchannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['customchannels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdCustomchannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdclientsAdClientIdCustomchannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients[':adClientId'].customchannels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
    >
  >,
) {
  return [
    'adclients',
    '/adclients/:adClientId/customchannels/:customChannelId',
    toValue(args),
  ] as const
}

export function getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients[':adClientId'].customchannels[':customChannelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdclientsAdClientIdCustomchannelsCustomChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients[':adClientId'].customchannels[':customChannelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
    >
  >,
) {
  return [
    'adclients',
    '/adclients/:adClientId/customchannels/:customChannelId/adunits',
    toValue(args),
  ] as const
}

export function getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients[':adClientId'].customchannels[':customChannelId'].adunits.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.adclients)[':adClientId']['customchannels'][':customChannelId']['adunits']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients[':adClientId'].customchannels[':customChannelId'].adunits.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAdclientsAdClientIdUrlchannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>
  >,
) {
  return ['adclients', '/adclients/:adClientId/urlchannels', toValue(args)] as const
}

export function getAdclientsAdClientIdUrlchannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdclientsAdClientIdUrlchannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adclients[':adClientId'].urlchannels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdclientsAdClientIdUrlchannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.adclients)[':adClientId']['urlchannels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdclientsAdClientIdUrlchannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdclientsAdClientIdUrlchannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adclients[':adClientId'].urlchannels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.$get>>,
) {
  return ['alerts', '/alerts', toValue(args)] as const
}

export function getAlertsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAlerts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
          ReturnType<typeof getAlertsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.alerts)[':alertId']['$delete']>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata.dimensions.$get>>,
) {
  return ['metadata', '/metadata/dimensions', toValue(args)] as const
}

export function getMetadataDimensionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata.dimensions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataDimensionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata.dimensions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataDimensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata.dimensions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>
            >
          >,
          ReturnType<typeof getMetadataDimensionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.dimensions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataDimensionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataDimensionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata.dimensions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetadataMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata.metrics.$get>>,
) {
  return ['metadata', '/metadata/metrics', toValue(args)] as const
}

export function getMetadataMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata.metrics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata.metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata.metrics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>
            >
          >,
          ReturnType<typeof getMetadataMetricsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata.metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payments.$get>>,
) {
  return ['payments', '/payments', toValue(args)] as const
}

export function getPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>
          >,
          ReturnType<typeof getPaymentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.$get>>,
) {
  return ['reports', '/reports', toValue(args)] as const
}

export function getReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
          >,
          ReturnType<typeof getReportsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsSavedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.saved.$get>>,
) {
  return ['reports', '/reports/saved', toValue(args)] as const
}

export function getReportsSavedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.saved.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsSavedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.saved.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsSaved<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.saved.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
          >,
          ReturnType<typeof getReportsSavedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.saved.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsSavedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsSavedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.saved.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsSavedReportIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports)[':savedReportId']['$get']>>,
) {
  return ['reports', '/reports/:savedReportId', toValue(args)] as const
}

export function getReportsSavedReportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports)[':savedReportId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsSavedReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports[':savedReportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsSavedReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':savedReportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports)[':savedReportId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports)[':savedReportId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportsSavedReportIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':savedReportId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsSavedReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsSavedReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports[':savedReportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSavedadstylesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.savedadstyles.$get>>,
) {
  return ['savedadstyles', '/savedadstyles', toValue(args)] as const
}

export function getSavedadstylesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.savedadstyles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSavedadstylesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.savedadstyles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSavedadstyles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.savedadstyles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
          >,
          ReturnType<typeof getSavedadstylesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.savedadstyles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSavedadstylesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSavedadstylesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.savedadstyles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSavedadstylesSavedAdStyleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>
  >,
) {
  return ['savedadstyles', '/savedadstyles/:savedAdStyleId', toValue(args)] as const
}

export function getSavedadstylesSavedAdStyleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSavedadstylesSavedAdStyleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.savedadstyles[':savedAdStyleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSavedadstylesSavedAdStyleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.savedadstyles)[':savedAdStyleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSavedadstylesSavedAdStyleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSavedadstylesSavedAdStyleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.savedadstyles[':savedAdStyleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

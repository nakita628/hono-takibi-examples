import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountInfoKey() {
  return ['account-info'] as const
}

export function getAccountInfo202609ActivityAuditLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['account-info']['2026-09']['activity']['audit-logs']['$get']>
  >,
) {
  return ['account-info', '/account-info/2026-09/activity/audit-logs', toValue(args)] as const
}

export function getAccountInfo202609ActivityAuditLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['account-info']['2026-09']['activity']['audit-logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInfo202609ActivityAuditLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['account-info']['2026-09'].activity['audit-logs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInfo202609ActivityAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['account-info']['2026-09']['activity']['audit-logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['account-info']['2026-09']['activity']['audit-logs']['$get']>
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
                    (typeof client)['account-info']['2026-09']['activity']['audit-logs']['$get']
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
                    (typeof client)['account-info']['2026-09']['activity']['audit-logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountInfo202609ActivityAuditLogsQueryKey>
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
            ReturnType<(typeof client)['account-info']['2026-09']['activity']['audit-logs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInfo202609ActivityAuditLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInfo202609ActivityAuditLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['account-info']['2026-09'].activity['audit-logs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountInfo202609ActivityLoginQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['account-info']['2026-09']['activity']['login']['$get']>
  >,
) {
  return ['account-info', '/account-info/2026-09/activity/login', toValue(args)] as const
}

export function getAccountInfo202609ActivityLoginQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['account-info']['2026-09']['activity']['login']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInfo202609ActivityLoginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['account-info']['2026-09'].activity.login.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInfo202609ActivityLogin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account-info']['2026-09']['activity']['login']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['account-info']['2026-09']['activity']['login']['$get']>
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
                    (typeof client)['account-info']['2026-09']['activity']['login']['$get']
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
                    (typeof client)['account-info']['2026-09']['activity']['login']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountInfo202609ActivityLoginQueryKey>
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
            ReturnType<(typeof client)['account-info']['2026-09']['activity']['login']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInfo202609ActivityLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInfo202609ActivityLoginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['account-info']['2026-09'].activity.login.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountInfo202609ActivitySecurityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['account-info']['2026-09']['activity']['security']['$get']>
  >,
) {
  return ['account-info', '/account-info/2026-09/activity/security', toValue(args)] as const
}

export function getAccountInfo202609ActivitySecurityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['account-info']['2026-09']['activity']['security']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountInfo202609ActivitySecurityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['account-info']['2026-09'].activity.security.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountInfo202609ActivitySecurity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['account-info']['2026-09']['activity']['security']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['account-info']['2026-09']['activity']['security']['$get']>
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
                    (typeof client)['account-info']['2026-09']['activity']['security']['$get']
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
                    (typeof client)['account-info']['2026-09']['activity']['security']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountInfo202609ActivitySecurityQueryKey>
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
            ReturnType<(typeof client)['account-info']['2026-09']['activity']['security']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInfo202609ActivitySecurityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountInfo202609ActivitySecurityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['account-info']['2026-09'].activity.security.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountInfoKey() {
  return ['account-info'] as const
}

export function getAccountInfo202609ActivityAuditLogsQueryKey(
  args: InferRequestType<
    (typeof client)['account-info']['2026-09']['activity']['audit-logs']['$get']
  >,
) {
  return ['account-info', '/account-info/2026-09/activity/audit-logs', args] as const
}

export function getAccountInfo202609ActivityAuditLogsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['account-info']['2026-09']['activity']['audit-logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountInfo202609ActivityAuditLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['account-info']['2026-09'].activity['audit-logs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountInfo202609ActivityAuditLogs<
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
  args: () => InferRequestType<
    (typeof client)['account-info']['2026-09']['activity']['audit-logs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAccountInfo202609ActivityAuditLogsQueryKey>
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
      ...getAccountInfo202609ActivityAuditLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountInfo202609ActivityLoginQueryKey(
  args: InferRequestType<(typeof client)['account-info']['2026-09']['activity']['login']['$get']>,
) {
  return ['account-info', '/account-info/2026-09/activity/login', args] as const
}

export function getAccountInfo202609ActivityLoginQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account-info']['2026-09']['activity']['login']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['account-info']['2026-09']['activity']['login']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountInfo202609ActivityLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['account-info']['2026-09'].activity.login.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountInfo202609ActivityLogin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account-info']['2026-09']['activity']['login']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['account-info']['2026-09']['activity']['login']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountInfo202609ActivityLoginQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountInfo202609ActivitySecurityQueryKey(
  args: InferRequestType<
    (typeof client)['account-info']['2026-09']['activity']['security']['$get']
  >,
) {
  return ['account-info', '/account-info/2026-09/activity/security', args] as const
}

export function getAccountInfo202609ActivitySecurityQueryOptions<
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
  args: InferRequestType<
    (typeof client)['account-info']['2026-09']['activity']['security']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountInfo202609ActivitySecurityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['account-info']['2026-09'].activity.security.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountInfo202609ActivitySecurity<
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
  args: () => InferRequestType<
    (typeof client)['account-info']['2026-09']['activity']['security']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAccountInfo202609ActivitySecurityQueryKey>
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
      ...getAccountInfo202609ActivitySecurityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

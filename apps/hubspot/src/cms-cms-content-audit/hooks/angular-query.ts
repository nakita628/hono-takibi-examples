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

export function getCmsKey() {
  return ['cms'] as const
}

export function getCmsAuditLogs202609QueryKey(
  args: InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['$get']>,
) {
  return ['cms', '/cms/audit-logs/2026-09', args] as const
}

export function getCmsAuditLogs202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsAuditLogs202609QueryKey>
  >({
    queryKey: getCmsAuditLogs202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['audit-logs']['2026-09'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCmsAuditLogs202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsAuditLogs202609QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCmsAuditLogs202609QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCmsAuditLogs202609ExportMutationKey() {
  return ['cms', '/cms/audit-logs/2026-09/export', 'POST'] as const
}

export function getPostCmsAuditLogs202609ExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['export']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsAuditLogs202609ExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['export']['$post']>,
    ) {
      return parseResponse(client.cms['audit-logs']['2026-09'].export.$post(args, options))
    },
  })
}

export function injectPostCmsAuditLogs202609Export<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['export']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['export']['$post']>,
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
    const mutationDefaults = getPostCmsAuditLogs202609ExportMutationOptions<
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

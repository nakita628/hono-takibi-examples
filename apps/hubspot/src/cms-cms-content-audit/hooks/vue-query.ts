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

export function getCmsKey() {
  return ['cms'] as const
}

export function getCmsAuditLogs202609QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>,
) {
  return ['cms', '/cms/audit-logs/2026-09', toValue(args)] as const
}

export function getCmsAuditLogs202609QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsAuditLogs202609QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['audit-logs']['2026-09'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsAuditLogs202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCmsAuditLogs202609QueryKey>
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
          Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsAuditLogs202609QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsAuditLogs202609QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['audit-logs']['2026-09'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCmsAuditLogs202609Export<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.cms)['audit-logs']['2026-09']['export']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['export']['$post']>,
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
  const mutationDefaults = getPostCmsAuditLogs202609ExportMutationOptions<TError, TOnMutateResult>(
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

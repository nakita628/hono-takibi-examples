import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCmsKey() {
  return ['cms'] as const
}

export function getGetCmsAuditLogs202609Key(
  args: InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['$get']>,
) {
  return ['cms', '/cms/audit-logs/2026-09', args] as const
}

export function useGetCmsAuditLogs202609<TError = unknown>(
  args: InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCmsAuditLogs202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms['audit-logs']['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsAuditLogs202609<TError = unknown>(
  args: InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCmsAuditLogs202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms['audit-logs']['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCmsAuditLogs202609ExportKey() {
  return ['cms', '/cms/audit-logs/2026-09/export', 'POST'] as const
}

export function usePostCmsAuditLogs202609Export<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['audit-logs']['2026-09']['export']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsAuditLogs202609ExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cms)['audit-logs']['2026-09']['export']['$post']>
        },
      ) => parseResponse(client.cms['audit-logs']['2026-09'].export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

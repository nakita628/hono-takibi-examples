import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getImportApplicationUsageKey() {
  return ['importApplicationUsage'] as const
}

export function getReportDefinitionKey() {
  return ['reportDefinition'] as const
}

export function getGetReportDefinitionReportIdKey(
  args: InferRequestType<(typeof client.reportDefinition)[':reportId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['reportDefinition', '/reportDefinition/:reportId', keyArgs] as const
}

export function useGetReportDefinitionReportId<TError = unknown>(
  args: InferRequestType<(typeof client.reportDefinition)[':reportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$get']>>
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
        ? getGetReportDefinitionReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reportDefinition[':reportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportDefinitionReportId<TError = unknown>(
  args: InferRequestType<(typeof client.reportDefinition)[':reportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$get']>>
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
        ? getGetReportDefinitionReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reportDefinition[':reportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutReportDefinitionReportIdKey() {
  return ['reportDefinition', '/reportDefinition/:reportId', 'PUT'] as const
}

export function usePutReportDefinitionReportId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reportDefinition)[':reportId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReportDefinitionReportIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reportDefinition)[':reportId']['$put']> },
      ) => parseResponse(client.reportDefinition[':reportId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteReportDefinitionReportIdKey() {
  return ['reportDefinition', '/reportDefinition/:reportId', 'DELETE'] as const
}

export function useDeleteReportDefinitionReportId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reportDefinition)[':reportId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReportDefinitionReportIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.reportDefinition)[':reportId']['$delete']> },
      ) => parseResponse(client.reportDefinition[':reportId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImportApplicationUsageKey() {
  return ['importApplicationUsage', '/importApplicationUsage', 'POST'] as const
}

export function usePostImportApplicationUsage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.importApplicationUsage.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.importApplicationUsage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImportApplicationUsageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.importApplicationUsage.$post> },
      ) => parseResponse(client.importApplicationUsage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportDefinitionKey(
  args: InferRequestType<typeof client.reportDefinition.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['reportDefinition', '/reportDefinition', keyArgs] as const
}

export function useGetReportDefinition<TError = unknown>(
  args: InferRequestType<typeof client.reportDefinition.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$get>>>>
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
        ? getGetReportDefinitionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reportDefinition.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportDefinition<TError = unknown>(
  args: InferRequestType<typeof client.reportDefinition.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$get>>>>
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
        ? getGetReportDefinitionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reportDefinition.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReportDefinitionKey() {
  return ['reportDefinition', '/reportDefinition', 'POST'] as const
}

export function usePostReportDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reportDefinition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportDefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reportDefinition.$post> }) =>
        parseResponse(client.reportDefinition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

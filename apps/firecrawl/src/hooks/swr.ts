import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAgentKey() {
  return ['agent'] as const
}

export function getBatchKey() {
  return ['batch'] as const
}

export function getCrawlKey() {
  return ['crawl'] as const
}

export function getExtractKey() {
  return ['extract'] as const
}

export function getFeedbackKey() {
  return ['feedback'] as const
}

export function getInteractKey() {
  return ['interact'] as const
}

export function getMapKey() {
  return ['map'] as const
}

export function getMonitorKey() {
  return ['monitor'] as const
}

export function getParseKey() {
  return ['parse'] as const
}

export function getScrapeKey() {
  return ['scrape'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSupportKey() {
  return ['support'] as const
}

export function getTeamKey() {
  return ['team'] as const
}

export function getGetMonitorKey(args: InferRequestType<typeof client.monitor.$get>) {
  return ['monitor', '/monitor', args] as const
}

export function useGetMonitor<TError = unknown>(
  args: InferRequestType<typeof client.monitor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMonitorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.monitor.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMonitor<TError = unknown>(
  args: InferRequestType<typeof client.monitor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMonitorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.monitor.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostMonitorKey() {
  return ['monitor', '/monitor', 'POST'] as const
}

export function usePostMonitor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.monitor.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMonitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.monitor.$post> }) =>
        parseResponse(client.monitor.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMonitorMonitorIdKey(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['$get']>,
) {
  return ['monitor', '/monitor/:monitorId', args] as const
}

export function useGetMonitorMonitorId<TError = unknown>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>>
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
        ? getGetMonitorMonitorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitor[':monitorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMonitorMonitorId<TError = unknown>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>>
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
        ? getGetMonitorMonitorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitor[':monitorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMonitorMonitorIdKey() {
  return ['monitor', '/monitor/:monitorId', 'DELETE'] as const
}

export function useDeleteMonitorMonitorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.monitor)[':monitorId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMonitorMonitorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.monitor)[':monitorId']['$delete']> },
      ) => parseResponse(client.monitor[':monitorId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMonitorMonitorIdKey() {
  return ['monitor', '/monitor/:monitorId', 'PATCH'] as const
}

export function usePatchMonitorMonitorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.monitor)[':monitorId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMonitorMonitorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.monitor)[':monitorId']['$patch']> },
      ) => parseResponse(client.monitor[':monitorId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMonitorMonitorIdRunKey() {
  return ['monitor', '/monitor/:monitorId/run', 'POST'] as const
}

export function usePostMonitorMonitorIdRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.monitor)[':monitorId']['run']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.monitor)[':monitorId']['run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMonitorMonitorIdRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.monitor)[':monitorId']['run']['$post']> },
      ) => parseResponse(client.monitor[':monitorId'].run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMonitorMonitorIdChecksKey(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks']['$get']>,
) {
  return ['monitor', '/monitor/:monitorId/checks', args] as const
}

export function useGetMonitorMonitorIdChecks<TError = unknown>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks']['$get']>>
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
        ? getGetMonitorMonitorIdChecksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitor[':monitorId'].checks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMonitorMonitorIdChecks<TError = unknown>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks']['$get']>>
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
        ? getGetMonitorMonitorIdChecksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.monitor[':monitorId'].checks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMonitorMonitorIdChecksCheckIdKey(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>,
) {
  return ['monitor', '/monitor/:monitorId/checks/:checkId', args] as const
}

export function useGetMonitorMonitorIdChecksCheckId<TError = unknown>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>>
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
        ? getGetMonitorMonitorIdChecksCheckIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.monitor[':monitorId'].checks[':checkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMonitorMonitorIdChecksCheckId<TError = unknown>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>>
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
        ? getGetMonitorMonitorIdChecksCheckIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.monitor[':monitorId'].checks[':checkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostScrapeKey() {
  return ['scrape', '/scrape', 'POST'] as const
}

export function usePostScrape<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.scrape.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScrapeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.scrape.$post> }) =>
        parseResponse(client.scrape.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScrapeJobIdInteractKey() {
  return ['scrape', '/scrape/:jobId/interact', 'POST'] as const
}

export function usePostScrapeJobIdInteract<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrape)[':jobId']['interact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scrape)[':jobId']['interact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScrapeJobIdInteractKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scrape)[':jobId']['interact']['$post']> },
      ) => parseResponse(client.scrape[':jobId'].interact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteScrapeJobIdInteractKey() {
  return ['scrape', '/scrape/:jobId/interact', 'DELETE'] as const
}

export function useDeleteScrapeJobIdInteract<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrape)[':jobId']['interact']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scrape)[':jobId']['interact']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteScrapeJobIdInteractKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.scrape)[':jobId']['interact']['$delete']> },
      ) => parseResponse(client.scrape[':jobId'].interact.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostParseKey() {
  return ['parse', '/parse', 'POST'] as const
}

export function usePostParse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.parse.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostParseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.parse.$post> }) =>
        parseResponse(client.parse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetParseFormatsKey() {
  return ['parse', '/parse/formats'] as const
}

export function useGetParseFormats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetParseFormatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parse.formats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetParseFormats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetParseFormatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parse.formats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBatchScrapeKey() {
  return ['batch', '/batch/scrape', 'POST'] as const
}

export function usePostBatchScrape<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.scrape.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.batch.scrape.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchScrapeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.batch.scrape.$post> }) =>
        parseResponse(client.batch.scrape.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBatchScrapeIdKey(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['$get']>,
) {
  return ['batch', '/batch/scrape/:id', args] as const
}

export function useGetBatchScrapeId<TError = unknown>(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBatchScrapeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.batch.scrape[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBatchScrapeId<TError = unknown>(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBatchScrapeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.batch.scrape[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBatchScrapeIdKey() {
  return ['batch', '/batch/scrape/:id', 'DELETE'] as const
}

export function useDeleteBatchScrapeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.batch.scrape)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBatchScrapeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.batch.scrape)[':id']['$delete']> },
      ) => parseResponse(client.batch.scrape[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBatchScrapeIdErrorsKey(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['errors']['$get']>,
) {
  return ['batch', '/batch/scrape/:id/errors', args] as const
}

export function useGetBatchScrapeIdErrors<TError = unknown>(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['errors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.batch.scrape)[':id']['errors']['$get']>>
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
        ? getGetBatchScrapeIdErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.batch.scrape)[':id']['errors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.batch.scrape[':id'].errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBatchScrapeIdErrors<TError = unknown>(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['errors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.batch.scrape)[':id']['errors']['$get']>>
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
        ? getGetBatchScrapeIdErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.batch.scrape)[':id']['errors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.batch.scrape[':id'].errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCrawlIdKey(args: InferRequestType<(typeof client.crawl)[':id']['$get']>) {
  return ['crawl', '/crawl/:id', args] as const
}

export function useGetCrawlId<TError = unknown>(
  args: InferRequestType<(typeof client.crawl)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrawlIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crawl[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrawlId<TError = unknown>(
  args: InferRequestType<(typeof client.crawl)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrawlIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crawl[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrawlIdKey() {
  return ['crawl', '/crawl/:id', 'DELETE'] as const
}

export function useDeleteCrawlId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crawl)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrawlIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.crawl)[':id']['$delete']> }) =>
        parseResponse(client.crawl[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrawlIdErrorsKey(
  args: InferRequestType<(typeof client.crawl)[':id']['errors']['$get']>,
) {
  return ['crawl', '/crawl/:id/errors', args] as const
}

export function useGetCrawlIdErrors<TError = unknown>(
  args: InferRequestType<(typeof client.crawl)[':id']['errors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['errors']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCrawlIdErrorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['errors']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crawl[':id'].errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrawlIdErrors<TError = unknown>(
  args: InferRequestType<(typeof client.crawl)[':id']['errors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['errors']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCrawlIdErrorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['errors']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crawl[':id'].errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrawlKey() {
  return ['crawl', '/crawl', 'POST'] as const
}

export function usePostCrawl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.crawl.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrawlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.crawl.$post> }) =>
        parseResponse(client.crawl.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrawlParamsPreviewKey() {
  return ['crawl', '/crawl/params-preview', 'POST'] as const
}

export function usePostCrawlParamsPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)['params-preview']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crawl)['params-preview']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrawlParamsPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.crawl)['params-preview']['$post']> },
      ) => parseResponse(client.crawl['params-preview'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMapKey() {
  return ['map', '/map', 'POST'] as const
}

export function usePostMap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.map.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMapKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.map.$post> }) =>
        parseResponse(client.map.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExtractKey() {
  return ['extract', '/extract', 'POST'] as const
}

export function usePostExtract<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extract.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.extract.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtractKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.extract.$post> }) =>
        parseResponse(client.extract.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtractIdKey(args: InferRequestType<(typeof client.extract)[':id']['$get']>) {
  return ['extract', '/extract/:id', args] as const
}

export function useGetExtractId<TError = unknown>(
  args: InferRequestType<(typeof client.extract)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetExtractIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extract[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtractId<TError = unknown>(
  args: InferRequestType<(typeof client.extract)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetExtractIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extract[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgentKey(args: InferRequestType<typeof client.agent.$get>) {
  return ['agent', '/agent', args] as const
}

export function useGetAgent<TError = unknown>(
  args: InferRequestType<typeof client.agent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.agent.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAgent<TError = unknown>(
  args: InferRequestType<typeof client.agent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.agent.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAgentKey() {
  return ['agent', '/agent', 'POST'] as const
}

export function usePostAgent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.agent.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.agent.$post> }) =>
        parseResponse(client.agent.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentJobIdKey(
  args: InferRequestType<(typeof client.agent)[':jobId']['$get']>,
) {
  return ['agent', '/agent/:jobId', args] as const
}

export function useGetAgentJobId<TError = unknown>(
  args: InferRequestType<(typeof client.agent)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAgentJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentJobId<TError = unknown>(
  args: InferRequestType<(typeof client.agent)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAgentJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAgentJobIdKey() {
  return ['agent', '/agent/:jobId', 'DELETE'] as const
}

export function useDeleteAgentJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agent)[':jobId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAgentJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.agent)[':jobId']['$delete']> },
      ) => parseResponse(client.agent[':jobId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentJobIdTraceKey(
  args: InferRequestType<(typeof client.agent)[':jobId']['trace']['$get']>,
) {
  return ['agent', '/agent/:jobId/trace', args] as const
}

export function useGetAgentJobIdTrace<TError = unknown>(
  args: InferRequestType<(typeof client.agent)[':jobId']['trace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent)[':jobId']['trace']['$get']>>
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
        ? getGetAgentJobIdTraceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent)[':jobId']['trace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent[':jobId'].trace.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentJobIdTrace<TError = unknown>(
  args: InferRequestType<(typeof client.agent)[':jobId']['trace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent)[':jobId']['trace']['$get']>>
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
        ? getGetAgentJobIdTraceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent)[':jobId']['trace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent[':jobId'].trace.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgentJobIdSnapshotsSnapshotIdKey(
  args: InferRequestType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>,
) {
  return ['agent', '/agent/:jobId/snapshots/:snapshotId', args] as const
}

export function useGetAgentJobIdSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>>
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
        ? getGetAgentJobIdSnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agent[':jobId'].snapshots[':snapshotId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentJobIdSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>>
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
        ? getGetAgentJobIdSnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agent[':jobId'].snapshots[':snapshotId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCrawlActiveKey() {
  return ['crawl', '/crawl/active'] as const
}

export function useGetCrawlActive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrawlActiveKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crawl.active.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrawlActive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrawlActiveKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crawl.active.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamCreditUsageKey() {
  return ['team', '/team/credit-usage'] as const
}

export function useGetTeamCreditUsage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['credit-usage']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamCreditUsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)['credit-usage']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team['credit-usage'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamCreditUsage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['credit-usage']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamCreditUsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)['credit-usage']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team['credit-usage'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamCreditUsageHistoricalKey(
  args: InferRequestType<(typeof client.team)['credit-usage']['historical']['$get']>,
) {
  return ['team', '/team/credit-usage/historical', args] as const
}

export function useGetTeamCreditUsageHistorical<TError = unknown>(
  args: InferRequestType<(typeof client.team)['credit-usage']['historical']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)['credit-usage']['historical']['$get']>>
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
        ? getGetTeamCreditUsageHistoricalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)['credit-usage']['historical']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team['credit-usage'].historical.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamCreditUsageHistorical<TError = unknown>(
  args: InferRequestType<(typeof client.team)['credit-usage']['historical']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)['credit-usage']['historical']['$get']>>
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
        ? getGetTeamCreditUsageHistoricalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)['credit-usage']['historical']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team['credit-usage'].historical.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTokenUsageKey() {
  return ['team', '/team/token-usage'] as const
}

export function useGetTeamTokenUsage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['token-usage']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamTokenUsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)['token-usage']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team['token-usage'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTokenUsage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['token-usage']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamTokenUsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)['token-usage']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team['token-usage'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamTokenUsageHistoricalKey(
  args: InferRequestType<(typeof client.team)['token-usage']['historical']['$get']>,
) {
  return ['team', '/team/token-usage/historical', args] as const
}

export function useGetTeamTokenUsageHistorical<TError = unknown>(
  args: InferRequestType<(typeof client.team)['token-usage']['historical']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)['token-usage']['historical']['$get']>>
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
        ? getGetTeamTokenUsageHistoricalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)['token-usage']['historical']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team['token-usage'].historical.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamTokenUsageHistorical<TError = unknown>(
  args: InferRequestType<(typeof client.team)['token-usage']['historical']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)['token-usage']['historical']['$get']>>
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
        ? getGetTeamTokenUsageHistoricalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)['token-usage']['historical']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team['token-usage'].historical.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamQueueStatusKey() {
  return ['team', '/team/queue-status'] as const
}

export function useGetTeamQueueStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['queue-status']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamQueueStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)['queue-status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team['queue-status'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamQueueStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['queue-status']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamQueueStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.team)['queue-status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team['queue-status'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamActivityKey(args: InferRequestType<typeof client.team.activity.$get>) {
  return ['team', '/team/activity', args] as const
}

export function useGetTeamActivity<TError = unknown>(
  args: InferRequestType<typeof client.team.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamActivityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamActivity<TError = unknown>(
  args: InferRequestType<typeof client.team.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamActivityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSearchKey() {
  return ['search', '/search', 'POST'] as const
}

export function usePostSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.$post> }) =>
        parseResponse(client.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInteractKey(args: InferRequestType<typeof client.interact.$get>) {
  return ['interact', '/interact', args] as const
}

export function useGetInteract<TError = unknown>(
  args: InferRequestType<typeof client.interact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInteractKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.interact.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInteract<TError = unknown>(
  args: InferRequestType<typeof client.interact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInteractKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.interact.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostInteractKey() {
  return ['interact', '/interact', 'POST'] as const
}

export function usePostInteract<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.interact.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInteractKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.interact.$post> }) =>
        parseResponse(client.interact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInteractSessionIdExecuteKey() {
  return ['interact', '/interact/:sessionId/execute', 'POST'] as const
}

export function usePostInteractSessionIdExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.interact)[':sessionId']['execute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.interact)[':sessionId']['execute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInteractSessionIdExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.interact)[':sessionId']['execute']['$post']> },
      ) => parseResponse(client.interact[':sessionId'].execute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInteractSessionIdKey() {
  return ['interact', '/interact/:sessionId', 'DELETE'] as const
}

export function useDeleteInteractSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.interact)[':sessionId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.interact)[':sessionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInteractSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.interact)[':sessionId']['$delete']> },
      ) => parseResponse(client.interact[':sessionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScrapeJobIdKey(
  args: InferRequestType<(typeof client.scrape)[':jobId']['$get']>,
) {
  return ['scrape', '/scrape/:jobId', args] as const
}

export function useGetScrapeJobId<TError = unknown>(
  args: InferRequestType<(typeof client.scrape)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetScrapeJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scrape[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScrapeJobId<TError = unknown>(
  args: InferRequestType<(typeof client.scrape)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetScrapeJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scrape[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSearchJobIdFeedbackKey() {
  return ['search', '/search/:jobId/feedback', 'POST'] as const
}

export function usePostSearchJobIdFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.search)[':jobId']['feedback']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.search)[':jobId']['feedback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchJobIdFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.search)[':jobId']['feedback']['$post']> },
      ) => parseResponse(client.search[':jobId'].feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSupportAskKey() {
  return ['support', '/support/ask', 'POST'] as const
}

export function usePostSupportAsk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.ask.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.support.ask.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSupportAskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.support.ask.$post> }) =>
        parseResponse(client.support.ask.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchResearchPapersKey(
  args: InferRequestType<typeof client.search.research.papers.$get>,
) {
  return ['search', '/search/research/papers', args] as const
}

export function useGetSearchResearchPapers<TError = unknown>(
  args: InferRequestType<typeof client.search.research.papers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>
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
        ? getGetSearchResearchPapersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.research.papers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchResearchPapers<TError = unknown>(
  args: InferRequestType<typeof client.search.research.papers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>
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
        ? getGetSearchResearchPapersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.research.papers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchResearchPapersIdKey(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['$get']>,
) {
  return ['search', '/search/research/papers/:id', args] as const
}

export function useGetSearchResearchPapersId<TError = unknown>(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.research.papers)[':id']['$get']>>
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
        ? getGetSearchResearchPapersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.research.papers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.research.papers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchResearchPapersId<TError = unknown>(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.research.papers)[':id']['$get']>>
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
        ? getGetSearchResearchPapersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.research.papers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.research.papers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchResearchPapersIdSimilarKey(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['similar']['$get']>,
) {
  return ['search', '/search/research/papers/:id/similar', args] as const
}

export function useGetSearchResearchPapersIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.research.papers)[':id']['similar']['$get']>>
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
        ? getGetSearchResearchPapersIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.research.papers)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.search.research.papers[':id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchResearchPapersIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.research.papers)[':id']['similar']['$get']>>
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
        ? getGetSearchResearchPapersIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.research.papers)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.search.research.papers[':id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchDeveloperKey(
  args: InferRequestType<typeof client.search.developer.$get>,
) {
  return ['search', '/search/developer', args] as const
}

export function useGetSearchDeveloper<TError = unknown>(
  args: InferRequestType<typeof client.search.developer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>>
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
        ? getGetSearchDeveloperKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.developer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchDeveloper<TError = unknown>(
  args: InferRequestType<typeof client.search.developer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>>
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
        ? getGetSearchDeveloperKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.developer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSearchDeveloperKey() {
  return ['search', '/search/developer', 'POST'] as const
}

export function usePostSearchDeveloper<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.search.developer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchDeveloperKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.developer.$post> }) =>
        parseResponse(client.search.developer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchGovKey(args: InferRequestType<typeof client.search.gov.$get>) {
  return ['search', '/search/gov', args] as const
}

export function useGetSearchGov<TError = unknown>(
  args: InferRequestType<typeof client.search.gov.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchGovKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.gov.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchGov<TError = unknown>(
  args: InferRequestType<typeof client.search.gov.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchGovKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.gov.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSearchGovKey() {
  return ['search', '/search/gov', 'POST'] as const
}

export function usePostSearchGov<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.search.gov.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchGovKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.gov.$post> }) =>
        parseResponse(client.search.gov.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeedbackKey() {
  return ['feedback', '/feedback', 'POST'] as const
}

export function usePostFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.feedback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.feedback.$post> }) =>
        parseResponse(client.feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamThreatProtectionKey() {
  return ['team', '/team/threat-protection'] as const
}

export function useGetTeamThreatProtection<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['threat-protection']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamThreatProtectionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)['threat-protection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team['threat-protection'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamThreatProtection<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['threat-protection']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamThreatProtectionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team)['threat-protection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team['threat-protection'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTeamThreatProtectionKey() {
  return ['team', '/team/threat-protection', 'PUT'] as const
}

export function usePutTeamThreatProtection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['threat-protection']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.team)['threat-protection']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamThreatProtectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.team)['threat-protection']['$put']> },
      ) => parseResponse(client.team['threat-protection'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

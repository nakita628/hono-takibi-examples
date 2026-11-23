import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEndpointKey() {
  return ['endpoint'] as const
}

export function getSuiteDefinitionsKey() {
  return ['suiteDefinitions'] as const
}

export function getSuiteRunsKey() {
  return ['suiteRuns'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getGetSuiteDefinitionsKey(
  args: InferRequestType<typeof client.suiteDefinitions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suiteDefinitions', '/suiteDefinitions', keyArgs] as const
}

export function useGetSuiteDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.suiteDefinitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$get>>>>
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
        ? getGetSuiteDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suiteDefinitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuiteDefinitions<TError = unknown>(
  args: InferRequestType<typeof client.suiteDefinitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$get>>>>
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
        ? getGetSuiteDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suiteDefinitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSuiteDefinitionsKey() {
  return ['suiteDefinitions', '/suiteDefinitions', 'POST'] as const
}

export function usePostSuiteDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.suiteDefinitions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSuiteDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.suiteDefinitions.$post> }) =>
        parseResponse(client.suiteDefinitions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSuiteDefinitionsSuiteDefinitionIdKey(
  args: InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suiteDefinitions', '/suiteDefinitions/:suiteDefinitionId', keyArgs] as const
}

export function useGetSuiteDefinitionsSuiteDefinitionId<TError = unknown>(
  args: InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>>
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
        ? getGetSuiteDefinitionsSuiteDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.suiteDefinitions[':suiteDefinitionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuiteDefinitionsSuiteDefinitionId<TError = unknown>(
  args: InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>>
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
        ? getGetSuiteDefinitionsSuiteDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.suiteDefinitions[':suiteDefinitionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSuiteDefinitionsSuiteDefinitionIdKey() {
  return ['suiteDefinitions', '/suiteDefinitions/:suiteDefinitionId', 'DELETE'] as const
}

export function useDeleteSuiteDefinitionsSuiteDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSuiteDefinitionsSuiteDefinitionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$delete']>
        },
      ) => parseResponse(client.suiteDefinitions[':suiteDefinitionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSuiteDefinitionsSuiteDefinitionIdKey() {
  return ['suiteDefinitions', '/suiteDefinitions/:suiteDefinitionId', 'PATCH'] as const
}

export function usePatchSuiteDefinitionsSuiteDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSuiteDefinitionsSuiteDefinitionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$patch']>
        },
      ) => parseResponse(client.suiteDefinitions[':suiteDefinitionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointKey(args: InferRequestType<typeof client.endpoint.$get>) {
  const { header: _, ...keyArgs } = args
  return ['endpoint', '/endpoint', keyArgs] as const
}

export function useGetEndpoint<TError = unknown>(
  args: InferRequestType<typeof client.endpoint.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.endpoint.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEndpoint<TError = unknown>(
  args: InferRequestType<typeof client.endpoint.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.endpoint.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdKey(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'suiteDefinitions',
    '/suiteDefinitions/:suiteDefinitionId/suiteRuns/:suiteRunId',
    keyArgs,
  ] as const
}

export function useGetSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunId<TError = unknown>(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
              >
            >
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
        ? getGetSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
              >
            >
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
        ? getGetSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportKey(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'suiteDefinitions',
    '/suiteDefinitions/:suiteDefinitionId/suiteRuns/:suiteRunId/report',
    keyArgs,
  ] as const
}

export function useGetSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReport<TError = unknown>(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
              >
            >
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
        ? getGetSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].report.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReport<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
              >
            >
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
        ? getGetSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].report.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSuiteRunsKey(args: InferRequestType<typeof client.suiteRuns.$get>) {
  const { header: _, ...keyArgs } = args
  return ['suiteRuns', '/suiteRuns', keyArgs] as const
}

export function useGetSuiteRuns<TError = unknown>(
  args: InferRequestType<typeof client.suiteRuns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteRuns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSuiteRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteRuns.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suiteRuns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSuiteRuns<TError = unknown>(
  args: InferRequestType<typeof client.suiteRuns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteRuns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSuiteRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteRuns.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.suiteRuns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsKey() {
  return ['suiteDefinitions', '/suiteDefinitions/:suiteDefinitionId/suiteRuns', 'POST'] as const
}

export function usePostSuiteDefinitionsSuiteDefinitionIdSuiteRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns']['$post']
          >
        },
      ) =>
        parseResponse(
          client.suiteDefinitions[':suiteDefinitionId'].suiteRuns.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopKey() {
  return [
    'suiteDefinitions',
    '/suiteDefinitions/:suiteDefinitionId/suiteRuns/:suiteRunId/stop',
    'POST',
  ] as const
}

export function usePostSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStop<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['stop']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].stop.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getToolresultsKey() {
  return ['toolresults'] as const
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
  >,
) {
  return ['toolresults', '/toolresults/v1beta3/projects/:projectId/histories', args] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistories<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesKey(args)
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistories<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesKey(args)
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesKey() {
  return ['toolresults', '/toolresults/v1beta3/projects/:projectId/histories', 'POST'] as const
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolresultsV1beta3ProjectsProjectIdHistoriesKey()
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
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdKey(args)
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdKey(args)
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsKey(args)
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsKey(args)
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions',
    'POST',
  ] as const
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsKey()
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
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[
            ':historyId'
          ].executions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdKey(args)
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdKey(args)
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId',
    'PATCH',
  ] as const
}

export function usePatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdKey()
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
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/clusters',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClusters<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].clusters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClusters<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].clusters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/clusters/:clusterId',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].clusters[':clusterId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].clusters[':clusterId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/environments',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].environments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].environments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/environments/:environmentId',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].environments[':environmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].environments[':environmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdSteps<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdSteps<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps',
    'POST',
  ] as const
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdSteps<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsKey()
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
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId',
    'PATCH',
  ] as const
}

export function usePatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdKey()
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
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfMetricsSummary',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummary<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfMetricsSummary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummary<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfMetricsSummary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfMetricsSummary',
    'POST',
  ] as const
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryKey()
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
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfMetricsSummary.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfSampleSeries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfSampleSeries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries',
    'POST',
  ] as const
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesKey()
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
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfSampleSeries.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries/:sampleSeriesId',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfSampleSeries[':sampleSeriesId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfSampleSeries[':sampleSeriesId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries/:sampleSeriesId/samples',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamples<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfSampleSeries[':sampleSeriesId'].samples.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamples<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfSampleSeries[':sampleSeriesId'].samples.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesBatchCreateKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries/:sampleSeriesId/samples:batchCreate',
    'POST',
  ] as const
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesBatchCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples:batchCreate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples:batchCreate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesBatchCreateKey()
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
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples:batchCreate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfSampleSeries[':sampleSeriesId']['samples:batchCreate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/testCases',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCases<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].testCases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCases<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].testCases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/testCases/:testCaseId',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].testCases[':testCaseId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].testCases[':testCaseId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/thumbnails',
    args,
  ] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].thumbnails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsKey(
            args,
          )
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].thumbnails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPublishXunitXmlFilesKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId:publishXunitXmlFiles',
    'POST',
  ] as const
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPublishXunitXmlFiles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId:publishXunitXmlFiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId:publishXunitXmlFiles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPublishXunitXmlFilesKey()
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
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId:publishXunitXmlFiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId:publishXunitXmlFiles'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolresultsV1beta3ProjectsProjectIdSettingsKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
  >,
) {
  return ['toolresults', '/toolresults/v1beta3/projects/:projectId/settings', args] as const
}

export function useGetToolresultsV1beta3ProjectsProjectIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdSettingsKey(args)
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3ProjectsProjectIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
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
        ? getGetToolresultsV1beta3ProjectsProjectIdSettingsKey(args)
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
                (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
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
          client.toolresults.v1beta3.projects[':projectId'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostToolresultsV1beta3ProjectsProjectIdInitializeSettingsKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId:initializeSettings',
    'POST',
  ] as const
}

export function usePostToolresultsV1beta3ProjectsProjectIdInitializeSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId:initializeSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId:initializeSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostToolresultsV1beta3ProjectsProjectIdInitializeSettingsKey()
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
            (typeof client.toolresults.v1beta3.projects)[':projectId:initializeSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.toolresults.v1beta3.projects[':projectId:initializeSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetToolresultsV1beta3NameAccessibilityClustersKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']
  >,
) {
  return ['toolresults', '/toolresults/v1beta3/:name:accessibilityClusters', args] as const
}

export function useGetToolresultsV1beta3NameAccessibilityClusters<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']>
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
        ? getGetToolresultsV1beta3NameAccessibilityClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.toolresults.v1beta3[':name:accessibilityClusters'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetToolresultsV1beta3NameAccessibilityClusters<TError = unknown>(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']>
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
        ? getGetToolresultsV1beta3NameAccessibilityClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.toolresults.v1beta3[':name:accessibilityClusters'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

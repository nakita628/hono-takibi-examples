import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getUserIdKey() {
  return ['{userId}'] as const
}

export function getGetUserIdDataSourcesKey(
  args: InferRequestType<(typeof client)[':userId']['dataSources']['$get']>,
) {
  return [':userId', '/:userId/dataSources', args] as const
}

export function useGetUserIdDataSources<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['dataSources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>
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
        ? getGetUserIdDataSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].dataSources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdDataSources<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['dataSources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>
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
        ? getGetUserIdDataSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].dataSources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserIdDataSourcesKey() {
  return [':userId', '/:userId/dataSources', 'POST'] as const
}

export function usePostUserIdDataSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['dataSources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdDataSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':userId']['dataSources']['$post']> },
      ) => parseResponse(client[':userId'].dataSources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserIdDataSourcesDataSourceIdKey(
  args: InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>,
) {
  return [':userId', '/:userId/dataSources/:dataSourceId', args] as const
}

export function useGetUserIdDataSourcesDataSourceId<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>>
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
        ? getGetUserIdDataSourcesDataSourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':userId'].dataSources[':dataSourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdDataSourcesDataSourceId<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>>
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
        ? getGetUserIdDataSourcesDataSourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':userId'].dataSources[':dataSourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserIdDataSourcesDataSourceIdKey() {
  return [':userId', '/:userId/dataSources/:dataSourceId', 'PUT'] as const
}

export function usePutUserIdDataSourcesDataSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserIdDataSourcesDataSourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$put']>
        },
      ) => parseResponse(client[':userId'].dataSources[':dataSourceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserIdDataSourcesDataSourceIdKey() {
  return [':userId', '/:userId/dataSources/:dataSourceId', 'DELETE'] as const
}

export function useDeleteUserIdDataSourcesDataSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserIdDataSourcesDataSourceIdKey()
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
            (typeof client)[':userId']['dataSources'][':dataSourceId']['$delete']
          >
        },
      ) =>
        parseResponse(client[':userId'].dataSources[':dataSourceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserIdDataSourcesDataSourceIdDataPointChangesKey(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
  >,
) {
  return [':userId', '/:userId/dataSources/:dataSourceId/dataPointChanges', args] as const
}

export function useGetUserIdDataSourcesDataSourceIdDataPointChanges<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
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
        ? getGetUserIdDataSourcesDataSourceIdDataPointChangesKey(args)
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
                (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
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
          client[':userId'].dataSources[':dataSourceId'].dataPointChanges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdDataSourcesDataSourceIdDataPointChanges<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
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
        ? getGetUserIdDataSourcesDataSourceIdDataPointChangesKey(args)
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
                (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
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
          client[':userId'].dataSources[':dataSourceId'].dataPointChanges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserIdDataSourcesDataSourceIdDatasetsDatasetIdKey(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
  >,
) {
  return [':userId', '/:userId/dataSources/:dataSourceId/datasets/:datasetId', args] as const
}

export function useGetUserIdDataSourcesDataSourceIdDatasetsDatasetId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
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
        ? getGetUserIdDataSourcesDataSourceIdDatasetsDatasetIdKey(args)
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
                (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
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
          client[':userId'].dataSources[':dataSourceId'].datasets[':datasetId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdDataSourcesDataSourceIdDatasetsDatasetId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
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
        ? getGetUserIdDataSourcesDataSourceIdDatasetsDatasetIdKey(args)
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
                (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
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
          client[':userId'].dataSources[':dataSourceId'].datasets[':datasetId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserIdDataSourcesDataSourceIdDatasetsDatasetIdKey() {
  return [':userId', '/:userId/dataSources/:dataSourceId/datasets/:datasetId', 'DELETE'] as const
}

export function useDeleteUserIdDataSourcesDataSourceIdDatasetsDatasetId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserIdDataSourcesDataSourceIdDatasetsDatasetIdKey()
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
            (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':userId'].dataSources[':dataSourceId'].datasets[':datasetId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchUserIdDataSourcesDataSourceIdDatasetsDatasetIdKey() {
  return [':userId', '/:userId/dataSources/:dataSourceId/datasets/:datasetId', 'PATCH'] as const
}

export function usePatchUserIdDataSourcesDataSourceIdDatasetsDatasetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserIdDataSourcesDataSourceIdDatasetsDatasetIdKey()
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
            (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client[':userId'].dataSources[':dataSourceId'].datasets[':datasetId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserIdDatasetAggregateKey() {
  return [':userId', '/:userId/dataset:aggregate', 'POST'] as const
}

export function usePostUserIdDatasetAggregate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['dataset:aggregate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['dataset:aggregate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserIdDatasetAggregateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':userId']['dataset:aggregate']['$post']> },
      ) => parseResponse(client[':userId']['dataset:aggregate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserIdSessionsKey(
  args: InferRequestType<(typeof client)[':userId']['sessions']['$get']>,
) {
  return [':userId', '/:userId/sessions', args] as const
}

export function useGetUserIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserIdSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client)[':userId']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserIdSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':userId'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserIdSessionsSessionIdKey() {
  return [':userId', '/:userId/sessions/:sessionId', 'PUT'] as const
}

export function usePutUserIdSessionsSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['sessions'][':sessionId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['sessions'][':sessionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserIdSessionsSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':userId']['sessions'][':sessionId']['$put']> },
      ) => parseResponse(client[':userId'].sessions[':sessionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserIdSessionsSessionIdKey() {
  return [':userId', '/:userId/sessions/:sessionId', 'DELETE'] as const
}

export function useDeleteUserIdSessionsSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['sessions'][':sessionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':userId']['sessions'][':sessionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserIdSessionsSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':userId']['sessions'][':sessionId']['$delete']>
        },
      ) => parseResponse(client[':userId'].sessions[':sessionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

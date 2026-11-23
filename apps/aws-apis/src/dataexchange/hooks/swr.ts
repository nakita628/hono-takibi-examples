import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTagsKey() {
  return ['tags'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdKey() {
  return [
    'v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id',
  ] as const
}

export function getGetV1JobsJobIdKey(
  args: InferRequestType<(typeof client.v1.jobs)[':JobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/jobs/:JobId', keyArgs] as const
}

export function useGetV1JobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.jobs)[':JobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1JobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.jobs[':JobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1JobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.jobs)[':JobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1JobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.jobs[':JobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1JobsJobIdKey() {
  return ['v1', '/v1/jobs/:JobId', 'DELETE'] as const
}

export function useDeleteV1JobsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.jobs)[':JobId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1JobsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.jobs)[':JobId']['$delete']> },
      ) => parseResponse(client.v1.jobs[':JobId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1JobsJobIdKey() {
  return ['v1', '/v1/jobs/:JobId', 'PATCH'] as const
}

export function usePatchV1JobsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':JobId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.jobs)[':JobId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1JobsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.jobs)[':JobId']['$patch']> },
      ) => parseResponse(client.v1.jobs[':JobId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DataSetsKey(
  args: InferRequestType<(typeof client.v1)['data-sets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/data-sets', keyArgs] as const
}

export function useGetV1DataSets<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['data-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DataSetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['data-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DataSets<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['data-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DataSetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['data-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DataSetsKey() {
  return ['v1', '/v1/data-sets', 'POST'] as const
}

export function usePostV1DataSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sets']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['data-sets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['data-sets']['$post']> },
      ) => parseResponse(client.v1['data-sets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EventActionsKey(
  args: InferRequestType<(typeof client.v1)['event-actions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/event-actions', keyArgs] as const
}

export function useGetV1EventActions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['event-actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-actions']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1EventActionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-actions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['event-actions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventActions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['event-actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-actions']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1EventActionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-actions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['event-actions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EventActionsKey() {
  return ['v1', '/v1/event-actions', 'POST'] as const
}

export function usePostV1EventActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-actions']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['event-actions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EventActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['event-actions']['$post']> },
      ) => parseResponse(client.v1['event-actions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1JobsKey(args: InferRequestType<typeof client.v1.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/jobs', keyArgs] as const
}

export function useGetV1Jobs<TError = unknown>(
  args: InferRequestType<typeof client.v1.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1JobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Jobs<TError = unknown>(
  args: InferRequestType<typeof client.v1.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1JobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV1JobsKey() {
  return ['v1', '/v1/jobs', 'POST'] as const
}

export function usePostV1Jobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.jobs.$post> }) =>
        parseResponse(client.v1.jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DataSetsDataSetIdRevisionsKey(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/data-sets/:DataSetId/revisions', keyArgs] as const
}

export function useGetV1DataSetsDataSetIdRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>>
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
        ? getGetV1DataSetsDataSetIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['data-sets'][':DataSetId'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DataSetsDataSetIdRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>>
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
        ? getGetV1DataSetsDataSetIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['data-sets'][':DataSetId'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DataSetsDataSetIdRevisionsKey() {
  return ['v1', '/v1/data-sets/:DataSetId/revisions', 'POST'] as const
}

export function usePostV1DataSetsDataSetIdRevisions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataSetsDataSetIdRevisionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['revisions']['$post']>
        },
      ) => parseResponse(client.v1['data-sets'][':DataSetId'].revisions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdKey(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId/assets/:AssetId', keyArgs] as const
}

export function useGetV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
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
        ? getGetV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdKey(args)
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
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
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
          client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets[':AssetId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
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
        ? getGetV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdKey(args)
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
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$get']
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
          client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets[':AssetId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdKey() {
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId/assets/:AssetId', 'DELETE'] as const
}

export function useDeleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdKey()
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
            (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets[':AssetId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdKey() {
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId/assets/:AssetId', 'PATCH'] as const
}

export function usePatchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdKey()
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
            (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets'][':AssetId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets[':AssetId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DataSetsDataSetIdKey(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/data-sets/:DataSetId', keyArgs] as const
}

export function useGetV1DataSetsDataSetId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>>
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
        ? getGetV1DataSetsDataSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['data-sets'][':DataSetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DataSetsDataSetId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>>
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
        ? getGetV1DataSetsDataSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['data-sets'][':DataSetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DataSetsDataSetIdKey() {
  return ['v1', '/v1/data-sets/:DataSetId', 'DELETE'] as const
}

export function useDeleteV1DataSetsDataSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DataSetsDataSetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$delete']> },
      ) => parseResponse(client.v1['data-sets'][':DataSetId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DataSetsDataSetIdKey() {
  return ['v1', '/v1/data-sets/:DataSetId', 'PATCH'] as const
}

export function usePatchV1DataSetsDataSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['data-sets'][':DataSetId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DataSetsDataSetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['data-sets'][':DataSetId']['$patch']> },
      ) => parseResponse(client.v1['data-sets'][':DataSetId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EventActionsEventActionIdKey(
  args: InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/event-actions/:EventActionId', keyArgs] as const
}

export function useGetV1EventActionsEventActionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>>
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
        ? getGetV1EventActionsEventActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['event-actions'][':EventActionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventActionsEventActionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>>
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
        ? getGetV1EventActionsEventActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['event-actions'][':EventActionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1EventActionsEventActionIdKey() {
  return ['v1', '/v1/event-actions/:EventActionId', 'DELETE'] as const
}

export function useDeleteV1EventActionsEventActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EventActionsEventActionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$delete']>
        },
      ) => parseResponse(client.v1['event-actions'][':EventActionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1EventActionsEventActionIdKey() {
  return ['v1', '/v1/event-actions/:EventActionId', 'PATCH'] as const
}

export function usePatchV1EventActionsEventActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['event-actions'][':EventActionId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1EventActionsEventActionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['event-actions'][':EventActionId']['$patch']>
        },
      ) => parseResponse(client.v1['event-actions'][':EventActionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DataSetsDataSetIdRevisionsRevisionIdKey(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId', keyArgs] as const
}

export function useGetV1DataSetsDataSetIdRevisionsRevisionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
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
        ? getGetV1DataSetsDataSetIdRevisionsRevisionIdKey(args)
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
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
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
          client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DataSetsDataSetIdRevisionsRevisionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
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
        ? getGetV1DataSetsDataSetIdRevisionsRevisionIdKey(args)
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
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$get']
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
          client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DataSetsDataSetIdRevisionsRevisionIdKey() {
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId', 'DELETE'] as const
}

export function useDeleteV1DataSetsDataSetIdRevisionsRevisionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DataSetsDataSetIdRevisionsRevisionIdKey()
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
            (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DataSetsDataSetIdRevisionsRevisionIdKey() {
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId', 'PATCH'] as const
}

export function usePatchV1DataSetsDataSetIdRevisionsRevisionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DataSetsDataSetIdRevisionsRevisionIdKey()
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
            (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DataSetsDataSetIdRevisionsRevisionIdAssetsKey(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId/assets', keyArgs] as const
}

export function useGetV1DataSetsDataSetIdRevisionsRevisionIdAssets<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
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
        ? getGetV1DataSetsDataSetIdRevisionsRevisionIdAssetsKey(args)
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
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
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
          client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DataSetsDataSetIdRevisionsRevisionIdAssets<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
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
        ? getGetV1DataSetsDataSetIdRevisionsRevisionIdAssetsKey(args)
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
                (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['assets']['$get']
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
          client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].assets.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>
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
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']> },
      ) => parseResponse(client.tags[':ResourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataSetsDataSetIdRevisionsRevisionIdRevokeKey() {
  return ['v1', '/v1/data-sets/:DataSetId/revisions/:RevisionId/revoke', 'POST'] as const
}

export function usePostV1DataSetsDataSetIdRevisionsRevisionIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataSetsDataSetIdRevisionsRevisionIdRevokeKey()
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
            (typeof client.v1)['data-sets'][':DataSetId']['revisions'][':RevisionId']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['data-sets'][':DataSetId'].revisions[':RevisionId'].revoke.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdKey() {
  return [
    'v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id',
    '/v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id',
    'POST',
  ] as const
}

export function usePostV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdKey()
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
            (typeof client)['v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            'v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>
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
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

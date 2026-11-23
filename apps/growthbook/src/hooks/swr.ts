import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV1FeaturesKey(args: InferRequestType<typeof client.v1.features.$get>) {
  return ['v1', '/v1/features', args] as const
}

export function useGetV1Features<TError = unknown>(
  args: InferRequestType<typeof client.v1.features.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.features.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FeaturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.features.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Features<TError = unknown>(
  args: InferRequestType<typeof client.v1.features.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.features.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FeaturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.features.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FeaturesKey() {
  return ['v1', '/v1/features', 'POST'] as const
}

export function usePostV1Features<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.features.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.features.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.features.$post> }) =>
        parseResponse(client.v1.features.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FeaturesIdKey(
  args: InferRequestType<(typeof client.v1.features)[':id']['$get']>,
) {
  return ['v1', '/v1/features/:id', args] as const
}

export function useGetV1FeaturesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.features)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.features)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FeaturesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.features)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.features[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FeaturesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.features)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.features)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FeaturesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.features)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.features[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FeaturesIdKey() {
  return ['v1', '/v1/features/:id', 'POST'] as const
}

export function usePostV1FeaturesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.features)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.features)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.features)[':id']['$post']> },
      ) => parseResponse(client.v1.features[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FeaturesIdKey() {
  return ['v1', '/v1/features/:id', 'DELETE'] as const
}

export function useDeleteV1FeaturesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.features)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.features)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FeaturesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.features)[':id']['$delete']> },
      ) => parseResponse(client.v1.features[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1FeaturesIdToggleKey() {
  return ['v1', '/v1/features/:id/toggle', 'POST'] as const
}

export function usePostV1FeaturesIdToggle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.features)[':id']['toggle']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.features)[':id']['toggle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesIdToggleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.features)[':id']['toggle']['$post']> },
      ) => parseResponse(client.v1.features[':id'].toggle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1FeaturesIdRevertKey() {
  return ['v1', '/v1/features/:id/revert', 'POST'] as const
}

export function usePostV1FeaturesIdRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.features)[':id']['revert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.features)[':id']['revert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesIdRevertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.features)[':id']['revert']['$post']> },
      ) => parseResponse(client.v1.features[':id'].revert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FeatureKeysKey(
  args: InferRequestType<(typeof client.v1)['feature-keys']['$get']>,
) {
  return ['v1', '/v1/feature-keys', args] as const
}

export function useGetV1FeatureKeys<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['feature-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['feature-keys']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FeatureKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['feature-keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['feature-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FeatureKeys<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['feature-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['feature-keys']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FeatureKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['feature-keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['feature-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1StaleFeaturesKey(
  args: InferRequestType<(typeof client.v1)['stale-features']['$get']>,
) {
  return ['v1', '/v1/stale-features', args] as const
}

export function useGetV1StaleFeatures<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['stale-features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['stale-features']['$get']>>>
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
        ? getGetV1StaleFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['stale-features']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['stale-features'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1StaleFeatures<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['stale-features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['stale-features']['$get']>>>
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
        ? getGetV1StaleFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['stale-features']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['stale-features'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RevisionsKey(args: InferRequestType<typeof client.v1.revisions.$get>) {
  return ['v1', '/v1/revisions', args] as const
}

export function useGetV1Revisions<TError = unknown>(
  args: InferRequestType<typeof client.v1.revisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.revisions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1RevisionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.revisions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Revisions<TError = unknown>(
  args: InferRequestType<typeof client.v1.revisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.revisions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1RevisionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.revisions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FeaturesIdRevisionsKey(
  args: InferRequestType<(typeof client.v1.features)[':id']['revisions']['$get']>,
) {
  return ['v1', '/v1/features/:id/revisions', args] as const
}

export function useGetV1FeaturesIdRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.features)[':id']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.features)[':id']['revisions']['$get']>>
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
        ? getGetV1FeaturesIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.features)[':id']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.features[':id'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FeaturesIdRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.features)[':id']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.features)[':id']['revisions']['$get']>>
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
        ? getGetV1FeaturesIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.features)[':id']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.features[':id'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FeaturesIdRevisionsKey() {
  return ['v1', '/v1/features/:id/revisions', 'POST'] as const
}

export function usePostV1FeaturesIdRevisions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.features)[':id']['revisions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.features)[':id']['revisions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesIdRevisionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.features)[':id']['revisions']['$post']> },
      ) => parseResponse(client.v1.features[':id'].revisions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FeaturesIdRevisionsLatestKey(
  args: InferRequestType<(typeof client.v1.features)[':id']['revisions']['latest']['$get']>,
) {
  return ['v1', '/v1/features/:id/revisions/latest', args] as const
}

export function useGetV1FeaturesIdRevisionsLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v1.features)[':id']['revisions']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.features)[':id']['revisions']['latest']['$get']>>
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
        ? getGetV1FeaturesIdRevisionsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.features)[':id']['revisions']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.features[':id'].revisions.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FeaturesIdRevisionsLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v1.features)[':id']['revisions']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.features)[':id']['revisions']['latest']['$get']>>
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
        ? getGetV1FeaturesIdRevisionsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.features)[':id']['revisions']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.features[':id'].revisions.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FeaturesIdRevisionsVersionKey(
  args: InferRequestType<(typeof client.v1.features)[':id']['revisions'][':version']['$get']>,
) {
  return ['v1', '/v1/features/:id/revisions/:version', args] as const
}

export function useGetV1FeaturesIdRevisionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1.features)[':id']['revisions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.features)[':id']['revisions'][':version']['$get']>>
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
        ? getGetV1FeaturesIdRevisionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.features)[':id']['revisions'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.features[':id'].revisions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FeaturesIdRevisionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1.features)[':id']['revisions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.features)[':id']['revisions'][':version']['$get']>>
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
        ? getGetV1FeaturesIdRevisionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.features)[':id']['revisions'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.features[':id'].revisions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1FeaturesIdRevisionsVersionMetadataKey() {
  return ['v1', '/v1/features/:id/revisions/:version/metadata', 'PUT'] as const
}

export function usePutV1FeaturesIdRevisionsVersionMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['metadata']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.features)[':id']['revisions'][':version']['metadata']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1FeaturesIdRevisionsVersionMetadataKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['metadata']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].metadata.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1FeaturesIdRevisionsVersionDefaultValueKey() {
  return ['v1', '/v1/features/:id/revisions/:version/default-value', 'PUT'] as const
}

export function usePutV1FeaturesIdRevisionsVersionDefaultValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['default-value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.features)[':id']['revisions'][':version']['default-value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1FeaturesIdRevisionsVersionDefaultValueKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['default-value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version']['default-value'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1FeaturesIdRevisionsVersionPrerequisitesKey() {
  return ['v1', '/v1/features/:id/revisions/:version/prerequisites', 'PUT'] as const
}

export function usePutV1FeaturesIdRevisionsVersionPrerequisites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['prerequisites']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.features)[':id']['revisions'][':version']['prerequisites']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1FeaturesIdRevisionsVersionPrerequisitesKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['prerequisites']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].prerequisites.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1FeaturesIdRevisionsVersionHoldoutKey() {
  return ['v1', '/v1/features/:id/revisions/:version/holdout', 'PUT'] as const
}

export function usePutV1FeaturesIdRevisionsVersionHoldout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['holdout']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.features)[':id']['revisions'][':version']['holdout']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1FeaturesIdRevisionsVersionHoldoutKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['holdout']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].holdout.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1FeaturesIdRevisionsVersionArchiveKey() {
  return ['v1', '/v1/features/:id/revisions/:version/archive', 'PUT'] as const
}

export function usePutV1FeaturesIdRevisionsVersionArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['archive']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.features)[':id']['revisions'][':version']['archive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1FeaturesIdRevisionsVersionArchiveKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['archive']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].archive.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1FeaturesIdRevisionsVersionToggleKey() {
  return ['v1', '/v1/features/:id/revisions/:version/toggle', 'POST'] as const
}

export function usePostV1FeaturesIdRevisionsVersionToggle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['toggle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.features)[':id']['revisions'][':version']['toggle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesIdRevisionsVersionToggleKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['toggle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].toggle.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1FeaturesIdRevisionsVersionRulesKey() {
  return ['v1', '/v1/features/:id/revisions/:version/rules', 'POST'] as const
}

export function usePostV1FeaturesIdRevisionsVersionRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['rules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.features)[':id']['revisions'][':version']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesIdRevisionsVersionRulesKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].rules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1FeaturesIdRevisionsVersionRulesRuleIdKey() {
  return ['v1', '/v1/features/:id/revisions/:version/rules/:ruleId', 'PUT'] as const
}

export function usePutV1FeaturesIdRevisionsVersionRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1FeaturesIdRevisionsVersionRulesRuleIdKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].rules[':ruleId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FeaturesIdRevisionsVersionRulesRuleIdKey() {
  return ['v1', '/v1/features/:id/revisions/:version/rules/:ruleId', 'DELETE'] as const
}

export function useDeleteV1FeaturesIdRevisionsVersionRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FeaturesIdRevisionsVersionRulesRuleIdKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].rules[':ruleId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1FeaturesIdRevisionsVersionRulesReorderKey() {
  return ['v1', '/v1/features/:id/revisions/:version/rules/reorder', 'POST'] as const
}

export function usePostV1FeaturesIdRevisionsVersionRulesReorder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['rules']['reorder']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.features)[':id']['revisions'][':version']['rules']['reorder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesIdRevisionsVersionRulesReorderKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['rules']['reorder']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].rules.reorder.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleKey() {
  return ['v1', '/v1/features/:id/revisions/:version/rules/:ruleId/ramp-schedule', 'PUT'] as const
}

export function usePutV1FeaturesIdRevisionsVersionRulesRuleIdRampSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].rules[':ruleId']['ramp-schedule'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleKey() {
  return [
    'v1',
    '/v1/features/:id/revisions/:version/rules/:ruleId/ramp-schedule',
    'DELETE',
  ] as const
}

export function useDeleteV1FeaturesIdRevisionsVersionRulesRuleIdRampSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].rules[':ruleId']['ramp-schedule'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1FeaturesIdRevisionsVersionRequestReviewKey() {
  return ['v1', '/v1/features/:id/revisions/:version/request-review', 'POST'] as const
}

export function usePostV1FeaturesIdRevisionsVersionRequestReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['request-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.features)[':id']['revisions'][':version']['request-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesIdRevisionsVersionRequestReviewKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['request-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version']['request-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1FeaturesIdRevisionsVersionSubmitReviewKey() {
  return ['v1', '/v1/features/:id/revisions/:version/submit-review', 'POST'] as const
}

export function usePostV1FeaturesIdRevisionsVersionSubmitReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['submit-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.features)[':id']['revisions'][':version']['submit-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesIdRevisionsVersionSubmitReviewKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['submit-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version']['submit-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1FeaturesIdRevisionsVersionMergeStatusKey(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['merge-status']['$get']
  >,
) {
  return ['v1', '/v1/features/:id/revisions/:version/merge-status', args] as const
}

export function useGetV1FeaturesIdRevisionsVersionMergeStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['merge-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.features)[':id']['revisions'][':version']['merge-status']['$get']
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
        ? getGetV1FeaturesIdRevisionsVersionMergeStatusKey(args)
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
                (typeof client.v1.features)[':id']['revisions'][':version']['merge-status']['$get']
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
          client.v1.features[':id'].revisions[':version']['merge-status'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FeaturesIdRevisionsVersionMergeStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.features)[':id']['revisions'][':version']['merge-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.features)[':id']['revisions'][':version']['merge-status']['$get']
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
        ? getGetV1FeaturesIdRevisionsVersionMergeStatusKey(args)
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
                (typeof client.v1.features)[':id']['revisions'][':version']['merge-status']['$get']
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
          client.v1.features[':id'].revisions[':version']['merge-status'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1FeaturesIdRevisionsVersionRebaseKey() {
  return ['v1', '/v1/features/:id/revisions/:version/rebase', 'POST'] as const
}

export function usePostV1FeaturesIdRevisionsVersionRebase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['rebase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.features)[':id']['revisions'][':version']['rebase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesIdRevisionsVersionRebaseKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['rebase']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].rebase.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1FeaturesIdRevisionsVersionPublishKey() {
  return ['v1', '/v1/features/:id/revisions/:version/publish', 'POST'] as const
}

export function usePostV1FeaturesIdRevisionsVersionPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['publish']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.features)[':id']['revisions'][':version']['publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesIdRevisionsVersionPublishKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].publish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1FeaturesIdRevisionsVersionDiscardKey() {
  return ['v1', '/v1/features/:id/revisions/:version/discard', 'POST'] as const
}

export function usePostV1FeaturesIdRevisionsVersionDiscard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['discard']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.features)[':id']['revisions'][':version']['discard']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesIdRevisionsVersionDiscardKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['discard']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].discard.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1FeaturesIdRevisionsVersionRevertKey() {
  return ['v1', '/v1/features/:id/revisions/:version/revert', 'POST'] as const
}

export function usePostV1FeaturesIdRevisionsVersionRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.features)[':id']['revisions'][':version']['revert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.features)[':id']['revisions'][':version']['revert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeaturesIdRevisionsVersionRevertKey()
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
            (typeof client.v1.features)[':id']['revisions'][':version']['revert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.features[':id'].revisions[':version'].revert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2FeaturesKey(args: InferRequestType<typeof client.v2.features.$get>) {
  return ['v2', '/v2/features', args] as const
}

export function useGetV2Features<TError = unknown>(
  args: InferRequestType<typeof client.v2.features.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.features.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2FeaturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.features.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Features<TError = unknown>(
  args: InferRequestType<typeof client.v2.features.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.features.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2FeaturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.features.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2FeaturesKey() {
  return ['v2', '/v2/features', 'POST'] as const
}

export function usePostV2Features<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.features.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.features.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.features.$post> }) =>
        parseResponse(client.v2.features.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2FeaturesIdKey(
  args: InferRequestType<(typeof client.v2.features)[':id']['$get']>,
) {
  return ['v2', '/v2/features/:id', args] as const
}

export function useGetV2FeaturesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.features)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.features)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2FeaturesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.features)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.features[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FeaturesId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.features)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.features)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2FeaturesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.features)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.features[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2FeaturesIdKey() {
  return ['v2', '/v2/features/:id', 'POST'] as const
}

export function usePostV2FeaturesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.features)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.features)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.features)[':id']['$post']> },
      ) => parseResponse(client.v2.features[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2FeaturesIdKey() {
  return ['v2', '/v2/features/:id', 'DELETE'] as const
}

export function useDeleteV2FeaturesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.features)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.features)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2FeaturesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.features)[':id']['$delete']> },
      ) => parseResponse(client.v2.features[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdToggleKey() {
  return ['v2', '/v2/features/:id/toggle', 'POST'] as const
}

export function usePostV2FeaturesIdToggle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.features)[':id']['toggle']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.features)[':id']['toggle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdToggleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.features)[':id']['toggle']['$post']> },
      ) => parseResponse(client.v2.features[':id'].toggle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevertKey() {
  return ['v2', '/v2/features/:id/revert', 'POST'] as const
}

export function usePostV2FeaturesIdRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.features)[':id']['revert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.features)[':id']['revert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.features)[':id']['revert']['$post']> },
      ) => parseResponse(client.v2.features[':id'].revert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2FeatureKeysKey(
  args: InferRequestType<(typeof client.v2)['feature-keys']['$get']>,
) {
  return ['v2', '/v2/feature-keys', args] as const
}

export function useGetV2FeatureKeys<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['feature-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['feature-keys']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2FeatureKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['feature-keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['feature-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FeatureKeys<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['feature-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['feature-keys']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2FeatureKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['feature-keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['feature-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2StaleFeaturesKey(
  args: InferRequestType<(typeof client.v2)['stale-features']['$get']>,
) {
  return ['v2', '/v2/stale-features', args] as const
}

export function useGetV2StaleFeatures<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['stale-features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['stale-features']['$get']>>>
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
        ? getGetV2StaleFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['stale-features']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['stale-features'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2StaleFeatures<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['stale-features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['stale-features']['$get']>>>
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
        ? getGetV2StaleFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['stale-features']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['stale-features'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2FeatureRevisionsKey(
  args: InferRequestType<(typeof client.v2)['feature-revisions']['$get']>,
) {
  return ['v2', '/v2/feature-revisions', args] as const
}

export function useGetV2FeatureRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['feature-revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['feature-revisions']['$get']>>>
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
        ? getGetV2FeatureRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['feature-revisions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['feature-revisions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FeatureRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['feature-revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['feature-revisions']['$get']>>>
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
        ? getGetV2FeatureRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['feature-revisions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['feature-revisions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2FeaturesIdRevisionsKey(
  args: InferRequestType<(typeof client.v2.features)[':id']['revisions']['$get']>,
) {
  return ['v2', '/v2/features/:id/revisions', args] as const
}

export function useGetV2FeaturesIdRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.features)[':id']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.features)[':id']['revisions']['$get']>>
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
        ? getGetV2FeaturesIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.features)[':id']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.features[':id'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FeaturesIdRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.features)[':id']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.features)[':id']['revisions']['$get']>>
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
        ? getGetV2FeaturesIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.features)[':id']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.features[':id'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsKey() {
  return ['v2', '/v2/features/:id/revisions', 'POST'] as const
}

export function usePostV2FeaturesIdRevisions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.features)[':id']['revisions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.features)[':id']['revisions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.features)[':id']['revisions']['$post']> },
      ) => parseResponse(client.v2.features[':id'].revisions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2FeaturesIdRevisionsLatestKey(
  args: InferRequestType<(typeof client.v2.features)[':id']['revisions']['latest']['$get']>,
) {
  return ['v2', '/v2/features/:id/revisions/latest', args] as const
}

export function useGetV2FeaturesIdRevisionsLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v2.features)[':id']['revisions']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.features)[':id']['revisions']['latest']['$get']>>
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
        ? getGetV2FeaturesIdRevisionsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.features)[':id']['revisions']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.features[':id'].revisions.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FeaturesIdRevisionsLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v2.features)[':id']['revisions']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.features)[':id']['revisions']['latest']['$get']>>
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
        ? getGetV2FeaturesIdRevisionsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.features)[':id']['revisions']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.features[':id'].revisions.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2FeaturesIdRevisionsVersionKey(
  args: InferRequestType<(typeof client.v2.features)[':id']['revisions'][':version']['$get']>,
) {
  return ['v2', '/v2/features/:id/revisions/:version', args] as const
}

export function useGetV2FeaturesIdRevisionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v2.features)[':id']['revisions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.features)[':id']['revisions'][':version']['$get']>>
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
        ? getGetV2FeaturesIdRevisionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.features)[':id']['revisions'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.features[':id'].revisions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FeaturesIdRevisionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v2.features)[':id']['revisions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.features)[':id']['revisions'][':version']['$get']>>
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
        ? getGetV2FeaturesIdRevisionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.features)[':id']['revisions'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.features[':id'].revisions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2FeaturesIdRevisionsVersionDiffKey(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['diff']['$get']
  >,
) {
  return ['v2', '/v2/features/:id/revisions/:version/diff', args] as const
}

export function useGetV2FeaturesIdRevisionsVersionDiff<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['diff']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.features)[':id']['revisions'][':version']['diff']['$get']
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
        ? getGetV2FeaturesIdRevisionsVersionDiffKey(args)
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
                (typeof client.v2.features)[':id']['revisions'][':version']['diff']['$get']
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
          client.v2.features[':id'].revisions[':version'].diff.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FeaturesIdRevisionsVersionDiff<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['diff']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.features)[':id']['revisions'][':version']['diff']['$get']
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
        ? getGetV2FeaturesIdRevisionsVersionDiffKey(args)
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
                (typeof client.v2.features)[':id']['revisions'][':version']['diff']['$get']
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
          client.v2.features[':id'].revisions[':version'].diff.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2FeaturesIdRevisionsVersionMetadataKey() {
  return ['v2', '/v2/features/:id/revisions/:version/metadata', 'PUT'] as const
}

export function usePutV2FeaturesIdRevisionsVersionMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['metadata']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['metadata']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2FeaturesIdRevisionsVersionMetadataKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['metadata']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].metadata.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2FeaturesIdRevisionsVersionDefaultValueKey() {
  return ['v2', '/v2/features/:id/revisions/:version/default-value', 'PUT'] as const
}

export function usePutV2FeaturesIdRevisionsVersionDefaultValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['default-value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['default-value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2FeaturesIdRevisionsVersionDefaultValueKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['default-value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version']['default-value'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2FeaturesIdRevisionsVersionPrerequisitesKey() {
  return ['v2', '/v2/features/:id/revisions/:version/prerequisites', 'PUT'] as const
}

export function usePutV2FeaturesIdRevisionsVersionPrerequisites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['prerequisites']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['prerequisites']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2FeaturesIdRevisionsVersionPrerequisitesKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['prerequisites']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].prerequisites.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2FeaturesIdRevisionsVersionHoldoutKey() {
  return ['v2', '/v2/features/:id/revisions/:version/holdout', 'PUT'] as const
}

export function usePutV2FeaturesIdRevisionsVersionHoldout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['holdout']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.features)[':id']['revisions'][':version']['holdout']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2FeaturesIdRevisionsVersionHoldoutKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['holdout']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].holdout.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2FeaturesIdRevisionsVersionArchiveKey() {
  return ['v2', '/v2/features/:id/revisions/:version/archive', 'PUT'] as const
}

export function usePutV2FeaturesIdRevisionsVersionArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['archive']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.features)[':id']['revisions'][':version']['archive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2FeaturesIdRevisionsVersionArchiveKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['archive']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].archive.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionToggleKey() {
  return ['v2', '/v2/features/:id/revisions/:version/toggle', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionToggle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['toggle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.features)[':id']['revisions'][':version']['toggle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionToggleKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['toggle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].toggle.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionRulesKey() {
  return ['v2', '/v2/features/:id/revisions/:version/rules', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['rules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.features)[':id']['revisions'][':version']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionRulesKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].rules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2FeaturesIdRevisionsVersionRulesRuleIdKey() {
  return ['v2', '/v2/features/:id/revisions/:version/rules/:ruleId', 'PUT'] as const
}

export function usePutV2FeaturesIdRevisionsVersionRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2FeaturesIdRevisionsVersionRulesRuleIdKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].rules[':ruleId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2FeaturesIdRevisionsVersionRulesRuleIdKey() {
  return ['v2', '/v2/features/:id/revisions/:version/rules/:ruleId', 'DELETE'] as const
}

export function useDeleteV2FeaturesIdRevisionsVersionRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2FeaturesIdRevisionsVersionRulesRuleIdKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].rules[':ruleId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionRulesReorderKey() {
  return ['v2', '/v2/features/:id/revisions/:version/rules/reorder', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionRulesReorder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['rules']['reorder']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['rules']['reorder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionRulesReorderKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['rules']['reorder']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].rules.reorder.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2FeaturesIdRevisionsVersionRulesRuleIdRampScheduleKey() {
  return ['v2', '/v2/features/:id/revisions/:version/rules/:ruleId/ramp-schedule', 'PUT'] as const
}

export function usePutV2FeaturesIdRevisionsVersionRulesRuleIdRampSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2FeaturesIdRevisionsVersionRulesRuleIdRampScheduleKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].rules[':ruleId']['ramp-schedule'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2FeaturesIdRevisionsVersionRulesRuleIdRampScheduleKey() {
  return [
    'v2',
    '/v2/features/:id/revisions/:version/rules/:ruleId/ramp-schedule',
    'DELETE',
  ] as const
}

export function useDeleteV2FeaturesIdRevisionsVersionRulesRuleIdRampSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2FeaturesIdRevisionsVersionRulesRuleIdRampScheduleKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['rules'][':ruleId']['ramp-schedule']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].rules[':ruleId']['ramp-schedule'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionRequestReviewKey() {
  return ['v2', '/v2/features/:id/revisions/:version/request-review', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionRequestReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['request-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['request-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionRequestReviewKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['request-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version']['request-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionSchedulePublishKey() {
  return ['v2', '/v2/features/:id/revisions/:version/schedule-publish', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionSchedulePublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['schedule-publish']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['schedule-publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionSchedulePublishKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['schedule-publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version']['schedule-publish'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionSubmitReviewKey() {
  return ['v2', '/v2/features/:id/revisions/:version/submit-review', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionSubmitReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['submit-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['submit-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionSubmitReviewKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['submit-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version']['submit-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionRecallReviewKey() {
  return ['v2', '/v2/features/:id/revisions/:version/recall-review', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionRecallReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['recall-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['recall-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionRecallReviewKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['recall-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version']['recall-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionUndoReviewKey() {
  return ['v2', '/v2/features/:id/revisions/:version/undo-review', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionUndoReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['undo-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['undo-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionUndoReviewKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['undo-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version']['undo-review'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2FeaturesIdRevisionsVersionLogKey(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['log']['$get']
  >,
) {
  return ['v2', '/v2/features/:id/revisions/:version/log', args] as const
}

export function useGetV2FeaturesIdRevisionsVersionLog<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['log']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.features)[':id']['revisions'][':version']['log']['$get']>
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
        ? getGetV2FeaturesIdRevisionsVersionLogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.features)[':id']['revisions'][':version']['log']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].log.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FeaturesIdRevisionsVersionLog<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['log']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.features)[':id']['revisions'][':version']['log']['$get']>
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
        ? getGetV2FeaturesIdRevisionsVersionLogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.features)[':id']['revisions'][':version']['log']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].log.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2FeaturesIdRevisionsVersionLogLogIdKey() {
  return ['v2', '/v2/features/:id/revisions/:version/log/:logId', 'PUT'] as const
}

export function usePutV2FeaturesIdRevisionsVersionLogLogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['log'][':logId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['log'][':logId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2FeaturesIdRevisionsVersionLogLogIdKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['log'][':logId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].log[':logId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2FeaturesIdRevisionsVersionLogLogIdKey() {
  return ['v2', '/v2/features/:id/revisions/:version/log/:logId', 'DELETE'] as const
}

export function useDeleteV2FeaturesIdRevisionsVersionLogLogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['log'][':logId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['log'][':logId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2FeaturesIdRevisionsVersionLogLogIdKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['log'][':logId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].log[':logId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2FeaturesIdRevisionsVersionMergeStatusKey(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['merge-status']['$get']
  >,
) {
  return ['v2', '/v2/features/:id/revisions/:version/merge-status', args] as const
}

export function useGetV2FeaturesIdRevisionsVersionMergeStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['merge-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.features)[':id']['revisions'][':version']['merge-status']['$get']
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
        ? getGetV2FeaturesIdRevisionsVersionMergeStatusKey(args)
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
                (typeof client.v2.features)[':id']['revisions'][':version']['merge-status']['$get']
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
          client.v2.features[':id'].revisions[':version']['merge-status'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FeaturesIdRevisionsVersionMergeStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.features)[':id']['revisions'][':version']['merge-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.features)[':id']['revisions'][':version']['merge-status']['$get']
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
        ? getGetV2FeaturesIdRevisionsVersionMergeStatusKey(args)
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
                (typeof client.v2.features)[':id']['revisions'][':version']['merge-status']['$get']
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
          client.v2.features[':id'].revisions[':version']['merge-status'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionRebasePreviewKey() {
  return ['v2', '/v2/features/:id/revisions/:version/rebase/preview', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionRebasePreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['rebase']['preview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['rebase']['preview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionRebasePreviewKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['rebase']['preview']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].rebase.preview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionRebaseKey() {
  return ['v2', '/v2/features/:id/revisions/:version/rebase', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionRebase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['rebase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.features)[':id']['revisions'][':version']['rebase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionRebaseKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['rebase']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].rebase.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionPublishKey() {
  return ['v2', '/v2/features/:id/revisions/:version/publish', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['publish']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionPublishKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].publish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionDiscardKey() {
  return ['v2', '/v2/features/:id/revisions/:version/discard', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionDiscard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['discard']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.features)[':id']['revisions'][':version']['discard']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionDiscardKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['discard']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].discard.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionReopenKey() {
  return ['v2', '/v2/features/:id/revisions/:version/reopen', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionReopen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['reopen']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.features)[':id']['revisions'][':version']['reopen']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionReopenKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['reopen']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].reopen.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FeaturesIdRevisionsVersionRevertKey() {
  return ['v2', '/v2/features/:id/revisions/:version/revert', 'POST'] as const
}

export function usePostV2FeaturesIdRevisionsVersionRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.features)[':id']['revisions'][':version']['revert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.features)[':id']['revisions'][':version']['revert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FeaturesIdRevisionsVersionRevertKey()
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
            (typeof client.v2.features)[':id']['revisions'][':version']['revert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.features[':id'].revisions[':version'].revert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ArchetypesKey() {
  return ['v1', '/v1/archetypes'] as const
}

export function useGetV1Archetypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.archetypes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ArchetypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.archetypes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.archetypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Archetypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.archetypes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ArchetypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.archetypes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.archetypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ArchetypesKey() {
  return ['v1', '/v1/archetypes', 'POST'] as const
}

export function usePostV1Archetypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.archetypes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.archetypes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ArchetypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.archetypes.$post> }) =>
        parseResponse(client.v1.archetypes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ArchetypesIdKey(
  args: InferRequestType<(typeof client.v1.archetypes)[':id']['$get']>,
) {
  return ['v1', '/v1/archetypes/:id', args] as const
}

export function useGetV1ArchetypesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.archetypes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.archetypes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ArchetypesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.archetypes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.archetypes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ArchetypesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.archetypes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.archetypes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ArchetypesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.archetypes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.archetypes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ArchetypesIdKey() {
  return ['v1', '/v1/archetypes/:id', 'PUT'] as const
}

export function usePutV1ArchetypesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.archetypes)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.archetypes)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ArchetypesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.archetypes)[':id']['$put']> },
      ) => parseResponse(client.v1.archetypes[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ArchetypesIdKey() {
  return ['v1', '/v1/archetypes/:id', 'DELETE'] as const
}

export function useDeleteV1ArchetypesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.archetypes)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.archetypes)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ArchetypesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.archetypes)[':id']['$delete']> },
      ) => parseResponse(client.v1.archetypes[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExperimentsKey(args: InferRequestType<typeof client.v1.experiments.$get>) {
  return ['v1', '/v1/experiments', args] as const
}

export function useGetV1Experiments<TError = unknown>(
  args: InferRequestType<typeof client.v1.experiments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.experiments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ExperimentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.experiments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Experiments<TError = unknown>(
  args: InferRequestType<typeof client.v1.experiments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.experiments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ExperimentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.experiments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ExperimentsKey() {
  return ['v1', '/v1/experiments', 'POST'] as const
}

export function usePostV1Experiments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.experiments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.experiments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.experiments.$post> }) =>
        parseResponse(client.v1.experiments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExperimentsResultsKey(
  args: InferRequestType<typeof client.v1.experiments.results.$get>,
) {
  return ['v1', '/v1/experiments/results', args] as const
}

export function useGetV1ExperimentsResults<TError = unknown>(
  args: InferRequestType<typeof client.v1.experiments.results.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.experiments.results.$get>>>
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
        ? getGetV1ExperimentsResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.experiments.results.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.experiments.results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentsResults<TError = unknown>(
  args: InferRequestType<typeof client.v1.experiments.results.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.experiments.results.$get>>>
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
        ? getGetV1ExperimentsResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.experiments.results.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.experiments.results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ExperimentsIdKey(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['$get']>,
) {
  return ['v1', '/v1/experiments/:id', args] as const
}

export function useGetV1ExperimentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.experiments)[':id']['$get']>>>
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
        ? getGetV1ExperimentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.experiments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.experiments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.experiments)[':id']['$get']>>>
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
        ? getGetV1ExperimentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.experiments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.experiments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ExperimentsIdKey() {
  return ['v1', '/v1/experiments/:id', 'POST'] as const
}

export function usePostV1ExperimentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.experiments)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.experiments)[':id']['$post']> },
      ) => parseResponse(client.v1.experiments[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ExperimentsIdKey() {
  return ['v1', '/v1/experiments/:id', 'DELETE'] as const
}

export function useDeleteV1ExperimentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.experiments)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ExperimentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.experiments)[':id']['$delete']> },
      ) => parseResponse(client.v1.experiments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExperimentsIdStartChecklistKey(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['start-checklist']['$get']>,
) {
  return ['v1', '/v1/experiments/:id/start-checklist', args] as const
}

export function useGetV1ExperimentsIdStartChecklist<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['start-checklist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':id']['start-checklist']['$get']>>
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
        ? getGetV1ExperimentsIdStartChecklistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':id']['start-checklist']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.experiments[':id']['start-checklist'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentsIdStartChecklist<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['start-checklist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':id']['start-checklist']['$get']>>
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
        ? getGetV1ExperimentsIdStartChecklistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':id']['start-checklist']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.experiments[':id']['start-checklist'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ExperimentsIdResultsKey(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['results']['$get']>,
) {
  return ['v1', '/v1/experiments/:id/results', args] as const
}

export function useGetV1ExperimentsIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':id']['results']['$get']>>
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
        ? getGetV1ExperimentsIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':id']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.experiments[':id'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentsIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':id']['results']['$get']>>
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
        ? getGetV1ExperimentsIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':id']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.experiments[':id'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ExperimentsIdArchiveKey() {
  return ['v1', '/v1/experiments/:id/archive', 'POST'] as const
}

export function usePostV1ExperimentsIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':id']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':id']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.experiments)[':id']['archive']['$post']> },
      ) => parseResponse(client.v1.experiments[':id'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExperimentsIdUnarchiveKey() {
  return ['v1', '/v1/experiments/:id/unarchive', 'POST'] as const
}

export function usePostV1ExperimentsIdUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':id']['unarchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':id']['unarchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsIdUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.experiments)[':id']['unarchive']['$post']> },
      ) => parseResponse(client.v1.experiments[':id'].unarchive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExperimentsIdStartKey() {
  return ['v1', '/v1/experiments/:id/start', 'POST'] as const
}

export function usePostV1ExperimentsIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':id']['start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':id']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.experiments)[':id']['start']['$post']> },
      ) => parseResponse(client.v1.experiments[':id'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExperimentsIdStartChecklistManualCompleteKey() {
  return ['v1', '/v1/experiments/:id/start-checklist/manual/complete', 'POST'] as const
}

export function usePostV1ExperimentsIdStartChecklistManualComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.experiments)[':id']['start-checklist']['manual']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.experiments)[':id']['start-checklist']['manual']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsIdStartChecklistManualCompleteKey()
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
            (typeof client.v1.experiments)[':id']['start-checklist']['manual']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.experiments[':id']['start-checklist'].manual.complete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExperimentsIdStopKey() {
  return ['v1', '/v1/experiments/:id/stop', 'POST'] as const
}

export function usePostV1ExperimentsIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':id']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':id']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.experiments)[':id']['stop']['$post']> },
      ) => parseResponse(client.v1.experiments[':id'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ExperimentsIdScheduleKey() {
  return ['v1', '/v1/experiments/:id/schedule', 'PUT'] as const
}

export function usePutV1ExperimentsIdSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':id']['schedule']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':id']['schedule']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ExperimentsIdScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.experiments)[':id']['schedule']['$put']> },
      ) => parseResponse(client.v1.experiments[':id'].schedule.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExperimentsIdModifyTemporaryRolloutKey() {
  return ['v1', '/v1/experiments/:id/modify-temporary-rollout', 'POST'] as const
}

export function usePostV1ExperimentsIdModifyTemporaryRollout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.experiments)[':id']['modify-temporary-rollout']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':id']['modify-temporary-rollout']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsIdModifyTemporaryRolloutKey()
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
            (typeof client.v1.experiments)[':id']['modify-temporary-rollout']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.experiments[':id']['modify-temporary-rollout'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExperimentsIdSnapshotKey() {
  return ['v1', '/v1/experiments/:id/snapshot', 'POST'] as const
}

export function usePostV1ExperimentsIdSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':id']['snapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':id']['snapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsIdSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.experiments)[':id']['snapshot']['$post']> },
      ) => parseResponse(client.v1.experiments[':id'].snapshot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExperimentsIdVariationVariationIdScreenshotUploadKey() {
  return ['v1', '/v1/experiments/:id/variation/:variationId/screenshot/upload', 'POST'] as const
}

export function usePostV1ExperimentsIdVariationVariationIdScreenshotUpload<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.experiments)[':id']['variation'][':variationId']['screenshot']['upload']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.experiments)[':id']['variation'][':variationId']['screenshot']['upload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsIdVariationVariationIdScreenshotUploadKey()
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
            (typeof client.v1.experiments)[':id']['variation'][':variationId']['screenshot']['upload']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.experiments[':id'].variation[':variationId'].screenshot.upload.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ExperimentsIdVariationVariationIdScreenshotKey() {
  return ['v1', '/v1/experiments/:id/variation/:variationId/screenshot', 'DELETE'] as const
}

export function useDeleteV1ExperimentsIdVariationVariationIdScreenshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.experiments)[':id']['variation'][':variationId']['screenshot']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.experiments)[':id']['variation'][':variationId']['screenshot']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ExperimentsIdVariationVariationIdScreenshotKey()
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
            (typeof client.v1.experiments)[':id']['variation'][':variationId']['screenshot']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.experiments[':id'].variation[':variationId'].screenshot.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExperimentNamesKey(
  args: InferRequestType<(typeof client.v1)['experiment-names']['$get']>,
) {
  return ['v1', '/v1/experiment-names', args] as const
}

export function useGetV1ExperimentNames<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['experiment-names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['experiment-names']['$get']>>>
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
        ? getGetV1ExperimentNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['experiment-names']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['experiment-names'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentNames<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['experiment-names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['experiment-names']['$get']>>>
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
        ? getGetV1ExperimentNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['experiment-names']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['experiment-names'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ExperimentsIdCommentKey() {
  return ['v1', '/v1/experiments/:id/comment', 'POST'] as const
}

export function usePostV1ExperimentsIdComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':id']['comment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':id']['comment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsIdCommentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.experiments)[':id']['comment']['$post']> },
      ) => parseResponse(client.v1.experiments[':id'].comment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExperimentsIdVisualChangesetsKey(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['visual-changesets']['$get']>,
) {
  return ['v1', '/v1/experiments/:id/visual-changesets', args] as const
}

export function useGetV1ExperimentsIdVisualChangesets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['visual-changesets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':id']['visual-changesets']['$get']>>
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
        ? getGetV1ExperimentsIdVisualChangesetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':id']['visual-changesets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.experiments[':id']['visual-changesets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentsIdVisualChangesets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':id']['visual-changesets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':id']['visual-changesets']['$get']>>
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
        ? getGetV1ExperimentsIdVisualChangesetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':id']['visual-changesets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.experiments[':id']['visual-changesets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ExperimentsIdVisualChangesetsKey() {
  return ['v1', '/v1/experiments/:id/visual-changesets', 'POST'] as const
}

export function usePostV1ExperimentsIdVisualChangesets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':id']['visual-changesets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':id']['visual-changesets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsIdVisualChangesetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.experiments)[':id']['visual-changesets']['$post']>
        },
      ) =>
        parseResponse(client.v1.experiments[':id']['visual-changesets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ContextualBanditsIdCurrentKey(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['current']['$get']>,
) {
  return ['v1', '/v1/contextual-bandits/:id/current', args] as const
}

export function useGetV1ContextualBanditsIdCurrent<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['current']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['current']['$get']>>
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
        ? getGetV1ContextualBanditsIdCurrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['current']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['contextual-bandits'][':id'].current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextualBanditsIdCurrent<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['current']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['current']['$get']>>
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
        ? getGetV1ContextualBanditsIdCurrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['current']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['contextual-bandits'][':id'].current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ContextualBanditsIdSnapshotsKey(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['snapshots']['$get']>,
) {
  return ['v1', '/v1/contextual-bandits/:id/snapshots', args] as const
}

export function useGetV1ContextualBanditsIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['contextual-bandits'][':id']['snapshots']['$get']>
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
        ? getGetV1ContextualBanditsIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['contextual-bandits'][':id']['snapshots']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['contextual-bandits'][':id'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextualBanditsIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['contextual-bandits'][':id']['snapshots']['$get']>
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
        ? getGetV1ContextualBanditsIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['contextual-bandits'][':id']['snapshots']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['contextual-bandits'][':id'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ContextualBanditsIdSnapshotsSnapshotIdKey(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['snapshots'][':snapshotId']['$get']
  >,
) {
  return ['v1', '/v1/contextual-bandits/:id/snapshots/:snapshotId', args] as const
}

export function useGetV1ContextualBanditsIdSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['contextual-bandits'][':id']['snapshots'][':snapshotId']['$get']
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
        ? getGetV1ContextualBanditsIdSnapshotsSnapshotIdKey(args)
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
                (typeof client.v1)['contextual-bandits'][':id']['snapshots'][':snapshotId']['$get']
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
          client.v1['contextual-bandits'][':id'].snapshots[':snapshotId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextualBanditsIdSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['contextual-bandits'][':id']['snapshots'][':snapshotId']['$get']
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
        ? getGetV1ContextualBanditsIdSnapshotsSnapshotIdKey(args)
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
                (typeof client.v1)['contextual-bandits'][':id']['snapshots'][':snapshotId']['$get']
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
          client.v1['contextual-bandits'][':id'].snapshots[':snapshotId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ContextualBanditsIdEventsKey(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['events']['$get']>,
) {
  return ['v1', '/v1/contextual-bandits/:id/events', args] as const
}

export function useGetV1ContextualBanditsIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['events']['$get']>>
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
        ? getGetV1ContextualBanditsIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['contextual-bandits'][':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextualBanditsIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['events']['$get']>>
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
        ? getGetV1ContextualBanditsIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['contextual-bandits'][':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ContextualBanditsIdEventsEventIdKey(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['events'][':eventId']['$get']
  >,
) {
  return ['v1', '/v1/contextual-bandits/:id/events/:eventId', args] as const
}

export function useGetV1ContextualBanditsIdEventsEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['events'][':eventId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['contextual-bandits'][':id']['events'][':eventId']['$get']
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
        ? getGetV1ContextualBanditsIdEventsEventIdKey(args)
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
                (typeof client.v1)['contextual-bandits'][':id']['events'][':eventId']['$get']
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
          client.v1['contextual-bandits'][':id'].events[':eventId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextualBanditsIdEventsEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['events'][':eventId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['contextual-bandits'][':id']['events'][':eventId']['$get']
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
        ? getGetV1ContextualBanditsIdEventsEventIdKey(args)
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
                (typeof client.v1)['contextual-bandits'][':id']['events'][':eventId']['$get']
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
          client.v1['contextual-bandits'][':id'].events[':eventId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ContextualBanditsIdResultsKey(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['results']['$get']>,
) {
  return ['v1', '/v1/contextual-bandits/:id/results', args] as const
}

export function useGetV1ContextualBanditsIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['results']['$get']>>
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
        ? getGetV1ContextualBanditsIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['contextual-bandits'][':id'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextualBanditsIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['results']['$get']>>
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
        ? getGetV1ContextualBanditsIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['contextual-bandits'][':id'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ContextualBanditsIdStatusKey(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['status']['$get']>,
) {
  return ['v1', '/v1/contextual-bandits/:id/status', args] as const
}

export function useGetV1ContextualBanditsIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['status']['$get']>>
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
        ? getGetV1ContextualBanditsIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['contextual-bandits'][':id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextualBanditsIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['status']['$get']>>
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
        ? getGetV1ContextualBanditsIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['contextual-bandits'][':id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ContextualBanditsIdLinkedFeaturesKey(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['linked-features']['$get']
  >,
) {
  return ['v1', '/v1/contextual-bandits/:id/linked-features', args] as const
}

export function useGetV1ContextualBanditsIdLinkedFeatures<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['linked-features']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['contextual-bandits'][':id']['linked-features']['$get']>
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
        ? getGetV1ContextualBanditsIdLinkedFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['contextual-bandits'][':id']['linked-features']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['contextual-bandits'][':id']['linked-features'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextualBanditsIdLinkedFeatures<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['linked-features']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['contextual-bandits'][':id']['linked-features']['$get']>
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
        ? getGetV1ContextualBanditsIdLinkedFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['contextual-bandits'][':id']['linked-features']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['contextual-bandits'][':id']['linked-features'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ContextualBanditsIdLinkedFeatureFeatureIdKey() {
  return ['v1', '/v1/contextual-bandits/:id/linked-feature/:featureId', 'PUT'] as const
}

export function usePutV1ContextualBanditsIdLinkedFeatureFeatureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['contextual-bandits'][':id']['linked-feature'][':featureId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['contextual-bandits'][':id']['linked-feature'][':featureId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ContextualBanditsIdLinkedFeatureFeatureIdKey()
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
            (typeof client.v1)['contextual-bandits'][':id']['linked-feature'][':featureId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['contextual-bandits'][':id']['linked-feature'][':featureId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ContextualBanditsIdLinkedFeatureFeatureIdKey() {
  return ['v1', '/v1/contextual-bandits/:id/linked-feature/:featureId', 'POST'] as const
}

export function usePostV1ContextualBanditsIdLinkedFeatureFeatureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['contextual-bandits'][':id']['linked-feature'][':featureId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['contextual-bandits'][':id']['linked-feature'][':featureId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextualBanditsIdLinkedFeatureFeatureIdKey()
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
            (typeof client.v1)['contextual-bandits'][':id']['linked-feature'][':featureId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['contextual-bandits'][':id']['linked-feature'][':featureId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ContextualBanditsIdLinkedFeatureFeatureIdKey() {
  return ['v1', '/v1/contextual-bandits/:id/linked-feature/:featureId', 'DELETE'] as const
}

export function useDeleteV1ContextualBanditsIdLinkedFeatureFeatureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['contextual-bandits'][':id']['linked-feature'][':featureId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['contextual-bandits'][':id']['linked-feature'][':featureId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ContextualBanditsIdLinkedFeatureFeatureIdKey()
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
            (typeof client.v1)['contextual-bandits'][':id']['linked-feature'][':featureId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['contextual-bandits'][':id']['linked-feature'][':featureId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SnapshotsIdKey(
  args: InferRequestType<(typeof client.v1.snapshots)[':id']['$get']>,
) {
  return ['v1', '/v1/snapshots/:id', args] as const
}

export function useGetV1SnapshotsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.snapshots)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snapshots)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1SnapshotsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snapshots)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.snapshots[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SnapshotsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.snapshots)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snapshots)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1SnapshotsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snapshots)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.snapshots[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1MetricsKey(args: InferRequestType<typeof client.v1.metrics.$get>) {
  return ['v1', '/v1/metrics', args] as const
}

export function useGetV1Metrics<TError = unknown>(
  args: InferRequestType<typeof client.v1.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.metrics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Metrics<TError = unknown>(
  args: InferRequestType<typeof client.v1.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.metrics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1MetricsKey() {
  return ['v1', '/v1/metrics', 'POST'] as const
}

export function usePostV1Metrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.metrics.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.metrics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.metrics.$post> }) =>
        parseResponse(client.v1.metrics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MetricsIdKey(
  args: InferRequestType<(typeof client.v1.metrics)[':id']['$get']>,
) {
  return ['v1', '/v1/metrics/:id', args] as const
}

export function useGetV1MetricsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.metrics)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.metrics)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1MetricsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.metrics)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.metrics[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MetricsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.metrics)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.metrics)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1MetricsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.metrics)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.metrics[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1MetricsIdKey() {
  return ['v1', '/v1/metrics/:id', 'PUT'] as const
}

export function usePutV1MetricsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.metrics)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.metrics)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1MetricsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.metrics)[':id']['$put']> },
      ) => parseResponse(client.v1.metrics[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MetricsIdKey() {
  return ['v1', '/v1/metrics/:id', 'DELETE'] as const
}

export function useDeleteV1MetricsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.metrics)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.metrics)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MetricsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.metrics)[':id']['$delete']> },
      ) => parseResponse(client.v1.metrics[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MetricsIdExperimentsKey(
  args: InferRequestType<(typeof client.v1.metrics)[':id']['experiments']['$get']>,
) {
  return ['v1', '/v1/metrics/:id/experiments', args] as const
}

export function useGetV1MetricsIdExperiments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.metrics)[':id']['experiments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.metrics)[':id']['experiments']['$get']>>
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
        ? getGetV1MetricsIdExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.metrics)[':id']['experiments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.metrics[':id'].experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MetricsIdExperiments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.metrics)[':id']['experiments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.metrics)[':id']['experiments']['$get']>>
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
        ? getGetV1MetricsIdExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.metrics)[':id']['experiments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.metrics[':id'].experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsageMetricsKey(
  args: InferRequestType<typeof client.v1.usage.metrics.$get>,
) {
  return ['v1', '/v1/usage/metrics', args] as const
}

export function useGetV1UsageMetrics<TError = unknown>(
  args: InferRequestType<typeof client.v1.usage.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.usage.metrics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsageMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.usage.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.usage.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsageMetrics<TError = unknown>(
  args: InferRequestType<typeof client.v1.usage.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.usage.metrics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsageMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.usage.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.usage.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SegmentsKey(args: InferRequestType<typeof client.v1.segments.$get>) {
  return ['v1', '/v1/segments', args] as const
}

export function useGetV1Segments<TError = unknown>(
  args: InferRequestType<typeof client.v1.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.segments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SegmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.segments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Segments<TError = unknown>(
  args: InferRequestType<typeof client.v1.segments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.segments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SegmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.segments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SegmentsKey() {
  return ['v1', '/v1/segments', 'POST'] as const
}

export function usePostV1Segments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.segments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.segments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SegmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.segments.$post> }) =>
        parseResponse(client.v1.segments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SegmentsIdKey(
  args: InferRequestType<(typeof client.v1.segments)[':id']['$get']>,
) {
  return ['v1', '/v1/segments/:id', args] as const
}

export function useGetV1SegmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.segments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1SegmentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.segments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SegmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.segments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1SegmentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.segments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SegmentsIdKey() {
  return ['v1', '/v1/segments/:id', 'POST'] as const
}

export function usePostV1SegmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.segments)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SegmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.segments)[':id']['$post']> },
      ) => parseResponse(client.v1.segments[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SegmentsIdKey() {
  return ['v1', '/v1/segments/:id', 'DELETE'] as const
}

export function useDeleteV1SegmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.segments)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.segments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SegmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.segments)[':id']['$delete']> },
      ) => parseResponse(client.v1.segments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DimensionsKey(args: InferRequestType<typeof client.v1.dimensions.$get>) {
  return ['v1', '/v1/dimensions', args] as const
}

export function useGetV1Dimensions<TError = unknown>(
  args: InferRequestType<typeof client.v1.dimensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dimensions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DimensionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dimensions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dimensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Dimensions<TError = unknown>(
  args: InferRequestType<typeof client.v1.dimensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dimensions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DimensionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dimensions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dimensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DimensionsKey() {
  return ['v1', '/v1/dimensions', 'POST'] as const
}

export function usePostV1Dimensions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dimensions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dimensions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DimensionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.dimensions.$post> }) =>
        parseResponse(client.v1.dimensions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DimensionsIdKey(
  args: InferRequestType<(typeof client.v1.dimensions)[':id']['$get']>,
) {
  return ['v1', '/v1/dimensions/:id', args] as const
}

export function useGetV1DimensionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.dimensions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dimensions)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DimensionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dimensions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dimensions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DimensionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.dimensions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dimensions)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DimensionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dimensions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dimensions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DimensionsIdKey() {
  return ['v1', '/v1/dimensions/:id', 'POST'] as const
}

export function usePostV1DimensionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dimensions)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.dimensions)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DimensionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.dimensions)[':id']['$post']> },
      ) => parseResponse(client.v1.dimensions[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DimensionsIdKey() {
  return ['v1', '/v1/dimensions/:id', 'DELETE'] as const
}

export function useDeleteV1DimensionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dimensions)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.dimensions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DimensionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.dimensions)[':id']['$delete']> },
      ) => parseResponse(client.v1.dimensions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsKey(args: InferRequestType<typeof client.v1.projects.$get>) {
  return ['v1', '/v1/projects', args] as const
}

export function useGetV1Projects<TError = unknown>(
  args: InferRequestType<typeof client.v1.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Projects<TError = unknown>(
  args: InferRequestType<typeof client.v1.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsKey() {
  return ['v1', '/v1/projects', 'POST'] as const
}

export function usePostV1Projects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.projects.$post> }) =>
        parseResponse(client.v1.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsIdKey(
  args: InferRequestType<(typeof client.v1.projects)[':id']['$get']>,
) {
  return ['v1', '/v1/projects/:id', args] as const
}

export function useGetV1ProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsIdKey() {
  return ['v1', '/v1/projects/:id', 'PUT'] as const
}

export function usePutV1ProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.projects)[':id']['$put']> },
      ) => parseResponse(client.v1.projects[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsIdKey() {
  return ['v1', '/v1/projects/:id', 'DELETE'] as const
}

export function useDeleteV1ProjectsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.projects)[':id']['$delete']> },
      ) => parseResponse(client.v1.projects[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EnvironmentsKey() {
  return ['v1', '/v1/environments'] as const
}

export function useGetV1Environments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EnvironmentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.environments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Environments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EnvironmentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.environments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EnvironmentsKey() {
  return ['v1', '/v1/environments', 'POST'] as const
}

export function usePostV1Environments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.environments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EnvironmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.environments.$post> }) =>
        parseResponse(client.v1.environments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1EnvironmentsIdKey() {
  return ['v1', '/v1/environments/:id', 'PUT'] as const
}

export function usePutV1EnvironmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.environments)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.environments)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EnvironmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.environments)[':id']['$put']> },
      ) => parseResponse(client.v1.environments[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EnvironmentsIdKey() {
  return ['v1', '/v1/environments/:id', 'DELETE'] as const
}

export function useDeleteV1EnvironmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.environments)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.environments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EnvironmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.environments)[':id']['$delete']> },
      ) => parseResponse(client.v1.environments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AttributesKey(args: InferRequestType<typeof client.v1.attributes.$get>) {
  return ['v1', '/v1/attributes', args] as const
}

export function useGetV1Attributes<TError = unknown>(
  args: InferRequestType<typeof client.v1.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attributes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AttributesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attributes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Attributes<TError = unknown>(
  args: InferRequestType<typeof client.v1.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attributes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AttributesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attributes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AttributesKey() {
  return ['v1', '/v1/attributes', 'POST'] as const
}

export function usePostV1Attributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.attributes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.attributes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.attributes.$post> }) =>
        parseResponse(client.v1.attributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1AttributesPropertyKey() {
  return ['v1', '/v1/attributes/:property', 'PUT'] as const
}

export function usePutV1AttributesProperty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.attributes)[':property']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.attributes)[':property']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AttributesPropertyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.attributes)[':property']['$put']> },
      ) => parseResponse(client.v1.attributes[':property'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AttributesPropertyKey() {
  return ['v1', '/v1/attributes/:property', 'DELETE'] as const
}

export function useDeleteV1AttributesProperty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.attributes)[':property']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.attributes)[':property']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AttributesPropertyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.attributes)[':property']['$delete']> },
      ) => parseResponse(client.v1.attributes[':property'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SdkConnectionsKey(
  args: InferRequestType<(typeof client.v1)['sdk-connections']['$get']>,
) {
  return ['v1', '/v1/sdk-connections', args] as const
}

export function useGetV1SdkConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sdk-connections']['$get']>>>
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
        ? getGetV1SdkConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sdk-connections']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sdk-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SdkConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sdk-connections']['$get']>>>
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
        ? getGetV1SdkConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sdk-connections']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sdk-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SdkConnectionsKey() {
  return ['v1', '/v1/sdk-connections', 'POST'] as const
}

export function usePostV1SdkConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sdk-connections']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sdk-connections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['sdk-connections']['$post']> },
      ) => parseResponse(client.v1['sdk-connections'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SdkConnectionsIdKey(
  args: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['$get']>,
) {
  return ['v1', '/v1/sdk-connections/:id', args] as const
}

export function useGetV1SdkConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections'][':id']['$get']>>
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
        ? getGetV1SdkConnectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sdk-connections'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SdkConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections'][':id']['$get']>>
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
        ? getGetV1SdkConnectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sdk-connections'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SdkConnectionsIdKey() {
  return ['v1', '/v1/sdk-connections/:id', 'PUT'] as const
}

export function usePutV1SdkConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sdk-connections'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sdk-connections'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SdkConnectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['$put']> },
      ) => parseResponse(client.v1['sdk-connections'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SdkConnectionsIdKey() {
  return ['v1', '/v1/sdk-connections/:id', 'DELETE'] as const
}

export function useDeleteV1SdkConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sdk-connections'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sdk-connections'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SdkConnectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['$delete']> },
      ) => parseResponse(client.v1['sdk-connections'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SdkConnectionsLookupKeyKey(
  args: InferRequestType<(typeof client.v1)['sdk-connections']['lookup'][':key']['$get']>,
) {
  return ['v1', '/v1/sdk-connections/lookup/:key', args] as const
}

export function useGetV1SdkConnectionsLookupKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections']['lookup'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections']['lookup'][':key']['$get']>>
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
        ? getGetV1SdkConnectionsLookupKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections']['lookup'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['sdk-connections'].lookup[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SdkConnectionsLookupKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections']['lookup'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections']['lookup'][':key']['$get']>>
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
        ? getGetV1SdkConnectionsLookupKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections']['lookup'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['sdk-connections'].lookup[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SdkConnectionsRevisionsKey(
  args: InferRequestType<(typeof client.v1)['sdk-connections-revisions']['$get']>,
) {
  return ['v1', '/v1/sdk-connections-revisions', args] as const
}

export function useGetV1SdkConnectionsRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections-revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections-revisions']['$get']>>
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
        ? getGetV1SdkConnectionsRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections-revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sdk-connections-revisions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SdkConnectionsRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections-revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections-revisions']['$get']>>
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
        ? getGetV1SdkConnectionsRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections-revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sdk-connections-revisions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SdkConnectionsRevisionsIdKey(
  args: InferRequestType<(typeof client.v1)['sdk-connections-revisions'][':id']['$get']>,
) {
  return ['v1', '/v1/sdk-connections-revisions/:id', args] as const
}

export function useGetV1SdkConnectionsRevisionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections-revisions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections-revisions'][':id']['$get']>>
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
        ? getGetV1SdkConnectionsRevisionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections-revisions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['sdk-connections-revisions'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SdkConnectionsRevisionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections-revisions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections-revisions'][':id']['$get']>>
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
        ? getGetV1SdkConnectionsRevisionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections-revisions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['sdk-connections-revisions'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SdkConnectionsRevisionsIdKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id', 'POST'] as const
}

export function usePostV1SdkConnectionsRevisionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sdk-connections-revisions'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sdk-connections-revisions'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsRevisionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['sdk-connections-revisions'][':id']['$post']>
        },
      ) => parseResponse(client.v1['sdk-connections-revisions'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SdkConnectionsRevisionsIdLatestKey(
  args: InferRequestType<(typeof client.v1)['sdk-connections-revisions'][':id']['latest']['$get']>,
) {
  return ['v1', '/v1/sdk-connections-revisions/:id/latest', args] as const
}

export function useGetV1SdkConnectionsRevisionsIdLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections-revisions'][':id']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['sdk-connections-revisions'][':id']['latest']['$get']>
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
        ? getGetV1SdkConnectionsRevisionsIdLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['sdk-connections-revisions'][':id']['latest']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'].latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SdkConnectionsRevisionsIdLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections-revisions'][':id']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['sdk-connections-revisions'][':id']['latest']['$get']>
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
        ? getGetV1SdkConnectionsRevisionsIdLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['sdk-connections-revisions'][':id']['latest']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'].latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1SdkConnectionsRevisionsIdVersionKey(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['$get']
  >,
) {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version', args] as const
}

export function useGetV1SdkConnectionsRevisionsIdVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['sdk-connections-revisions'][':id'][':version']['$get']>
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
        ? getGetV1SdkConnectionsRevisionsIdVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['sdk-connections-revisions'][':id'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SdkConnectionsRevisionsIdVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['sdk-connections-revisions'][':id'][':version']['$get']>
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
        ? getGetV1SdkConnectionsRevisionsIdVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['sdk-connections-revisions'][':id'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1SdkConnectionsRevisionsIdVersionMergeStatusKey(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['merge-status']['$get']
  >,
) {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/merge-status', args] as const
}

export function useGetV1SdkConnectionsRevisionsIdVersionMergeStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['merge-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['merge-status']['$get']
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
        ? getGetV1SdkConnectionsRevisionsIdVersionMergeStatusKey(args)
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
                (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['merge-status']['$get']
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
          client.v1['sdk-connections-revisions'][':id'][':version']['merge-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SdkConnectionsRevisionsIdVersionMergeStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['merge-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['merge-status']['$get']
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
        ? getGetV1SdkConnectionsRevisionsIdVersionMergeStatusKey(args)
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
                (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['merge-status']['$get']
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
          client.v1['sdk-connections-revisions'][':id'][':version']['merge-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1SdkConnectionsRevisionsIdVersionSettingsKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/settings', 'PUT'] as const
}

export function usePutV1SdkConnectionsRevisionsIdVersionSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SdkConnectionsRevisionsIdVersionSettingsKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version'].settings.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1SdkConnectionsRevisionsIdVersionArchiveKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/archive', 'PUT'] as const
}

export function usePutV1SdkConnectionsRevisionsIdVersionArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['archive']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['archive']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SdkConnectionsRevisionsIdVersionArchiveKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['archive']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version'].archive.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SdkConnectionsRevisionsIdVersionWebhooksKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/webhooks', 'POST'] as const
}

export function usePostV1SdkConnectionsRevisionsIdVersionWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['webhooks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['webhooks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsRevisionsIdVersionWebhooksKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['webhooks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version'].webhooks.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/webhooks/:webhookId', 'PUT'] as const
}

export function usePutV1SdkConnectionsRevisionsIdVersionWebhooksWebhookId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['webhooks'][':webhookId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['webhooks'][':webhookId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['webhooks'][':webhookId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version'].webhooks[':webhookId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/webhooks/:webhookId', 'DELETE'] as const
}

export function useDeleteV1SdkConnectionsRevisionsIdVersionWebhooksWebhookId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['webhooks'][':webhookId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['webhooks'][':webhookId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['webhooks'][':webhookId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version'].webhooks[':webhookId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SdkConnectionsRevisionsIdVersionRequestReviewKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/request-review', 'POST'] as const
}

export function usePostV1SdkConnectionsRevisionsIdVersionRequestReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['request-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['request-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsRevisionsIdVersionRequestReviewKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['request-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version']['request-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SdkConnectionsRevisionsIdVersionSubmitReviewKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/submit-review', 'POST'] as const
}

export function usePostV1SdkConnectionsRevisionsIdVersionSubmitReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['submit-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['submit-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsRevisionsIdVersionSubmitReviewKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['submit-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version']['submit-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SdkConnectionsRevisionsIdVersionRecallReviewKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/recall-review', 'POST'] as const
}

export function usePostV1SdkConnectionsRevisionsIdVersionRecallReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['recall-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['recall-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsRevisionsIdVersionRecallReviewKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['recall-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version']['recall-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SdkConnectionsRevisionsIdVersionUndoReviewKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/undo-review', 'POST'] as const
}

export function usePostV1SdkConnectionsRevisionsIdVersionUndoReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['undo-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['undo-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsRevisionsIdVersionUndoReviewKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['undo-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version']['undo-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SdkConnectionsRevisionsIdVersionReopenKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/reopen', 'POST'] as const
}

export function usePostV1SdkConnectionsRevisionsIdVersionReopen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['reopen']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['reopen']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsRevisionsIdVersionReopenKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['reopen']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version'].reopen.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SdkConnectionsRevisionsIdVersionSchedulePublishKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/schedule-publish', 'POST'] as const
}

export function usePostV1SdkConnectionsRevisionsIdVersionSchedulePublish<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['schedule-publish']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['schedule-publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsRevisionsIdVersionSchedulePublishKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['schedule-publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version']['schedule-publish'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SdkConnectionsRevisionsIdVersionRebaseKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/rebase', 'POST'] as const
}

export function usePostV1SdkConnectionsRevisionsIdVersionRebase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['rebase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['rebase']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsRevisionsIdVersionRebaseKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['rebase']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version'].rebase.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SdkConnectionsRevisionsIdVersionPublishKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/publish', 'POST'] as const
}

export function usePostV1SdkConnectionsRevisionsIdVersionPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['publish']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsRevisionsIdVersionPublishKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version'].publish.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SdkConnectionsRevisionsIdVersionDiscardKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/discard', 'POST'] as const
}

export function usePostV1SdkConnectionsRevisionsIdVersionDiscard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['discard']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['discard']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsRevisionsIdVersionDiscardKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['discard']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version'].discard.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SdkConnectionsRevisionsIdVersionRevertKey() {
  return ['v1', '/v1/sdk-connections-revisions/:id/:version/revert', 'POST'] as const
}

export function usePostV1SdkConnectionsRevisionsIdVersionRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['revert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['revert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsRevisionsIdVersionRevertKey()
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
            (typeof client.v1)['sdk-connections-revisions'][':id'][':version']['revert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['sdk-connections-revisions'][':id'][':version'].revert.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DataSourcesKey(
  args: InferRequestType<(typeof client.v1)['data-sources']['$get']>,
) {
  return ['v1', '/v1/data-sources', args] as const
}

export function useGetV1DataSources<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['data-sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sources']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DataSourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sources']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['data-sources'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DataSources<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['data-sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sources']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DataSourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sources']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['data-sources'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DataSourcesKey() {
  return ['v1', '/v1/data-sources', 'POST'] as const
}

export function usePostV1DataSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['data-sources']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['data-sources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['data-sources']['$post']> },
      ) => parseResponse(client.v1['data-sources'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DataSourcesIdKey(
  args: InferRequestType<(typeof client.v1)['data-sources'][':id']['$get']>,
) {
  return ['v1', '/v1/data-sources/:id', args] as const
}

export function useGetV1DataSourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['data-sources'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sources'][':id']['$get']>>
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
        ? getGetV1DataSourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sources'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['data-sources'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DataSourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['data-sources'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sources'][':id']['$get']>>
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
        ? getGetV1DataSourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sources'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['data-sources'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DataSourcesIdKey() {
  return ['v1', '/v1/data-sources/:id', 'POST'] as const
}

export function usePostV1DataSourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['data-sources'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['data-sources'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataSourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['data-sources'][':id']['$post']> },
      ) => parseResponse(client.v1['data-sources'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DataSourcesIdKey() {
  return ['v1', '/v1/data-sources/:id', 'DELETE'] as const
}

export function useDeleteV1DataSourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['data-sources'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['data-sources'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DataSourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['data-sources'][':id']['$delete']> },
      ) => parseResponse(client.v1['data-sources'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DataSourcesDataSourceIdInformationSchemaKey(
  args: InferRequestType<
    (typeof client.v1)['data-sources'][':dataSourceId']['information-schema']['$get']
  >,
) {
  return ['v1', '/v1/data-sources/:dataSourceId/information-schema', args] as const
}

export function useGetV1DataSourcesDataSourceIdInformationSchema<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['data-sources'][':dataSourceId']['information-schema']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['data-sources'][':dataSourceId']['information-schema']['$get']
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
        ? getGetV1DataSourcesDataSourceIdInformationSchemaKey(args)
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
                (typeof client.v1)['data-sources'][':dataSourceId']['information-schema']['$get']
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
          client.v1['data-sources'][':dataSourceId']['information-schema'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DataSourcesDataSourceIdInformationSchema<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['data-sources'][':dataSourceId']['information-schema']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['data-sources'][':dataSourceId']['information-schema']['$get']
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
        ? getGetV1DataSourcesDataSourceIdInformationSchemaKey(args)
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
                (typeof client.v1)['data-sources'][':dataSourceId']['information-schema']['$get']
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
          client.v1['data-sources'][':dataSourceId']['information-schema'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1DataSourcesIdInformationSchemaRefreshKey() {
  return ['v1', '/v1/data-sources/:id/information-schema/refresh', 'POST'] as const
}

export function usePostV1DataSourcesIdInformationSchemaRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['data-sources'][':id']['information-schema']['refresh']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['data-sources'][':id']['information-schema']['refresh']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataSourcesIdInformationSchemaRefreshKey()
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
            (typeof client.v1)['data-sources'][':id']['information-schema']['refresh']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['data-sources'][':id']['information-schema'].refresh.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataSourcesIdSqlSearchTablesKey() {
  return ['v1', '/v1/data-sources/:id/sql/search-tables', 'POST'] as const
}

export function usePostV1DataSourcesIdSqlSearchTables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['data-sources'][':id']['sql']['search-tables']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['data-sources'][':id']['sql']['search-tables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataSourcesIdSqlSearchTablesKey()
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
            (typeof client.v1)['data-sources'][':id']['sql']['search-tables']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['data-sources'][':id'].sql['search-tables'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataSourcesIdSqlTableSchemaKey() {
  return ['v1', '/v1/data-sources/:id/sql/table-schema', 'POST'] as const
}

export function usePostV1DataSourcesIdSqlTableSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['data-sources'][':id']['sql']['table-schema']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['data-sources'][':id']['sql']['table-schema']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataSourcesIdSqlTableSchemaKey()
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
            (typeof client.v1)['data-sources'][':id']['sql']['table-schema']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['data-sources'][':id'].sql['table-schema'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataSourcesIdSqlPreviewValuesKey() {
  return ['v1', '/v1/data-sources/:id/sql/preview-values', 'POST'] as const
}

export function usePostV1DataSourcesIdSqlPreviewValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['data-sources'][':id']['sql']['preview-values']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['data-sources'][':id']['sql']['preview-values']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataSourcesIdSqlPreviewValuesKey()
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
            (typeof client.v1)['data-sources'][':id']['sql']['preview-values']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['data-sources'][':id'].sql['preview-values'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DataSourcesIdSqlRunQueryKey() {
  return ['v1', '/v1/data-sources/:id/sql/run-query', 'POST'] as const
}

export function usePostV1DataSourcesIdSqlRunQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['data-sources'][':id']['sql']['run-query']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['data-sources'][':id']['sql']['run-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DataSourcesIdSqlRunQueryKey()
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
            (typeof client.v1)['data-sources'][':id']['sql']['run-query']['$post']
          >
        },
      ) =>
        parseResponse(client.v1['data-sources'][':id'].sql['run-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1VisualChangesetsIdKey(
  args: InferRequestType<(typeof client.v1)['visual-changesets'][':id']['$get']>,
) {
  return ['v1', '/v1/visual-changesets/:id', args] as const
}

export function useGetV1VisualChangesetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['visual-changesets'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['visual-changesets'][':id']['$get']>>
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
        ? getGetV1VisualChangesetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['visual-changesets'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['visual-changesets'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VisualChangesetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['visual-changesets'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['visual-changesets'][':id']['$get']>>
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
        ? getGetV1VisualChangesetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['visual-changesets'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['visual-changesets'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1VisualChangesetsIdKey() {
  return ['v1', '/v1/visual-changesets/:id', 'PUT'] as const
}

export function usePutV1VisualChangesetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['visual-changesets'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['visual-changesets'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1VisualChangesetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['visual-changesets'][':id']['$put']> },
      ) => parseResponse(client.v1['visual-changesets'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1VisualChangesetsIdVisualChangeKey() {
  return ['v1', '/v1/visual-changesets/:id/visual-change', 'POST'] as const
}

export function usePostV1VisualChangesetsIdVisualChange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['visual-changesets'][':id']['visual-change']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['visual-changesets'][':id']['visual-change']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1VisualChangesetsIdVisualChangeKey()
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
            (typeof client.v1)['visual-changesets'][':id']['visual-change']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['visual-changesets'][':id']['visual-change'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1VisualChangesetsIdVisualChangeVisualChangeIdKey() {
  return ['v1', '/v1/visual-changesets/:id/visual-change/:visualChangeId', 'PUT'] as const
}

export function usePutV1VisualChangesetsIdVisualChangeVisualChangeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['visual-changesets'][':id']['visual-change'][':visualChangeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['visual-changesets'][':id']['visual-change'][':visualChangeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1VisualChangesetsIdVisualChangeVisualChangeIdKey()
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
            (typeof client.v1)['visual-changesets'][':id']['visual-change'][':visualChangeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['visual-changesets'][':id']['visual-change'][':visualChangeId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SavedGroupsKey(
  args: InferRequestType<(typeof client.v1)['saved-groups']['$get']>,
) {
  return ['v1', '/v1/saved-groups', args] as const
}

export function useGetV1SavedGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['saved-groups']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1SavedGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['saved-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['saved-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SavedGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['saved-groups']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1SavedGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['saved-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['saved-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SavedGroupsKey() {
  return ['v1', '/v1/saved-groups', 'POST'] as const
}

export function usePostV1SavedGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['saved-groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['saved-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['saved-groups']['$post']> },
      ) => parseResponse(client.v1['saved-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SavedGroupsRevisionsKey(
  args: InferRequestType<(typeof client.v1)['saved-groups-revisions']['$get']>,
) {
  return ['v1', '/v1/saved-groups-revisions', args] as const
}

export function useGetV1SavedGroupsRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups-revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups-revisions']['$get']>>
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
        ? getGetV1SavedGroupsRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups-revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['saved-groups-revisions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SavedGroupsRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups-revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups-revisions']['$get']>>
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
        ? getGetV1SavedGroupsRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups-revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['saved-groups-revisions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SavedGroupsIdKey(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['$get']>,
) {
  return ['v1', '/v1/saved-groups/:id', args] as const
}

export function useGetV1SavedGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['$get']>>
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
        ? getGetV1SavedGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['saved-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SavedGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['$get']>>
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
        ? getGetV1SavedGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['saved-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SavedGroupsIdKey() {
  return ['v1', '/v1/saved-groups/:id', 'POST'] as const
}

export function usePostV1SavedGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['saved-groups'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['saved-groups'][':id']['$post']> },
      ) => parseResponse(client.v1['saved-groups'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SavedGroupsIdKey() {
  return ['v1', '/v1/saved-groups/:id', 'DELETE'] as const
}

export function useDeleteV1SavedGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['saved-groups'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SavedGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['saved-groups'][':id']['$delete']> },
      ) => parseResponse(client.v1['saved-groups'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsIdArchiveKey() {
  return ['v1', '/v1/saved-groups/:id/archive', 'POST'] as const
}

export function usePostV1SavedGroupsIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['saved-groups'][':id']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['saved-groups'][':id']['archive']['$post']> },
      ) => parseResponse(client.v1['saved-groups'][':id'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsIdUnarchiveKey() {
  return ['v1', '/v1/saved-groups/:id/unarchive', 'POST'] as const
}

export function usePostV1SavedGroupsIdUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['unarchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['saved-groups'][':id']['unarchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsIdUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['saved-groups'][':id']['unarchive']['$post']>
        },
      ) => parseResponse(client.v1['saved-groups'][':id'].unarchive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SavedGroupsIdReferencesKey(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['references']['$get']>,
) {
  return ['v1', '/v1/saved-groups/:id/references', args] as const
}

export function useGetV1SavedGroupsIdReferences<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['references']['$get']>>
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
        ? getGetV1SavedGroupsIdReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['references']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['saved-groups'][':id'].references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SavedGroupsIdReferences<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['references']['$get']>>
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
        ? getGetV1SavedGroupsIdReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['references']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['saved-groups'][':id'].references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SavedGroupsIdUploadsKey(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['uploads']['$get']>,
) {
  return ['v1', '/v1/saved-groups/:id/uploads', args] as const
}

export function useGetV1SavedGroupsIdUploads<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['uploads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['uploads']['$get']>>
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
        ? getGetV1SavedGroupsIdUploadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['uploads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['saved-groups'][':id'].uploads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SavedGroupsIdUploads<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['uploads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['uploads']['$get']>>
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
        ? getGetV1SavedGroupsIdUploadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['uploads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['saved-groups'][':id'].uploads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SavedGroupsIdUploadsKey() {
  return ['v1', '/v1/saved-groups/:id/uploads', 'POST'] as const
}

export function usePostV1SavedGroupsIdUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['uploads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['saved-groups'][':id']['uploads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsIdUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['saved-groups'][':id']['uploads']['$post']> },
      ) => parseResponse(client.v1['saved-groups'][':id'].uploads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsIdUploadUrlKey() {
  return ['v1', '/v1/saved-groups/:id/upload-url', 'POST'] as const
}

export function usePostV1SavedGroupsIdUploadUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['saved-groups'][':id']['upload-url']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['saved-groups'][':id']['upload-url']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsIdUploadUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['saved-groups'][':id']['upload-url']['$post']>
        },
      ) => parseResponse(client.v1['saved-groups'][':id']['upload-url'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsIdUploadsVersionLoadsKey() {
  return ['v1', '/v1/saved-groups/:id/uploads/:version/loads', 'POST'] as const
}

export function usePostV1SavedGroupsIdUploadsVersionLoads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups'][':id']['uploads'][':version']['loads']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups'][':id']['uploads'][':version']['loads']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsIdUploadsVersionLoadsKey()
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
            (typeof client.v1)['saved-groups'][':id']['uploads'][':version']['loads']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups'][':id'].uploads[':version'].loads.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SavedGroupsIdUploadsVersionKey(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['uploads'][':version']['$get']>,
) {
  return ['v1', '/v1/saved-groups/:id/uploads/:version', args] as const
}

export function useGetV1SavedGroupsIdUploadsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['uploads'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['saved-groups'][':id']['uploads'][':version']['$get']>
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
        ? getGetV1SavedGroupsIdUploadsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['saved-groups'][':id']['uploads'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['saved-groups'][':id'].uploads[':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SavedGroupsIdUploadsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups'][':id']['uploads'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['saved-groups'][':id']['uploads'][':version']['$get']>
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
        ? getGetV1SavedGroupsIdUploadsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['saved-groups'][':id']['uploads'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['saved-groups'][':id'].uploads[':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1SavedGroupsIdUploadsVersionKey() {
  return ['v1', '/v1/saved-groups/:id/uploads/:version', 'DELETE'] as const
}

export function useDeleteV1SavedGroupsIdUploadsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['saved-groups'][':id']['uploads'][':version']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['saved-groups'][':id']['uploads'][':version']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SavedGroupsIdUploadsVersionKey()
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
            (typeof client.v1)['saved-groups'][':id']['uploads'][':version']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups'][':id'].uploads[':version'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SavedGroupsRevisionsSavedGroupIdKey(
  args: InferRequestType<(typeof client.v1)['saved-groups-revisions'][':savedGroupId']['$get']>,
) {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId', args] as const
}

export function useGetV1SavedGroupsRevisionsSavedGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups-revisions'][':savedGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['saved-groups-revisions'][':savedGroupId']['$get']>
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
        ? getGetV1SavedGroupsRevisionsSavedGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['saved-groups-revisions'][':savedGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SavedGroupsRevisionsSavedGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['saved-groups-revisions'][':savedGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['saved-groups-revisions'][':savedGroupId']['$get']>
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
        ? getGetV1SavedGroupsRevisionsSavedGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['saved-groups-revisions'][':savedGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1SavedGroupsRevisionsSavedGroupIdKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId', 'POST'] as const
}

export function usePostV1SavedGroupsRevisionsSavedGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['saved-groups-revisions'][':savedGroupId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['saved-groups-revisions'][':savedGroupId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsRevisionsSavedGroupIdKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SavedGroupsRevisionsSavedGroupIdLatestKey(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId']['latest']['$get']
  >,
) {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/latest', args] as const
}

export function useGetV1SavedGroupsRevisionsSavedGroupIdLatest<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['saved-groups-revisions'][':savedGroupId']['latest']['$get']
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
        ? getGetV1SavedGroupsRevisionsSavedGroupIdLatestKey(args)
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
                (typeof client.v1)['saved-groups-revisions'][':savedGroupId']['latest']['$get']
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
          client.v1['saved-groups-revisions'][':savedGroupId'].latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SavedGroupsRevisionsSavedGroupIdLatest<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['saved-groups-revisions'][':savedGroupId']['latest']['$get']
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
        ? getGetV1SavedGroupsRevisionsSavedGroupIdLatestKey(args)
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
                (typeof client.v1)['saved-groups-revisions'][':savedGroupId']['latest']['$get']
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
          client.v1['saved-groups-revisions'][':savedGroupId'].latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1SavedGroupsRevisionsSavedGroupIdVersionKey(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['$get']
  >,
) {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version', args] as const
}

export function useGetV1SavedGroupsRevisionsSavedGroupIdVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['$get']
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
        ? getGetV1SavedGroupsRevisionsSavedGroupIdVersionKey(args)
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
                (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['$get']
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
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SavedGroupsRevisionsSavedGroupIdVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['$get']
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
        ? getGetV1SavedGroupsRevisionsSavedGroupIdVersionKey(args)
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
                (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['$get']
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
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1SavedGroupsRevisionsSavedGroupIdVersionMetadataKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/metadata', 'PUT'] as const
}

export function usePutV1SavedGroupsRevisionsSavedGroupIdVersionMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['metadata']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['metadata']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SavedGroupsRevisionsSavedGroupIdVersionMetadataKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['metadata']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'].metadata.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1SavedGroupsRevisionsSavedGroupIdVersionConditionKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/condition', 'PUT'] as const
}

export function usePutV1SavedGroupsRevisionsSavedGroupIdVersionCondition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['condition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['condition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SavedGroupsRevisionsSavedGroupIdVersionConditionKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['condition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'].condition.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1SavedGroupsRevisionsSavedGroupIdVersionValuesKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/values', 'PUT'] as const
}

export function usePutV1SavedGroupsRevisionsSavedGroupIdVersionValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['values']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['values']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SavedGroupsRevisionsSavedGroupIdVersionValuesKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['values']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'].values.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1SavedGroupsRevisionsSavedGroupIdVersionUploadVersionKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/upload-version', 'PUT'] as const
}

export function usePutV1SavedGroupsRevisionsSavedGroupIdVersionUploadVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['upload-version']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['upload-version']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SavedGroupsRevisionsSavedGroupIdVersionUploadVersionKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['upload-version']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version']['upload-version'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1SavedGroupsRevisionsSavedGroupIdVersionArchiveKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/archive', 'PUT'] as const
}

export function usePutV1SavedGroupsRevisionsSavedGroupIdVersionArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['archive']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['archive']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SavedGroupsRevisionsSavedGroupIdVersionArchiveKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['archive']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'].archive.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsRevisionsSavedGroupIdVersionItemsAddKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/items/add', 'POST'] as const
}

export function usePostV1SavedGroupsRevisionsSavedGroupIdVersionItemsAdd<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['items']['add']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['items']['add']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsRevisionsSavedGroupIdVersionItemsAddKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['items']['add']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'].items.add.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsRevisionsSavedGroupIdVersionItemsRemoveKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/items/remove', 'POST'] as const
}

export function usePostV1SavedGroupsRevisionsSavedGroupIdVersionItemsRemove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['items']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['items']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsRevisionsSavedGroupIdVersionItemsRemoveKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['items']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'].items.remove.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsRevisionsSavedGroupIdVersionRequestReviewKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/request-review', 'POST'] as const
}

export function usePostV1SavedGroupsRevisionsSavedGroupIdVersionRequestReview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['request-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['request-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsRevisionsSavedGroupIdVersionRequestReviewKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['request-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version']['request-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsRevisionsSavedGroupIdVersionSubmitReviewKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/submit-review', 'POST'] as const
}

export function usePostV1SavedGroupsRevisionsSavedGroupIdVersionSubmitReview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['submit-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['submit-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsRevisionsSavedGroupIdVersionSubmitReviewKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['submit-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version']['submit-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsRevisionsSavedGroupIdVersionRecallReviewKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/recall-review', 'POST'] as const
}

export function usePostV1SavedGroupsRevisionsSavedGroupIdVersionRecallReview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['recall-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['recall-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsRevisionsSavedGroupIdVersionRecallReviewKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['recall-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version']['recall-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsRevisionsSavedGroupIdVersionReopenKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/reopen', 'POST'] as const
}

export function usePostV1SavedGroupsRevisionsSavedGroupIdVersionReopen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['reopen']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['reopen']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsRevisionsSavedGroupIdVersionReopenKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['reopen']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'].reopen.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsRevisionsSavedGroupIdVersionSchedulePublishKey() {
  return [
    'v1',
    '/v1/saved-groups-revisions/:savedGroupId/:version/schedule-publish',
    'POST',
  ] as const
}

export function usePostV1SavedGroupsRevisionsSavedGroupIdVersionSchedulePublish<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['schedule-publish']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['schedule-publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsRevisionsSavedGroupIdVersionSchedulePublishKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['schedule-publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'][
            'schedule-publish'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsRevisionsSavedGroupIdVersionUndoReviewKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/undo-review', 'POST'] as const
}

export function usePostV1SavedGroupsRevisionsSavedGroupIdVersionUndoReview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['undo-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['undo-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsRevisionsSavedGroupIdVersionUndoReviewKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['undo-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version']['undo-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SavedGroupsRevisionsSavedGroupIdVersionMergeStatusKey(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['merge-status']['$get']
  >,
) {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/merge-status', args] as const
}

export function useGetV1SavedGroupsRevisionsSavedGroupIdVersionMergeStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['merge-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['merge-status']['$get']
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
        ? getGetV1SavedGroupsRevisionsSavedGroupIdVersionMergeStatusKey(args)
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
                (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['merge-status']['$get']
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
          client.v1['saved-groups-revisions'][':savedGroupId'][':version']['merge-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SavedGroupsRevisionsSavedGroupIdVersionMergeStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['merge-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['merge-status']['$get']
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
        ? getGetV1SavedGroupsRevisionsSavedGroupIdVersionMergeStatusKey(args)
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
                (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['merge-status']['$get']
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
          client.v1['saved-groups-revisions'][':savedGroupId'][':version']['merge-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1SavedGroupsRevisionsSavedGroupIdVersionRebaseKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/rebase', 'POST'] as const
}

export function usePostV1SavedGroupsRevisionsSavedGroupIdVersionRebase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['rebase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['rebase']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsRevisionsSavedGroupIdVersionRebaseKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['rebase']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'].rebase.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsRevisionsSavedGroupIdVersionPublishKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/publish', 'POST'] as const
}

export function usePostV1SavedGroupsRevisionsSavedGroupIdVersionPublish<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['publish']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsRevisionsSavedGroupIdVersionPublishKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'].publish.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsRevisionsSavedGroupIdVersionDiscardKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/discard', 'POST'] as const
}

export function usePostV1SavedGroupsRevisionsSavedGroupIdVersionDiscard<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['discard']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['discard']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsRevisionsSavedGroupIdVersionDiscardKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['discard']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'].discard.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SavedGroupsRevisionsSavedGroupIdVersionRevertKey() {
  return ['v1', '/v1/saved-groups-revisions/:savedGroupId/:version/revert', 'POST'] as const
}

export function usePostV1SavedGroupsRevisionsSavedGroupIdVersionRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['revert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['revert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SavedGroupsRevisionsSavedGroupIdVersionRevertKey()
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
            (typeof client.v1)['saved-groups-revisions'][':savedGroupId'][':version']['revert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['saved-groups-revisions'][':savedGroupId'][':version'].revert.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConstantsKey(args: InferRequestType<typeof client.v1.constants.$get>) {
  return ['v1', '/v1/constants', args] as const
}

export function useGetV1Constants<TError = unknown>(
  args: InferRequestType<typeof client.v1.constants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.constants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ConstantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.constants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.constants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Constants<TError = unknown>(
  args: InferRequestType<typeof client.v1.constants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.constants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ConstantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.constants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.constants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConstantsKey() {
  return ['v1', '/v1/constants', 'POST'] as const
}

export function usePostV1Constants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.constants.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.constants.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.constants.$post> }) =>
        parseResponse(client.v1.constants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConstantsRevisionsKey(
  args: InferRequestType<(typeof client.v1)['constants-revisions']['$get']>,
) {
  return ['v1', '/v1/constants-revisions', args] as const
}

export function useGetV1ConstantsRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['constants-revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['constants-revisions']['$get']>>
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
        ? getGetV1ConstantsRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['constants-revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['constants-revisions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConstantsRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['constants-revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['constants-revisions']['$get']>>
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
        ? getGetV1ConstantsRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['constants-revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['constants-revisions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConstantsKeyReferencesKey(
  args: InferRequestType<(typeof client.v1.constants)[':key']['references']['$get']>,
) {
  return ['v1', '/v1/constants/:key/references', args] as const
}

export function useGetV1ConstantsKeyReferences<TError = unknown>(
  args: InferRequestType<(typeof client.v1.constants)[':key']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.constants)[':key']['references']['$get']>>
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
        ? getGetV1ConstantsKeyReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.constants)[':key']['references']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.constants[':key'].references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConstantsKeyReferences<TError = unknown>(
  args: InferRequestType<(typeof client.v1.constants)[':key']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.constants)[':key']['references']['$get']>>
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
        ? getGetV1ConstantsKeyReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.constants)[':key']['references']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.constants[':key'].references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConstantsKeyKey(
  args: InferRequestType<(typeof client.v1.constants)[':key']['$get']>,
) {
  return ['v1', '/v1/constants/:key', args] as const
}

export function useGetV1ConstantsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.constants)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.constants)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ConstantsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.constants)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.constants[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConstantsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.constants)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.constants)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ConstantsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.constants)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.constants[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConstantsKeyKey() {
  return ['v1', '/v1/constants/:key', 'POST'] as const
}

export function usePostV1ConstantsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.constants)[':key']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.constants)[':key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.constants)[':key']['$post']> },
      ) => parseResponse(client.v1.constants[':key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConstantsKeyKey() {
  return ['v1', '/v1/constants/:key', 'DELETE'] as const
}

export function useDeleteV1ConstantsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.constants)[':key']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.constants)[':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConstantsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.constants)[':key']['$delete']> },
      ) => parseResponse(client.v1.constants[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConstantsKeyArchiveKey() {
  return ['v1', '/v1/constants/:key/archive', 'POST'] as const
}

export function usePostV1ConstantsKeyArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.constants)[':key']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.constants)[':key']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsKeyArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.constants)[':key']['archive']['$post']> },
      ) => parseResponse(client.v1.constants[':key'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConstantsKeyUnarchiveKey() {
  return ['v1', '/v1/constants/:key/unarchive', 'POST'] as const
}

export function usePostV1ConstantsKeyUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.constants)[':key']['unarchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.constants)[':key']['unarchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsKeyUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.constants)[':key']['unarchive']['$post']> },
      ) => parseResponse(client.v1.constants[':key'].unarchive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConstantsRevisionsKeyKey(
  args: InferRequestType<(typeof client.v1)['constants-revisions'][':key']['$get']>,
) {
  return ['v1', '/v1/constants-revisions/:key', args] as const
}

export function useGetV1ConstantsRevisionsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['constants-revisions'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['constants-revisions'][':key']['$get']>>
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
        ? getGetV1ConstantsRevisionsKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['constants-revisions'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['constants-revisions'][':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConstantsRevisionsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['constants-revisions'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['constants-revisions'][':key']['$get']>>
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
        ? getGetV1ConstantsRevisionsKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['constants-revisions'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['constants-revisions'][':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConstantsRevisionsKeyKey() {
  return ['v1', '/v1/constants-revisions/:key', 'POST'] as const
}

export function usePostV1ConstantsRevisionsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['constants-revisions'][':key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['constants-revisions'][':key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsRevisionsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['constants-revisions'][':key']['$post']> },
      ) => parseResponse(client.v1['constants-revisions'][':key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConstantsRevisionsKeyLatestKey(
  args: InferRequestType<(typeof client.v1)['constants-revisions'][':key']['latest']['$get']>,
) {
  return ['v1', '/v1/constants-revisions/:key/latest', args] as const
}

export function useGetV1ConstantsRevisionsKeyLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['constants-revisions'][':key']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['constants-revisions'][':key']['latest']['$get']>>
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
        ? getGetV1ConstantsRevisionsKeyLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['constants-revisions'][':key']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['constants-revisions'][':key'].latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConstantsRevisionsKeyLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['constants-revisions'][':key']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['constants-revisions'][':key']['latest']['$get']>>
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
        ? getGetV1ConstantsRevisionsKeyLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['constants-revisions'][':key']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['constants-revisions'][':key'].latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConstantsRevisionsKeyVersionKey(
  args: InferRequestType<(typeof client.v1)['constants-revisions'][':key'][':version']['$get']>,
) {
  return ['v1', '/v1/constants-revisions/:key/:version', args] as const
}

export function useGetV1ConstantsRevisionsKeyVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['constants-revisions'][':key'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['constants-revisions'][':key'][':version']['$get']>
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
        ? getGetV1ConstantsRevisionsKeyVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['constants-revisions'][':key'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConstantsRevisionsKeyVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['constants-revisions'][':key'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['constants-revisions'][':key'][':version']['$get']>
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
        ? getGetV1ConstantsRevisionsKeyVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['constants-revisions'][':key'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ConstantsRevisionsKeyVersionMetadataKey() {
  return ['v1', '/v1/constants-revisions/:key/:version/metadata', 'PUT'] as const
}

export function usePutV1ConstantsRevisionsKeyVersionMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['constants-revisions'][':key'][':version']['metadata']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['constants-revisions'][':key'][':version']['metadata']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConstantsRevisionsKeyVersionMetadataKey()
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
            (typeof client.v1)['constants-revisions'][':key'][':version']['metadata']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version'].metadata.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ConstantsRevisionsKeyVersionValueKey() {
  return ['v1', '/v1/constants-revisions/:key/:version/value', 'PUT'] as const
}

export function usePutV1ConstantsRevisionsKeyVersionValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['constants-revisions'][':key'][':version']['value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['constants-revisions'][':key'][':version']['value']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConstantsRevisionsKeyVersionValueKey()
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
            (typeof client.v1)['constants-revisions'][':key'][':version']['value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version'].value.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ConstantsRevisionsKeyVersionArchiveKey() {
  return ['v1', '/v1/constants-revisions/:key/:version/archive', 'PUT'] as const
}

export function usePutV1ConstantsRevisionsKeyVersionArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['constants-revisions'][':key'][':version']['archive']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['constants-revisions'][':key'][':version']['archive']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConstantsRevisionsKeyVersionArchiveKey()
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
            (typeof client.v1)['constants-revisions'][':key'][':version']['archive']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version'].archive.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConstantsRevisionsKeyVersionRequestReviewKey() {
  return ['v1', '/v1/constants-revisions/:key/:version/request-review', 'POST'] as const
}

export function usePostV1ConstantsRevisionsKeyVersionRequestReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['constants-revisions'][':key'][':version']['request-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['constants-revisions'][':key'][':version']['request-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsRevisionsKeyVersionRequestReviewKey()
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
            (typeof client.v1)['constants-revisions'][':key'][':version']['request-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version']['request-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConstantsRevisionsKeyVersionSubmitReviewKey() {
  return ['v1', '/v1/constants-revisions/:key/:version/submit-review', 'POST'] as const
}

export function usePostV1ConstantsRevisionsKeyVersionSubmitReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['constants-revisions'][':key'][':version']['submit-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['constants-revisions'][':key'][':version']['submit-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsRevisionsKeyVersionSubmitReviewKey()
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
            (typeof client.v1)['constants-revisions'][':key'][':version']['submit-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version']['submit-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConstantsRevisionsKeyVersionRecallReviewKey() {
  return ['v1', '/v1/constants-revisions/:key/:version/recall-review', 'POST'] as const
}

export function usePostV1ConstantsRevisionsKeyVersionRecallReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['constants-revisions'][':key'][':version']['recall-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['constants-revisions'][':key'][':version']['recall-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsRevisionsKeyVersionRecallReviewKey()
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
            (typeof client.v1)['constants-revisions'][':key'][':version']['recall-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version']['recall-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConstantsRevisionsKeyVersionReopenKey() {
  return ['v1', '/v1/constants-revisions/:key/:version/reopen', 'POST'] as const
}

export function usePostV1ConstantsRevisionsKeyVersionReopen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['constants-revisions'][':key'][':version']['reopen']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['constants-revisions'][':key'][':version']['reopen']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsRevisionsKeyVersionReopenKey()
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
            (typeof client.v1)['constants-revisions'][':key'][':version']['reopen']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version'].reopen.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConstantsRevisionsKeyVersionSchedulePublishKey() {
  return ['v1', '/v1/constants-revisions/:key/:version/schedule-publish', 'POST'] as const
}

export function usePostV1ConstantsRevisionsKeyVersionSchedulePublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['constants-revisions'][':key'][':version']['schedule-publish']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['constants-revisions'][':key'][':version']['schedule-publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsRevisionsKeyVersionSchedulePublishKey()
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
            (typeof client.v1)['constants-revisions'][':key'][':version']['schedule-publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version']['schedule-publish'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConstantsRevisionsKeyVersionUndoReviewKey() {
  return ['v1', '/v1/constants-revisions/:key/:version/undo-review', 'POST'] as const
}

export function usePostV1ConstantsRevisionsKeyVersionUndoReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['constants-revisions'][':key'][':version']['undo-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['constants-revisions'][':key'][':version']['undo-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsRevisionsKeyVersionUndoReviewKey()
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
            (typeof client.v1)['constants-revisions'][':key'][':version']['undo-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version']['undo-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConstantsRevisionsKeyVersionMergeStatusKey(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['merge-status']['$get']
  >,
) {
  return ['v1', '/v1/constants-revisions/:key/:version/merge-status', args] as const
}

export function useGetV1ConstantsRevisionsKeyVersionMergeStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['merge-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['constants-revisions'][':key'][':version']['merge-status']['$get']
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
        ? getGetV1ConstantsRevisionsKeyVersionMergeStatusKey(args)
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
                (typeof client.v1)['constants-revisions'][':key'][':version']['merge-status']['$get']
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
          client.v1['constants-revisions'][':key'][':version']['merge-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConstantsRevisionsKeyVersionMergeStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['constants-revisions'][':key'][':version']['merge-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['constants-revisions'][':key'][':version']['merge-status']['$get']
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
        ? getGetV1ConstantsRevisionsKeyVersionMergeStatusKey(args)
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
                (typeof client.v1)['constants-revisions'][':key'][':version']['merge-status']['$get']
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
          client.v1['constants-revisions'][':key'][':version']['merge-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConstantsRevisionsKeyVersionRebaseKey() {
  return ['v1', '/v1/constants-revisions/:key/:version/rebase', 'POST'] as const
}

export function usePostV1ConstantsRevisionsKeyVersionRebase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['constants-revisions'][':key'][':version']['rebase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['constants-revisions'][':key'][':version']['rebase']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsRevisionsKeyVersionRebaseKey()
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
            (typeof client.v1)['constants-revisions'][':key'][':version']['rebase']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version'].rebase.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConstantsRevisionsKeyVersionPublishKey() {
  return ['v1', '/v1/constants-revisions/:key/:version/publish', 'POST'] as const
}

export function usePostV1ConstantsRevisionsKeyVersionPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['constants-revisions'][':key'][':version']['publish']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['constants-revisions'][':key'][':version']['publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsRevisionsKeyVersionPublishKey()
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
            (typeof client.v1)['constants-revisions'][':key'][':version']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version'].publish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConstantsRevisionsKeyVersionDiscardKey() {
  return ['v1', '/v1/constants-revisions/:key/:version/discard', 'POST'] as const
}

export function usePostV1ConstantsRevisionsKeyVersionDiscard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['constants-revisions'][':key'][':version']['discard']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['constants-revisions'][':key'][':version']['discard']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsRevisionsKeyVersionDiscardKey()
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
            (typeof client.v1)['constants-revisions'][':key'][':version']['discard']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version'].discard.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConstantsRevisionsKeyVersionRevertKey() {
  return ['v1', '/v1/constants-revisions/:key/:version/revert', 'POST'] as const
}

export function usePostV1ConstantsRevisionsKeyVersionRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['constants-revisions'][':key'][':version']['revert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['constants-revisions'][':key'][':version']['revert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConstantsRevisionsKeyVersionRevertKey()
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
            (typeof client.v1)['constants-revisions'][':key'][':version']['revert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['constants-revisions'][':key'][':version'].revert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConfigsKey(args: InferRequestType<typeof client.v1.configs.$get>) {
  return ['v1', '/v1/configs', args] as const
}

export function useGetV1Configs<TError = unknown>(
  args: InferRequestType<typeof client.v1.configs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ConfigsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Configs<TError = unknown>(
  args: InferRequestType<typeof client.v1.configs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ConfigsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConfigsKey() {
  return ['v1', '/v1/configs', 'POST'] as const
}

export function usePostV1Configs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.configs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.configs.$post> }) =>
        parseResponse(client.v1.configs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConfigsRevisionsKey(
  args: InferRequestType<(typeof client.v1)['configs-revisions']['$get']>,
) {
  return ['v1', '/v1/configs-revisions', args] as const
}

export function useGetV1ConfigsRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['configs-revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['configs-revisions']['$get']>>>
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
        ? getGetV1ConfigsRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['configs-revisions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['configs-revisions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['configs-revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['configs-revisions']['$get']>>>
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
        ? getGetV1ConfigsRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['configs-revisions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['configs-revisions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConfigsKeyReferencesKey(
  args: InferRequestType<(typeof client.v1.configs)[':key']['references']['$get']>,
) {
  return ['v1', '/v1/configs/:key/references', args] as const
}

export function useGetV1ConfigsKeyReferences<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':key']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['references']['$get']>>
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
        ? getGetV1ConfigsKeyReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['references']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':key'].references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsKeyReferences<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':key']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['references']['$get']>>
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
        ? getGetV1ConfigsKeyReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['references']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':key'].references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConfigsKeyKeyUsageKey(
  args: InferRequestType<(typeof client.v1.configs)[':key']['key-usage']['$get']>,
) {
  return ['v1', '/v1/configs/:key/key-usage', args] as const
}

export function useGetV1ConfigsKeyKeyUsage<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':key']['key-usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['key-usage']['$get']>>
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
        ? getGetV1ConfigsKeyKeyUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['key-usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':key']['key-usage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsKeyKeyUsage<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':key']['key-usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['key-usage']['$get']>>
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
        ? getGetV1ConfigsKeyKeyUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['key-usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':key']['key-usage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConfigsKeyLineageKey(
  args: InferRequestType<(typeof client.v1.configs)[':key']['lineage']['$get']>,
) {
  return ['v1', '/v1/configs/:key/lineage', args] as const
}

export function useGetV1ConfigsKeyLineage<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':key']['lineage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['lineage']['$get']>>
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
        ? getGetV1ConfigsKeyLineageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['lineage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':key'].lineage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsKeyLineage<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':key']['lineage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['lineage']['$get']>>
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
        ? getGetV1ConfigsKeyLineageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['lineage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':key'].lineage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConfigsKeySchemaVerifyKey() {
  return ['v1', '/v1/configs/:key/schema/verify', 'POST'] as const
}

export function usePostV1ConfigsKeySchemaVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configs)[':key']['schema']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.configs)[':key']['schema']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsKeySchemaVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.configs)[':key']['schema']['verify']['$post']>
        },
      ) => parseResponse(client.v1.configs[':key'].schema.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConfigsKeySchemaKey(
  args: InferRequestType<(typeof client.v1.configs)[':key']['schema']['$get']>,
) {
  return ['v1', '/v1/configs/:key/schema', args] as const
}

export function useGetV1ConfigsKeySchema<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':key']['schema']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['schema']['$get']>>
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
        ? getGetV1ConfigsKeySchemaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['schema']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':key'].schema.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsKeySchema<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':key']['schema']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['schema']['$get']>>
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
        ? getGetV1ConfigsKeySchemaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configs)[':key']['schema']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':key'].schema.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConfigsKeyKey(
  args: InferRequestType<(typeof client.v1.configs)[':key']['$get']>,
) {
  return ['v1', '/v1/configs/:key', args] as const
}

export function useGetV1ConfigsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ConfigsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configs)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ConfigsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configs[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConfigsKeyKey() {
  return ['v1', '/v1/configs/:key', 'POST'] as const
}

export function usePostV1ConfigsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':key']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.configs)[':key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.configs)[':key']['$post']> },
      ) => parseResponse(client.v1.configs[':key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConfigsKeyKey() {
  return ['v1', '/v1/configs/:key', 'DELETE'] as const
}

export function useDeleteV1ConfigsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configs)[':key']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.configs)[':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConfigsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.configs)[':key']['$delete']> },
      ) => parseResponse(client.v1.configs[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigsKeyArchiveKey() {
  return ['v1', '/v1/configs/:key/archive', 'POST'] as const
}

export function usePostV1ConfigsKeyArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configs)[':key']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.configs)[':key']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsKeyArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.configs)[':key']['archive']['$post']> },
      ) => parseResponse(client.v1.configs[':key'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigsKeyUnarchiveKey() {
  return ['v1', '/v1/configs/:key/unarchive', 'POST'] as const
}

export function usePostV1ConfigsKeyUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configs)[':key']['unarchive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.configs)[':key']['unarchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsKeyUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.configs)[':key']['unarchive']['$post']> },
      ) => parseResponse(client.v1.configs[':key'].unarchive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigsKeyLockKey() {
  return ['v1', '/v1/configs/:key/lock', 'POST'] as const
}

export function usePostV1ConfigsKeyLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configs)[':key']['lock']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.configs)[':key']['lock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsKeyLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.configs)[':key']['lock']['$post']> },
      ) => parseResponse(client.v1.configs[':key'].lock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigsKeyUnlockKey() {
  return ['v1', '/v1/configs/:key/unlock', 'POST'] as const
}

export function usePostV1ConfigsKeyUnlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configs)[':key']['unlock']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.configs)[':key']['unlock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsKeyUnlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.configs)[':key']['unlock']['$post']> },
      ) => parseResponse(client.v1.configs[':key'].unlock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConfigsRevisionsKeyKey(
  args: InferRequestType<(typeof client.v1)['configs-revisions'][':key']['$get']>,
) {
  return ['v1', '/v1/configs-revisions/:key', args] as const
}

export function useGetV1ConfigsRevisionsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['configs-revisions'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['configs-revisions'][':key']['$get']>>
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
        ? getGetV1ConfigsRevisionsKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['configs-revisions'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['configs-revisions'][':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsRevisionsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['configs-revisions'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['configs-revisions'][':key']['$get']>>
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
        ? getGetV1ConfigsRevisionsKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['configs-revisions'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['configs-revisions'][':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConfigsRevisionsKeyKey() {
  return ['v1', '/v1/configs-revisions/:key', 'POST'] as const
}

export function usePostV1ConfigsRevisionsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['configs-revisions'][':key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['configs-revisions'][':key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsRevisionsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['configs-revisions'][':key']['$post']> },
      ) => parseResponse(client.v1['configs-revisions'][':key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConfigsRevisionsKeyLatestKey(
  args: InferRequestType<(typeof client.v1)['configs-revisions'][':key']['latest']['$get']>,
) {
  return ['v1', '/v1/configs-revisions/:key/latest', args] as const
}

export function useGetV1ConfigsRevisionsKeyLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['configs-revisions'][':key']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['configs-revisions'][':key']['latest']['$get']>>
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
        ? getGetV1ConfigsRevisionsKeyLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['configs-revisions'][':key']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['configs-revisions'][':key'].latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsRevisionsKeyLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['configs-revisions'][':key']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['configs-revisions'][':key']['latest']['$get']>>
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
        ? getGetV1ConfigsRevisionsKeyLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['configs-revisions'][':key']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['configs-revisions'][':key'].latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConfigsRevisionsKeyVersionKey(
  args: InferRequestType<(typeof client.v1)['configs-revisions'][':key'][':version']['$get']>,
) {
  return ['v1', '/v1/configs-revisions/:key/:version', args] as const
}

export function useGetV1ConfigsRevisionsKeyVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['configs-revisions'][':key'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['configs-revisions'][':key'][':version']['$get']>>
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
        ? getGetV1ConfigsRevisionsKeyVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['configs-revisions'][':key'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['configs-revisions'][':key'][':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsRevisionsKeyVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['configs-revisions'][':key'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['configs-revisions'][':key'][':version']['$get']>>
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
        ? getGetV1ConfigsRevisionsKeyVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['configs-revisions'][':key'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['configs-revisions'][':key'][':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ConfigsRevisionsKeyVersionMetadataKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/metadata', 'PUT'] as const
}

export function usePutV1ConfigsRevisionsKeyVersionMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['metadata']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['configs-revisions'][':key'][':version']['metadata']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConfigsRevisionsKeyVersionMetadataKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['metadata']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version'].metadata.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ConfigsRevisionsKeyVersionValueKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/value', 'PUT'] as const
}

export function usePutV1ConfigsRevisionsKeyVersionValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['configs-revisions'][':key'][':version']['value']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['configs-revisions'][':key'][':version']['value']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConfigsRevisionsKeyVersionValueKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version'].value.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ConfigsRevisionsKeyVersionPropertyKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/property', 'PUT'] as const
}

export function usePutV1ConfigsRevisionsKeyVersionProperty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['property']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['configs-revisions'][':key'][':version']['property']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConfigsRevisionsKeyVersionPropertyKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['property']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version'].property.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConfigsRevisionsKeyVersionPropertyKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/property', 'DELETE'] as const
}

export function useDeleteV1ConfigsRevisionsKeyVersionProperty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['property']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['configs-revisions'][':key'][':version']['property']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConfigsRevisionsKeyVersionPropertyKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['property']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version'].property.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ConfigsRevisionsKeyVersionSchemaKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/schema', 'PUT'] as const
}

export function usePutV1ConfigsRevisionsKeyVersionSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['schema']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['configs-revisions'][':key'][':version']['schema']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConfigsRevisionsKeyVersionSchemaKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['schema']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version'].schema.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ConfigsRevisionsKeyVersionProjectionKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/projection', 'PUT'] as const
}

export function usePutV1ConfigsRevisionsKeyVersionProjection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['projection']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['configs-revisions'][':key'][':version']['projection']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConfigsRevisionsKeyVersionProjectionKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['projection']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version'].projection.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConfigsRevisionsKeyVersionProjectionKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/projection', 'DELETE'] as const
}

export function useDeleteV1ConfigsRevisionsKeyVersionProjection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['projection']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['configs-revisions'][':key'][':version']['projection']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConfigsRevisionsKeyVersionProjectionKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['projection']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version'].projection.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ConfigsRevisionsKeyVersionArchiveKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/archive', 'PUT'] as const
}

export function usePutV1ConfigsRevisionsKeyVersionArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['archive']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['configs-revisions'][':key'][':version']['archive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConfigsRevisionsKeyVersionArchiveKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['archive']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version'].archive.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigsRevisionsKeyVersionRequestReviewKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/request-review', 'POST'] as const
}

export function usePostV1ConfigsRevisionsKeyVersionRequestReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['request-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['configs-revisions'][':key'][':version']['request-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsRevisionsKeyVersionRequestReviewKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['request-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version']['request-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigsRevisionsKeyVersionSubmitReviewKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/submit-review', 'POST'] as const
}

export function usePostV1ConfigsRevisionsKeyVersionSubmitReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['submit-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['configs-revisions'][':key'][':version']['submit-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsRevisionsKeyVersionSubmitReviewKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['submit-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version']['submit-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigsRevisionsKeyVersionUndoReviewKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/undo-review', 'POST'] as const
}

export function usePostV1ConfigsRevisionsKeyVersionUndoReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['undo-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['configs-revisions'][':key'][':version']['undo-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsRevisionsKeyVersionUndoReviewKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['undo-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version']['undo-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigsRevisionsKeyVersionRecallReviewKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/recall-review', 'POST'] as const
}

export function usePostV1ConfigsRevisionsKeyVersionRecallReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['recall-review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['configs-revisions'][':key'][':version']['recall-review']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsRevisionsKeyVersionRecallReviewKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['recall-review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version']['recall-review'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigsRevisionsKeyVersionReopenKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/reopen', 'POST'] as const
}

export function usePostV1ConfigsRevisionsKeyVersionReopen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['reopen']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['configs-revisions'][':key'][':version']['reopen']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsRevisionsKeyVersionReopenKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['reopen']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version'].reopen.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigsRevisionsKeyVersionSchedulePublishKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/schedule-publish', 'POST'] as const
}

export function usePostV1ConfigsRevisionsKeyVersionSchedulePublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['schedule-publish']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['configs-revisions'][':key'][':version']['schedule-publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsRevisionsKeyVersionSchedulePublishKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['schedule-publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version']['schedule-publish'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConfigsRevisionsKeyVersionMergeStatusKey(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['merge-status']['$get']
  >,
) {
  return ['v1', '/v1/configs-revisions/:key/:version/merge-status', args] as const
}

export function useGetV1ConfigsRevisionsKeyVersionMergeStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['merge-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['configs-revisions'][':key'][':version']['merge-status']['$get']
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
        ? getGetV1ConfigsRevisionsKeyVersionMergeStatusKey(args)
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
                (typeof client.v1)['configs-revisions'][':key'][':version']['merge-status']['$get']
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
          client.v1['configs-revisions'][':key'][':version']['merge-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigsRevisionsKeyVersionMergeStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['configs-revisions'][':key'][':version']['merge-status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['configs-revisions'][':key'][':version']['merge-status']['$get']
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
        ? getGetV1ConfigsRevisionsKeyVersionMergeStatusKey(args)
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
                (typeof client.v1)['configs-revisions'][':key'][':version']['merge-status']['$get']
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
          client.v1['configs-revisions'][':key'][':version']['merge-status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConfigsRevisionsKeyVersionRebaseKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/rebase', 'POST'] as const
}

export function usePostV1ConfigsRevisionsKeyVersionRebase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['rebase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['configs-revisions'][':key'][':version']['rebase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsRevisionsKeyVersionRebaseKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['rebase']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version'].rebase.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigsRevisionsKeyVersionPublishKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/publish', 'POST'] as const
}

export function usePostV1ConfigsRevisionsKeyVersionPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['publish']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['configs-revisions'][':key'][':version']['publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsRevisionsKeyVersionPublishKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version'].publish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigsRevisionsKeyVersionDiscardKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/discard', 'POST'] as const
}

export function usePostV1ConfigsRevisionsKeyVersionDiscard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['discard']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['configs-revisions'][':key'][':version']['discard']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsRevisionsKeyVersionDiscardKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['discard']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version'].discard.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConfigsRevisionsKeyVersionRevertKey() {
  return ['v1', '/v1/configs-revisions/:key/:version/revert', 'POST'] as const
}

export function usePostV1ConfigsRevisionsKeyVersionRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['configs-revisions'][':key'][':version']['revert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['configs-revisions'][':key'][':version']['revert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigsRevisionsKeyVersionRevertKey()
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
            (typeof client.v1)['configs-revisions'][':key'][':version']['revert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['configs-revisions'][':key'][':version'].revert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ReleasesPublishRevisionsKey() {
  return ['v1', '/v1/releases/publish-revisions', 'POST'] as const
}

export function usePostV1ReleasesPublishRevisions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.releases)['publish-revisions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.releases)['publish-revisions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ReleasesPublishRevisionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.releases)['publish-revisions']['$post']> },
      ) => parseResponse(client.v1.releases['publish-revisions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomHooksKey(
  args: InferRequestType<(typeof client.v1)['custom-hooks']['$get']>,
) {
  return ['v1', '/v1/custom-hooks', args] as const
}

export function useGetV1CustomHooks<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['custom-hooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['custom-hooks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1CustomHooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['custom-hooks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['custom-hooks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomHooks<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['custom-hooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['custom-hooks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1CustomHooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['custom-hooks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['custom-hooks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomHooksKey() {
  return ['v1', '/v1/custom-hooks', 'POST'] as const
}

export function usePostV1CustomHooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['custom-hooks']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['custom-hooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomHooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['custom-hooks']['$post']> },
      ) => parseResponse(client.v1['custom-hooks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomHooksTestKey() {
  return ['v1', '/v1/custom-hooks/test', 'POST'] as const
}

export function usePostV1CustomHooksTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['custom-hooks']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['custom-hooks']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomHooksTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['custom-hooks']['test']['$post']> },
      ) => parseResponse(client.v1['custom-hooks'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomHooksIdKey(
  args: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['$get']>,
) {
  return ['v1', '/v1/custom-hooks/:id', args] as const
}

export function useGetV1CustomHooksId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-hooks'][':id']['$get']>>
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
        ? getGetV1CustomHooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-hooks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['custom-hooks'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomHooksId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-hooks'][':id']['$get']>>
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
        ? getGetV1CustomHooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-hooks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['custom-hooks'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomHooksIdKey() {
  return ['v1', '/v1/custom-hooks/:id', 'POST'] as const
}

export function usePostV1CustomHooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['custom-hooks'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['custom-hooks'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomHooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['$post']> },
      ) => parseResponse(client.v1['custom-hooks'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CustomHooksIdKey() {
  return ['v1', '/v1/custom-hooks/:id', 'DELETE'] as const
}

export function useDeleteV1CustomHooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['custom-hooks'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['custom-hooks'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CustomHooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['$delete']> },
      ) => parseResponse(client.v1['custom-hooks'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomHooksIdHistoryKey(
  args: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['history']['$get']>,
) {
  return ['v1', '/v1/custom-hooks/:id/history', args] as const
}

export function useGetV1CustomHooksIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-hooks'][':id']['history']['$get']>>
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
        ? getGetV1CustomHooksIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-hooks'][':id']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['custom-hooks'][':id'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomHooksIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-hooks'][':id']['history']['$get']>>
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
        ? getGetV1CustomHooksIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-hooks'][':id']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['custom-hooks'][':id'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomHooksIdRevertKey() {
  return ['v1', '/v1/custom-hooks/:id/revert', 'POST'] as const
}

export function usePostV1CustomHooksIdRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['custom-hooks'][':id']['revert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['custom-hooks'][':id']['revert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomHooksIdRevertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['custom-hooks'][':id']['revert']['$post']> },
      ) => parseResponse(client.v1['custom-hooks'][':id'].revert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsKey(
  args: InferRequestType<typeof client.v1.organizations.$get>,
) {
  return ['v1', '/v1/organizations', args] as const
}

export function useGetV1Organizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.organizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
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
        ? getGetV1OrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Organizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.organizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
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
        ? getGetV1OrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsKey() {
  return ['v1', '/v1/organizations', 'POST'] as const
}

export function usePostV1Organizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.organizations.$post> }) =>
        parseResponse(client.v1.organizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1OrganizationsIdKey() {
  return ['v1', '/v1/organizations/:id', 'PUT'] as const
}

export function usePutV1OrganizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.organizations)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.organizations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1OrganizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.organizations)[':id']['$put']> },
      ) => parseResponse(client.v1.organizations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SdkPayloadKeyKey(
  args: InferRequestType<(typeof client.v1)['sdk-payload'][':key']['$get']>,
) {
  return ['v1', '/v1/sdk-payload/:key', args] as const
}

export function useGetV1SdkPayloadKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-payload'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-payload'][':key']['$get']>>
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
        ? getGetV1SdkPayloadKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-payload'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sdk-payload'][':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SdkPayloadKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-payload'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-payload'][':key']['$get']>>
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
        ? getGetV1SdkPayloadKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-payload'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sdk-payload'][':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FactTablesKey(
  args: InferRequestType<(typeof client.v1)['fact-tables']['$get']>,
) {
  return ['v1', '/v1/fact-tables', args] as const
}

export function useGetV1FactTables<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['fact-tables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['fact-tables']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FactTablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['fact-tables']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['fact-tables'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FactTables<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['fact-tables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['fact-tables']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FactTablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['fact-tables']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['fact-tables'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FactTablesKey() {
  return ['v1', '/v1/fact-tables', 'POST'] as const
}

export function usePostV1FactTables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['fact-tables']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['fact-tables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FactTablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['fact-tables']['$post']> },
      ) => parseResponse(client.v1['fact-tables'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FactTablesIdKey(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':id']['$get']>,
) {
  return ['v1', '/v1/fact-tables/:id', args] as const
}

export function useGetV1FactTablesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['fact-tables'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FactTablesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['fact-tables'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['fact-tables'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FactTablesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['fact-tables'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FactTablesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['fact-tables'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['fact-tables'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FactTablesIdKey() {
  return ['v1', '/v1/fact-tables/:id', 'POST'] as const
}

export function usePostV1FactTablesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['fact-tables'][':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['fact-tables'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FactTablesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['fact-tables'][':id']['$post']> },
      ) => parseResponse(client.v1['fact-tables'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FactTablesIdKey() {
  return ['v1', '/v1/fact-tables/:id', 'DELETE'] as const
}

export function useDeleteV1FactTablesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['fact-tables'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['fact-tables'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FactTablesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['fact-tables'][':id']['$delete']> },
      ) => parseResponse(client.v1['fact-tables'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FactTablesFactTableIdFiltersKey(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':factTableId']['filters']['$get']>,
) {
  return ['v1', '/v1/fact-tables/:factTableId/filters', args] as const
}

export function useGetV1FactTablesFactTableIdFilters<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':factTableId']['filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['fact-tables'][':factTableId']['filters']['$get']>
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
        ? getGetV1FactTablesFactTableIdFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['fact-tables'][':factTableId']['filters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['fact-tables'][':factTableId'].filters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FactTablesFactTableIdFilters<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':factTableId']['filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['fact-tables'][':factTableId']['filters']['$get']>
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
        ? getGetV1FactTablesFactTableIdFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['fact-tables'][':factTableId']['filters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['fact-tables'][':factTableId'].filters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FactTablesFactTableIdFiltersKey() {
  return ['v1', '/v1/fact-tables/:factTableId/filters', 'POST'] as const
}

export function usePostV1FactTablesFactTableIdFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['fact-tables'][':factTableId']['filters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['fact-tables'][':factTableId']['filters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FactTablesFactTableIdFiltersKey()
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
            (typeof client.v1)['fact-tables'][':factTableId']['filters']['$post']
          >
        },
      ) =>
        parseResponse(client.v1['fact-tables'][':factTableId'].filters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FactTablesFactTableIdFiltersIdKey(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$get']
  >,
) {
  return ['v1', '/v1/fact-tables/:factTableId/filters/:id', args] as const
}

export function useGetV1FactTablesFactTableIdFiltersId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$get']
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
        ? getGetV1FactTablesFactTableIdFiltersIdKey(args)
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
                (typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$get']
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
          client.v1['fact-tables'][':factTableId'].filters[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FactTablesFactTableIdFiltersId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$get']
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
        ? getGetV1FactTablesFactTableIdFiltersIdKey(args)
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
                (typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$get']
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
          client.v1['fact-tables'][':factTableId'].filters[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1FactTablesFactTableIdFiltersIdKey() {
  return ['v1', '/v1/fact-tables/:factTableId/filters/:id', 'POST'] as const
}

export function usePostV1FactTablesFactTableIdFiltersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FactTablesFactTableIdFiltersIdKey()
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
            (typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['fact-tables'][':factTableId'].filters[':id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FactTablesFactTableIdFiltersIdKey() {
  return ['v1', '/v1/fact-tables/:factTableId/filters/:id', 'DELETE'] as const
}

export function useDeleteV1FactTablesFactTableIdFiltersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FactTablesFactTableIdFiltersIdKey()
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
            (typeof client.v1)['fact-tables'][':factTableId']['filters'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['fact-tables'][':factTableId'].filters[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1FactTablesFactTableIdVirtualColumnsKey() {
  return ['v1', '/v1/fact-tables/:factTableId/virtual-columns', 'POST'] as const
}

export function usePostV1FactTablesFactTableIdVirtualColumns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['fact-tables'][':factTableId']['virtual-columns']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['fact-tables'][':factTableId']['virtual-columns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FactTablesFactTableIdVirtualColumnsKey()
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
            (typeof client.v1)['fact-tables'][':factTableId']['virtual-columns']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['fact-tables'][':factTableId']['virtual-columns'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1FactTablesFactTableIdVirtualColumnsIdKey() {
  return ['v1', '/v1/fact-tables/:factTableId/virtual-columns/:id', 'POST'] as const
}

export function usePostV1FactTablesFactTableIdVirtualColumnsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['fact-tables'][':factTableId']['virtual-columns'][':id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['fact-tables'][':factTableId']['virtual-columns'][':id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FactTablesFactTableIdVirtualColumnsIdKey()
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
            (typeof client.v1)['fact-tables'][':factTableId']['virtual-columns'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['fact-tables'][':factTableId']['virtual-columns'][':id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FactTablesFactTableIdVirtualColumnsIdKey() {
  return ['v1', '/v1/fact-tables/:factTableId/virtual-columns/:id', 'DELETE'] as const
}

export function useDeleteV1FactTablesFactTableIdVirtualColumnsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['fact-tables'][':factTableId']['virtual-columns'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['fact-tables'][':factTableId']['virtual-columns'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FactTablesFactTableIdVirtualColumnsIdKey()
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
            (typeof client.v1)['fact-tables'][':factTableId']['virtual-columns'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['fact-tables'][':factTableId']['virtual-columns'][':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1FactTablesIdAggregatedTablesKey(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':id']['aggregated-tables']['$get']>,
) {
  return ['v1', '/v1/fact-tables/:id/aggregated-tables', args] as const
}

export function useGetV1FactTablesIdAggregatedTables<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':id']['aggregated-tables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['fact-tables'][':id']['aggregated-tables']['$get']>
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
        ? getGetV1FactTablesIdAggregatedTablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['fact-tables'][':id']['aggregated-tables']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['fact-tables'][':id']['aggregated-tables'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FactTablesIdAggregatedTables<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['fact-tables'][':id']['aggregated-tables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['fact-tables'][':id']['aggregated-tables']['$get']>
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
        ? getGetV1FactTablesIdAggregatedTablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['fact-tables'][':id']['aggregated-tables']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['fact-tables'][':id']['aggregated-tables'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1FactTablesIdAggregatedTablesRefreshKey() {
  return ['v1', '/v1/fact-tables/:id/aggregated-tables/refresh', 'POST'] as const
}

export function usePostV1FactTablesIdAggregatedTablesRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['refresh']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['refresh']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FactTablesIdAggregatedTablesRefreshKey()
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
            (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['refresh']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['fact-tables'][':id']['aggregated-tables'].refresh.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1FactTablesIdAggregatedTablesRunsKey(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs']['$get']
  >,
) {
  return ['v1', '/v1/fact-tables/:id/aggregated-tables/runs', args] as const
}

export function useGetV1FactTablesIdAggregatedTablesRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs']['$get']
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
        ? getGetV1FactTablesIdAggregatedTablesRunsKey(args)
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
                (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs']['$get']
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
          client.v1['fact-tables'][':id']['aggregated-tables'].runs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FactTablesIdAggregatedTablesRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs']['$get']
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
        ? getGetV1FactTablesIdAggregatedTablesRunsKey(args)
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
                (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs']['$get']
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
          client.v1['fact-tables'][':id']['aggregated-tables'].runs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FactTablesIdAggregatedTablesRunsRunIdKey(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs'][':runId']['$get']
  >,
) {
  return ['v1', '/v1/fact-tables/:id/aggregated-tables/runs/:runId', args] as const
}

export function useGetV1FactTablesIdAggregatedTablesRunsRunId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs'][':runId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs'][':runId']['$get']
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
        ? getGetV1FactTablesIdAggregatedTablesRunsRunIdKey(args)
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
                (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs'][':runId']['$get']
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
          client.v1['fact-tables'][':id']['aggregated-tables'].runs[':runId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FactTablesIdAggregatedTablesRunsRunId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs'][':runId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs'][':runId']['$get']
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
        ? getGetV1FactTablesIdAggregatedTablesRunsRunIdKey(args)
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
                (typeof client.v1)['fact-tables'][':id']['aggregated-tables']['runs'][':runId']['$get']
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
          client.v1['fact-tables'][':id']['aggregated-tables'].runs[':runId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FactMetricsKey(
  args: InferRequestType<(typeof client.v1)['fact-metrics']['$get']>,
) {
  return ['v1', '/v1/fact-metrics', args] as const
}

export function useGetV1FactMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['fact-metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['fact-metrics']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FactMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['fact-metrics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['fact-metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FactMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['fact-metrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['fact-metrics']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FactMetricsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['fact-metrics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['fact-metrics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FactMetricsKey() {
  return ['v1', '/v1/fact-metrics', 'POST'] as const
}

export function usePostV1FactMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['fact-metrics']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['fact-metrics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FactMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['fact-metrics']['$post']> },
      ) => parseResponse(client.v1['fact-metrics'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FactMetricsIdKey(
  args: InferRequestType<(typeof client.v1)['fact-metrics'][':id']['$get']>,
) {
  return ['v1', '/v1/fact-metrics/:id', args] as const
}

export function useGetV1FactMetricsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['fact-metrics'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['fact-metrics'][':id']['$get']>>
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
        ? getGetV1FactMetricsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['fact-metrics'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['fact-metrics'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FactMetricsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['fact-metrics'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['fact-metrics'][':id']['$get']>>
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
        ? getGetV1FactMetricsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['fact-metrics'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['fact-metrics'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FactMetricsIdKey() {
  return ['v1', '/v1/fact-metrics/:id', 'POST'] as const
}

export function usePostV1FactMetricsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['fact-metrics'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['fact-metrics'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FactMetricsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['fact-metrics'][':id']['$post']> },
      ) => parseResponse(client.v1['fact-metrics'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FactMetricsIdKey() {
  return ['v1', '/v1/fact-metrics/:id', 'DELETE'] as const
}

export function useDeleteV1FactMetricsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['fact-metrics'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['fact-metrics'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FactMetricsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['fact-metrics'][':id']['$delete']> },
      ) => parseResponse(client.v1['fact-metrics'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1FactMetricsIdAnalysisKey() {
  return ['v1', '/v1/fact-metrics/:id/analysis', 'POST'] as const
}

export function usePostV1FactMetricsIdAnalysis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['fact-metrics'][':id']['analysis']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['fact-metrics'][':id']['analysis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FactMetricsIdAnalysisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['fact-metrics'][':id']['analysis']['$post']>
        },
      ) => parseResponse(client.v1['fact-metrics'][':id'].analysis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BulkImportFactsKey() {
  return ['v1', '/v1/bulk-import/facts', 'POST'] as const
}

export function usePostV1BulkImportFacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['bulk-import']['facts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['bulk-import']['facts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BulkImportFactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['bulk-import']['facts']['$post']> },
      ) => parseResponse(client.v1['bulk-import'].facts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CodeRefsKey(
  args: InferRequestType<(typeof client.v1)['code-refs']['$get']>,
) {
  return ['v1', '/v1/code-refs', args] as const
}

export function useGetV1CodeRefs<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['code-refs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['code-refs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1CodeRefsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['code-refs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['code-refs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CodeRefs<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['code-refs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['code-refs']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1CodeRefsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['code-refs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['code-refs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CodeRefsKey() {
  return ['v1', '/v1/code-refs', 'POST'] as const
}

export function usePostV1CodeRefs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['code-refs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['code-refs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CodeRefsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['code-refs']['$post']> },
      ) => parseResponse(client.v1['code-refs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CodeRefsIdKey(
  args: InferRequestType<(typeof client.v1)['code-refs'][':id']['$get']>,
) {
  return ['v1', '/v1/code-refs/:id', args] as const
}

export function useGetV1CodeRefsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['code-refs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['code-refs'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1CodeRefsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['code-refs'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['code-refs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CodeRefsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['code-refs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['code-refs'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1CodeRefsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['code-refs'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['code-refs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1MembersKey(args: InferRequestType<typeof client.v1.members.$get>) {
  return ['v1', '/v1/members', args] as const
}

export function useGetV1Members<TError = unknown>(
  args: InferRequestType<typeof client.v1.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Members<TError = unknown>(
  args: InferRequestType<typeof client.v1.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1MembersIdRoleKey() {
  return ['v1', '/v1/members/:id/role', 'POST'] as const
}

export function usePostV1MembersIdRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.members)[':id']['role']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.members)[':id']['role']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MembersIdRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.members)[':id']['role']['$post']> },
      ) => parseResponse(client.v1.members[':id'].role.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MembersIdKey() {
  return ['v1', '/v1/members/:id', 'DELETE'] as const
}

export function useDeleteV1MembersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.members)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MembersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.members)[':id']['$delete']> },
      ) => parseResponse(client.v1.members[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1QueriesIdKey(
  args: InferRequestType<(typeof client.v1.queries)[':id']['$get']>,
) {
  return ['v1', '/v1/queries/:id', args] as const
}

export function useGetV1QueriesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.queries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.queries)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1QueriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.queries)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.queries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1QueriesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.queries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.queries)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1QueriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.queries)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.queries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DataSourcesIdQueriesKey(
  args: InferRequestType<(typeof client.v1)['data-sources'][':id']['queries']['$get']>,
) {
  return ['v1', '/v1/data-sources/:id/queries', args] as const
}

export function useGetV1DataSourcesIdQueries<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['data-sources'][':id']['queries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sources'][':id']['queries']['$get']>>
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
        ? getGetV1DataSourcesIdQueriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sources'][':id']['queries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['data-sources'][':id'].queries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DataSourcesIdQueries<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['data-sources'][':id']['queries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sources'][':id']['queries']['$get']>>
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
        ? getGetV1DataSourcesIdQueriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['data-sources'][':id']['queries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['data-sources'][':id'].queries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1QueriesIdCancelKey() {
  return ['v1', '/v1/queries/:id/cancel', 'POST'] as const
}

export function usePostV1QueriesIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.queries)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.queries)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1QueriesIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.queries)[':id']['cancel']['$post']> },
      ) => parseResponse(client.v1.queries[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SettingsKey() {
  return ['v1', '/v1/settings'] as const
}

export function useGetV1Settings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Settings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SettingsApprovalsKey() {
  return ['v1', '/v1/settings/approvals', 'PUT'] as const
}

export function usePutV1SettingsApprovals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.approvals.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.settings.approvals.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SettingsApprovalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.settings.approvals.$put> },
      ) => parseResponse(client.v1.settings.approvals.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1VersionKey() {
  return ['v1', '/v1/version'] as const
}

export function useGetV1Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConfirmationsKey(
  args: InferRequestType<typeof client.v1.confirmations.$get>,
) {
  return ['v1', '/v1/confirmations', args] as const
}

export function useGetV1Confirmations<TError = unknown>(
  args: InferRequestType<typeof client.v1.confirmations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.confirmations.$get>>>>
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
        ? getGetV1ConfirmationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.confirmations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.confirmations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Confirmations<TError = unknown>(
  args: InferRequestType<typeof client.v1.confirmations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.confirmations.$get>>>>
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
        ? getGetV1ConfirmationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.confirmations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.confirmations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConfirmationsIdKey(
  args: InferRequestType<(typeof client.v1.confirmations)[':id']['$get']>,
) {
  return ['v1', '/v1/confirmations/:id', args] as const
}

export function useGetV1ConfirmationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.confirmations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.confirmations)[':id']['$get']>>>
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
        ? getGetV1ConfirmationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.confirmations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.confirmations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfirmationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.confirmations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.confirmations)[':id']['$get']>>>
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
        ? getGetV1ConfirmationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.confirmations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.confirmations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InformationSchemaTablesTableIdKey(
  args: InferRequestType<(typeof client.v1)['information-schema-tables'][':tableId']['$get']>,
) {
  return ['v1', '/v1/information-schema-tables/:tableId', args] as const
}

export function useGetV1InformationSchemaTablesTableId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['information-schema-tables'][':tableId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['information-schema-tables'][':tableId']['$get']>>
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
        ? getGetV1InformationSchemaTablesTableIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['information-schema-tables'][':tableId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['information-schema-tables'][':tableId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InformationSchemaTablesTableId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['information-schema-tables'][':tableId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['information-schema-tables'][':tableId']['$get']>>
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
        ? getGetV1InformationSchemaTablesTableIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['information-schema-tables'][':tableId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['information-schema-tables'][':tableId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InformationSchemaTablesTableIdRefreshKey() {
  return ['v1', '/v1/information-schema-tables/:tableId/refresh', 'POST'] as const
}

export function usePostV1InformationSchemaTablesTableIdRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['information-schema-tables'][':tableId']['refresh']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['information-schema-tables'][':tableId']['refresh']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InformationSchemaTablesTableIdRefreshKey()
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
            (typeof client.v1)['information-schema-tables'][':tableId']['refresh']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['information-schema-tables'][':tableId'].refresh.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1RampSchedulesKey(
  args: InferRequestType<(typeof client.v1)['ramp-schedules']['$get']>,
) {
  return ['v1', '/v1/ramp-schedules', args] as const
}

export function useGetV1RampSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['ramp-schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ramp-schedules']['$get']>>>
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
        ? getGetV1RampSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ramp-schedules']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['ramp-schedules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RampSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['ramp-schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ramp-schedules']['$get']>>>
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
        ? getGetV1RampSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ramp-schedules']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['ramp-schedules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RampSchedulesKey() {
  return ['v1', '/v1/ramp-schedules', 'POST'] as const
}

export function usePostV1RampSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ramp-schedules']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['ramp-schedules']['$post']> },
      ) => parseResponse(client.v1['ramp-schedules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsStartKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/start', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['ramp-schedules'][':id']['actions']['start']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsStartKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['start']['$post']
          >
        },
      ) =>
        parseResponse(client.v1['ramp-schedules'][':id'].actions.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsPauseKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/pause', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['ramp-schedules'][':id']['actions']['pause']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsPauseKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['pause']['$post']
          >
        },
      ) =>
        parseResponse(client.v1['ramp-schedules'][':id'].actions.pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsResumeKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/resume', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['ramp-schedules'][':id']['actions']['resume']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsResumeKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['resume']['$post']
          >
        },
      ) =>
        parseResponse(client.v1['ramp-schedules'][':id'].actions.resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsRetryKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/retry', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['ramp-schedules'][':id']['actions']['retry']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsRetryKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['retry']['$post']
          >
        },
      ) =>
        parseResponse(client.v1['ramp-schedules'][':id'].actions.retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsRollbackKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/rollback', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsRollback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['ramp-schedules'][':id']['actions']['rollback']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['rollback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsRollbackKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['rollback']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['ramp-schedules'][':id'].actions.rollback.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsRestartKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/restart', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsRestart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['ramp-schedules'][':id']['actions']['restart']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['restart']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsRestartKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['restart']['$post']
          >
        },
      ) =>
        parseResponse(client.v1['ramp-schedules'][':id'].actions.restart.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsJumpKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/jump', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsJump<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['ramp-schedules'][':id']['actions']['jump']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['jump']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsJumpKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['jump']['$post']
          >
        },
      ) => parseResponse(client.v1['ramp-schedules'][':id'].actions.jump.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsCompleteKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/complete', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['ramp-schedules'][':id']['actions']['complete']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsCompleteKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['ramp-schedules'][':id'].actions.complete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsApproveStepKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/approve-step', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsApproveStep<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['ramp-schedules'][':id']['actions']['approve-step']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['ramp-schedules'][':id']['actions']['approve-step']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsApproveStepKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['approve-step']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['ramp-schedules'][':id'].actions['approve-step'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsAddTargetKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/add-target', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsAddTarget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['ramp-schedules'][':id']['actions']['add-target']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['add-target']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsAddTargetKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['add-target']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['ramp-schedules'][':id'].actions['add-target'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsEjectTargetKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/eject-target', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsEjectTarget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['ramp-schedules'][':id']['actions']['eject-target']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['ramp-schedules'][':id']['actions']['eject-target']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsEjectTargetKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['eject-target']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['ramp-schedules'][':id'].actions['eject-target'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsAdvanceKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/advance', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsAdvance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['ramp-schedules'][':id']['actions']['advance']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['actions']['advance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsAdvanceKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['advance']['$post']
          >
        },
      ) =>
        parseResponse(client.v1['ramp-schedules'][':id'].actions.advance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RampSchedulesIdStatusKey(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['status']['$get']>,
) {
  return ['v1', '/v1/ramp-schedules/:id/status', args] as const
}

export function useGetV1RampSchedulesIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedules'][':id']['status']['$get']>>
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
        ? getGetV1RampSchedulesIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedules'][':id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['ramp-schedules'][':id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RampSchedulesIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedules'][':id']['status']['$get']>>
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
        ? getGetV1RampSchedulesIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedules'][':id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['ramp-schedules'][':id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsSetMonitoringModeKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/set-monitoring-mode', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsSetMonitoringMode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['ramp-schedules'][':id']['actions']['set-monitoring-mode']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['ramp-schedules'][':id']['actions']['set-monitoring-mode']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsSetMonitoringModeKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['set-monitoring-mode']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['ramp-schedules'][':id'].actions['set-monitoring-mode'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsSetAutoUpdateKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/set-auto-update', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsSetAutoUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['ramp-schedules'][':id']['actions']['set-auto-update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['ramp-schedules'][':id']['actions']['set-auto-update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsSetAutoUpdateKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['set-auto-update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['ramp-schedules'][':id'].actions['set-auto-update'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1RampSchedulesIdMonitoringKey() {
  return ['v1', '/v1/ramp-schedules/:id/monitoring', 'PUT'] as const
}

export function usePutV1RampSchedulesIdMonitoring<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ramp-schedules'][':id']['monitoring']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['monitoring']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RampSchedulesIdMonitoringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['monitoring']['$put']>
        },
      ) => parseResponse(client.v1['ramp-schedules'][':id'].monitoring.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1RampSchedulesIdLockdownKey() {
  return ['v1', '/v1/ramp-schedules/:id/lockdown', 'PUT'] as const
}

export function usePutV1RampSchedulesIdLockdown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ramp-schedules'][':id']['lockdown']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['lockdown']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RampSchedulesIdLockdownKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['lockdown']['$put']>
        },
      ) => parseResponse(client.v1['ramp-schedules'][':id'].lockdown.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1RampSchedulesIdStepsKey() {
  return ['v1', '/v1/ramp-schedules/:id/steps', 'PUT'] as const
}

export function usePutV1RampSchedulesIdSteps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ramp-schedules'][':id']['steps']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['steps']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RampSchedulesIdStepsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['steps']['$put']> },
      ) => parseResponse(client.v1['ramp-schedules'][':id'].steps.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesIdActionsRefreshMonitoringKey() {
  return ['v1', '/v1/ramp-schedules/:id/actions/refresh-monitoring', 'POST'] as const
}

export function usePostV1RampSchedulesIdActionsRefreshMonitoring<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['ramp-schedules'][':id']['actions']['refresh-monitoring']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['ramp-schedules'][':id']['actions']['refresh-monitoring']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesIdActionsRefreshMonitoringKey()
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
            (typeof client.v1)['ramp-schedules'][':id']['actions']['refresh-monitoring']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['ramp-schedules'][':id'].actions['refresh-monitoring'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesActionsRollbackKey() {
  return ['v1', '/v1/ramp-schedules/actions/rollback', 'POST'] as const
}

export function usePostV1RampSchedulesActionsRollback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ramp-schedules']['actions']['rollback']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules']['actions']['rollback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesActionsRollbackKey()
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
            (typeof client.v1)['ramp-schedules']['actions']['rollback']['$post']
          >
        },
      ) => parseResponse(client.v1['ramp-schedules'].actions.rollback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RampSchedulesActionsPauseKey() {
  return ['v1', '/v1/ramp-schedules/actions/pause', 'POST'] as const
}

export function usePostV1RampSchedulesActionsPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ramp-schedules']['actions']['pause']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules']['actions']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampSchedulesActionsPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['ramp-schedules']['actions']['pause']['$post']>
        },
      ) => parseResponse(client.v1['ramp-schedules'].actions.pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReportsKey(args: InferRequestType<typeof client.v1.reports.$get>) {
  return ['v1', '/v1/reports', args] as const
}

export function useGetV1Reports<TError = unknown>(
  args: InferRequestType<typeof client.v1.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ReportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Reports<TError = unknown>(
  args: InferRequestType<typeof client.v1.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ReportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ReportsKey() {
  return ['v1', '/v1/reports', 'POST'] as const
}

export function usePostV1Reports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reports.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.reports.$post> }) =>
        parseResponse(client.v1.reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReportsIdKey(
  args: InferRequestType<(typeof client.v1.reports)[':id']['$get']>,
) {
  return ['v1', '/v1/reports/:id', args] as const
}

export function useGetV1ReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reports)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ReportsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reports)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reports)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ReportsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reports)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ReportsIdRefreshKey() {
  return ['v1', '/v1/reports/:id/refresh', 'POST'] as const
}

export function usePostV1ReportsIdRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.reports)[':id']['refresh']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.reports)[':id']['refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ReportsIdRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.reports)[':id']['refresh']['$post']> },
      ) => parseResponse(client.v1.reports[':id'].refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ReportsIdMetadataKey() {
  return ['v1', '/v1/reports/:id/metadata', 'PUT'] as const
}

export function usePutV1ReportsIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.reports)[':id']['metadata']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.reports)[':id']['metadata']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ReportsIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.reports)[':id']['metadata']['$put']> },
      ) => parseResponse(client.v1.reports[':id'].metadata.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ReportsIdSettingsKey() {
  return ['v1', '/v1/reports/:id/settings', 'PUT'] as const
}

export function usePutV1ReportsIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.reports)[':id']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.reports)[':id']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ReportsIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.reports)[':id']['settings']['$put']> },
      ) => parseResponse(client.v1.reports[':id'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1NamespacesKey(args: InferRequestType<typeof client.v1.namespaces.$get>) {
  return ['v1', '/v1/namespaces', args] as const
}

export function useGetV1Namespaces<TError = unknown>(
  args: InferRequestType<typeof client.v1.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.namespaces.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1NamespacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.namespaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Namespaces<TError = unknown>(
  args: InferRequestType<typeof client.v1.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.namespaces.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1NamespacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.namespaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1NamespacesKey() {
  return ['v1', '/v1/namespaces', 'POST'] as const
}

export function usePostV1Namespaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.namespaces.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.namespaces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NamespacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.namespaces.$post> }) =>
        parseResponse(client.v1.namespaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1NamespacesIdKey(
  args: InferRequestType<(typeof client.v1.namespaces)[':id']['$get']>,
) {
  return ['v1', '/v1/namespaces/:id', args] as const
}

export function useGetV1NamespacesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.namespaces)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.namespaces)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1NamespacesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.namespaces)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.namespaces[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NamespacesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.namespaces)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.namespaces)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1NamespacesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.namespaces)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.namespaces[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1NamespacesIdKey() {
  return ['v1', '/v1/namespaces/:id', 'PUT'] as const
}

export function usePutV1NamespacesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.namespaces)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.namespaces)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1NamespacesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.namespaces)[':id']['$put']> },
      ) => parseResponse(client.v1.namespaces[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1NamespacesIdKey() {
  return ['v1', '/v1/namespaces/:id', 'DELETE'] as const
}

export function useDeleteV1NamespacesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.namespaces)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.namespaces)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1NamespacesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.namespaces)[':id']['$delete']> },
      ) => parseResponse(client.v1.namespaces[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1NamespacesIdMembershipsKey(
  args: InferRequestType<(typeof client.v1.namespaces)[':id']['memberships']['$get']>,
) {
  return ['v1', '/v1/namespaces/:id/memberships', args] as const
}

export function useGetV1NamespacesIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.v1.namespaces)[':id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.namespaces)[':id']['memberships']['$get']>>
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
        ? getGetV1NamespacesIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.namespaces)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.namespaces[':id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NamespacesIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.v1.namespaces)[':id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.namespaces)[':id']['memberships']['$get']>>
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
        ? getGetV1NamespacesIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.namespaces)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.namespaces[':id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1NamespacesIdRotateSeedKey() {
  return ['v1', '/v1/namespaces/:id/rotateSeed', 'POST'] as const
}

export function usePostV1NamespacesIdRotateSeed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.namespaces)[':id']['rotateSeed']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.namespaces)[':id']['rotateSeed']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NamespacesIdRotateSeedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.namespaces)[':id']['rotateSeed']['$post']> },
      ) => parseResponse(client.v1.namespaces[':id'].rotateSeed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EventWebhooksKey() {
  return ['v1', '/v1/event-webhooks'] as const
}

export function useGetV1EventWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-webhooks']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EventWebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-webhooks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['event-webhooks'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-webhooks']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EventWebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-webhooks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['event-webhooks'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EventWebhooksKey() {
  return ['v1', '/v1/event-webhooks', 'POST'] as const
}

export function usePostV1EventWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-webhooks']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['event-webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EventWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['event-webhooks']['$post']> },
      ) => parseResponse(client.v1['event-webhooks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EventWebhooksIdKey(
  args: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['$get']>,
) {
  return ['v1', '/v1/event-webhooks/:id', args] as const
}

export function useGetV1EventWebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-webhooks'][':id']['$get']>>
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
        ? getGetV1EventWebhooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-webhooks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['event-webhooks'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventWebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-webhooks'][':id']['$get']>>
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
        ? getGetV1EventWebhooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-webhooks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['event-webhooks'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1EventWebhooksIdKey() {
  return ['v1', '/v1/event-webhooks/:id', 'PUT'] as const
}

export function usePutV1EventWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['event-webhooks'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['event-webhooks'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EventWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['$put']> },
      ) => parseResponse(client.v1['event-webhooks'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EventWebhooksIdKey() {
  return ['v1', '/v1/event-webhooks/:id', 'DELETE'] as const
}

export function useDeleteV1EventWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['event-webhooks'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['event-webhooks'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EventWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['$delete']> },
      ) => parseResponse(client.v1['event-webhooks'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EventWebhooksIdLogsKey(
  args: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['logs']['$get']>,
) {
  return ['v1', '/v1/event-webhooks/:id/logs', args] as const
}

export function useGetV1EventWebhooksIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-webhooks'][':id']['logs']['$get']>>
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
        ? getGetV1EventWebhooksIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-webhooks'][':id']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['event-webhooks'][':id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventWebhooksIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-webhooks'][':id']['logs']['$get']>>
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
        ? getGetV1EventWebhooksIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['event-webhooks'][':id']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['event-webhooks'][':id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EventWebhooksIdTestKey() {
  return ['v1', '/v1/event-webhooks/:id/test', 'POST'] as const
}

export function usePostV1EventWebhooksIdTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['event-webhooks'][':id']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['event-webhooks'][':id']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EventWebhooksIdTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['event-webhooks'][':id']['test']['$post']> },
      ) => parseResponse(client.v1['event-webhooks'][':id'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AuditsKey(args: InferRequestType<typeof client.v1.audits.$get>) {
  return ['v1', '/v1/audits', args] as const
}

export function useGetV1Audits<TError = unknown>(
  args: InferRequestType<typeof client.v1.audits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audits.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AuditsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audits.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Audits<TError = unknown>(
  args: InferRequestType<typeof client.v1.audits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audits.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AuditsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audits.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EventsKey(args: InferRequestType<typeof client.v1.events.$get>) {
  return ['v1', '/v1/events', args] as const
}

export function useGetV1Events<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Events<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EventsIdKey(
  args: InferRequestType<(typeof client.v1.events)[':id']['$get']>,
) {
  return ['v1', '/v1/events/:id', args] as const
}

export function useGetV1EventsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1EventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1EventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TransformCopyKey() {
  return ['v1', '/v1/transform-copy', 'POST'] as const
}

export function usePostV1TransformCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['transform-copy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['transform-copy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TransformCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['transform-copy']['$post']> },
      ) => parseResponse(client.v1['transform-copy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DashboardsIdKey(
  args: InferRequestType<(typeof client.v1.dashboards)[':id']['$get']>,
) {
  return ['v1', '/v1/dashboards/:id', args] as const
}

export function useGetV1DashboardsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.dashboards)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dashboards)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DashboardsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dashboards)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dashboards[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DashboardsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.dashboards)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dashboards)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DashboardsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dashboards)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dashboards[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1DashboardsIdKey() {
  return ['v1', '/v1/dashboards/:id', 'PUT'] as const
}

export function usePutV1DashboardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dashboards)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.dashboards)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DashboardsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.dashboards)[':id']['$put']> },
      ) => parseResponse(client.v1.dashboards[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DashboardsIdKey() {
  return ['v1', '/v1/dashboards/:id', 'DELETE'] as const
}

export function useDeleteV1DashboardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.dashboards)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.dashboards)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DashboardsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.dashboards)[':id']['$delete']> },
      ) => parseResponse(client.v1.dashboards[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DashboardsKey() {
  return ['v1', '/v1/dashboards'] as const
}

export function useGetV1Dashboards<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dashboards.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DashboardsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dashboards.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dashboards.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Dashboards<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dashboards.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DashboardsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dashboards.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dashboards.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DashboardsKey() {
  return ['v1', '/v1/dashboards', 'POST'] as const
}

export function usePostV1Dashboards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dashboards.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dashboards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DashboardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.dashboards.$post> }) =>
        parseResponse(client.v1.dashboards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2DashboardsKey() {
  return ['v2', '/v2/dashboards', 'POST'] as const
}

export function usePostV2Dashboards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dashboards.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.dashboards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DashboardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.dashboards.$post> }) =>
        parseResponse(client.v2.dashboards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DashboardsByExperimentExperimentIdKey(
  args: InferRequestType<(typeof client.v1.dashboards)['by-experiment'][':experimentId']['$get']>,
) {
  return ['v1', '/v1/dashboards/by-experiment/:experimentId', args] as const
}

export function useGetV1DashboardsByExperimentExperimentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.dashboards)['by-experiment'][':experimentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.dashboards)['by-experiment'][':experimentId']['$get']>
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
        ? getGetV1DashboardsByExperimentExperimentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.dashboards)['by-experiment'][':experimentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.dashboards['by-experiment'][':experimentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DashboardsByExperimentExperimentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.dashboards)['by-experiment'][':experimentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.dashboards)['by-experiment'][':experimentId']['$get']>
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
        ? getGetV1DashboardsByExperimentExperimentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.dashboards)['by-experiment'][':experimentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.dashboards['by-experiment'][':experimentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ContextualBanditsIdKey(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['$get']>,
) {
  return ['v1', '/v1/contextual-bandits/:id', args] as const
}

export function useGetV1ContextualBanditsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['$get']>>
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
        ? getGetV1ContextualBanditsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['contextual-bandits'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextualBanditsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['$get']>>
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
        ? getGetV1ContextualBanditsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['contextual-bandits'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ContextualBanditsIdKey() {
  return ['v1', '/v1/contextual-bandits/:id', 'PUT'] as const
}

export function usePutV1ContextualBanditsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ContextualBanditsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['$put']> },
      ) => parseResponse(client.v1['contextual-bandits'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ContextualBanditsIdKey() {
  return ['v1', '/v1/contextual-bandits/:id', 'DELETE'] as const
}

export function useDeleteV1ContextualBanditsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ContextualBanditsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['$delete']> },
      ) => parseResponse(client.v1['contextual-bandits'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ContextualBanditsKey(
  args: InferRequestType<(typeof client.v1)['contextual-bandits']['$get']>,
) {
  return ['v1', '/v1/contextual-bandits', args] as const
}

export function useGetV1ContextualBandits<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits']['$get']>>
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
        ? getGetV1ContextualBanditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['contextual-bandits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextualBandits<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits']['$get']>>
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
        ? getGetV1ContextualBanditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['contextual-bandits'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ContextualBanditsKey() {
  return ['v1', '/v1/contextual-bandits', 'POST'] as const
}

export function usePostV1ContextualBandits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['contextual-bandits']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['contextual-bandits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextualBanditsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['contextual-bandits']['$post']> },
      ) => parseResponse(client.v1['contextual-bandits'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ContextualBanditsIdStartKey() {
  return ['v1', '/v1/contextual-bandits/:id/start', 'POST'] as const
}

export function usePostV1ContextualBanditsIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextualBanditsIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['start']['$post']>
        },
      ) => parseResponse(client.v1['contextual-bandits'][':id'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ContextualBanditsIdStopKey() {
  return ['v1', '/v1/contextual-bandits/:id/stop', 'POST'] as const
}

export function usePostV1ContextualBanditsIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextualBanditsIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['stop']['$post']>
        },
      ) => parseResponse(client.v1['contextual-bandits'][':id'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ContextualBanditsIdRefreshKey() {
  return ['v1', '/v1/contextual-bandits/:id/refresh', 'POST'] as const
}

export function usePostV1ContextualBanditsIdRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['refresh']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextualBanditsIdRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['refresh']['$post']>
        },
      ) => parseResponse(client.v1['contextual-bandits'][':id'].refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ContextualBanditsIdVariationsKey() {
  return ['v1', '/v1/contextual-bandits/:id/variations', 'POST'] as const
}

export function usePostV1ContextualBanditsIdVariations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['contextual-bandits'][':id']['variations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['variations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextualBanditsIdVariationsKey()
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
            (typeof client.v1)['contextual-bandits'][':id']['variations']['$post']
          >
        },
      ) =>
        parseResponse(client.v1['contextual-bandits'][':id'].variations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ContextualBanditsIdCancelKey() {
  return ['v1', '/v1/contextual-bandits/:id/cancel', 'POST'] as const
}

export function usePostV1ContextualBanditsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['contextual-bandits'][':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextualBanditsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['cancel']['$post']>
        },
      ) => parseResponse(client.v1['contextual-bandits'][':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ContextualBanditsIdVisualChangesetsKey(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['visual-changesets']['$get']
  >,
) {
  return ['v1', '/v1/contextual-bandits/:id/visual-changesets', args] as const
}

export function useGetV1ContextualBanditsIdVisualChangesets<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['visual-changesets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['contextual-bandits'][':id']['visual-changesets']['$get']
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
        ? getGetV1ContextualBanditsIdVisualChangesetsKey(args)
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
                (typeof client.v1)['contextual-bandits'][':id']['visual-changesets']['$get']
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
          client.v1['contextual-bandits'][':id']['visual-changesets'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextualBanditsIdVisualChangesets<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['contextual-bandits'][':id']['visual-changesets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['contextual-bandits'][':id']['visual-changesets']['$get']
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
        ? getGetV1ContextualBanditsIdVisualChangesetsKey(args)
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
                (typeof client.v1)['contextual-bandits'][':id']['visual-changesets']['$get']
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
          client.v1['contextual-bandits'][':id']['visual-changesets'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ContextualBanditsIdVisualChangesetsKey() {
  return ['v1', '/v1/contextual-bandits/:id/visual-changesets', 'POST'] as const
}

export function usePostV1ContextualBanditsIdVisualChangesets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['contextual-bandits'][':id']['visual-changesets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['contextual-bandits'][':id']['visual-changesets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextualBanditsIdVisualChangesetsKey()
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
            (typeof client.v1)['contextual-bandits'][':id']['visual-changesets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['contextual-bandits'][':id']['visual-changesets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ContextualBanditQueriesIdKey(
  args: InferRequestType<(typeof client.v1)['contextual-bandit-queries'][':id']['$get']>,
) {
  return ['v1', '/v1/contextual-bandit-queries/:id', args] as const
}

export function useGetV1ContextualBanditQueriesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandit-queries'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandit-queries'][':id']['$get']>>
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
        ? getGetV1ContextualBanditQueriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandit-queries'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['contextual-bandit-queries'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextualBanditQueriesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandit-queries'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandit-queries'][':id']['$get']>>
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
        ? getGetV1ContextualBanditQueriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandit-queries'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['contextual-bandit-queries'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ContextualBanditQueriesIdKey() {
  return ['v1', '/v1/contextual-bandit-queries/:id', 'PUT'] as const
}

export function usePutV1ContextualBanditQueriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['contextual-bandit-queries'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['contextual-bandit-queries'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ContextualBanditQueriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['contextual-bandit-queries'][':id']['$put']>
        },
      ) => parseResponse(client.v1['contextual-bandit-queries'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ContextualBanditQueriesIdKey() {
  return ['v1', '/v1/contextual-bandit-queries/:id', 'DELETE'] as const
}

export function useDeleteV1ContextualBanditQueriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['contextual-bandit-queries'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['contextual-bandit-queries'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ContextualBanditQueriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['contextual-bandit-queries'][':id']['$delete']>
        },
      ) => parseResponse(client.v1['contextual-bandit-queries'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ContextualBanditQueriesKey(
  args: InferRequestType<(typeof client.v1)['contextual-bandit-queries']['$get']>,
) {
  return ['v1', '/v1/contextual-bandit-queries', args] as const
}

export function useGetV1ContextualBanditQueries<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandit-queries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandit-queries']['$get']>>
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
        ? getGetV1ContextualBanditQueriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandit-queries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['contextual-bandit-queries'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ContextualBanditQueries<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['contextual-bandit-queries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandit-queries']['$get']>>
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
        ? getGetV1ContextualBanditQueriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['contextual-bandit-queries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['contextual-bandit-queries'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ContextualBanditQueriesKey() {
  return ['v1', '/v1/contextual-bandit-queries', 'POST'] as const
}

export function usePostV1ContextualBanditQueries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['contextual-bandit-queries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['contextual-bandit-queries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ContextualBanditQueriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['contextual-bandit-queries']['$post']> },
      ) => parseResponse(client.v1['contextual-bandit-queries'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InterleavingExposureQueriesIdKey(
  args: InferRequestType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$get']>,
) {
  return ['v1', '/v1/interleaving-exposure-queries/:id', args] as const
}

export function useGetV1InterleavingExposureQueriesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$get']>>
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
        ? getGetV1InterleavingExposureQueriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['interleaving-exposure-queries'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InterleavingExposureQueriesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$get']>>
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
        ? getGetV1InterleavingExposureQueriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['interleaving-exposure-queries'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1InterleavingExposureQueriesIdKey() {
  return ['v1', '/v1/interleaving-exposure-queries/:id', 'PUT'] as const
}

export function usePutV1InterleavingExposureQueriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1InterleavingExposureQueriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$put']>
        },
      ) =>
        parseResponse(client.v1['interleaving-exposure-queries'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1InterleavingExposureQueriesIdKey() {
  return ['v1', '/v1/interleaving-exposure-queries/:id', 'DELETE'] as const
}

export function useDeleteV1InterleavingExposureQueriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['interleaving-exposure-queries'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1InterleavingExposureQueriesIdKey()
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
            (typeof client.v1)['interleaving-exposure-queries'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['interleaving-exposure-queries'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1InterleavingExposureQueriesKey(
  args: InferRequestType<(typeof client.v1)['interleaving-exposure-queries']['$get']>,
) {
  return ['v1', '/v1/interleaving-exposure-queries', args] as const
}

export function useGetV1InterleavingExposureQueries<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['interleaving-exposure-queries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['interleaving-exposure-queries']['$get']>>
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
        ? getGetV1InterleavingExposureQueriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['interleaving-exposure-queries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['interleaving-exposure-queries'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InterleavingExposureQueries<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['interleaving-exposure-queries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['interleaving-exposure-queries']['$get']>>
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
        ? getGetV1InterleavingExposureQueriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['interleaving-exposure-queries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['interleaving-exposure-queries'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InterleavingExposureQueriesKey() {
  return ['v1', '/v1/interleaving-exposure-queries', 'POST'] as const
}

export function usePostV1InterleavingExposureQueries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['interleaving-exposure-queries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['interleaving-exposure-queries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InterleavingExposureQueriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['interleaving-exposure-queries']['$post']> },
      ) => parseResponse(client.v1['interleaving-exposure-queries'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InterleavingsIdKey(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['$get']>,
) {
  return ['v1', '/v1/interleavings/:id', args] as const
}

export function useGetV1InterleavingsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['$get']>>>
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
        ? getGetV1InterleavingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.interleavings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InterleavingsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['$get']>>>
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
        ? getGetV1InterleavingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.interleavings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1InterleavingsIdKey() {
  return ['v1', '/v1/interleavings/:id', 'PUT'] as const
}

export function usePutV1InterleavingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.interleavings)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1InterleavingsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.interleavings)[':id']['$put']> },
      ) => parseResponse(client.v1.interleavings[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1InterleavingsIdKey() {
  return ['v1', '/v1/interleavings/:id', 'DELETE'] as const
}

export function useDeleteV1InterleavingsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.interleavings)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1InterleavingsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.interleavings)[':id']['$delete']> },
      ) => parseResponse(client.v1.interleavings[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InterleavingsKey(
  args: InferRequestType<typeof client.v1.interleavings.$get>,
) {
  return ['v1', '/v1/interleavings', args] as const
}

export function useGetV1Interleavings<TError = unknown>(
  args: InferRequestType<typeof client.v1.interleavings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.interleavings.$get>>>>
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
        ? getGetV1InterleavingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.interleavings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.interleavings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Interleavings<TError = unknown>(
  args: InferRequestType<typeof client.v1.interleavings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.interleavings.$get>>>>
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
        ? getGetV1InterleavingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.interleavings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.interleavings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InterleavingsKey() {
  return ['v1', '/v1/interleavings', 'POST'] as const
}

export function usePostV1Interleavings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.interleavings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.interleavings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InterleavingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.interleavings.$post> }) =>
        parseResponse(client.v1.interleavings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InterleavingsIdStartKey() {
  return ['v1', '/v1/interleavings/:id/start', 'POST'] as const
}

export function usePostV1InterleavingsIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.interleavings)[':id']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InterleavingsIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.interleavings)[':id']['start']['$post']> },
      ) => parseResponse(client.v1.interleavings[':id'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InterleavingsIdStopKey() {
  return ['v1', '/v1/interleavings/:id/stop', 'POST'] as const
}

export function usePostV1InterleavingsIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.interleavings)[':id']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InterleavingsIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.interleavings)[':id']['stop']['$post']> },
      ) => parseResponse(client.v1.interleavings[':id'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InterleavingsIdRefreshKey() {
  return ['v1', '/v1/interleavings/:id/refresh', 'POST'] as const
}

export function usePostV1InterleavingsIdRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['refresh']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.interleavings)[':id']['refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InterleavingsIdRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.interleavings)[':id']['refresh']['$post']> },
      ) => parseResponse(client.v1.interleavings[':id'].refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InterleavingsIdResultsKey(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['results']['$get']>,
) {
  return ['v1', '/v1/interleavings/:id/results', args] as const
}

export function useGetV1InterleavingsIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['results']['$get']>>
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
        ? getGetV1InterleavingsIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.interleavings[':id'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InterleavingsIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['results']['$get']>>
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
        ? getGetV1InterleavingsIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.interleavings[':id'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InterleavingsIdStatusKey(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['status']['$get']>,
) {
  return ['v1', '/v1/interleavings/:id/status', args] as const
}

export function useGetV1InterleavingsIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['status']['$get']>>
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
        ? getGetV1InterleavingsIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.interleavings[':id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InterleavingsIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['status']['$get']>>
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
        ? getGetV1InterleavingsIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.interleavings[':id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InterleavingsIdSnapshotsKey(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['snapshots']['$get']>,
) {
  return ['v1', '/v1/interleavings/:id/snapshots', args] as const
}

export function useGetV1InterleavingsIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['snapshots']['$get']>>
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
        ? getGetV1InterleavingsIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.interleavings[':id'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InterleavingsIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v1.interleavings)[':id']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['snapshots']['$get']>>
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
        ? getGetV1InterleavingsIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.interleavings)[':id']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.interleavings[':id'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InterleavingsIdSnapshotsSnapshotIdKey(
  args: InferRequestType<
    (typeof client.v1.interleavings)[':id']['snapshots'][':snapshotId']['$get']
  >,
) {
  return ['v1', '/v1/interleavings/:id/snapshots/:snapshotId', args] as const
}

export function useGetV1InterleavingsIdSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.interleavings)[':id']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.interleavings)[':id']['snapshots'][':snapshotId']['$get']
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
        ? getGetV1InterleavingsIdSnapshotsSnapshotIdKey(args)
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
                (typeof client.v1.interleavings)[':id']['snapshots'][':snapshotId']['$get']
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
          client.v1.interleavings[':id'].snapshots[':snapshotId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InterleavingsIdSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.interleavings)[':id']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.interleavings)[':id']['snapshots'][':snapshotId']['$get']
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
        ? getGetV1InterleavingsIdSnapshotsSnapshotIdKey(args)
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
                (typeof client.v1.interleavings)[':id']['snapshots'][':snapshotId']['$get']
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
          client.v1.interleavings[':id'].snapshots[':snapshotId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomFieldsKey(
  args: InferRequestType<(typeof client.v1)['custom-fields']['$get']>,
) {
  return ['v1', '/v1/custom-fields', args] as const
}

export function useGetV1CustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['custom-fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['custom-fields']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1CustomFieldsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['custom-fields']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['custom-fields'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['custom-fields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['custom-fields']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1CustomFieldsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['custom-fields']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['custom-fields'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomFieldsKey() {
  return ['v1', '/v1/custom-fields', 'POST'] as const
}

export function usePostV1CustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['custom-fields']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['custom-fields']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['custom-fields']['$post']> },
      ) => parseResponse(client.v1['custom-fields'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomFieldsIdKey(
  args: InferRequestType<(typeof client.v1)['custom-fields'][':id']['$get']>,
) {
  return ['v1', '/v1/custom-fields/:id', args] as const
}

export function useGetV1CustomFieldsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['custom-fields'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-fields'][':id']['$get']>>
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
        ? getGetV1CustomFieldsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-fields'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['custom-fields'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomFieldsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['custom-fields'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-fields'][':id']['$get']>>
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
        ? getGetV1CustomFieldsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['custom-fields'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['custom-fields'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CustomFieldsIdKey() {
  return ['v1', '/v1/custom-fields/:id', 'PUT'] as const
}

export function usePutV1CustomFieldsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['custom-fields'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['custom-fields'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CustomFieldsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['custom-fields'][':id']['$put']> },
      ) => parseResponse(client.v1['custom-fields'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CustomFieldsIdKey() {
  return ['v1', '/v1/custom-fields/:id', 'DELETE'] as const
}

export function useDeleteV1CustomFieldsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['custom-fields'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['custom-fields'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CustomFieldsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['custom-fields'][':id']['$delete']> },
      ) => parseResponse(client.v1['custom-fields'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MetricGroupsIdKey(
  args: InferRequestType<(typeof client.v1)['metric-groups'][':id']['$get']>,
) {
  return ['v1', '/v1/metric-groups/:id', args] as const
}

export function useGetV1MetricGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['metric-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['metric-groups'][':id']['$get']>>
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
        ? getGetV1MetricGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['metric-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['metric-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MetricGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['metric-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['metric-groups'][':id']['$get']>>
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
        ? getGetV1MetricGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['metric-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['metric-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1MetricGroupsIdKey() {
  return ['v1', '/v1/metric-groups/:id', 'PUT'] as const
}

export function usePutV1MetricGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['metric-groups'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['metric-groups'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1MetricGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['metric-groups'][':id']['$put']> },
      ) => parseResponse(client.v1['metric-groups'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MetricGroupsIdKey() {
  return ['v1', '/v1/metric-groups/:id', 'DELETE'] as const
}

export function useDeleteV1MetricGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['metric-groups'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['metric-groups'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MetricGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['metric-groups'][':id']['$delete']> },
      ) => parseResponse(client.v1['metric-groups'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MetricGroupsKey() {
  return ['v1', '/v1/metric-groups'] as const
}

export function useGetV1MetricGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['metric-groups']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MetricGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['metric-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['metric-groups'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MetricGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['metric-groups']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MetricGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['metric-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['metric-groups'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1MetricGroupsKey() {
  return ['v1', '/v1/metric-groups', 'POST'] as const
}

export function usePostV1MetricGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['metric-groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['metric-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MetricGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['metric-groups']['$post']> },
      ) => parseResponse(client.v1['metric-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TeamsIdKey(
  args: InferRequestType<(typeof client.v1.teams)[':id']['$get']>,
) {
  return ['v1', '/v1/teams/:id', args] as const
}

export function useGetV1TeamsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1TeamsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.teams[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TeamsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1TeamsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.teams[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1TeamsIdKey() {
  return ['v1', '/v1/teams/:id', 'PUT'] as const
}

export function usePutV1TeamsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TeamsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v1.teams)[':id']['$put']> }) =>
        parseResponse(client.v1.teams[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TeamsIdKey() {
  return ['v1', '/v1/teams/:id', 'DELETE'] as const
}

export function useDeleteV1TeamsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TeamsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.teams)[':id']['$delete']> },
      ) => parseResponse(client.v1.teams[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TeamsKey() {
  return ['v1', '/v1/teams'] as const
}

export function useGetV1Teams<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TeamsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.teams.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Teams<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TeamsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.teams.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TeamsKey() {
  return ['v1', '/v1/teams', 'POST'] as const
}

export function usePostV1Teams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.teams.$post> }) =>
        parseResponse(client.v1.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TeamsIdMembersKey() {
  return ['v1', '/v1/teams/:id/members', 'POST'] as const
}

export function usePostV1TeamsIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':id']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':id']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamsIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.teams)[':id']['members']['$post']> },
      ) => parseResponse(client.v1.teams[':id'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TeamsIdMembersKey() {
  return ['v1', '/v1/teams/:id/members', 'DELETE'] as const
}

export function useDeleteV1TeamsIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':id']['members']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':id']['members']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TeamsIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.teams)[':id']['members']['$delete']> },
      ) => parseResponse(client.v1.teams[':id'].members.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExperimentTemplatesIdKey(
  args: InferRequestType<(typeof client.v1)['experiment-templates'][':id']['$get']>,
) {
  return ['v1', '/v1/experiment-templates/:id', args] as const
}

export function useGetV1ExperimentTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['experiment-templates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['experiment-templates'][':id']['$get']>>
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
        ? getGetV1ExperimentTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['experiment-templates'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['experiment-templates'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['experiment-templates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['experiment-templates'][':id']['$get']>>
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
        ? getGetV1ExperimentTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['experiment-templates'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['experiment-templates'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ExperimentTemplatesIdKey() {
  return ['v1', '/v1/experiment-templates/:id', 'PUT'] as const
}

export function usePutV1ExperimentTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['experiment-templates'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['experiment-templates'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ExperimentTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['experiment-templates'][':id']['$put']> },
      ) => parseResponse(client.v1['experiment-templates'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ExperimentTemplatesIdKey() {
  return ['v1', '/v1/experiment-templates/:id', 'DELETE'] as const
}

export function useDeleteV1ExperimentTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['experiment-templates'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['experiment-templates'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ExperimentTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['experiment-templates'][':id']['$delete']> },
      ) => parseResponse(client.v1['experiment-templates'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExperimentTemplatesKey(
  args: InferRequestType<(typeof client.v1)['experiment-templates']['$get']>,
) {
  return ['v1', '/v1/experiment-templates', args] as const
}

export function useGetV1ExperimentTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['experiment-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['experiment-templates']['$get']>>
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
        ? getGetV1ExperimentTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['experiment-templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['experiment-templates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['experiment-templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['experiment-templates']['$get']>>
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
        ? getGetV1ExperimentTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['experiment-templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['experiment-templates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ExperimentTemplatesKey() {
  return ['v1', '/v1/experiment-templates', 'POST'] as const
}

export function usePostV1ExperimentTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['experiment-templates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['experiment-templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['experiment-templates']['$post']> },
      ) => parseResponse(client.v1['experiment-templates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExperimentTemplatesBulkImportKey() {
  return ['v1', '/v1/experiment-templates/bulk-import', 'POST'] as const
}

export function usePostV1ExperimentTemplatesBulkImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['experiment-templates']['bulk-import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['experiment-templates']['bulk-import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentTemplatesBulkImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['experiment-templates']['bulk-import']['$post']>
        },
      ) =>
        parseResponse(client.v1['experiment-templates']['bulk-import'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductAnalyticsMetricExplorationKey() {
  return ['v1', '/v1/product-analytics/metric-exploration', 'POST'] as const
}

export function usePostV1ProductAnalyticsMetricExploration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['product-analytics']['metric-exploration']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['product-analytics']['metric-exploration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductAnalyticsMetricExplorationKey()
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
            (typeof client.v1)['product-analytics']['metric-exploration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['product-analytics']['metric-exploration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductAnalyticsFactTableExplorationKey() {
  return ['v1', '/v1/product-analytics/fact-table-exploration', 'POST'] as const
}

export function usePostV1ProductAnalyticsFactTableExploration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['product-analytics']['fact-table-exploration']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['product-analytics']['fact-table-exploration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductAnalyticsFactTableExplorationKey()
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
            (typeof client.v1)['product-analytics']['fact-table-exploration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['product-analytics']['fact-table-exploration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductAnalyticsDataSourceExplorationKey() {
  return ['v1', '/v1/product-analytics/data-source-exploration', 'POST'] as const
}

export function usePostV1ProductAnalyticsDataSourceExploration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['product-analytics']['data-source-exploration']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['product-analytics']['data-source-exploration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductAnalyticsDataSourceExplorationKey()
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
            (typeof client.v1)['product-analytics']['data-source-exploration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['product-analytics']['data-source-exploration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductAnalyticsSqlExplorationKey() {
  return ['v1', '/v1/product-analytics/sql-exploration', 'POST'] as const
}

export function usePostV1ProductAnalyticsSqlExploration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['product-analytics']['sql-exploration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['product-analytics']['sql-exploration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductAnalyticsSqlExplorationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['product-analytics']['sql-exploration']['$post']>
        },
      ) =>
        parseResponse(client.v1['product-analytics']['sql-exploration'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductAnalyticsFunnelExplorationKey() {
  return ['v1', '/v1/product-analytics/funnel-exploration', 'POST'] as const
}

export function usePostV1ProductAnalyticsFunnelExploration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['product-analytics']['funnel-exploration']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['product-analytics']['funnel-exploration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductAnalyticsFunnelExplorationKey()
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
            (typeof client.v1)['product-analytics']['funnel-exploration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['product-analytics']['funnel-exploration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProductAnalyticsJourneyExplorationKey() {
  return ['v1', '/v1/product-analytics/journey-exploration', 'POST'] as const
}

export function usePostV1ProductAnalyticsJourneyExploration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['product-analytics']['journey-exploration']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['product-analytics']['journey-exploration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductAnalyticsJourneyExplorationKey()
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
            (typeof client.v1)['product-analytics']['journey-exploration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['product-analytics']['journey-exploration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductAnalyticsSearchKey(
  args: InferRequestType<(typeof client.v1)['product-analytics']['search']['$get']>,
) {
  return ['v1', '/v1/product-analytics/search', args] as const
}

export function useGetV1ProductAnalyticsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['product-analytics']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['product-analytics']['search']['$get']>>
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
        ? getGetV1ProductAnalyticsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['product-analytics']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['product-analytics'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductAnalyticsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['product-analytics']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['product-analytics']['search']['$get']>>
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
        ? getGetV1ProductAnalyticsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['product-analytics']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['product-analytics'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProductAnalyticsColumnsKey(
  args: InferRequestType<(typeof client.v1)['product-analytics']['columns']['$get']>,
) {
  return ['v1', '/v1/product-analytics/columns', args] as const
}

export function useGetV1ProductAnalyticsColumns<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['product-analytics']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['product-analytics']['columns']['$get']>>
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
        ? getGetV1ProductAnalyticsColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['product-analytics']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['product-analytics'].columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductAnalyticsColumns<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['product-analytics']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['product-analytics']['columns']['$get']>>
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
        ? getGetV1ProductAnalyticsColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['product-analytics']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['product-analytics'].columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductAnalyticsColumnValuesKey() {
  return ['v1', '/v1/product-analytics/column-values', 'POST'] as const
}

export function usePostV1ProductAnalyticsColumnValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['product-analytics']['column-values']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['product-analytics']['column-values']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductAnalyticsColumnValuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['product-analytics']['column-values']['$post']>
        },
      ) => parseResponse(client.v1['product-analytics']['column-values'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductAnalyticsExplorationsIdKey(
  args: InferRequestType<(typeof client.v1)['product-analytics']['explorations'][':id']['$get']>,
) {
  return ['v1', '/v1/product-analytics/explorations/:id', args] as const
}

export function useGetV1ProductAnalyticsExplorationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['product-analytics']['explorations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['product-analytics']['explorations'][':id']['$get']>
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
        ? getGetV1ProductAnalyticsExplorationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['product-analytics']['explorations'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['product-analytics'].explorations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductAnalyticsExplorationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['product-analytics']['explorations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['product-analytics']['explorations'][':id']['$get']>
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
        ? getGetV1ProductAnalyticsExplorationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['product-analytics']['explorations'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['product-analytics'].explorations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RampScheduleTemplatesIdKey(
  args: InferRequestType<(typeof client.v1)['ramp-schedule-templates'][':id']['$get']>,
) {
  return ['v1', '/v1/ramp-schedule-templates/:id', args] as const
}

export function useGetV1RampScheduleTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['ramp-schedule-templates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedule-templates'][':id']['$get']>>
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
        ? getGetV1RampScheduleTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedule-templates'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['ramp-schedule-templates'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RampScheduleTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['ramp-schedule-templates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedule-templates'][':id']['$get']>>
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
        ? getGetV1RampScheduleTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedule-templates'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['ramp-schedule-templates'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1RampScheduleTemplatesIdKey() {
  return ['v1', '/v1/ramp-schedule-templates/:id', 'PUT'] as const
}

export function usePutV1RampScheduleTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ramp-schedule-templates'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedule-templates'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RampScheduleTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['ramp-schedule-templates'][':id']['$put']> },
      ) => parseResponse(client.v1['ramp-schedule-templates'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1RampScheduleTemplatesIdKey() {
  return ['v1', '/v1/ramp-schedule-templates/:id', 'DELETE'] as const
}

export function useDeleteV1RampScheduleTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ramp-schedule-templates'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedule-templates'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RampScheduleTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['ramp-schedule-templates'][':id']['$delete']>
        },
      ) => parseResponse(client.v1['ramp-schedule-templates'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RampScheduleTemplatesKey() {
  return ['v1', '/v1/ramp-schedule-templates'] as const
}

export function useGetV1RampScheduleTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ramp-schedule-templates']['$get']>>
        >
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
        ? getGetV1RampScheduleTemplatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedule-templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['ramp-schedule-templates'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RampScheduleTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ramp-schedule-templates']['$get']>>
        >
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
        ? getGetV1RampScheduleTemplatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedule-templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['ramp-schedule-templates'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RampScheduleTemplatesKey() {
  return ['v1', '/v1/ramp-schedule-templates', 'POST'] as const
}

export function usePostV1RampScheduleTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ramp-schedule-templates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedule-templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RampScheduleTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['ramp-schedule-templates']['$post']> },
      ) => parseResponse(client.v1['ramp-schedule-templates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RampSchedulesIdKey(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['$get']>,
) {
  return ['v1', '/v1/ramp-schedules/:id', args] as const
}

export function useGetV1RampSchedulesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedules'][':id']['$get']>>
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
        ? getGetV1RampSchedulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedules'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['ramp-schedules'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RampSchedulesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedules'][':id']['$get']>>
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
        ? getGetV1RampSchedulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ramp-schedules'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['ramp-schedules'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1RampSchedulesIdKey() {
  return ['v1', '/v1/ramp-schedules/:id', 'PUT'] as const
}

export function usePutV1RampSchedulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ramp-schedules'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RampSchedulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['$put']> },
      ) => parseResponse(client.v1['ramp-schedules'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1RampSchedulesIdKey() {
  return ['v1', '/v1/ramp-schedules/:id', 'DELETE'] as const
}

export function useDeleteV1RampSchedulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ramp-schedules'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RampSchedulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['ramp-schedules'][':id']['$delete']> },
      ) => parseResponse(client.v1['ramp-schedules'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LearningsIdKey(
  args: InferRequestType<(typeof client.v1.learnings)[':id']['$get']>,
) {
  return ['v1', '/v1/learnings/:id', args] as const
}

export function useGetV1LearningsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.learnings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.learnings)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1LearningsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.learnings)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.learnings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LearningsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.learnings)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.learnings)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1LearningsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.learnings)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.learnings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1LearningsIdKey() {
  return ['v1', '/v1/learnings/:id', 'PUT'] as const
}

export function usePutV1LearningsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.learnings)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.learnings)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1LearningsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.learnings)[':id']['$put']> },
      ) => parseResponse(client.v1.learnings[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1LearningsIdKey() {
  return ['v1', '/v1/learnings/:id', 'DELETE'] as const
}

export function useDeleteV1LearningsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.learnings)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.learnings)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1LearningsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.learnings)[':id']['$delete']> },
      ) => parseResponse(client.v1.learnings[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LearningsKey(args: InferRequestType<typeof client.v1.learnings.$get>) {
  return ['v1', '/v1/learnings', args] as const
}

export function useGetV1Learnings<TError = unknown>(
  args: InferRequestType<typeof client.v1.learnings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.learnings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LearningsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.learnings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.learnings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Learnings<TError = unknown>(
  args: InferRequestType<typeof client.v1.learnings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.learnings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LearningsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.learnings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.learnings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1LearningsKey() {
  return ['v1', '/v1/learnings', 'POST'] as const
}

export function usePostV1Learnings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.learnings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.learnings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LearningsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.learnings.$post> }) =>
        parseResponse(client.v1.learnings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1LearningsSearchKey() {
  return ['v1', '/v1/learnings/search', 'POST'] as const
}

export function usePostV1LearningsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.learnings.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.learnings.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LearningsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.learnings.search.$post> }) =>
        parseResponse(client.v1.learnings.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1HoldoutsIdKey(
  args: InferRequestType<(typeof client.v1.holdouts)[':id']['$get']>,
) {
  return ['v1', '/v1/holdouts/:id', args] as const
}

export function useGetV1HoldoutsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.holdouts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holdouts)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1HoldoutsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holdouts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.holdouts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1HoldoutsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.holdouts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holdouts)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1HoldoutsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holdouts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.holdouts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1HoldoutsIdKey() {
  return ['v1', '/v1/holdouts/:id', 'PUT'] as const
}

export function usePutV1HoldoutsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holdouts)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.holdouts)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1HoldoutsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.holdouts)[':id']['$put']> },
      ) => parseResponse(client.v1.holdouts[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1HoldoutsKey(args: InferRequestType<typeof client.v1.holdouts.$get>) {
  return ['v1', '/v1/holdouts', args] as const
}

export function useGetV1Holdouts<TError = unknown>(
  args: InferRequestType<typeof client.v1.holdouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.holdouts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HoldoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.holdouts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.holdouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Holdouts<TError = unknown>(
  args: InferRequestType<typeof client.v1.holdouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.holdouts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1HoldoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.holdouts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.holdouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1HoldoutsKey() {
  return ['v1', '/v1/holdouts', 'POST'] as const
}

export function usePostV1Holdouts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.holdouts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.holdouts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HoldoutsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.holdouts.$post> }) =>
        parseResponse(client.v1.holdouts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HoldoutsIdStartKey() {
  return ['v1', '/v1/holdouts/:id/start', 'POST'] as const
}

export function usePostV1HoldoutsIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.holdouts)[':id']['start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.holdouts)[':id']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HoldoutsIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.holdouts)[':id']['start']['$post']> },
      ) => parseResponse(client.v1.holdouts[':id'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HoldoutsIdStartAnalysisKey() {
  return ['v1', '/v1/holdouts/:id/start-analysis', 'POST'] as const
}

export function usePostV1HoldoutsIdStartAnalysis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.holdouts)[':id']['start-analysis']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.holdouts)[':id']['start-analysis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HoldoutsIdStartAnalysisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.holdouts)[':id']['start-analysis']['$post']> },
      ) => parseResponse(client.v1.holdouts[':id']['start-analysis'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HoldoutsIdStopKey() {
  return ['v1', '/v1/holdouts/:id/stop', 'POST'] as const
}

export function usePostV1HoldoutsIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.holdouts)[':id']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.holdouts)[':id']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HoldoutsIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.holdouts)[':id']['stop']['$post']> },
      ) => parseResponse(client.v1.holdouts[':id'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AutoRunsKey() {
  return ['v1', '/v1/auto-runs'] as const
}

export function useGetV1AutoRuns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['auto-runs']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AutoRunsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['auto-runs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['auto-runs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AutoRuns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['auto-runs']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AutoRunsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['auto-runs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['auto-runs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AutoRunsKey() {
  return ['v1', '/v1/auto-runs', 'POST'] as const
}

export function usePostV1AutoRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['auto-runs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['auto-runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AutoRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['auto-runs']['$post']> },
      ) => parseResponse(client.v1['auto-runs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AutoRunsIdKey(
  args: InferRequestType<(typeof client.v1)['auto-runs'][':id']['$get']>,
) {
  return ['v1', '/v1/auto-runs/:id', args] as const
}

export function useGetV1AutoRunsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['auto-runs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['auto-runs'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AutoRunsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['auto-runs'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['auto-runs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AutoRunsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['auto-runs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['auto-runs'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AutoRunsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['auto-runs'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['auto-runs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AutoRunsIdKey() {
  return ['v1', '/v1/auto-runs/:id', 'PUT'] as const
}

export function usePutV1AutoRunsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['auto-runs'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['auto-runs'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AutoRunsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['auto-runs'][':id']['$put']> },
      ) => parseResponse(client.v1['auto-runs'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AutoRunsIdArtifactsKey() {
  return ['v1', '/v1/auto-runs/:id/artifacts', 'POST'] as const
}

export function usePostV1AutoRunsIdArtifacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['auto-runs'][':id']['artifacts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['auto-runs'][':id']['artifacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AutoRunsIdArtifactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['auto-runs'][':id']['artifacts']['$post']> },
      ) => parseResponse(client.v1['auto-runs'][':id'].artifacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PopulationsKey(args: InferRequestType<typeof client.v1.populations.$get>) {
  return ['v1', '/v1/populations', args] as const
}

export function useGetV1Populations<TError = unknown>(
  args: InferRequestType<typeof client.v1.populations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.populations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PopulationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.populations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.populations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Populations<TError = unknown>(
  args: InferRequestType<typeof client.v1.populations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.populations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PopulationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.populations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.populations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PopulationsKey() {
  return ['v1', '/v1/populations', 'POST'] as const
}

export function usePostV1Populations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.populations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.populations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PopulationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.populations.$post> }) =>
        parseResponse(client.v1.populations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PopulationsIdKey(
  args: InferRequestType<(typeof client.v1.populations)[':id']['$get']>,
) {
  return ['v1', '/v1/populations/:id', args] as const
}

export function useGetV1PopulationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.populations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.populations)[':id']['$get']>>>
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
        ? getGetV1PopulationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.populations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.populations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PopulationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.populations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.populations)[':id']['$get']>>>
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
        ? getGetV1PopulationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.populations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.populations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PopulationsIdKey() {
  return ['v1', '/v1/populations/:id', 'PUT'] as const
}

export function usePutV1PopulationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.populations)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.populations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PopulationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.populations)[':id']['$put']> },
      ) => parseResponse(client.v1.populations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PopulationsIdKey() {
  return ['v1', '/v1/populations/:id', 'DELETE'] as const
}

export function useDeleteV1PopulationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.populations)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.populations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PopulationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.populations)[':id']['$delete']> },
      ) => parseResponse(client.v1.populations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebhookSecretsIdKey(
  args: InferRequestType<(typeof client.v1)['webhook-secrets'][':id']['$get']>,
) {
  return ['v1', '/v1/webhook-secrets/:id', args] as const
}

export function useGetV1WebhookSecretsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['webhook-secrets'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['webhook-secrets'][':id']['$get']>>
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
        ? getGetV1WebhookSecretsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['webhook-secrets'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['webhook-secrets'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WebhookSecretsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['webhook-secrets'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['webhook-secrets'][':id']['$get']>>
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
        ? getGetV1WebhookSecretsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['webhook-secrets'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['webhook-secrets'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1WebhookSecretsIdKey() {
  return ['v1', '/v1/webhook-secrets/:id', 'DELETE'] as const
}

export function useDeleteV1WebhookSecretsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['webhook-secrets'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['webhook-secrets'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1WebhookSecretsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['webhook-secrets'][':id']['$delete']> },
      ) => parseResponse(client.v1['webhook-secrets'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebhookSecretsKey() {
  return ['v1', '/v1/webhook-secrets'] as const
}

export function useGetV1WebhookSecrets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['webhook-secrets']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhookSecretsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['webhook-secrets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['webhook-secrets'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WebhookSecrets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['webhook-secrets']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhookSecretsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['webhook-secrets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['webhook-secrets'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SdkConnectionsIdWebhooksKey(
  args: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['webhooks']['$get']>,
) {
  return ['v1', '/v1/sdk-connections/:id/webhooks', args] as const
}

export function useGetV1SdkConnectionsIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections'][':id']['webhooks']['$get']>>
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
        ? getGetV1SdkConnectionsIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections'][':id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['sdk-connections'][':id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SdkConnectionsIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections'][':id']['webhooks']['$get']>>
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
        ? getGetV1SdkConnectionsIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sdk-connections'][':id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['sdk-connections'][':id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SdkConnectionsIdWebhooksKey() {
  return ['v1', '/v1/sdk-connections/:id/webhooks', 'POST'] as const
}

export function usePostV1SdkConnectionsIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sdk-connections'][':id']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sdk-connections'][':id']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkConnectionsIdWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['sdk-connections'][':id']['webhooks']['$post']>
        },
      ) => parseResponse(client.v1['sdk-connections'][':id'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1SdkWebhooksIdKey() {
  return ['v1', '/v1/sdk-webhooks/:id', 'PUT'] as const
}

export function usePutV1SdkWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sdk-webhooks'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sdk-webhooks'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SdkWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['sdk-webhooks'][':id']['$put']> },
      ) => parseResponse(client.v1['sdk-webhooks'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SdkWebhooksIdKey() {
  return ['v1', '/v1/sdk-webhooks/:id', 'DELETE'] as const
}

export function useDeleteV1SdkWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sdk-webhooks'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sdk-webhooks'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SdkWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['sdk-webhooks'][':id']['$delete']> },
      ) => parseResponse(client.v1['sdk-webhooks'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SdkWebhooksIdTestKey() {
  return ['v1', '/v1/sdk-webhooks/:id/test', 'POST'] as const
}

export function usePostV1SdkWebhooksIdTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sdk-webhooks'][':id']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sdk-webhooks'][':id']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SdkWebhooksIdTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['sdk-webhooks'][':id']['test']['$post']> },
      ) => parseResponse(client.v1['sdk-webhooks'][':id'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

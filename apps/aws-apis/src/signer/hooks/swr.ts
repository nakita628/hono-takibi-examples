import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSigningJobsKey() {
  return ['signing-jobs'] as const
}

export function getSigningPlatformsKey() {
  return ['signing-platforms'] as const
}

export function getSigningProfilesKey() {
  return ['signing-profiles'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getGetSigningProfilesProfileNamePermissionsKey(
  args: InferRequestType<
    (typeof client)['signing-profiles'][':profileName']['permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['signing-profiles', '/signing-profiles/:profileName/permissions', keyArgs] as const
}

export function useGetSigningProfilesProfileNamePermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['signing-profiles'][':profileName']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['signing-profiles'][':profileName']['permissions']['$get']>
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
        ? getGetSigningProfilesProfileNamePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['signing-profiles'][':profileName']['permissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['signing-profiles'][':profileName'].permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigningProfilesProfileNamePermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['signing-profiles'][':profileName']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['signing-profiles'][':profileName']['permissions']['$get']>
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
        ? getGetSigningProfilesProfileNamePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['signing-profiles'][':profileName']['permissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['signing-profiles'][':profileName'].permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSigningProfilesProfileNamePermissionsKey() {
  return ['signing-profiles', '/signing-profiles/:profileName/permissions', 'POST'] as const
}

export function usePostSigningProfilesProfileNamePermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['signing-profiles'][':profileName']['permissions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['permissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSigningProfilesProfileNamePermissionsKey()
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
            (typeof client)['signing-profiles'][':profileName']['permissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['signing-profiles'][':profileName'].permissions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSigningProfilesProfileNameKey(
  args: InferRequestType<(typeof client)['signing-profiles'][':profileName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['signing-profiles', '/signing-profiles/:profileName', keyArgs] as const
}

export function useGetSigningProfilesProfileName<TError = unknown>(
  args: InferRequestType<(typeof client)['signing-profiles'][':profileName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSigningProfilesProfileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['signing-profiles'][':profileName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigningProfilesProfileName<TError = unknown>(
  args: InferRequestType<(typeof client)['signing-profiles'][':profileName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSigningProfilesProfileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['signing-profiles'][':profileName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSigningProfilesProfileNameKey() {
  return ['signing-profiles', '/signing-profiles/:profileName', 'PUT'] as const
}

export function usePutSigningProfilesProfileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSigningProfilesProfileNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['signing-profiles'][':profileName']['$put']> },
      ) => parseResponse(client['signing-profiles'][':profileName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSigningProfilesProfileNameKey() {
  return ['signing-profiles', '/signing-profiles/:profileName', 'DELETE'] as const
}

export function useDeleteSigningProfilesProfileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSigningProfilesProfileNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['signing-profiles'][':profileName']['$delete']>
        },
      ) => parseResponse(client['signing-profiles'][':profileName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSigningJobsJobIdKey(
  args: InferRequestType<(typeof client)['signing-jobs'][':jobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['signing-jobs', '/signing-jobs/:jobId', keyArgs] as const
}

export function useGetSigningJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client)['signing-jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['signing-jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSigningJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['signing-jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['signing-jobs'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigningJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client)['signing-jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['signing-jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSigningJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['signing-jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['signing-jobs'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSigningPlatformsPlatformIdKey(
  args: InferRequestType<(typeof client)['signing-platforms'][':platformId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['signing-platforms', '/signing-platforms/:platformId', keyArgs] as const
}

export function useGetSigningPlatformsPlatformId<TError = unknown>(
  args: InferRequestType<(typeof client)['signing-platforms'][':platformId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['signing-platforms'][':platformId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSigningPlatformsPlatformIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['signing-platforms'][':platformId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['signing-platforms'][':platformId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigningPlatformsPlatformId<TError = unknown>(
  args: InferRequestType<(typeof client)['signing-platforms'][':platformId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['signing-platforms'][':platformId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSigningPlatformsPlatformIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['signing-platforms'][':platformId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['signing-platforms'][':platformId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSigningJobsKey(
  args: InferRequestType<(typeof client)['signing-jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['signing-jobs', '/signing-jobs', keyArgs] as const
}

export function useGetSigningJobs<TError = unknown>(
  args: InferRequestType<(typeof client)['signing-jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-jobs']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSigningJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['signing-jobs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigningJobs<TError = unknown>(
  args: InferRequestType<(typeof client)['signing-jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-jobs']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSigningJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['signing-jobs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSigningJobsKey() {
  return ['signing-jobs', '/signing-jobs', 'POST'] as const
}

export function usePostSigningJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-jobs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['signing-jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSigningJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['signing-jobs']['$post']> },
      ) => parseResponse(client['signing-jobs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSigningPlatformsKey(
  args: InferRequestType<(typeof client)['signing-platforms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['signing-platforms', '/signing-platforms', keyArgs] as const
}

export function useGetSigningPlatforms<TError = unknown>(
  args: InferRequestType<(typeof client)['signing-platforms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-platforms']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSigningPlatformsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-platforms']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['signing-platforms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigningPlatforms<TError = unknown>(
  args: InferRequestType<(typeof client)['signing-platforms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-platforms']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSigningPlatformsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-platforms']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['signing-platforms'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSigningProfilesKey(
  args: InferRequestType<(typeof client)['signing-profiles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['signing-profiles', '/signing-profiles', keyArgs] as const
}

export function useGetSigningProfiles<TError = unknown>(
  args: InferRequestType<(typeof client)['signing-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-profiles']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSigningProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-profiles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['signing-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigningProfiles<TError = unknown>(
  args: InferRequestType<(typeof client)['signing-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-profiles']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSigningProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-profiles']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['signing-profiles'].$get(args, clientOptions)),
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

export function getDeleteSigningProfilesProfileNamePermissionsStatementIdRevisionIdKey() {
  return [
    'signing-profiles',
    '/signing-profiles/:profileName/permissions/:statementId#revisionId',
    'DELETE',
  ] as const
}

export function useDeleteSigningProfilesProfileNamePermissionsStatementIdRevisionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['signing-profiles'][':profileName']['permissions'][':statementId#revisionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['signing-profiles'][':profileName']['permissions'][':statementId#revisionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteSigningProfilesProfileNamePermissionsStatementIdRevisionIdKey()
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
            (typeof client)['signing-profiles'][':profileName']['permissions'][':statementId#revisionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['signing-profiles'][':profileName'].permissions[':statementId#revisionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSigningJobsJobIdRevokeKey() {
  return ['signing-jobs', '/signing-jobs/:jobId/revoke', 'PUT'] as const
}

export function usePutSigningJobsJobIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['signing-jobs'][':jobId']['revoke']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['signing-jobs'][':jobId']['revoke']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSigningJobsJobIdRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['signing-jobs'][':jobId']['revoke']['$put']> },
      ) => parseResponse(client['signing-jobs'][':jobId'].revoke.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSigningProfilesProfileNameRevokeKey() {
  return ['signing-profiles', '/signing-profiles/:profileName/revoke', 'PUT'] as const
}

export function usePutSigningProfilesProfileNameRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['signing-profiles'][':profileName']['revoke']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['signing-profiles'][':profileName']['revoke']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSigningProfilesProfileNameRevokeKey()
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
            (typeof client)['signing-profiles'][':profileName']['revoke']['$put']
          >
        },
      ) =>
        parseResponse(client['signing-profiles'][':profileName'].revoke.$put(arg, clientOptions)),
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

import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCourseMappingsKey() {
  return ['course-mappings'] as const
}

export function getCoursesKey() {
  return ['courses'] as const
}

export function getOfferingsKey() {
  return ['offerings'] as const
}

export function getOrgKey() {
  return ['org'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getGetKey() {
  return ['', '/'] as const
}

export function useGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCourseMappingsKey() {
  return ['course-mappings', '/course-mappings'] as const
}

export function useGetCourseMappings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCourseMappingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['course-mappings'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCourseMappings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCourseMappingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['course-mappings'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCourseMappingsExternalcourseExternalCourseIdKey(
  args: InferRequestType<
    (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
  >,
) {
  return ['course-mappings', '/course-mappings/externalcourse/:externalCourseId', args] as const
}

export function useGetCourseMappingsExternalcourseExternalCourseId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
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
        ? getGetCourseMappingsExternalcourseExternalCourseIdKey(args)
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
                (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
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
          client['course-mappings'].externalcourse[':externalCourseId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCourseMappingsExternalcourseExternalCourseId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
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
        ? getGetCourseMappingsExternalcourseExternalCourseIdKey(args)
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
                (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
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
          client['course-mappings'].externalcourse[':externalCourseId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCourseMappingsOfferingIdKey(
  args: InferRequestType<(typeof client)['course-mappings'][':offeringId']['$get']>,
) {
  return ['course-mappings', '/course-mappings/:offeringId', args] as const
}

export function useGetCourseMappingsOfferingId<TError = unknown>(
  args: InferRequestType<(typeof client)['course-mappings'][':offeringId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['course-mappings'][':offeringId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCourseMappingsOfferingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['course-mappings'][':offeringId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['course-mappings'][':offeringId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCourseMappingsOfferingId<TError = unknown>(
  args: InferRequestType<(typeof client)['course-mappings'][':offeringId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['course-mappings'][':offeringId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCourseMappingsOfferingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['course-mappings'][':offeringId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['course-mappings'][':offeringId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCourseMappingsOfferingIdExternalCourseIdKey() {
  return ['course-mappings', '/course-mappings/:offeringId/:externalCourseId', 'PUT'] as const
}

export function usePutCourseMappingsOfferingIdExternalCourseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCourseMappingsOfferingIdExternalCourseIdKey()
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
            (typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['course-mappings'][':offeringId'][':externalCourseId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCourseMappingsOfferingIdExternalCourseIdKey() {
  return ['course-mappings', '/course-mappings/:offeringId/:externalCourseId', 'DELETE'] as const
}

export function useDeleteCourseMappingsOfferingIdExternalCourseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCourseMappingsOfferingIdExternalCourseIdKey()
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
            (typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['course-mappings'][':offeringId'][':externalCourseId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCoursesKey() {
  return ['courses', '/courses'] as const
}

export function useGetCourses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCoursesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.courses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCourses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCoursesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.courses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCoursesContentIdKey(
  args: InferRequestType<(typeof client.courses)[':contentId']['$get']>,
) {
  return ['courses', '/courses/:contentId', args] as const
}

export function useGetCoursesContentId<TError = unknown>(
  args: InferRequestType<(typeof client.courses)[':contentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCoursesContentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.courses[':contentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCoursesContentId<TError = unknown>(
  args: InferRequestType<(typeof client.courses)[':contentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCoursesContentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.courses[':contentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCoursesContentIdActivationsKey(
  args: InferRequestType<(typeof client.courses)[':contentId']['activations']['$get']>,
) {
  return ['courses', '/courses/:contentId/activations', args] as const
}

export function useGetCoursesContentIdActivations<TError = unknown>(
  args: InferRequestType<(typeof client.courses)[':contentId']['activations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.courses)[':contentId']['activations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCoursesContentIdActivationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.courses)[':contentId']['activations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.courses[':contentId'].activations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCoursesContentIdActivations<TError = unknown>(
  args: InferRequestType<(typeof client.courses)[':contentId']['activations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.courses)[':contentId']['activations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCoursesContentIdActivationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.courses)[':contentId']['activations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.courses[':contentId'].activations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCoursesContentIdMetadataCategoryKey() {
  return ['courses', '/courses/:contentId/metadata/category', 'PUT'] as const
}

export function usePutCoursesContentIdMetadataCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.courses)[':contentId']['metadata']['category']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.courses)[':contentId']['metadata']['category']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCoursesContentIdMetadataCategoryKey()
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
            (typeof client.courses)[':contentId']['metadata']['category']['$put']
          >
        },
      ) => parseResponse(client.courses[':contentId'].metadata.category.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCoursesContentIdMetadataLevelKey() {
  return ['courses', '/courses/:contentId/metadata/level', 'PUT'] as const
}

export function usePutCoursesContentIdMetadataLevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.courses)[':contentId']['metadata']['level']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.courses)[':contentId']['metadata']['level']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCoursesContentIdMetadataLevelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.courses)[':contentId']['metadata']['level']['$put']>
        },
      ) => parseResponse(client.courses[':contentId'].metadata.level.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCoursesContentIdMetadataTagsKey() {
  return ['courses', '/courses/:contentId/metadata/tags', 'PUT'] as const
}

export function usePutCoursesContentIdMetadataTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.courses)[':contentId']['metadata']['tags']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.courses)[':contentId']['metadata']['tags']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCoursesContentIdMetadataTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.courses)[':contentId']['metadata']['tags']['$put']>
        },
      ) => parseResponse(client.courses[':contentId'].metadata.tags.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCoursesContentIdMetadataTopicKey() {
  return ['courses', '/courses/:contentId/metadata/topic', 'PUT'] as const
}

export function usePutCoursesContentIdMetadataTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.courses)[':contentId']['metadata']['topic']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.courses)[':contentId']['metadata']['topic']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCoursesContentIdMetadataTopicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.courses)[':contentId']['metadata']['topic']['$put']>
        },
      ) => parseResponse(client.courses[':contentId'].metadata.topic.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCoursesContentIdPermissionsKey(
  args: InferRequestType<(typeof client.courses)[':contentId']['permissions']['$get']>,
) {
  return ['courses', '/courses/:contentId/permissions', args] as const
}

export function useGetCoursesContentIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.courses)[':contentId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.courses)[':contentId']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCoursesContentIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.courses)[':contentId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.courses[':contentId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCoursesContentIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.courses)[':contentId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.courses)[':contentId']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCoursesContentIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.courses)[':contentId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.courses[':contentId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCoursesRootContentIdPermissionsUserEmailKey() {
  return ['courses', '/courses/:rootContentId/permissions/:userEmail', 'POST'] as const
}

export function usePostCoursesRootContentIdPermissionsUserEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.courses)[':rootContentId']['permissions'][':userEmail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.courses)[':rootContentId']['permissions'][':userEmail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCoursesRootContentIdPermissionsUserEmailKey()
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
            (typeof client.courses)[':rootContentId']['permissions'][':userEmail']['$post']
          >
        },
      ) =>
        parseResponse(
          client.courses[':rootContentId'].permissions[':userEmail'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOfferingsKey() {
  return ['offerings', '/offerings'] as const
}

export function useGetOfferings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOfferingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOfferingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOfferingsKey() {
  return ['offerings', '/offerings', 'POST'] as const
}

export function usePostOfferings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.offerings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfferingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.offerings.$post> }) =>
        parseResponse(client.offerings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOfferingsCurrentKey() {
  return ['offerings', '/offerings/current'] as const
}

export function useGetOfferingsCurrent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOfferingsCurrentKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings.current.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsCurrent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOfferingsCurrentKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings.current.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsFutureKey() {
  return ['offerings', '/offerings/future'] as const
}

export function useGetOfferingsFuture<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOfferingsFutureKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings.future.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsFuture<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOfferingsFutureKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings.future.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsInfoTextPatternKey(
  args: InferRequestType<(typeof client.offerings.info)[':textPattern']['$get']>,
) {
  return ['offerings', '/offerings/info/:textPattern', args] as const
}

export function useGetOfferingsInfoTextPattern<TError = unknown>(
  args: InferRequestType<(typeof client.offerings.info)[':textPattern']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings.info)[':textPattern']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsInfoTextPatternKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings.info)[':textPattern']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings.info[':textPattern'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsInfoTextPattern<TError = unknown>(
  args: InferRequestType<(typeof client.offerings.info)[':textPattern']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings.info)[':textPattern']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsInfoTextPatternKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings.info)[':textPattern']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings.info[':textPattern'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsPastKey() {
  return ['offerings', '/offerings/past'] as const
}

export function useGetOfferingsPast<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOfferingsPastKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings.past.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsPast<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOfferingsPastKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings.past.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsSummaryKey(
  args: InferRequestType<typeof client.offerings.summary.$get>,
) {
  return ['offerings', '/offerings/summary', args] as const
}

export function useGetOfferingsSummary<TError = unknown>(
  args: InferRequestType<typeof client.offerings.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsSummary<TError = unknown>(
  args: InferRequestType<typeof client.offerings.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId', args] as const
}

export function useGetOfferingsOfferingId<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsOfferingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings[':offeringId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingId<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsOfferingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings[':offeringId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchOfferingsOfferingIdKey() {
  return ['offerings', '/offerings/:offeringId', 'PATCH'] as const
}

export function usePatchOfferingsOfferingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.offerings)[':offeringId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOfferingsOfferingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.offerings)[':offeringId']['$patch']> },
      ) => parseResponse(client.offerings[':offeringId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdActivitiesOpenresponseKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/activities/openresponse', args] as const
}

export function useGetOfferingsOfferingIdActivitiesOpenresponse<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']
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
        ? getGetOfferingsOfferingIdActivitiesOpenresponseKey(args)
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
                (typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']
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
          client.offerings[':offeringId'].activities.openresponse.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdActivitiesOpenresponse<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']
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
        ? getGetOfferingsOfferingIdActivitiesOpenresponseKey(args)
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
                (typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']
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
          client.offerings[':offeringId'].activities.openresponse.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsActivitiesResponsesKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/activities/responses', args] as const
}

export function useGetOfferingsOfferingIdAnalyticsActivitiesResponses<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsActivitiesResponsesKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
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
          client.offerings[':offeringId'].analytics.activities.responses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsActivitiesResponses<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsActivitiesResponsesKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
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
          client.offerings[':offeringId'].analytics.activities.responses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/analytics/channels/:channelId/comments',
    args,
  ] as const
}

export function useGetOfferingsOfferingIdAnalyticsChannelsChannelIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
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
          client.offerings[':offeringId'].analytics.channels[':channelId'].comments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsChannelsChannelIdComments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
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
          client.offerings[':offeringId'].analytics.channels[':channelId'].comments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/channels/:channelId/posts', args] as const
}

export function useGetOfferingsOfferingIdAnalyticsChannelsChannelIdPosts<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
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
          client.offerings[':offeringId'].analytics.channels[':channelId'].posts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsChannelsChannelIdPosts<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
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
          client.offerings[':offeringId'].analytics.channels[':channelId'].posts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/analytics/channels/:channelId/replies',
    args,
  ] as const
}

export function useGetOfferingsOfferingIdAnalyticsChannelsChannelIdReplies<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
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
          client.offerings[':offeringId'].analytics.channels[':channelId'].replies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsChannelsChannelIdReplies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
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
          client.offerings[':offeringId'].analytics.channels[':channelId'].replies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsLearnersProgressKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/learners-progress', args] as const
}

export function useGetOfferingsOfferingIdAnalyticsLearnersProgress<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsLearnersProgressKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
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
          client.offerings[':offeringId'].analytics['learners-progress'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsLearnersProgress<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsLearnersProgressKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
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
          client.offerings[':offeringId'].analytics['learners-progress'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsMarksAssignmentsKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/marks/assignments', args] as const
}

export function useGetOfferingsOfferingIdAnalyticsMarksAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsMarksAssignmentsKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
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
          client.offerings[':offeringId'].analytics.marks.assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsMarksAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsMarksAssignmentsKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
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
          client.offerings[':offeringId'].analytics.marks.assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsMarksQuizzesKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/marks/quizzes', args] as const
}

export function useGetOfferingsOfferingIdAnalyticsMarksQuizzes<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsMarksQuizzesKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
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
          client.offerings[':offeringId'].analytics.marks.quizzes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsMarksQuizzes<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsMarksQuizzesKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
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
          client.offerings[':offeringId'].analytics.marks.quizzes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsPulsesKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId/analytics/pulses', args] as const
}

export function useGetOfferingsOfferingIdAnalyticsPulses<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>
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
        ? getGetOfferingsOfferingIdAnalyticsPulsesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.offerings[':offeringId'].analytics.pulses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsPulses<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>
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
        ? getGetOfferingsOfferingIdAnalyticsPulsesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.offerings[':offeringId'].analytics.pulses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsPulsesResponsesKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/pulses/responses', args] as const
}

export function useGetOfferingsOfferingIdAnalyticsPulsesResponses<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsPulsesResponsesKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
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
          client.offerings[':offeringId'].analytics.pulses.responses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsPulsesResponses<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsPulsesResponsesKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
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
          client.offerings[':offeringId'].analytics.pulses.responses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/pulses/:pulseId/responses', args] as const
}

export function useGetOfferingsOfferingIdAnalyticsPulsesPulseIdResponses<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
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
          client.offerings[':offeringId'].analytics.pulses[':pulseId'].responses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsPulsesPulseIdResponses<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
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
          client.offerings[':offeringId'].analytics.pulses[':pulseId'].responses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsSocialNotesKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/social-notes', args] as const
}

export function useGetOfferingsOfferingIdAnalyticsSocialNotes<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsSocialNotesKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']
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
          client.offerings[':offeringId'].analytics['social-notes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsSocialNotes<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsSocialNotesKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']
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
          client.offerings[':offeringId'].analytics['social-notes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/submissions/assignments', args] as const
}

export function useGetOfferingsOfferingIdAnalyticsSubmissionsAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
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
          client.offerings[':offeringId'].analytics.submissions.assignments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsSubmissionsAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
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
          client.offerings[':offeringId'].analytics.submissions.assignments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/analytics/submissions/open-response/:assessmentId',
    args,
  ] as const
}

export function useGetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
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
          client.offerings[':offeringId'].analytics.submissions['open-response'][
            ':assessmentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
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
          client.offerings[':offeringId'].analytics.submissions['open-response'][
            ':assessmentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/analytics/submissions/:userEmail/assignments/:assessmentId',
    args,
  ] as const
}

export function useGetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
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
          client.offerings[':offeringId'].analytics.submissions[':userEmail'].assignments[
            ':assessmentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
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
          client.offerings[':offeringId'].analytics.submissions[':userEmail'].assignments[
            ':assessmentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAnalyticsUnitReactionsKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/unit-reactions', args] as const
}

export function useGetOfferingsOfferingIdAnalyticsUnitReactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsUnitReactionsKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
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
          client.offerings[':offeringId'].analytics['unit-reactions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAnalyticsUnitReactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
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
        ? getGetOfferingsOfferingIdAnalyticsUnitReactionsKey(args)
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
                (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
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
          client.offerings[':offeringId'].analytics['unit-reactions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdAssessmentsKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['assessments']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId/assessments', args] as const
}

export function useGetOfferingsOfferingIdAssessments<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['assessments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['assessments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsOfferingIdAssessmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['assessments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.offerings[':offeringId'].assessments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdAssessments<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['assessments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['assessments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsOfferingIdAssessmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['assessments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.offerings[':offeringId'].assessments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchOfferingsOfferingIdAssessmentsAssessmentIdKey() {
  return ['offerings', '/offerings/:offeringId/assessments/:assessmentId', 'PATCH'] as const
}

export function usePatchOfferingsOfferingIdAssessmentsAssessmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOfferingsOfferingIdAssessmentsAssessmentIdKey()
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
            (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.offerings[':offeringId'].assessments[':assessmentId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdKey() {
  return [
    'offerings',
    '/offerings/:offeringId/assessments/:assessmentId/documents/:documentId',
    'DELETE',
  ] as const
}

export function useDeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['documents'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['documents'][':documentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdKey()
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
            (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['documents'][':documentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.offerings[':offeringId'].assessments[':assessmentId'].documents[
            ':documentId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailKey() {
  return [
    'offerings',
    '/offerings/:offeringId/assessments/:assessmentId/:userEmail',
    'PATCH',
  ] as const
}

export function usePatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['assessments'][':assessmentId'][':userEmail']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.offerings)[':offeringId']['assessments'][':assessmentId'][':userEmail']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailKey()
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
            (typeof client.offerings)[':offeringId']['assessments'][':assessmentId'][':userEmail']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.offerings[':offeringId'].assessments[':assessmentId'][':userEmail'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdBadgesKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['badges']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId/badges', args] as const
}

export function useGetOfferingsOfferingIdBadges<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['badges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['badges']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsOfferingIdBadgesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['badges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings[':offeringId'].badges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdBadges<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['badges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['badges']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsOfferingIdBadgesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['badges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings[':offeringId'].badges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdChannelsKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId/channels', args] as const
}

export function useGetOfferingsOfferingIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsOfferingIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings[':offeringId'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsOfferingIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings[':offeringId'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOfferingsOfferingIdChannelsKey() {
  return ['offerings', '/offerings/:offeringId/channels', 'POST'] as const
}

export function usePostOfferingsOfferingIdChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfferingsOfferingIdChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$post']> },
      ) => parseResponse(client.offerings[':offeringId'].channels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOfferingsOfferingIdChannelsChannelIdKey() {
  return ['offerings', '/offerings/:offeringId/channels/:channelId', 'PATCH'] as const
}

export function usePatchOfferingsOfferingIdChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.offerings)[':offeringId']['channels'][':channelId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.offerings)[':offeringId']['channels'][':channelId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOfferingsOfferingIdChannelsChannelIdKey()
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
            (typeof client.offerings)[':offeringId']['channels'][':channelId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.offerings[':offeringId'].channels[':channelId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdChannelsChannelIdLearnersKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/channels/:channelId/learners', args] as const
}

export function useGetOfferingsOfferingIdChannelsChannelIdLearners<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
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
        ? getGetOfferingsOfferingIdChannelsChannelIdLearnersKey(args)
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
                (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
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
          client.offerings[':offeringId'].channels[':channelId'].learners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdChannelsChannelIdLearners<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
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
        ? getGetOfferingsOfferingIdChannelsChannelIdLearnersKey(args)
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
                (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
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
          client.offerings[':offeringId'].channels[':channelId'].learners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOfferingsOfferingIdChannelsChannelIdLearnersKey() {
  return ['offerings', '/offerings/:offeringId/channels/:channelId/learners', 'POST'] as const
}

export function usePostOfferingsOfferingIdChannelsChannelIdLearners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfferingsOfferingIdChannelsChannelIdLearnersKey()
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
            (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$post']
          >
        },
      ) =>
        parseResponse(
          client.offerings[':offeringId'].channels[':channelId'].learners.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOfferingsOfferingIdChannelsChannelIdLearnersKey() {
  return ['offerings', '/offerings/:offeringId/channels/:channelId/learners', 'DELETE'] as const
}

export function useDeleteOfferingsOfferingIdChannelsChannelIdLearners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOfferingsOfferingIdChannelsChannelIdLearnersKey()
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
            (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.offerings[':offeringId'].channels[':channelId'].learners.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdGroupsKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId/groups', args] as const
}

export function useGetOfferingsOfferingIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsOfferingIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings[':offeringId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsOfferingIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings[':offeringId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOfferingsOfferingIdGroupsKey() {
  return ['offerings', '/offerings/:offeringId/groups', 'POST'] as const
}

export function usePostOfferingsOfferingIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfferingsOfferingIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$post']> },
      ) => parseResponse(client.offerings[':offeringId'].groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdGroupsGroupIdLearnersKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/groups/:groupId/learners', args] as const
}

export function useGetOfferingsOfferingIdGroupsGroupIdLearners<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
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
        ? getGetOfferingsOfferingIdGroupsGroupIdLearnersKey(args)
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
                (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
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
          client.offerings[':offeringId'].groups[':groupId'].learners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdGroupsGroupIdLearners<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
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
        ? getGetOfferingsOfferingIdGroupsGroupIdLearnersKey(args)
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
                (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
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
          client.offerings[':offeringId'].groups[':groupId'].learners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOfferingsOfferingIdGroupsGroupIdLearnersKey() {
  return ['offerings', '/offerings/:offeringId/groups/:groupId/learners', 'POST'] as const
}

export function usePostOfferingsOfferingIdGroupsGroupIdLearners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfferingsOfferingIdGroupsGroupIdLearnersKey()
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
            (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$post']
          >
        },
      ) =>
        parseResponse(
          client.offerings[':offeringId'].groups[':groupId'].learners.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailKey() {
  return [
    'offerings',
    '/offerings/:offeringId/groups/:groupId/learners/:userEmail',
    'DELETE',
  ] as const
}

export function useDeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners'][':userEmail']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners'][':userEmail']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailKey()
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
            (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners'][':userEmail']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.offerings[':offeringId'].groups[':groupId'].learners[':userEmail'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdLearnersPendingSubmissionKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/learners/pending-submission', args] as const
}

export function useGetOfferingsOfferingIdLearnersPendingSubmission<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
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
        ? getGetOfferingsOfferingIdLearnersPendingSubmissionKey(args)
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
                (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
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
          client.offerings[':offeringId'].learners['pending-submission'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdLearnersPendingSubmission<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
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
        ? getGetOfferingsOfferingIdLearnersPendingSubmissionKey(args)
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
                (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
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
          client.offerings[':offeringId'].learners['pending-submission'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOfferingsOfferingIdMetadataCategoryKey() {
  return ['offerings', '/offerings/:offeringId/metadata/category', 'PUT'] as const
}

export function usePutOfferingsOfferingIdMetadataCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.offerings)[':offeringId']['metadata']['category']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['category']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOfferingsOfferingIdMetadataCategoryKey()
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
            (typeof client.offerings)[':offeringId']['metadata']['category']['$put']
          >
        },
      ) =>
        parseResponse(client.offerings[':offeringId'].metadata.category.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOfferingsOfferingIdMetadataLevelKey() {
  return ['offerings', '/offerings/:offeringId/metadata/level', 'PUT'] as const
}

export function usePutOfferingsOfferingIdMetadataLevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['metadata']['level']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['level']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOfferingsOfferingIdMetadataLevelKey()
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
            (typeof client.offerings)[':offeringId']['metadata']['level']['$put']
          >
        },
      ) => parseResponse(client.offerings[':offeringId'].metadata.level.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOfferingsOfferingIdMetadataTagsKey() {
  return ['offerings', '/offerings/:offeringId/metadata/tags', 'PUT'] as const
}

export function usePutOfferingsOfferingIdMetadataTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['metadata']['tags']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['tags']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOfferingsOfferingIdMetadataTagsKey()
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
            (typeof client.offerings)[':offeringId']['metadata']['tags']['$put']
          >
        },
      ) => parseResponse(client.offerings[':offeringId'].metadata.tags.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOfferingsOfferingIdMetadataTopicKey() {
  return ['offerings', '/offerings/:offeringId/metadata/topic', 'PUT'] as const
}

export function usePutOfferingsOfferingIdMetadataTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['metadata']['topic']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['topic']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOfferingsOfferingIdMetadataTopicKey()
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
            (typeof client.offerings)[':offeringId']['metadata']['topic']['$put']
          >
        },
      ) => parseResponse(client.offerings[':offeringId'].metadata.topic.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdUsersKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['users']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId/users', args] as const
}

export function useGetOfferingsOfferingIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsOfferingIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings[':offeringId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOfferingsOfferingIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offerings[':offeringId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOfferingsOfferingIdUsersKey() {
  return ['offerings', '/offerings/:offeringId/users', 'POST'] as const
}

export function usePostOfferingsOfferingIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.offerings)[':offeringId']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfferingsOfferingIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.offerings)[':offeringId']['users']['$post']> },
      ) => parseResponse(client.offerings[':offeringId'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdUsersMarkerEmailMarksKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/users/:markerEmail/marks', args] as const
}

export function useGetOfferingsOfferingIdUsersMarkerEmailMarks<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
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
        ? getGetOfferingsOfferingIdUsersMarkerEmailMarksKey(args)
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
                (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
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
          client.offerings[':offeringId'].users[':markerEmail'].marks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdUsersMarkerEmailMarks<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
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
        ? getGetOfferingsOfferingIdUsersMarkerEmailMarksKey(args)
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
                (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
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
          client.offerings[':offeringId'].users[':markerEmail'].marks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOfferingsOfferingIdUsersMarkerEmailMarksKey() {
  return ['offerings', '/offerings/:offeringId/users/:markerEmail/marks', 'POST'] as const
}

export function usePostOfferingsOfferingIdUsersMarkerEmailMarks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfferingsOfferingIdUsersMarkerEmailMarksKey()
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
            (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.offerings[':offeringId'].users[':markerEmail'].marks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOfferingsOfferingIdUsersMarkerEmailMarksKey() {
  return ['offerings', '/offerings/:offeringId/users/:markerEmail/marks', 'DELETE'] as const
}

export function useDeleteOfferingsOfferingIdUsersMarkerEmailMarks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOfferingsOfferingIdUsersMarkerEmailMarksKey()
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
            (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.offerings[':offeringId'].users[':markerEmail'].marks.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOfferingsOfferingIdUsersUserEmailKey() {
  return ['offerings', '/offerings/:offeringId/users/:userEmail', 'DELETE'] as const
}

export function useDeleteOfferingsOfferingIdUsersUserEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.offerings)[':offeringId']['users'][':userEmail']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.offerings)[':offeringId']['users'][':userEmail']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOfferingsOfferingIdUsersUserEmailKey()
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
            (typeof client.offerings)[':offeringId']['users'][':userEmail']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.offerings[':offeringId'].users[':userEmail'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdKey() {
  return [
    'offerings',
    '/offerings/:offeringId/users/:userEmail/assessments/:assessmentId',
    'DELETE',
  ] as const
}

export function useDeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['users'][':userEmail']['assessments'][':assessmentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':userEmail']['assessments'][':assessmentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdKey()
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
            (typeof client.offerings)[':offeringId']['users'][':userEmail']['assessments'][':assessmentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.offerings[':offeringId'].users[':userEmail'].assessments[':assessmentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOfferingsOfferingIdUsersUserEmailBadgesAwardKey() {
  return ['offerings', '/offerings/:offeringId/users/:userEmail/badges/award', 'POST'] as const
}

export function usePostOfferingsOfferingIdUsersUserEmailBadgesAward<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.offerings)[':offeringId']['users'][':userEmail']['badges']['award']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':userEmail']['badges']['award']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfferingsOfferingIdUsersUserEmailBadgesAwardKey()
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
            (typeof client.offerings)[':offeringId']['users'][':userEmail']['badges']['award']['$post']
          >
        },
      ) =>
        parseResponse(
          client.offerings[':offeringId'].users[':userEmail'].badges.award.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/users/:userEmail/submissions/open-response',
    args,
  ] as const
}

export function useGetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse<TError = unknown>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
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
        ? getGetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseKey(args)
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
                (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
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
          client.offerings[':offeringId'].users[':userEmail'].submissions['open-response'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
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
        ? getGetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseKey(args)
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
                (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
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
          client.offerings[':offeringId'].users[':userEmail'].submissions['open-response'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrgKey() {
  return ['org', '/org'] as const
}

export function useGetOrg<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetOrgKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.org.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOrg<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetOrgKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.org.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getPostUsersKey() {
  return ['users', '/users', 'POST'] as const
}

export function usePostUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$post> }) =>
        parseResponse(client.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersAllProgressKey(
  args: InferRequestType<typeof client.users.all.progress.$get>,
) {
  return ['users', '/users/all/progress', args] as const
}

export function useGetUsersAllProgress<TError = unknown>(
  args: InferRequestType<typeof client.users.all.progress.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersAllProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.all.progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersAllProgress<TError = unknown>(
  args: InferRequestType<typeof client.users.all.progress.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersAllProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.all.progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserEmailKey(
  args: InferRequestType<(typeof client.users)[':userEmail']['$get']>,
) {
  return ['users', '/users/:userEmail', args] as const
}

export function useGetUsersUserEmail<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserEmailKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserEmail<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userEmail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserEmailKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userEmail'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUsersUserEmailKey() {
  return ['users', '/users/:userEmail', 'PATCH'] as const
}

export function usePatchUsersUserEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userEmail']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userEmail']['$patch']> },
      ) => parseResponse(client.users[':userEmail'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserEmailBadgesKey(
  args: InferRequestType<(typeof client.users)[':userEmail']['badges']['$get']>,
) {
  return ['users', '/users/:userEmail/badges', args] as const
}

export function useGetUsersUserEmailBadges<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userEmail']['badges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['badges']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserEmailBadgesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['badges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userEmail'].badges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserEmailBadges<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userEmail']['badges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['badges']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserEmailBadgesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['badges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userEmail'].badges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserEmailInviteEmailKey() {
  return ['users', '/users/:userEmail/invite-email', 'POST'] as const
}

export function usePostUsersUserEmailInviteEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['invite-email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userEmail']['invite-email']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserEmailInviteEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':userEmail']['invite-email']['$post']> },
      ) => parseResponse(client.users[':userEmail']['invite-email'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserEmailOfferingsKey(
  args: InferRequestType<(typeof client.users)[':userEmail']['offerings']['$get']>,
) {
  return ['users', '/users/:userEmail/offerings', args] as const
}

export function useGetUsersUserEmailOfferings<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userEmail']['offerings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserEmailOfferingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userEmail'].offerings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserEmailOfferings<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userEmail']['offerings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserEmailOfferingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userEmail'].offerings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserEmailOfferingsKey() {
  return ['users', '/users/:userEmail/offerings', 'POST'] as const
}

export function usePostUsersUserEmailOfferings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userEmail']['offerings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserEmailOfferingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':userEmail']['offerings']['$post']> },
      ) => parseResponse(client.users[':userEmail'].offerings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserEmailOfferingsOfferingIdProgressKey(
  args: InferRequestType<
    (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
  >,
) {
  return ['users', '/users/:userEmail/offerings/:offeringId/progress', args] as const
}

export function useGetUsersUserEmailOfferingsOfferingIdProgress<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
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
        ? getGetUsersUserEmailOfferingsOfferingIdProgressKey(args)
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
                (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
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
          client.users[':userEmail'].offerings[':offeringId'].progress.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserEmailOfferingsOfferingIdProgress<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
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
        ? getGetUsersUserEmailOfferingsOfferingIdProgressKey(args)
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
                (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
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
          client.users[':userEmail'].offerings[':offeringId'].progress.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUsersUserEmailPermissionsPermissionNameKey() {
  return ['users', '/users/:userEmail/permissions/:permissionName', 'POST'] as const
}

export function usePostUsersUserEmailPermissionsPermissionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':userEmail']['permissions'][':permissionName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userEmail']['permissions'][':permissionName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserEmailPermissionsPermissionNameKey()
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
            (typeof client.users)[':userEmail']['permissions'][':permissionName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users[':userEmail'].permissions[':permissionName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserEmailProgressKey(
  args: InferRequestType<(typeof client.users)[':userEmail']['progress']['$get']>,
) {
  return ['users', '/users/:userEmail/progress', args] as const
}

export function useGetUsersUserEmailProgress<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userEmail']['progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['progress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserEmailProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userEmail'].progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserEmailProgress<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userEmail']['progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['progress']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserEmailProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userEmail'].progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserEmailSuspendKey() {
  return ['users', '/users/:userEmail/suspend', 'PUT'] as const
}

export function usePutUsersUserEmailSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['suspend']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userEmail']['suspend']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserEmailSuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userEmail']['suspend']['$put']> },
      ) => parseResponse(client.users[':userEmail'].suspend.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserEmailTransferKey() {
  return ['users', '/users/:userEmail/transfer', 'PATCH'] as const
}

export function usePatchUsersUserEmailTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userEmail']['transfer']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userEmail']['transfer']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserEmailTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':userEmail']['transfer']['$patch']> },
      ) => parseResponse(client.users[':userEmail'].transfer.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

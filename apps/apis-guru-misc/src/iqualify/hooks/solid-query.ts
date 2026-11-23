import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCourseMappingsQueryKey() {
  return ['course-mappings', '/course-mappings'] as const
}

export function getCourseMappingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCourseMappingsQueryKey>
  >({
    queryKey: getCourseMappingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['course-mappings'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCourseMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCourseMappingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCourseMappingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCourseMappingsExternalcourseExternalCourseIdQueryKey(
  args: InferRequestType<
    (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
  >,
) {
  return ['course-mappings', '/course-mappings/externalcourse/:externalCourseId', args] as const
}

export function getCourseMappingsExternalcourseExternalCourseIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCourseMappingsExternalcourseExternalCourseIdQueryKey>
  >({
    queryKey: getCourseMappingsExternalcourseExternalCourseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['course-mappings'].externalcourse[':externalCourseId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCourseMappingsExternalcourseExternalCourseId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getCourseMappingsExternalcourseExternalCourseIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCourseMappingsExternalcourseExternalCourseIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCourseMappingsOfferingIdQueryKey(
  args: InferRequestType<(typeof client)['course-mappings'][':offeringId']['$get']>,
) {
  return ['course-mappings', '/course-mappings/:offeringId', args] as const
}

export function getCourseMappingsOfferingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['course-mappings'][':offeringId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['course-mappings'][':offeringId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['course-mappings'][':offeringId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCourseMappingsOfferingIdQueryKey>
  >({
    queryKey: getCourseMappingsOfferingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['course-mappings'][':offeringId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCourseMappingsOfferingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['course-mappings'][':offeringId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['course-mappings'][':offeringId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['course-mappings'][':offeringId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCourseMappingsOfferingIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCourseMappingsOfferingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCourseMappingsOfferingIdExternalCourseIdMutationKey() {
  return ['course-mappings', '/course-mappings/:offeringId/:externalCourseId', 'PUT'] as const
}

export function getPutCourseMappingsOfferingIdExternalCourseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCourseMappingsOfferingIdExternalCourseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$put']
      >,
    ) {
      return parseResponse(
        client['course-mappings'][':offeringId'][':externalCourseId'].$put(args, options),
      )
    },
  })
}

export function createPutCourseMappingsOfferingIdExternalCourseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCourseMappingsOfferingIdExternalCourseIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCourseMappingsOfferingIdExternalCourseIdMutationKey() {
  return ['course-mappings', '/course-mappings/:offeringId/:externalCourseId', 'DELETE'] as const
}

export function getDeleteCourseMappingsOfferingIdExternalCourseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCourseMappingsOfferingIdExternalCourseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$delete']
      >,
    ) {
      return parseResponse(
        client['course-mappings'][':offeringId'][':externalCourseId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteCourseMappingsOfferingIdExternalCourseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCourseMappingsOfferingIdExternalCourseIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCoursesQueryKey() {
  return ['courses', '/courses'] as const
}

export function getCoursesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCoursesQueryKey>
  >({
    queryKey: getCoursesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.courses.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCourses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCoursesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCoursesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCoursesContentIdQueryKey(
  args: InferRequestType<(typeof client.courses)[':contentId']['$get']>,
) {
  return ['courses', '/courses/:contentId', args] as const
}

export function getCoursesContentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.courses)[':contentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCoursesContentIdQueryKey>
  >({
    queryKey: getCoursesContentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.courses[':contentId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCoursesContentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.courses)[':contentId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCoursesContentIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCoursesContentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCoursesContentIdActivationsQueryKey(
  args: InferRequestType<(typeof client.courses)[':contentId']['activations']['$get']>,
) {
  return ['courses', '/courses/:contentId/activations', args] as const
}

export function getCoursesContentIdActivationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.courses)[':contentId']['activations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.courses)[':contentId']['activations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.courses)[':contentId']['activations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCoursesContentIdActivationsQueryKey>
  >({
    queryKey: getCoursesContentIdActivationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.courses[':contentId'].activations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCoursesContentIdActivations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.courses)[':contentId']['activations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.courses)[':contentId']['activations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.courses)[':contentId']['activations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCoursesContentIdActivationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCoursesContentIdActivationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCoursesContentIdMetadataCategoryMutationKey() {
  return ['courses', '/courses/:contentId/metadata/category', 'PUT'] as const
}

export function getPutCoursesContentIdMetadataCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.courses)[':contentId']['metadata']['category']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.courses)[':contentId']['metadata']['category']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCoursesContentIdMetadataCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.courses)[':contentId']['metadata']['category']['$put']>,
    ) {
      return parseResponse(client.courses[':contentId'].metadata.category.$put(args, options))
    },
  })
}

export function createPutCoursesContentIdMetadataCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.courses)[':contentId']['metadata']['category']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.courses)[':contentId']['metadata']['category']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCoursesContentIdMetadataCategoryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCoursesContentIdMetadataLevelMutationKey() {
  return ['courses', '/courses/:contentId/metadata/level', 'PUT'] as const
}

export function getPutCoursesContentIdMetadataLevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.courses)[':contentId']['metadata']['level']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.courses)[':contentId']['metadata']['level']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCoursesContentIdMetadataLevelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.courses)[':contentId']['metadata']['level']['$put']>,
    ) {
      return parseResponse(client.courses[':contentId'].metadata.level.$put(args, options))
    },
  })
}

export function createPutCoursesContentIdMetadataLevel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.courses)[':contentId']['metadata']['level']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.courses)[':contentId']['metadata']['level']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCoursesContentIdMetadataLevelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCoursesContentIdMetadataTagsMutationKey() {
  return ['courses', '/courses/:contentId/metadata/tags', 'PUT'] as const
}

export function getPutCoursesContentIdMetadataTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.courses)[':contentId']['metadata']['tags']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.courses)[':contentId']['metadata']['tags']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCoursesContentIdMetadataTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.courses)[':contentId']['metadata']['tags']['$put']>,
    ) {
      return parseResponse(client.courses[':contentId'].metadata.tags.$put(args, options))
    },
  })
}

export function createPutCoursesContentIdMetadataTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.courses)[':contentId']['metadata']['tags']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.courses)[':contentId']['metadata']['tags']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCoursesContentIdMetadataTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCoursesContentIdMetadataTopicMutationKey() {
  return ['courses', '/courses/:contentId/metadata/topic', 'PUT'] as const
}

export function getPutCoursesContentIdMetadataTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.courses)[':contentId']['metadata']['topic']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.courses)[':contentId']['metadata']['topic']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCoursesContentIdMetadataTopicMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.courses)[':contentId']['metadata']['topic']['$put']>,
    ) {
      return parseResponse(client.courses[':contentId'].metadata.topic.$put(args, options))
    },
  })
}

export function createPutCoursesContentIdMetadataTopic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.courses)[':contentId']['metadata']['topic']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.courses)[':contentId']['metadata']['topic']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCoursesContentIdMetadataTopicMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCoursesContentIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.courses)[':contentId']['permissions']['$get']>,
) {
  return ['courses', '/courses/:contentId/permissions', args] as const
}

export function getCoursesContentIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.courses)[':contentId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.courses)[':contentId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.courses)[':contentId']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCoursesContentIdPermissionsQueryKey>
  >({
    queryKey: getCoursesContentIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.courses[':contentId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCoursesContentIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.courses)[':contentId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.courses)[':contentId']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.courses)[':contentId']['permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCoursesContentIdPermissionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCoursesContentIdPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCoursesRootContentIdPermissionsUserEmailMutationKey() {
  return ['courses', '/courses/:rootContentId/permissions/:userEmail', 'POST'] as const
}

export function getPostCoursesRootContentIdPermissionsUserEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.courses)[':rootContentId']['permissions'][':userEmail']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCoursesRootContentIdPermissionsUserEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.courses)[':rootContentId']['permissions'][':userEmail']['$post']
      >,
    ) {
      return parseResponse(
        client.courses[':rootContentId'].permissions[':userEmail'].$post(args, options),
      )
    },
  })
}

export function createPostCoursesRootContentIdPermissionsUserEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.courses)[':rootContentId']['permissions'][':userEmail']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCoursesRootContentIdPermissionsUserEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOfferingsQueryKey() {
  return ['offerings', '/offerings'] as const
}

export function getOfferingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOfferingsQueryKey>
  >({
    queryKey: getOfferingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOfferings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOfferingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOfferingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostOfferingsMutationKey() {
  return ['offerings', '/offerings', 'POST'] as const
}

export function getPostOfferingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$post>>>>>,
    TError,
    InferRequestType<typeof client.offerings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOfferingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.offerings.$post>) {
      return parseResponse(client.offerings.$post(args, options))
    },
  })
}

export function createPostOfferings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.offerings.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOfferingsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOfferingsCurrentQueryKey() {
  return ['offerings', '/offerings/current'] as const
}

export function getOfferingsCurrentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsCurrentQueryKey>
  >({
    queryKey: getOfferingsCurrentQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings.current.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOfferingsCurrentQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOfferingsCurrentQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOfferingsFutureQueryKey() {
  return ['offerings', '/offerings/future'] as const
}

export function getOfferingsFutureQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsFutureQueryKey>
  >({
    queryKey: getOfferingsFutureQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings.future.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOfferingsFuture<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOfferingsFutureQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOfferingsFutureQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOfferingsInfoTextPatternQueryKey(
  args: InferRequestType<(typeof client.offerings.info)[':textPattern']['$get']>,
) {
  return ['offerings', '/offerings/info/:textPattern', args] as const
}

export function getOfferingsInfoTextPatternQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings.info)[':textPattern']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offerings.info)[':textPattern']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings.info)[':textPattern']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsInfoTextPatternQueryKey>
  >({
    queryKey: getOfferingsInfoTextPatternQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings.info[':textPattern'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsInfoTextPattern<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings.info)[':textPattern']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.offerings.info)[':textPattern']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings.info)[':textPattern']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOfferingsInfoTextPatternQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsInfoTextPatternQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsPastQueryKey() {
  return ['offerings', '/offerings/past'] as const
}

export function getOfferingsPastQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsPastQueryKey>
  >({
    queryKey: getOfferingsPastQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings.past.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOfferingsPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOfferingsPastQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOfferingsPastQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOfferingsSummaryQueryKey(
  args: InferRequestType<typeof client.offerings.summary.$get>,
) {
  return ['offerings', '/offerings/summary', args] as const
}

export function getOfferingsSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.offerings.summary.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsSummaryQueryKey>
  >({
    queryKey: getOfferingsSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings.summary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOfferingsSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.offerings.summary.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOfferingsSummaryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOfferingsSummaryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOfferingsOfferingIdQueryKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId', args] as const
}

export function getOfferingsOfferingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdQueryKey>
  >({
    queryKey: getOfferingsOfferingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.offerings)[':offeringId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOfferingsOfferingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchOfferingsOfferingIdMutationKey() {
  return ['offerings', '/offerings/:offeringId', 'PATCH'] as const
}

export function getPatchOfferingsOfferingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.offerings)[':offeringId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOfferingsOfferingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.offerings)[':offeringId']['$patch']>) {
      return parseResponse(client.offerings[':offeringId'].$patch(args, options))
    },
  })
}

export function createPatchOfferingsOfferingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.offerings)[':offeringId']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOfferingsOfferingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdActivitiesOpenresponseQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/activities/openresponse', args] as const
}

export function getOfferingsOfferingIdActivitiesOpenresponseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdActivitiesOpenresponseQueryKey>
  >({
    queryKey: getOfferingsOfferingIdActivitiesOpenresponseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].activities.openresponse.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdActivitiesOpenresponse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdActivitiesOpenresponseQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdActivitiesOpenresponseQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/activities/responses', args] as const
}

export function getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.activities.responses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsActivitiesResponses<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryKey(
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

export function getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.channels[':channelId'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsChannelsChannelIdComments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/channels/:channelId/posts', args] as const
}

export function getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.channels[':channelId'].posts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsChannelsChannelIdPosts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryKey(
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

export function getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.channels[':channelId'].replies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsChannelsChannelIdReplies<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsLearnersProgressQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/learners-progress', args] as const
}

export function getOfferingsOfferingIdAnalyticsLearnersProgressQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsLearnersProgressQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsLearnersProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics['learners-progress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsLearnersProgress<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAnalyticsLearnersProgressQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsLearnersProgressQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/marks/assignments', args] as const
}

export function getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.marks.assignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsMarksAssignments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsMarksQuizzesQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/marks/quizzes', args] as const
}

export function getOfferingsOfferingIdAnalyticsMarksQuizzesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsMarksQuizzesQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsMarksQuizzesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.marks.quizzes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsMarksQuizzes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAnalyticsMarksQuizzesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsMarksQuizzesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsPulsesQueryKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId/analytics/pulses', args] as const
}

export function getOfferingsOfferingIdAnalyticsPulsesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsPulsesQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsPulsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.pulses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsPulses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAnalyticsPulsesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsPulsesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsPulsesResponsesQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/pulses/responses', args] as const
}

export function getOfferingsOfferingIdAnalyticsPulsesResponsesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsPulsesResponsesQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsPulsesResponsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.pulses.responses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsPulsesResponses<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAnalyticsPulsesResponsesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsPulsesResponsesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/pulses/:pulseId/responses', args] as const
}

export function getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.pulses[':pulseId'].responses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsPulsesPulseIdResponses<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsSocialNotesQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/social-notes', args] as const
}

export function getOfferingsOfferingIdAnalyticsSocialNotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsSocialNotesQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsSocialNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics['social-notes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsSocialNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAnalyticsSocialNotesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsSocialNotesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/submissions/assignments', args] as const
}

export function getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.submissions.assignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsSubmissionsAssignments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryKey(
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

export function getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.submissions['open-response'][
          ':assessmentId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryKey(
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

export function getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryKey
    >
  >({
    queryKey:
      getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.submissions[':userEmail'].assignments[
          ':assessmentId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAnalyticsUnitReactionsQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/unit-reactions', args] as const
}

export function getOfferingsOfferingIdAnalyticsUnitReactionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAnalyticsUnitReactionsQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAnalyticsUnitReactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].analytics['unit-reactions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAnalyticsUnitReactions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAnalyticsUnitReactionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAnalyticsUnitReactionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdAssessmentsQueryKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['assessments']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId/assessments', args] as const
}

export function getOfferingsOfferingIdAssessmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['assessments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['assessments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['assessments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdAssessmentsQueryKey>
  >({
    queryKey: getOfferingsOfferingIdAssessmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].assessments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdAssessments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['assessments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.offerings)[':offeringId']['assessments']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['assessments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdAssessmentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdAssessmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchOfferingsOfferingIdAssessmentsAssessmentIdMutationKey() {
  return ['offerings', '/offerings/:offeringId/assessments/:assessmentId', 'PATCH'] as const
}

export function getPatchOfferingsOfferingIdAssessmentsAssessmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOfferingsOfferingIdAssessmentsAssessmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.offerings[':offeringId'].assessments[':assessmentId'].$patch(args, options),
      )
    },
  })
}

export function createPatchOfferingsOfferingIdAssessmentsAssessmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOfferingsOfferingIdAssessmentsAssessmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdMutationKey() {
  return [
    'offerings',
    '/offerings/:offeringId/assessments/:assessmentId/documents/:documentId',
    'DELETE',
  ] as const
}

export function getDeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['documents'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['documents'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.offerings[':offeringId'].assessments[':assessmentId'].documents[
          ':documentId'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['documents'][':documentId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailMutationKey() {
  return [
    'offerings',
    '/offerings/:offeringId/assessments/:assessmentId/:userEmail',
    'PATCH',
  ] as const
}

export function getPatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.offerings)[':offeringId']['assessments'][':assessmentId'][':userEmail']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['assessments'][':assessmentId'][':userEmail']['$patch']
      >,
    ) {
      return parseResponse(
        client.offerings[':offeringId'].assessments[':assessmentId'][':userEmail'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.offerings)[':offeringId']['assessments'][':assessmentId'][':userEmail']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdBadgesQueryKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['badges']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId/badges', args] as const
}

export function getOfferingsOfferingIdBadgesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['badges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['badges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['badges']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdBadgesQueryKey>
  >({
    queryKey: getOfferingsOfferingIdBadgesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].badges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdBadges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['badges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.offerings)[':offeringId']['badges']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['badges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdBadgesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdBadgesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdChannelsQueryKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId/channels', args] as const
}

export function getOfferingsOfferingIdChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdChannelsQueryKey>
  >({
    queryKey: getOfferingsOfferingIdChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdChannelsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdChannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOfferingsOfferingIdChannelsMutationKey() {
  return ['offerings', '/offerings/:offeringId/channels', 'POST'] as const
}

export function getPostOfferingsOfferingIdChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOfferingsOfferingIdChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$post']>,
    ) {
      return parseResponse(client.offerings[':offeringId'].channels.$post(args, options))
    },
  })
}

export function createPostOfferingsOfferingIdChannels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOfferingsOfferingIdChannelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchOfferingsOfferingIdChannelsChannelIdMutationKey() {
  return ['offerings', '/offerings/:offeringId/channels/:channelId', 'PATCH'] as const
}

export function getPatchOfferingsOfferingIdChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.offerings)[':offeringId']['channels'][':channelId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOfferingsOfferingIdChannelsChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['channels'][':channelId']['$patch']
      >,
    ) {
      return parseResponse(
        client.offerings[':offeringId'].channels[':channelId'].$patch(args, options),
      )
    },
  })
}

export function createPatchOfferingsOfferingIdChannelsChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.offerings)[':offeringId']['channels'][':channelId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.offerings)[':offeringId']['channels'][':channelId']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOfferingsOfferingIdChannelsChannelIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdChannelsChannelIdLearnersQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/channels/:channelId/learners', args] as const
}

export function getOfferingsOfferingIdChannelsChannelIdLearnersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdChannelsChannelIdLearnersQueryKey>
  >({
    queryKey: getOfferingsOfferingIdChannelsChannelIdLearnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].channels[':channelId'].learners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdChannelsChannelIdLearners<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdChannelsChannelIdLearnersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdChannelsChannelIdLearnersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOfferingsOfferingIdChannelsChannelIdLearnersMutationKey() {
  return ['offerings', '/offerings/:offeringId/channels/:channelId/learners', 'POST'] as const
}

export function getPostOfferingsOfferingIdChannelsChannelIdLearnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOfferingsOfferingIdChannelsChannelIdLearnersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$post']
      >,
    ) {
      return parseResponse(
        client.offerings[':offeringId'].channels[':channelId'].learners.$post(args, options),
      )
    },
  })
}

export function createPostOfferingsOfferingIdChannelsChannelIdLearners<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOfferingsOfferingIdChannelsChannelIdLearnersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOfferingsOfferingIdChannelsChannelIdLearnersMutationKey() {
  return ['offerings', '/offerings/:offeringId/channels/:channelId/learners', 'DELETE'] as const
}

export function getDeleteOfferingsOfferingIdChannelsChannelIdLearnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOfferingsOfferingIdChannelsChannelIdLearnersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$delete']
      >,
    ) {
      return parseResponse(
        client.offerings[':offeringId'].channels[':channelId'].learners.$delete(args, options),
      )
    },
  })
}

export function createDeleteOfferingsOfferingIdChannelsChannelIdLearners<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOfferingsOfferingIdChannelsChannelIdLearnersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdGroupsQueryKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId/groups', args] as const
}

export function getOfferingsOfferingIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdGroupsQueryKey>
  >({
    queryKey: getOfferingsOfferingIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdGroupsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOfferingsOfferingIdGroupsMutationKey() {
  return ['offerings', '/offerings/:offeringId/groups', 'POST'] as const
}

export function getPostOfferingsOfferingIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOfferingsOfferingIdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$post']>,
    ) {
      return parseResponse(client.offerings[':offeringId'].groups.$post(args, options))
    },
  })
}

export function createPostOfferingsOfferingIdGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOfferingsOfferingIdGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdGroupsGroupIdLearnersQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/groups/:groupId/learners', args] as const
}

export function getOfferingsOfferingIdGroupsGroupIdLearnersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdGroupsGroupIdLearnersQueryKey>
  >({
    queryKey: getOfferingsOfferingIdGroupsGroupIdLearnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].groups[':groupId'].learners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdGroupsGroupIdLearners<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdGroupsGroupIdLearnersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdGroupsGroupIdLearnersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOfferingsOfferingIdGroupsGroupIdLearnersMutationKey() {
  return ['offerings', '/offerings/:offeringId/groups/:groupId/learners', 'POST'] as const
}

export function getPostOfferingsOfferingIdGroupsGroupIdLearnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOfferingsOfferingIdGroupsGroupIdLearnersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$post']
      >,
    ) {
      return parseResponse(
        client.offerings[':offeringId'].groups[':groupId'].learners.$post(args, options),
      )
    },
  })
}

export function createPostOfferingsOfferingIdGroupsGroupIdLearners<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOfferingsOfferingIdGroupsGroupIdLearnersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailMutationKey() {
  return [
    'offerings',
    '/offerings/:offeringId/groups/:groupId/learners/:userEmail',
    'DELETE',
  ] as const
}

export function getDeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners'][':userEmail']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners'][':userEmail']['$delete']
      >,
    ) {
      return parseResponse(
        client.offerings[':offeringId'].groups[':groupId'].learners[':userEmail'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners'][':userEmail']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdLearnersPendingSubmissionQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/learners/pending-submission', args] as const
}

export function getOfferingsOfferingIdLearnersPendingSubmissionQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdLearnersPendingSubmissionQueryKey>
  >({
    queryKey: getOfferingsOfferingIdLearnersPendingSubmissionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].learners['pending-submission'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdLearnersPendingSubmission<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdLearnersPendingSubmissionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdLearnersPendingSubmissionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOfferingsOfferingIdMetadataCategoryMutationKey() {
  return ['offerings', '/offerings/:offeringId/metadata/category', 'PUT'] as const
}

export function getPutOfferingsOfferingIdMetadataCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['category']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOfferingsOfferingIdMetadataCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['metadata']['category']['$put']
      >,
    ) {
      return parseResponse(client.offerings[':offeringId'].metadata.category.$put(args, options))
    },
  })
}

export function createPutOfferingsOfferingIdMetadataCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.offerings)[':offeringId']['metadata']['category']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.offerings)[':offeringId']['metadata']['category']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOfferingsOfferingIdMetadataCategoryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOfferingsOfferingIdMetadataLevelMutationKey() {
  return ['offerings', '/offerings/:offeringId/metadata/level', 'PUT'] as const
}

export function getPutOfferingsOfferingIdMetadataLevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['metadata']['level']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['level']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOfferingsOfferingIdMetadataLevelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['level']['$put']>,
    ) {
      return parseResponse(client.offerings[':offeringId'].metadata.level.$put(args, options))
    },
  })
}

export function createPutOfferingsOfferingIdMetadataLevel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.offerings)[':offeringId']['metadata']['level']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['level']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOfferingsOfferingIdMetadataLevelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOfferingsOfferingIdMetadataTagsMutationKey() {
  return ['offerings', '/offerings/:offeringId/metadata/tags', 'PUT'] as const
}

export function getPutOfferingsOfferingIdMetadataTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['metadata']['tags']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['tags']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOfferingsOfferingIdMetadataTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['tags']['$put']>,
    ) {
      return parseResponse(client.offerings[':offeringId'].metadata.tags.$put(args, options))
    },
  })
}

export function createPutOfferingsOfferingIdMetadataTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.offerings)[':offeringId']['metadata']['tags']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['tags']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOfferingsOfferingIdMetadataTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOfferingsOfferingIdMetadataTopicMutationKey() {
  return ['offerings', '/offerings/:offeringId/metadata/topic', 'PUT'] as const
}

export function getPutOfferingsOfferingIdMetadataTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['metadata']['topic']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['topic']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOfferingsOfferingIdMetadataTopicMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['topic']['$put']>,
    ) {
      return parseResponse(client.offerings[':offeringId'].metadata.topic.$put(args, options))
    },
  })
}

export function createPutOfferingsOfferingIdMetadataTopic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.offerings)[':offeringId']['metadata']['topic']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['topic']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOfferingsOfferingIdMetadataTopicMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdUsersQueryKey(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['users']['$get']>,
) {
  return ['offerings', '/offerings/:offeringId/users', args] as const
}

export function getOfferingsOfferingIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdUsersQueryKey>
  >({
    queryKey: getOfferingsOfferingIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.offerings)[':offeringId']['users']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdUsersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOfferingsOfferingIdUsersMutationKey() {
  return ['offerings', '/offerings/:offeringId/users', 'POST'] as const
}

export function getPostOfferingsOfferingIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.offerings)[':offeringId']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOfferingsOfferingIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.offerings)[':offeringId']['users']['$post']>,
    ) {
      return parseResponse(client.offerings[':offeringId'].users.$post(args, options))
    },
  })
}

export function createPostOfferingsOfferingIdUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.offerings)[':offeringId']['users']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOfferingsOfferingIdUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdUsersMarkerEmailMarksQueryKey(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
  >,
) {
  return ['offerings', '/offerings/:offeringId/users/:markerEmail/marks', args] as const
}

export function getOfferingsOfferingIdUsersMarkerEmailMarksQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdUsersMarkerEmailMarksQueryKey>
  >({
    queryKey: getOfferingsOfferingIdUsersMarkerEmailMarksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].users[':markerEmail'].marks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOfferingsOfferingIdUsersMarkerEmailMarks<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdUsersMarkerEmailMarksQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdUsersMarkerEmailMarksQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOfferingsOfferingIdUsersMarkerEmailMarksMutationKey() {
  return ['offerings', '/offerings/:offeringId/users/:markerEmail/marks', 'POST'] as const
}

export function getPostOfferingsOfferingIdUsersMarkerEmailMarksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOfferingsOfferingIdUsersMarkerEmailMarksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$post']
      >,
    ) {
      return parseResponse(
        client.offerings[':offeringId'].users[':markerEmail'].marks.$post(args, options),
      )
    },
  })
}

export function createPostOfferingsOfferingIdUsersMarkerEmailMarks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOfferingsOfferingIdUsersMarkerEmailMarksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOfferingsOfferingIdUsersMarkerEmailMarksMutationKey() {
  return ['offerings', '/offerings/:offeringId/users/:markerEmail/marks', 'DELETE'] as const
}

export function getDeleteOfferingsOfferingIdUsersMarkerEmailMarksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOfferingsOfferingIdUsersMarkerEmailMarksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$delete']
      >,
    ) {
      return parseResponse(
        client.offerings[':offeringId'].users[':markerEmail'].marks.$delete(args, options),
      )
    },
  })
}

export function createDeleteOfferingsOfferingIdUsersMarkerEmailMarks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOfferingsOfferingIdUsersMarkerEmailMarksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOfferingsOfferingIdUsersUserEmailMutationKey() {
  return ['offerings', '/offerings/:offeringId/users/:userEmail', 'DELETE'] as const
}

export function getDeleteOfferingsOfferingIdUsersUserEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.offerings)[':offeringId']['users'][':userEmail']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOfferingsOfferingIdUsersUserEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['users'][':userEmail']['$delete']
      >,
    ) {
      return parseResponse(
        client.offerings[':offeringId'].users[':userEmail'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOfferingsOfferingIdUsersUserEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.offerings)[':offeringId']['users'][':userEmail']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.offerings)[':offeringId']['users'][':userEmail']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOfferingsOfferingIdUsersUserEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdMutationKey() {
  return [
    'offerings',
    '/offerings/:offeringId/users/:userEmail/assessments/:assessmentId',
    'DELETE',
  ] as const
}

export function getDeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':userEmail']['assessments'][':assessmentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['users'][':userEmail']['assessments'][':assessmentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.offerings[':offeringId'].users[':userEmail'].assessments[':assessmentId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.offerings)[':offeringId']['users'][':userEmail']['assessments'][':assessmentId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOfferingsOfferingIdUsersUserEmailBadgesAwardMutationKey() {
  return ['offerings', '/offerings/:offeringId/users/:userEmail/badges/award', 'POST'] as const
}

export function getPostOfferingsOfferingIdUsersUserEmailBadgesAwardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':userEmail']['badges']['award']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOfferingsOfferingIdUsersUserEmailBadgesAwardMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.offerings)[':offeringId']['users'][':userEmail']['badges']['award']['$post']
      >,
    ) {
      return parseResponse(
        client.offerings[':offeringId'].users[':userEmail'].badges.award.$post(args, options),
      )
    },
  })
}

export function createPostOfferingsOfferingIdUsersUserEmailBadgesAward<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.offerings)[':offeringId']['users'][':userEmail']['badges']['award']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOfferingsOfferingIdUsersUserEmailBadgesAwardMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryKey(
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

export function getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryKey>
  >({
    queryKey: getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offerings[':offeringId'].users[':userEmail'].submissions['open-response'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrgQueryKey() {
  return ['org', '/org'] as const
}

export function getOrgQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgQueryKey>
  >({
    queryKey: getOrgQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrg<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getOrgQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function createPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersAllProgressQueryKey(
  args: InferRequestType<typeof client.users.all.progress.$get>,
) {
  return ['users', '/users/all/progress', args] as const
}

export function getUsersAllProgressQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.all.progress.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersAllProgressQueryKey>
  >({
    queryKey: getUsersAllProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.all.progress.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersAllProgress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.all.progress.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersAllProgressQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersAllProgressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserEmailQueryKey(
  args: InferRequestType<(typeof client.users)[':userEmail']['$get']>,
) {
  return ['users', '/users/:userEmail', args] as const
}

export function getUsersUserEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserEmailQueryKey>
  >({
    queryKey: getUsersUserEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userEmail'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersUserEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userEmail']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserEmailQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserEmailQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchUsersUserEmailMutationKey() {
  return ['users', '/users/:userEmail', 'PATCH'] as const
}

export function getPatchUsersUserEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userEmail']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userEmail']['$patch']>) {
      return parseResponse(client.users[':userEmail'].$patch(args, options))
    },
  })
}

export function createPatchUsersUserEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userEmail']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userEmail']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserEmailBadgesQueryKey(
  args: InferRequestType<(typeof client.users)[':userEmail']['badges']['$get']>,
) {
  return ['users', '/users/:userEmail/badges', args] as const
}

export function getUsersUserEmailBadgesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userEmail']['badges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userEmail']['badges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userEmail']['badges']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserEmailBadgesQueryKey>
  >({
    queryKey: getUsersUserEmailBadgesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userEmail'].badges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserEmailBadges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userEmail']['badges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userEmail']['badges']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userEmail']['badges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserEmailBadgesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserEmailBadgesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostUsersUserEmailInviteEmailMutationKey() {
  return ['users', '/users/:userEmail/invite-email', 'POST'] as const
}

export function getPostUsersUserEmailInviteEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['invite-email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userEmail']['invite-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserEmailInviteEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userEmail']['invite-email']['$post']>,
    ) {
      return parseResponse(client.users[':userEmail']['invite-email'].$post(args, options))
    },
  })
}

export function createPostUsersUserEmailInviteEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userEmail']['invite-email']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userEmail']['invite-email']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserEmailInviteEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserEmailOfferingsQueryKey(
  args: InferRequestType<(typeof client.users)[':userEmail']['offerings']['$get']>,
) {
  return ['users', '/users/:userEmail/offerings', args] as const
}

export function getUsersUserEmailOfferingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userEmail']['offerings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserEmailOfferingsQueryKey>
  >({
    queryKey: getUsersUserEmailOfferingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userEmail'].offerings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserEmailOfferings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userEmail']['offerings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserEmailOfferingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserEmailOfferingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostUsersUserEmailOfferingsMutationKey() {
  return ['users', '/users/:userEmail/offerings', 'POST'] as const
}

export function getPostUsersUserEmailOfferingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userEmail']['offerings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserEmailOfferingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userEmail']['offerings']['$post']>,
    ) {
      return parseResponse(client.users[':userEmail'].offerings.$post(args, options))
    },
  })
}

export function createPostUsersUserEmailOfferings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userEmail']['offerings']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserEmailOfferingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserEmailOfferingsOfferingIdProgressQueryKey(
  args: InferRequestType<
    (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
  >,
) {
  return ['users', '/users/:userEmail/offerings/:offeringId/progress', args] as const
}

export function getUsersUserEmailOfferingsOfferingIdProgressQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUsersUserEmailOfferingsOfferingIdProgressQueryKey>
  >({
    queryKey: getUsersUserEmailOfferingsOfferingIdProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userEmail'].offerings[':offeringId'].progress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserEmailOfferingsOfferingIdProgress<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getUsersUserEmailOfferingsOfferingIdProgressQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserEmailOfferingsOfferingIdProgressQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostUsersUserEmailPermissionsPermissionNameMutationKey() {
  return ['users', '/users/:userEmail/permissions/:permissionName', 'POST'] as const
}

export function getPostUsersUserEmailPermissionsPermissionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.users)[':userEmail']['permissions'][':permissionName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserEmailPermissionsPermissionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':userEmail']['permissions'][':permissionName']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':userEmail'].permissions[':permissionName'].$post(args, options),
      )
    },
  })
}

export function createPostUsersUserEmailPermissionsPermissionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.users)[':userEmail']['permissions'][':permissionName']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserEmailPermissionsPermissionNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserEmailProgressQueryKey(
  args: InferRequestType<(typeof client.users)[':userEmail']['progress']['$get']>,
) {
  return ['users', '/users/:userEmail/progress', args] as const
}

export function getUsersUserEmailProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userEmail']['progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userEmail']['progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userEmail']['progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserEmailProgressQueryKey>
  >({
    queryKey: getUsersUserEmailProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userEmail'].progress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserEmailProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userEmail']['progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userEmail']['progress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userEmail']['progress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserEmailProgressQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserEmailProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutUsersUserEmailSuspendMutationKey() {
  return ['users', '/users/:userEmail/suspend', 'PUT'] as const
}

export function getPutUsersUserEmailSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userEmail']['suspend']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userEmail']['suspend']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserEmailSuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userEmail']['suspend']['$put']>,
    ) {
      return parseResponse(client.users[':userEmail'].suspend.$put(args, options))
    },
  })
}

export function createPutUsersUserEmailSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userEmail']['suspend']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userEmail']['suspend']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersUserEmailSuspendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchUsersUserEmailTransferMutationKey() {
  return ['users', '/users/:userEmail/transfer', 'PATCH'] as const
}

export function getPatchUsersUserEmailTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userEmail']['transfer']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userEmail']['transfer']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserEmailTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userEmail']['transfer']['$patch']>,
    ) {
      return parseResponse(client.users[':userEmail'].transfer.$patch(args, options))
    },
  })
}

export function createPatchUsersUserEmailTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userEmail']['transfer']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userEmail']['transfer']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserEmailTransferMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

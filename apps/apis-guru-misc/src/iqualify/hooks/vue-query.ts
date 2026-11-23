import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCourseMappingsQueryKey() {
  return ['course-mappings', '/course-mappings'] as const
}

export function getCourseMappingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCourseMappingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['course-mappings'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCourseMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
            >
          >,
          ReturnType<typeof getCourseMappingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCourseMappingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCourseMappingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['course-mappings'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCourseMappingsExternalcourseExternalCourseIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
    >
  >,
) {
  return [
    'course-mappings',
    '/course-mappings/externalcourse/:externalCourseId',
    toValue(args),
  ] as const
}

export function getCourseMappingsExternalcourseExternalCourseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCourseMappingsExternalcourseExternalCourseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['course-mappings'].externalcourse[':externalCourseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCourseMappingsExternalcourseExternalCourseId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getCourseMappingsExternalcourseExternalCourseIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCourseMappingsExternalcourseExternalCourseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['course-mappings'].externalcourse[':externalCourseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCourseMappingsOfferingIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['course-mappings'][':offeringId']['$get']>
  >,
) {
  return ['course-mappings', '/course-mappings/:offeringId', toValue(args)] as const
}

export function getCourseMappingsOfferingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['course-mappings'][':offeringId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCourseMappingsOfferingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['course-mappings'][':offeringId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCourseMappingsOfferingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['course-mappings'][':offeringId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['course-mappings'][':offeringId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['course-mappings'][':offeringId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['course-mappings'][':offeringId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCourseMappingsOfferingIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCourseMappingsOfferingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['course-mappings'][':offeringId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCourseMappingsOfferingIdExternalCourseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCourseMappingsOfferingIdExternalCourseIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCourseMappingsOfferingIdExternalCourseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCourseMappingsOfferingIdExternalCourseIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCoursesQueryKey() {
  return ['courses', '/courses'] as const
}

export function getCoursesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCoursesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.courses.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCourses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>
          >,
          ReturnType<typeof getCoursesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCoursesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCoursesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.courses.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCoursesContentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.courses)[':contentId']['$get']>>,
) {
  return ['courses', '/courses/:contentId', toValue(args)] as const
}

export function getCoursesContentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.courses)[':contentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCoursesContentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.courses[':contentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCoursesContentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.courses)[':contentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCoursesContentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCoursesContentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCoursesContentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.courses[':contentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCoursesContentIdActivationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.courses)[':contentId']['activations']['$get']>
  >,
) {
  return ['courses', '/courses/:contentId/activations', toValue(args)] as const
}

export function getCoursesContentIdActivationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.courses)[':contentId']['activations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCoursesContentIdActivationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.courses[':contentId'].activations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCoursesContentIdActivations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.courses)[':contentId']['activations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.courses)[':contentId']['activations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.courses)[':contentId']['activations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.courses)[':contentId']['activations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCoursesContentIdActivationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCoursesContentIdActivationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.courses[':contentId'].activations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCoursesContentIdMetadataCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCoursesContentIdMetadataCategoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutCoursesContentIdMetadataLevel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCoursesContentIdMetadataLevelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutCoursesContentIdMetadataTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCoursesContentIdMetadataTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutCoursesContentIdMetadataTopic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCoursesContentIdMetadataTopicMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCoursesContentIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.courses)[':contentId']['permissions']['$get']>
  >,
) {
  return ['courses', '/courses/:contentId/permissions', toValue(args)] as const
}

export function getCoursesContentIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.courses)[':contentId']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCoursesContentIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.courses[':contentId'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCoursesContentIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.courses)[':contentId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.courses)[':contentId']['permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.courses)[':contentId']['permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.courses)[':contentId']['permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCoursesContentIdPermissionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCoursesContentIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.courses[':contentId'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCoursesRootContentIdPermissionsUserEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCoursesRootContentIdPermissionsUserEmailMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfferingsQueryKey() {
  return ['offerings', '/offerings'] as const
}

export function getOfferingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOfferingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOfferings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>
          >,
          ReturnType<typeof getOfferingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOfferingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOfferingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOfferings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.offerings.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOfferingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfferingsCurrentQueryKey() {
  return ['offerings', '/offerings/current'] as const
}

export function getOfferingsCurrentQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOfferingsCurrentQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings.current.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>
            >
          >,
          ReturnType<typeof getOfferingsCurrentQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsCurrentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOfferingsCurrentQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings.current.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsFutureQueryKey() {
  return ['offerings', '/offerings/future'] as const
}

export function getOfferingsFutureQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOfferingsFutureQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings.future.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOfferingsFuture<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>
            >
          >,
          ReturnType<typeof getOfferingsFutureQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsFutureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOfferingsFutureQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings.future.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsInfoTextPatternQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.offerings.info)[':textPattern']['$get']>>,
) {
  return ['offerings', '/offerings/info/:textPattern', toValue(args)] as const
}

export function getOfferingsInfoTextPatternQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.offerings.info)[':textPattern']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsInfoTextPatternQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings.info[':textPattern'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsInfoTextPattern<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings.info)[':textPattern']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.offerings.info)[':textPattern']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings.info)[':textPattern']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings.info)[':textPattern']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOfferingsInfoTextPatternQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsInfoTextPatternQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings.info[':textPattern'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsPastQueryKey() {
  return ['offerings', '/offerings/past'] as const
}

export function getOfferingsPastQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOfferingsPastQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings.past.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOfferingsPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
          >,
          ReturnType<typeof getOfferingsPastQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsPastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOfferingsPastQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings.past.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offerings.summary.$get>>,
) {
  return ['offerings', '/offerings/summary', toValue(args)] as const
}

export function getOfferingsSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offerings.summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offerings.summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>
            >
          >,
          ReturnType<typeof getOfferingsSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.offerings)[':offeringId']['$get']>>,
) {
  return ['offerings', '/offerings/:offeringId', toValue(args)] as const
}

export function getOfferingsOfferingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.offerings)[':offeringId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.offerings)[':offeringId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOfferingsOfferingIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOfferingsOfferingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchOfferingsOfferingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchOfferingsOfferingIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdActivitiesOpenresponseQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']>
  >,
) {
  return ['offerings', '/offerings/:offeringId/activities/openresponse', toValue(args)] as const
}

export function getOfferingsOfferingIdActivitiesOpenresponseQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdActivitiesOpenresponseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].activities.openresponse.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdActivitiesOpenresponse<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdActivitiesOpenresponseQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdActivitiesOpenresponseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].activities.openresponse.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
    >
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/analytics/activities/responses',
    toValue(args),
  ] as const
}

export function getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.activities.responses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsActivitiesResponses<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics.activities.responses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
    >
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/analytics/channels/:channelId/comments',
    toValue(args),
  ] as const
}

export function getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.channels[':channelId'].comments.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsChannelsChannelIdComments<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics.channels[':channelId'].comments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
    >
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/analytics/channels/:channelId/posts',
    toValue(args),
  ] as const
}

export function getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.channels[':channelId'].posts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsChannelsChannelIdPosts<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics.channels[':channelId'].posts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
    >
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/analytics/channels/:channelId/replies',
    toValue(args),
  ] as const
}

export function getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.channels[':channelId'].replies.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsChannelsChannelIdReplies<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics.channels[':channelId'].replies.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsLearnersProgressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
    >
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/learners-progress', toValue(args)] as const
}

export function getOfferingsOfferingIdAnalyticsLearnersProgressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdAnalyticsLearnersProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics['learners-progress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsLearnersProgress<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdAnalyticsLearnersProgressQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdAnalyticsLearnersProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics['learners-progress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
    >
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/marks/assignments', toValue(args)] as const
}

export function getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.marks.assignments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsMarksAssignments<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics.marks.assignments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsMarksQuizzesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
    >
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/marks/quizzes', toValue(args)] as const
}

export function getOfferingsOfferingIdAnalyticsMarksQuizzesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdAnalyticsMarksQuizzesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.marks.quizzes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsMarksQuizzes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdAnalyticsMarksQuizzesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdAnalyticsMarksQuizzesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics.marks.quizzes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsPulsesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/pulses', toValue(args)] as const
}

export function getOfferingsOfferingIdAnalyticsPulsesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdAnalyticsPulsesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.pulses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsPulses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdAnalyticsPulsesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdAnalyticsPulsesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics.pulses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsPulsesResponsesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
    >
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/pulses/responses', toValue(args)] as const
}

export function getOfferingsOfferingIdAnalyticsPulsesResponsesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdAnalyticsPulsesResponsesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.pulses.responses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsPulsesResponses<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdAnalyticsPulsesResponsesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdAnalyticsPulsesResponsesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics.pulses.responses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
    >
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/analytics/pulses/:pulseId/responses',
    toValue(args),
  ] as const
}

export function getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.pulses[':pulseId'].responses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsPulsesPulseIdResponses<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics.pulses[':pulseId'].responses.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsSocialNotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']>
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/social-notes', toValue(args)] as const
}

export function getOfferingsOfferingIdAnalyticsSocialNotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdAnalyticsSocialNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics['social-notes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsSocialNotes<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdAnalyticsSocialNotesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdAnalyticsSocialNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics['social-notes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
    >
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/analytics/submissions/assignments',
    toValue(args),
  ] as const
}

export function getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.submissions.assignments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsSubmissionsAssignments<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics.submissions.assignments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
    >
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/analytics/submissions/open-response/:assessmentId',
    toValue(args),
  ] as const
}

export function getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.submissions['open-response'][
          ':assessmentId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics.submissions['open-response'][
            ':assessmentId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
    >
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/analytics/submissions/:userEmail/assignments/:assessmentId',
    toValue(args),
  ] as const
}

export function getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics.submissions[':userEmail'].assignments[
          ':assessmentId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics.submissions[':userEmail'].assignments[
            ':assessmentId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAnalyticsUnitReactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
    >
  >,
) {
  return ['offerings', '/offerings/:offeringId/analytics/unit-reactions', toValue(args)] as const
}

export function getOfferingsOfferingIdAnalyticsUnitReactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdAnalyticsUnitReactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].analytics['unit-reactions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdAnalyticsUnitReactions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdAnalyticsUnitReactionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdAnalyticsUnitReactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].analytics['unit-reactions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdAssessmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['assessments']['$get']>
  >,
) {
  return ['offerings', '/offerings/:offeringId/assessments', toValue(args)] as const
}

export function getOfferingsOfferingIdAssessmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['assessments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdAssessmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].assessments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdAssessments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['assessments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['assessments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['assessments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['assessments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOfferingsOfferingIdAssessmentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdAssessmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].assessments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchOfferingsOfferingIdAssessmentsAssessmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchOfferingsOfferingIdAssessmentsAssessmentIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdBadgesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['badges']['$get']>
  >,
) {
  return ['offerings', '/offerings/:offeringId/badges', toValue(args)] as const
}

export function getOfferingsOfferingIdBadgesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['badges']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdBadgesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].badges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdBadges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['badges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['badges']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['badges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['badges']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOfferingsOfferingIdBadgesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdBadgesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].badges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$get']>
  >,
) {
  return ['offerings', '/offerings/:offeringId/channels', toValue(args)] as const
}

export function getOfferingsOfferingIdChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOfferingsOfferingIdChannelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOfferingsOfferingIdChannels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOfferingsOfferingIdChannelsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchOfferingsOfferingIdChannelsChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchOfferingsOfferingIdChannelsChannelIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdChannelsChannelIdLearnersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
    >
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/channels/:channelId/learners',
    toValue(args),
  ] as const
}

export function getOfferingsOfferingIdChannelsChannelIdLearnersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdChannelsChannelIdLearnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].channels[':channelId'].learners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdChannelsChannelIdLearners<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdChannelsChannelIdLearnersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdChannelsChannelIdLearnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].channels[':channelId'].learners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOfferingsOfferingIdChannelsChannelIdLearners<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOfferingsOfferingIdChannelsChannelIdLearnersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOfferingsOfferingIdChannelsChannelIdLearners<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOfferingsOfferingIdChannelsChannelIdLearnersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$get']>
  >,
) {
  return ['offerings', '/offerings/:offeringId/groups', toValue(args)] as const
}

export function getOfferingsOfferingIdGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOfferingsOfferingIdGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOfferingsOfferingIdGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOfferingsOfferingIdGroupsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdGroupsGroupIdLearnersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
    >
  >,
) {
  return ['offerings', '/offerings/:offeringId/groups/:groupId/learners', toValue(args)] as const
}

export function getOfferingsOfferingIdGroupsGroupIdLearnersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdGroupsGroupIdLearnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].groups[':groupId'].learners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdGroupsGroupIdLearners<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdGroupsGroupIdLearnersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdGroupsGroupIdLearnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].groups[':groupId'].learners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOfferingsOfferingIdGroupsGroupIdLearners<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOfferingsOfferingIdGroupsGroupIdLearnersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdLearnersPendingSubmissionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
    >
  >,
) {
  return ['offerings', '/offerings/:offeringId/learners/pending-submission', toValue(args)] as const
}

export function getOfferingsOfferingIdLearnersPendingSubmissionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdLearnersPendingSubmissionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].learners['pending-submission'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdLearnersPendingSubmission<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdLearnersPendingSubmissionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdLearnersPendingSubmissionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].learners['pending-submission'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOfferingsOfferingIdMetadataCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOfferingsOfferingIdMetadataCategoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutOfferingsOfferingIdMetadataLevel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOfferingsOfferingIdMetadataLevelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutOfferingsOfferingIdMetadataTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOfferingsOfferingIdMetadataTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutOfferingsOfferingIdMetadataTopic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOfferingsOfferingIdMetadataTopicMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['users']['$get']>
  >,
) {
  return ['offerings', '/offerings/:offeringId/users', toValue(args)] as const
}

export function getOfferingsOfferingIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offerings)[':offeringId']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offerings)[':offeringId']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOfferingsOfferingIdUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOfferingsOfferingIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOfferingsOfferingIdUsersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdUsersMarkerEmailMarksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
    >
  >,
) {
  return ['offerings', '/offerings/:offeringId/users/:markerEmail/marks', toValue(args)] as const
}

export function getOfferingsOfferingIdUsersMarkerEmailMarksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOfferingsOfferingIdUsersMarkerEmailMarksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].users[':markerEmail'].marks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOfferingsOfferingIdUsersMarkerEmailMarks<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdUsersMarkerEmailMarksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOfferingsOfferingIdUsersMarkerEmailMarksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].users[':markerEmail'].marks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOfferingsOfferingIdUsersMarkerEmailMarks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOfferingsOfferingIdUsersMarkerEmailMarksMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOfferingsOfferingIdUsersMarkerEmailMarks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOfferingsOfferingIdUsersMarkerEmailMarksMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOfferingsOfferingIdUsersUserEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOfferingsOfferingIdUsersUserEmailMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostOfferingsOfferingIdUsersUserEmailBadgesAward<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOfferingsOfferingIdUsersUserEmailBadgesAwardMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
    >
  >,
) {
  return [
    'offerings',
    '/offerings/:offeringId/users/:userEmail/submissions/open-response',
    toValue(args),
  ] as const
}

export function getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offerings[':offeringId'].users[':userEmail'].submissions['open-response'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.offerings[':offeringId'].users[':userEmail'].submissions['open-response'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrgQueryKey() {
  return ['org', '/org'] as const
}

export function getOrgQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrg<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
          ReturnType<typeof getOrgQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersAllProgressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.all.progress.$get>>,
) {
  return ['users', '/users/all/progress', toValue(args)] as const
}

export function getUsersAllProgressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.all.progress.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersAllProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.all.progress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersAllProgress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.all.progress.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>
            >
          >,
          ReturnType<typeof getUsersAllProgressQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersAllProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersAllProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.all.progress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userEmail']['$get']>>,
) {
  return ['users', '/users/:userEmail', toValue(args)] as const
}

export function getUsersUserEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userEmail']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userEmail'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userEmail']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserEmailQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userEmail'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchUsersUserEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserEmailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserEmailBadgesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userEmail']['badges']['$get']>>,
) {
  return ['users', '/users/:userEmail/badges', toValue(args)] as const
}

export function getUsersUserEmailBadgesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userEmail']['badges']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserEmailBadgesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userEmail'].badges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserEmailBadges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userEmail']['badges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userEmail']['badges']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userEmail']['badges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userEmail']['badges']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserEmailBadgesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserEmailBadgesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userEmail'].badges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsersUserEmailInviteEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserEmailInviteEmailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserEmailOfferingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userEmail']['offerings']['$get']>
  >,
) {
  return ['users', '/users/:userEmail/offerings', toValue(args)] as const
}

export function getUsersUserEmailOfferingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userEmail']['offerings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserEmailOfferingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userEmail'].offerings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserEmailOfferings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userEmail']['offerings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userEmail']['offerings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserEmailOfferingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserEmailOfferingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userEmail'].offerings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsersUserEmailOfferings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserEmailOfferingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserEmailOfferingsOfferingIdProgressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
    >
  >,
) {
  return ['users', '/users/:userEmail/offerings/:offeringId/progress', toValue(args)] as const
}

export function getUsersUserEmailOfferingsOfferingIdProgressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserEmailOfferingsOfferingIdProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userEmail'].offerings[':offeringId'].progress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserEmailOfferingsOfferingIdProgress<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getUsersUserEmailOfferingsOfferingIdProgressQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserEmailOfferingsOfferingIdProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userEmail'].offerings[':offeringId'].progress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsersUserEmailPermissionsPermissionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserEmailPermissionsPermissionNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserEmailProgressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userEmail']['progress']['$get']>>,
) {
  return ['users', '/users/:userEmail/progress', toValue(args)] as const
}

export function getUsersUserEmailProgressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userEmail']['progress']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserEmailProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userEmail'].progress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserEmailProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userEmail']['progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userEmail']['progress']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userEmail']['progress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userEmail']['progress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserEmailProgressQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserEmailProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userEmail'].progress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutUsersUserEmailSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserEmailSuspendMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchUsersUserEmailTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserEmailTransferMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

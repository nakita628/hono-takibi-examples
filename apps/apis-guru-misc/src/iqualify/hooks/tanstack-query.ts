import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCourseMappingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCourseMappingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCourseMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['course-mappings']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCourseMappingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCourseMappingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCourseMappingsExternalcourseExternalCourseIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCourseMappingsExternalcourseExternalCourseIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCourseMappingsExternalcourseExternalCourseId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCourseMappingsExternalcourseExternalCourseIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client)['course-mappings'][':offeringId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCourseMappingsOfferingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCourseMappingsOfferingIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCourseMappingsOfferingId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCourseMappingsOfferingIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function useCourses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCoursesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCoursesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCourses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.courses.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCoursesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCoursesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCoursesContentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.courses)[':contentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCoursesContentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCoursesContentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCoursesContentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.courses)[':contentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.courses)[':contentId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCoursesContentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCoursesContentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.courses)[':contentId']['activations']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCoursesContentIdActivationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCoursesContentIdActivationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCoursesContentIdActivations<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCoursesContentIdActivationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.courses)[':contentId']['permissions']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCoursesContentIdPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCoursesContentIdPermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCoursesContentIdPermissions<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCoursesContentIdPermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function useOfferings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOfferingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOfferingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOfferings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOfferingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOfferingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.offerings.$post>,
        TOnMutateResult
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

export function useOfferingsCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfferingsCurrentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOfferingsCurrentQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOfferingsCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.offerings.current.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfferingsCurrentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOfferingsCurrentQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useOfferingsFuture<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOfferingsFutureQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOfferingsFutureQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOfferingsFuture<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.future.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOfferingsFutureQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOfferingsFutureQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.offerings.info)[':textPattern']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsInfoTextPatternQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsInfoTextPatternQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsInfoTextPattern<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsInfoTextPatternQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useOfferingsPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOfferingsPastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOfferingsPastQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOfferingsPast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.past.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOfferingsPastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOfferingsPastQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useOfferingsSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.offerings.summary.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfferingsSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOfferingsSummaryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOfferingsSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.offerings.summary.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.offerings.summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOfferingsSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOfferingsSummaryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useOfferingsOfferingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOfferingsOfferingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.offerings)[':offeringId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOfferingsOfferingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdActivitiesOpenresponseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdActivitiesOpenresponseQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdActivitiesOpenresponse<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdActivitiesOpenresponseQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsActivitiesResponses<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsActivitiesResponsesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsChannelsChannelIdComments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsChannelsChannelIdPosts<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsChannelsChannelIdReplies<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdAnalyticsLearnersProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsLearnersProgressQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsLearnersProgress<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsLearnersProgressQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsMarksAssignments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsMarksAssignmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdAnalyticsMarksQuizzesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsMarksQuizzesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsMarksQuizzes<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsMarksQuizzesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsPulsesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsPulses<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsPulsesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdAnalyticsPulsesResponsesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsPulsesResponsesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsPulsesResponses<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsPulsesResponsesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsPulsesPulseIdResponses<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdAnalyticsSocialNotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsSocialNotesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsSocialNotes<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsSocialNotesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsSubmissionsAssignments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdAnalyticsUnitReactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAnalyticsUnitReactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAnalyticsUnitReactions<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAnalyticsUnitReactionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.offerings)[':offeringId']['assessments']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdAssessmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdAssessmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdAssessments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdAssessmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.offerings)[':offeringId']['badges']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdBadgesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdBadgesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdBadges<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdBadgesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdChannelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdChannels<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdChannelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdChannelsChannelIdLearnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdChannelsChannelIdLearnersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdChannelsChannelIdLearners<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdChannelsChannelIdLearnersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdGroups<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdGroupsGroupIdLearnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdGroupsGroupIdLearnersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdGroupsGroupIdLearners<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdGroupsGroupIdLearnersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdLearnersPendingSubmissionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdLearnersPendingSubmissionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdLearnersPendingSubmission<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdLearnersPendingSubmissionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.offerings)[':offeringId']['users']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdUsers<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdUsersMarkerEmailMarksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdUsersMarkerEmailMarksQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdUsersMarkerEmailMarks<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdUsersMarkerEmailMarksQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useOrg<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOrgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrgQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrg<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOrgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrgQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
        TOnMutateResult
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

export function useUsersAllProgress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.all.progress.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersAllProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersAllProgressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersAllProgress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.all.progress.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.all.progress.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersAllProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersAllProgressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersUserEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userEmail']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserEmailQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userEmail']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserEmailQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userEmail']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':userEmail']['$patch']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.users)[':userEmail']['badges']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getUsersUserEmailBadgesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserEmailBadgesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserEmailBadges<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserEmailBadgesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.users)[':userEmail']['offerings']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getUsersUserEmailOfferingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserEmailOfferingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserEmailOfferings<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserEmailOfferingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getUsersUserEmailOfferingsOfferingIdProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserEmailOfferingsOfferingIdProgressQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserEmailOfferingsOfferingIdProgress<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserEmailOfferingsOfferingIdProgressQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.users)[':userEmail']['progress']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getUsersUserEmailProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserEmailProgressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserEmailProgress<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserEmailProgressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

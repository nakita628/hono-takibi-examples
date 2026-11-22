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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1CoursesQueryKey(args: InferRequestType<typeof client.v1.courses.$get>) {
  return ['v1', '/v1/courses', args] as const
}

export function getV1CoursesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.courses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.courses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.courses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CoursesQueryKey>
  >({
    queryKey: getV1CoursesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Courses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.courses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.courses.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.courses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CoursesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Courses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.courses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.courses.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.courses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CoursesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1CoursesMutationKey() {
  return ['v1', '/v1/courses', 'POST'] as const
}

export function getPostV1CoursesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.courses.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.courses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CoursesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.courses.$post>) {
      return parseResponse(client.v1.courses.$post(args, options))
    },
  })
}

export function usePostV1Courses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.courses.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.courses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CoursesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1CoursesCourseIdAliasesQueryKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/aliases', args] as const
}

export function getV1CoursesCourseIdAliasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdAliasesQueryKey>
  >({
    queryKey: getV1CoursesCourseIdAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].aliases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdAliasesQueryKey>
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
      ...getV1CoursesCourseIdAliasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdAliasesQueryKey>
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
      ...getV1CoursesCourseIdAliasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1CoursesCourseIdAliasesMutationKey() {
  return ['v1', '/v1/courses/:courseId/aliases', 'POST'] as const
}

export function getPostV1CoursesCourseIdAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['aliases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CoursesCourseIdAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$post']>,
    ) {
      return parseResponse(client.v1.courses[':courseId'].aliases.$post(args, options))
    },
  })
}

export function usePostV1CoursesCourseIdAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['aliases']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CoursesCourseIdAliasesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1CoursesCourseIdAliasesAliasMutationKey() {
  return ['v1', '/v1/courses/:courseId/aliases/:alias', 'DELETE'] as const
}

export function getDeleteV1CoursesCourseIdAliasesAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['aliases'][':alias']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['aliases'][':alias']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CoursesCourseIdAliasesAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['aliases'][':alias']['$delete']
      >,
    ) {
      return parseResponse(client.v1.courses[':courseId'].aliases[':alias'].$delete(args, options))
    },
  })
}

export function useDeleteV1CoursesCourseIdAliasesAlias<
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
                ReturnType<(typeof client.v1.courses)[':courseId']['aliases'][':alias']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['aliases'][':alias']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1CoursesCourseIdAliasesAliasMutationOptions<
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

export function getV1CoursesCourseIdAnnouncementsQueryKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/announcements', args] as const
}

export function getV1CoursesCourseIdAnnouncementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdAnnouncementsQueryKey>
  >({
    queryKey: getV1CoursesCourseIdAnnouncementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].announcements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdAnnouncements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdAnnouncementsQueryKey>
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
      ...getV1CoursesCourseIdAnnouncementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdAnnouncements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdAnnouncementsQueryKey>
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
      ...getV1CoursesCourseIdAnnouncementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1CoursesCourseIdAnnouncementsMutationKey() {
  return ['v1', '/v1/courses/:courseId/announcements', 'POST'] as const
}

export function getPostV1CoursesCourseIdAnnouncementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CoursesCourseIdAnnouncementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$post']>,
    ) {
      return parseResponse(client.v1.courses[':courseId'].announcements.$post(args, options))
    },
  })
}

export function usePostV1CoursesCourseIdAnnouncements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CoursesCourseIdAnnouncementsMutationOptions<
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

export function getV1CoursesCourseIdAnnouncementsIdQueryKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/announcements/:id', args] as const
}

export function getV1CoursesCourseIdAnnouncementsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdAnnouncementsIdQueryKey>
  >({
    queryKey: getV1CoursesCourseIdAnnouncementsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].announcements[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdAnnouncementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdAnnouncementsIdQueryKey>
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
      ...getV1CoursesCourseIdAnnouncementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdAnnouncementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdAnnouncementsIdQueryKey>
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
      ...getV1CoursesCourseIdAnnouncementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1CoursesCourseIdAnnouncementsIdMutationKey() {
  return ['v1', '/v1/courses/:courseId/announcements/:id', 'DELETE'] as const
}

export function getDeleteV1CoursesCourseIdAnnouncementsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CoursesCourseIdAnnouncementsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['announcements'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.courses[':courseId'].announcements[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1CoursesCourseIdAnnouncementsId<
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
                  (typeof client.v1.courses)[':courseId']['announcements'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.courses)[':courseId']['announcements'][':id']['$delete']
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
  const mutationDefaults = getDeleteV1CoursesCourseIdAnnouncementsIdMutationOptions<
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

export function getPatchV1CoursesCourseIdAnnouncementsIdMutationKey() {
  return ['v1', '/v1/courses/:courseId/announcements/:id', 'PATCH'] as const
}

export function getPatchV1CoursesCourseIdAnnouncementsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1CoursesCourseIdAnnouncementsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['announcements'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.courses[':courseId'].announcements[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1CoursesCourseIdAnnouncementsId<
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
                  (typeof client.v1.courses)[':courseId']['announcements'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1CoursesCourseIdAnnouncementsIdMutationOptions<
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

export function getPostV1CoursesCourseIdAnnouncementsIdModifyAssigneesMutationKey() {
  return ['v1', '/v1/courses/:courseId/announcements/:id:modifyAssignees', 'POST'] as const
}

export function getPostV1CoursesCourseIdAnnouncementsIdModifyAssigneesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['announcements'][':id:modifyAssignees']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['announcements'][':id:modifyAssignees']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CoursesCourseIdAnnouncementsIdModifyAssigneesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['announcements'][':id:modifyAssignees']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.courses[':courseId'].announcements[':id:modifyAssignees'].$post(args, options),
      )
    },
  })
}

export function usePostV1CoursesCourseIdAnnouncementsIdModifyAssignees<
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
                  (typeof client.v1.courses)[':courseId']['announcements'][':id:modifyAssignees']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.courses)[':courseId']['announcements'][':id:modifyAssignees']['$post']
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
  const mutationDefaults = getPostV1CoursesCourseIdAnnouncementsIdModifyAssigneesMutationOptions<
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

export function getV1CoursesCourseIdCourseWorkQueryKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/courseWork', args] as const
}

export function getV1CoursesCourseIdCourseWorkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdCourseWorkQueryKey>
  >({
    queryKey: getV1CoursesCourseIdCourseWorkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWork.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdCourseWork<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdCourseWorkQueryKey>
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
      ...getV1CoursesCourseIdCourseWorkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdCourseWork<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdCourseWorkQueryKey>
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
      ...getV1CoursesCourseIdCourseWorkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1CoursesCourseIdCourseWorkMutationKey() {
  return ['v1', '/v1/courses/:courseId/courseWork', 'POST'] as const
}

export function getPostV1CoursesCourseIdCourseWorkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CoursesCourseIdCourseWorkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$post']>,
    ) {
      return parseResponse(client.v1.courses[':courseId'].courseWork.$post(args, options))
    },
  })
}

export function usePostV1CoursesCourseIdCourseWork<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CoursesCourseIdCourseWorkMutationOptions<
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

export function getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
  >,
) {
  return ['v1', '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions', args] as const
}

export function getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsQueryKey>
  >({
    queryKey: getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsQueryKey>
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
      ...getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsQueryKey>
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
      ...getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
  >,
) {
  return [
    'v1',
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id',
    args,
  ] as const
}

export function getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdQueryKey>
  >({
    queryKey: getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[':id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdQueryKey>
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
      ...getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdQueryKey>
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
      ...getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdMutationKey() {
  return [
    'v1',
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id',
    'PATCH',
  ] as const
}

export function getPatchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[':id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsId<
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
                  (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$patch']
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
    getPatchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdMutationOptions<
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

export function getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachmentsMutationKey() {
  return [
    'v1',
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id:modifyAttachments',
    'POST',
  ] as const
}

export function getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:modifyAttachments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:modifyAttachments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:modifyAttachments']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[
          ':id:modifyAttachments'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachments<
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
                  (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:modifyAttachments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:modifyAttachments']['$post']
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
    getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachmentsMutationOptions<
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

export function getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaimMutationKey() {
  return [
    'v1',
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id:reclaim',
    'POST',
  ] as const
}

export function getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:reclaim']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:reclaim']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaimMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:reclaim']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[
          ':id:reclaim'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaim<
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
                  (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:reclaim']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:reclaim']['$post']
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
    getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaimMutationOptions<
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

export function getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturnMutationKey() {
  return [
    'v1',
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id:return',
    'POST',
  ] as const
}

export function getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:return']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:return']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:return']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[
          ':id:return'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturn<
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
                  (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:return']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:return']['$post']
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
    getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturnMutationOptions<
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

export function getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnInMutationKey() {
  return [
    'v1',
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id:turnIn',
    'POST',
  ] as const
}

export function getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:turnIn']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:turnIn']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnInMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:turnIn']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[
          ':id:turnIn'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnIn<
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
                  (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:turnIn']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:turnIn']['$post']
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
    getPostV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnInMutationOptions<
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

export function getV1CoursesCourseIdCourseWorkIdQueryKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/courseWork/:id', args] as const
}

export function getV1CoursesCourseIdCourseWorkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdCourseWorkIdQueryKey>
  >({
    queryKey: getV1CoursesCourseIdCourseWorkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWork[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdCourseWorkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdCourseWorkIdQueryKey>
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
      ...getV1CoursesCourseIdCourseWorkIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdCourseWorkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdCourseWorkIdQueryKey>
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
      ...getV1CoursesCourseIdCourseWorkIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1CoursesCourseIdCourseWorkIdMutationKey() {
  return ['v1', '/v1/courses/:courseId/courseWork/:id', 'DELETE'] as const
}

export function getDeleteV1CoursesCourseIdCourseWorkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CoursesCourseIdCourseWorkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['courseWork'][':id']['$delete']
      >,
    ) {
      return parseResponse(client.v1.courses[':courseId'].courseWork[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1CoursesCourseIdCourseWorkId<
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
                ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1CoursesCourseIdCourseWorkIdMutationOptions<
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

export function getPatchV1CoursesCourseIdCourseWorkIdMutationKey() {
  return ['v1', '/v1/courses/:courseId/courseWork/:id', 'PATCH'] as const
}

export function getPatchV1CoursesCourseIdCourseWorkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1CoursesCourseIdCourseWorkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['courseWork'][':id']['$patch']
      >,
    ) {
      return parseResponse(client.v1.courses[':courseId'].courseWork[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1CoursesCourseIdCourseWorkId<
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
                ReturnType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1CoursesCourseIdCourseWorkIdMutationOptions<
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

export function getPostV1CoursesCourseIdCourseWorkIdModifyAssigneesMutationKey() {
  return ['v1', '/v1/courses/:courseId/courseWork/:id:modifyAssignees', 'POST'] as const
}

export function getPostV1CoursesCourseIdCourseWorkIdModifyAssigneesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWork'][':id:modifyAssignees']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWork'][':id:modifyAssignees']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CoursesCourseIdCourseWorkIdModifyAssigneesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['courseWork'][':id:modifyAssignees']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWork[':id:modifyAssignees'].$post(args, options),
      )
    },
  })
}

export function usePostV1CoursesCourseIdCourseWorkIdModifyAssignees<
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
                  (typeof client.v1.courses)[':courseId']['courseWork'][':id:modifyAssignees']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.courses)[':courseId']['courseWork'][':id:modifyAssignees']['$post']
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
  const mutationDefaults = getPostV1CoursesCourseIdCourseWorkIdModifyAssigneesMutationOptions<
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

export function getV1CoursesCourseIdCourseWorkMaterialsQueryKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/courseWorkMaterials', args] as const
}

export function getV1CoursesCourseIdCourseWorkMaterialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdCourseWorkMaterialsQueryKey>
  >({
    queryKey: getV1CoursesCourseIdCourseWorkMaterialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWorkMaterials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdCourseWorkMaterials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdCourseWorkMaterialsQueryKey>
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
      ...getV1CoursesCourseIdCourseWorkMaterialsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdCourseWorkMaterials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdCourseWorkMaterialsQueryKey>
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
      ...getV1CoursesCourseIdCourseWorkMaterialsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1CoursesCourseIdCourseWorkMaterialsMutationKey() {
  return ['v1', '/v1/courses/:courseId/courseWorkMaterials', 'POST'] as const
}

export function getPostV1CoursesCourseIdCourseWorkMaterialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CoursesCourseIdCourseWorkMaterialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$post']
      >,
    ) {
      return parseResponse(client.v1.courses[':courseId'].courseWorkMaterials.$post(args, options))
    },
  })
}

export function usePostV1CoursesCourseIdCourseWorkMaterials<
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
                ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CoursesCourseIdCourseWorkMaterialsMutationOptions<
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

export function getV1CoursesCourseIdCourseWorkMaterialsIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
  >,
) {
  return ['v1', '/v1/courses/:courseId/courseWorkMaterials/:id', args] as const
}

export function getV1CoursesCourseIdCourseWorkMaterialsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdCourseWorkMaterialsIdQueryKey>
  >({
    queryKey: getV1CoursesCourseIdCourseWorkMaterialsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWorkMaterials[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdCourseWorkMaterialsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdCourseWorkMaterialsIdQueryKey>
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
      ...getV1CoursesCourseIdCourseWorkMaterialsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdCourseWorkMaterialsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdCourseWorkMaterialsIdQueryKey>
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
      ...getV1CoursesCourseIdCourseWorkMaterialsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1CoursesCourseIdCourseWorkMaterialsIdMutationKey() {
  return ['v1', '/v1/courses/:courseId/courseWorkMaterials/:id', 'DELETE'] as const
}

export function getDeleteV1CoursesCourseIdCourseWorkMaterialsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CoursesCourseIdCourseWorkMaterialsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWorkMaterials[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1CoursesCourseIdCourseWorkMaterialsId<
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
                  (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$delete']
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
  const mutationDefaults = getDeleteV1CoursesCourseIdCourseWorkMaterialsIdMutationOptions<
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

export function getPatchV1CoursesCourseIdCourseWorkMaterialsIdMutationKey() {
  return ['v1', '/v1/courses/:courseId/courseWorkMaterials/:id', 'PATCH'] as const
}

export function getPatchV1CoursesCourseIdCourseWorkMaterialsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1CoursesCourseIdCourseWorkMaterialsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.courses[':courseId'].courseWorkMaterials[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1CoursesCourseIdCourseWorkMaterialsId<
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
                  (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$patch']
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
  const mutationDefaults = getPatchV1CoursesCourseIdCourseWorkMaterialsIdMutationOptions<
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

export function getV1CoursesCourseIdStudentsQueryKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/students', args] as const
}

export function getV1CoursesCourseIdStudentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdStudentsQueryKey>
  >({
    queryKey: getV1CoursesCourseIdStudentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].students.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdStudentsQueryKey>
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
      ...getV1CoursesCourseIdStudentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdStudents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdStudentsQueryKey>
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
      ...getV1CoursesCourseIdStudentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1CoursesCourseIdStudentsMutationKey() {
  return ['v1', '/v1/courses/:courseId/students', 'POST'] as const
}

export function getPostV1CoursesCourseIdStudentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CoursesCourseIdStudentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$post']>,
    ) {
      return parseResponse(client.v1.courses[':courseId'].students.$post(args, options))
    },
  })
}

export function usePostV1CoursesCourseIdStudents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CoursesCourseIdStudentsMutationOptions<TError, TOnMutateResult>(
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

export function getV1CoursesCourseIdStudentsUserIdQueryKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/students/:userId', args] as const
}

export function getV1CoursesCourseIdStudentsUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdStudentsUserIdQueryKey>
  >({
    queryKey: getV1CoursesCourseIdStudentsUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].students[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdStudentsUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdStudentsUserIdQueryKey>
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
      ...getV1CoursesCourseIdStudentsUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdStudentsUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdStudentsUserIdQueryKey>
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
      ...getV1CoursesCourseIdStudentsUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1CoursesCourseIdStudentsUserIdMutationKey() {
  return ['v1', '/v1/courses/:courseId/students/:userId', 'DELETE'] as const
}

export function getDeleteV1CoursesCourseIdStudentsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CoursesCourseIdStudentsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['students'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.courses[':courseId'].students[':userId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1CoursesCourseIdStudentsUserId<
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
                  (typeof client.v1.courses)[':courseId']['students'][':userId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1CoursesCourseIdStudentsUserIdMutationOptions<
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

export function getV1CoursesCourseIdTeachersQueryKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/teachers', args] as const
}

export function getV1CoursesCourseIdTeachersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdTeachersQueryKey>
  >({
    queryKey: getV1CoursesCourseIdTeachersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].teachers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdTeachersQueryKey>
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
      ...getV1CoursesCourseIdTeachersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdTeachers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdTeachersQueryKey>
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
      ...getV1CoursesCourseIdTeachersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1CoursesCourseIdTeachersMutationKey() {
  return ['v1', '/v1/courses/:courseId/teachers', 'POST'] as const
}

export function getPostV1CoursesCourseIdTeachersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CoursesCourseIdTeachersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$post']>,
    ) {
      return parseResponse(client.v1.courses[':courseId'].teachers.$post(args, options))
    },
  })
}

export function usePostV1CoursesCourseIdTeachers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CoursesCourseIdTeachersMutationOptions<TError, TOnMutateResult>(
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

export function getV1CoursesCourseIdTeachersUserIdQueryKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/teachers/:userId', args] as const
}

export function getV1CoursesCourseIdTeachersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdTeachersUserIdQueryKey>
  >({
    queryKey: getV1CoursesCourseIdTeachersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].teachers[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdTeachersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdTeachersUserIdQueryKey>
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
      ...getV1CoursesCourseIdTeachersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdTeachersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdTeachersUserIdQueryKey>
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
      ...getV1CoursesCourseIdTeachersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1CoursesCourseIdTeachersUserIdMutationKey() {
  return ['v1', '/v1/courses/:courseId/teachers/:userId', 'DELETE'] as const
}

export function getDeleteV1CoursesCourseIdTeachersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CoursesCourseIdTeachersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.courses)[':courseId']['teachers'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.courses[':courseId'].teachers[':userId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1CoursesCourseIdTeachersUserId<
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
                  (typeof client.v1.courses)[':courseId']['teachers'][':userId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1CoursesCourseIdTeachersUserIdMutationOptions<
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

export function getV1CoursesCourseIdTopicsQueryKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/topics', args] as const
}

export function getV1CoursesCourseIdTopicsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdTopicsQueryKey>
  >({
    queryKey: getV1CoursesCourseIdTopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].topics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdTopicsQueryKey>
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
      ...getV1CoursesCourseIdTopicsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdTopicsQueryKey>
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
      ...getV1CoursesCourseIdTopicsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1CoursesCourseIdTopicsMutationKey() {
  return ['v1', '/v1/courses/:courseId/topics', 'POST'] as const
}

export function getPostV1CoursesCourseIdTopicsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CoursesCourseIdTopicsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$post']>,
    ) {
      return parseResponse(client.v1.courses[':courseId'].topics.$post(args, options))
    },
  })
}

export function usePostV1CoursesCourseIdTopics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CoursesCourseIdTopicsMutationOptions<TError, TOnMutateResult>(
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

export function getV1CoursesCourseIdTopicsIdQueryKey(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>,
) {
  return ['v1', '/v1/courses/:courseId/topics/:id', args] as const
}

export function getV1CoursesCourseIdTopicsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesCourseIdTopicsIdQueryKey>
  >({
    queryKey: getV1CoursesCourseIdTopicsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':courseId'].topics[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CoursesCourseIdTopicsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdTopicsIdQueryKey>
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
      ...getV1CoursesCourseIdTopicsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CoursesCourseIdTopicsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesCourseIdTopicsIdQueryKey>
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
      ...getV1CoursesCourseIdTopicsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1CoursesCourseIdTopicsIdMutationKey() {
  return ['v1', '/v1/courses/:courseId/topics/:id', 'DELETE'] as const
}

export function getDeleteV1CoursesCourseIdTopicsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CoursesCourseIdTopicsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.courses[':courseId'].topics[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1CoursesCourseIdTopicsId<
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
                ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1CoursesCourseIdTopicsIdMutationOptions<
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

export function getPatchV1CoursesCourseIdTopicsIdMutationKey() {
  return ['v1', '/v1/courses/:courseId/topics/:id', 'PATCH'] as const
}

export function getPatchV1CoursesCourseIdTopicsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1CoursesCourseIdTopicsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$patch']>,
    ) {
      return parseResponse(client.v1.courses[':courseId'].topics[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1CoursesCourseIdTopicsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1CoursesCourseIdTopicsIdMutationOptions<
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

export function getV1CoursesIdQueryKey(
  args: InferRequestType<(typeof client.v1.courses)[':id']['$get']>,
) {
  return ['v1', '/v1/courses/:id', args] as const
}

export function getV1CoursesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CoursesIdQueryKey>
  >({
    queryKey: getV1CoursesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.courses[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1CoursesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CoursesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CoursesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.courses)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CoursesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CoursesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1CoursesIdMutationKey() {
  return ['v1', '/v1/courses/:id', 'PUT'] as const
}

export function getPutV1CoursesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CoursesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.courses)[':id']['$put']>) {
      return parseResponse(client.v1.courses[':id'].$put(args, options))
    },
  })
}

export function usePutV1CoursesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CoursesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1CoursesIdMutationKey() {
  return ['v1', '/v1/courses/:id', 'DELETE'] as const
}

export function getDeleteV1CoursesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CoursesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.courses)[':id']['$delete']>) {
      return parseResponse(client.v1.courses[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1CoursesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1CoursesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1CoursesIdMutationKey() {
  return ['v1', '/v1/courses/:id', 'PATCH'] as const
}

export function getPatchV1CoursesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.courses)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1CoursesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.courses)[':id']['$patch']>) {
      return parseResponse(client.v1.courses[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1CoursesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.courses)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.courses)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1CoursesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1InvitationsQueryKey(
  args: InferRequestType<typeof client.v1.invitations.$get>,
) {
  return ['v1', '/v1/invitations', args] as const
}

export function getV1InvitationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invitations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.invitations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invitations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1InvitationsQueryKey>
  >({
    queryKey: getV1InvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.invitations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Invitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.invitations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invitations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1InvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1InvitationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Invitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.invitations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invitations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1InvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1InvitationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1InvitationsMutationKey() {
  return ['v1', '/v1/invitations', 'POST'] as const
}

export function getPostV1InvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invitations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.invitations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InvitationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.invitations.$post>) {
      return parseResponse(client.v1.invitations.$post(args, options))
    },
  })
}

export function usePostV1Invitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invitations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.invitations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1InvitationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1InvitationsIdQueryKey(
  args: InferRequestType<(typeof client.v1.invitations)[':id']['$get']>,
) {
  return ['v1', '/v1/invitations/:id', args] as const
}

export function getV1InvitationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invitations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.invitations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invitations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InvitationsIdQueryKey>
  >({
    queryKey: getV1InvitationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.invitations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1InvitationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invitations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.invitations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invitations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InvitationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1InvitationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1InvitationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invitations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.invitations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invitations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1InvitationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1InvitationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1InvitationsIdMutationKey() {
  return ['v1', '/v1/invitations/:id', 'DELETE'] as const
}

export function getDeleteV1InvitationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invitations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.invitations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1InvitationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.invitations)[':id']['$delete']>) {
      return parseResponse(client.v1.invitations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1InvitationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.invitations)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.invitations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1InvitationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1InvitationsIdAcceptMutationKey() {
  return ['v1', '/v1/invitations/:id:accept', 'POST'] as const
}

export function getPostV1InvitationsIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invitations)[':id:accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.invitations)[':id:accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InvitationsIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.invitations)[':id:accept']['$post']>,
    ) {
      return parseResponse(client.v1.invitations[':id:accept'].$post(args, options))
    },
  })
}

export function usePostV1InvitationsIdAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.invitations)[':id:accept']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.invitations)[':id:accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1InvitationsIdAcceptMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1RegistrationsMutationKey() {
  return ['v1', '/v1/registrations', 'POST'] as const
}

export function getPostV1RegistrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.registrations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.registrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegistrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.registrations.$post>) {
      return parseResponse(client.v1.registrations.$post(args, options))
    },
  })
}

export function usePostV1Registrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.registrations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registrations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1RegistrationsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1RegistrationsRegistrationIdMutationKey() {
  return ['v1', '/v1/registrations/:registrationId', 'DELETE'] as const
}

export function getDeleteV1RegistrationsRegistrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.registrations)[':registrationId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.registrations)[':registrationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RegistrationsRegistrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.registrations)[':registrationId']['$delete']>,
    ) {
      return parseResponse(client.v1.registrations[':registrationId'].$delete(args, options))
    },
  })
}

export function useDeleteV1RegistrationsRegistrationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.registrations)[':registrationId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.registrations)[':registrationId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1RegistrationsRegistrationIdMutationOptions<
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

export function getV1UserProfilesStudentIdGuardianInvitationsQueryKey(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
  >,
) {
  return ['v1', '/v1/userProfiles/:studentId/guardianInvitations', args] as const
}

export function getV1UserProfilesStudentIdGuardianInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserProfilesStudentIdGuardianInvitationsQueryKey>
  >({
    queryKey: getV1UserProfilesStudentIdGuardianInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.userProfiles[':studentId'].guardianInvitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1UserProfilesStudentIdGuardianInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserProfilesStudentIdGuardianInvitationsQueryKey>
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
      ...getV1UserProfilesStudentIdGuardianInvitationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1UserProfilesStudentIdGuardianInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserProfilesStudentIdGuardianInvitationsQueryKey>
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
      ...getV1UserProfilesStudentIdGuardianInvitationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1UserProfilesStudentIdGuardianInvitationsMutationKey() {
  return ['v1', '/v1/userProfiles/:studentId/guardianInvitations', 'POST'] as const
}

export function getPostV1UserProfilesStudentIdGuardianInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UserProfilesStudentIdGuardianInvitationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.userProfiles[':studentId'].guardianInvitations.$post(args, options),
      )
    },
  })
}

export function usePostV1UserProfilesStudentIdGuardianInvitations<
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
                  (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$post']
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
  const mutationDefaults = getPostV1UserProfilesStudentIdGuardianInvitationsMutationOptions<
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

export function getV1UserProfilesStudentIdGuardianInvitationsInvitationIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
  >,
) {
  return ['v1', '/v1/userProfiles/:studentId/guardianInvitations/:invitationId', args] as const
}

export function getV1UserProfilesStudentIdGuardianInvitationsInvitationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserProfilesStudentIdGuardianInvitationsInvitationIdQueryKey>
  >({
    queryKey: getV1UserProfilesStudentIdGuardianInvitationsInvitationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.userProfiles[':studentId'].guardianInvitations[':invitationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1UserProfilesStudentIdGuardianInvitationsInvitationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserProfilesStudentIdGuardianInvitationsInvitationIdQueryKey>
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
      ...getV1UserProfilesStudentIdGuardianInvitationsInvitationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1UserProfilesStudentIdGuardianInvitationsInvitationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserProfilesStudentIdGuardianInvitationsInvitationIdQueryKey>
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
      ...getV1UserProfilesStudentIdGuardianInvitationsInvitationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1UserProfilesStudentIdGuardianInvitationsInvitationIdMutationKey() {
  return ['v1', '/v1/userProfiles/:studentId/guardianInvitations/:invitationId', 'PATCH'] as const
}

export function getPatchV1UserProfilesStudentIdGuardianInvitationsInvitationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1UserProfilesStudentIdGuardianInvitationsInvitationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.userProfiles[':studentId'].guardianInvitations[':invitationId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV1UserProfilesStudentIdGuardianInvitationsInvitationId<
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
                  (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$patch']
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
    getPatchV1UserProfilesStudentIdGuardianInvitationsInvitationIdMutationOptions<
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

export function getV1UserProfilesStudentIdGuardiansQueryKey(
  args: InferRequestType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>,
) {
  return ['v1', '/v1/userProfiles/:studentId/guardians', args] as const
}

export function getV1UserProfilesStudentIdGuardiansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserProfilesStudentIdGuardiansQueryKey>
  >({
    queryKey: getV1UserProfilesStudentIdGuardiansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.userProfiles[':studentId'].guardians.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1UserProfilesStudentIdGuardians<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserProfilesStudentIdGuardiansQueryKey>
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
      ...getV1UserProfilesStudentIdGuardiansQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1UserProfilesStudentIdGuardians<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserProfilesStudentIdGuardiansQueryKey>
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
      ...getV1UserProfilesStudentIdGuardiansQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1UserProfilesStudentIdGuardiansGuardianIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
  >,
) {
  return ['v1', '/v1/userProfiles/:studentId/guardians/:guardianId', args] as const
}

export function getV1UserProfilesStudentIdGuardiansGuardianIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserProfilesStudentIdGuardiansGuardianIdQueryKey>
  >({
    queryKey: getV1UserProfilesStudentIdGuardiansGuardianIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.userProfiles[':studentId'].guardians[':guardianId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1UserProfilesStudentIdGuardiansGuardianId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserProfilesStudentIdGuardiansGuardianIdQueryKey>
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
      ...getV1UserProfilesStudentIdGuardiansGuardianIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1UserProfilesStudentIdGuardiansGuardianId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserProfilesStudentIdGuardiansGuardianIdQueryKey>
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
      ...getV1UserProfilesStudentIdGuardiansGuardianIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1UserProfilesStudentIdGuardiansGuardianIdMutationKey() {
  return ['v1', '/v1/userProfiles/:studentId/guardians/:guardianId', 'DELETE'] as const
}

export function getDeleteV1UserProfilesStudentIdGuardiansGuardianIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UserProfilesStudentIdGuardiansGuardianIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.userProfiles[':studentId'].guardians[':guardianId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1UserProfilesStudentIdGuardiansGuardianId<
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
                  (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$delete']
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
  const mutationDefaults = getDeleteV1UserProfilesStudentIdGuardiansGuardianIdMutationOptions<
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

export function getV1UserProfilesUserIdQueryKey(
  args: InferRequestType<(typeof client.v1.userProfiles)[':userId']['$get']>,
) {
  return ['v1', '/v1/userProfiles/:userId', args] as const
}

export function getV1UserProfilesUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.userProfiles)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.userProfiles)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.userProfiles)[':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserProfilesUserIdQueryKey>
  >({
    queryKey: getV1UserProfilesUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.userProfiles[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1UserProfilesUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.userProfiles)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.userProfiles)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.userProfiles)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserProfilesUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1UserProfilesUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1UserProfilesUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.userProfiles)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.userProfiles)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.userProfiles)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1UserProfilesUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1UserProfilesUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

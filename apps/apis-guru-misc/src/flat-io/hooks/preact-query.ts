import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getClassesKey() {
  return ['classes'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getScoresKey() {
  return ['scores'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getClassesQueryKey(args: InferRequestType<typeof client.classes.$get>) {
  return ['classes', '/classes', args] as const
}

export function getClassesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.classes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClassesQueryKey>
  >({
    queryKey: getClassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClasses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClassesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClassesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClasses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClassesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClassesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostClassesMutationKey() {
  return ['classes', '/classes', 'POST'] as const
}

export function getPostClassesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classes.$post>>>>>,
    TError,
    InferRequestType<typeof client.classes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClassesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.classes.$post>) {
      return parseResponse(client.classes.$post(args, options))
    },
  })
}

export function usePostClasses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.classes.$post>>>>>,
        TError,
        InferRequestType<typeof client.classes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClassesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostClassesEnrollEnrollmentCodeMutationKey() {
  return ['classes', '/classes/enroll/:enrollmentCode', 'POST'] as const
}

export function getPostClassesEnrollEnrollmentCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classes.enroll)[':enrollmentCode']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.classes.enroll)[':enrollmentCode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClassesEnrollEnrollmentCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.classes.enroll)[':enrollmentCode']['$post']>,
    ) {
      return parseResponse(client.classes.enroll[':enrollmentCode'].$post(args, options))
    },
  })
}

export function usePostClassesEnrollEnrollmentCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.classes.enroll)[':enrollmentCode']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.classes.enroll)[':enrollmentCode']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClassesEnrollEnrollmentCodeMutationOptions<
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

export function getClassesClassQueryKey(
  args: InferRequestType<(typeof client.classes)[':class']['$get']>,
) {
  return ['classes', '/classes/:class', args] as const
}

export function getClassesClassQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.classes)[':class']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classes)[':class']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.classes)[':class']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassesClassQueryKey>
  >({
    queryKey: getClassesClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classes[':class'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClassesClass<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.classes)[':class']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classes)[':class']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.classes)[':class']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClassesClassQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClassesClass<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.classes)[':class']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classes)[':class']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.classes)[':class']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClassesClassQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutClassesClassMutationKey() {
  return ['classes', '/classes/:class', 'PUT'] as const
}

export function getPutClassesClassMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.classes)[':class']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.classes)[':class']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClassesClassMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.classes)[':class']['$put']>) {
      return parseResponse(client.classes[':class'].$put(args, options))
    },
  })
}

export function usePutClassesClass<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.classes)[':class']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.classes)[':class']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutClassesClassMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostClassesClassActivateMutationKey() {
  return ['classes', '/classes/:class/activate', 'POST'] as const
}

export function getPostClassesClassActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classes)[':class']['activate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.classes)[':class']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClassesClassActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.classes)[':class']['activate']['$post']>,
    ) {
      return parseResponse(client.classes[':class'].activate.$post(args, options))
    },
  })
}

export function usePostClassesClassActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.classes)[':class']['activate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.classes)[':class']['activate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClassesClassActivateMutationOptions<TError, TOnMutateResult>(
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

export function getPostClassesClassArchiveMutationKey() {
  return ['classes', '/classes/:class/archive', 'POST'] as const
}

export function getPostClassesClassArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classes)[':class']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.classes)[':class']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClassesClassArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.classes)[':class']['archive']['$post']>,
    ) {
      return parseResponse(client.classes[':class'].archive.$post(args, options))
    },
  })
}

export function usePostClassesClassArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.classes)[':class']['archive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.classes)[':class']['archive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClassesClassArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteClassesClassArchiveMutationKey() {
  return ['classes', '/classes/:class/archive', 'DELETE'] as const
}

export function getDeleteClassesClassArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classes)[':class']['archive']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.classes)[':class']['archive']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClassesClassArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.classes)[':class']['archive']['$delete']>,
    ) {
      return parseResponse(client.classes[':class'].archive.$delete(args, options))
    },
  })
}

export function useDeleteClassesClassArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.classes)[':class']['archive']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.classes)[':class']['archive']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteClassesClassArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getClassesClassAssignmentsQueryKey(
  args: InferRequestType<(typeof client.classes)[':class']['assignments']['$get']>,
) {
  return ['classes', '/classes/:class/assignments', args] as const
}

export function getClassesClassAssignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classes)[':class']['assignments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classes)[':class']['assignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classes)[':class']['assignments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassesClassAssignmentsQueryKey>
  >({
    queryKey: getClassesClassAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classes[':class'].assignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClassesClassAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classes)[':class']['assignments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classes)[':class']['assignments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.classes)[':class']['assignments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsQueryKey>
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
      ...getClassesClassAssignmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassesClassAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classes)[':class']['assignments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classes)[':class']['assignments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.classes)[':class']['assignments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsQueryKey>
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
      ...getClassesClassAssignmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostClassesClassAssignmentsMutationKey() {
  return ['classes', '/classes/:class/assignments', 'POST'] as const
}

export function getPostClassesClassAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classes)[':class']['assignments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.classes)[':class']['assignments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClassesClassAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.classes)[':class']['assignments']['$post']>,
    ) {
      return parseResponse(client.classes[':class'].assignments.$post(args, options))
    },
  })
}

export function usePostClassesClassAssignments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.classes)[':class']['assignments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.classes)[':class']['assignments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClassesClassAssignmentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostClassesClassAssignmentsAssignmentArchiveMutationKey() {
  return ['classes', '/classes/:class/assignments/:assignment/archive', 'POST'] as const
}

export function getPostClassesClassAssignmentsAssignmentArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClassesClassAssignmentsAssignmentArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].archive.$post(args, options),
      )
    },
  })
}

export function usePostClassesClassAssignmentsAssignmentArchive<
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
                  (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$post']
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
  const mutationDefaults = getPostClassesClassAssignmentsAssignmentArchiveMutationOptions<
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

export function getDeleteClassesClassAssignmentsAssignmentArchiveMutationKey() {
  return ['classes', '/classes/:class/assignments/:assignment/archive', 'DELETE'] as const
}

export function getDeleteClassesClassAssignmentsAssignmentArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteClassesClassAssignmentsAssignmentArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$delete']
      >,
    ) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].archive.$delete(args, options),
      )
    },
  })
}

export function useDeleteClassesClassAssignmentsAssignmentArchive<
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
                  (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$delete']
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
  const mutationDefaults = getDeleteClassesClassAssignmentsAssignmentArchiveMutationOptions<
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

export function getPostClassesClassAssignmentsAssignmentCopyMutationKey() {
  return ['classes', '/classes/:class/assignments/:assignment/copy', 'POST'] as const
}

export function getPostClassesClassAssignmentsAssignmentCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['copy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['copy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClassesClassAssignmentsAssignmentCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classes)[':class']['assignments'][':assignment']['copy']['$post']
      >,
    ) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].copy.$post(args, options),
      )
    },
  })
}

export function usePostClassesClassAssignmentsAssignmentCopy<
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
                  (typeof client.classes)[':class']['assignments'][':assignment']['copy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.classes)[':class']['assignments'][':assignment']['copy']['$post']
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
  const mutationDefaults = getPostClassesClassAssignmentsAssignmentCopyMutationOptions<
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

export function getClassesClassAssignmentsAssignmentSubmissionsQueryKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
  >,
) {
  return ['classes', '/classes/:class/assignments/:assignment/submissions', args] as const
}

export function getClassesClassAssignmentsAssignmentSubmissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsQueryKey>
  >({
    queryKey: getClassesClassAssignmentsAssignmentSubmissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].submissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClassesClassAssignmentsAssignmentSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsQueryKey>
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
      ...getClassesClassAssignmentsAssignmentSubmissionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassesClassAssignmentsAssignmentSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsQueryKey>
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
      ...getClassesClassAssignmentsAssignmentSubmissionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutClassesClassAssignmentsAssignmentSubmissionsMutationKey() {
  return ['classes', '/classes/:class/assignments/:assignment/submissions', 'PUT'] as const
}

export function getPutClassesClassAssignmentsAssignmentSubmissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutClassesClassAssignmentsAssignmentSubmissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$put']
      >,
    ) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].submissions.$put(args, options),
      )
    },
  })
}

export function usePutClassesClassAssignmentsAssignmentSubmissions<
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
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$put']
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
  const mutationDefaults = getPutClassesClassAssignmentsAssignmentSubmissionsMutationOptions<
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

export function getClassesClassAssignmentsAssignmentSubmissionsCsvQueryKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
  >,
) {
  return ['classes', '/classes/:class/assignments/:assignment/submissions/csv', args] as const
}

export function getClassesClassAssignmentsAssignmentSubmissionsCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsCsvQueryKey>
  >({
    queryKey: getClassesClassAssignmentsAssignmentSubmissionsCsvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].submissions.csv.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClassesClassAssignmentsAssignmentSubmissionsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsCsvQueryKey>
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
      ...getClassesClassAssignmentsAssignmentSubmissionsCsvQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassesClassAssignmentsAssignmentSubmissionsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsCsvQueryKey>
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
      ...getClassesClassAssignmentsAssignmentSubmissionsCsvQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClassesClassAssignmentsAssignmentSubmissionsExcelQueryKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
  >,
) {
  return ['classes', '/classes/:class/assignments/:assignment/submissions/excel', args] as const
}

export function getClassesClassAssignmentsAssignmentSubmissionsExcelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsExcelQueryKey>
  >({
    queryKey: getClassesClassAssignmentsAssignmentSubmissionsExcelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].submissions.excel.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClassesClassAssignmentsAssignmentSubmissionsExcel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsExcelQueryKey>
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
      ...getClassesClassAssignmentsAssignmentSubmissionsExcelQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassesClassAssignmentsAssignmentSubmissionsExcel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsExcelQueryKey>
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
      ...getClassesClassAssignmentsAssignmentSubmissionsExcelQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClassesClassAssignmentsAssignmentSubmissionsSubmissionQueryKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
  >,
) {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission',
    args,
  ] as const
}

export function getClassesClassAssignmentsAssignmentSubmissionsSubmissionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsSubmissionQueryKey>
  >({
    queryKey: getClassesClassAssignmentsAssignmentSubmissionsSubmissionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].submissions[':submission'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClassesClassAssignmentsAssignmentSubmissionsSubmission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsSubmissionQueryKey>
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
      ...getClassesClassAssignmentsAssignmentSubmissionsSubmissionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassesClassAssignmentsAssignmentSubmissionsSubmission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsSubmissionQueryKey>
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
      ...getClassesClassAssignmentsAssignmentSubmissionsSubmissionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutClassesClassAssignmentsAssignmentSubmissionsSubmissionMutationKey() {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission',
    'PUT',
  ] as const
}

export function getPutClassesClassAssignmentsAssignmentSubmissionsSubmissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutClassesClassAssignmentsAssignmentSubmissionsSubmissionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$put']
      >,
    ) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].submissions[':submission'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutClassesClassAssignmentsAssignmentSubmissionsSubmission<
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
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$put']
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
    getPutClassesClassAssignmentsAssignmentSubmissionsSubmissionMutationOptions<
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

export function getDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionMutationKey() {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission',
    'DELETE',
  ] as const
}

export function getDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$delete']
      >,
    ) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].submissions[':submission'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteClassesClassAssignmentsAssignmentSubmissionsSubmission<
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
                    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$delete']
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
    getDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionMutationOptions<
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

export function getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsQueryKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
  >,
) {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission/comments',
    args,
  ] as const
}

export function getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsQueryKey>
  >({
    queryKey: getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].submissions[
          ':submission'
        ].comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClassesClassAssignmentsAssignmentSubmissionsSubmissionComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsQueryKey>
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
      ...getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassesClassAssignmentsAssignmentSubmissionsSubmissionComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsQueryKey>
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
      ...getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsMutationKey() {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission/comments',
    'POST',
  ] as const
}

export function getPostClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$post']
      >,
    ) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].submissions[
          ':submission'
        ].comments.$post(args, options),
      )
    },
  })
}

export function usePostClassesClassAssignmentsAssignmentSubmissionsSubmissionComments<
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
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$post']
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
    getPostClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsMutationOptions<
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

export function getPutClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentMutationKey() {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission/comments/:comment',
    'PUT',
  ] as const
}

export function getPutClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$put']
      >,
    ) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].submissions[':submission'].comments[
          ':comment'
        ].$put(args, options),
      )
    },
  })
}

export function usePutClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsComment<
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
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$put']
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
    getPutClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentMutationOptions<
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

export function getDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentMutationKey() {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission/comments/:comment',
    'DELETE',
  ] as const
}

export function getDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$delete']
      >,
    ) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].submissions[':submission'].comments[
          ':comment'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsComment<
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
                    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$delete']
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
    getDeleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentMutationOptions<
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

export function getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryQueryKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
  >,
) {
  return [
    'classes',
    '/classes/:class/assignments/:assignment/submissions/:submission/history',
    args,
  ] as const
}

export function getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryQueryKey>
  >({
    queryKey: getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classes[':class'].assignments[':assignment'].submissions[':submission'].history.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useClassesClassAssignmentsAssignmentSubmissionsSubmissionHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryQueryKey>
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
      ...getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassesClassAssignmentsAssignmentSubmissionsSubmissionHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryQueryKey>
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
      ...getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClassesClassStudentsUserSubmissionsQueryKey(
  args: InferRequestType<
    (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
  >,
) {
  return ['classes', '/classes/:class/students/:user/submissions', args] as const
}

export function getClassesClassStudentsUserSubmissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.classes)[':class']['students'][':user']['submissions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassesClassStudentsUserSubmissionsQueryKey>
  >({
    queryKey: getClassesClassStudentsUserSubmissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classes[':class'].students[':user'].submissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClassesClassStudentsUserSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.classes)[':class']['students'][':user']['submissions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassStudentsUserSubmissionsQueryKey>
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
      ...getClassesClassStudentsUserSubmissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClassesClassStudentsUserSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.classes)[':class']['students'][':user']['submissions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClassesClassStudentsUserSubmissionsQueryKey>
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
      ...getClassesClassStudentsUserSubmissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutClassesClassUsersUserMutationKey() {
  return ['classes', '/classes/:class/users/:user', 'PUT'] as const
}

export function getPutClassesClassUsersUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classes)[':class']['users'][':user']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.classes)[':class']['users'][':user']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClassesClassUsersUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.classes)[':class']['users'][':user']['$put']>,
    ) {
      return parseResponse(client.classes[':class'].users[':user'].$put(args, options))
    },
  })
}

export function usePutClassesClassUsersUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classes)[':class']['users'][':user']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.classes)[':class']['users'][':user']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutClassesClassUsersUserMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteClassesClassUsersUserMutationKey() {
  return ['classes', '/classes/:class/users/:user', 'DELETE'] as const
}

export function getDeleteClassesClassUsersUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classes)[':class']['users'][':user']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.classes)[':class']['users'][':user']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClassesClassUsersUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.classes)[':class']['users'][':user']['$delete']>,
    ) {
      return parseResponse(client.classes[':class'].users[':user'].$delete(args, options))
    },
  })
}

export function useDeleteClassesClassUsersUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classes)[':class']['users'][':user']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.classes)[':class']['users'][':user']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteClassesClassUsersUserMutationOptions<TError, TOnMutateResult>(
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

export function getCollectionsQueryKey(args: InferRequestType<typeof client.collections.$get>) {
  return ['collections', '/collections', args] as const
}

export function getCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.collections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >({
    queryKey: getCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCollectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.collections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCollectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCollectionsMutationKey() {
  return ['collections', '/collections', 'POST'] as const
}

export function getPostCollectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>>,
    TError,
    InferRequestType<typeof client.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collections.$post>) {
      return parseResponse(client.collections.$post(args, options))
    },
  })
}

export function usePostCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.collections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCollectionsCollectionQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection']['$get']>,
) {
  return ['collections', '/collections/:collection', args] as const
}

export function getCollectionsCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.collections)[':collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionQueryKey>
  >({
    queryKey: getCollectionsCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCollectionsCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.collections)[':collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionQueryKey>
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
      ...getCollectionsCollectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.collections)[':collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionQueryKey>
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
      ...getCollectionsCollectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCollectionsCollectionMutationKey() {
  return ['collections', '/collections/:collection', 'PUT'] as const
}

export function getPutCollectionsCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCollectionsCollectionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.collections)[':collection']['$put']>) {
      return parseResponse(client.collections[':collection'].$put(args, options))
    },
  })
}

export function usePutCollectionsCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.collections)[':collection']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCollectionsCollectionMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCollectionsCollectionMutationKey() {
  return ['collections', '/collections/:collection', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.collections)[':collection']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection']['$delete']>,
    ) {
      return parseResponse(client.collections[':collection'].$delete(args, options))
    },
  })
}

export function useDeleteCollectionsCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.collections)[':collection']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCollectionsCollectionMutationOptions<TError, TOnMutateResult>(
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

export function getCollectionsCollectionScoresQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection']['scores']['$get']>,
) {
  return ['collections', '/collections/:collection/scores', args] as const
}

export function getCollectionsCollectionScoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection']['scores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection']['scores']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection']['scores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionScoresQueryKey>
  >({
    queryKey: getCollectionsCollectionScoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection'].scores.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCollectionsCollectionScores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection']['scores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection']['scores']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection']['scores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionScoresQueryKey>
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
      ...getCollectionsCollectionScoresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionScores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection']['scores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection']['scores']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection']['scores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionScoresQueryKey>
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
      ...getCollectionsCollectionScoresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCollectionsCollectionScoresScoreMutationKey() {
  return ['collections', '/collections/:collection/scores/:score', 'PUT'] as const
}

export function getPutCollectionsCollectionScoresScoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.collections)[':collection']['scores'][':score']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection']['scores'][':score']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCollectionsCollectionScoresScoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection']['scores'][':score']['$put']
      >,
    ) {
      return parseResponse(client.collections[':collection'].scores[':score'].$put(args, options))
    },
  })
}

export function usePutCollectionsCollectionScoresScore<
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
                ReturnType<(typeof client.collections)[':collection']['scores'][':score']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.collections)[':collection']['scores'][':score']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCollectionsCollectionScoresScoreMutationOptions<
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

export function getDeleteCollectionsCollectionScoresScoreMutationKey() {
  return ['collections', '/collections/:collection/scores/:score', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionScoresScoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.collections)[':collection']['scores'][':score']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.collections)[':collection']['scores'][':score']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionScoresScoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection']['scores'][':score']['$delete']
      >,
    ) {
      return parseResponse(
        client.collections[':collection'].scores[':score'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCollectionsCollectionScoresScore<
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
                    (typeof client.collections)[':collection']['scores'][':score']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.collections)[':collection']['scores'][':score']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCollectionsCollectionScoresScoreMutationOptions<
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

export function getPostCollectionsCollectionUntrashMutationKey() {
  return ['collections', '/collections/:collection/untrash', 'POST'] as const
}

export function getPostCollectionsCollectionUntrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection']['untrash']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.collections)[':collection']['untrash']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionUntrashMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection']['untrash']['$post']>,
    ) {
      return parseResponse(client.collections[':collection'].untrash.$post(args, options))
    },
  })
}

export function usePostCollectionsCollectionUntrash<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection']['untrash']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.collections)[':collection']['untrash']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionsCollectionUntrashMutationOptions<
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

export function getGroupsGroupQueryKey(
  args: InferRequestType<(typeof client.groups)[':group']['$get']>,
) {
  return ['groups', '/groups/:group', args] as const
}

export function getGroupsGroupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupQueryKey>
  >({
    queryKey: getGroupsGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsGroupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsGroupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsGroupScoresQueryKey(
  args: InferRequestType<(typeof client.groups)[':group']['scores']['$get']>,
) {
  return ['groups', '/groups/:group/scores', args] as const
}

export function getGroupsGroupScoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['scores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group']['scores']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group']['scores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupScoresQueryKey>
  >({
    queryKey: getGroupsGroupScoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group'].scores.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsGroupScores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['scores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group']['scores']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group']['scores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupScoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsGroupScoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsGroupScores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['scores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group']['scores']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group']['scores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupScoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsGroupScoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsGroupUsersQueryKey(
  args: InferRequestType<(typeof client.groups)[':group']['users']['$get']>,
) {
  return ['groups', '/groups/:group/users', args] as const
}

export function getGroupsGroupUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['users']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupUsersQueryKey>
  >({
    queryKey: getGroupsGroupUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsGroupUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsGroupUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsGroupUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':group']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsGroupUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeQueryKey(args: InferRequestType<typeof client.me.$get>) {
  return ['me', '/me', args] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.me.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOrganizationsInvitationsQueryKey(
  args: InferRequestType<typeof client.organizations.invitations.$get>,
) {
  return ['organizations', '/organizations/invitations', args] as const
}

export function getOrganizationsInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organizations.invitations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsInvitationsQueryKey>
  >({
    queryKey: getOrganizationsInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.invitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organizations.invitations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsInvitationsQueryKey>
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
      ...getOrganizationsInvitationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organizations.invitations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsInvitationsQueryKey>
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
      ...getOrganizationsInvitationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganizationsInvitationsMutationKey() {
  return ['organizations', '/organizations/invitations', 'POST'] as const
}

export function getPostOrganizationsInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organizations.invitations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsInvitationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organizations.invitations.$post>) {
      return parseResponse(client.organizations.invitations.$post(args, options))
    },
  })
}

export function usePostOrganizationsInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organizations.invitations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsInvitationsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationsInvitationsInvitationMutationKey() {
  return ['organizations', '/organizations/invitations/:invitation', 'DELETE'] as const
}

export function getDeleteOrganizationsInvitationsInvitationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations.invitations)[':invitation']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organizations.invitations)[':invitation']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsInvitationsInvitationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations.invitations)[':invitation']['$delete']>,
    ) {
      return parseResponse(client.organizations.invitations[':invitation'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsInvitationsInvitation<
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
                  ReturnType<(typeof client.organizations.invitations)[':invitation']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.organizations.invitations)[':invitation']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsInvitationsInvitationMutationOptions<
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

export function getOrganizationsLtiCredentialsQueryKey() {
  return ['organizations', '/organizations/lti/credentials'] as const
}

export function getOrganizationsLtiCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.lti.credentials.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organizations.lti.credentials.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsLtiCredentialsQueryKey>
  >({
    queryKey: getOrganizationsLtiCredentialsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.lti.credentials.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsLtiCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.lti.credentials.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.organizations.lti.credentials.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsLtiCredentialsQueryKey>
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
      ...getOrganizationsLtiCredentialsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsLtiCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.lti.credentials.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.organizations.lti.credentials.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsLtiCredentialsQueryKey>
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
      ...getOrganizationsLtiCredentialsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganizationsLtiCredentialsMutationKey() {
  return ['organizations', '/organizations/lti/credentials', 'POST'] as const
}

export function getPostOrganizationsLtiCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organizations.lti.credentials.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organizations.lti.credentials.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsLtiCredentialsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organizations.lti.credentials.$post>) {
      return parseResponse(client.organizations.lti.credentials.$post(args, options))
    },
  })
}

export function usePostOrganizationsLtiCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.organizations.lti.credentials.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.organizations.lti.credentials.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsLtiCredentialsMutationOptions<
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

export function getDeleteOrganizationsLtiCredentialsCredentialsMutationKey() {
  return ['organizations', '/organizations/lti/credentials/:credentials', 'DELETE'] as const
}

export function getDeleteOrganizationsLtiCredentialsCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations.lti.credentials)[':credentials']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organizations.lti.credentials)[':credentials']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsLtiCredentialsCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations.lti.credentials)[':credentials']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations.lti.credentials[':credentials'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsLtiCredentialsCredentials<
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
                    (typeof client.organizations.lti.credentials)[':credentials']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.organizations.lti.credentials)[':credentials']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsLtiCredentialsCredentialsMutationOptions<
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

export function getOrganizationsUsersQueryKey(
  args: InferRequestType<typeof client.organizations.users.$get>,
) {
  return ['organizations', '/organizations/users', args] as const
}

export function getOrganizationsUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organizations.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsUsersQueryKey>
  >({
    queryKey: getOrganizationsUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrganizationsUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organizations.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrganizationsUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrganizationsUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organizations.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrganizationsUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOrganizationsUsersMutationKey() {
  return ['organizations', '/organizations/users', 'POST'] as const
}

export function getPostOrganizationsUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organizations.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organizations.users.$post>) {
      return parseResponse(client.organizations.users.$post(args, options))
    },
  })
}

export function usePostOrganizationsUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organizations.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsUsersMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsUsersCountQueryKey(
  args: InferRequestType<typeof client.organizations.users.count.$get>,
) {
  return ['organizations', '/organizations/users/count', args] as const
}

export function getOrganizationsUsersCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.count.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organizations.users.count.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.count.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsUsersCountQueryKey>
  >({
    queryKey: getOrganizationsUsersCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.users.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsUsersCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.count.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organizations.users.count.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsUsersCountQueryKey>
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
      ...getOrganizationsUsersCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsUsersCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.count.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organizations.users.count.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organizations.users.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsUsersCountQueryKey>
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
      ...getOrganizationsUsersCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganizationsUsersUserMutationKey() {
  return ['organizations', '/organizations/users/:user', 'PUT'] as const
}

export function getPutOrganizationsUsersUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations.users)[':user']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations.users)[':user']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsUsersUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organizations.users)[':user']['$put']>) {
      return parseResponse(client.organizations.users[':user'].$put(args, options))
    },
  })
}

export function usePutOrganizationsUsersUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations.users)[':user']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations.users)[':user']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganizationsUsersUserMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationsUsersUserMutationKey() {
  return ['organizations', '/organizations/users/:user', 'DELETE'] as const
}

export function getDeleteOrganizationsUsersUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations.users)[':user']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organizations.users)[':user']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsUsersUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations.users)[':user']['$delete']>,
    ) {
      return parseResponse(client.organizations.users[':user'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsUsersUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations.users)[':user']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.organizations.users)[':user']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsUsersUserMutationOptions<TError, TOnMutateResult>(
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

export function getPostScoresMutationKey() {
  return ['scores', '/scores', 'POST'] as const
}

export function getPostScoresMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scores.$post>>>>>,
    TError,
    InferRequestType<typeof client.scores.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScoresMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scores.$post>) {
      return parseResponse(client.scores.$post(args, options))
    },
  })
}

export function usePostScores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scores.$post>>>>>,
        TError,
        InferRequestType<typeof client.scores.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScoresMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getScoresScoreQueryKey(
  args: InferRequestType<(typeof client.scores)[':score']['$get']>,
) {
  return ['scores', '/scores/:score', args] as const
}

export function getScoresScoreQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScoresScoreQueryKey>
  >({
    queryKey: getScoresScoreQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scores[':score'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useScoresScore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScoresScoreQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScoresScore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScoresScoreQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutScoresScoreMutationKey() {
  return ['scores', '/scores/:score', 'PUT'] as const
}

export function getPutScoresScoreMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.scores)[':score']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutScoresScoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.scores)[':score']['$put']>) {
      return parseResponse(client.scores[':score'].$put(args, options))
    },
  })
}

export function usePutScoresScore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.scores)[':score']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutScoresScoreMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteScoresScoreMutationKey() {
  return ['scores', '/scores/:score', 'DELETE'] as const
}

export function getDeleteScoresScoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scores)[':score']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScoresScoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.scores)[':score']['$delete']>) {
      return parseResponse(client.scores[':score'].$delete(args, options))
    },
  })
}

export function useDeleteScoresScore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.scores)[':score']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteScoresScoreMutationOptions<TError, TOnMutateResult>(
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

export function getScoresScoreCollaboratorsQueryKey(
  args: InferRequestType<(typeof client.scores)[':score']['collaborators']['$get']>,
) {
  return ['scores', '/scores/:score/collaborators', args] as const
}

export function getScoresScoreCollaboratorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['collaborators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['collaborators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['collaborators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScoresScoreCollaboratorsQueryKey>
  >({
    queryKey: getScoresScoreCollaboratorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scores[':score'].collaborators.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScoresScoreCollaborators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['collaborators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['collaborators']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['collaborators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreCollaboratorsQueryKey>
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
      ...getScoresScoreCollaboratorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseScoresScoreCollaborators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['collaborators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['collaborators']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['collaborators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreCollaboratorsQueryKey>
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
      ...getScoresScoreCollaboratorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostScoresScoreCollaboratorsMutationKey() {
  return ['scores', '/scores/:score/collaborators', 'POST'] as const
}

export function getPostScoresScoreCollaboratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['collaborators']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scores)[':score']['collaborators']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScoresScoreCollaboratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scores)[':score']['collaborators']['$post']>,
    ) {
      return parseResponse(client.scores[':score'].collaborators.$post(args, options))
    },
  })
}

export function usePostScoresScoreCollaborators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['collaborators']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scores)[':score']['collaborators']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScoresScoreCollaboratorsMutationOptions<TError, TOnMutateResult>(
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

export function getScoresScoreCollaboratorsCollaboratorQueryKey(
  args: InferRequestType<
    (typeof client.scores)[':score']['collaborators'][':collaborator']['$get']
  >,
) {
  return ['scores', '/scores/:score/collaborators/:collaborator', args] as const
}

export function getScoresScoreCollaboratorsCollaboratorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.scores)[':score']['collaborators'][':collaborator']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.scores)[':score']['collaborators'][':collaborator']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.scores)[':score']['collaborators'][':collaborator']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScoresScoreCollaboratorsCollaboratorQueryKey>
  >({
    queryKey: getScoresScoreCollaboratorsCollaboratorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scores[':score'].collaborators[':collaborator'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScoresScoreCollaboratorsCollaborator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.scores)[':score']['collaborators'][':collaborator']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.scores)[':score']['collaborators'][':collaborator']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.scores)[':score']['collaborators'][':collaborator']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreCollaboratorsCollaboratorQueryKey>
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
      ...getScoresScoreCollaboratorsCollaboratorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseScoresScoreCollaboratorsCollaborator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.scores)[':score']['collaborators'][':collaborator']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.scores)[':score']['collaborators'][':collaborator']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.scores)[':score']['collaborators'][':collaborator']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreCollaboratorsCollaboratorQueryKey>
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
      ...getScoresScoreCollaboratorsCollaboratorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteScoresScoreCollaboratorsCollaboratorMutationKey() {
  return ['scores', '/scores/:score/collaborators/:collaborator', 'DELETE'] as const
}

export function getDeleteScoresScoreCollaboratorsCollaboratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scores)[':score']['collaborators'][':collaborator']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scores)[':score']['collaborators'][':collaborator']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScoresScoreCollaboratorsCollaboratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.scores)[':score']['collaborators'][':collaborator']['$delete']
      >,
    ) {
      return parseResponse(
        client.scores[':score'].collaborators[':collaborator'].$delete(args, options),
      )
    },
  })
}

export function useDeleteScoresScoreCollaboratorsCollaborator<
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
                    (typeof client.scores)[':score']['collaborators'][':collaborator']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.scores)[':score']['collaborators'][':collaborator']['$delete']
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
  const mutationDefaults = getDeleteScoresScoreCollaboratorsCollaboratorMutationOptions<
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

export function getScoresScoreCommentsQueryKey(
  args: InferRequestType<(typeof client.scores)[':score']['comments']['$get']>,
) {
  return ['scores', '/scores/:score/comments', args] as const
}

export function getScoresScoreCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScoresScoreCommentsQueryKey>
  >({
    queryKey: getScoresScoreCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scores[':score'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScoresScoreComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScoresScoreCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScoresScoreComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['comments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScoresScoreCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostScoresScoreCommentsMutationKey() {
  return ['scores', '/scores/:score/comments', 'POST'] as const
}

export function getPostScoresScoreCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scores)[':score']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScoresScoreCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scores)[':score']['comments']['$post']>,
    ) {
      return parseResponse(client.scores[':score'].comments.$post(args, options))
    },
  })
}

export function usePostScoresScoreComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['comments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scores)[':score']['comments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScoresScoreCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getPutScoresScoreCommentsCommentMutationKey() {
  return ['scores', '/scores/:score/comments/:comment', 'PUT'] as const
}

export function getPutScoresScoreCommentsCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['comments'][':comment']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutScoresScoreCommentsCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['$put']>,
    ) {
      return parseResponse(client.scores[':score'].comments[':comment'].$put(args, options))
    },
  })
}

export function usePutScoresScoreCommentsComment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['comments'][':comment']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutScoresScoreCommentsCommentMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteScoresScoreCommentsCommentMutationKey() {
  return ['scores', '/scores/:score/comments/:comment', 'DELETE'] as const
}

export function getDeleteScoresScoreCommentsCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['comments'][':comment']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScoresScoreCommentsCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['$delete']>,
    ) {
      return parseResponse(client.scores[':score'].comments[':comment'].$delete(args, options))
    },
  })
}

export function useDeleteScoresScoreCommentsComment<
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
                  ReturnType<(typeof client.scores)[':score']['comments'][':comment']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteScoresScoreCommentsCommentMutationOptions<
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

export function getPutScoresScoreCommentsCommentResolvedMutationKey() {
  return ['scores', '/scores/:score/comments/:comment/resolved', 'PUT'] as const
}

export function getPutScoresScoreCommentsCommentResolvedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scores)[':score']['comments'][':comment']['resolved']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['resolved']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutScoresScoreCommentsCommentResolvedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.scores)[':score']['comments'][':comment']['resolved']['$put']
      >,
    ) {
      return parseResponse(
        client.scores[':score'].comments[':comment'].resolved.$put(args, options),
      )
    },
  })
}

export function usePutScoresScoreCommentsCommentResolved<
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
                    (typeof client.scores)[':score']['comments'][':comment']['resolved']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.scores)[':score']['comments'][':comment']['resolved']['$put']
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
  const mutationDefaults = getPutScoresScoreCommentsCommentResolvedMutationOptions<
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

export function getDeleteScoresScoreCommentsCommentResolvedMutationKey() {
  return ['scores', '/scores/:score/comments/:comment/resolved', 'DELETE'] as const
}

export function getDeleteScoresScoreCommentsCommentResolvedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scores)[':score']['comments'][':comment']['resolved']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.scores)[':score']['comments'][':comment']['resolved']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteScoresScoreCommentsCommentResolvedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.scores)[':score']['comments'][':comment']['resolved']['$delete']
      >,
    ) {
      return parseResponse(
        client.scores[':score'].comments[':comment'].resolved.$delete(args, options),
      )
    },
  })
}

export function useDeleteScoresScoreCommentsCommentResolved<
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
                    (typeof client.scores)[':score']['comments'][':comment']['resolved']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.scores)[':score']['comments'][':comment']['resolved']['$delete']
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
  const mutationDefaults = getDeleteScoresScoreCommentsCommentResolvedMutationOptions<
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

export function getPostScoresScoreForkMutationKey() {
  return ['scores', '/scores/:score/fork', 'POST'] as const
}

export function getPostScoresScoreForkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['fork']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.scores)[':score']['fork']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScoresScoreForkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.scores)[':score']['fork']['$post']>) {
      return parseResponse(client.scores[':score'].fork.$post(args, options))
    },
  })
}

export function usePostScoresScoreFork<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['fork']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scores)[':score']['fork']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScoresScoreForkMutationOptions<TError, TOnMutateResult>(
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

export function getScoresScoreRevisionsQueryKey(
  args: InferRequestType<(typeof client.scores)[':score']['revisions']['$get']>,
) {
  return ['scores', '/scores/:score/revisions', args] as const
}

export function getScoresScoreRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['revisions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['revisions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScoresScoreRevisionsQueryKey>
  >({
    queryKey: getScoresScoreRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scores[':score'].revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScoresScoreRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['revisions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['revisions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['revisions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreRevisionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScoresScoreRevisionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScoresScoreRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['revisions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['revisions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['revisions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreRevisionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScoresScoreRevisionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostScoresScoreRevisionsMutationKey() {
  return ['scores', '/scores/:score/revisions', 'POST'] as const
}

export function getPostScoresScoreRevisionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['revisions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scores)[':score']['revisions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScoresScoreRevisionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scores)[':score']['revisions']['$post']>,
    ) {
      return parseResponse(client.scores[':score'].revisions.$post(args, options))
    },
  })
}

export function usePostScoresScoreRevisions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['revisions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scores)[':score']['revisions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScoresScoreRevisionsMutationOptions<TError, TOnMutateResult>(
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

export function getScoresScoreRevisionsRevisionQueryKey(
  args: InferRequestType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>,
) {
  return ['scores', '/scores/:score/revisions/:revision', args] as const
}

export function getScoresScoreRevisionsRevisionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScoresScoreRevisionsRevisionQueryKey>
  >({
    queryKey: getScoresScoreRevisionsRevisionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scores[':score'].revisions[':revision'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScoresScoreRevisionsRevision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreRevisionsRevisionQueryKey>
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
      ...getScoresScoreRevisionsRevisionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseScoresScoreRevisionsRevision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreRevisionsRevisionQueryKey>
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
      ...getScoresScoreRevisionsRevisionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getScoresScoreRevisionsRevisionFormatQueryKey(
  args: InferRequestType<
    (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
  >,
) {
  return ['scores', '/scores/:score/revisions/:revision/:format', args] as const
}

export function getScoresScoreRevisionsRevisionFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScoresScoreRevisionsRevisionFormatQueryKey>
  >({
    queryKey: getScoresScoreRevisionsRevisionFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scores[':score'].revisions[':revision'][':format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScoresScoreRevisionsRevisionFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreRevisionsRevisionFormatQueryKey>
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
      ...getScoresScoreRevisionsRevisionFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseScoresScoreRevisionsRevisionFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreRevisionsRevisionFormatQueryKey>
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
      ...getScoresScoreRevisionsRevisionFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getScoresScoreSubmissionsQueryKey(
  args: InferRequestType<(typeof client.scores)[':score']['submissions']['$get']>,
) {
  return ['scores', '/scores/:score/submissions', args] as const
}

export function getScoresScoreSubmissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['submissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['submissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScoresScoreSubmissionsQueryKey>
  >({
    queryKey: getScoresScoreSubmissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scores[':score'].submissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScoresScoreSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['submissions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['submissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreSubmissionsQueryKey>
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
      ...getScoresScoreSubmissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseScoresScoreSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['submissions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['submissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreSubmissionsQueryKey>
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
      ...getScoresScoreSubmissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getScoresScoreTracksQueryKey(
  args: InferRequestType<(typeof client.scores)[':score']['tracks']['$get']>,
) {
  return ['scores', '/scores/:score/tracks', args] as const
}

export function getScoresScoreTracksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['tracks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScoresScoreTracksQueryKey>
  >({
    queryKey: getScoresScoreTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scores[':score'].tracks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScoresScoreTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['tracks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['tracks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScoresScoreTracksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScoresScoreTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.scores)[':score']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['tracks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['tracks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScoresScoreTracksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostScoresScoreTracksMutationKey() {
  return ['scores', '/scores/:score/tracks', 'POST'] as const
}

export function getPostScoresScoreTracksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['tracks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scores)[':score']['tracks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScoresScoreTracksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.scores)[':score']['tracks']['$post']>) {
      return parseResponse(client.scores[':score'].tracks.$post(args, options))
    },
  })
}

export function usePostScoresScoreTracks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['tracks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scores)[':score']['tracks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScoresScoreTracksMutationOptions<TError, TOnMutateResult>(
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

export function getScoresScoreTracksTrackQueryKey(
  args: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$get']>,
) {
  return ['scores', '/scores/:score/tracks/:track', args] as const
}

export function getScoresScoreTracksTrackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScoresScoreTracksTrackQueryKey>
  >({
    queryKey: getScoresScoreTracksTrackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scores[':score'].tracks[':track'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useScoresScoreTracksTrack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreTracksTrackQueryKey>
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
      ...getScoresScoreTracksTrackQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseScoresScoreTracksTrack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScoresScoreTracksTrackQueryKey>
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
      ...getScoresScoreTracksTrackQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutScoresScoreTracksTrackMutationKey() {
  return ['scores', '/scores/:score/tracks/:track', 'PUT'] as const
}

export function getPutScoresScoreTracksTrackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutScoresScoreTracksTrackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$put']>,
    ) {
      return parseResponse(client.scores[':score'].tracks[':track'].$put(args, options))
    },
  })
}

export function usePutScoresScoreTracksTrack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutScoresScoreTracksTrackMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteScoresScoreTracksTrackMutationKey() {
  return ['scores', '/scores/:score/tracks/:track', 'DELETE'] as const
}

export function getDeleteScoresScoreTracksTrackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScoresScoreTracksTrackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$delete']>,
    ) {
      return parseResponse(client.scores[':score'].tracks[':track'].$delete(args, options))
    },
  })
}

export function useDeleteScoresScoreTracksTrack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scores)[':score']['tracks'][':track']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteScoresScoreTracksTrackMutationOptions<TError, TOnMutateResult>(
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

export function getPostScoresScoreUntrashMutationKey() {
  return ['scores', '/scores/:score/untrash', 'POST'] as const
}

export function getPostScoresScoreUntrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scores)[':score']['untrash']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scores)[':score']['untrash']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScoresScoreUntrashMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.scores)[':score']['untrash']['$post']>) {
      return parseResponse(client.scores[':score'].untrash.$post(args, options))
    },
  })
}

export function usePostScoresScoreUntrash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scores)[':score']['untrash']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.scores)[':score']['untrash']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScoresScoreUntrashMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserQueryKey(
  args: InferRequestType<(typeof client.users)[':user']['$get']>,
) {
  return ['users', '/users/:user', args] as const
}

export function getUsersUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.users)[':user']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserQueryKey>
  >({
    queryKey: getUsersUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUserLikesQueryKey(
  args: InferRequestType<(typeof client.users)[':user']['likes']['$get']>,
) {
  return ['users', '/users/:user/likes', args] as const
}

export function getUsersUserLikesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['likes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserLikesQueryKey>
  >({
    queryKey: getUsersUserLikesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user'].likes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersUserLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user']['likes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserLikesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserLikesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user']['likes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserLikesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserLikesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUserScoresQueryKey(
  args: InferRequestType<(typeof client.users)[':user']['scores']['$get']>,
) {
  return ['users', '/users/:user/scores', args] as const
}

export function getUsersUserScoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['scores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user']['scores']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['scores']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserScoresQueryKey>
  >({
    queryKey: getUsersUserScoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user'].scores.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersUserScores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['scores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user']['scores']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user']['scores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserScoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserScoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserScores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user']['scores']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user']['scores']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user']['scores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserScoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserScoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

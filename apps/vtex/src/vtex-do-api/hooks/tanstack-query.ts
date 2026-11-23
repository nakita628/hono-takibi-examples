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

export function getNotesKey() {
  return ['notes'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getNotesQueryKey(args: InferRequestType<typeof client.notes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['notes', '/notes', keyArgs] as const
}

export function getNotesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.notes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNotesQueryKey>
  >({
    queryKey: getNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNotes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNotesMutationKey() {
  return ['notes', '/notes', 'POST'] as const
}

export function getPostNotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.$post>>>>>,
    TError,
    InferRequestType<typeof client.notes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notes.$post>) {
      return parseResponse(client.notes.$post(args, options))
    },
  })
}

export function usePostNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.$post>>>>>,
        TError,
        InferRequestType<typeof client.notes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNotesNoteIdQueryKey(
  args: InferRequestType<(typeof client.notes)[':noteId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notes', '/notes/:noteId', keyArgs] as const
}

export function getNotesNoteIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':noteId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notes)[':noteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':noteId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotesNoteIdQueryKey>
  >({
    queryKey: getNotesNoteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notes[':noteId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNotesNoteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':noteId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notes)[':noteId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':noteId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotesNoteIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotesNoteIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotesNoteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':noteId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notes)[':noteId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':noteId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotesNoteIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotesNoteIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTasksQueryKey(args: InferRequestType<typeof client.tasks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks', keyArgs] as const
}

export function getTasksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTasksQueryKey>
  >({
    queryKey: getTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTasksMutationKey() {
  return ['tasks', '/tasks', 'POST'] as const
}

export function getPostTasksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$post>>>>>,
    TError,
    InferRequestType<typeof client.tasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tasks.$post>) {
      return parseResponse(client.tasks.$post(args, options))
    },
  })
}

export function usePostTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$post>>>>>,
        TError,
        InferRequestType<typeof client.tasks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskId', keyArgs] as const
}

export function getTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIdQueryKey>
  >({
    queryKey: getTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTasksTaskId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTasksTaskIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTasksTaskId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTasksTaskIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTasksTaskIdMutationKey() {
  return ['tasks', '/tasks/:taskId', 'PUT'] as const
}

export function getPutTasksTaskIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTasksTaskIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':taskId']['$put']>) {
      return parseResponse(client.tasks[':taskId'].$put(args, options))
    },
  })
}

export function usePutTasksTaskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':taskId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTasksTaskIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTasksTaskIdCommentsMutationKey() {
  return ['tasks', '/tasks/:taskId/comments', 'POST'] as const
}

export function getPostTasksTaskIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskId']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':taskId']['comments']['$post']>,
    ) {
      return parseResponse(client.tasks[':taskId'].comments.$post(args, options))
    },
  })
}

export function usePostTasksTaskIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':taskId']['comments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':taskId']['comments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskIdCommentsMutationOptions<TError, TOnMutateResult>(
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

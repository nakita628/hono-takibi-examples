import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNotesKey() {
  return ['notes'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getGetNotesKey(args: InferRequestType<typeof client.notes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['notes', '/notes', keyArgs] as const
}

export function useGetNotes<TError = unknown>(
  args: InferRequestType<typeof client.notes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.notes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNotes<TError = unknown>(
  args: InferRequestType<typeof client.notes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.notes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostNotesKey() {
  return ['notes', '/notes', 'POST'] as const
}

export function usePostNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.notes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.notes.$post> }) =>
        parseResponse(client.notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotesNoteIdKey(
  args: InferRequestType<(typeof client.notes)[':noteId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notes', '/notes/:noteId', keyArgs] as const
}

export function useGetNotesNoteId<TError = unknown>(
  args: InferRequestType<(typeof client.notes)[':noteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':noteId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotesNoteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':noteId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notes[':noteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotesNoteId<TError = unknown>(
  args: InferRequestType<(typeof client.notes)[':noteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':noteId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotesNoteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notes)[':noteId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notes[':noteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTasksKey(args: InferRequestType<typeof client.tasks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks', keyArgs] as const
}

export function useGetTasks<TError = unknown>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tasks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTasks<TError = unknown>(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tasks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTasksKey() {
  return ['tasks', '/tasks', 'POST'] as const
}

export function usePostTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tasks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tasks.$post> }) =>
        parseResponse(client.tasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksTaskIdKey(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskId', keyArgs] as const
}

export function useGetTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksTaskIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTasksTaskIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTasksTaskIdKey() {
  return ['tasks', '/tasks/:taskId', 'PUT'] as const
}

export function usePutTasksTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTasksTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':taskId']['$put']> },
      ) => parseResponse(client.tasks[':taskId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksTaskIdCommentsKey() {
  return ['tasks', '/tasks/:taskId/comments', 'POST'] as const
}

export function usePostTasksTaskIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskId']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks)[':taskId']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksTaskIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks)[':taskId']['comments']['$post']> },
      ) => parseResponse(client.tasks[':taskId'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

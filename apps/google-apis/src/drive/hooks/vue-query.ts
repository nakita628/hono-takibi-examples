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

export function getAboutKey() {
  return ['about'] as const
}

export function getChangesKey() {
  return ['changes'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getDrivesKey() {
  return ['drives'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getTeamdrivesKey() {
  return ['teamdrives'] as const
}

export function getAboutQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.about.$get>>,
) {
  return ['about', '/about', toValue(args)] as const
}

export function getAboutQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.about.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAboutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.about.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAbout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.about.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
          ReturnType<typeof getAboutQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAboutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAboutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.about.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changes.$get>>,
) {
  return ['changes', '/changes', toValue(args)] as const
}

export function getChangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.changes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
          >,
          ReturnType<typeof getChangesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChangesStartPageTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changes.startPageToken.$get>>,
) {
  return ['changes', '/changes/startPageToken', toValue(args)] as const
}

export function getChangesStartPageTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changes.startPageToken.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChangesStartPageTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.changes.startPageToken.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChangesStartPageToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.startPageToken.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.changes.startPageToken.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.changes.startPageToken.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.changes.startPageToken.$get>>>
            >
          >,
          ReturnType<typeof getChangesStartPageTokenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.changes.startPageToken.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChangesStartPageTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChangesStartPageTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.changes.startPageToken.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChangesWatchMutationKey() {
  return ['changes', '/changes/watch', 'POST'] as const
}

export function getPostChangesWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.watch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.changes.watch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChangesWatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.changes.watch.$post>) {
      return parseResponse(client.changes.watch.$post(args, options))
    },
  })
}

export function usePostChangesWatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.watch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.changes.watch.$post>,
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
  const mutationDefaults = getPostChangesWatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelsStopMutationKey() {
  return ['channels', '/channels/stop', 'POST'] as const
}

export function getPostChannelsStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.stop.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.channels.stop.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsStopMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.stop.$post>) {
      return parseResponse(client.channels.stop.$post(args, options))
    },
  })
}

export function usePostChannelsStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.stop.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.channels.stop.$post>,
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
  const mutationDefaults = getPostChannelsStopMutationOptions<TError, TOnMutateResult>(
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

export function getDrivesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drives.$get>>,
) {
  return ['drives', '/drives', toValue(args)] as const
}

export function getDrivesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drives.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDrivesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.drives.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDrives<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drives.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
          ReturnType<typeof getDrivesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDrivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDrivesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.drives.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDrivesMutationKey() {
  return ['drives', '/drives', 'POST'] as const
}

export function getPostDrivesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$post>>>>>,
    TError,
    InferRequestType<typeof client.drives.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDrivesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.drives.$post>) {
      return parseResponse(client.drives.$post(args, options))
    },
  })
}

export function usePostDrives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.drives.$post>,
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
  const mutationDefaults = getPostDrivesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDrivesDriveIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.drives)[':driveId']['$get']>>,
) {
  return ['drives', '/drives/:driveId', toValue(args)] as const
}

export function getDrivesDriveIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.drives)[':driveId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDrivesDriveIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.drives[':driveId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDrivesDriveId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.drives)[':driveId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$get']>>>
            >
          >,
          ReturnType<typeof getDrivesDriveIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDrivesDriveIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDrivesDriveIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.drives[':driveId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDrivesDriveIdMutationKey() {
  return ['drives', '/drives/:driveId', 'DELETE'] as const
}

export function getDeleteDrivesDriveIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.drives)[':driveId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDrivesDriveIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.drives)[':driveId']['$delete']>) {
      return parseResponse(client.drives[':driveId'].$delete(args, options))
    },
  })
}

export function useDeleteDrivesDriveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.drives)[':driveId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.drives)[':driveId']['$delete']>,
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
  const mutationDefaults = getDeleteDrivesDriveIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchDrivesDriveIdMutationKey() {
  return ['drives', '/drives/:driveId', 'PATCH'] as const
}

export function getPatchDrivesDriveIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.drives)[':driveId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDrivesDriveIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.drives)[':driveId']['$patch']>) {
      return parseResponse(client.drives[':driveId'].$patch(args, options))
    },
  })
}

export function usePatchDrivesDriveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.drives)[':driveId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.drives)[':driveId']['$patch']>,
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
  const mutationDefaults = getPatchDrivesDriveIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostDrivesDriveIdHideMutationKey() {
  return ['drives', '/drives/:driveId/hide', 'POST'] as const
}

export function getPostDrivesDriveIdHideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.drives)[':driveId']['hide']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.drives)[':driveId']['hide']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDrivesDriveIdHideMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.drives)[':driveId']['hide']['$post']>) {
      return parseResponse(client.drives[':driveId'].hide.$post(args, options))
    },
  })
}

export function usePostDrivesDriveIdHide<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.drives)[':driveId']['hide']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.drives)[':driveId']['hide']['$post']>,
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
  const mutationDefaults = getPostDrivesDriveIdHideMutationOptions<TError, TOnMutateResult>(
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

export function getPostDrivesDriveIdUnhideMutationKey() {
  return ['drives', '/drives/:driveId/unhide', 'POST'] as const
}

export function getPostDrivesDriveIdUnhideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.drives)[':driveId']['unhide']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.drives)[':driveId']['unhide']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDrivesDriveIdUnhideMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.drives)[':driveId']['unhide']['$post']>,
    ) {
      return parseResponse(client.drives[':driveId'].unhide.$post(args, options))
    },
  })
}

export function usePostDrivesDriveIdUnhide<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.drives)[':driveId']['unhide']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.drives)[':driveId']['unhide']['$post']>,
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
  const mutationDefaults = getPostDrivesDriveIdUnhideMutationOptions<TError, TOnMutateResult>(
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

export function getFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
) {
  return ['files', '/files', toValue(args)] as const
}

export function getFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
          ReturnType<typeof getFilesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFilesMutationKey() {
  return ['files', '/files', 'POST'] as const
}

export function getPostFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    InferRequestType<typeof client.files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.$post>) {
      return parseResponse(client.files.$post(args, options))
    },
  })
}

export function usePostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
          TError,
          InferRequestType<typeof client.files.$post>,
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
  const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesGenerateIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.generateIds.$get>>,
) {
  return ['files', '/files/generateIds', toValue(args)] as const
}

export function getFilesGenerateIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.generateIds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesGenerateIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files.generateIds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesGenerateIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.generateIds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.generateIds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.files.generateIds.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.files.generateIds.$get>>>
            >
          >,
          ReturnType<typeof getFilesGenerateIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.generateIds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesGenerateIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesGenerateIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files.generateIds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFilesTrashMutationKey() {
  return ['files', '/files/trash', 'DELETE'] as const
}

export function getDeleteFilesTrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.trash.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.files.trash.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesTrashMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.trash.$delete>) {
      return parseResponse(client.files.trash.$delete(args, options))
    },
  })
}

export function useDeleteFilesTrash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.trash.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.files.trash.$delete>,
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
  const mutationDefaults = getDeleteFilesTrashMutationOptions<TError, TOnMutateResult>(
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

export function getFilesFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['$get']>>,
) {
  return ['files', '/files/:fileId', toValue(args)] as const
}

export function getFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':fileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$get']>>>
            >
          >,
          ReturnType<typeof getFilesFileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':fileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFilesFileIdMutationKey() {
  return ['files', '/files/:fileId', 'DELETE'] as const
}

export function getDeleteFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':fileId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':fileId']['$delete']>) {
      return parseResponse(client.files[':fileId'].$delete(args, options))
    },
  })
}

export function useDeleteFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':fileId']['$delete']>,
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
  const mutationDefaults = getDeleteFilesFileIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchFilesFileIdMutationKey() {
  return ['files', '/files/:fileId', 'PATCH'] as const
}

export function getPatchFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':fileId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFilesFileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':fileId']['$patch']>) {
      return parseResponse(client.files[':fileId'].$patch(args, options))
    },
  })
}

export function usePatchFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':fileId']['$patch']>,
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
  const mutationDefaults = getPatchFilesFileIdMutationOptions<TError, TOnMutateResult>(
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

export function getFilesFileIdCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['comments']['$get']>>,
) {
  return ['files', '/files/:fileId/comments', toValue(args)] as const
}

export function getFilesFileIdCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':fileId'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':fileId']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':fileId'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFilesFileIdCommentsMutationKey() {
  return ['files', '/files/:fileId/comments', 'POST'] as const
}

export function getPostFilesFileIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':fileId']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':fileId']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':fileId']['comments']['$post']>,
    ) {
      return parseResponse(client.files[':fileId'].comments.$post(args, options))
    },
  })
}

export function usePostFilesFileIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':fileId']['comments']['$post']>,
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
  const mutationDefaults = getPostFilesFileIdCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getFilesFileIdCommentsCommentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>
  >,
) {
  return ['files', '/files/:fileId/comments/:commentId', toValue(args)] as const
}

export function getFilesFileIdCommentsCommentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdCommentsCommentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':fileId'].comments[':commentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>
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
                  ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFilesFileIdCommentsCommentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdCommentsCommentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdCommentsCommentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':fileId'].comments[':commentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFilesFileIdCommentsCommentIdMutationKey() {
  return ['files', '/files/:fileId/comments/:commentId', 'DELETE'] as const
}

export function getDeleteFilesFileIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$delete']>,
    ) {
      return parseResponse(client.files[':fileId'].comments[':commentId'].$delete(args, options))
    },
  })
}

export function useDeleteFilesFileIdCommentsCommentId<
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
                  ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$delete']>,
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
  const mutationDefaults = getDeleteFilesFileIdCommentsCommentIdMutationOptions<
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

export function getPatchFilesFileIdCommentsCommentIdMutationKey() {
  return ['files', '/files/:fileId/comments/:commentId', 'PATCH'] as const
}

export function getPatchFilesFileIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFilesFileIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$patch']>,
    ) {
      return parseResponse(client.files[':fileId'].comments[':commentId'].$patch(args, options))
    },
  })
}

export function usePatchFilesFileIdCommentsCommentId<
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
                  ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$patch']>,
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
  const mutationDefaults = getPatchFilesFileIdCommentsCommentIdMutationOptions<
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

export function getFilesFileIdCommentsCommentIdRepliesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']>
  >,
) {
  return ['files', '/files/:fileId/comments/:commentId/replies', toValue(args)] as const
}

export function getFilesFileIdCommentsCommentIdRepliesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdCommentsCommentIdRepliesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':fileId'].comments[':commentId'].replies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdCommentsCommentIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']>
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
                    (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
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
                    (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFilesFileIdCommentsCommentIdRepliesQueryKey>
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
              (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdCommentsCommentIdRepliesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdCommentsCommentIdRepliesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':fileId'].comments[':commentId'].replies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFilesFileIdCommentsCommentIdRepliesMutationKey() {
  return ['files', '/files/:fileId/comments/:commentId/replies', 'POST'] as const
}

export function getPostFilesFileIdCommentsCommentIdRepliesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdCommentsCommentIdRepliesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$post']
      >,
    ) {
      return parseResponse(
        client.files[':fileId'].comments[':commentId'].replies.$post(args, options),
      )
    },
  })
}

export function usePostFilesFileIdCommentsCommentIdReplies<
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
                    (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$post']
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
  const mutationDefaults = getPostFilesFileIdCommentsCommentIdRepliesMutationOptions<
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

export function getFilesFileIdCommentsCommentIdRepliesReplyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
    >
  >,
) {
  return ['files', '/files/:fileId/comments/:commentId/replies/:replyId', toValue(args)] as const
}

export function getFilesFileIdCommentsCommentIdRepliesReplyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdCommentsCommentIdRepliesReplyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':fileId'].comments[':commentId'].replies[':replyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdCommentsCommentIdRepliesReplyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
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
                    (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
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
                    (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFilesFileIdCommentsCommentIdRepliesReplyIdQueryKey>
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
              (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdCommentsCommentIdRepliesReplyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdCommentsCommentIdRepliesReplyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':fileId'].comments[':commentId'].replies[':replyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFilesFileIdCommentsCommentIdRepliesReplyIdMutationKey() {
  return ['files', '/files/:fileId/comments/:commentId/replies/:replyId', 'DELETE'] as const
}

export function getDeleteFilesFileIdCommentsCommentIdRepliesReplyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdCommentsCommentIdRepliesReplyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.files[':fileId'].comments[':commentId'].replies[':replyId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFilesFileIdCommentsCommentIdRepliesReplyId<
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
                    (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$delete']
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
  const mutationDefaults = getDeleteFilesFileIdCommentsCommentIdRepliesReplyIdMutationOptions<
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

export function getPatchFilesFileIdCommentsCommentIdRepliesReplyIdMutationKey() {
  return ['files', '/files/:fileId/comments/:commentId/replies/:replyId', 'PATCH'] as const
}

export function getPatchFilesFileIdCommentsCommentIdRepliesReplyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchFilesFileIdCommentsCommentIdRepliesReplyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$patch']
      >,
    ) {
      return parseResponse(
        client.files[':fileId'].comments[':commentId'].replies[':replyId'].$patch(args, options),
      )
    },
  })
}

export function usePatchFilesFileIdCommentsCommentIdRepliesReplyId<
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
                    (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$patch']
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
  const mutationDefaults = getPatchFilesFileIdCommentsCommentIdRepliesReplyIdMutationOptions<
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

export function getPostFilesFileIdCopyMutationKey() {
  return ['files', '/files/:fileId/copy', 'POST'] as const
}

export function getPostFilesFileIdCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['copy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':fileId']['copy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdCopyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':fileId']['copy']['$post']>) {
      return parseResponse(client.files[':fileId'].copy.$post(args, options))
    },
  })
}

export function usePostFilesFileIdCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['copy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':fileId']['copy']['$post']>,
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
  const mutationDefaults = getPostFilesFileIdCopyMutationOptions<TError, TOnMutateResult>(
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

export function getFilesFileIdExportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['export']['$get']>>,
) {
  return ['files', '/files/:fileId/export', toValue(args)] as const
}

export function getFilesFileIdExportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['export']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':fileId'].export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['export']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['export']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['export']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['export']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdExportQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':fileId']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':fileId'].export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesFileIdListLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['listLabels']['$get']>>,
) {
  return ['files', '/files/:fileId/listLabels', toValue(args)] as const
}

export function getFilesFileIdListLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['listLabels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdListLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':fileId'].listLabels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdListLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['listLabels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['listLabels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['listLabels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['listLabels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdListLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':fileId']['listLabels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdListLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdListLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':fileId'].listLabels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFilesFileIdModifyLabelsMutationKey() {
  return ['files', '/files/:fileId/modifyLabels', 'POST'] as const
}

export function getPostFilesFileIdModifyLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':fileId']['modifyLabels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':fileId']['modifyLabels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdModifyLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':fileId']['modifyLabels']['$post']>,
    ) {
      return parseResponse(client.files[':fileId'].modifyLabels.$post(args, options))
    },
  })
}

export function usePostFilesFileIdModifyLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['modifyLabels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':fileId']['modifyLabels']['$post']>,
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
  const mutationDefaults = getPostFilesFileIdModifyLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getFilesFileIdPermissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['permissions']['$get']>>,
) {
  return ['files', '/files/:fileId/permissions', toValue(args)] as const
}

export function getFilesFileIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['permissions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':fileId'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['permissions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdPermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':fileId']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':fileId'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFilesFileIdPermissionsMutationKey() {
  return ['files', '/files/:fileId/permissions', 'POST'] as const
}

export function getPostFilesFileIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':fileId']['permissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':fileId']['permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.files)[':fileId']['permissions']['$post']>,
    ) {
      return parseResponse(client.files[':fileId'].permissions.$post(args, options))
    },
  })
}

export function usePostFilesFileIdPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['permissions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':fileId']['permissions']['$post']>,
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
  const mutationDefaults = getPostFilesFileIdPermissionsMutationOptions<TError, TOnMutateResult>(
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

export function getFilesFileIdPermissionsPermissionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>
  >,
) {
  return ['files', '/files/:fileId/permissions/:permissionId', toValue(args)] as const
}

export function getFilesFileIdPermissionsPermissionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdPermissionsPermissionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':fileId'].permissions[':permissionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdPermissionsPermissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>
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
                    (typeof client.files)[':fileId']['permissions'][':permissionId']['$get']
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
                    (typeof client.files)[':fileId']['permissions'][':permissionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFilesFileIdPermissionsPermissionIdQueryKey>
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
            ReturnType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdPermissionsPermissionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdPermissionsPermissionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':fileId'].permissions[':permissionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFilesFileIdPermissionsPermissionIdMutationKey() {
  return ['files', '/files/:fileId/permissions/:permissionId', 'DELETE'] as const
}

export function getDeleteFilesFileIdPermissionsPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdPermissionsPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':fileId']['permissions'][':permissionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.files[':fileId'].permissions[':permissionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFilesFileIdPermissionsPermissionId<
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
                    (typeof client.files)[':fileId']['permissions'][':permissionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.files)[':fileId']['permissions'][':permissionId']['$delete']
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
  const mutationDefaults = getDeleteFilesFileIdPermissionsPermissionIdMutationOptions<
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

export function getPatchFilesFileIdPermissionsPermissionIdMutationKey() {
  return ['files', '/files/:fileId/permissions/:permissionId', 'PATCH'] as const
}

export function getPatchFilesFileIdPermissionsPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFilesFileIdPermissionsPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':fileId']['permissions'][':permissionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.files[':fileId'].permissions[':permissionId'].$patch(args, options),
      )
    },
  })
}

export function usePatchFilesFileIdPermissionsPermissionId<
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
                    (typeof client.files)[':fileId']['permissions'][':permissionId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.files)[':fileId']['permissions'][':permissionId']['$patch']
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
  const mutationDefaults = getPatchFilesFileIdPermissionsPermissionIdMutationOptions<
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

export function getFilesFileIdRevisionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['revisions']['$get']>>,
) {
  return ['files', '/files/:fileId/revisions', toValue(args)] as const
}

export function getFilesFileIdRevisionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['revisions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':fileId'].revisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['revisions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':fileId']['revisions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['revisions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['revisions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdRevisionsQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':fileId']['revisions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':fileId'].revisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesFileIdRevisionsRevisionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>
  >,
) {
  return ['files', '/files/:fileId/revisions/:revisionId', toValue(args)] as const
}

export function getFilesFileIdRevisionsRevisionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdRevisionsRevisionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':fileId'].revisions[':revisionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdRevisionsRevisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>
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
                  ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFilesFileIdRevisionsRevisionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdRevisionsRevisionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdRevisionsRevisionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':fileId'].revisions[':revisionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFilesFileIdRevisionsRevisionIdMutationKey() {
  return ['files', '/files/:fileId/revisions/:revisionId', 'DELETE'] as const
}

export function getDeleteFilesFileIdRevisionsRevisionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdRevisionsRevisionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':fileId']['revisions'][':revisionId']['$delete']
      >,
    ) {
      return parseResponse(client.files[':fileId'].revisions[':revisionId'].$delete(args, options))
    },
  })
}

export function useDeleteFilesFileIdRevisionsRevisionId<
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
                    (typeof client.files)[':fileId']['revisions'][':revisionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$delete']>,
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
  const mutationDefaults = getDeleteFilesFileIdRevisionsRevisionIdMutationOptions<
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

export function getPatchFilesFileIdRevisionsRevisionIdMutationKey() {
  return ['files', '/files/:fileId/revisions/:revisionId', 'PATCH'] as const
}

export function getPatchFilesFileIdRevisionsRevisionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFilesFileIdRevisionsRevisionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.files)[':fileId']['revisions'][':revisionId']['$patch']
      >,
    ) {
      return parseResponse(client.files[':fileId'].revisions[':revisionId'].$patch(args, options))
    },
  })
}

export function usePatchFilesFileIdRevisionsRevisionId<
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
                  ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$patch']>,
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
  const mutationDefaults = getPatchFilesFileIdRevisionsRevisionIdMutationOptions<
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

export function getPostFilesFileIdWatchMutationKey() {
  return ['files', '/files/:fileId/watch', 'POST'] as const
}

export function getPostFilesFileIdWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':fileId']['watch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':fileId']['watch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesFileIdWatchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':fileId']['watch']['$post']>) {
      return parseResponse(client.files[':fileId'].watch.$post(args, options))
    },
  })
}

export function usePostFilesFileIdWatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':fileId']['watch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':fileId']['watch']['$post']>,
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
  const mutationDefaults = getPostFilesFileIdWatchMutationOptions<TError, TOnMutateResult>(
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

export function getTeamdrivesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teamdrives.$get>>,
) {
  return ['teamdrives', '/teamdrives', toValue(args)] as const
}

export function getTeamdrivesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teamdrives.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamdrivesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teamdrives.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeamdrives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teamdrives.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$get>>>>
          >,
          ReturnType<typeof getTeamdrivesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamdrivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamdrivesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teamdrives.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeamdrivesMutationKey() {
  return ['teamdrives', '/teamdrives', 'POST'] as const
}

export function getPostTeamdrivesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$post>>>>>,
    TError,
    InferRequestType<typeof client.teamdrives.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamdrivesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.teamdrives.$post>) {
      return parseResponse(client.teamdrives.$post(args, options))
    },
  })
}

export function usePostTeamdrives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.teamdrives.$post>,
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
  const mutationDefaults = getPostTeamdrivesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamdrivesTeamDriveIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$get']>>,
) {
  return ['teamdrives', '/teamdrives/:teamDriveId', toValue(args)] as const
}

export function getTeamdrivesTeamDriveIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamdrivesTeamDriveIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teamdrives[':teamDriveId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamdrivesTeamDriveId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamdrivesTeamDriveIdQueryKey>
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
          Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamdrivesTeamDriveIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamdrivesTeamDriveIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teamdrives[':teamDriveId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTeamdrivesTeamDriveIdMutationKey() {
  return ['teamdrives', '/teamdrives/:teamDriveId', 'DELETE'] as const
}

export function getDeleteTeamdrivesTeamDriveIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamdrivesTeamDriveIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$delete']>,
    ) {
      return parseResponse(client.teamdrives[':teamDriveId'].$delete(args, options))
    },
  })
}

export function useDeleteTeamdrivesTeamDriveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$delete']>,
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
  const mutationDefaults = getDeleteTeamdrivesTeamDriveIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchTeamdrivesTeamDriveIdMutationKey() {
  return ['teamdrives', '/teamdrives/:teamDriveId', 'PATCH'] as const
}

export function getPatchTeamdrivesTeamDriveIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTeamdrivesTeamDriveIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$patch']>) {
      return parseResponse(client.teamdrives[':teamDriveId'].$patch(args, options))
    },
  })
}

export function usePatchTeamdrivesTeamDriveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$patch']>,
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
  const mutationDefaults = getPatchTeamdrivesTeamDriveIdMutationOptions<TError, TOnMutateResult>(
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

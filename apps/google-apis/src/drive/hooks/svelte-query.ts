import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function getAboutQueryKey(args: InferRequestType<typeof client.about.$get>) {
  return ['about', '/about', args] as const
}

export function getAboutQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.about.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAboutQueryKey>
  >({
    queryKey: getAboutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.about.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAbout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.about.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAboutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAboutQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getChangesQueryKey(args: InferRequestType<typeof client.changes.$get>) {
  return ['changes', '/changes', args] as const
}

export function getChangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.changes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChangesQueryKey>
  >({
    queryKey: getChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.changes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.changes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getChangesStartPageTokenQueryKey(
  args: InferRequestType<typeof client.changes.startPageToken.$get>,
) {
  return ['changes', '/changes/startPageToken', args] as const
}

export function getChangesStartPageTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.startPageToken.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.changes.startPageToken.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.changes.startPageToken.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChangesStartPageTokenQueryKey>
  >({
    queryKey: getChangesStartPageTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.changes.startPageToken.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChangesStartPageToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.startPageToken.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.changes.startPageToken.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.changes.startPageToken.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChangesStartPageTokenQueryKey>
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
      ...getChangesStartPageTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostChangesWatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.watch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.changes.watch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChangesWatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostChannelsStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.stop.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.channels.stop.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelsStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDrivesQueryKey(args: InferRequestType<typeof client.drives.$get>) {
  return ['drives', '/drives', args] as const
}

export function getDrivesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.drives.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDrivesQueryKey>
  >({
    queryKey: getDrivesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.drives.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDrives<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.drives.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDrivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDrivesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDrives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$post>>>>>,
        TError,
        InferRequestType<typeof client.drives.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDrivesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDrivesDriveIdQueryKey(
  args: InferRequestType<(typeof client.drives)[':driveId']['$get']>,
) {
  return ['drives', '/drives/:driveId', args] as const
}

export function getDrivesDriveIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.drives)[':driveId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDrivesDriveIdQueryKey>
  >({
    queryKey: getDrivesDriveIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.drives[':driveId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDrivesDriveId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.drives)[':driveId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDrivesDriveIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDrivesDriveIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteDrivesDriveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.drives)[':driveId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDrivesDriveIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchDrivesDriveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.drives)[':driveId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDrivesDriveIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDrivesDriveIdHide<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDrivesDriveIdHideMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDrivesDriveIdUnhide<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDrivesDriveIdUnhideMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesQueryKey(args: InferRequestType<typeof client.files.$get>) {
  return ['files', '/files', args] as const
}

export function getFilesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.files.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >({
    queryKey: getFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.files.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
        TError,
        InferRequestType<typeof client.files.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesGenerateIdsQueryKey(
  args: InferRequestType<typeof client.files.generateIds.$get>,
) {
  return ['files', '/files/generateIds', args] as const
}

export function getFilesGenerateIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.generateIds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.files.generateIds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.generateIds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesGenerateIdsQueryKey>
  >({
    queryKey: getFilesGenerateIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files.generateIds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilesGenerateIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.generateIds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.files.generateIds.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.files.generateIds.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesGenerateIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesGenerateIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteFilesTrash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.trash.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.files.trash.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFilesTrashMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesFileIdQueryKey(
  args: InferRequestType<(typeof client.files)[':fileId']['$get']>,
) {
  return ['files', '/files/:fileId', args] as const
}

export function getFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdQueryKey>
  >({
    queryKey: getFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':fileId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':fileId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesFileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':fileId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFilesFileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':fileId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFilesFileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesFileIdCommentsQueryKey(
  args: InferRequestType<(typeof client.files)[':fileId']['comments']['$get']>,
) {
  return ['files', '/files/:fileId/comments', args] as const
}

export function getFilesFileIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':fileId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFilesFileIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':fileId'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':fileId']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesFileIdCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFilesFileIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesFileIdCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesFileIdCommentsCommentIdQueryKey(
  args: InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>,
) {
  return ['files', '/files/:fileId/comments/:commentId', args] as const
}

export function getFilesFileIdCommentsCommentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFilesFileIdCommentsCommentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':fileId'].comments[':commentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getFilesFileIdCommentsCommentIdQueryKey>
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
      ...getFilesFileIdCommentsCommentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteFilesFileIdCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFilesFileIdCommentsCommentIdMutationOptions<
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

export function createPatchFilesFileIdCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFilesFileIdCommentsCommentIdMutationOptions<
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

export function getFilesFileIdCommentsCommentIdRepliesQueryKey(
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
  >,
) {
  return ['files', '/files/:fileId/comments/:commentId/replies', args] as const
}

export function getFilesFileIdCommentsCommentIdRepliesQueryOptions<
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
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFilesFileIdCommentsCommentIdRepliesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':fileId'].comments[':commentId'].replies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdCommentsCommentIdReplies<
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
  args: () => InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFilesFileIdCommentsCommentIdRepliesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostFilesFileIdCommentsCommentIdReplies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesFileIdCommentsCommentIdRepliesMutationOptions<
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

export function getFilesFileIdCommentsCommentIdRepliesReplyIdQueryKey(
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
  >,
) {
  return ['files', '/files/:fileId/comments/:commentId/replies/:replyId', args] as const
}

export function getFilesFileIdCommentsCommentIdRepliesReplyIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFilesFileIdCommentsCommentIdRepliesReplyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':fileId'].comments[':commentId'].replies[':replyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdCommentsCommentIdRepliesReplyId<
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
  args: () => InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFilesFileIdCommentsCommentIdRepliesReplyIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteFilesFileIdCommentsCommentIdRepliesReplyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFilesFileIdCommentsCommentIdRepliesReplyIdMutationOptions<
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

export function createPatchFilesFileIdCommentsCommentIdRepliesReplyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFilesFileIdCommentsCommentIdRepliesReplyIdMutationOptions<
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

export function createPostFilesFileIdCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesFileIdCopyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesFileIdExportQueryKey(
  args: InferRequestType<(typeof client.files)[':fileId']['export']['$get']>,
) {
  return ['files', '/files/:fileId/export', args] as const
}

export function getFilesFileIdExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['export']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':fileId']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFilesFileIdExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':fileId'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['export']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':fileId']['export']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesFileIdExportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFilesFileIdListLabelsQueryKey(
  args: InferRequestType<(typeof client.files)[':fileId']['listLabels']['$get']>,
) {
  return ['files', '/files/:fileId/listLabels', args] as const
}

export function getFilesFileIdListLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['listLabels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':fileId']['listLabels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFilesFileIdListLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':fileId'].listLabels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdListLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['listLabels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':fileId']['listLabels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFilesFileIdListLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostFilesFileIdModifyLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesFileIdModifyLabelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesFileIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.files)[':fileId']['permissions']['$get']>,
) {
  return ['files', '/files/:fileId/permissions', args] as const
}

export function getFilesFileIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':fileId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFilesFileIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':fileId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':fileId']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFilesFileIdPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostFilesFileIdPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesFileIdPermissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesFileIdPermissionsPermissionIdQueryKey(
  args: InferRequestType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>,
) {
  return ['files', '/files/:fileId/permissions/:permissionId', args] as const
}

export function getFilesFileIdPermissionsPermissionIdQueryOptions<
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
  args: InferRequestType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFilesFileIdPermissionsPermissionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':fileId'].permissions[':permissionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdPermissionsPermissionId<
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
  args: () => InferRequestType<
    (typeof client.files)[':fileId']['permissions'][':permissionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFilesFileIdPermissionsPermissionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteFilesFileIdPermissionsPermissionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFilesFileIdPermissionsPermissionIdMutationOptions<
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

export function createPatchFilesFileIdPermissionsPermissionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFilesFileIdPermissionsPermissionIdMutationOptions<
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

export function getFilesFileIdRevisionsQueryKey(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions']['$get']>,
) {
  return ['files', '/files/:fileId/revisions', args] as const
}

export function getFilesFileIdRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['revisions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFilesFileIdRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':fileId'].revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['revisions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':fileId']['revisions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFilesFileIdRevisionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFilesFileIdRevisionsRevisionIdQueryKey(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>,
) {
  return ['files', '/files/:fileId/revisions/:revisionId', args] as const
}

export function getFilesFileIdRevisionsRevisionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFilesFileIdRevisionsRevisionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':fileId'].revisions[':revisionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdRevisionsRevisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.files)[':fileId']['revisions'][':revisionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getFilesFileIdRevisionsRevisionIdQueryKey>
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
      ...getFilesFileIdRevisionsRevisionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteFilesFileIdRevisionsRevisionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFilesFileIdRevisionsRevisionIdMutationOptions<
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

export function createPatchFilesFileIdRevisionsRevisionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFilesFileIdRevisionsRevisionIdMutationOptions<
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

export function createPostFilesFileIdWatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesFileIdWatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTeamdrivesQueryKey(args: InferRequestType<typeof client.teamdrives.$get>) {
  return ['teamdrives', '/teamdrives', args] as const
}

export function getTeamdrivesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.teamdrives.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamdrivesQueryKey>
  >({
    queryKey: getTeamdrivesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teamdrives.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeamdrives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.teamdrives.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamdrivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamdrivesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTeamdrives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.teamdrives.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTeamdrivesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTeamdrivesTeamDriveIdQueryKey(
  args: InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$get']>,
) {
  return ['teamdrives', '/teamdrives/:teamDriveId', args] as const
}

export function getTeamdrivesTeamDriveIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamdrivesTeamDriveIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teamdrives[':teamDriveId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamdrivesTeamDriveId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTeamdrivesTeamDriveIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteTeamdrivesTeamDriveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTeamdrivesTeamDriveIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchTeamdrivesTeamDriveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTeamdrivesTeamDriveIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

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

export function getArchiveKey() {
  return ['archive'] as const
}

export function getAreaKey() {
  return ['area'] as const
}

export function getClutterKey() {
  return ['clutter'] as const
}

export function getInterferenceKey() {
  return ['interference'] as const
}

export function getMeshKey() {
  return ['mesh'] as const
}

export function getNetworkKey() {
  return ['network'] as const
}

export function getPathKey() {
  return ['path'] as const
}

export function getPointsKey() {
  return ['points'] as const
}

export function getArchiveDeleteQueryKey(
  args: InferRequestType<typeof client.archive.delete.$get>,
) {
  return ['archive', '/archive/delete', args] as const
}

export function getArchiveDeleteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.archive.delete.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchiveDeleteQueryKey>
  >({
    queryKey: getArchiveDeleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.archive.delete.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createArchiveDelete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.archive.delete.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getArchiveDeleteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArchiveDeleteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getArchiveDeleteNetworkQueryKey(
  args: InferRequestType<typeof client.archive.delete.network.$get>,
) {
  return ['archive', '/archive/delete/network', args] as const
}

export function getArchiveDeleteNetworkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.network.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.archive.delete.network.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.network.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArchiveDeleteNetworkQueryKey>
  >({
    queryKey: getArchiveDeleteNetworkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.archive.delete.network.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArchiveDeleteNetwork<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.network.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.archive.delete.network.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.network.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArchiveDeleteNetworkQueryKey>
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
      ...getArchiveDeleteNetworkQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getArchiveExportQueryKey(
  args: InferRequestType<typeof client.archive.export.$get>,
) {
  return ['archive', '/archive/export', args] as const
}

export function getArchiveExportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.export.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.archive.export.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.export.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchiveExportQueryKey>
  >({
    queryKey: getArchiveExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.archive.export.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createArchiveExport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.export.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.archive.export.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.export.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getArchiveExportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArchiveExportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getArchiveListQueryKey(args: InferRequestType<typeof client.archive.list.$get>) {
  return ['archive', '/archive/list', args] as const
}

export function getArchiveListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.archive.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArchiveListQueryKey>
  >({
    queryKey: getArchiveListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.archive.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createArchiveList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.archive.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getArchiveListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArchiveListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAreaMutationKey() {
  return ['area', '/area', 'POST'] as const
}

export function getPostAreaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.area.$post>>>>>,
    TError,
    InferRequestType<typeof client.area.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAreaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.area.$post>) {
      return parseResponse(client.area.$post(args, options))
    },
  })
}

export function createPostArea<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.area.$post>>>>>,
        TError,
        InferRequestType<typeof client.area.$post>,
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
    const mutationDefaults = getPostAreaMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClutterAddMutationKey() {
  return ['clutter', '/clutter/add', 'POST'] as const
}

export function getPostClutterAddMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clutter.add.$post>>>>>,
    TError,
    InferRequestType<typeof client.clutter.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClutterAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clutter.add.$post>) {
      return parseResponse(client.clutter.add.$post(args, options))
    },
  })
}

export function createPostClutterAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clutter.add.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.clutter.add.$post>,
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
    const mutationDefaults = getPostClutterAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInterferenceQueryKey(args: InferRequestType<typeof client.interference.$get>) {
  return ['interference', '/interference', args] as const
}

export function getInterferenceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interference.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.interference.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interference.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInterferenceQueryKey>
  >({
    queryKey: getInterferenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.interference.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInterference<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interference.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.interference.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interference.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInterferenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInterferenceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMeshQueryKey(args: InferRequestType<typeof client.mesh.$get>) {
  return ['mesh', '/mesh', args] as const
}

export function getMeshQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mesh.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mesh.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mesh.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeshQueryKey>
  >({
    queryKey: getMeshQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mesh.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMesh<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mesh.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mesh.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mesh.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeshQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeshQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNetworkQueryKey(args: InferRequestType<typeof client.network.$get>) {
  return ['network', '/network', args] as const
}

export function getNetworkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.network.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworkQueryKey>
  >({
    queryKey: getNetworkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.network.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNetwork<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.network.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNetworkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNetworkQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPathMutationKey() {
  return ['path', '/path', 'POST'] as const
}

export function getPostPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.path.$post>>>>>,
    TError,
    InferRequestType<typeof client.path.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPathMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.path.$post>) {
      return parseResponse(client.path.$post(args, options))
    },
  })
}

export function createPostPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.path.$post>>>>>,
        TError,
        InferRequestType<typeof client.path.$post>,
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
    const mutationDefaults = getPostPathMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPointsMutationKey() {
  return ['points', '/points', 'POST'] as const
}

export function getPostPointsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.points.$post>>>>>,
    TError,
    InferRequestType<typeof client.points.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.points.$post>) {
      return parseResponse(client.points.$post(args, options))
    },
  })
}

export function createPostPoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.points.$post>>>>>,
        TError,
        InferRequestType<typeof client.points.$post>,
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
    const mutationDefaults = getPostPointsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

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
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive.delete.$get>>,
) {
  return ['archive', '/archive/delete', toValue(args)] as const
}

export function getArchiveDeleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive.delete.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArchiveDeleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.archive.delete.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArchiveDelete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive.delete.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.$get>>>>
          >,
          ReturnType<typeof getArchiveDeleteQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchiveDeleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArchiveDeleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.archive.delete.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArchiveDeleteNetworkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive.delete.network.$get>>,
) {
  return ['archive', '/archive/delete/network', toValue(args)] as const
}

export function getArchiveDeleteNetworkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive.delete.network.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArchiveDeleteNetworkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.archive.delete.network.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArchiveDeleteNetwork<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.network.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive.delete.network.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.network.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.network.$get>>>
            >
          >,
          ReturnType<typeof getArchiveDeleteNetworkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.archive.delete.network.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArchiveDeleteNetworkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArchiveDeleteNetworkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.archive.delete.network.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArchiveExportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive.export.$get>>,
) {
  return ['archive', '/archive/export', toValue(args)] as const
}

export function getArchiveExportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive.export.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArchiveExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.archive.export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArchiveExport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.export.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive.export.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.export.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.export.$get>>>>
          >,
          ReturnType<typeof getArchiveExportQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.export.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchiveExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArchiveExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.archive.export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArchiveListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive.list.$get>>,
) {
  return ['archive', '/archive/list', toValue(args)] as const
}

export function getArchiveListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArchiveListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.archive.list.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useArchiveList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archive.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.list.$get>>>>
          >,
          ReturnType<typeof getArchiveListQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archive.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArchiveListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArchiveListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.archive.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostArea<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.area.$post>>>>>,
          TError,
          InferRequestType<typeof client.area.$post>,
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
  const mutationDefaults = getPostAreaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostClutterAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clutter.add.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.clutter.add.$post>,
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
  const mutationDefaults = getPostClutterAddMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInterferenceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.interference.$get>>,
) {
  return ['interference', '/interference', toValue(args)] as const
}

export function getInterferenceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.interference.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInterferenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.interference.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInterference<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interference.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.interference.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interference.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interference.$get>>>>
          >,
          ReturnType<typeof getInterferenceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interference.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInterferenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInterferenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.interference.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeshQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.mesh.$get>>) {
  return ['mesh', '/mesh', toValue(args)] as const
}

export function getMeshQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mesh.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeshQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mesh.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMesh<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mesh.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mesh.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mesh.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mesh.$get>>>>>,
          ReturnType<typeof getMeshQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mesh.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeshQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeshQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mesh.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.$get>>,
) {
  return ['network', '/network', toValue(args)] as const
}

export function getNetworkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.network.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNetwork<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>
          >,
          ReturnType<typeof getNetworkQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.network.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.path.$post>>>>>,
          TError,
          InferRequestType<typeof client.path.$post>,
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
  const mutationDefaults = getPostPathMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostPoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.points.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.points.$post>,
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
  const mutationDefaults = getPostPointsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

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

export function getBundlesKey() {
  return ['bundles'] as const
}

export function getExportsKey() {
  return ['exports'] as const
}

export function getProjectProjectIdKey() {
  return ['project#projectId'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getUpdateProjectIdKey() {
  return ['update#projectId'] as const
}

export function getProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['projects', '/projects', keyArgs] as const
}

export function getProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          ReturnType<typeof getProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsMutationKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function getPostProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.$post>) {
      return parseResponse(client.projects.$post(args, options))
    },
  })
}

export function usePostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.projects.$post>,
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
  const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdMutationKey() {
  return ['projects', '/projects/:projectId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':projectId']['$delete']>) {
      return parseResponse(client.projects[':projectId'].$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
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
  const mutationDefaults = getDeleteProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getBundlesBundleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bundles)[':bundleId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bundles', '/bundles/:bundleId', keyArgs] as const
}

export function getBundlesBundleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bundles)[':bundleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBundlesBundleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bundles[':bundleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBundlesBundleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':bundleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bundles)[':bundleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bundles)[':bundleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bundles)[':bundleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBundlesBundleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':bundleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBundlesBundleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBundlesBundleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bundles[':bundleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBundlesBundleIdMutationKey() {
  return ['bundles', '/bundles/:bundleId', 'POST'] as const
}

export function getPostBundlesBundleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bundles)[':bundleId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.bundles)[':bundleId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBundlesBundleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bundles)[':bundleId']['$post']>) {
      return parseResponse(client.bundles[':bundleId'].$post(args, options))
    },
  })
}

export function usePostBundlesBundleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bundles)[':bundleId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bundles)[':bundleId']['$post']>,
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
  const mutationDefaults = getPostBundlesBundleIdMutationOptions<TError, TOnMutateResult>(
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

export function getProjectProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['project#projectId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['project#projectId', '/project#projectId', keyArgs] as const
}

export function getProjectProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['project#projectId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['project#projectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['project#projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['project#projectId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['project#projectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['project#projectId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectProjectIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['project#projectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['project#projectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostExportsProjectIdMutationKey() {
  return ['exports', '/exports/:projectId', 'POST'] as const
}

export function getPostExportsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':projectId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.exports)[':projectId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.exports)[':projectId']['$post']>) {
      return parseResponse(client.exports[':projectId'].$post(args, options))
    },
  })
}

export function usePostExportsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.exports)[':projectId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.exports)[':projectId']['$post']>,
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
  const mutationDefaults = getPostExportsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getBundlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bundles.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bundles', '/bundles', keyArgs] as const
}

export function getBundlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bundles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBundlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bundles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBundles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bundles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$get>>>>
          >,
          ReturnType<typeof getBundlesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bundles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBundlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBundlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bundles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUpdateProjectIdMutationKey() {
  return ['update#projectId', '/update#projectId', 'POST'] as const
}

export function getPostUpdateProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['update#projectId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['update#projectId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['update#projectId']['$post']>) {
      return parseResponse(client['update#projectId'].$post(args, options))
    },
  })
}

export function usePostUpdateProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['update#projectId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['update#projectId']['$post']>,
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
  const mutationDefaults = getPostUpdateProjectIdMutationOptions<TError, TOnMutateResult>(
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

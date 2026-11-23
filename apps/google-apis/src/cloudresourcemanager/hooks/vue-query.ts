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

export function getV3Key() {
  return ['v3'] as const
}

export function getV3EffectiveTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.effectiveTags.$get>>,
) {
  return ['v3', '/v3/effectiveTags', toValue(args)] as const
}

export function getV3EffectiveTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.effectiveTags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3EffectiveTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.effectiveTags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3EffectiveTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.effectiveTags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.effectiveTags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.effectiveTags.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.effectiveTags.$get>>>
            >
          >,
          ReturnType<typeof getV3EffectiveTagsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.effectiveTags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3EffectiveTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3EffectiveTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.effectiveTags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3FoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.folders.$get>>,
) {
  return ['v3', '/v3/folders', toValue(args)] as const
}

export function getV3FoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.folders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3FoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.folders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Folders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.folders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.folders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.folders.$get>>>>
          >,
          ReturnType<typeof getV3FoldersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.folders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3FoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3FoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3FoldersMutationKey() {
  return ['v3', '/v3/folders', 'POST'] as const
}

export function getPostV3FoldersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.folders.$post>>>>>,
    TError,
    InferRequestType<typeof client.v3.folders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3FoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.folders.$post>) {
      return parseResponse(client.v3.folders.$post(args, options))
    },
  })
}

export function usePostV3Folders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.folders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.folders.$post>,
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
  const mutationDefaults = getPostV3FoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV3FoldersSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)['folders:search']['$get']>>,
) {
  return ['v3', '/v3/folders:search', toValue(args)] as const
}

export function getV3FoldersSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)['folders:search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3FoldersSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3['folders:search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3FoldersSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['folders:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)['folders:search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)['folders:search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)['folders:search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3FoldersSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['folders:search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3FoldersSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3FoldersSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3['folders:search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3LiensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.liens.$get>>,
) {
  return ['v3', '/v3/liens', toValue(args)] as const
}

export function getV3LiensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.liens.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3LiensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.liens.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Liens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.liens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.liens.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.liens.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.liens.$get>>>>
          >,
          ReturnType<typeof getV3LiensQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.liens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3LiensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3LiensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.liens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3LiensMutationKey() {
  return ['v3', '/v3/liens', 'POST'] as const
}

export function getPostV3LiensMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.liens.$post>>>>>,
    TError,
    InferRequestType<typeof client.v3.liens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3LiensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.liens.$post>) {
      return parseResponse(client.v3.liens.$post(args, options))
    },
  })
}

export function usePostV3Liens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.liens.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.liens.$post>,
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
  const mutationDefaults = getPostV3LiensMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV3OrganizationsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)['organizations:search']['$get']>>,
) {
  return ['v3', '/v3/organizations:search', toValue(args)] as const
}

export function getV3OrganizationsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)['organizations:search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3OrganizationsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3['organizations:search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3OrganizationsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['organizations:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)['organizations:search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)['organizations:search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)['organizations:search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3OrganizationsSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)['organizations:search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3OrganizationsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3OrganizationsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3['organizations:search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.projects.$get>>,
) {
  return ['v3', '/v3/projects', toValue(args)] as const
}

export function getV3ProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.projects.$get>>>>
          >,
          ReturnType<typeof getV3ProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3ProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3ProjectsMutationKey() {
  return ['v3', '/v3/projects', 'POST'] as const
}

export function getPostV3ProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.v3.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.projects.$post>) {
      return parseResponse(client.v3.projects.$post(args, options))
    },
  })
}

export function usePostV3Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.projects.$post>,
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
  const mutationDefaults = getPostV3ProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV3ProjectsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)['projects:search']['$get']>>,
) {
  return ['v3', '/v3/projects:search', toValue(args)] as const
}

export function getV3ProjectsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)['projects:search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ProjectsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3['projects:search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ProjectsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['projects:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)['projects:search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)['projects:search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)['projects:search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ProjectsSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['projects:search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ProjectsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ProjectsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3['projects:search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3TagBindingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagBindings.$get>>,
) {
  return ['v3', '/v3/tagBindings', toValue(args)] as const
}

export function getV3TagBindingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagBindings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3TagBindingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.tagBindings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3TagBindings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagBindings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagBindings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagBindings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagBindings.$get>>>>
          >,
          ReturnType<typeof getV3TagBindingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagBindings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3TagBindingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3TagBindingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.tagBindings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3TagBindingsMutationKey() {
  return ['v3', '/v3/tagBindings', 'POST'] as const
}

export function getPostV3TagBindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagBindings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v3.tagBindings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3TagBindingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.tagBindings.$post>) {
      return parseResponse(client.v3.tagBindings.$post(args, options))
    },
  })
}

export function usePostV3TagBindings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagBindings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v3.tagBindings.$post>,
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
  const mutationDefaults = getPostV3TagBindingsMutationOptions<TError, TOnMutateResult>(
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

export function getV3TagKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagKeys.$get>>,
) {
  return ['v3', '/v3/tagKeys', toValue(args)] as const
}

export function getV3TagKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagKeys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3TagKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.tagKeys.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3TagKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagKeys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.$get>>>>
          >,
          ReturnType<typeof getV3TagKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3TagKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3TagKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.tagKeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3TagKeysMutationKey() {
  return ['v3', '/v3/tagKeys', 'POST'] as const
}

export function getPostV3TagKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.$post>>>>>,
    TError,
    InferRequestType<typeof client.v3.tagKeys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3TagKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.tagKeys.$post>) {
      return parseResponse(client.v3.tagKeys.$post(args, options))
    },
  })
}

export function usePostV3TagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.tagKeys.$post>,
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
  const mutationDefaults = getPostV3TagKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV3TagKeysNamespacedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagKeys.namespaced.$get>>,
) {
  return ['v3', '/v3/tagKeys/namespaced', toValue(args)] as const
}

export function getV3TagKeysNamespacedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagKeys.namespaced.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3TagKeysNamespacedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.tagKeys.namespaced.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3TagKeysNamespaced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.namespaced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagKeys.namespaced.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.namespaced.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.namespaced.$get>>>
            >
          >,
          ReturnType<typeof getV3TagKeysNamespacedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.namespaced.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TagKeysNamespacedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3TagKeysNamespacedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.tagKeys.namespaced.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3TagValuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagValues.$get>>,
) {
  return ['v3', '/v3/tagValues', toValue(args)] as const
}

export function getV3TagValuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagValues.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3TagValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.tagValues.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3TagValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagValues.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.$get>>>>
          >,
          ReturnType<typeof getV3TagValuesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3TagValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3TagValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.tagValues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3TagValuesMutationKey() {
  return ['v3', '/v3/tagValues', 'POST'] as const
}

export function getPostV3TagValuesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v3.tagValues.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3TagValuesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.tagValues.$post>) {
      return parseResponse(client.v3.tagValues.$post(args, options))
    },
  })
}

export function usePostV3TagValues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.tagValues.$post>,
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
  const mutationDefaults = getPostV3TagValuesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV3TagValuesNamespacedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagValues.namespaced.$get>>,
) {
  return ['v3', '/v3/tagValues/namespaced', toValue(args)] as const
}

export function getV3TagValuesNamespacedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagValues.namespaced.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3TagValuesNamespacedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.tagValues.namespaced.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3TagValuesNamespaced<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.namespaced.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.tagValues.namespaced.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.namespaced.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.namespaced.$get>>>
            >
          >,
          ReturnType<typeof getV3TagValuesNamespacedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.namespaced.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TagValuesNamespacedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3TagValuesNamespacedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.tagValues.namespaced.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['$get']>>,
) {
  return ['v3', '/v3/:name', toValue(args)] as const
}

export function getV3NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV3NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV3NameMutationKey() {
  return ['v3', '/v3/:name', 'DELETE'] as const
}

export function getDeleteV3NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v3)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':name']['$delete']>) {
      return parseResponse(client.v3[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV3NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV3NameMutationKey() {
  return ['v3', '/v3/:name', 'PATCH'] as const
}

export function getPatchV3NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v3)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV3NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':name']['$patch']>) {
      return parseResponse(client.v3[':name'].$patch(args, options))
    },
  })
}

export function usePatchV3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV3NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV3NameMoveMutationKey() {
  return ['v3', '/v3/:name:move', 'POST'] as const
}

export function getPostV3NameMoveMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name:move']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':name:move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3NameMoveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':name:move']['$post']>) {
      return parseResponse(client.v3[':name:move'].$post(args, options))
    },
  })
}

export function usePostV3NameMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name:move']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name:move']['$post']>,
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
  const mutationDefaults = getPostV3NameMoveMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV3NameUndeleteMutationKey() {
  return ['v3', '/v3/:name:undelete', 'POST'] as const
}

export function getPostV3NameUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name:undelete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':name:undelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3NameUndeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':name:undelete']['$post']>) {
      return parseResponse(client.v3[':name:undelete'].$post(args, options))
    },
  })
}

export function usePostV3NameUndelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':name:undelete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name:undelete']['$post']>,
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
  const mutationDefaults = getPostV3NameUndeleteMutationOptions<TError, TOnMutateResult>(
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

export function getV3ParentTagHoldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['tagHolds']['$get']>>,
) {
  return ['v3', '/v3/:parent/tagHolds', toValue(args)] as const
}

export function getV3ParentTagHoldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['tagHolds']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentTagHoldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].tagHolds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentTagHolds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['tagHolds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['tagHolds']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['tagHolds']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['tagHolds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentTagHoldsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['tagHolds']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentTagHoldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentTagHoldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].tagHolds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3ParentTagHoldsMutationKey() {
  return ['v3', '/v3/:parent/tagHolds', 'POST'] as const
}

export function getPostV3ParentTagHoldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['tagHolds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent']['tagHolds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentTagHoldsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':parent']['tagHolds']['$post']>) {
      return parseResponse(client.v3[':parent'].tagHolds.$post(args, options))
    },
  })
}

export function usePostV3ParentTagHolds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['tagHolds']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent']['tagHolds']['$post']>,
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
  const mutationDefaults = getPostV3ParentTagHoldsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3ResourceGetIamPolicyMutationKey() {
  return ['v3', '/v3/:resource:getIamPolicy', 'POST'] as const
}

export function getPostV3ResourceGetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':resource:getIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':resource:getIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ResourceGetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':resource:getIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v3[':resource:getIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV3ResourceGetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':resource:getIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':resource:getIamPolicy']['$post']>,
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
  const mutationDefaults = getPostV3ResourceGetIamPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3ResourceSetIamPolicyMutationKey() {
  return ['v3', '/v3/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV3ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v3[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV3ResourceSetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':resource:setIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':resource:setIamPolicy']['$post']>,
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
  const mutationDefaults = getPostV3ResourceSetIamPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3ResourceTestIamPermissionsMutationKey() {
  return ['v3', '/v3/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV3ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v3[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function usePostV3ResourceTestIamPermissions<
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
                Awaited<ReturnType<(typeof client.v3)[':resource:testIamPermissions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':resource:testIamPermissions']['$post']>,
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
  const mutationDefaults = getPostV3ResourceTestIamPermissionsMutationOptions<
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

import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV3Key() {
  return ['v3'] as const
}

export function getV3EffectiveTagsQueryKey(
  args: InferRequestType<typeof client.v3.effectiveTags.$get>,
) {
  return ['v3', '/v3/effectiveTags', args] as const
}

export function getV3EffectiveTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.effectiveTags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.effectiveTags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.effectiveTags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3EffectiveTagsQueryKey>
  >({
    queryKey: getV3EffectiveTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.effectiveTags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3EffectiveTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.effectiveTags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.effectiveTags.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.effectiveTags.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3EffectiveTagsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3EffectiveTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3FoldersQueryKey(args: InferRequestType<typeof client.v3.folders.$get>) {
  return ['v3', '/v3/folders', args] as const
}

export function getV3FoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.folders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.folders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.folders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3FoldersQueryKey>
  >({
    queryKey: getV3FoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.folders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Folders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.folders.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.folders.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV3FoldersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3FoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV3Folders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.folders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.folders.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3FoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3FoldersSearchQueryKey(
  args: InferRequestType<(typeof client.v3)['folders:search']['$get']>,
) {
  return ['v3', '/v3/folders:search', args] as const
}

export function getV3FoldersSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['folders:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)['folders:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['folders:search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3FoldersSearchQueryKey>
  >({
    queryKey: getV3FoldersSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3['folders:search'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3FoldersSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['folders:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)['folders:search']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)['folders:search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3FoldersSearchQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3FoldersSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3LiensQueryKey(args: InferRequestType<typeof client.v3.liens.$get>) {
  return ['v3', '/v3/liens', args] as const
}

export function getV3LiensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.liens.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.liens.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.liens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3LiensQueryKey>
  >({
    queryKey: getV3LiensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.liens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Liens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.liens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.liens.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.liens.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV3LiensQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3LiensQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV3Liens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.liens.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.liens.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3LiensMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3OrganizationsSearchQueryKey(
  args: InferRequestType<(typeof client.v3)['organizations:search']['$get']>,
) {
  return ['v3', '/v3/organizations:search', args] as const
}

export function getV3OrganizationsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['organizations:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)['organizations:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3OrganizationsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3['organizations:search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3OrganizationsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['organizations:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)['organizations:search']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV3OrganizationsSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ProjectsQueryKey(args: InferRequestType<typeof client.v3.projects.$get>) {
  return ['v3', '/v3/projects', args] as const
}

export function getV3ProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3ProjectsQueryKey>
  >({
    queryKey: getV3ProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.projects.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.projects.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV3ProjectsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3ProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV3Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.projects.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3ProjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3ProjectsSearchQueryKey(
  args: InferRequestType<(typeof client.v3)['projects:search']['$get']>,
) {
  return ['v3', '/v3/projects:search', args] as const
}

export function getV3ProjectsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['projects:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)['projects:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['projects:search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ProjectsSearchQueryKey>
  >({
    queryKey: getV3ProjectsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3['projects:search'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3ProjectsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['projects:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)['projects:search']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)['projects:search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3ProjectsSearchQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3ProjectsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3TagBindingsQueryKey(
  args: InferRequestType<typeof client.v3.tagBindings.$get>,
) {
  return ['v3', '/v3/tagBindings', args] as const
}

export function getV3TagBindingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagBindings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.tagBindings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagBindings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3TagBindingsQueryKey>
  >({
    queryKey: getV3TagBindingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.tagBindings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3TagBindings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagBindings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.tagBindings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagBindings.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV3TagBindingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3TagBindingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV3TagBindings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagBindings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v3.tagBindings.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3TagBindingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3TagKeysQueryKey(args: InferRequestType<typeof client.v3.tagKeys.$get>) {
  return ['v3', '/v3/tagKeys', args] as const
}

export function getV3TagKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.tagKeys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3TagKeysQueryKey>
  >({
    queryKey: getV3TagKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.tagKeys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3TagKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.tagKeys.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV3TagKeysQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3TagKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV3TagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.tagKeys.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3TagKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3TagKeysNamespacedQueryKey(
  args: InferRequestType<typeof client.v3.tagKeys.namespaced.$get>,
) {
  return ['v3', '/v3/tagKeys/namespaced', args] as const
}

export function getV3TagKeysNamespacedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.namespaced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.tagKeys.namespaced.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.namespaced.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TagKeysNamespacedQueryKey>
  >({
    queryKey: getV3TagKeysNamespacedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.tagKeys.namespaced.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3TagKeysNamespaced<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.namespaced.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.tagKeys.namespaced.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagKeys.namespaced.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3TagKeysNamespacedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3TagKeysNamespacedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3TagValuesQueryKey(args: InferRequestType<typeof client.v3.tagValues.$get>) {
  return ['v3', '/v3/tagValues', args] as const
}

export function getV3TagValuesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.tagValues.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3TagValuesQueryKey>
  >({
    queryKey: getV3TagValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.tagValues.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3TagValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.tagValues.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV3TagValuesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3TagValuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV3TagValues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.tagValues.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3TagValuesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3TagValuesNamespacedQueryKey(
  args: InferRequestType<typeof client.v3.tagValues.namespaced.$get>,
) {
  return ['v3', '/v3/tagValues/namespaced', args] as const
}

export function getV3TagValuesNamespacedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.namespaced.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.tagValues.namespaced.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.namespaced.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3TagValuesNamespacedQueryKey>
  >({
    queryKey: getV3TagValuesNamespacedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.tagValues.namespaced.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3TagValuesNamespaced<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.namespaced.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.tagValues.namespaced.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.tagValues.namespaced.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3TagValuesNamespacedQueryKey>
        >
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
      ...getV3TagValuesNamespacedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3NameQueryKey(args: InferRequestType<(typeof client.v3)[':name']['$get']>) {
  return ['v3', '/v3/:name', args] as const
}

export function getV3NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v3)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3NameQueryKey>
  >({
    queryKey: getV3NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3NameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteV3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV3NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchV3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV3NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV3NameMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name:move']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name:move']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3NameMoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV3NameUndelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3NameUndeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3ParentTagHoldsQueryKey(
  args: InferRequestType<(typeof client.v3)[':parent']['tagHolds']['$get']>,
) {
  return ['v3', '/v3/:parent/tagHolds', args] as const
}

export function getV3ParentTagHoldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['tagHolds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)[':parent']['tagHolds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['tagHolds']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentTagHoldsQueryKey>
  >({
    queryKey: getV3ParentTagHoldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':parent'].tagHolds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ParentTagHolds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['tagHolds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)[':parent']['tagHolds']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['tagHolds']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3ParentTagHoldsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3ParentTagHoldsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV3ParentTagHolds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3ParentTagHoldsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV3ResourceGetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3ResourceGetIamPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV3ResourceSetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3ResourceSetIamPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV3ResourceTestIamPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3ResourceTestIamPermissionsMutationOptions<
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

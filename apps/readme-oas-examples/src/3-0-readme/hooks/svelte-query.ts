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

export function getApiRegistryKey() {
  return ['api-registry'] as const
}

export function getApiSpecificationKey() {
  return ['api-specification'] as const
}

export function getApplyKey() {
  return ['apply'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getChangelogsKey() {
  return ['changelogs'] as const
}

export function getCustompagesKey() {
  return ['custompages'] as const
}

export function getDocsKey() {
  return ['docs'] as const
}

export function getSchemaKey() {
  return ['schema'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getApiRegistryUuidQueryKey(
  args: InferRequestType<(typeof client)['api-registry'][':uuid']['$get']>,
) {
  return ['api-registry', '/api-registry/:uuid', args] as const
}

export function getApiRegistryUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['api-registry'][':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['api-registry'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-registry'][':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRegistryUuidQueryKey>
  >({
    queryKey: getApiRegistryUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['api-registry'][':uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiRegistryUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['api-registry'][':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['api-registry'][':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['api-registry'][':uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRegistryUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRegistryUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiSpecificationQueryKey(
  args: InferRequestType<(typeof client)['api-specification']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api-specification', '/api-specification', keyArgs] as const
}

export function getApiSpecificationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['api-specification']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpecificationQueryKey>
  >({
    queryKey: getApiSpecificationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['api-specification'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSpecification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['api-specification']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpecificationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSpecificationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiSpecificationMutationKey() {
  return ['api-specification', '/api-specification', 'POST'] as const
}

export function getPostApiSpecificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['api-specification']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSpecificationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-specification']['$post']>) {
      return parseResponse(client['api-specification'].$post(args, options))
    },
  })
}

export function createPostApiSpecification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['api-specification']['$post']>,
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
    const mutationDefaults = getPostApiSpecificationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiSpecificationIdMutationKey() {
  return ['api-specification', '/api-specification/:id', 'PUT'] as const
}

export function getPutApiSpecificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['api-specification'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['api-specification'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiSpecificationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-specification'][':id']['$put']>) {
      return parseResponse(client['api-specification'][':id'].$put(args, options))
    },
  })
}

export function createPutApiSpecificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['api-specification'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['api-specification'][':id']['$put']>,
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
    const mutationDefaults = getPutApiSpecificationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiSpecificationIdMutationKey() {
  return ['api-specification', '/api-specification/:id', 'DELETE'] as const
}

export function getDeleteApiSpecificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['api-specification'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['api-specification'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSpecificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['api-specification'][':id']['$delete']>,
    ) {
      return parseResponse(client['api-specification'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiSpecificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-specification'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['api-specification'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiSpecificationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApplyQueryKey() {
  return ['apply', '/apply'] as const
}

export function getApplyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApplyQueryKey>
  >({
    queryKey: getApplyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apply.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApply<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApplyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApplyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApplyMutationKey() {
  return ['apply', '/apply', 'POST'] as const
}

export function getPostApplyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$post>>>>>,
    TError,
    InferRequestType<typeof client.apply.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApplyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.apply.$post>) {
      return parseResponse(client.apply.$post(args, options))
    },
  })
}

export function createPostApply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$post>>>>>,
        TError,
        InferRequestType<typeof client.apply.$post>,
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
    const mutationDefaults = getPostApplyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCategoriesQueryKey(args: InferRequestType<typeof client.categories.$get>) {
  const { header: _, ...keyArgs } = args
  return ['categories', '/categories', keyArgs] as const
}

export function getCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >({
    queryKey: getCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCategoriesMutationKey() {
  return ['categories', '/categories', 'POST'] as const
}

export function getPostCategoriesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$post>>>>>,
    TError,
    InferRequestType<typeof client.categories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.categories.$post>) {
      return parseResponse(client.categories.$post(args, options))
    },
  })
}

export function createPostCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.categories.$post>,
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
    const mutationDefaults = getPostCategoriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCategoriesSlugQueryKey(
  args: InferRequestType<(typeof client.categories)[':slug']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['categories', '/categories/:slug', keyArgs] as const
}

export function getCategoriesSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesSlugQueryKey>
  >({
    queryKey: getCategoriesSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':slug'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategoriesSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.categories)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutCategoriesSlugMutationKey() {
  return ['categories', '/categories/:slug', 'PUT'] as const
}

export function getPutCategoriesSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.categories)[':slug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCategoriesSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.categories)[':slug']['$put']>) {
      return parseResponse(client.categories[':slug'].$put(args, options))
    },
  })
}

export function createPutCategoriesSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.categories)[':slug']['$put']>,
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
    const mutationDefaults = getPutCategoriesSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCategoriesSlugMutationKey() {
  return ['categories', '/categories/:slug', 'DELETE'] as const
}

export function getDeleteCategoriesSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.categories)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCategoriesSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.categories)[':slug']['$delete']>) {
      return parseResponse(client.categories[':slug'].$delete(args, options))
    },
  })
}

export function createDeleteCategoriesSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':slug']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.categories)[':slug']['$delete']>,
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
    const mutationDefaults = getDeleteCategoriesSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCategoriesSlugDocsQueryKey(
  args: InferRequestType<(typeof client.categories)[':slug']['docs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['categories', '/categories/:slug/docs', keyArgs] as const
}

export function getCategoriesSlugDocsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['docs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':slug']['docs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.categories)[':slug']['docs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesSlugDocsQueryKey>
  >({
    queryKey: getCategoriesSlugDocsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':slug'].docs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategoriesSlugDocs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['docs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.categories)[':slug']['docs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':slug']['docs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesSlugDocsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesSlugDocsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getChangelogsQueryKey(args: InferRequestType<typeof client.changelogs.$get>) {
  return ['changelogs', '/changelogs', args] as const
}

export function getChangelogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.changelogs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChangelogsQueryKey>
  >({
    queryKey: getChangelogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.changelogs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChangelogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.changelogs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChangelogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChangelogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostChangelogsMutationKey() {
  return ['changelogs', '/changelogs', 'POST'] as const
}

export function getPostChangelogsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$post>>>>>,
    TError,
    InferRequestType<typeof client.changelogs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChangelogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.changelogs.$post>) {
      return parseResponse(client.changelogs.$post(args, options))
    },
  })
}

export function createPostChangelogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.changelogs.$post>,
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
    const mutationDefaults = getPostChangelogsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getChangelogsSlugQueryKey(
  args: InferRequestType<(typeof client.changelogs)[':slug']['$get']>,
) {
  return ['changelogs', '/changelogs/:slug', args] as const
}

export function getChangelogsSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.changelogs)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChangelogsSlugQueryKey>
  >({
    queryKey: getChangelogsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.changelogs[':slug'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChangelogsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.changelogs)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChangelogsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChangelogsSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutChangelogsSlugMutationKey() {
  return ['changelogs', '/changelogs/:slug', 'PUT'] as const
}

export function getPutChangelogsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.changelogs)[':slug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChangelogsSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.changelogs)[':slug']['$put']>) {
      return parseResponse(client.changelogs[':slug'].$put(args, options))
    },
  })
}

export function createPutChangelogsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.changelogs)[':slug']['$put']>,
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
    const mutationDefaults = getPutChangelogsSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteChangelogsSlugMutationKey() {
  return ['changelogs', '/changelogs/:slug', 'DELETE'] as const
}

export function getDeleteChangelogsSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.changelogs)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChangelogsSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.changelogs)[':slug']['$delete']>) {
      return parseResponse(client.changelogs[':slug'].$delete(args, options))
    },
  })
}

export function createDeleteChangelogsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.changelogs)[':slug']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.changelogs)[':slug']['$delete']>,
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
    const mutationDefaults = getDeleteChangelogsSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustompagesQueryKey(args: InferRequestType<typeof client.custompages.$get>) {
  return ['custompages', '/custompages', args] as const
}

export function getCustompagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.custompages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCustompagesQueryKey>
  >({
    queryKey: getCustompagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.custompages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustompages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.custompages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCustompagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCustompagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCustompagesMutationKey() {
  return ['custompages', '/custompages', 'POST'] as const
}

export function getPostCustompagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$post>>>>>,
    TError,
    InferRequestType<typeof client.custompages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustompagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.custompages.$post>) {
      return parseResponse(client.custompages.$post(args, options))
    },
  })
}

export function createPostCustompages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.custompages.$post>,
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
    const mutationDefaults = getPostCustompagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustompagesSlugQueryKey(
  args: InferRequestType<(typeof client.custompages)[':slug']['$get']>,
) {
  return ['custompages', '/custompages/:slug', args] as const
}

export function getCustompagesSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.custompages)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustompagesSlugQueryKey>
  >({
    queryKey: getCustompagesSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.custompages[':slug'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustompagesSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.custompages)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustompagesSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCustompagesSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutCustompagesSlugMutationKey() {
  return ['custompages', '/custompages/:slug', 'PUT'] as const
}

export function getPutCustompagesSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.custompages)[':slug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustompagesSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.custompages)[':slug']['$put']>) {
      return parseResponse(client.custompages[':slug'].$put(args, options))
    },
  })
}

export function createPutCustompagesSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.custompages)[':slug']['$put']>,
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
    const mutationDefaults = getPutCustompagesSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCustompagesSlugMutationKey() {
  return ['custompages', '/custompages/:slug', 'DELETE'] as const
}

export function getDeleteCustompagesSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.custompages)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustompagesSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.custompages)[':slug']['$delete']>) {
      return parseResponse(client.custompages[':slug'].$delete(args, options))
    },
  })
}

export function createDeleteCustompagesSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custompages)[':slug']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.custompages)[':slug']['$delete']>,
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
    const mutationDefaults = getDeleteCustompagesSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDocsSlugQueryKey(args: InferRequestType<(typeof client.docs)[':slug']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['docs', '/docs/:slug', keyArgs] as const
}

export function getDocsSlugQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.docs)[':slug']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDocsSlugQueryKey>
  >({
    queryKey: getDocsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.docs[':slug'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDocsSlug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.docs)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocsSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDocsSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutDocsSlugMutationKey() {
  return ['docs', '/docs/:slug', 'PUT'] as const
}

export function getPutDocsSlugMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.docs)[':slug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDocsSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.docs)[':slug']['$put']>) {
      return parseResponse(client.docs[':slug'].$put(args, options))
    },
  })
}

export function createPutDocsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.docs)[':slug']['$put']>,
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
    const mutationDefaults = getPutDocsSlugMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteDocsSlugMutationKey() {
  return ['docs', '/docs/:slug', 'DELETE'] as const
}

export function getDeleteDocsSlugMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.docs)[':slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDocsSlugMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.docs)[':slug']['$delete']>) {
      return parseResponse(client.docs[':slug'].$delete(args, options))
    },
  })
}

export function createDeleteDocsSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.docs)[':slug']['$delete']>,
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
    const mutationDefaults = getDeleteDocsSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDocsSlugProductionQueryKey(
  args: InferRequestType<(typeof client.docs)[':slug']['production']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docs', '/docs/:slug/production', keyArgs] as const
}

export function getDocsSlugProductionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['production']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docs)[':slug']['production']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.docs)[':slug']['production']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocsSlugProductionQueryKey>
  >({
    queryKey: getDocsSlugProductionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.docs[':slug'].production.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDocsSlugProduction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['production']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.docs)[':slug']['production']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.docs)[':slug']['production']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocsSlugProductionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDocsSlugProductionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostDocsMutationKey() {
  return ['docs', '/docs', 'POST'] as const
}

export function getPostDocsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$post>>>>>,
    TError,
    InferRequestType<typeof client.docs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.docs.$post>) {
      return parseResponse(client.docs.$post(args, options))
    },
  })
}

export function createPostDocs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$post>>>>>,
        TError,
        InferRequestType<typeof client.docs.$post>,
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
    const mutationDefaults = getPostDocsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDocsSearchMutationKey() {
  return ['docs', '/docs/search', 'POST'] as const
}

export function getPostDocsSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.search.$post>>>>>,
    TError,
    InferRequestType<typeof client.docs.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.docs.search.$post>) {
      return parseResponse(client.docs.search.$post(args, options))
    },
  })
}

export function createPostDocsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.docs.search.$post>,
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
    const mutationDefaults = getPostDocsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSchemaQueryKey() {
  return ['schema', '/schema'] as const
}

export function getSchemaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchemaQueryKey>
  >({
    queryKey: getSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.schema.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSchema<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchemaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >({
    queryKey: getVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostVersionMutationKey() {
  return ['version', '/version', 'POST'] as const
}

export function getPostVersionMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$post>>>>>,
    TError,
    InferRequestType<typeof client.version.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.version.$post>) {
      return parseResponse(client.version.$post(args, options))
    },
  })
}

export function createPostVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$post>>>>>,
        TError,
        InferRequestType<typeof client.version.$post>,
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
    const mutationDefaults = getPostVersionMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVersionVersionIdQueryKey(
  args: InferRequestType<(typeof client.version)[':versionId']['$get']>,
) {
  return ['version', '/version/:versionId', args] as const
}

export function getVersionVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.version)[':versionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionVersionIdQueryKey>
  >({
    queryKey: getVersionVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.version[':versionId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVersionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.version)[':versionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVersionVersionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVersionVersionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutVersionVersionIdMutationKey() {
  return ['version', '/version/:versionId', 'PUT'] as const
}

export function getPutVersionVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.version)[':versionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVersionVersionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.version)[':versionId']['$put']>) {
      return parseResponse(client.version[':versionId'].$put(args, options))
    },
  })
}

export function createPutVersionVersionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.version)[':versionId']['$put']>,
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
    const mutationDefaults = getPutVersionVersionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteVersionVersionIdMutationKey() {
  return ['version', '/version/:versionId', 'DELETE'] as const
}

export function getDeleteVersionVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.version)[':versionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionVersionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.version)[':versionId']['$delete']>) {
      return parseResponse(client.version[':versionId'].$delete(args, options))
    },
  })
}

export function createDeleteVersionVersionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.version)[':versionId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.version)[':versionId']['$delete']>,
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
    const mutationDefaults = getDeleteVersionVersionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

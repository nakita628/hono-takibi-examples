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

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiAdminUsersMutationKey() {
  return ['api', '/api/admin/users', 'POST'] as const
}

export function getPostApiAdminUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.admin.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.users.$post>) {
      return parseResponse(client.api.admin.users.$post(args, options))
    },
  })
}

export function createPostApiAdminUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.users.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.admin.users.$post>,
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
    const mutationDefaults = getPostApiAdminUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiArticlesQueryKey(args: InferRequestType<typeof client.api.articles.$get>) {
  return ['api', '/api/articles', args] as const
}

export function getApiArticlesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.articles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiArticlesQueryKey>
  >({
    queryKey: getApiArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.articles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiArticlesQueryKey>
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
    return { ...getApiArticlesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiArticlesMutationKey() {
  return ['api', '/api/articles', 'POST'] as const
}

export function getPostApiArticlesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.articles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiArticlesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.articles.$post>) {
      return parseResponse(client.api.articles.$post(args, options))
    },
  })
}

export function createPostApiArticles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.articles.$post>,
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
    const mutationDefaults = getPostApiArticlesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiArticlesLatestQueryKey(
  args: InferRequestType<typeof client.api.articles.latest.$get>,
) {
  return ['api', '/api/articles/latest', args] as const
}

export function getApiArticlesLatestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.articles.latest.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesLatestQueryKey>
  >({
    queryKey: getApiArticlesLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles.latest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiArticlesLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.articles.latest.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiArticlesLatestQueryKey>
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
    return { ...getApiArticlesLatestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiArticlesMeQueryKey(
  args: InferRequestType<typeof client.api.articles.me.$get>,
) {
  return ['api', '/api/articles/me', args] as const
}

export function getApiArticlesMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.articles.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesMeQueryKey>
  >({
    queryKey: getApiArticlesMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiArticlesMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.articles.me.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiArticlesMeQueryKey>
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
    return { ...getApiArticlesMeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiArticlesMeAllQueryKey(
  args: InferRequestType<typeof client.api.articles.me.all.$get>,
) {
  return ['api', '/api/articles/me/all', args] as const
}

export function getApiArticlesMeAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.articles.me.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesMeAllQueryKey>
  >({
    queryKey: getApiArticlesMeAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles.me.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiArticlesMeAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.articles.me.all.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiArticlesMeAllQueryKey>
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
    return { ...getApiArticlesMeAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiArticlesMePublishedQueryKey(
  args: InferRequestType<typeof client.api.articles.me.published.$get>,
) {
  return ['api', '/api/articles/me/published', args] as const
}

export function getApiArticlesMePublishedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.me.published.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesMePublishedQueryKey>
  >({
    queryKey: getApiArticlesMePublishedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles.me.published.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiArticlesMePublished<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.articles.me.published.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.articles.me.published.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiArticlesMePublishedQueryKey>
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
      ...getApiArticlesMePublishedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiArticlesMeUnpublishedQueryKey(
  args: InferRequestType<typeof client.api.articles.me.unpublished.$get>,
) {
  return ['api', '/api/articles/me/unpublished', args] as const
}

export function getApiArticlesMeUnpublishedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.articles.me.unpublished.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesMeUnpublishedQueryKey>
  >({
    queryKey: getApiArticlesMeUnpublishedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles.me.unpublished.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiArticlesMeUnpublished<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.articles.me.unpublished.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiArticlesMeUnpublishedQueryKey>
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
      ...getApiArticlesMeUnpublishedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiArticlesIdQueryKey(
  args: InferRequestType<(typeof client.api.articles)[':id']['$get']>,
) {
  return ['api', '/api/articles/:id', args] as const
}

export function getApiArticlesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.articles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesIdQueryKey>
  >({
    queryKey: getApiArticlesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiArticlesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.articles)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiArticlesIdQueryKey>
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
    return { ...getApiArticlesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiArticlesIdMutationKey() {
  return ['api', '/api/articles/:id', 'PUT'] as const
}

export function getPutApiArticlesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.articles)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiArticlesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.articles)[':id']['$put']>) {
      return parseResponse(client.api.articles[':id'].$put(args, options))
    },
  })
}

export function createPutApiArticlesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.articles)[':id']['$put']>,
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
    const mutationDefaults = getPutApiArticlesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiArticlesIdUnpublishMutationKey() {
  return ['api', '/api/articles/:id/unpublish', 'PUT'] as const
}

export function getPutApiArticlesIdUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.articles)[':id']['unpublish']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.articles)[':id']['unpublish']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiArticlesIdUnpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.articles)[':id']['unpublish']['$put']>,
    ) {
      return parseResponse(client.api.articles[':id'].unpublish.$put(args, options))
    },
  })
}

export function createPutApiArticlesIdUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.articles)[':id']['unpublish']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.articles)[':id']['unpublish']['$put']>,
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
    const mutationDefaults = getPutApiArticlesIdUnpublishMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiArticlesUsernameSlugQueryKey(
  args: InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>,
) {
  return ['api', '/api/articles/:username/:slug', args] as const
}

export function getApiArticlesUsernameSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesUsernameSlugQueryKey>
  >({
    queryKey: getApiArticlesUsernameSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.articles[':username'][':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiArticlesUsernameSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiArticlesUsernameSlugQueryKey>
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
      ...getApiArticlesUsernameSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCommentsQueryKey(args: InferRequestType<typeof client.api.comments.$get>) {
  return ['api', '/api/comments', args] as const
}

export function getApiCommentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.comments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiCommentsQueryKey>
  >({
    queryKey: getApiCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.comments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiCommentsQueryKey>
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
    return { ...getApiCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiCommentsIdQueryKey(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
) {
  return ['api', '/api/comments/:id', args] as const
}

export function getApiCommentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCommentsIdQueryKey>
  >({
    queryKey: getApiCommentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.comments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiCommentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.comments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiCommentsIdQueryKey>
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
    return { ...getApiCommentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiDisplayAdsQueryKey() {
  return ['api', '/api/display_ads'] as const
}

export function getApiDisplayAdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDisplayAdsQueryKey>
  >({
    queryKey: getApiDisplayAdsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.display_ads.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiDisplayAds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiDisplayAdsQueryKey>
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
    return { ...getApiDisplayAdsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiDisplayAdsMutationKey() {
  return ['api', '/api/display_ads', 'POST'] as const
}

export function getPostApiDisplayAdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.display_ads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDisplayAdsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.display_ads.$post>) {
      return parseResponse(client.api.display_ads.$post(args, options))
    },
  })
}

export function createPostApiDisplayAds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.display_ads.$post>,
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
    const mutationDefaults = getPostApiDisplayAdsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiDisplayAdsIdQueryKey(
  args: InferRequestType<(typeof client.api.display_ads)[':id']['$get']>,
) {
  return ['api', '/api/display_ads/:id', args] as const
}

export function getApiDisplayAdsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.display_ads)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDisplayAdsIdQueryKey>
  >({
    queryKey: getApiDisplayAdsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.display_ads[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiDisplayAdsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.display_ads)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiDisplayAdsIdQueryKey>
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
    return { ...getApiDisplayAdsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiDisplayAdsIdMutationKey() {
  return ['api', '/api/display_ads/:id', 'PUT'] as const
}

export function getPutApiDisplayAdsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.display_ads)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDisplayAdsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.display_ads)[':id']['$put']>) {
      return parseResponse(client.api.display_ads[':id'].$put(args, options))
    },
  })
}

export function createPutApiDisplayAdsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.display_ads)[':id']['$put']>,
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
    const mutationDefaults = getPutApiDisplayAdsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiDisplayAdsIdUnpublishMutationKey() {
  return ['api', '/api/display_ads/:id/unpublish', 'PUT'] as const
}

export function getPutApiDisplayAdsIdUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.display_ads)[':id']['unpublish']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.display_ads)[':id']['unpublish']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDisplayAdsIdUnpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.display_ads)[':id']['unpublish']['$put']>,
    ) {
      return parseResponse(client.api.display_ads[':id'].unpublish.$put(args, options))
    },
  })
}

export function createPutApiDisplayAdsIdUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.display_ads)[':id']['unpublish']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.display_ads)[':id']['unpublish']['$put']>,
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
    const mutationDefaults = getPutApiDisplayAdsIdUnpublishMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiFollowersUsersQueryKey(
  args: InferRequestType<typeof client.api.followers.users.$get>,
) {
  return ['api', '/api/followers/users', args] as const
}

export function getApiFollowersUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.followers.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiFollowersUsersQueryKey>
  >({
    queryKey: getApiFollowersUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.followers.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiFollowersUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.followers.users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiFollowersUsersQueryKey>
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
    return { ...getApiFollowersUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiFollowsTagsQueryKey() {
  return ['api', '/api/follows/tags'] as const
}

export function getApiFollowsTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiFollowsTagsQueryKey>
  >({
    queryKey: getApiFollowsTagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.follows.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiFollowsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiFollowsTagsQueryKey>
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
    return { ...getApiFollowsTagsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiOrganizationsUsernameQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':username']['$get']>,
) {
  return ['api', '/api/organizations/:username', args] as const
}

export function getApiOrganizationsUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsUsernameQueryKey>
  >({
    queryKey: getApiOrganizationsUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOrganizationsUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.organizations)[':username']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiOrganizationsUsernameQueryKey>
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
      ...getApiOrganizationsUsernameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiOrganizationsUsernameArticlesQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>,
) {
  return ['api', '/api/organizations/:username/articles', args] as const
}

export function getApiOrganizationsUsernameArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsUsernameArticlesQueryKey>
  >({
    queryKey: getApiOrganizationsUsernameArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':username'].articles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOrganizationsUsernameArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiOrganizationsUsernameArticlesQueryKey>
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
      ...getApiOrganizationsUsernameArticlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiOrganizationsUsernameUsersQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>,
) {
  return ['api', '/api/organizations/:username/users', args] as const
}

export function getApiOrganizationsUsernameUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsUsernameUsersQueryKey>
  >({
    queryKey: getApiOrganizationsUsernameUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':username'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOrganizationsUsernameUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiOrganizationsUsernameUsersQueryKey>
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
      ...getApiOrganizationsUsernameUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiPagesQueryKey() {
  return ['api', '/api/pages'] as const
}

export function getApiPagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPagesQueryKey>
  >({
    queryKey: getApiPagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiPagesQueryKey>
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
    return { ...getApiPagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiPagesMutationKey() {
  return ['api', '/api/pages', 'POST'] as const
}

export function getPostApiPagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.pages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pages.$post>) {
      return parseResponse(client.api.pages.$post(args, options))
    },
  })
}

export function createPostApiPages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.pages.$post>,
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
    const mutationDefaults = getPostApiPagesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPagesIdQueryKey(
  args: InferRequestType<(typeof client.api.pages)[':id']['$get']>,
) {
  return ['api', '/api/pages/:id', args] as const
}

export function getApiPagesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPagesIdQueryKey>
  >({
    queryKey: getApiPagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pages[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pages)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPagesIdQueryKey>
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
    return { ...getApiPagesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiPagesIdMutationKey() {
  return ['api', '/api/pages/:id', 'PUT'] as const
}

export function getPutApiPagesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pages)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.pages)[':id']['$put']>) {
      return parseResponse(client.api.pages[':id'].$put(args, options))
    },
  })
}

export function createPutApiPagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.pages)[':id']['$put']>,
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
    const mutationDefaults = getPutApiPagesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiPagesIdMutationKey() {
  return ['api', '/api/pages/:id', 'DELETE'] as const
}

export function getDeleteApiPagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pages)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.pages)[':id']['$delete']>) {
      return parseResponse(client.api.pages[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiPagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.pages)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiPagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPodcastEpisodesQueryKey(
  args: InferRequestType<typeof client.api.podcast_episodes.$get>,
) {
  return ['api', '/api/podcast_episodes', args] as const
}

export function getApiPodcastEpisodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.podcast_episodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPodcastEpisodesQueryKey>
  >({
    queryKey: getApiPodcastEpisodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.podcast_episodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPodcastEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.podcast_episodes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiPodcastEpisodesQueryKey>
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
    return { ...getApiPodcastEpisodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiProfileImagesUsernameQueryKey(
  args: InferRequestType<(typeof client.api.profile_images)[':username']['$get']>,
) {
  return ['api', '/api/profile_images/:username', args] as const
}

export function getApiProfileImagesUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.profile_images)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProfileImagesUsernameQueryKey>
  >({
    queryKey: getApiProfileImagesUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.profile_images[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiProfileImagesUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.profile_images)[':username']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiProfileImagesUsernameQueryKey>
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
      ...getApiProfileImagesUsernameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiReactionsMutationKey() {
  return ['api', '/api/reactions', 'POST'] as const
}

export function getPostApiReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.reactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiReactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.reactions.$post>) {
      return parseResponse(client.api.reactions.$post(args, options))
    },
  })
}

export function createPostApiReactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.reactions.$post>,
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
    const mutationDefaults = getPostApiReactionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiReactionsToggleMutationKey() {
  return ['api', '/api/reactions/toggle', 'POST'] as const
}

export function getPostApiReactionsToggleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.reactions.toggle.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.reactions.toggle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiReactionsToggleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.reactions.toggle.$post>) {
      return parseResponse(client.api.reactions.toggle.$post(args, options))
    },
  })
}

export function createPostApiReactionsToggle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.reactions.toggle.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.reactions.toggle.$post>,
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
    const mutationDefaults = getPostApiReactionsToggleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiReadinglistQueryKey(
  args: InferRequestType<typeof client.api.readinglist.$get>,
) {
  return ['api', '/api/readinglist', args] as const
}

export function getApiReadinglistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.readinglist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiReadinglistQueryKey>
  >({
    queryKey: getApiReadinglistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.readinglist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiReadinglist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.readinglist.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiReadinglistQueryKey>
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
    return { ...getApiReadinglistQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTagsQueryKey(args: InferRequestType<typeof client.api.tags.$get>) {
  return ['api', '/api/tags', args] as const
}

export function getApiTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTagsQueryKey>
  >({
    queryKey: getApiTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.tags.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiTagsQueryKey>
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
    return { ...getApiTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUsersMeQueryKey() {
  return ['api', '/api/users/me'] as const
}

export function getApiUsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsersMeQueryKey>
  >({
    queryKey: getApiUsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiUsersMeQueryKey>
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
    return { ...getApiUsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiUsersIdQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
) {
  return ['api', '/api/users/:id', args] as const
}

export function getApiUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdQueryKey>
  >({
    queryKey: getApiUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiUsersIdQueryKey>
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
    return { ...getApiUsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiUsersIdSuspendMutationKey() {
  return ['api', '/api/users/:id/suspend', 'PUT'] as const
}

export function getPutApiUsersIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':id']['suspend']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.users)[':id']['suspend']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUsersIdSuspendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.users)[':id']['suspend']['$put']>) {
      return parseResponse(client.api.users[':id'].suspend.$put(args, options))
    },
  })
}

export function createPutApiUsersIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.users)[':id']['suspend']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.users)[':id']['suspend']['$put']>,
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
    const mutationDefaults = getPutApiUsersIdSuspendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiUsersIdUnpublishMutationKey() {
  return ['api', '/api/users/:id/unpublish', 'PUT'] as const
}

export function getPutApiUsersIdUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':id']['unpublish']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.users)[':id']['unpublish']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiUsersIdUnpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':id']['unpublish']['$put']>,
    ) {
      return parseResponse(client.api.users[':id'].unpublish.$put(args, options))
    },
  })
}

export function createPutApiUsersIdUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.users)[':id']['unpublish']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.users)[':id']['unpublish']['$put']>,
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
    const mutationDefaults = getPutApiUsersIdUnpublishMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiVideosQueryKey(args: InferRequestType<typeof client.api.videos.$get>) {
  return ['api', '/api/videos', args] as const
}

export function getApiVideosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiVideosQueryKey>
  >({
    queryKey: getApiVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.videos.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiVideosQueryKey>
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
    return { ...getApiVideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

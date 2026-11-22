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

export function usePostApiAdminUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.users.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.admin.users.$post>,
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
  const mutationDefaults = getPostApiAdminUsersMutationOptions<TError, TOnMutateResult>(
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

export function getApiArticlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.$get>>,
) {
  return ['api', '/api/articles', toValue(args)] as const
}

export function getApiArticlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.articles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiArticles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>
          >,
          ReturnType<typeof getApiArticlesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiArticles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.articles.$post>,
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
  const mutationDefaults = getPostApiArticlesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiArticlesLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.latest.$get>>,
) {
  return ['api', '/api/articles/latest', toValue(args)] as const
}

export function getApiArticlesLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiArticlesLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.articles.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiArticlesLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>
            >
          >,
          ReturnType<typeof getApiArticlesLatestQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.latest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiArticlesLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.articles.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiArticlesMeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.me.$get>>,
) {
  return ['api', '/api/articles/me', toValue(args)] as const
}

export function getApiArticlesMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.me.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiArticlesMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.articles.me.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiArticlesMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.me.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>
            >
          >,
          ReturnType<typeof getApiArticlesMeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiArticlesMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.articles.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiArticlesMeAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.me.all.$get>>,
) {
  return ['api', '/api/articles/me/all', toValue(args)] as const
}

export function getApiArticlesMeAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.me.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiArticlesMeAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.articles.me.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiArticlesMeAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.me.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>
            >
          >,
          ReturnType<typeof getApiArticlesMeAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesMeAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiArticlesMeAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.articles.me.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiArticlesMePublishedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.me.published.$get>>,
) {
  return ['api', '/api/articles/me/published', toValue(args)] as const
}

export function getApiArticlesMePublishedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.me.published.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiArticlesMePublishedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.articles.me.published.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiArticlesMePublished<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.me.published.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.articles.me.published.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.articles.me.published.$get>>
              >
            >
          >,
          ReturnType<typeof getApiArticlesMePublishedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.published.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesMePublishedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiArticlesMePublishedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.articles.me.published.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiArticlesMeUnpublishedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.me.unpublished.$get>>,
) {
  return ['api', '/api/articles/me/unpublished', toValue(args)] as const
}

export function getApiArticlesMeUnpublishedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.me.unpublished.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiArticlesMeUnpublishedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.articles.me.unpublished.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiArticlesMeUnpublished<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.articles.me.unpublished.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>
              >
            >
          >,
          ReturnType<typeof getApiArticlesMeUnpublishedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.articles.me.unpublished.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesMeUnpublishedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiArticlesMeUnpublishedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.articles.me.unpublished.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiArticlesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.articles)[':id']['$get']>>,
) {
  return ['api', '/api/articles/:id', toValue(args)] as const
}

export function getApiArticlesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.articles)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiArticlesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.articles[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiArticlesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.articles)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiArticlesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiArticlesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.articles[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiArticlesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.articles)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.articles)[':id']['$put']>,
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
  const mutationDefaults = getPutApiArticlesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiArticlesIdUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiArticlesIdUnpublishMutationOptions<TError, TOnMutateResult>(
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

export function getApiArticlesUsernameSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>
  >,
) {
  return ['api', '/api/articles/:username/:slug', toValue(args)] as const
}

export function getApiArticlesUsernameSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiArticlesUsernameSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.articles[':username'][':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiArticlesUsernameSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiArticlesUsernameSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.api.articles)[':username'][':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesUsernameSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiArticlesUsernameSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.articles[':username'][':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.comments.$get>>,
) {
  return ['api', '/api/comments', toValue(args)] as const
}

export function getApiCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.comments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.comments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.comments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
          >,
          ReturnType<typeof getApiCommentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCommentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.comments)[':id']['$get']>>,
) {
  return ['api', '/api/comments/:id', toValue(args)] as const
}

export function getApiCommentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.comments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCommentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.comments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCommentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.comments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiCommentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.comments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCommentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCommentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.comments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDisplayAdsQueryKey() {
  return ['api', '/api/display_ads'] as const
}

export function getApiDisplayAdsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiDisplayAdsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.display_ads.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiDisplayAds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>
            >
          >,
          ReturnType<typeof getApiDisplayAdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDisplayAdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiDisplayAdsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.display_ads.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiDisplayAds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.display_ads.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.display_ads.$post>,
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
  const mutationDefaults = getPostApiDisplayAdsMutationOptions<TError, TOnMutateResult>(
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

export function getApiDisplayAdsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.display_ads)[':id']['$get']>>,
) {
  return ['api', '/api/display_ads/:id', toValue(args)] as const
}

export function getApiDisplayAdsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.display_ads)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDisplayAdsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.display_ads[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDisplayAdsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.display_ads)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiDisplayAdsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.display_ads)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDisplayAdsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDisplayAdsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.display_ads[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiDisplayAdsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiDisplayAdsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiDisplayAdsIdUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiDisplayAdsIdUnpublishMutationOptions<TError, TOnMutateResult>(
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

export function getApiFollowersUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.followers.users.$get>>,
) {
  return ['api', '/api/followers/users', toValue(args)] as const
}

export function getApiFollowersUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.followers.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFollowersUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.followers.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFollowersUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.followers.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>
            >
          >,
          ReturnType<typeof getApiFollowersUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.followers.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiFollowersUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFollowersUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.followers.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFollowsTagsQueryKey() {
  return ['api', '/api/follows/tags'] as const
}

export function getApiFollowsTagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiFollowsTagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.follows.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiFollowsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>
            >
          >,
          ReturnType<typeof getApiFollowsTagsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.follows.tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiFollowsTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiFollowsTagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.follows.tags.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.organizations)[':username']['$get']>>,
) {
  return ['api', '/api/organizations/:username', toValue(args)] as const
}

export function getApiOrganizationsUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.organizations)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.organizations)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsUsernameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.organizations)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsUsernameArticlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>
  >,
) {
  return ['api', '/api/organizations/:username/articles', toValue(args)] as const
}

export function getApiOrganizationsUsernameArticlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsUsernameArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':username'].articles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsUsernameArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsUsernameArticlesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.organizations)[':username']['articles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsUsernameArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsUsernameArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':username'].articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsUsernameUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>
  >,
) {
  return ['api', '/api/organizations/:username/users', toValue(args)] as const
}

export function getApiOrganizationsUsernameUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsUsernameUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':username'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsUsernameUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsUsernameUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.organizations)[':username']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsUsernameUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsUsernameUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':username'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPagesQueryKey() {
  return ['api', '/api/pages'] as const
}

export function getApiPagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>
          >,
          ReturnType<typeof getApiPagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.pages.$post>,
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
  const mutationDefaults = getPostApiPagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiPagesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pages)[':id']['$get']>>,
) {
  return ['api', '/api/pages/:id', toValue(args)] as const
}

export function getApiPagesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pages)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pages[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pages)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiPagesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pages[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiPagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.pages)[':id']['$put']>,
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
  const mutationDefaults = getPutApiPagesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiPagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.pages)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.pages)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiPagesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPodcastEpisodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.podcast_episodes.$get>>,
) {
  return ['api', '/api/podcast_episodes', toValue(args)] as const
}

export function getApiPodcastEpisodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.podcast_episodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPodcastEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.podcast_episodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPodcastEpisodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.podcast_episodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>
            >
          >,
          ReturnType<typeof getApiPodcastEpisodesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.podcast_episodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPodcastEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPodcastEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.podcast_episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProfileImagesUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.profile_images)[':username']['$get']>>,
) {
  return ['api', '/api/profile_images/:username', toValue(args)] as const
}

export function getApiProfileImagesUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.profile_images)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProfileImagesUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.profile_images[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProfileImagesUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.profile_images)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiProfileImagesUsernameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.profile_images)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProfileImagesUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProfileImagesUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.profile_images[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiReactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.reactions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.reactions.$post>,
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
  const mutationDefaults = getPostApiReactionsMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiReactionsToggle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.reactions.toggle.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.reactions.toggle.$post>,
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
  const mutationDefaults = getPostApiReactionsToggleMutationOptions<TError, TOnMutateResult>(
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

export function getApiReadinglistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.readinglist.$get>>,
) {
  return ['api', '/api/readinglist', toValue(args)] as const
}

export function getApiReadinglistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.readinglist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReadinglistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.readinglist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReadinglist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.readinglist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>
            >
          >,
          ReturnType<typeof getApiReadinglistQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.readinglist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiReadinglistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReadinglistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.readinglist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.$get>>,
) {
  return ['api', '/api/tags', toValue(args)] as const
}

export function getApiTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
          >,
          ReturnType<typeof getApiTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersMeQueryKey() {
  return ['api', '/api/users/me'] as const
}

export function getApiUsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiUsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>
          >,
          ReturnType<typeof getApiUsersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiUsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['$get']>>,
) {
  return ['api', '/api/users/:id', toValue(args)] as const
}

export function getApiUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiUsersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiUsersIdSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiUsersIdSuspendMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiUsersIdUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiUsersIdUnpublishMutationOptions<TError, TOnMutateResult>(
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

export function getApiVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.videos.$get>>,
) {
  return ['api', '/api/videos', toValue(args)] as const
}

export function getApiVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.videos.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>
          >,
          ReturnType<typeof getApiVideosQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

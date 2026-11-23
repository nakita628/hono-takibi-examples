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

export function getCmsKey() {
  return ['cms'] as const
}

export function getCmsBlogs202609AuthorsCursorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>
  >,
) {
  return ['cms', '/cms/blogs/2026-09/authors/cursor', toValue(args)] as const
}

export function getCmsBlogs202609AuthorsCursorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogs202609AuthorsCursorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.blogs['2026-09'].authors.cursor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsBlogs202609AuthorsCursor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>
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
                  ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCmsBlogs202609AuthorsCursorQueryKey>
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
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609AuthorsCursorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogs202609AuthorsCursorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.blogs['2026-09'].authors.cursor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCmsBlogs202609AuthorsCursorQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']>
  >,
) {
  return ['cms', '/cms/blogs/2026-09/authors/cursor/query', toValue(args)] as const
}

export function getCmsBlogs202609AuthorsCursorQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogs202609AuthorsCursorQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.blogs['2026-09'].authors.cursor.query.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsBlogs202609AuthorsCursorQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']>
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
                    (typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']
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
                    (typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsBlogs202609AuthorsCursorQueryQueryKey>
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
            ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609AuthorsCursorQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogs202609AuthorsCursorQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.blogs['2026-09'].authors.cursor.query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCmsBlogs202609PostsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>>,
) {
  return ['cms', '/cms/blogs/2026-09/posts', toValue(args)] as const
}

export function getCmsBlogs202609PostsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogs202609PostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsBlogs202609Posts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCmsBlogs202609PostsQueryKey>
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
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609PostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogs202609PostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.blogs['2026-09'].posts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCmsBlogs202609PostsMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts', 'POST'] as const
}

export function getPostCmsBlogs202609PostsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$post']>,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].posts.$post(args, options))
    },
  })
}

export function usePostCmsBlogs202609Posts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$post']>,
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
  const mutationDefaults = getPostCmsBlogs202609PostsMutationOptions<TError, TOnMutateResult>(
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

export function getPostCmsBlogs202609PostsBatchArchiveMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/batch/archive', 'POST'] as const
}

export function getPostCmsBlogs202609PostsBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['archive']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].posts.batch.archive.$post(args, options))
    },
  })
}

export function usePostCmsBlogs202609PostsBatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.cms.blogs)['2026-09']['posts']['batch']['archive']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['posts']['batch']['archive']['$post']
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
  const mutationDefaults = getPostCmsBlogs202609PostsBatchArchiveMutationOptions<
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

export function getPostCmsBlogs202609PostsBatchCreateMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/batch/create', 'POST'] as const
}

export function getPostCmsBlogs202609PostsBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['create']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].posts.batch.create.$post(args, options))
    },
  })
}

export function usePostCmsBlogs202609PostsBatchCreate<
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
                    (typeof client.cms.blogs)['2026-09']['posts']['batch']['create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['posts']['batch']['create']['$post']
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
  const mutationDefaults = getPostCmsBlogs202609PostsBatchCreateMutationOptions<
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

export function getPostCmsBlogs202609PostsBatchReadMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/batch/read', 'POST'] as const
}

export function getPostCmsBlogs202609PostsBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['read']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].posts.batch.read.$post(args, options))
    },
  })
}

export function usePostCmsBlogs202609PostsBatchRead<
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
                    (typeof client.cms.blogs)['2026-09']['posts']['batch']['read']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['read']['$post']>,
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
  const mutationDefaults = getPostCmsBlogs202609PostsBatchReadMutationOptions<
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

export function getPostCmsBlogs202609PostsBatchUpdateMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/batch/update', 'POST'] as const
}

export function getPostCmsBlogs202609PostsBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['update']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].posts.batch.update.$post(args, options))
    },
  })
}

export function usePostCmsBlogs202609PostsBatchUpdate<
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
                    (typeof client.cms.blogs)['2026-09']['posts']['batch']['update']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['posts']['batch']['update']['$post']
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
  const mutationDefaults = getPostCmsBlogs202609PostsBatchUpdateMutationOptions<
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

export function getPostCmsBlogs202609PostsCloneMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/clone', 'POST'] as const
}

export function getPostCmsBlogs202609PostsCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['clone']['$post']>,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].posts.clone.$post(args, options))
    },
  })
}

export function usePostCmsBlogs202609PostsClone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['clone']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['clone']['$post']>,
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
  const mutationDefaults = getPostCmsBlogs202609PostsCloneMutationOptions<TError, TOnMutateResult>(
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

export function getCmsBlogs202609PostsCursorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>
  >,
) {
  return ['cms', '/cms/blogs/2026-09/posts/cursor', toValue(args)] as const
}

export function getCmsBlogs202609PostsCursorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogs202609PostsCursorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts.cursor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsBlogs202609PostsCursor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCmsBlogs202609PostsCursorQueryKey>
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
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609PostsCursorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogs202609PostsCursorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.blogs['2026-09'].posts.cursor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCmsBlogs202609PostsCursorQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>
  >,
) {
  return ['cms', '/cms/blogs/2026-09/posts/cursor/query', toValue(args)] as const
}

export function getCmsBlogs202609PostsCursorQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogs202609PostsCursorQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts.cursor.query.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsBlogs202609PostsCursorQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>
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
                    (typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']
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
                    (typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsBlogs202609PostsCursorQueryQueryKey>
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
            ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609PostsCursorQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogs202609PostsCursorQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.blogs['2026-09'].posts.cursor.query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCmsBlogs202609PostsMultiLanguageAttachToLangGroupMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/multi-language/attach-to-lang-group', 'POST'] as const
}

export function getPostCmsBlogs202609PostsMultiLanguageAttachToLangGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['attach-to-lang-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['attach-to-lang-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsMultiLanguageAttachToLangGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['attach-to-lang-group']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts['multi-language']['attach-to-lang-group'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsBlogs202609PostsMultiLanguageAttachToLangGroup<
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
                    (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['attach-to-lang-group']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['attach-to-lang-group']['$post']
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
  const mutationDefaults = getPostCmsBlogs202609PostsMultiLanguageAttachToLangGroupMutationOptions<
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

export function getPostCmsBlogs202609PostsMultiLanguageCreateLanguageVariationMutationKey() {
  return [
    'cms',
    '/cms/blogs/2026-09/posts/multi-language/create-language-variation',
    'POST',
  ] as const
}

export function getPostCmsBlogs202609PostsMultiLanguageCreateLanguageVariationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['create-language-variation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['create-language-variation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsMultiLanguageCreateLanguageVariationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['create-language-variation']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts['multi-language']['create-language-variation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsBlogs202609PostsMultiLanguageCreateLanguageVariation<
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
                    (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['create-language-variation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['create-language-variation']['$post']
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
  const mutationDefaults =
    getPostCmsBlogs202609PostsMultiLanguageCreateLanguageVariationMutationOptions<
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

export function getPostCmsBlogs202609PostsMultiLanguageDetachFromLangGroupMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/multi-language/detach-from-lang-group', 'POST'] as const
}

export function getPostCmsBlogs202609PostsMultiLanguageDetachFromLangGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['detach-from-lang-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['detach-from-lang-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsMultiLanguageDetachFromLangGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['detach-from-lang-group']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts['multi-language']['detach-from-lang-group'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsBlogs202609PostsMultiLanguageDetachFromLangGroup<
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
                    (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['detach-from-lang-group']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['detach-from-lang-group']['$post']
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
  const mutationDefaults =
    getPostCmsBlogs202609PostsMultiLanguageDetachFromLangGroupMutationOptions<
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

export function getPutCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/multi-language/set-new-lang-primary', 'PUT'] as const
}

export function getPutCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['set-new-lang-primary']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['set-new-lang-primary']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['set-new-lang-primary']['$put']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts['multi-language']['set-new-lang-primary'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCmsBlogs202609PostsMultiLanguageSetNewLangPrimary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['set-new-lang-primary']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['set-new-lang-primary']['$put']
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
  const mutationDefaults = getPutCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryMutationOptions<
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

export function getPostCmsBlogs202609PostsMultiLanguageUpdateLanguagesMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/multi-language/update-languages', 'POST'] as const
}

export function getPostCmsBlogs202609PostsMultiLanguageUpdateLanguagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['update-languages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['update-languages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsMultiLanguageUpdateLanguagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['update-languages']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts['multi-language']['update-languages'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsBlogs202609PostsMultiLanguageUpdateLanguages<
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
                    (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['update-languages']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['update-languages']['$post']
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
  const mutationDefaults = getPostCmsBlogs202609PostsMultiLanguageUpdateLanguagesMutationOptions<
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

export function getPostCmsBlogs202609PostsScheduleMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/schedule', 'POST'] as const
}

export function getPostCmsBlogs202609PostsScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['schedule']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['schedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['schedule']['$post']>,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].posts.schedule.$post(args, options))
    },
  })
}

export function usePostCmsBlogs202609PostsSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['schedule']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['schedule']['$post']>,
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
  const mutationDefaults = getPostCmsBlogs202609PostsScheduleMutationOptions<
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

export function getCmsBlogs202609PostsObjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>
  >,
) {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId', toValue(args)] as const
}

export function getCmsBlogs202609PostsObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogs202609PostsObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts[':objectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsBlogs202609PostsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>
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
                  ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCmsBlogs202609PostsObjectIdQueryKey>
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
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609PostsObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogs202609PostsObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.blogs['2026-09'].posts[':objectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCmsBlogs202609PostsObjectIdMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId', 'DELETE'] as const
}

export function getDeleteCmsBlogs202609PostsObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCmsBlogs202609PostsObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$delete']>,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].posts[':objectId'].$delete(args, options))
    },
  })
}

export function useDeleteCmsBlogs202609PostsObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$delete']>,
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
  const mutationDefaults = getDeleteCmsBlogs202609PostsObjectIdMutationOptions<
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

export function getPatchCmsBlogs202609PostsObjectIdMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId', 'PATCH'] as const
}

export function getPatchCmsBlogs202609PostsObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCmsBlogs202609PostsObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$patch']>,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].posts[':objectId'].$patch(args, options))
    },
  })
}

export function usePatchCmsBlogs202609PostsObjectId<
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
                  ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$patch']>,
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
  const mutationDefaults = getPatchCmsBlogs202609PostsObjectIdMutationOptions<
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

export function getCmsBlogs202609PostsObjectIdDraftQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']>
  >,
) {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/draft', toValue(args)] as const
}

export function getCmsBlogs202609PostsObjectIdDraftQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogs202609PostsObjectIdDraftQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts[':objectId'].draft.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsBlogs202609PostsObjectIdDraft<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']>
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
                    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']
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
                    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsBlogs202609PostsObjectIdDraftQueryKey>
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
            ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609PostsObjectIdDraftQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogs202609PostsObjectIdDraftQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.blogs['2026-09'].posts[':objectId'].draft.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchCmsBlogs202609PostsObjectIdDraftMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/draft', 'PATCH'] as const
}

export function getPatchCmsBlogs202609PostsObjectIdDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCmsBlogs202609PostsObjectIdDraftMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$patch']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts[':objectId'].draft.$patch(args, options),
      )
    },
  })
}

export function usePatchCmsBlogs202609PostsObjectIdDraft<
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
                    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$patch']
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
  const mutationDefaults = getPatchCmsBlogs202609PostsObjectIdDraftMutationOptions<
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

export function getPostCmsBlogs202609PostsObjectIdDraftPushLiveMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/draft/push-live', 'POST'] as const
}

export function getPostCmsBlogs202609PostsObjectIdDraftPushLiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['push-live']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['push-live']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsObjectIdDraftPushLiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['push-live']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts[':objectId'].draft['push-live'].$post(args, options),
      )
    },
  })
}

export function usePostCmsBlogs202609PostsObjectIdDraftPushLive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['push-live']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['push-live']['$post']
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
  const mutationDefaults = getPostCmsBlogs202609PostsObjectIdDraftPushLiveMutationOptions<
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

export function getPostCmsBlogs202609PostsObjectIdDraftResetMutationKey() {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/draft/reset', 'POST'] as const
}

export function getPostCmsBlogs202609PostsObjectIdDraftResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['reset']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsObjectIdDraftResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts[':objectId'].draft.reset.$post(args, options),
      )
    },
  })
}

export function usePostCmsBlogs202609PostsObjectIdDraftReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['reset']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['reset']['$post']
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
  const mutationDefaults = getPostCmsBlogs202609PostsObjectIdDraftResetMutationOptions<
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

export function getCmsBlogs202609PostsObjectIdRevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
    >
  >,
) {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/revisions', toValue(args)] as const
}

export function getCmsBlogs202609PostsObjectIdRevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogs202609PostsObjectIdRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts[':objectId'].revisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsBlogs202609PostsObjectIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
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
                    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
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
                    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsBlogs202609PostsObjectIdRevisionsQueryKey>
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
              (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609PostsObjectIdRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogs202609PostsObjectIdRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.blogs['2026-09'].posts[':objectId'].revisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCmsBlogs202609PostsObjectIdRevisionsRevisionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
    >
  >,
) {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/revisions/:revisionId', toValue(args)] as const
}

export function getCmsBlogs202609PostsObjectIdRevisionsRevisionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogs202609PostsObjectIdRevisionsRevisionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts[':objectId'].revisions[':revisionId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCmsBlogs202609PostsObjectIdRevisionsRevisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
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
                    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
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
                    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsBlogs202609PostsObjectIdRevisionsRevisionIdQueryKey>
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
              (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609PostsObjectIdRevisionsRevisionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogs202609PostsObjectIdRevisionsRevisionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.blogs['2026-09'].posts[':objectId'].revisions[':revisionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreMutationKey() {
  return [
    'cms',
    '/cms/blogs/2026-09/posts/:objectId/revisions/:revisionId/restore',
    'POST',
  ] as const
}

export function getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts[':objectId'].revisions[':revisionId'].restore.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestore<
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
                    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore']['$post']
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
  const mutationDefaults =
    getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreMutationOptions<
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

export function getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftMutationKey() {
  return [
    'cms',
    '/cms/blogs/2026-09/posts/:objectId/revisions/:revisionId/restore-to-draft',
    'POST',
  ] as const
}

export function getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts[':objectId'].revisions[':revisionId'][
          'restore-to-draft'
        ].$post(args, options),
      )
    },
  })
}

export function usePostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraft<
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
                    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
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
  const mutationDefaults =
    getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftMutationOptions<
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

export function getCmsBlogs202609TagsCursorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>
  >,
) {
  return ['cms', '/cms/blogs/2026-09/tags/cursor', toValue(args)] as const
}

export function getCmsBlogs202609TagsCursorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogs202609TagsCursorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.blogs['2026-09'].tags.cursor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsBlogs202609TagsCursor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCmsBlogs202609TagsCursorQueryKey>
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
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609TagsCursorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogs202609TagsCursorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.blogs['2026-09'].tags.cursor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCmsBlogs202609TagsCursorQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>
  >,
) {
  return ['cms', '/cms/blogs/2026-09/tags/cursor/query', toValue(args)] as const
}

export function getCmsBlogs202609TagsCursorQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogs202609TagsCursorQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.blogs['2026-09'].tags.cursor.query.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsBlogs202609TagsCursorQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>
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
                    (typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']
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
                    (typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsBlogs202609TagsCursorQueryQueryKey>
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
            ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609TagsCursorQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogs202609TagsCursorQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.blogs['2026-09'].tags.cursor.query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

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

export function getCmsKey() {
  return ['cms'] as const
}

export function getCmsBlogs202609AuthorsCursorQueryKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/authors/cursor', args] as const
}

export function getCmsBlogs202609AuthorsCursorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsBlogs202609AuthorsCursorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].authors.cursor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsBlogs202609AuthorsCursor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCmsBlogs202609AuthorsCursorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCmsBlogs202609AuthorsCursorQueryQueryKey(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']
  >,
) {
  return ['cms', '/cms/blogs/2026-09/authors/cursor/query', args] as const
}

export function getCmsBlogs202609AuthorsCursorQueryQueryOptions<
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
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsBlogs202609AuthorsCursorQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].authors.cursor.query.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsBlogs202609AuthorsCursorQuery<
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
  args: () => InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getCmsBlogs202609AuthorsCursorQueryQueryKey>
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
      ...getCmsBlogs202609AuthorsCursorQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCmsBlogs202609PostsQueryKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/posts', args] as const
}

export function getCmsBlogs202609PostsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsBlogs202609PostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsBlogs202609Posts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCmsBlogs202609PostsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCmsBlogs202609Posts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsBlogs202609PostsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCmsBlogs202609PostsBatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsBlogs202609PostsBatchArchiveMutationOptions<
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

export function createPostCmsBlogs202609PostsBatchCreate<
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
                  (typeof client.cms.blogs)['2026-09']['posts']['batch']['create']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['create']['$post']>,
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
    const mutationDefaults = getPostCmsBlogs202609PostsBatchCreateMutationOptions<
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

export function createPostCmsBlogs202609PostsBatchRead<
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
                ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['read']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['read']['$post']>,
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
    const mutationDefaults = getPostCmsBlogs202609PostsBatchReadMutationOptions<
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

export function createPostCmsBlogs202609PostsBatchUpdate<
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
                  (typeof client.cms.blogs)['2026-09']['posts']['batch']['update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['update']['$post']>,
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
    const mutationDefaults = getPostCmsBlogs202609PostsBatchUpdateMutationOptions<
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

export function createPostCmsBlogs202609PostsClone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsBlogs202609PostsCloneMutationOptions<
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

export function getCmsBlogs202609PostsCursorQueryKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/posts/cursor', args] as const
}

export function getCmsBlogs202609PostsCursorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsBlogs202609PostsCursorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts.cursor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsBlogs202609PostsCursor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCmsBlogs202609PostsCursorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCmsBlogs202609PostsCursorQueryQueryKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/posts/cursor/query', args] as const
}

export function getCmsBlogs202609PostsCursorQueryQueryOptions<
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
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsBlogs202609PostsCursorQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts.cursor.query.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsBlogs202609PostsCursorQuery<
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
  args: () => InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCmsBlogs202609PostsCursorQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostCmsBlogs202609PostsMultiLanguageAttachToLangGroup<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCmsBlogs202609PostsMultiLanguageAttachToLangGroupMutationOptions<
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

export function createPostCmsBlogs202609PostsMultiLanguageCreateLanguageVariation<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCmsBlogs202609PostsMultiLanguageCreateLanguageVariationMutationOptions<
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

export function createPostCmsBlogs202609PostsMultiLanguageDetachFromLangGroup<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCmsBlogs202609PostsMultiLanguageDetachFromLangGroupMutationOptions<
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

export function createPutCmsBlogs202609PostsMultiLanguageSetNewLangPrimary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryMutationOptions<
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

export function createPostCmsBlogs202609PostsMultiLanguageUpdateLanguages<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsBlogs202609PostsMultiLanguageUpdateLanguagesMutationOptions<
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

export function createPostCmsBlogs202609PostsSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsBlogs202609PostsScheduleMutationOptions<
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

export function getCmsBlogs202609PostsObjectIdQueryKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId', args] as const
}

export function getCmsBlogs202609PostsObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsBlogs202609PostsObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts[':objectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsBlogs202609PostsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getCmsBlogs202609PostsObjectIdQueryKey>
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
      ...getCmsBlogs202609PostsObjectIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteCmsBlogs202609PostsObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCmsBlogs202609PostsObjectIdMutationOptions<
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

export function createPatchCmsBlogs202609PostsObjectId<
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
                ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$patch']>,
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
    const mutationDefaults = getPatchCmsBlogs202609PostsObjectIdMutationOptions<
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

export function getCmsBlogs202609PostsObjectIdDraftQueryKey(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']
  >,
) {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/draft', args] as const
}

export function getCmsBlogs202609PostsObjectIdDraftQueryOptions<
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
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsBlogs202609PostsObjectIdDraftQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts[':objectId'].draft.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsBlogs202609PostsObjectIdDraft<
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
  args: () => InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getCmsBlogs202609PostsObjectIdDraftQueryKey>
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
      ...getCmsBlogs202609PostsObjectIdDraftQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchCmsBlogs202609PostsObjectIdDraft<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCmsBlogs202609PostsObjectIdDraftMutationOptions<
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

export function createPostCmsBlogs202609PostsObjectIdDraftPushLive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsBlogs202609PostsObjectIdDraftPushLiveMutationOptions<
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

export function createPostCmsBlogs202609PostsObjectIdDraftReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsBlogs202609PostsObjectIdDraftResetMutationOptions<
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

export function getCmsBlogs202609PostsObjectIdRevisionsQueryKey(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
  >,
) {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/revisions', args] as const
}

export function getCmsBlogs202609PostsObjectIdRevisionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsBlogs202609PostsObjectIdRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts[':objectId'].revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsBlogs202609PostsObjectIdRevisions<
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
  args: () => InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCmsBlogs202609PostsObjectIdRevisionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCmsBlogs202609PostsObjectIdRevisionsRevisionIdQueryKey(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
  >,
) {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/revisions/:revisionId', args] as const
}

export function getCmsBlogs202609PostsObjectIdRevisionsRevisionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsBlogs202609PostsObjectIdRevisionsRevisionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].posts[':objectId'].revisions[':revisionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsBlogs202609PostsObjectIdRevisionsRevisionId<
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
  args: () => InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCmsBlogs202609PostsObjectIdRevisionsRevisionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestore<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreMutationOptions<
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

export function createPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraft<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftMutationOptions<
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

export function getCmsBlogs202609TagsCursorQueryKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/tags/cursor', args] as const
}

export function getCmsBlogs202609TagsCursorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsBlogs202609TagsCursorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].tags.cursor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsBlogs202609TagsCursor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCmsBlogs202609TagsCursorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCmsBlogs202609TagsCursorQueryQueryKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/tags/cursor/query', args] as const
}

export function getCmsBlogs202609TagsCursorQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsBlogs202609TagsCursorQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].tags.cursor.query.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsBlogs202609TagsCursorQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCmsBlogs202609TagsCursorQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

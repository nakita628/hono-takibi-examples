import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCmsBlogs202609AuthorsCursorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCmsBlogs202609AuthorsCursor<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCmsBlogs202609AuthorsCursorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCmsBlogs202609AuthorsCursorQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCmsBlogs202609AuthorsCursorQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCmsBlogs202609AuthorsCursorQuery<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCmsBlogs202609AuthorsCursorQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCmsBlogs202609PostsCursorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCmsBlogs202609PostsCursorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCmsBlogs202609PostsCursor<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCmsBlogs202609PostsCursorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCmsBlogs202609PostsCursorQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCmsBlogs202609PostsCursorQuery<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCmsBlogs202609PostsCursorQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCmsBlogs202609TagsQueryKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/tags', args] as const
}

export function getCmsBlogs202609TagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609TagsQueryKey>
  >({
    queryKey: getCmsBlogs202609TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCmsBlogs202609Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsBlogs202609TagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCmsBlogs202609TagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCmsBlogs202609Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsBlogs202609TagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCmsBlogs202609TagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCmsBlogs202609TagsMutationKey() {
  return ['cms', '/cms/blogs/2026-09/tags', 'POST'] as const
}

export function getPostCmsBlogs202609TagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609TagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$post']>,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].tags.$post(args, options))
    },
  })
}

export function usePostCmsBlogs202609Tags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCmsBlogs202609TagsMutationOptions<TError, TOnMutateResult>(
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

export function getPostCmsBlogs202609TagsBatchArchiveMutationKey() {
  return ['cms', '/cms/blogs/2026-09/tags/batch/archive', 'POST'] as const
}

export function getPostCmsBlogs202609TagsBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['archive']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609TagsBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['tags']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].tags.batch.archive.$post(args, options))
    },
  })
}

export function usePostCmsBlogs202609TagsBatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms.blogs)['2026-09']['tags']['batch']['archive']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['archive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCmsBlogs202609TagsBatchArchiveMutationOptions<
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

export function getPostCmsBlogs202609TagsBatchCreateMutationKey() {
  return ['cms', '/cms/blogs/2026-09/tags/batch/create', 'POST'] as const
}

export function getPostCmsBlogs202609TagsBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['create']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609TagsBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['tags']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].tags.batch.create.$post(args, options))
    },
  })
}

export function usePostCmsBlogs202609TagsBatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['create']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['create']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCmsBlogs202609TagsBatchCreateMutationOptions<
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

export function getPostCmsBlogs202609TagsBatchReadMutationKey() {
  return ['cms', '/cms/blogs/2026-09/tags/batch/read', 'POST'] as const
}

export function getPostCmsBlogs202609TagsBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['read']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609TagsBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['tags']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].tags.batch.read.$post(args, options))
    },
  })
}

export function usePostCmsBlogs202609TagsBatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['read']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['read']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCmsBlogs202609TagsBatchReadMutationOptions<
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

export function getPostCmsBlogs202609TagsBatchUpdateMutationKey() {
  return ['cms', '/cms/blogs/2026-09/tags/batch/update', 'POST'] as const
}

export function getPostCmsBlogs202609TagsBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['update']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609TagsBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['tags']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].tags.batch.update.$post(args, options))
    },
  })
}

export function usePostCmsBlogs202609TagsBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['update']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCmsBlogs202609TagsBatchUpdateMutationOptions<
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
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCmsBlogs202609TagsCursorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCmsBlogs202609TagsCursorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCmsBlogs202609TagsCursor<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCmsBlogs202609TagsCursorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCmsBlogs202609TagsCursorQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCmsBlogs202609TagsCursorQuery<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCmsBlogs202609TagsCursorQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCmsBlogs202609TagsMultiLanguageAttachToLangGroupMutationKey() {
  return ['cms', '/cms/blogs/2026-09/tags/multi-language/attach-to-lang-group', 'POST'] as const
}

export function getPostCmsBlogs202609TagsMultiLanguageAttachToLangGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['attach-to-lang-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['attach-to-lang-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609TagsMultiLanguageAttachToLangGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['attach-to-lang-group']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].tags['multi-language']['attach-to-lang-group'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsBlogs202609TagsMultiLanguageAttachToLangGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['attach-to-lang-group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['attach-to-lang-group']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCmsBlogs202609TagsMultiLanguageAttachToLangGroupMutationOptions<
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

export function getPostCmsBlogs202609TagsMultiLanguageCreateLanguageVariationMutationKey() {
  return [
    'cms',
    '/cms/blogs/2026-09/tags/multi-language/create-language-variation',
    'POST',
  ] as const
}

export function getPostCmsBlogs202609TagsMultiLanguageCreateLanguageVariationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['create-language-variation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['create-language-variation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609TagsMultiLanguageCreateLanguageVariationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['create-language-variation']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].tags['multi-language']['create-language-variation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsBlogs202609TagsMultiLanguageCreateLanguageVariation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['create-language-variation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['create-language-variation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCmsBlogs202609TagsMultiLanguageCreateLanguageVariationMutationOptions<
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

export function getPostCmsBlogs202609TagsMultiLanguageDetachFromLangGroupMutationKey() {
  return ['cms', '/cms/blogs/2026-09/tags/multi-language/detach-from-lang-group', 'POST'] as const
}

export function getPostCmsBlogs202609TagsMultiLanguageDetachFromLangGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['detach-from-lang-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['detach-from-lang-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609TagsMultiLanguageDetachFromLangGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['detach-from-lang-group']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].tags['multi-language']['detach-from-lang-group'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsBlogs202609TagsMultiLanguageDetachFromLangGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['detach-from-lang-group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['detach-from-lang-group']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCmsBlogs202609TagsMultiLanguageDetachFromLangGroupMutationOptions<
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

export function getPutCmsBlogs202609TagsMultiLanguageSetNewLangPrimaryMutationKey() {
  return ['cms', '/cms/blogs/2026-09/tags/multi-language/set-new-lang-primary', 'PUT'] as const
}

export function getPutCmsBlogs202609TagsMultiLanguageSetNewLangPrimaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['set-new-lang-primary']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['set-new-lang-primary']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCmsBlogs202609TagsMultiLanguageSetNewLangPrimaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['set-new-lang-primary']['$put']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].tags['multi-language']['set-new-lang-primary'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCmsBlogs202609TagsMultiLanguageSetNewLangPrimary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['set-new-lang-primary']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['set-new-lang-primary']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCmsBlogs202609TagsMultiLanguageSetNewLangPrimaryMutationOptions<
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

export function getPostCmsBlogs202609TagsMultiLanguageUpdateLanguagesMutationKey() {
  return ['cms', '/cms/blogs/2026-09/tags/multi-language/update-languages', 'POST'] as const
}

export function getPostCmsBlogs202609TagsMultiLanguageUpdateLanguagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['update-languages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['update-languages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609TagsMultiLanguageUpdateLanguagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['update-languages']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].tags['multi-language']['update-languages'].$post(args, options),
      )
    },
  })
}

export function usePostCmsBlogs202609TagsMultiLanguageUpdateLanguages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['update-languages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['update-languages']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCmsBlogs202609TagsMultiLanguageUpdateLanguagesMutationOptions<
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

export function getCmsBlogs202609TagsObjectIdQueryKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/tags/:objectId', args] as const
}

export function getCmsBlogs202609TagsObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609TagsObjectIdQueryKey>
  >({
    queryKey: getCmsBlogs202609TagsObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].tags[':objectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCmsBlogs202609TagsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsBlogs202609TagsObjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCmsBlogs202609TagsObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCmsBlogs202609TagsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsBlogs202609TagsObjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCmsBlogs202609TagsObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCmsBlogs202609TagsObjectIdMutationKey() {
  return ['cms', '/cms/blogs/2026-09/tags/:objectId', 'DELETE'] as const
}

export function getDeleteCmsBlogs202609TagsObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCmsBlogs202609TagsObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$delete']>,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].tags[':objectId'].$delete(args, options))
    },
  })
}

export function useDeleteCmsBlogs202609TagsObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCmsBlogs202609TagsObjectIdMutationOptions<
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

export function getPatchCmsBlogs202609TagsObjectIdMutationKey() {
  return ['cms', '/cms/blogs/2026-09/tags/:objectId', 'PATCH'] as const
}

export function getPatchCmsBlogs202609TagsObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCmsBlogs202609TagsObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$patch']>,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].tags[':objectId'].$patch(args, options))
    },
  })
}

export function usePatchCmsBlogs202609TagsObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCmsBlogs202609TagsObjectIdMutationOptions<
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

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

export function getV3Key() {
  return ['v3'] as const
}

export function getV3BlogsByurlQueryKey(args: InferRequestType<typeof client.v3.blogs.byurl.$get>) {
  return ['v3', '/v3/blogs/byurl', args] as const
}

export function getV3BlogsByurlQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.blogs.byurl.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.blogs.byurl.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.blogs.byurl.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsByurlQueryKey>
  >({
    queryKey: getV3BlogsByurlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.blogs.byurl.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3BlogsByurl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.blogs.byurl.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.blogs.byurl.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.blogs.byurl.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3BlogsByurlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3BlogsByurlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3BlogsBlogIdQueryKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId', args] as const
}

export function getV3BlogsBlogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdQueryKey>
  >({
    queryKey: getV3BlogsBlogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.blogs[':blogId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3BlogsBlogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.blogs)[':blogId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3BlogsBlogIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3BlogsBlogIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3BlogsBlogIdCommentsQueryKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/comments', args] as const
}

export function getV3BlogsBlogIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdCommentsQueryKey>
  >({
    queryKey: getV3BlogsBlogIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.blogs[':blogId'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3BlogsBlogIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3BlogsBlogIdCommentsQueryKey>
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
      ...getV3BlogsBlogIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3BlogsBlogIdPagesQueryKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/pages', args] as const
}

export function getV3BlogsBlogIdPagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPagesQueryKey>
  >({
    queryKey: getV3BlogsBlogIdPagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.blogs[':blogId'].pages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3BlogsBlogIdPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3BlogsBlogIdPagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3BlogsBlogIdPagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV3BlogsBlogIdPagesMutationKey() {
  return ['v3', '/v3/blogs/:blogId/pages', 'POST'] as const
}

export function getPostV3BlogsBlogIdPagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3BlogsBlogIdPagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$post']>,
    ) {
      return parseResponse(client.v3.blogs[':blogId'].pages.$post(args, options))
    },
  })
}

export function createPostV3BlogsBlogIdPages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$post']>,
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
    const mutationDefaults = getPostV3BlogsBlogIdPagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3BlogsBlogIdPagesPageIdQueryKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/pages/:pageId', args] as const
}

export function getV3BlogsBlogIdPagesPageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPagesPageIdQueryKey>
  >({
    queryKey: getV3BlogsBlogIdPagesPageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.blogs[':blogId'].pages[':pageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3BlogsBlogIdPagesPageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3BlogsBlogIdPagesPageIdQueryKey>
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
      ...getV3BlogsBlogIdPagesPageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV3BlogsBlogIdPagesPageIdMutationKey() {
  return ['v3', '/v3/blogs/:blogId/pages/:pageId', 'PUT'] as const
}

export function getPutV3BlogsBlogIdPagesPageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV3BlogsBlogIdPagesPageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$put']>,
    ) {
      return parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].$put(args, options))
    },
  })
}

export function createPutV3BlogsBlogIdPagesPageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$put']>,
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
    const mutationDefaults = getPutV3BlogsBlogIdPagesPageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV3BlogsBlogIdPagesPageIdMutationKey() {
  return ['v3', '/v3/blogs/:blogId/pages/:pageId', 'DELETE'] as const
}

export function getDeleteV3BlogsBlogIdPagesPageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3BlogsBlogIdPagesPageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$delete']>,
    ) {
      return parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].$delete(args, options))
    },
  })
}

export function createDeleteV3BlogsBlogIdPagesPageId<
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
                ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$delete']>,
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
    const mutationDefaults = getDeleteV3BlogsBlogIdPagesPageIdMutationOptions<
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

export function getPatchV3BlogsBlogIdPagesPageIdMutationKey() {
  return ['v3', '/v3/blogs/:blogId/pages/:pageId', 'PATCH'] as const
}

export function getPatchV3BlogsBlogIdPagesPageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV3BlogsBlogIdPagesPageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$patch']>,
    ) {
      return parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].$patch(args, options))
    },
  })
}

export function createPatchV3BlogsBlogIdPagesPageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$patch']>,
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
    const mutationDefaults = getPatchV3BlogsBlogIdPagesPageIdMutationOptions<
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

export function getPostV3BlogsBlogIdPagesPageIdPublishMutationKey() {
  return ['v3', '/v3/blogs/:blogId/pages/:pageId/publish', 'POST'] as const
}

export function getPostV3BlogsBlogIdPagesPageIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['publish']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3BlogsBlogIdPagesPageIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.blogs)[':blogId']['pages'][':pageId']['publish']['$post']
      >,
    ) {
      return parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].publish.$post(args, options))
    },
  })
}

export function createPostV3BlogsBlogIdPagesPageIdPublish<
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
                  (typeof client.v3.blogs)[':blogId']['pages'][':pageId']['publish']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v3.blogs)[':blogId']['pages'][':pageId']['publish']['$post']
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
    const mutationDefaults = getPostV3BlogsBlogIdPagesPageIdPublishMutationOptions<
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

export function getPostV3BlogsBlogIdPagesPageIdRevertMutationKey() {
  return ['v3', '/v3/blogs/:blogId/pages/:pageId/revert', 'POST'] as const
}

export function getPostV3BlogsBlogIdPagesPageIdRevertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['revert']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['revert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3BlogsBlogIdPagesPageIdRevertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.blogs)[':blogId']['pages'][':pageId']['revert']['$post']
      >,
    ) {
      return parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].revert.$post(args, options))
    },
  })
}

export function createPostV3BlogsBlogIdPagesPageIdRevert<
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
                  (typeof client.v3.blogs)[':blogId']['pages'][':pageId']['revert']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v3.blogs)[':blogId']['pages'][':pageId']['revert']['$post']
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
    const mutationDefaults = getPostV3BlogsBlogIdPagesPageIdRevertMutationOptions<
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

export function getV3BlogsBlogIdPageviewsQueryKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/pageviews', args] as const
}

export function getV3BlogsBlogIdPageviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPageviewsQueryKey>
  >({
    queryKey: getV3BlogsBlogIdPageviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.blogs[':blogId'].pageviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3BlogsBlogIdPageviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3BlogsBlogIdPageviewsQueryKey>
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
      ...getV3BlogsBlogIdPageviewsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3BlogsBlogIdPostsQueryKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/posts', args] as const
}

export function getV3BlogsBlogIdPostsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPostsQueryKey>
  >({
    queryKey: getV3BlogsBlogIdPostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3BlogsBlogIdPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3BlogsBlogIdPostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3BlogsBlogIdPostsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV3BlogsBlogIdPostsMutationKey() {
  return ['v3', '/v3/blogs/:blogId/posts', 'POST'] as const
}

export function getPostV3BlogsBlogIdPostsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3BlogsBlogIdPostsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$post']>,
    ) {
      return parseResponse(client.v3.blogs[':blogId'].posts.$post(args, options))
    },
  })
}

export function createPostV3BlogsBlogIdPosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$post']>,
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
    const mutationDefaults = getPostV3BlogsBlogIdPostsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3BlogsBlogIdPostsBypathQueryKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/posts/bypath', args] as const
}

export function getV3BlogsBlogIdPostsBypathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPostsBypathQueryKey>
  >({
    queryKey: getV3BlogsBlogIdPostsBypathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts.bypath.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3BlogsBlogIdPostsBypath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3BlogsBlogIdPostsBypathQueryKey>
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
      ...getV3BlogsBlogIdPostsBypathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3BlogsBlogIdPostsSearchQueryKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/posts/search', args] as const
}

export function getV3BlogsBlogIdPostsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPostsSearchQueryKey>
  >({
    queryKey: getV3BlogsBlogIdPostsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3BlogsBlogIdPostsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3BlogsBlogIdPostsSearchQueryKey>
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
      ...getV3BlogsBlogIdPostsSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3BlogsBlogIdPostsPostIdQueryKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/posts/:postId', args] as const
}

export function getV3BlogsBlogIdPostsPostIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPostsPostIdQueryKey>
  >({
    queryKey: getV3BlogsBlogIdPostsPostIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts[':postId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3BlogsBlogIdPostsPostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3BlogsBlogIdPostsPostIdQueryKey>
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
      ...getV3BlogsBlogIdPostsPostIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV3BlogsBlogIdPostsPostIdMutationKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId', 'PUT'] as const
}

export function getPutV3BlogsBlogIdPostsPostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV3BlogsBlogIdPostsPostIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$put']>,
    ) {
      return parseResponse(client.v3.blogs[':blogId'].posts[':postId'].$put(args, options))
    },
  })
}

export function createPutV3BlogsBlogIdPostsPostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$put']>,
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
    const mutationDefaults = getPutV3BlogsBlogIdPostsPostIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV3BlogsBlogIdPostsPostIdMutationKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId', 'DELETE'] as const
}

export function getDeleteV3BlogsBlogIdPostsPostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3BlogsBlogIdPostsPostIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$delete']>,
    ) {
      return parseResponse(client.v3.blogs[':blogId'].posts[':postId'].$delete(args, options))
    },
  })
}

export function createDeleteV3BlogsBlogIdPostsPostId<
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
                ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$delete']>,
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
    const mutationDefaults = getDeleteV3BlogsBlogIdPostsPostIdMutationOptions<
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

export function getPatchV3BlogsBlogIdPostsPostIdMutationKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId', 'PATCH'] as const
}

export function getPatchV3BlogsBlogIdPostsPostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV3BlogsBlogIdPostsPostIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$patch']>,
    ) {
      return parseResponse(client.v3.blogs[':blogId'].posts[':postId'].$patch(args, options))
    },
  })
}

export function createPatchV3BlogsBlogIdPostsPostId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$patch']>,
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
    const mutationDefaults = getPatchV3BlogsBlogIdPostsPostIdMutationOptions<
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

export function getV3BlogsBlogIdPostsPostIdCommentsQueryKey(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']
  >,
) {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/comments', args] as const
}

export function getV3BlogsBlogIdPostsPostIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPostsPostIdCommentsQueryKey>
  >({
    queryKey: getV3BlogsBlogIdPostsPostIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts[':postId'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3BlogsBlogIdPostsPostIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3BlogsBlogIdPostsPostIdCommentsQueryKey>
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
      ...getV3BlogsBlogIdPostsPostIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3BlogsBlogIdPostsPostIdCommentsCommentIdQueryKey(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
  >,
) {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/comments/:commentId', args] as const
}

export function getV3BlogsBlogIdPostsPostIdCommentsCommentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPostsPostIdCommentsCommentIdQueryKey>
  >({
    queryKey: getV3BlogsBlogIdPostsPostIdCommentsCommentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3BlogsBlogIdPostsPostIdCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3BlogsBlogIdPostsPostIdCommentsCommentIdQueryKey>
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
      ...getV3BlogsBlogIdPostsPostIdCommentsCommentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV3BlogsBlogIdPostsPostIdCommentsCommentIdMutationKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/comments/:commentId', 'DELETE'] as const
}

export function getDeleteV3BlogsBlogIdPostsPostIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3BlogsBlogIdPostsPostIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV3BlogsBlogIdPostsPostIdCommentsCommentId<
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
                  (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$delete']
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
    const mutationDefaults = getDeleteV3BlogsBlogIdPostsPostIdCommentsCommentIdMutationOptions<
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

export function getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveMutationKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/comments/:commentId/approve', 'POST'] as const
}

export function getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['approve']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['approve']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['approve']['$post']
      >,
    ) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].approve.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostV3BlogsBlogIdPostsPostIdCommentsCommentIdApprove<
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
                  (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['approve']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['approve']['$post']
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
    const mutationDefaults = getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveMutationOptions<
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

export function getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentMutationKey() {
  return [
    'v3',
    '/v3/blogs/:blogId/posts/:postId/comments/:commentId/removecontent',
    'POST',
  ] as const
}

export function getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['removecontent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['removecontent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['removecontent']['$post']
      >,
    ) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].removecontent.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontent<
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
                  (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['removecontent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['removecontent']['$post']
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
      getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentMutationOptions<
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

export function getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamMutationKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/comments/:commentId/spam', 'POST'] as const
}

export function getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['spam']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['spam']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['spam']['$post']
      >,
    ) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].spam.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostV3BlogsBlogIdPostsPostIdCommentsCommentIdSpam<
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
                  (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['spam']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['spam']['$post']
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
    const mutationDefaults = getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamMutationOptions<
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

export function getPostV3BlogsBlogIdPostsPostIdPublishMutationKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/publish', 'POST'] as const
}

export function getPostV3BlogsBlogIdPostsPostIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['publish']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3BlogsBlogIdPostsPostIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.blogs)[':blogId']['posts'][':postId']['publish']['$post']
      >,
    ) {
      return parseResponse(client.v3.blogs[':blogId'].posts[':postId'].publish.$post(args, options))
    },
  })
}

export function createPostV3BlogsBlogIdPostsPostIdPublish<
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
                  (typeof client.v3.blogs)[':blogId']['posts'][':postId']['publish']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v3.blogs)[':blogId']['posts'][':postId']['publish']['$post']
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
    const mutationDefaults = getPostV3BlogsBlogIdPostsPostIdPublishMutationOptions<
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

export function getPostV3BlogsBlogIdPostsPostIdRevertMutationKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/revert', 'POST'] as const
}

export function getPostV3BlogsBlogIdPostsPostIdRevertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['revert']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['revert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3BlogsBlogIdPostsPostIdRevertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.blogs)[':blogId']['posts'][':postId']['revert']['$post']
      >,
    ) {
      return parseResponse(client.v3.blogs[':blogId'].posts[':postId'].revert.$post(args, options))
    },
  })
}

export function createPostV3BlogsBlogIdPostsPostIdRevert<
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
                  (typeof client.v3.blogs)[':blogId']['posts'][':postId']['revert']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v3.blogs)[':blogId']['posts'][':postId']['revert']['$post']
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
    const mutationDefaults = getPostV3BlogsBlogIdPostsPostIdRevertMutationOptions<
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

export function getV3UsersUserIdQueryKey(
  args: InferRequestType<(typeof client.v3.users)[':userId']['$get']>,
) {
  return ['v3', '/v3/users/:userId', args] as const
}

export function getV3UsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3UsersUserIdQueryKey>
  >({
    queryKey: getV3UsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.users[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3UsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3UsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3UsersUserIdBlogsQueryKey(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs']['$get']>,
) {
  return ['v3', '/v3/users/:userId/blogs', args] as const
}

export function getV3UsersUserIdBlogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3UsersUserIdBlogsQueryKey>
  >({
    queryKey: getV3UsersUserIdBlogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.users[':userId'].blogs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3UsersUserIdBlogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.users)[':userId']['blogs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3UsersUserIdBlogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3UsersUserIdBlogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3UsersUserIdBlogsBlogIdQueryKey(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>,
) {
  return ['v3', '/v3/users/:userId/blogs/:blogId', args] as const
}

export function getV3UsersUserIdBlogsBlogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3UsersUserIdBlogsBlogIdQueryKey>
  >({
    queryKey: getV3UsersUserIdBlogsBlogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.users[':userId'].blogs[':blogId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3UsersUserIdBlogsBlogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3UsersUserIdBlogsBlogIdQueryKey>
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
      ...getV3UsersUserIdBlogsBlogIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3UsersUserIdBlogsBlogIdPostsQueryKey(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>,
) {
  return ['v3', '/v3/users/:userId/blogs/:blogId/posts', args] as const
}

export function getV3UsersUserIdBlogsBlogIdPostsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3UsersUserIdBlogsBlogIdPostsQueryKey>
  >({
    queryKey: getV3UsersUserIdBlogsBlogIdPostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.users[':userId'].blogs[':blogId'].posts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3UsersUserIdBlogsBlogIdPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3UsersUserIdBlogsBlogIdPostsQueryKey>
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
      ...getV3UsersUserIdBlogsBlogIdPostsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3UsersUserIdBlogsBlogIdPostsPostIdQueryKey(
  args: InferRequestType<
    (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
  >,
) {
  return ['v3', '/v3/users/:userId/blogs/:blogId/posts/:postId', args] as const
}

export function getV3UsersUserIdBlogsBlogIdPostsPostIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3UsersUserIdBlogsBlogIdPostsPostIdQueryKey>
  >({
    queryKey: getV3UsersUserIdBlogsBlogIdPostsPostIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.users[':userId'].blogs[':blogId'].posts[':postId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3UsersUserIdBlogsBlogIdPostsPostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3UsersUserIdBlogsBlogIdPostsPostIdQueryKey>
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
      ...getV3UsersUserIdBlogsBlogIdPostsPostIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

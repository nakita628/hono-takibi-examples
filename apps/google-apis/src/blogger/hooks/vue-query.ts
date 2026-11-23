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

export function getV3BlogsByurlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.blogs.byurl.$get>>,
) {
  return ['v3', '/v3/blogs/byurl', toValue(args)] as const
}

export function getV3BlogsByurlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.blogs.byurl.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3BlogsByurlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.blogs.byurl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3BlogsByurl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.blogs.byurl.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.blogs.byurl.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.blogs.byurl.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.blogs.byurl.$get>>>>
          >,
          ReturnType<typeof getV3BlogsByurlQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.blogs.byurl.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsByurlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3BlogsByurlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.blogs.byurl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3BlogsBlogIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.blogs)[':blogId']['$get']>>,
) {
  return ['v3', '/v3/blogs/:blogId', toValue(args)] as const
}

export function getV3BlogsBlogIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.blogs)[':blogId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3BlogsBlogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.blogs[':blogId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3BlogsBlogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.blogs)[':blogId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['$get']>>>
            >
          >,
          ReturnType<typeof getV3BlogsBlogIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3BlogsBlogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.blogs[':blogId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3BlogsBlogIdCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>,
) {
  return ['v3', '/v3/blogs/:blogId/comments', toValue(args)] as const
}

export function getV3BlogsBlogIdCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3BlogsBlogIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.blogs[':blogId'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3BlogsBlogIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3BlogsBlogIdCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3BlogsBlogIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.blogs[':blogId'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3BlogsBlogIdPagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>,
) {
  return ['v3', '/v3/blogs/:blogId/pages', toValue(args)] as const
}

export function getV3BlogsBlogIdPagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3BlogsBlogIdPagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.blogs[':blogId'].pages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3BlogsBlogIdPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3BlogsBlogIdPagesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3BlogsBlogIdPagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.blogs[':blogId'].pages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV3BlogsBlogIdPages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3BlogsBlogIdPagesMutationOptions<TError, TOnMutateResult>(
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

export function getV3BlogsBlogIdPagesPageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>
  >,
) {
  return ['v3', '/v3/blogs/:blogId/pages/:pageId', toValue(args)] as const
}

export function getV3BlogsBlogIdPagesPageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3BlogsBlogIdPagesPageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.blogs[':blogId'].pages[':pageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3BlogsBlogIdPagesPageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3BlogsBlogIdPagesPageIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPagesPageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3BlogsBlogIdPagesPageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.blogs[':blogId'].pages[':pageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV3BlogsBlogIdPagesPageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV3BlogsBlogIdPagesPageIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteV3BlogsBlogIdPagesPageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV3BlogsBlogIdPagesPageIdMutationOptions<
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

export function usePatchV3BlogsBlogIdPagesPageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$patch']>,
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
  const mutationDefaults = getPatchV3BlogsBlogIdPagesPageIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostV3BlogsBlogIdPagesPageIdPublish<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3BlogsBlogIdPagesPageIdPublishMutationOptions<
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

export function usePostV3BlogsBlogIdPagesPageIdRevert<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3BlogsBlogIdPagesPageIdRevertMutationOptions<
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

export function getV3BlogsBlogIdPageviewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>
  >,
) {
  return ['v3', '/v3/blogs/:blogId/pageviews', toValue(args)] as const
}

export function getV3BlogsBlogIdPageviewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3BlogsBlogIdPageviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.blogs[':blogId'].pageviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3BlogsBlogIdPageviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3BlogsBlogIdPageviewsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPageviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3BlogsBlogIdPageviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.blogs[':blogId'].pageviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3BlogsBlogIdPostsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>,
) {
  return ['v3', '/v3/blogs/:blogId/posts', toValue(args)] as const
}

export function getV3BlogsBlogIdPostsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3BlogsBlogIdPostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3BlogsBlogIdPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3BlogsBlogIdPostsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3BlogsBlogIdPostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.blogs[':blogId'].posts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV3BlogsBlogIdPosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3BlogsBlogIdPostsMutationOptions<TError, TOnMutateResult>(
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

export function getV3BlogsBlogIdPostsBypathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>
  >,
) {
  return ['v3', '/v3/blogs/:blogId/posts/bypath', toValue(args)] as const
}

export function getV3BlogsBlogIdPostsBypathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3BlogsBlogIdPostsBypathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts.bypath.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3BlogsBlogIdPostsBypath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3BlogsBlogIdPostsBypathQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPostsBypathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3BlogsBlogIdPostsBypathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.blogs[':blogId'].posts.bypath.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3BlogsBlogIdPostsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>
  >,
) {
  return ['v3', '/v3/blogs/:blogId/posts/search', toValue(args)] as const
}

export function getV3BlogsBlogIdPostsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3BlogsBlogIdPostsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3BlogsBlogIdPostsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3BlogsBlogIdPostsSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPostsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3BlogsBlogIdPostsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.blogs[':blogId'].posts.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3BlogsBlogIdPostsPostIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>
  >,
) {
  return ['v3', '/v3/blogs/:blogId/posts/:postId', toValue(args)] as const
}

export function getV3BlogsBlogIdPostsPostIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3BlogsBlogIdPostsPostIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts[':postId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3BlogsBlogIdPostsPostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3BlogsBlogIdPostsPostIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPostsPostIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3BlogsBlogIdPostsPostIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.blogs[':blogId'].posts[':postId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV3BlogsBlogIdPostsPostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV3BlogsBlogIdPostsPostIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteV3BlogsBlogIdPostsPostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV3BlogsBlogIdPostsPostIdMutationOptions<
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

export function usePatchV3BlogsBlogIdPostsPostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$patch']>,
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
  const mutationDefaults = getPatchV3BlogsBlogIdPostsPostIdMutationOptions<TError, TOnMutateResult>(
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

export function getV3BlogsBlogIdPostsPostIdCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']>
  >,
) {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/comments', toValue(args)] as const
}

export function getV3BlogsBlogIdPostsPostIdCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3BlogsBlogIdPostsPostIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts[':postId'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3BlogsBlogIdPostsPostIdComments<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']>
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
                    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']
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
                    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3BlogsBlogIdPostsPostIdCommentsQueryKey>
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
            ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPostsPostIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3BlogsBlogIdPostsPostIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.blogs[':blogId'].posts[':postId'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3BlogsBlogIdPostsPostIdCommentsCommentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
    >
  >,
) {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/comments/:commentId', toValue(args)] as const
}

export function getV3BlogsBlogIdPostsPostIdCommentsCommentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3BlogsBlogIdPostsPostIdCommentsCommentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3BlogsBlogIdPostsPostIdCommentsCommentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
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
                    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
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
                    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3BlogsBlogIdPostsPostIdCommentsCommentIdQueryKey>
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
              (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3BlogsBlogIdPostsPostIdCommentsCommentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3BlogsBlogIdPostsPostIdCommentsCommentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV3BlogsBlogIdPostsPostIdCommentsCommentId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV3BlogsBlogIdPostsPostIdCommentsCommentIdMutationOptions<
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

export function usePostV3BlogsBlogIdPostsPostIdCommentsCommentIdApprove<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveMutationOptions<
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

export function usePostV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontent<
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
    getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentMutationOptions<
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

export function usePostV3BlogsBlogIdPostsPostIdCommentsCommentIdSpam<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamMutationOptions<
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

export function usePostV3BlogsBlogIdPostsPostIdPublish<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3BlogsBlogIdPostsPostIdPublishMutationOptions<
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

export function usePostV3BlogsBlogIdPostsPostIdRevert<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3BlogsBlogIdPostsPostIdRevertMutationOptions<
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

export function getV3UsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.users)[':userId']['$get']>>,
) {
  return ['v3', '/v3/users/:userId', toValue(args)] as const
}

export function getV3UsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3UsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3.users)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getV3UsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3UsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3UsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3UsersUserIdBlogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.users)[':userId']['blogs']['$get']>>,
) {
  return ['v3', '/v3/users/:userId/blogs', toValue(args)] as const
}

export function getV3UsersUserIdBlogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.users)[':userId']['blogs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3UsersUserIdBlogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.users[':userId'].blogs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3UsersUserIdBlogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.users)[':userId']['blogs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3UsersUserIdBlogsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3UsersUserIdBlogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3UsersUserIdBlogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.users[':userId'].blogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3UsersUserIdBlogsBlogIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>
  >,
) {
  return ['v3', '/v3/users/:userId/blogs/:blogId', toValue(args)] as const
}

export function getV3UsersUserIdBlogsBlogIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3UsersUserIdBlogsBlogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.users[':userId'].blogs[':blogId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3UsersUserIdBlogsBlogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3UsersUserIdBlogsBlogIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3UsersUserIdBlogsBlogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3UsersUserIdBlogsBlogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.users[':userId'].blogs[':blogId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3UsersUserIdBlogsBlogIdPostsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>
  >,
) {
  return ['v3', '/v3/users/:userId/blogs/:blogId/posts', toValue(args)] as const
}

export function getV3UsersUserIdBlogsBlogIdPostsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3UsersUserIdBlogsBlogIdPostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.users[':userId'].blogs[':blogId'].posts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3UsersUserIdBlogsBlogIdPosts<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>
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
                    (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']
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
                    (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3UsersUserIdBlogsBlogIdPostsQueryKey>
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
            ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3UsersUserIdBlogsBlogIdPostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3UsersUserIdBlogsBlogIdPostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.users[':userId'].blogs[':blogId'].posts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3UsersUserIdBlogsBlogIdPostsPostIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
    >
  >,
) {
  return ['v3', '/v3/users/:userId/blogs/:blogId/posts/:postId', toValue(args)] as const
}

export function getV3UsersUserIdBlogsBlogIdPostsPostIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3UsersUserIdBlogsBlogIdPostsPostIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.users[':userId'].blogs[':blogId'].posts[':postId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3UsersUserIdBlogsBlogIdPostsPostId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
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
                    (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
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
                    (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3UsersUserIdBlogsBlogIdPostsPostIdQueryKey>
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
              (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3UsersUserIdBlogsBlogIdPostsPostIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3UsersUserIdBlogsBlogIdPostsPostIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.users[':userId'].blogs[':blogId'].posts[':postId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

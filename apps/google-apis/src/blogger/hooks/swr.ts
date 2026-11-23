import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV3Key() {
  return ['v3'] as const
}

export function getGetV3BlogsByurlKey(args: InferRequestType<typeof client.v3.blogs.byurl.$get>) {
  return ['v3', '/v3/blogs/byurl', args] as const
}

export function useGetV3BlogsByurl<TError = unknown>(
  args: InferRequestType<typeof client.v3.blogs.byurl.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.blogs.byurl.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3BlogsByurlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.blogs.byurl.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs.byurl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BlogsByurl<TError = unknown>(
  args: InferRequestType<typeof client.v3.blogs.byurl.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.blogs.byurl.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3BlogsByurlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.blogs.byurl.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs.byurl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3BlogsBlogIdKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId', args] as const
}

export function useGetV3BlogsBlogId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3BlogsBlogIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BlogsBlogId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3BlogsBlogIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3BlogsBlogIdCommentsKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/comments', args] as const
}

export function useGetV3BlogsBlogIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BlogsBlogIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3BlogsBlogIdPagesKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/pages', args] as const
}

export function useGetV3BlogsBlogIdPages<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BlogsBlogIdPages<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3BlogsBlogIdPagesKey() {
  return ['v3', '/v3/blogs/:blogId/pages', 'POST'] as const
}

export function usePostV3BlogsBlogIdPages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3BlogsBlogIdPagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages']['$post']> },
      ) => parseResponse(client.v3.blogs[':blogId'].pages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3BlogsBlogIdPagesPageIdKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/pages/:pageId', args] as const
}

export function useGetV3BlogsBlogIdPagesPageId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPagesPageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BlogsBlogIdPagesPageId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPagesPageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV3BlogsBlogIdPagesPageIdKey() {
  return ['v3', '/v3/blogs/:blogId/pages/:pageId', 'PUT'] as const
}

export function usePutV3BlogsBlogIdPagesPageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3BlogsBlogIdPagesPageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$put']>
        },
      ) => parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3BlogsBlogIdPagesPageIdKey() {
  return ['v3', '/v3/blogs/:blogId/pages/:pageId', 'DELETE'] as const
}

export function useDeleteV3BlogsBlogIdPagesPageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3BlogsBlogIdPagesPageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$delete']>
        },
      ) => parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV3BlogsBlogIdPagesPageIdKey() {
  return ['v3', '/v3/blogs/:blogId/pages/:pageId', 'PATCH'] as const
}

export function usePatchV3BlogsBlogIdPagesPageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV3BlogsBlogIdPagesPageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['$patch']>
        },
      ) => parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3BlogsBlogIdPagesPageIdPublishKey() {
  return ['v3', '/v3/blogs/:blogId/pages/:pageId/publish', 'POST'] as const
}

export function usePostV3BlogsBlogIdPagesPageIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3BlogsBlogIdPagesPageIdPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v3.blogs)[':blogId']['pages'][':pageId']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v3.blogs[':blogId'].pages[':pageId'].publish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV3BlogsBlogIdPagesPageIdRevertKey() {
  return ['v3', '/v3/blogs/:blogId/pages/:pageId/revert', 'POST'] as const
}

export function usePostV3BlogsBlogIdPagesPageIdRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['pages'][':pageId']['revert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3BlogsBlogIdPagesPageIdRevertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v3.blogs)[':blogId']['pages'][':pageId']['revert']['$post']
          >
        },
      ) =>
        parseResponse(client.v3.blogs[':blogId'].pages[':pageId'].revert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3BlogsBlogIdPageviewsKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/pageviews', args] as const
}

export function useGetV3BlogsBlogIdPageviews<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPageviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].pageviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BlogsBlogIdPageviews<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPageviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['pageviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].pageviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3BlogsBlogIdPostsKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/posts', args] as const
}

export function useGetV3BlogsBlogIdPosts<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BlogsBlogIdPosts<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3BlogsBlogIdPostsKey() {
  return ['v3', '/v3/blogs/:blogId/posts', 'POST'] as const
}

export function usePostV3BlogsBlogIdPosts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3BlogsBlogIdPostsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['$post']> },
      ) => parseResponse(client.v3.blogs[':blogId'].posts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3BlogsBlogIdPostsBypathKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/posts/bypath', args] as const
}

export function useGetV3BlogsBlogIdPostsBypath<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPostsBypathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].posts.bypath.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BlogsBlogIdPostsBypath<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPostsBypathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['bypath']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].posts.bypath.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3BlogsBlogIdPostsSearchKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/posts/search', args] as const
}

export function useGetV3BlogsBlogIdPostsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPostsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].posts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BlogsBlogIdPostsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPostsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.blogs[':blogId'].posts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3BlogsBlogIdPostsPostIdKey(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>,
) {
  return ['v3', '/v3/blogs/:blogId/posts/:postId', args] as const
}

export function useGetV3BlogsBlogIdPostsPostId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPostsPostIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.blogs[':blogId'].posts[':postId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BlogsBlogIdPostsPostId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPostsPostIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.blogs[':blogId'].posts[':postId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV3BlogsBlogIdPostsPostIdKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId', 'PUT'] as const
}

export function usePutV3BlogsBlogIdPostsPostId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3BlogsBlogIdPostsPostIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$put']>
        },
      ) => parseResponse(client.v3.blogs[':blogId'].posts[':postId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3BlogsBlogIdPostsPostIdKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId', 'DELETE'] as const
}

export function useDeleteV3BlogsBlogIdPostsPostId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3BlogsBlogIdPostsPostIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$delete']>
        },
      ) => parseResponse(client.v3.blogs[':blogId'].posts[':postId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV3BlogsBlogIdPostsPostIdKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId', 'PATCH'] as const
}

export function usePatchV3BlogsBlogIdPostsPostId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV3BlogsBlogIdPostsPostIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['$patch']>
        },
      ) => parseResponse(client.v3.blogs[':blogId'].posts[':postId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3BlogsBlogIdPostsPostIdCommentsKey(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']
  >,
) {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/comments', args] as const
}

export function useGetV3BlogsBlogIdPostsPostIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPostsPostIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.blogs[':blogId'].posts[':postId'].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BlogsBlogIdPostsPostIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPostsPostIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.blogs[':blogId'].posts[':postId'].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3BlogsBlogIdPostsPostIdCommentsCommentIdKey(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
  >,
) {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/comments/:commentId', args] as const
}

export function useGetV3BlogsBlogIdPostsPostIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPostsPostIdCommentsCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3BlogsBlogIdPostsPostIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3BlogsBlogIdPostsPostIdCommentsCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3BlogsBlogIdPostsPostIdCommentsCommentIdKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/comments/:commentId', 'DELETE'] as const
}

export function useDeleteV3BlogsBlogIdPostsPostIdCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3BlogsBlogIdPostsPostIdCommentsCommentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/comments/:commentId/approve', 'POST'] as const
}

export function usePostV3BlogsBlogIdPostsPostIdCommentsCommentIdApprove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['approve']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['approve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].approve.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentKey() {
  return [
    'v3',
    '/v3/blogs/:blogId/posts/:postId/comments/:commentId/removecontent',
    'POST',
  ] as const
}

export function usePostV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['removecontent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['removecontent']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].removecontent.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/comments/:commentId/spam', 'POST'] as const
}

export function usePostV3BlogsBlogIdPostsPostIdCommentsCommentIdSpam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['spam']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v3.blogs)[':blogId']['posts'][':postId']['comments'][':commentId']['spam']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v3.blogs[':blogId'].posts[':postId'].comments[':commentId'].spam.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV3BlogsBlogIdPostsPostIdPublishKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/publish', 'POST'] as const
}

export function usePostV3BlogsBlogIdPostsPostIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3BlogsBlogIdPostsPostIdPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v3.blogs)[':blogId']['posts'][':postId']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v3.blogs[':blogId'].posts[':postId'].publish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV3BlogsBlogIdPostsPostIdRevertKey() {
  return ['v3', '/v3/blogs/:blogId/posts/:postId/revert', 'POST'] as const
}

export function usePostV3BlogsBlogIdPostsPostIdRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v3.blogs)[':blogId']['posts'][':postId']['revert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3BlogsBlogIdPostsPostIdRevertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v3.blogs)[':blogId']['posts'][':postId']['revert']['$post']
          >
        },
      ) =>
        parseResponse(client.v3.blogs[':blogId'].posts[':postId'].revert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3UsersUserIdKey(
  args: InferRequestType<(typeof client.v3.users)[':userId']['$get']>,
) {
  return ['v3', '/v3/users/:userId', args] as const
}

export function useGetV3UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.users)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.users)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3UsersUserIdBlogsKey(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs']['$get']>,
) {
  return ['v3', '/v3/users/:userId/blogs', args] as const
}

export function useGetV3UsersUserIdBlogs<TError = unknown>(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3UsersUserIdBlogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.users[':userId'].blogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3UsersUserIdBlogs<TError = unknown>(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3UsersUserIdBlogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.users[':userId'].blogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3UsersUserIdBlogsBlogIdKey(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>,
) {
  return ['v3', '/v3/users/:userId/blogs/:blogId', args] as const
}

export function useGetV3UsersUserIdBlogsBlogId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3UsersUserIdBlogsBlogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.users[':userId'].blogs[':blogId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3UsersUserIdBlogsBlogId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3UsersUserIdBlogsBlogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.users[':userId'].blogs[':blogId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3UsersUserIdBlogsBlogIdPostsKey(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>,
) {
  return ['v3', '/v3/users/:userId/blogs/:blogId/posts', args] as const
}

export function useGetV3UsersUserIdBlogsBlogIdPosts<TError = unknown>(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3UsersUserIdBlogsBlogIdPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.users[':userId'].blogs[':blogId'].posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3UsersUserIdBlogsBlogIdPosts<TError = unknown>(
  args: InferRequestType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3UsersUserIdBlogsBlogIdPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.users)[':userId']['blogs'][':blogId']['posts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.users[':userId'].blogs[':blogId'].posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3UsersUserIdBlogsBlogIdPostsPostIdKey(
  args: InferRequestType<
    (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
  >,
) {
  return ['v3', '/v3/users/:userId/blogs/:blogId/posts/:postId', args] as const
}

export function useGetV3UsersUserIdBlogsBlogIdPostsPostId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3UsersUserIdBlogsBlogIdPostsPostIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.users[':userId'].blogs[':blogId'].posts[':postId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3UsersUserIdBlogsBlogIdPostsPostId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.users)[':userId']['blogs'][':blogId']['posts'][':postId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3UsersUserIdBlogsBlogIdPostsPostIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.users[':userId'].blogs[':blogId'].posts[':postId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

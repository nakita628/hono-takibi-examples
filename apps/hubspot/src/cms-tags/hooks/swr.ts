import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCmsKey() {
  return ['cms'] as const
}

export function getGetCmsBlogs202609AuthorsCursorKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/authors/cursor', args] as const
}

export function useGetCmsBlogs202609AuthorsCursor<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>>
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
        ? getGetCmsBlogs202609AuthorsCursorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].authors.cursor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609AuthorsCursor<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>>
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
        ? getGetCmsBlogs202609AuthorsCursorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].authors.cursor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCmsBlogs202609AuthorsCursorQueryKey(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']
  >,
) {
  return ['cms', '/cms/blogs/2026-09/authors/cursor/query', args] as const
}

export function useGetCmsBlogs202609AuthorsCursorQuery<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']>
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
        ? getGetCmsBlogs202609AuthorsCursorQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].authors.cursor.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609AuthorsCursorQuery<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']>
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
        ? getGetCmsBlogs202609AuthorsCursorQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['cursor']['query']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].authors.cursor.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCmsBlogs202609PostsCursorKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/posts/cursor', args] as const
}

export function useGetCmsBlogs202609PostsCursor<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>>
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
        ? getGetCmsBlogs202609PostsCursorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms.blogs['2026-09'].posts.cursor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609PostsCursor<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>>
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
        ? getGetCmsBlogs202609PostsCursorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms.blogs['2026-09'].posts.cursor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCmsBlogs202609PostsCursorQueryKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/posts/cursor/query', args] as const
}

export function useGetCmsBlogs202609PostsCursorQuery<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>
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
        ? getGetCmsBlogs202609PostsCursorQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].posts.cursor.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609PostsCursorQuery<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>
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
        ? getGetCmsBlogs202609PostsCursorQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['cursor']['query']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].posts.cursor.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCmsBlogs202609TagsKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/tags', args] as const
}

export function useGetCmsBlogs202609Tags<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>>
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
        ? getGetCmsBlogs202609TagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms.blogs['2026-09'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609Tags<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>>
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
        ? getGetCmsBlogs202609TagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms.blogs['2026-09'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCmsBlogs202609TagsKey() {
  return ['cms', '/cms/blogs/2026-09/tags', 'POST'] as const
}

export function usePostCmsBlogs202609Tags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609TagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['$post']> },
      ) => parseResponse(client.cms.blogs['2026-09'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609TagsBatchArchiveKey() {
  return ['cms', '/cms/blogs/2026-09/tags/batch/archive', 'POST'] as const
}

export function usePostCmsBlogs202609TagsBatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609TagsBatchArchiveKey()
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
            (typeof client.cms.blogs)['2026-09']['tags']['batch']['archive']['$post']
          >
        },
      ) => parseResponse(client.cms.blogs['2026-09'].tags.batch.archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609TagsBatchCreateKey() {
  return ['cms', '/cms/blogs/2026-09/tags/batch/create', 'POST'] as const
}

export function usePostCmsBlogs202609TagsBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609TagsBatchCreateKey()
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
            (typeof client.cms.blogs)['2026-09']['tags']['batch']['create']['$post']
          >
        },
      ) => parseResponse(client.cms.blogs['2026-09'].tags.batch.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609TagsBatchReadKey() {
  return ['cms', '/cms/blogs/2026-09/tags/batch/read', 'POST'] as const
}

export function usePostCmsBlogs202609TagsBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609TagsBatchReadKey()
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
            (typeof client.cms.blogs)['2026-09']['tags']['batch']['read']['$post']
          >
        },
      ) => parseResponse(client.cms.blogs['2026-09'].tags.batch.read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609TagsBatchUpdateKey() {
  return ['cms', '/cms/blogs/2026-09/tags/batch/update', 'POST'] as const
}

export function usePostCmsBlogs202609TagsBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['batch']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609TagsBatchUpdateKey()
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
            (typeof client.cms.blogs)['2026-09']['tags']['batch']['update']['$post']
          >
        },
      ) => parseResponse(client.cms.blogs['2026-09'].tags.batch.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCmsBlogs202609TagsCursorKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/tags/cursor', args] as const
}

export function useGetCmsBlogs202609TagsCursor<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>>
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
        ? getGetCmsBlogs202609TagsCursorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms.blogs['2026-09'].tags.cursor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609TagsCursor<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>>
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
        ? getGetCmsBlogs202609TagsCursorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms.blogs['2026-09'].tags.cursor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCmsBlogs202609TagsCursorQueryKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/tags/cursor/query', args] as const
}

export function useGetCmsBlogs202609TagsCursorQuery<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>
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
        ? getGetCmsBlogs202609TagsCursorQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].tags.cursor.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609TagsCursorQuery<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>
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
        ? getGetCmsBlogs202609TagsCursorQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['tags']['cursor']['query']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].tags.cursor.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCmsBlogs202609TagsMultiLanguageAttachToLangGroupKey() {
  return ['cms', '/cms/blogs/2026-09/tags/multi-language/attach-to-lang-group', 'POST'] as const
}

export function usePostCmsBlogs202609TagsMultiLanguageAttachToLangGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['attach-to-lang-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609TagsMultiLanguageAttachToLangGroupKey()
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
            (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['attach-to-lang-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].tags['multi-language']['attach-to-lang-group'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609TagsMultiLanguageCreateLanguageVariationKey() {
  return [
    'cms',
    '/cms/blogs/2026-09/tags/multi-language/create-language-variation',
    'POST',
  ] as const
}

export function usePostCmsBlogs202609TagsMultiLanguageCreateLanguageVariation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['create-language-variation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609TagsMultiLanguageCreateLanguageVariationKey()
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
            (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['create-language-variation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].tags['multi-language']['create-language-variation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609TagsMultiLanguageDetachFromLangGroupKey() {
  return ['cms', '/cms/blogs/2026-09/tags/multi-language/detach-from-lang-group', 'POST'] as const
}

export function usePostCmsBlogs202609TagsMultiLanguageDetachFromLangGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['detach-from-lang-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609TagsMultiLanguageDetachFromLangGroupKey()
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
            (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['detach-from-lang-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].tags['multi-language']['detach-from-lang-group'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCmsBlogs202609TagsMultiLanguageSetNewLangPrimaryKey() {
  return ['cms', '/cms/blogs/2026-09/tags/multi-language/set-new-lang-primary', 'PUT'] as const
}

export function usePutCmsBlogs202609TagsMultiLanguageSetNewLangPrimary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['set-new-lang-primary']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCmsBlogs202609TagsMultiLanguageSetNewLangPrimaryKey()
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
            (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['set-new-lang-primary']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].tags['multi-language']['set-new-lang-primary'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609TagsMultiLanguageUpdateLanguagesKey() {
  return ['cms', '/cms/blogs/2026-09/tags/multi-language/update-languages', 'POST'] as const
}

export function usePostCmsBlogs202609TagsMultiLanguageUpdateLanguages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['update-languages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609TagsMultiLanguageUpdateLanguagesKey()
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
            (typeof client.cms.blogs)['2026-09']['tags']['multi-language']['update-languages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].tags['multi-language']['update-languages'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsBlogs202609TagsObjectIdKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/tags/:objectId', args] as const
}

export function useGetCmsBlogs202609TagsObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>>
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
        ? getGetCmsBlogs202609TagsObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].tags[':objectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609TagsObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>>
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
        ? getGetCmsBlogs202609TagsObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].tags[':objectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCmsBlogs202609TagsObjectIdKey() {
  return ['cms', '/cms/blogs/2026-09/tags/:objectId', 'DELETE'] as const
}

export function useDeleteCmsBlogs202609TagsObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCmsBlogs202609TagsObjectIdKey()
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
            (typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$delete']
          >
        },
      ) => parseResponse(client.cms.blogs['2026-09'].tags[':objectId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCmsBlogs202609TagsObjectIdKey() {
  return ['cms', '/cms/blogs/2026-09/tags/:objectId', 'PATCH'] as const
}

export function usePatchCmsBlogs202609TagsObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCmsBlogs202609TagsObjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cms.blogs)['2026-09']['tags'][':objectId']['$patch']>
        },
      ) => parseResponse(client.cms.blogs['2026-09'].tags[':objectId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

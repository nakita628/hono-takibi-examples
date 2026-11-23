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

export function getGetCmsBlogs202609PostsKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/posts', args] as const
}

export function useGetCmsBlogs202609Posts<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>>
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
        ? getGetCmsBlogs202609PostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms.blogs['2026-09'].posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609Posts<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>>
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
        ? getGetCmsBlogs202609PostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms.blogs['2026-09'].posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsKey() {
  return ['cms', '/cms/blogs/2026-09/posts', 'POST'] as const
}

export function usePostCmsBlogs202609Posts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['$post']> },
      ) => parseResponse(client.cms.blogs['2026-09'].posts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsBatchArchiveKey() {
  return ['cms', '/cms/blogs/2026-09/posts/batch/archive', 'POST'] as const
}

export function usePostCmsBlogs202609PostsBatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsBatchArchiveKey()
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
            (typeof client.cms.blogs)['2026-09']['posts']['batch']['archive']['$post']
          >
        },
      ) => parseResponse(client.cms.blogs['2026-09'].posts.batch.archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsBatchCreateKey() {
  return ['cms', '/cms/blogs/2026-09/posts/batch/create', 'POST'] as const
}

export function usePostCmsBlogs202609PostsBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsBatchCreateKey()
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
            (typeof client.cms.blogs)['2026-09']['posts']['batch']['create']['$post']
          >
        },
      ) => parseResponse(client.cms.blogs['2026-09'].posts.batch.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsBatchReadKey() {
  return ['cms', '/cms/blogs/2026-09/posts/batch/read', 'POST'] as const
}

export function usePostCmsBlogs202609PostsBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsBatchReadKey()
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
            (typeof client.cms.blogs)['2026-09']['posts']['batch']['read']['$post']
          >
        },
      ) => parseResponse(client.cms.blogs['2026-09'].posts.batch.read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsBatchUpdateKey() {
  return ['cms', '/cms/blogs/2026-09/posts/batch/update', 'POST'] as const
}

export function usePostCmsBlogs202609PostsBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['batch']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsBatchUpdateKey()
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
            (typeof client.cms.blogs)['2026-09']['posts']['batch']['update']['$post']
          >
        },
      ) => parseResponse(client.cms.blogs['2026-09'].posts.batch.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsCloneKey() {
  return ['cms', '/cms/blogs/2026-09/posts/clone', 'POST'] as const
}

export function usePostCmsBlogs202609PostsClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['clone']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsCloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['clone']['$post']>
        },
      ) => parseResponse(client.cms.blogs['2026-09'].posts.clone.$post(arg, clientOptions)),
      restMutationOptions,
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

export function getPostCmsBlogs202609PostsMultiLanguageAttachToLangGroupKey() {
  return ['cms', '/cms/blogs/2026-09/posts/multi-language/attach-to-lang-group', 'POST'] as const
}

export function usePostCmsBlogs202609PostsMultiLanguageAttachToLangGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['attach-to-lang-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsMultiLanguageAttachToLangGroupKey()
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
            (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['attach-to-lang-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].posts['multi-language']['attach-to-lang-group'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsMultiLanguageCreateLanguageVariationKey() {
  return [
    'cms',
    '/cms/blogs/2026-09/posts/multi-language/create-language-variation',
    'POST',
  ] as const
}

export function usePostCmsBlogs202609PostsMultiLanguageCreateLanguageVariation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['create-language-variation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsMultiLanguageCreateLanguageVariationKey()
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
            (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['create-language-variation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].posts['multi-language']['create-language-variation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsMultiLanguageDetachFromLangGroupKey() {
  return ['cms', '/cms/blogs/2026-09/posts/multi-language/detach-from-lang-group', 'POST'] as const
}

export function usePostCmsBlogs202609PostsMultiLanguageDetachFromLangGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['detach-from-lang-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsMultiLanguageDetachFromLangGroupKey()
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
            (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['detach-from-lang-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].posts['multi-language']['detach-from-lang-group'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryKey() {
  return ['cms', '/cms/blogs/2026-09/posts/multi-language/set-new-lang-primary', 'PUT'] as const
}

export function usePutCmsBlogs202609PostsMultiLanguageSetNewLangPrimary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['set-new-lang-primary']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryKey()
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
            (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['set-new-lang-primary']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].posts['multi-language']['set-new-lang-primary'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsMultiLanguageUpdateLanguagesKey() {
  return ['cms', '/cms/blogs/2026-09/posts/multi-language/update-languages', 'POST'] as const
}

export function usePostCmsBlogs202609PostsMultiLanguageUpdateLanguages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['update-languages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsMultiLanguageUpdateLanguagesKey()
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
            (typeof client.cms.blogs)['2026-09']['posts']['multi-language']['update-languages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].posts['multi-language']['update-languages'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsScheduleKey() {
  return ['cms', '/cms/blogs/2026-09/posts/schedule', 'POST'] as const
}

export function usePostCmsBlogs202609PostsSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts']['schedule']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['schedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts']['schedule']['$post']>
        },
      ) => parseResponse(client.cms.blogs['2026-09'].posts.schedule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCmsBlogs202609PostsObjectIdKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId', args] as const
}

export function useGetCmsBlogs202609PostsObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>>
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
        ? getGetCmsBlogs202609PostsObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].posts[':objectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609PostsObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>>
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
        ? getGetCmsBlogs202609PostsObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].posts[':objectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCmsBlogs202609PostsObjectIdKey() {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId', 'DELETE'] as const
}

export function useDeleteCmsBlogs202609PostsObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCmsBlogs202609PostsObjectIdKey()
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
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$delete']
          >
        },
      ) =>
        parseResponse(client.cms.blogs['2026-09'].posts[':objectId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCmsBlogs202609PostsObjectIdKey() {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId', 'PATCH'] as const
}

export function usePatchCmsBlogs202609PostsObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCmsBlogs202609PostsObjectIdKey()
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
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['$patch']
          >
        },
      ) => parseResponse(client.cms.blogs['2026-09'].posts[':objectId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCmsBlogs202609PostsObjectIdDraftKey(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']
  >,
) {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/draft', args] as const
}

export function useGetCmsBlogs202609PostsObjectIdDraft<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCmsBlogs202609PostsObjectIdDraftKey(args)
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
                (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']
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
          client.cms.blogs['2026-09'].posts[':objectId'].draft.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609PostsObjectIdDraft<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCmsBlogs202609PostsObjectIdDraftKey(args)
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
                (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$get']
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
          client.cms.blogs['2026-09'].posts[':objectId'].draft.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchCmsBlogs202609PostsObjectIdDraftKey() {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/draft', 'PATCH'] as const
}

export function usePatchCmsBlogs202609PostsObjectIdDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCmsBlogs202609PostsObjectIdDraftKey()
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
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].posts[':objectId'].draft.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsObjectIdDraftPushLiveKey() {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/draft/push-live', 'POST'] as const
}

export function usePostCmsBlogs202609PostsObjectIdDraftPushLive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['push-live']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsObjectIdDraftPushLiveKey()
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
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['push-live']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].posts[':objectId'].draft['push-live'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsObjectIdDraftResetKey() {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/draft/reset', 'POST'] as const
}

export function usePostCmsBlogs202609PostsObjectIdDraftReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsObjectIdDraftResetKey()
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
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['draft']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].posts[':objectId'].draft.reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsBlogs202609PostsObjectIdRevisionsKey(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
  >,
) {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/revisions', args] as const
}

export function useGetCmsBlogs202609PostsObjectIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCmsBlogs202609PostsObjectIdRevisionsKey(args)
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
                (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
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
          client.cms.blogs['2026-09'].posts[':objectId'].revisions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609PostsObjectIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCmsBlogs202609PostsObjectIdRevisionsKey(args)
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
                (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions']['$get']
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
          client.cms.blogs['2026-09'].posts[':objectId'].revisions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCmsBlogs202609PostsObjectIdRevisionsRevisionIdKey(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
  >,
) {
  return ['cms', '/cms/blogs/2026-09/posts/:objectId/revisions/:revisionId', args] as const
}

export function useGetCmsBlogs202609PostsObjectIdRevisionsRevisionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCmsBlogs202609PostsObjectIdRevisionsRevisionIdKey(args)
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
                (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
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
          client.cms.blogs['2026-09'].posts[':objectId'].revisions[':revisionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609PostsObjectIdRevisionsRevisionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCmsBlogs202609PostsObjectIdRevisionsRevisionIdKey(args)
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
                (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['$get']
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
          client.cms.blogs['2026-09'].posts[':objectId'].revisions[':revisionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreKey() {
  return [
    'cms',
    '/cms/blogs/2026-09/posts/:objectId/revisions/:revisionId/restore',
    'POST',
  ] as const
}

export function usePostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreKey()
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
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].posts[':objectId'].revisions[':revisionId'].restore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftKey() {
  return [
    'cms',
    '/cms/blogs/2026-09/posts/:objectId/revisions/:revisionId/restore-to-draft',
    'POST',
  ] as const
}

export function usePostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraft<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCmsBlogs202609PostsObjectIdRevisionsRevisionIdRestoreToDraftKey()
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
            (typeof client.cms.blogs)['2026-09']['posts'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].posts[':objectId'].revisions[':revisionId'][
            'restore-to-draft'
          ].$post(arg, clientOptions),
        ),
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

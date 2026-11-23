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

export function getGetCmsBlogs202609AuthorsKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/authors', args] as const
}

export function useGetCmsBlogs202609Authors<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>>
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
        ? getGetCmsBlogs202609AuthorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms.blogs['2026-09'].authors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609Authors<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>>
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
        ? getGetCmsBlogs202609AuthorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cms.blogs['2026-09'].authors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCmsBlogs202609AuthorsKey() {
  return ['cms', '/cms/blogs/2026-09/authors', 'POST'] as const
}

export function usePostCmsBlogs202609Authors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609AuthorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['$post']> },
      ) => parseResponse(client.cms.blogs['2026-09'].authors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609AuthorsBatchArchiveKey() {
  return ['cms', '/cms/blogs/2026-09/authors/batch/archive', 'POST'] as const
}

export function usePostCmsBlogs202609AuthorsBatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.blogs)['2026-09']['authors']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['batch']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609AuthorsBatchArchiveKey()
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
            (typeof client.cms.blogs)['2026-09']['authors']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(client.cms.blogs['2026-09'].authors.batch.archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609AuthorsBatchCreateKey() {
  return ['cms', '/cms/blogs/2026-09/authors/batch/create', 'POST'] as const
}

export function usePostCmsBlogs202609AuthorsBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['batch']['create']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['batch']['create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609AuthorsBatchCreateKey()
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
            (typeof client.cms.blogs)['2026-09']['authors']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(client.cms.blogs['2026-09'].authors.batch.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609AuthorsBatchReadKey() {
  return ['cms', '/cms/blogs/2026-09/authors/batch/read', 'POST'] as const
}

export function usePostCmsBlogs202609AuthorsBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['batch']['read']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['batch']['read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609AuthorsBatchReadKey()
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
            (typeof client.cms.blogs)['2026-09']['authors']['batch']['read']['$post']
          >
        },
      ) => parseResponse(client.cms.blogs['2026-09'].authors.batch.read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609AuthorsBatchUpdateKey() {
  return ['cms', '/cms/blogs/2026-09/authors/batch/update', 'POST'] as const
}

export function usePostCmsBlogs202609AuthorsBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['batch']['update']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['batch']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609AuthorsBatchUpdateKey()
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
            (typeof client.cms.blogs)['2026-09']['authors']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(client.cms.blogs['2026-09'].authors.batch.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609AuthorsMultiLanguageAttachToLangGroupKey() {
  return ['cms', '/cms/blogs/2026-09/authors/multi-language/attach-to-lang-group', 'POST'] as const
}

export function usePostCmsBlogs202609AuthorsMultiLanguageAttachToLangGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['attach-to-lang-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['attach-to-lang-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609AuthorsMultiLanguageAttachToLangGroupKey()
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
            (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['attach-to-lang-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].authors['multi-language']['attach-to-lang-group'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariationKey() {
  return [
    'cms',
    '/cms/blogs/2026-09/authors/multi-language/create-language-variation',
    'POST',
  ] as const
}

export function usePostCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['create-language-variation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['create-language-variation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariationKey()
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
            (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['create-language-variation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].authors['multi-language']['create-language-variation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroupKey() {
  return [
    'cms',
    '/cms/blogs/2026-09/authors/multi-language/detach-from-lang-group',
    'POST',
  ] as const
}

export function usePostCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['detach-from-lang-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['detach-from-lang-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroupKey()
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
            (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['detach-from-lang-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].authors['multi-language']['detach-from-lang-group'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimaryKey() {
  return ['cms', '/cms/blogs/2026-09/authors/multi-language/set-new-lang-primary', 'PUT'] as const
}

export function usePutCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['set-new-lang-primary']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['set-new-lang-primary']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimaryKey()
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
            (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['set-new-lang-primary']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].authors['multi-language']['set-new-lang-primary'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogs202609AuthorsMultiLanguageUpdateLanguagesKey() {
  return ['cms', '/cms/blogs/2026-09/authors/multi-language/update-languages', 'POST'] as const
}

export function usePostCmsBlogs202609AuthorsMultiLanguageUpdateLanguages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['update-languages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['update-languages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogs202609AuthorsMultiLanguageUpdateLanguagesKey()
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
            (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['update-languages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.blogs['2026-09'].authors['multi-language']['update-languages'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsBlogs202609AuthorsObjectIdKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/authors/:objectId', args] as const
}

export function useGetCmsBlogs202609AuthorsObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>
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
        ? getGetCmsBlogs202609AuthorsObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].authors[':objectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogs202609AuthorsObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>
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
        ? getGetCmsBlogs202609AuthorsObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.blogs['2026-09'].authors[':objectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCmsBlogs202609AuthorsObjectIdKey() {
  return ['cms', '/cms/blogs/2026-09/authors/:objectId', 'DELETE'] as const
}

export function useDeleteCmsBlogs202609AuthorsObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCmsBlogs202609AuthorsObjectIdKey()
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
            (typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$delete']
          >
        },
      ) =>
        parseResponse(client.cms.blogs['2026-09'].authors[':objectId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCmsBlogs202609AuthorsObjectIdKey() {
  return ['cms', '/cms/blogs/2026-09/authors/:objectId', 'PATCH'] as const
}

export function usePatchCmsBlogs202609AuthorsObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCmsBlogs202609AuthorsObjectIdKey()
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
            (typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$patch']
          >
        },
      ) =>
        parseResponse(client.cms.blogs['2026-09'].authors[':objectId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

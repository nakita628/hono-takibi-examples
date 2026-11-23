import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCmsKey() {
  return ['cms'] as const
}

export function getCmsBlogs202609AuthorsQueryKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/authors', args] as const
}

export function getCmsBlogs202609AuthorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609AuthorsQueryKey>
  >({
    queryKey: getCmsBlogs202609AuthorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].authors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsBlogs202609Authors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCmsBlogs202609AuthorsQueryKey>
        >
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
      ...getCmsBlogs202609AuthorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCmsBlogs202609AuthorsMutationKey() {
  return ['cms', '/cms/blogs/2026-09/authors', 'POST'] as const
}

export function getPostCmsBlogs202609AuthorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609AuthorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['$post']>,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].authors.$post(args, options))
    },
  })
}

export function createPostCmsBlogs202609Authors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsBlogs202609AuthorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCmsBlogs202609AuthorsBatchArchiveMutationKey() {
  return ['cms', '/cms/blogs/2026-09/authors/batch/archive', 'POST'] as const
}

export function getPostCmsBlogs202609AuthorsBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['batch']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609AuthorsBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['authors']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].authors.batch.archive.$post(args, options))
    },
  })
}

export function createPostCmsBlogs202609AuthorsBatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['authors']['batch']['archive']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsBlogs202609AuthorsBatchArchiveMutationOptions<
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

export function getPostCmsBlogs202609AuthorsBatchCreateMutationKey() {
  return ['cms', '/cms/blogs/2026-09/authors/batch/create', 'POST'] as const
}

export function getPostCmsBlogs202609AuthorsBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['batch']['create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609AuthorsBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['authors']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].authors.batch.create.$post(args, options))
    },
  })
}

export function createPostCmsBlogs202609AuthorsBatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms.blogs)['2026-09']['authors']['batch']['create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['authors']['batch']['create']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsBlogs202609AuthorsBatchCreateMutationOptions<
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

export function getPostCmsBlogs202609AuthorsBatchReadMutationKey() {
  return ['cms', '/cms/blogs/2026-09/authors/batch/read', 'POST'] as const
}

export function getPostCmsBlogs202609AuthorsBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['batch']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609AuthorsBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['authors']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].authors.batch.read.$post(args, options))
    },
  })
}

export function createPostCmsBlogs202609AuthorsBatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms.blogs)['2026-09']['authors']['batch']['read']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['authors']['batch']['read']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsBlogs202609AuthorsBatchReadMutationOptions<
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

export function getPostCmsBlogs202609AuthorsBatchUpdateMutationKey() {
  return ['cms', '/cms/blogs/2026-09/authors/batch/update', 'POST'] as const
}

export function getPostCmsBlogs202609AuthorsBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors']['batch']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609AuthorsBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['authors']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].authors.batch.update.$post(args, options))
    },
  })
}

export function createPostCmsBlogs202609AuthorsBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms.blogs)['2026-09']['authors']['batch']['update']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['authors']['batch']['update']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsBlogs202609AuthorsBatchUpdateMutationOptions<
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

export function getPostCmsBlogs202609AuthorsMultiLanguageAttachToLangGroupMutationKey() {
  return ['cms', '/cms/blogs/2026-09/authors/multi-language/attach-to-lang-group', 'POST'] as const
}

export function getPostCmsBlogs202609AuthorsMultiLanguageAttachToLangGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['attach-to-lang-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609AuthorsMultiLanguageAttachToLangGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['attach-to-lang-group']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].authors['multi-language']['attach-to-lang-group'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostCmsBlogs202609AuthorsMultiLanguageAttachToLangGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['attach-to-lang-group']['$post']
          >,
          TOnMutateResult
        >
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
      getPostCmsBlogs202609AuthorsMultiLanguageAttachToLangGroupMutationOptions<
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

export function getPostCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariationMutationKey() {
  return [
    'cms',
    '/cms/blogs/2026-09/authors/multi-language/create-language-variation',
    'POST',
  ] as const
}

export function getPostCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['create-language-variation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['create-language-variation']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].authors['multi-language']['create-language-variation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['create-language-variation']['$post']
          >,
          TOnMutateResult
        >
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
      getPostCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariationMutationOptions<
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

export function getPostCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroupMutationKey() {
  return [
    'cms',
    '/cms/blogs/2026-09/authors/multi-language/detach-from-lang-group',
    'POST',
  ] as const
}

export function getPostCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['detach-from-lang-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['detach-from-lang-group']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].authors['multi-language']['detach-from-lang-group'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['detach-from-lang-group']['$post']
          >,
          TOnMutateResult
        >
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
      getPostCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroupMutationOptions<
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

export function getPutCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimaryMutationKey() {
  return ['cms', '/cms/blogs/2026-09/authors/multi-language/set-new-lang-primary', 'PUT'] as const
}

export function getPutCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['set-new-lang-primary']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['set-new-lang-primary']['$put']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].authors['multi-language']['set-new-lang-primary'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['set-new-lang-primary']['$put']
          >,
          TOnMutateResult
        >
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
      getPutCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimaryMutationOptions<
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

export function getPostCmsBlogs202609AuthorsMultiLanguageUpdateLanguagesMutationKey() {
  return ['cms', '/cms/blogs/2026-09/authors/multi-language/update-languages', 'POST'] as const
}

export function getPostCmsBlogs202609AuthorsMultiLanguageUpdateLanguagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['update-languages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogs202609AuthorsMultiLanguageUpdateLanguagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['update-languages']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.blogs['2026-09'].authors['multi-language']['update-languages'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostCmsBlogs202609AuthorsMultiLanguageUpdateLanguages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.cms.blogs)['2026-09']['authors']['multi-language']['update-languages']['$post']
          >,
          TOnMutateResult
        >
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
      getPostCmsBlogs202609AuthorsMultiLanguageUpdateLanguagesMutationOptions<
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

export function getCmsBlogs202609AuthorsObjectIdQueryKey(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>,
) {
  return ['cms', '/cms/blogs/2026-09/authors/:objectId', args] as const
}

export function getCmsBlogs202609AuthorsObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogs202609AuthorsObjectIdQueryKey>
  >({
    queryKey: getCmsBlogs202609AuthorsObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms.blogs['2026-09'].authors[':objectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsBlogs202609AuthorsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCmsBlogs202609AuthorsObjectIdQueryKey>
        >
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
      ...getCmsBlogs202609AuthorsObjectIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteCmsBlogs202609AuthorsObjectIdMutationKey() {
  return ['cms', '/cms/blogs/2026-09/authors/:objectId', 'DELETE'] as const
}

export function getDeleteCmsBlogs202609AuthorsObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCmsBlogs202609AuthorsObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$delete']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].authors[':objectId'].$delete(args, options))
    },
  })
}

export function createDeleteCmsBlogs202609AuthorsObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCmsBlogs202609AuthorsObjectIdMutationOptions<
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

export function getPatchCmsBlogs202609AuthorsObjectIdMutationKey() {
  return ['cms', '/cms/blogs/2026-09/authors/:objectId', 'PATCH'] as const
}

export function getPatchCmsBlogs202609AuthorsObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCmsBlogs202609AuthorsObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$patch']
      >,
    ) {
      return parseResponse(client.cms.blogs['2026-09'].authors[':objectId'].$patch(args, options))
    },
  })
}

export function createPatchCmsBlogs202609AuthorsObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client.cms.blogs)['2026-09']['authors'][':objectId']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCmsBlogs202609AuthorsObjectIdMutationOptions<
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

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

export function getCmsBlogSettings202609SettingsQueryKey(
  args: InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>,
) {
  return ['cms', '/cms/blog-settings/2026-09/settings', args] as const
}

export function getCmsBlogSettings202609SettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogSettings202609SettingsQueryKey>
  >({
    queryKey: getCmsBlogSettings202609SettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['blog-settings']['2026-09'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCmsBlogSettings202609Settings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsBlogSettings202609SettingsQueryKey>
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
      ...getCmsBlogSettings202609SettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCmsBlogSettings202609Settings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsBlogSettings202609SettingsQueryKey>
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
      ...getCmsBlogSettings202609SettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroupMutationKey() {
  return [
    'cms',
    '/cms/blog-settings/2026-09/settings/multi-language/attach-to-lang-group',
    'POST',
  ] as const
}

export function getPostCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['attach-to-lang-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['attach-to-lang-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['attach-to-lang-group']['$post']
      >,
    ) {
      return parseResponse(
        client.cms['blog-settings']['2026-09'].settings['multi-language'][
          'attach-to-lang-group'
        ].$post(args, options),
      )
    },
  })
}

export function usePostCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroup<
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
                  (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['attach-to-lang-group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['attach-to-lang-group']['$post']
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
    getPostCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroupMutationOptions<
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

export function getPostCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariationMutationKey() {
  return [
    'cms',
    '/cms/blog-settings/2026-09/settings/multi-language/create-language-variation',
    'POST',
  ] as const
}

export function getPostCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['create-language-variation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['create-language-variation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['create-language-variation']['$post']
      >,
    ) {
      return parseResponse(
        client.cms['blog-settings']['2026-09'].settings['multi-language'][
          'create-language-variation'
        ].$post(args, options),
      )
    },
  })
}

export function usePostCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariation<
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
                  (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['create-language-variation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['create-language-variation']['$post']
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
    getPostCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariationMutationOptions<
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

export function getPostCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroupMutationKey() {
  return [
    'cms',
    '/cms/blog-settings/2026-09/settings/multi-language/detach-from-lang-group',
    'POST',
  ] as const
}

export function getPostCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['detach-from-lang-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['detach-from-lang-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['detach-from-lang-group']['$post']
      >,
    ) {
      return parseResponse(
        client.cms['blog-settings']['2026-09'].settings['multi-language'][
          'detach-from-lang-group'
        ].$post(args, options),
      )
    },
  })
}

export function usePostCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroup<
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
                  (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['detach-from-lang-group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['detach-from-lang-group']['$post']
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
    getPostCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroupMutationOptions<
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

export function getPutCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimaryMutationKey() {
  return [
    'cms',
    '/cms/blog-settings/2026-09/settings/multi-language/set-new-lang-primary',
    'PUT',
  ] as const
}

export function getPutCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['set-new-lang-primary']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['set-new-lang-primary']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['set-new-lang-primary']['$put']
      >,
    ) {
      return parseResponse(
        client.cms['blog-settings']['2026-09'].settings['multi-language'][
          'set-new-lang-primary'
        ].$put(args, options),
      )
    },
  })
}

export function usePutCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimary<
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
                    (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['set-new-lang-primary']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['set-new-lang-primary']['$put']
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
    getPutCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimaryMutationOptions<
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

export function getPostCmsBlogSettings202609SettingsMultiLanguageUpdateLanguagesMutationKey() {
  return [
    'cms',
    '/cms/blog-settings/2026-09/settings/multi-language/update-languages',
    'POST',
  ] as const
}

export function getPostCmsBlogSettings202609SettingsMultiLanguageUpdateLanguagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['update-languages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['update-languages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsBlogSettings202609SettingsMultiLanguageUpdateLanguagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['update-languages']['$post']
      >,
    ) {
      return parseResponse(
        client.cms['blog-settings']['2026-09'].settings['multi-language']['update-languages'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsBlogSettings202609SettingsMultiLanguageUpdateLanguages<
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
                  (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['update-languages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['update-languages']['$post']
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
    getPostCmsBlogSettings202609SettingsMultiLanguageUpdateLanguagesMutationOptions<
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

export function getCmsBlogSettings202609SettingsBlogIdQueryKey(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
  >,
) {
  return ['cms', '/cms/blog-settings/2026-09/settings/:blogId', args] as const
}

export function getCmsBlogSettings202609SettingsBlogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdQueryKey>
  >({
    queryKey: getCmsBlogSettings202609SettingsBlogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['blog-settings']['2026-09'].settings[':blogId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCmsBlogSettings202609SettingsBlogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdQueryKey>
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
      ...getCmsBlogSettings202609SettingsBlogIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCmsBlogSettings202609SettingsBlogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdQueryKey>
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
      ...getCmsBlogSettings202609SettingsBlogIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCmsBlogSettings202609SettingsBlogIdRevisionsQueryKey(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
  >,
) {
  return ['cms', '/cms/blog-settings/2026-09/settings/:blogId/revisions', args] as const
}

export function getCmsBlogSettings202609SettingsBlogIdRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdRevisionsQueryKey>
  >({
    queryKey: getCmsBlogSettings202609SettingsBlogIdRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['blog-settings']['2026-09'].settings[':blogId'].revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCmsBlogSettings202609SettingsBlogIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdRevisionsQueryKey>
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
      ...getCmsBlogSettings202609SettingsBlogIdRevisionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCmsBlogSettings202609SettingsBlogIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdRevisionsQueryKey>
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
      ...getCmsBlogSettings202609SettingsBlogIdRevisionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryKey(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
  >,
) {
  return ['cms', '/cms/blog-settings/2026-09/settings/:blogId/revisions/:revisionId', args] as const
}

export function getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryKey>
  >({
    queryKey: getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['blog-settings']['2026-09'].settings[':blogId'].revisions[':revisionId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useCmsBlogSettings202609SettingsBlogIdRevisionsRevisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryKey>
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
      ...getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCmsBlogSettings202609SettingsBlogIdRevisionsRevisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryKey>
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
      ...getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

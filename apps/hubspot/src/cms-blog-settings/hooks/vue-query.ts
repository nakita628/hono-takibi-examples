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

export function getCmsKey() {
  return ['cms'] as const
}

export function getCmsBlogSettings202609SettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>
  >,
) {
  return ['cms', '/cms/blog-settings/2026-09/settings', toValue(args)] as const
}

export function getCmsBlogSettings202609SettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogSettings202609SettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['blog-settings']['2026-09'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCmsBlogSettings202609SettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogSettings202609SettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogSettings202609SettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['blog-settings']['2026-09'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']>
  >,
) {
  return ['cms', '/cms/blog-settings/2026-09/settings/:blogId', toValue(args)] as const
}

export function getCmsBlogSettings202609SettingsBlogIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogSettings202609SettingsBlogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['blog-settings']['2026-09'].settings[':blogId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']>
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
                    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
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
                    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdQueryKey>
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
              (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogSettings202609SettingsBlogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['blog-settings']['2026-09'].settings[':blogId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCmsBlogSettings202609SettingsBlogIdRevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
    >
  >,
) {
  return ['cms', '/cms/blog-settings/2026-09/settings/:blogId/revisions', toValue(args)] as const
}

export function getCmsBlogSettings202609SettingsBlogIdRevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsBlogSettings202609SettingsBlogIdRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['blog-settings']['2026-09'].settings[':blogId'].revisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
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
                    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
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
                    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdRevisionsQueryKey>
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
              (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsBlogSettings202609SettingsBlogIdRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['blog-settings']['2026-09'].settings[':blogId'].revisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
    >
  >,
) {
  return [
    'cms',
    '/cms/blog-settings/2026-09/settings/:blogId/revisions/:revisionId',
    toValue(args),
  ] as const
}

export function getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['blog-settings']['2026-09'].settings[':blogId'].revisions[':revisionId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
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
                    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
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
                    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryKey>
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
              (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['blog-settings']['2026-09'].settings[':blogId'].revisions[':revisionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

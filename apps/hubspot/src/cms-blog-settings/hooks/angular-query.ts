import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectCmsBlogSettings202609Settings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCmsBlogSettings202609SettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroup<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroupMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariation<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroup<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroupMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimaryMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCmsBlogSettings202609SettingsMultiLanguageUpdateLanguages<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostCmsBlogSettings202609SettingsMultiLanguageUpdateLanguagesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectCmsBlogSettings202609SettingsBlogId<
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
  args: () => InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCmsBlogSettings202609SettingsBlogIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectCmsBlogSettings202609SettingsBlogIdRevisions<
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
  args: () => InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCmsBlogSettings202609SettingsBlogIdRevisionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectCmsBlogSettings202609SettingsBlogIdRevisionsRevisionId<
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
  args: () => InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

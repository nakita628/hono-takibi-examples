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

export function getGetCmsBlogSettings202609SettingsKey(
  args: InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>,
) {
  return ['cms', '/cms/blog-settings/2026-09/settings', args] as const
}

export function useGetCmsBlogSettings202609Settings<TError = unknown>(
  args: InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>>
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
        ? getGetCmsBlogSettings202609SettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms['blog-settings']['2026-09'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogSettings202609Settings<TError = unknown>(
  args: InferRequestType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>>
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
        ? getGetCmsBlogSettings202609SettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms)['blog-settings']['2026-09']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms['blog-settings']['2026-09'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroupKey() {
  return [
    'cms',
    '/cms/blog-settings/2026-09/settings/multi-language/attach-to-lang-group',
    'POST',
  ] as const
}

export function usePostCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['attach-to-lang-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCmsBlogSettings202609SettingsMultiLanguageAttachToLangGroupKey()
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
            (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['attach-to-lang-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms['blog-settings']['2026-09'].settings['multi-language'][
            'attach-to-lang-group'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariationKey() {
  return [
    'cms',
    '/cms/blog-settings/2026-09/settings/multi-language/create-language-variation',
    'POST',
  ] as const
}

export function usePostCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['create-language-variation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCmsBlogSettings202609SettingsMultiLanguageCreateLanguageVariationKey()
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
            (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['create-language-variation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms['blog-settings']['2026-09'].settings['multi-language'][
            'create-language-variation'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroupKey() {
  return [
    'cms',
    '/cms/blog-settings/2026-09/settings/multi-language/detach-from-lang-group',
    'POST',
  ] as const
}

export function usePostCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['detach-from-lang-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCmsBlogSettings202609SettingsMultiLanguageDetachFromLangGroupKey()
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
            (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['detach-from-lang-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms['blog-settings']['2026-09'].settings['multi-language'][
            'detach-from-lang-group'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimaryKey() {
  return [
    'cms',
    '/cms/blog-settings/2026-09/settings/multi-language/set-new-lang-primary',
    'PUT',
  ] as const
}

export function usePutCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['set-new-lang-primary']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCmsBlogSettings202609SettingsMultiLanguageSetNewLangPrimaryKey()
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
            (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['set-new-lang-primary']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cms['blog-settings']['2026-09'].settings['multi-language'][
            'set-new-lang-primary'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsBlogSettings202609SettingsMultiLanguageUpdateLanguagesKey() {
  return [
    'cms',
    '/cms/blog-settings/2026-09/settings/multi-language/update-languages',
    'POST',
  ] as const
}

export function usePostCmsBlogSettings202609SettingsMultiLanguageUpdateLanguages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['update-languages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsBlogSettings202609SettingsMultiLanguageUpdateLanguagesKey()
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
            (typeof client.cms)['blog-settings']['2026-09']['settings']['multi-language']['update-languages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms['blog-settings']['2026-09'].settings['multi-language'][
            'update-languages'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsBlogSettings202609SettingsBlogIdKey(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
  >,
) {
  return ['cms', '/cms/blog-settings/2026-09/settings/:blogId', args] as const
}

export function useGetCmsBlogSettings202609SettingsBlogId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCmsBlogSettings202609SettingsBlogIdKey(args)
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
                (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
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
          client.cms['blog-settings']['2026-09'].settings[':blogId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogSettings202609SettingsBlogId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCmsBlogSettings202609SettingsBlogIdKey(args)
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
                (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['$get']
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
          client.cms['blog-settings']['2026-09'].settings[':blogId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCmsBlogSettings202609SettingsBlogIdRevisionsKey(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
  >,
) {
  return ['cms', '/cms/blog-settings/2026-09/settings/:blogId/revisions', args] as const
}

export function useGetCmsBlogSettings202609SettingsBlogIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCmsBlogSettings202609SettingsBlogIdRevisionsKey(args)
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
                (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
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
          client.cms['blog-settings']['2026-09'].settings[':blogId'].revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogSettings202609SettingsBlogIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCmsBlogSettings202609SettingsBlogIdRevisionsKey(args)
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
                (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions']['$get']
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
          client.cms['blog-settings']['2026-09'].settings[':blogId'].revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdKey(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
  >,
) {
  return ['cms', '/cms/blog-settings/2026-09/settings/:blogId/revisions/:revisionId', args] as const
}

export function useGetCmsBlogSettings202609SettingsBlogIdRevisionsRevisionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdKey(args)
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
                (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
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
          client.cms['blog-settings']['2026-09'].settings[':blogId'].revisions[':revisionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsBlogSettings202609SettingsBlogIdRevisionsRevisionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCmsBlogSettings202609SettingsBlogIdRevisionsRevisionIdKey(args)
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
                (typeof client.cms)['blog-settings']['2026-09']['settings'][':blogId']['revisions'][':revisionId']['$get']
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
          client.cms['blog-settings']['2026-09'].settings[':blogId'].revisions[':revisionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

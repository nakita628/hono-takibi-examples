import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getGetV2AdminAnalyticsKey(
  args: InferRequestType<typeof client.v2.admin.analytics.$get>,
) {
  return ['v2', '/v2/admin/analytics', args] as const
}

export function useGetV2AdminAnalytics<TError = unknown>(
  args: InferRequestType<typeof client.v2.admin.analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.admin.analytics.$get>>>>
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
        ? getGetV2AdminAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.admin.analytics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.admin.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdminAnalytics<TError = unknown>(
  args: InferRequestType<typeof client.v2.admin.analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.admin.analytics.$get>>>>
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
        ? getGetV2AdminAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.admin.analytics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.admin.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdminAnalyticsCustomTagsKey(
  args: InferRequestType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>,
) {
  return ['v2', '/v2/admin/analytics/custom-tags', args] as const
}

export function useGetV2AdminAnalyticsCustomTags<TError = unknown>(
  args: InferRequestType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>>
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
        ? getGetV2AdminAnalyticsCustomTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.admin.analytics['custom-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdminAnalyticsCustomTags<TError = unknown>(
  args: InferRequestType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>>
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
        ? getGetV2AdminAnalyticsCustomTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.admin.analytics)['custom-tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.admin.analytics['custom-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdminDeveloperKeysKey() {
  return ['v2', '/v2/admin/developer-keys'] as const
}

export function useGetV2AdminDeveloperKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AdminDeveloperKeysKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.admin['developer-keys'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdminDeveloperKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2AdminDeveloperKeysKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.admin['developer-keys'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdminDeveloperKeysKey() {
  return ['v2', '/v2/admin/developer-keys', 'POST'] as const
}

export function usePostV2AdminDeveloperKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.admin)['developer-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdminDeveloperKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.admin)['developer-keys']['$post']> },
      ) => parseResponse(client.v2.admin['developer-keys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2AdminDeveloperKeysDeactivateKey() {
  return ['v2', '/v2/admin/developer-keys/deactivate', 'PUT'] as const
}

export function usePutV2AdminDeveloperKeysDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['deactivate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.admin)['developer-keys']['deactivate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2AdminDeveloperKeysDeactivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.admin)['developer-keys']['deactivate']['$put']>
        },
      ) => parseResponse(client.v2.admin['developer-keys'].deactivate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2AdminDeveloperKeysLabelKey() {
  return ['v2', '/v2/admin/developer-keys/label', 'PUT'] as const
}

export function usePutV2AdminDeveloperKeysLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['label']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.admin)['developer-keys']['label']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2AdminDeveloperKeysLabelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.admin)['developer-keys']['label']['$put']> },
      ) => parseResponse(client.v2.admin['developer-keys'].label.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2AdminDeveloperKeysLimitsKey() {
  return ['v2', '/v2/admin/developer-keys/limits', 'PUT'] as const
}

export function usePutV2AdminDeveloperKeysLimits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.admin)['developer-keys']['limits']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.admin)['developer-keys']['limits']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2AdminDeveloperKeysLimitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.admin)['developer-keys']['limits']['$put']> },
      ) => parseResponse(client.v2.admin['developer-keys'].limits.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2TranslateKey() {
  return ['v2', '/v2/translate', 'POST'] as const
}

export function usePostV2Translate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.translate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.translate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TranslateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.translate.$post> }) =>
        parseResponse(client.v2.translate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2DocumentKey() {
  return ['v2', '/v2/document', 'POST'] as const
}

export function usePostV2Document<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.document.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.document.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.document.$post> }) =>
        parseResponse(client.v2.document.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2DocumentDocumentIdKey() {
  return ['v2', '/v2/document/:document_id', 'POST'] as const
}

export function usePostV2DocumentDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.document)[':document_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.document)[':document_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DocumentDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.document)[':document_id']['$post']> },
      ) => parseResponse(client.v2.document[':document_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2DocumentDocumentIdResultKey() {
  return ['v2', '/v2/document/:document_id/result', 'POST'] as const
}

export function usePostV2DocumentDocumentIdResult<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.document)[':document_id']['result']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.document)[':document_id']['result']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DocumentDocumentIdResultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.document)[':document_id']['result']['$post']>
        },
      ) => parseResponse(client.v2.document[':document_id'].result.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2GlossaryLanguagePairsKey() {
  return ['v2', '/v2/glossary-language-pairs'] as const
}

export function useGetV2GlossaryLanguagePairs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['glossary-language-pairs']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2GlossaryLanguagePairsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['glossary-language-pairs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['glossary-language-pairs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2GlossaryLanguagePairs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['glossary-language-pairs']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2GlossaryLanguagePairsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['glossary-language-pairs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['glossary-language-pairs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3GlossariesKey() {
  return ['v3', '/v3/glossaries'] as const
}

export function useGetV3Glossaries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.glossaries.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3GlossariesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.glossaries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.glossaries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Glossaries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.glossaries.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3GlossariesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.glossaries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.glossaries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3GlossariesKey() {
  return ['v3', '/v3/glossaries', 'POST'] as const
}

export function usePostV3Glossaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.glossaries.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v3.glossaries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3GlossariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.glossaries.$post> }) =>
        parseResponse(client.v3.glossaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3GlossariesGlossaryIdKey(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$get']>,
) {
  return ['v3', '/v3/glossaries/:glossary_id', args] as const
}

export function useGetV3GlossariesGlossaryId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$get']>>
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
        ? getGetV3GlossariesGlossaryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.glossaries[':glossary_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3GlossariesGlossaryId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$get']>>
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
        ? getGetV3GlossariesGlossaryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.glossaries[':glossary_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3GlossariesGlossaryIdKey() {
  return ['v3', '/v3/glossaries/:glossary_id', 'DELETE'] as const
}

export function useDeleteV3GlossariesGlossaryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3GlossariesGlossaryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$delete']> },
      ) => parseResponse(client.v3.glossaries[':glossary_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV3GlossariesGlossaryIdKey() {
  return ['v3', '/v3/glossaries/:glossary_id', 'PATCH'] as const
}

export function usePatchV3GlossariesGlossaryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV3GlossariesGlossaryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['$patch']> },
      ) => parseResponse(client.v3.glossaries[':glossary_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3GlossariesGlossaryIdEntriesKey(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>,
) {
  return ['v3', '/v3/glossaries/:glossary_id/entries', args] as const
}

export function useGetV3GlossariesGlossaryIdEntries<TError = unknown>(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>>
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
        ? getGetV3GlossariesGlossaryIdEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.glossaries[':glossary_id'].entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3GlossariesGlossaryIdEntries<TError = unknown>(
  args: InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>>
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
        ? getGetV3GlossariesGlossaryIdEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['entries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.glossaries[':glossary_id'].entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV3GlossariesGlossaryIdDictionariesKey() {
  return ['v3', '/v3/glossaries/:glossary_id/dictionaries', 'PUT'] as const
}

export function usePutV3GlossariesGlossaryIdDictionaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3GlossariesGlossaryIdDictionariesKey()
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
            (typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$put']
          >
        },
      ) =>
        parseResponse(client.v3.glossaries[':glossary_id'].dictionaries.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3GlossariesGlossaryIdDictionariesKey() {
  return ['v3', '/v3/glossaries/:glossary_id/dictionaries', 'DELETE'] as const
}

export function useDeleteV3GlossariesGlossaryIdDictionaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3GlossariesGlossaryIdDictionariesKey()
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
            (typeof client.v3.glossaries)[':glossary_id']['dictionaries']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v3.glossaries[':glossary_id'].dictionaries.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2GlossariesKey() {
  return ['v2', '/v2/glossaries'] as const
}

export function useGetV2Glossaries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.glossaries.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2GlossariesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.glossaries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.glossaries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Glossaries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.glossaries.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2GlossariesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.glossaries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.glossaries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2GlossariesKey() {
  return ['v2', '/v2/glossaries', 'POST'] as const
}

export function usePostV2Glossaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.glossaries.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.glossaries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2GlossariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.glossaries.$post> }) =>
        parseResponse(client.v2.glossaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2GlossariesGlossaryIdKey(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$get']>,
) {
  return ['v2', '/v2/glossaries/:glossary_id', args] as const
}

export function useGetV2GlossariesGlossaryId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['$get']>>
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
        ? getGetV2GlossariesGlossaryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.glossaries[':glossary_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2GlossariesGlossaryId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['$get']>>
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
        ? getGetV2GlossariesGlossaryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.glossaries[':glossary_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2GlossariesGlossaryIdKey() {
  return ['v2', '/v2/glossaries/:glossary_id', 'DELETE'] as const
}

export function useDeleteV2GlossariesGlossaryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2GlossariesGlossaryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['$delete']> },
      ) => parseResponse(client.v2.glossaries[':glossary_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2GlossariesGlossaryIdEntriesKey(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/glossaries/:glossary_id/entries', keyArgs] as const
}

export function useGetV2GlossariesGlossaryIdEntries<TError = unknown>(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>>
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
        ? getGetV2GlossariesGlossaryIdEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.glossaries[':glossary_id'].entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2GlossariesGlossaryIdEntries<TError = unknown>(
  args: InferRequestType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>>
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
        ? getGetV2GlossariesGlossaryIdEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.glossaries)[':glossary_id']['entries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.glossaries[':glossary_id'].entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2WriteRephraseKey() {
  return ['v2', '/v2/write/rephrase', 'POST'] as const
}

export function usePostV2WriteRephrase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.write.rephrase.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.write.rephrase.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WriteRephraseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.write.rephrase.$post> }) =>
        parseResponse(client.v2.write.rephrase.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2WriteCorrectKey() {
  return ['v2', '/v2/write/correct', 'POST'] as const
}

export function usePostV2WriteCorrect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.write.correct.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.write.correct.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WriteCorrectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.write.correct.$post> }) =>
        parseResponse(client.v2.write.correct.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UsageKey() {
  return ['v2', '/v2/usage'] as const
}

export function useGetV2Usage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.usage.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.usage.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.usage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Usage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.usage.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.usage.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.usage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2LanguagesKey(args: InferRequestType<typeof client.v2.languages.$get>) {
  return ['v2', '/v2/languages', args] as const
}

export function useGetV2Languages<TError = unknown>(
  args: InferRequestType<typeof client.v2.languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.languages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2LanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Languages<TError = unknown>(
  args: InferRequestType<typeof client.v2.languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.languages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2LanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SpokenTermsKey() {
  return ['v3', '/v3/spoken-terms'] as const
}

export function useGetV3SpokenTerms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['spoken-terms']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SpokenTermsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['spoken-terms']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3['spoken-terms'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SpokenTerms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['spoken-terms']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SpokenTermsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['spoken-terms']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3['spoken-terms'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3SpokenTermsKey() {
  return ['v3', '/v3/spoken-terms', 'POST'] as const
}

export function usePostV3SpokenTerms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)['spoken-terms']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)['spoken-terms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SpokenTermsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)['spoken-terms']['$post']> },
      ) => parseResponse(client.v3['spoken-terms'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3SpokenTermsSpokenTermsIdKey(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>,
) {
  return ['v3', '/v3/spoken-terms/:spoken_terms_id', args] as const
}

export function useGetV3SpokenTermsSpokenTermsId<TError = unknown>(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>>
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
        ? getGetV3SpokenTermsSpokenTermsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3['spoken-terms'][':spoken_terms_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SpokenTermsSpokenTermsId<TError = unknown>(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>>
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
        ? getGetV3SpokenTermsSpokenTermsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3['spoken-terms'][':spoken_terms_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3SpokenTermsSpokenTermsIdKey() {
  return ['v3', '/v3/spoken-terms/:spoken_terms_id', 'DELETE'] as const
}

export function useDeleteV3SpokenTermsSpokenTermsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3SpokenTermsSpokenTermsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$delete']>
        },
      ) => parseResponse(client.v3['spoken-terms'][':spoken_terms_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV3SpokenTermsSpokenTermsIdKey() {
  return ['v3', '/v3/spoken-terms/:spoken_terms_id', 'PATCH'] as const
}

export function usePatchV3SpokenTermsSpokenTermsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV3SpokenTermsSpokenTermsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['$patch']>
        },
      ) => parseResponse(client.v3['spoken-terms'][':spoken_terms_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3SpokenTermsSpokenTermsIdEntriesKey(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>,
) {
  return ['v3', '/v3/spoken-terms/:spoken_terms_id/entries', args] as const
}

export function useGetV3SpokenTermsSpokenTermsIdEntries<TError = unknown>(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>
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
        ? getGetV3SpokenTermsSpokenTermsIdEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3['spoken-terms'][':spoken_terms_id'].entries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SpokenTermsSpokenTermsIdEntries<TError = unknown>(
  args: InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>
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
        ? getGetV3SpokenTermsSpokenTermsIdEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['entries']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3['spoken-terms'][':spoken_terms_id'].entries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV3SpokenTermsSpokenTermsIdTermListsKey() {
  return ['v3', '/v3/spoken-terms/:spoken_terms_id/term-lists', 'PUT'] as const
}

export function usePutV3SpokenTermsSpokenTermsIdTermLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3SpokenTermsSpokenTermsIdTermListsKey()
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
            (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v3['spoken-terms'][':spoken_terms_id']['term-lists'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3SpokenTermsSpokenTermsIdTermListsKey() {
  return ['v3', '/v3/spoken-terms/:spoken_terms_id/term-lists', 'DELETE'] as const
}

export function useDeleteV3SpokenTermsSpokenTermsIdTermLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3SpokenTermsSpokenTermsIdTermListsKey()
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
            (typeof client.v3)['spoken-terms'][':spoken_terms_id']['term-lists']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v3['spoken-terms'][':spoken_terms_id']['term-lists'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3LanguagesResourcesKey() {
  return ['v3', '/v3/languages/resources'] as const
}

export function useGetV3LanguagesResources<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.resources.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3LanguagesResourcesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.resources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.languages.resources.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3LanguagesResources<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.resources.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3LanguagesResourcesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.resources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.languages.resources.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3LanguagesKey(args: InferRequestType<typeof client.v3.languages.$get>) {
  return ['v3', '/v3/languages', args] as const
}

export function useGetV3Languages<TError = unknown>(
  args: InferRequestType<typeof client.v3.languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3LanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Languages<TError = unknown>(
  args: InferRequestType<typeof client.v3.languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3LanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3TranslationMemoriesKey(
  args: InferRequestType<typeof client.v3.translation_memories.$get>,
) {
  return ['v3', '/v3/translation_memories', args] as const
}

export function useGetV3TranslationMemories<TError = unknown>(
  args: InferRequestType<typeof client.v3.translation_memories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.translation_memories.$get>>>
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
        ? getGetV3TranslationMemoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.translation_memories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.translation_memories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3TranslationMemories<TError = unknown>(
  args: InferRequestType<typeof client.v3.translation_memories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.translation_memories.$get>>>
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
        ? getGetV3TranslationMemoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.translation_memories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.translation_memories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3TranslationMemoriesImportKey() {
  return ['v3', '/v3/translation_memories/import', 'POST'] as const
}

export function usePostV3TranslationMemoriesImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v3.translation_memories.import.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v3.translation_memories.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3TranslationMemoriesImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v3.translation_memories.import.$post> },
      ) => parseResponse(client.v3.translation_memories.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3TranslationMemoriesJobsJobIdKey(
  args: InferRequestType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>,
) {
  return ['v3', '/v3/translation_memories/jobs/:job_id', args] as const
}

export function useGetV3TranslationMemoriesJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>>
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
        ? getGetV3TranslationMemoriesJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.translation_memories.jobs[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3TranslationMemoriesJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>>
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
        ? getGetV3TranslationMemoriesJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.translation_memories.jobs)[':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.translation_memories.jobs[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3TranslationMemoriesTranslationMemoryIdKey(
  args: InferRequestType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>,
) {
  return ['v3', '/v3/translation_memories/:translation_memory_id', args] as const
}

export function useGetV3TranslationMemoriesTranslationMemoryId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>
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
        ? getGetV3TranslationMemoriesTranslationMemoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.translation_memories[':translation_memory_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3TranslationMemoriesTranslationMemoryId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>
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
        ? getGetV3TranslationMemoriesTranslationMemoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.translation_memories)[':translation_memory_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.translation_memories[':translation_memory_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3TranslationMemoriesTranslationMemoryIdKey() {
  return ['v3', '/v3/translation_memories/:translation_memory_id', 'DELETE'] as const
}

export function useDeleteV3TranslationMemoriesTranslationMemoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.translation_memories)[':translation_memory_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.translation_memories)[':translation_memory_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3TranslationMemoriesTranslationMemoryIdKey()
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
            (typeof client.v3.translation_memories)[':translation_memory_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v3.translation_memories[':translation_memory_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3TranslationMemoriesTranslationMemoryIdSegmentsKey(
  args: InferRequestType<
    (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
  >,
) {
  return ['v3', '/v3/translation_memories/:translation_memory_id/segments', args] as const
}

export function useGetV3TranslationMemoriesTranslationMemoryIdSegments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
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
        ? getGetV3TranslationMemoriesTranslationMemoryIdSegmentsKey(args)
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
                (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
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
          client.v3.translation_memories[':translation_memory_id'].segments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3TranslationMemoriesTranslationMemoryIdSegments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
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
        ? getGetV3TranslationMemoriesTranslationMemoryIdSegmentsKey(args)
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
                (typeof client.v3.translation_memories)[':translation_memory_id']['segments']['$get']
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
          client.v3.translation_memories[':translation_memory_id'].segments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV3TranslationMemoriesTranslationMemoryIdExportKey() {
  return ['v3', '/v3/translation_memories/:translation_memory_id/export', 'POST'] as const
}

export function usePostV3TranslationMemoriesTranslationMemoryIdExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.translation_memories)[':translation_memory_id']['export']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v3.translation_memories)[':translation_memory_id']['export']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3TranslationMemoriesTranslationMemoryIdExportKey()
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
            (typeof client.v3.translation_memories)[':translation_memory_id']['export']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v3.translation_memories[':translation_memory_id'].export.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3StyleProfilesKey(
  args: InferRequestType<typeof client.v3.style_profiles.$get>,
) {
  return ['v3', '/v3/style_profiles', args] as const
}

export function useGetV3StyleProfiles<TError = unknown>(
  args: InferRequestType<typeof client.v3.style_profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_profiles.$get>>>>
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
        ? getGetV3StyleProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_profiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.style_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StyleProfiles<TError = unknown>(
  args: InferRequestType<typeof client.v3.style_profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_profiles.$get>>>>
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
        ? getGetV3StyleProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_profiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.style_profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3StyleProfilesKey() {
  return ['v3', '/v3/style_profiles', 'POST'] as const
}

export function usePostV3StyleProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_profiles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v3.style_profiles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3StyleProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.style_profiles.$post> }) =>
        parseResponse(client.v3.style_profiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3StyleProfilesStyleProfileIdKey(
  args: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>,
) {
  return ['v3', '/v3/style_profiles/:style_profile_id', args] as const
}

export function useGetV3StyleProfilesStyleProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>>
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
        ? getGetV3StyleProfilesStyleProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.style_profiles[':style_profile_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StyleProfilesStyleProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>>
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
        ? getGetV3StyleProfilesStyleProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.style_profiles[':style_profile_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3StyleProfilesStyleProfileIdKey() {
  return ['v3', '/v3/style_profiles/:style_profile_id', 'DELETE'] as const
}

export function useDeleteV3StyleProfilesStyleProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3StyleProfilesStyleProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$delete']>
        },
      ) => parseResponse(client.v3.style_profiles[':style_profile_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV3StyleProfilesStyleProfileIdKey() {
  return ['v3', '/v3/style_profiles/:style_profile_id', 'PATCH'] as const
}

export function usePatchV3StyleProfilesStyleProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.style_profiles)[':style_profile_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV3StyleProfilesStyleProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3.style_profiles)[':style_profile_id']['$patch']>
        },
      ) => parseResponse(client.v3.style_profiles[':style_profile_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3StyleRulesKey(args: InferRequestType<typeof client.v3.style_rules.$get>) {
  return ['v3', '/v3/style_rules', args] as const
}

export function useGetV3StyleRules<TError = unknown>(
  args: InferRequestType<typeof client.v3.style_rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_rules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3StyleRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.style_rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StyleRules<TError = unknown>(
  args: InferRequestType<typeof client.v3.style_rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_rules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3StyleRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.style_rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3StyleRulesKey() {
  return ['v3', '/v3/style_rules', 'POST'] as const
}

export function usePostV3StyleRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.style_rules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v3.style_rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3StyleRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.style_rules.$post> }) =>
        parseResponse(client.v3.style_rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3StyleRulesStyleIdKey(
  args: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$get']>,
) {
  return ['v3', '/v3/style_rules/:style_id', args] as const
}

export function useGetV3StyleRulesStyleId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$get']>>
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
        ? getGetV3StyleRulesStyleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.style_rules[':style_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StyleRulesStyleId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$get']>>
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
        ? getGetV3StyleRulesStyleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.style_rules[':style_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3StyleRulesStyleIdKey() {
  return ['v3', '/v3/style_rules/:style_id', 'DELETE'] as const
}

export function useDeleteV3StyleRulesStyleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.style_rules)[':style_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3StyleRulesStyleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$delete']> },
      ) => parseResponse(client.v3.style_rules[':style_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV3StyleRulesStyleIdKey() {
  return ['v3', '/v3/style_rules/:style_id', 'PATCH'] as const
}

export function usePatchV3StyleRulesStyleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.style_rules)[':style_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.style_rules)[':style_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV3StyleRulesStyleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.style_rules)[':style_id']['$patch']> },
      ) => parseResponse(client.v3.style_rules[':style_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV3StyleRulesStyleIdConfiguredRulesKey() {
  return ['v3', '/v3/style_rules/:style_id/configured_rules', 'PUT'] as const
}

export function usePutV3StyleRulesStyleIdConfiguredRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.style_rules)[':style_id']['configured_rules']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.style_rules)[':style_id']['configured_rules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3StyleRulesStyleIdConfiguredRulesKey()
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
            (typeof client.v3.style_rules)[':style_id']['configured_rules']['$put']
          >
        },
      ) =>
        parseResponse(client.v3.style_rules[':style_id'].configured_rules.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3StyleRulesStyleIdCustomInstructionsKey() {
  return ['v3', '/v3/style_rules/:style_id/custom_instructions', 'POST'] as const
}

export function usePostV3StyleRulesStyleIdCustomInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.style_rules)[':style_id']['custom_instructions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.style_rules)[':style_id']['custom_instructions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3StyleRulesStyleIdCustomInstructionsKey()
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
            (typeof client.v3.style_rules)[':style_id']['custom_instructions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v3.style_rules[':style_id'].custom_instructions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3StyleRulesStyleIdCustomInstructionsInstructionIdKey(
  args: InferRequestType<
    (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
  >,
) {
  return ['v3', '/v3/style_rules/:style_id/custom_instructions/:instruction_id', args] as const
}

export function useGetV3StyleRulesStyleIdCustomInstructionsInstructionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
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
        ? getGetV3StyleRulesStyleIdCustomInstructionsInstructionIdKey(args)
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
                (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
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
          client.v3.style_rules[':style_id'].custom_instructions[':instruction_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StyleRulesStyleIdCustomInstructionsInstructionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
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
        ? getGetV3StyleRulesStyleIdCustomInstructionsInstructionIdKey(args)
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
                (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$get']
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
          client.v3.style_rules[':style_id'].custom_instructions[':instruction_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV3StyleRulesStyleIdCustomInstructionsInstructionIdKey() {
  return ['v3', '/v3/style_rules/:style_id/custom_instructions/:instruction_id', 'PUT'] as const
}

export function usePutV3StyleRulesStyleIdCustomInstructionsInstructionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV3StyleRulesStyleIdCustomInstructionsInstructionIdKey()
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
            (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v3.style_rules[':style_id'].custom_instructions[':instruction_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3StyleRulesStyleIdCustomInstructionsInstructionIdKey() {
  return ['v3', '/v3/style_rules/:style_id/custom_instructions/:instruction_id', 'DELETE'] as const
}

export function useDeleteV3StyleRulesStyleIdCustomInstructionsInstructionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3StyleRulesStyleIdCustomInstructionsInstructionIdKey()
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
            (typeof client.v3.style_rules)[':style_id']['custom_instructions'][':instruction_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v3.style_rules[':style_id'].custom_instructions[':instruction_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3VoiceRealtimeKey(
  args: InferRequestType<typeof client.v3.voice.realtime.$get>,
) {
  return ['v3', '/v3/voice/realtime', args] as const
}

export function useGetV3VoiceRealtime<TError = unknown>(
  args: InferRequestType<typeof client.v3.voice.realtime.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.voice.realtime.$get>>>>
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
        ? getGetV3VoiceRealtimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.voice.realtime.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.voice.realtime.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3VoiceRealtime<TError = unknown>(
  args: InferRequestType<typeof client.v3.voice.realtime.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.voice.realtime.$get>>>>
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
        ? getGetV3VoiceRealtimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.voice.realtime.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.voice.realtime.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3VoiceRealtimeKey() {
  return ['v3', '/v3/voice/realtime', 'POST'] as const
}

export function usePostV3VoiceRealtime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.voice.realtime.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v3.voice.realtime.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3VoiceRealtimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.voice.realtime.$post> }) =>
        parseResponse(client.v3.voice.realtime.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1JobsVoiceTranslateKey() {
  return ['v1', '/v1/jobs/voice/translate', 'POST'] as const
}

export function usePostV1JobsVoiceTranslate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.voice.translate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.jobs.voice.translate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1JobsVoiceTranslateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.jobs.voice.translate.$post> },
      ) => parseResponse(client.v1.jobs.voice.translate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1JobsVoiceTranslateJobIdKey(
  args: InferRequestType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>,
) {
  return ['v1', '/v1/jobs/voice/translate/:job_id', args] as const
}

export function useGetV1JobsVoiceTranslateJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>>
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
        ? getGetV1JobsVoiceTranslateJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.jobs.voice.translate[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1JobsVoiceTranslateJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>>
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
        ? getGetV1JobsVoiceTranslateJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.jobs.voice.translate)[':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.jobs.voice.translate[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1QualityEvaluationsJobIdKey(
  args: InferRequestType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>,
) {
  return ['v1', '/v1/quality-evaluations/:job_id', args] as const
}

export function useGetV1QualityEvaluationsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>>
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
        ? getGetV1QualityEvaluationsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['quality-evaluations'][':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1QualityEvaluationsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>>
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
        ? getGetV1QualityEvaluationsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['quality-evaluations'][':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['quality-evaluations'][':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

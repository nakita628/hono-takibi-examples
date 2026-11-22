import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV3beta1Key() {
  return ['v3beta1'] as const
}

export function getGetV3beta1NameKey(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:name', args] as const
}

export function useGetV3beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV3beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV3beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3beta1NameKey() {
  return ['v3beta1', '/v3beta1/:name', 'DELETE'] as const
}

export function useDeleteV3beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name']['$delete']> },
      ) => parseResponse(client.v3beta1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1NameLocationsKey(
  args: InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:name/locations', args] as const
}

export function useGetV3beta1NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
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
        ? getGetV3beta1NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
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
        ? getGetV3beta1NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3beta1NameOperationsKey(
  args: InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:name/operations', args] as const
}

export function useGetV3beta1NameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
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
        ? getGetV3beta1NameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1NameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
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
        ? getGetV3beta1NameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1NameCancelKey() {
  return ['v3beta1', '/v3beta1/:name:cancel', 'POST'] as const
}

export function usePostV3beta1NameCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name:cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1NameCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name:cancel']['$post']> },
      ) => parseResponse(client.v3beta1[':name:cancel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1NameWaitKey() {
  return ['v3beta1', '/v3beta1/:name:wait', 'POST'] as const
}

export function usePostV3beta1NameWait<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:wait']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name:wait']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1NameWaitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name:wait']['$post']> },
      ) => parseResponse(client.v3beta1[':name:wait'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentGlossariesKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/glossaries', args] as const
}

export function useGetV3beta1ParentGlossaries<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>>
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
        ? getGetV3beta1ParentGlossariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].glossaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentGlossaries<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>>
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
        ? getGetV3beta1ParentGlossariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['glossaries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].glossaries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentGlossariesKey() {
  return ['v3beta1', '/v3beta1/:parent/glossaries', 'POST'] as const
}

export function usePostV3beta1ParentGlossaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['glossaries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentGlossariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3beta1)[':parent']['glossaries']['$post']> },
      ) => parseResponse(client.v3beta1[':parent'].glossaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentSupportedLanguagesKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/supportedLanguages', args] as const
}

export function useGetV3beta1ParentSupportedLanguages<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>>
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
        ? getGetV3beta1ParentSupportedLanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3beta1[':parent'].supportedLanguages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentSupportedLanguages<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>>
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
        ? getGetV3beta1ParentSupportedLanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['supportedLanguages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3beta1[':parent'].supportedLanguages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentBatchTranslateDocumentKey() {
  return ['v3beta1', '/v3beta1/:parent:batchTranslateDocument', 'POST'] as const
}

export function usePostV3beta1ParentBatchTranslateDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent:batchTranslateDocument']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent:batchTranslateDocument']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentBatchTranslateDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3beta1)[':parent:batchTranslateDocument']['$post']>
        },
      ) =>
        parseResponse(client.v3beta1[':parent:batchTranslateDocument'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1ParentBatchTranslateTextKey() {
  return ['v3beta1', '/v3beta1/:parent:batchTranslateText', 'POST'] as const
}

export function usePostV3beta1ParentBatchTranslateText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent:batchTranslateText']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent:batchTranslateText']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentBatchTranslateTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3beta1)[':parent:batchTranslateText']['$post']>
        },
      ) => parseResponse(client.v3beta1[':parent:batchTranslateText'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1ParentDetectLanguageKey() {
  return ['v3beta1', '/v3beta1/:parent:detectLanguage', 'POST'] as const
}

export function usePostV3beta1ParentDetectLanguage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent:detectLanguage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent:detectLanguage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentDetectLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3beta1)[':parent:detectLanguage']['$post']> },
      ) => parseResponse(client.v3beta1[':parent:detectLanguage'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1ParentTranslateDocumentKey() {
  return ['v3beta1', '/v3beta1/:parent:translateDocument', 'POST'] as const
}

export function usePostV3beta1ParentTranslateDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent:translateDocument']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent:translateDocument']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentTranslateDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3beta1)[':parent:translateDocument']['$post']> },
      ) => parseResponse(client.v3beta1[':parent:translateDocument'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1ParentTranslateTextKey() {
  return ['v3beta1', '/v3beta1/:parent:translateText', 'POST'] as const
}

export function usePostV3beta1ParentTranslateText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent:translateText']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent:translateText']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentTranslateTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3beta1)[':parent:translateText']['$post']> },
      ) => parseResponse(client.v3beta1[':parent:translateText'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

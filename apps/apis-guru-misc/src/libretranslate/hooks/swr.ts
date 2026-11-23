import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDetectKey() {
  return ['detect'] as const
}

export function getFrontendKey() {
  return ['frontend'] as const
}

export function getLanguagesKey() {
  return ['languages'] as const
}

export function getSuggestKey() {
  return ['suggest'] as const
}

export function getTranslateKey() {
  return ['translate'] as const
}

export function getTranslateFileKey() {
  return ['translate_file'] as const
}

export function getPostDetectKey() {
  return ['detect', '/detect', 'POST'] as const
}

export function usePostDetect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detect.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.detect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.detect.$post> }) =>
        parseResponse(client.detect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFrontendSettingsKey() {
  return ['frontend', '/frontend/settings'] as const
}

export function useGetFrontendSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frontend.settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFrontendSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frontend.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.frontend.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFrontendSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frontend.settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFrontendSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frontend.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.frontend.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLanguagesKey() {
  return ['languages', '/languages'] as const
}

export function useGetLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLanguagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLanguagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSuggestKey() {
  return ['suggest', '/suggest', 'POST'] as const
}

export function usePostSuggest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.suggest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSuggestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.suggest.$post> }) =>
        parseResponse(client.suggest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTranslateKey() {
  return ['translate', '/translate', 'POST'] as const
}

export function usePostTranslate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.translate.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.translate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTranslateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.translate.$post> }) =>
        parseResponse(client.translate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTranslateFileKey() {
  return ['translate_file', '/translate_file', 'POST'] as const
}

export function usePostTranslateFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.translate_file.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.translate_file.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTranslateFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.translate_file.$post> }) =>
        parseResponse(client.translate_file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

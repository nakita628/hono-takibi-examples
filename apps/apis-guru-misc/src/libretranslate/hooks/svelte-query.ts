import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function getPostDetectMutationKey() {
  return ['detect', '/detect', 'POST'] as const
}

export function getPostDetectMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detect.$post>>>>>,
    TError,
    InferRequestType<typeof client.detect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.detect.$post>) {
      return parseResponse(client.detect.$post(args, options))
    },
  })
}

export function createPostDetect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detect.$post>>>>>,
        TError,
        InferRequestType<typeof client.detect.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDetectMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFrontendSettingsQueryKey() {
  return ['frontend', '/frontend/settings'] as const
}

export function getFrontendSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frontend.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frontend.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFrontendSettingsQueryKey>
  >({
    queryKey: getFrontendSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.frontend.settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFrontendSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frontend.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.frontend.settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFrontendSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFrontendSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLanguagesQueryKey() {
  return ['languages', '/languages'] as const
}

export function getLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLanguagesQueryKey>
  >({
    queryKey: getLanguagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.languages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLanguagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSuggestMutationKey() {
  return ['suggest', '/suggest', 'POST'] as const
}

export function getPostSuggestMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$post>>>>>,
    TError,
    InferRequestType<typeof client.suggest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSuggestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.suggest.$post>) {
      return parseResponse(client.suggest.$post(args, options))
    },
  })
}

export function createPostSuggest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$post>>>>>,
        TError,
        InferRequestType<typeof client.suggest.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSuggestMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTranslateMutationKey() {
  return ['translate', '/translate', 'POST'] as const
}

export function getPostTranslateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.translate.$post>>>>>,
    TError,
    InferRequestType<typeof client.translate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTranslateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.translate.$post>) {
      return parseResponse(client.translate.$post(args, options))
    },
  })
}

export function createPostTranslate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.translate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.translate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTranslateMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTranslateFileMutationKey() {
  return ['translate_file', '/translate_file', 'POST'] as const
}

export function getPostTranslateFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.translate_file.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.translate_file.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTranslateFileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.translate_file.$post>) {
      return parseResponse(client.translate_file.$post(args, options))
    },
  })
}

export function createPostTranslateFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.translate_file.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.translate_file.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTranslateFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

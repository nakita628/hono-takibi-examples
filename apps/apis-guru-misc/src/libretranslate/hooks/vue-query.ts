import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
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

export function usePostDetect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detect.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.detect.$post>,
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
  const mutationDefaults = getPostDetectMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFrontendSettingsQueryKey() {
  return ['frontend', '/frontend/settings'] as const
}

export function getFrontendSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFrontendSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.frontend.settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFrontendSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frontend.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.frontend.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.frontend.settings.$get>>>
            >
          >,
          ReturnType<typeof getFrontendSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frontend.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFrontendSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFrontendSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.frontend.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLanguagesQueryKey() {
  return ['languages', '/languages'] as const
}

export function getLanguagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLanguagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.languages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
          >,
          ReturnType<typeof getLanguagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLanguagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.languages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSuggest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.suggest.$post>,
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
  const mutationDefaults = getPostSuggestMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTranslate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.translate.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.translate.$post>,
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
  const mutationDefaults = getPostTranslateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTranslateFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.translate_file.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.translate_file.$post>,
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
  const mutationDefaults = getPostTranslateFileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

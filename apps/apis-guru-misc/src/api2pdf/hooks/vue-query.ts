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

export function getChromeKey() {
  return ['chrome'] as const
}

export function getLibreofficeKey() {
  return ['libreoffice'] as const
}

export function getMergeKey() {
  return ['merge'] as const
}

export function getWkhtmltopdfKey() {
  return ['wkhtmltopdf'] as const
}

export function getZebraKey() {
  return ['zebra'] as const
}

export function getPostChromeHtmlMutationKey() {
  return ['chrome', '/chrome/html', 'POST'] as const
}

export function getPostChromeHtmlMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.html.$post>>>>>,
    TError,
    InferRequestType<typeof client.chrome.html.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChromeHtmlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chrome.html.$post>) {
      return parseResponse(client.chrome.html.$post(args, options))
    },
  })
}

export function usePostChromeHtml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.html.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.chrome.html.$post>,
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
  const mutationDefaults = getPostChromeHtmlMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChromeUrlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chrome.url.$get>>,
) {
  return ['chrome', '/chrome/url', toValue(args)] as const
}

export function getChromeUrlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chrome.url.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChromeUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chrome.url.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChromeUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chrome.url.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>
          >,
          ReturnType<typeof getChromeUrlQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChromeUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChromeUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chrome.url.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChromeUrlMutationKey() {
  return ['chrome', '/chrome/url', 'POST'] as const
}

export function getPostChromeUrlMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$post>>>>>,
    TError,
    InferRequestType<typeof client.chrome.url.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChromeUrlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chrome.url.$post>) {
      return parseResponse(client.chrome.url.$post(args, options))
    },
  })
}

export function usePostChromeUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.chrome.url.$post>,
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
  const mutationDefaults = getPostChromeUrlMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLibreofficeConvertMutationKey() {
  return ['libreoffice', '/libreoffice/convert', 'POST'] as const
}

export function getPostLibreofficeConvertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.libreoffice.convert.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.libreoffice.convert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibreofficeConvertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.libreoffice.convert.$post>) {
      return parseResponse(client.libreoffice.convert.$post(args, options))
    },
  })
}

export function usePostLibreofficeConvert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.libreoffice.convert.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.libreoffice.convert.$post>,
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
  const mutationDefaults = getPostLibreofficeConvertMutationOptions<TError, TOnMutateResult>(
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

export function getPostMergeMutationKey() {
  return ['merge', '/merge', 'POST'] as const
}

export function getPostMergeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merge.$post>>>>>,
    TError,
    InferRequestType<typeof client.merge.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMergeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.merge.$post>) {
      return parseResponse(client.merge.$post(args, options))
    },
  })
}

export function usePostMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merge.$post>>>>>,
          TError,
          InferRequestType<typeof client.merge.$post>,
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
  const mutationDefaults = getPostMergeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWkhtmltopdfHtmlMutationKey() {
  return ['wkhtmltopdf', '/wkhtmltopdf/html', 'POST'] as const
}

export function getPostWkhtmltopdfHtmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.html.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.wkhtmltopdf.html.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWkhtmltopdfHtmlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wkhtmltopdf.html.$post>) {
      return parseResponse(client.wkhtmltopdf.html.$post(args, options))
    },
  })
}

export function usePostWkhtmltopdfHtml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.html.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.wkhtmltopdf.html.$post>,
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
  const mutationDefaults = getPostWkhtmltopdfHtmlMutationOptions<TError, TOnMutateResult>(
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

export function getWkhtmltopdfUrlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wkhtmltopdf.url.$get>>,
) {
  return ['wkhtmltopdf', '/wkhtmltopdf/url', toValue(args)] as const
}

export function getWkhtmltopdfUrlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wkhtmltopdf.url.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWkhtmltopdfUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wkhtmltopdf.url.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWkhtmltopdfUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wkhtmltopdf.url.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>
            >
          >,
          ReturnType<typeof getWkhtmltopdfUrlQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWkhtmltopdfUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWkhtmltopdfUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wkhtmltopdf.url.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWkhtmltopdfUrlMutationKey() {
  return ['wkhtmltopdf', '/wkhtmltopdf/url', 'POST'] as const
}

export function getPostWkhtmltopdfUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.wkhtmltopdf.url.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWkhtmltopdfUrlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wkhtmltopdf.url.$post>) {
      return parseResponse(client.wkhtmltopdf.url.$post(args, options))
    },
  })
}

export function usePostWkhtmltopdfUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.wkhtmltopdf.url.$post>,
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
  const mutationDefaults = getPostWkhtmltopdfUrlMutationOptions<TError, TOnMutateResult>(
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

export function getZebraQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.zebra.$get>>,
) {
  return ['zebra', '/zebra', toValue(args)] as const
}

export function getZebraQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.zebra.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZebraQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zebra.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useZebra<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.zebra.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
          ReturnType<typeof getZebraQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getZebraQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZebraQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zebra.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

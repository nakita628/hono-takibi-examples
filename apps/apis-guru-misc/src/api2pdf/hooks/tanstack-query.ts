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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.html.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.chrome.html.$post>,
        TOnMutateResult
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

export function getChromeUrlQueryKey(args: InferRequestType<typeof client.chrome.url.$get>) {
  return ['chrome', '/chrome/url', args] as const
}

export function getChromeUrlQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chrome.url.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChromeUrlQueryKey>
  >({
    queryKey: getChromeUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chrome.url.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChromeUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chrome.url.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChromeUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChromeUrlQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChromeUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chrome.url.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChromeUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChromeUrlQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.chrome.url.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merge.$post>>>>>,
        TError,
        InferRequestType<typeof client.merge.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.wkhtmltopdf.url.$get>,
) {
  return ['wkhtmltopdf', '/wkhtmltopdf/url', args] as const
}

export function getWkhtmltopdfUrlQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wkhtmltopdf.url.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWkhtmltopdfUrlQueryKey>
  >({
    queryKey: getWkhtmltopdfUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wkhtmltopdf.url.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWkhtmltopdfUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wkhtmltopdf.url.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWkhtmltopdfUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWkhtmltopdfUrlQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWkhtmltopdfUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wkhtmltopdf.url.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWkhtmltopdfUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWkhtmltopdfUrlQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.wkhtmltopdf.url.$post>,
        TOnMutateResult
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

export function getZebraQueryKey(args: InferRequestType<typeof client.zebra.$get>) {
  return ['zebra', '/zebra', args] as const
}

export function getZebraQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.zebra.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getZebraQueryKey>
  >({
    queryKey: getZebraQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.zebra.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useZebra<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.zebra.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getZebraQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getZebraQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseZebra<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.zebra.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getZebraQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getZebraQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

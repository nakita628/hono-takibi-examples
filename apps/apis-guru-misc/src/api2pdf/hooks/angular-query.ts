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

export function injectPostChromeHtml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChromeHtmlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectChromeUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chrome.url.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChromeUrlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostChromeUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChromeUrlMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLibreofficeConvert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLibreofficeConvertMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merge.$post>>>>>,
        TError,
        InferRequestType<typeof client.merge.$post>,
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
    const mutationDefaults = getPostMergeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostWkhtmltopdfHtml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWkhtmltopdfHtmlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectWkhtmltopdfUrl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wkhtmltopdf.url.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWkhtmltopdfUrlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWkhtmltopdfUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWkhtmltopdfUrlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectZebra<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.zebra.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getZebraQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getZebraQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

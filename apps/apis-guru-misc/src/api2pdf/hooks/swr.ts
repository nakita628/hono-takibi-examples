import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostChromeHtmlKey() {
  return ['chrome', '/chrome/html', 'POST'] as const
}

export function usePostChromeHtml<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.html.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.chrome.html.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChromeHtmlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chrome.html.$post> }) =>
        parseResponse(client.chrome.html.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChromeUrlKey(args: InferRequestType<typeof client.chrome.url.$get>) {
  return ['chrome', '/chrome/url', args] as const
}

export function useGetChromeUrl<TError = unknown>(
  args: InferRequestType<typeof client.chrome.url.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChromeUrlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chrome.url.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChromeUrl<TError = unknown>(
  args: InferRequestType<typeof client.chrome.url.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChromeUrlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chrome.url.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChromeUrlKey() {
  return ['chrome', '/chrome/url', 'POST'] as const
}

export function usePostChromeUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chrome.url.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.chrome.url.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChromeUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chrome.url.$post> }) =>
        parseResponse(client.chrome.url.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLibreofficeConvertKey() {
  return ['libreoffice', '/libreoffice/convert', 'POST'] as const
}

export function usePostLibreofficeConvert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.libreoffice.convert.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.libreoffice.convert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibreofficeConvertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.libreoffice.convert.$post> }) =>
        parseResponse(client.libreoffice.convert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMergeKey() {
  return ['merge', '/merge', 'POST'] as const
}

export function usePostMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merge.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.merge.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMergeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.merge.$post> }) =>
        parseResponse(client.merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWkhtmltopdfHtmlKey() {
  return ['wkhtmltopdf', '/wkhtmltopdf/html', 'POST'] as const
}

export function usePostWkhtmltopdfHtml<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.html.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.wkhtmltopdf.html.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWkhtmltopdfHtmlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.wkhtmltopdf.html.$post> }) =>
        parseResponse(client.wkhtmltopdf.html.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWkhtmltopdfUrlKey(
  args: InferRequestType<typeof client.wkhtmltopdf.url.$get>,
) {
  return ['wkhtmltopdf', '/wkhtmltopdf/url', args] as const
}

export function useGetWkhtmltopdfUrl<TError = unknown>(
  args: InferRequestType<typeof client.wkhtmltopdf.url.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWkhtmltopdfUrlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wkhtmltopdf.url.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWkhtmltopdfUrl<TError = unknown>(
  args: InferRequestType<typeof client.wkhtmltopdf.url.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWkhtmltopdfUrlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wkhtmltopdf.url.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWkhtmltopdfUrlKey() {
  return ['wkhtmltopdf', '/wkhtmltopdf/url', 'POST'] as const
}

export function usePostWkhtmltopdfUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wkhtmltopdf.url.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.wkhtmltopdf.url.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWkhtmltopdfUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.wkhtmltopdf.url.$post> }) =>
        parseResponse(client.wkhtmltopdf.url.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetZebraKey(args: InferRequestType<typeof client.zebra.$get>) {
  return ['zebra', '/zebra', args] as const
}

export function useGetZebra<TError = unknown>(
  args: InferRequestType<typeof client.zebra.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetZebraKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.zebra.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetZebra<TError = unknown>(
  args: InferRequestType<typeof client.zebra.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetZebraKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zebra.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.zebra.$get(args, clientOptions)), restSwrOptions),
  }
}

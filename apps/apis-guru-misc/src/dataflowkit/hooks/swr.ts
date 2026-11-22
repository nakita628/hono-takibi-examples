import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConvertKey() {
  return ['convert'] as const
}

export function getFetchKey() {
  return ['fetch'] as const
}

export function getParseKey() {
  return ['parse'] as const
}

export function getSerpKey() {
  return ['serp'] as const
}

export function getPostConvertUrlPdfKey() {
  return ['convert', '/convert/url/pdf', 'POST'] as const
}

export function usePostConvertUrlPdf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.url.pdf.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.convert.url.pdf.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertUrlPdfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.convert.url.pdf.$post> }) =>
        parseResponse(client.convert.url.pdf.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertUrlScreenshotKey() {
  return ['convert', '/convert/url/screenshot', 'POST'] as const
}

export function usePostConvertUrlScreenshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.convert.url.screenshot.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.convert.url.screenshot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertUrlScreenshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.convert.url.screenshot.$post> },
      ) => parseResponse(client.convert.url.screenshot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFetchKey() {
  return ['fetch', '/fetch', 'POST'] as const
}

export function usePostFetch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fetch.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.fetch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFetchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fetch.$post> }) =>
        parseResponse(client.fetch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostParseKey() {
  return ['parse', '/parse', 'POST'] as const
}

export function usePostParse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.parse.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostParseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.parse.$post> }) =>
        parseResponse(client.parse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSerpKey() {
  return ['serp', '/serp', 'POST'] as const
}

export function usePostSerp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.serp.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.serp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSerpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.serp.$post> }) =>
        parseResponse(client.serp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

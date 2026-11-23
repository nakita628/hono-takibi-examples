import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getPostConvertUrlPdfMutationKey() {
  return ['convert', '/convert/url/pdf', 'POST'] as const
}

export function getPostConvertUrlPdfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.url.pdf.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.convert.url.pdf.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertUrlPdfMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.convert.url.pdf.$post>) {
      return parseResponse(client.convert.url.pdf.$post(args, options))
    },
  })
}

export function createPostConvertUrlPdf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.convert.url.pdf.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.convert.url.pdf.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConvertUrlPdfMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostConvertUrlScreenshotMutationKey() {
  return ['convert', '/convert/url/screenshot', 'POST'] as const
}

export function getPostConvertUrlScreenshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.convert.url.screenshot.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.convert.url.screenshot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertUrlScreenshotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.convert.url.screenshot.$post>) {
      return parseResponse(client.convert.url.screenshot.$post(args, options))
    },
  })
}

export function createPostConvertUrlScreenshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.convert.url.screenshot.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.convert.url.screenshot.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConvertUrlScreenshotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFetchMutationKey() {
  return ['fetch', '/fetch', 'POST'] as const
}

export function getPostFetchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fetch.$post>>>>>,
    TError,
    InferRequestType<typeof client.fetch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFetchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fetch.$post>) {
      return parseResponse(client.fetch.$post(args, options))
    },
  })
}

export function createPostFetch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fetch.$post>>>>>,
          TError,
          InferRequestType<typeof client.fetch.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFetchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostParseMutationKey() {
  return ['parse', '/parse', 'POST'] as const
}

export function getPostParseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.$post>>>>>,
    TError,
    InferRequestType<typeof client.parse.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostParseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.parse.$post>) {
      return parseResponse(client.parse.$post(args, options))
    },
  })
}

export function createPostParse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.$post>>>>>,
          TError,
          InferRequestType<typeof client.parse.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostParseMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSerpMutationKey() {
  return ['serp', '/serp', 'POST'] as const
}

export function getPostSerpMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.serp.$post>>>>>,
    TError,
    InferRequestType<typeof client.serp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSerpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.serp.$post>) {
      return parseResponse(client.serp.$post(args, options))
    },
  })
}

export function createPostSerp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.serp.$post>>>>>,
          TError,
          InferRequestType<typeof client.serp.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSerpMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

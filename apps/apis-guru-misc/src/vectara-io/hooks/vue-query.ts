import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1CreateCorpusMutationKey() {
  return ['v1', '/v1/create-corpus', 'POST'] as const
}

export function getPostV1CreateCorpusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['create-corpus']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['create-corpus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreateCorpusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['create-corpus']['$post']>) {
      return parseResponse(client.v1['create-corpus'].$post(args, options))
    },
  })
}

export function usePostV1CreateCorpus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['create-corpus']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['create-corpus']['$post']>,
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
  const mutationDefaults = getPostV1CreateCorpusMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DeleteCorpusMutationKey() {
  return ['v1', '/v1/delete-corpus', 'POST'] as const
}

export function getPostV1DeleteCorpusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['delete-corpus']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['delete-corpus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DeleteCorpusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['delete-corpus']['$post']>) {
      return parseResponse(client.v1['delete-corpus'].$post(args, options))
    },
  })
}

export function usePostV1DeleteCorpus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['delete-corpus']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['delete-corpus']['$post']>,
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
  const mutationDefaults = getPostV1DeleteCorpusMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DeleteDocMutationKey() {
  return ['v1', '/v1/delete-doc', 'POST'] as const
}

export function getPostV1DeleteDocMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['delete-doc']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['delete-doc']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DeleteDocMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['delete-doc']['$post']>) {
      return parseResponse(client.v1['delete-doc'].$post(args, options))
    },
  })
}

export function usePostV1DeleteDoc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['delete-doc']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['delete-doc']['$post']>,
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
  const mutationDefaults = getPostV1DeleteDocMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1IndexMutationKey() {
  return ['v1', '/v1/index', 'POST'] as const
}

export function getPostV1IndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.index.$post>) {
      return parseResponse(client.v1.index.$post(args, options))
    },
  })
}

export function usePostV1Index<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.index.$post>,
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
  const mutationDefaults = getPostV1IndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ListCorporaMutationKey() {
  return ['v1', '/v1/list-corpora', 'POST'] as const
}

export function getPostV1ListCorporaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['list-corpora']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['list-corpora']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ListCorporaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['list-corpora']['$post']>) {
      return parseResponse(client.v1['list-corpora'].$post(args, options))
    },
  })
}

export function usePostV1ListCorpora<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['list-corpora']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['list-corpora']['$post']>,
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
  const mutationDefaults = getPostV1ListCorporaMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1QueryMutationKey() {
  return ['v1', '/v1/query', 'POST'] as const
}

export function getPostV1QueryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1QueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.query.$post>) {
      return parseResponse(client.v1.query.$post(args, options))
    },
  })
}

export function usePostV1Query<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.query.$post>,
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
  const mutationDefaults = getPostV1QueryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ResetCorpusMutationKey() {
  return ['v1', '/v1/reset-corpus', 'POST'] as const
}

export function getPostV1ResetCorpusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['reset-corpus']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['reset-corpus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResetCorpusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['reset-corpus']['$post']>) {
      return parseResponse(client.v1['reset-corpus'].$post(args, options))
    },
  })
}

export function usePostV1ResetCorpus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['reset-corpus']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['reset-corpus']['$post']>,
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
  const mutationDefaults = getPostV1ResetCorpusMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1StreamQueryMutationKey() {
  return ['v1', '/v1/stream-query', 'POST'] as const
}

export function getPostV1StreamQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['stream-query']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['stream-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1StreamQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['stream-query']['$post']>) {
      return parseResponse(client.v1['stream-query'].$post(args, options))
    },
  })
}

export function usePostV1StreamQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['stream-query']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['stream-query']['$post']>,
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
  const mutationDefaults = getPostV1StreamQueryMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1UploadMutationKey() {
  return ['v1', '/v1/upload', 'POST'] as const
}

export function getPostV1UploadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.upload.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.upload.$post>) {
      return parseResponse(client.v1.upload.$post(args, options))
    },
  })
}

export function usePostV1Upload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.upload.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.upload.$post>,
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
  const mutationDefaults = getPostV1UploadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

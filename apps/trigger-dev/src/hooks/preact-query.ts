import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiV1EventsMutationKey() {
  return ['api', '/api/v1/events', 'POST'] as const
}

export function getPostApiV1EventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.events.$post>) {
      return parseResponse(client.api.v1.events.$post(args, options))
    },
  })
}

export function usePostApiV1Events<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.events.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1EventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV3BatchesMutationKey() {
  return ['api', '/api/v3/batches', 'POST'] as const
}

export function getPostApiV3BatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.batches.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.batches.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3BatchesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.batches.$post>) {
      return parseResponse(client.api.v3.batches.$post(args, options))
    },
  })
}

export function usePostApiV3Batches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.batches.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.batches.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3BatchesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3BatchesBatchIdItemsMutationKey() {
  return ['api', '/api/v3/batches/:batchId/items', 'POST'] as const
}

export function getPostApiV3BatchesBatchIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.batches)[':batchId']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.batches)[':batchId']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3BatchesBatchIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.batches)[':batchId']['items']['$post']>,
    ) {
      return parseResponse(client.api.v3.batches[':batchId'].items.$post(args, options))
    },
  })
}

export function usePostApiV3BatchesBatchIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.batches)[':batchId']['items']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.batches)[':batchId']['items']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3BatchesBatchIdItemsMutationOptions<TError, TOnMutateResult>(
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

import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiV1EventsKey() {
  return ['api', '/api/v1/events', 'POST'] as const
}

export function usePostApiV1Events<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.events.$post> }) =>
        parseResponse(client.api.v1.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3BatchesKey() {
  return ['api', '/api/v3/batches', 'POST'] as const
}

export function usePostApiV3Batches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.batches.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v3.batches.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3BatchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v3.batches.$post> }) =>
        parseResponse(client.api.v3.batches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3BatchesBatchIdItemsKey() {
  return ['api', '/api/v3/batches/:batchId/items', 'POST'] as const
}

export function usePostApiV3BatchesBatchIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.batches)[':batchId']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v3.batches)[':batchId']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3BatchesBatchIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v3.batches)[':batchId']['items']['$post']> },
      ) => parseResponse(client.api.v3.batches[':batchId'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

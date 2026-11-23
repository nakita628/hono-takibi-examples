import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1RecordsQueryHistoryRecordKey() {
  return ['v1', '/v1/records:queryHistoryRecord', 'POST'] as const
}

export function usePostV1RecordsQueryHistoryRecord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['records:queryHistoryRecord']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['records:queryHistoryRecord']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RecordsQueryHistoryRecordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['records:queryHistoryRecord']['$post']> },
      ) => parseResponse(client.v1['records:queryHistoryRecord'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RecordsQueryRecordKey() {
  return ['v1', '/v1/records:queryRecord', 'POST'] as const
}

export function usePostV1RecordsQueryRecord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['records:queryRecord']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['records:queryRecord']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RecordsQueryRecordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['records:queryRecord']['$post']> },
      ) => parseResponse(client.v1['records:queryRecord'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

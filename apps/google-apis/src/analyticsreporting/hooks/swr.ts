import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV4Key() {
  return ['v4'] as const
}

export function getPostV4ReportsBatchGetKey() {
  return ['v4', '/v4/reports:batchGet', 'POST'] as const
}

export function usePostV4ReportsBatchGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['reports:batchGet']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)['reports:batchGet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ReportsBatchGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)['reports:batchGet']['$post']> },
      ) => parseResponse(client.v4['reports:batchGet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4UserActivitySearchKey() {
  return ['v4', '/v4/userActivity:search', 'POST'] as const
}

export function usePostV4UserActivitySearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)['userActivity:search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)['userActivity:search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UserActivitySearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)['userActivity:search']['$post']> },
      ) => parseResponse(client.v4['userActivity:search'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

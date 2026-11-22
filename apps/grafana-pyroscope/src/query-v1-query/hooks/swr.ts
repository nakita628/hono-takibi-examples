import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getQueryV1QueryBackendServiceKey() {
  return ['query.v1.QueryBackendService'] as const
}

export function getQueryV1QueryFrontendServiceKey() {
  return ['query.v1.QueryFrontendService'] as const
}

export function getPostQueryV1QueryBackendServiceInvokeKey() {
  return ['query.v1.QueryBackendService', '/query.v1.QueryBackendService/Invoke', 'POST'] as const
}

export function usePostQueryV1QueryBackendServiceInvoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['query.v1.QueryBackendService']['Invoke']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['query.v1.QueryBackendService']['Invoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryV1QueryBackendServiceInvokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['query.v1.QueryBackendService']['Invoke']['$post']>
        },
      ) => parseResponse(client['query.v1.QueryBackendService'].Invoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQueryV1QueryFrontendServiceQueryKey() {
  return ['query.v1.QueryFrontendService', '/query.v1.QueryFrontendService/Query', 'POST'] as const
}

export function usePostQueryV1QueryFrontendServiceQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['query.v1.QueryFrontendService']['Query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['query.v1.QueryFrontendService']['Query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryV1QueryFrontendServiceQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['query.v1.QueryFrontendService']['Query']['$post']>
        },
      ) => parseResponse(client['query.v1.QueryFrontendService'].Query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

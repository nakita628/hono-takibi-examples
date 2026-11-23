import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1GetIceServerConfigKey() {
  return ['v1', '/v1/get-ice-server-config', 'POST'] as const
}

export function usePostV1GetIceServerConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['get-ice-server-config']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['get-ice-server-config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GetIceServerConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['get-ice-server-config']['$post']> },
      ) => parseResponse(client.v1['get-ice-server-config'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SendAlexaOfferToMasterKey() {
  return ['v1', '/v1/send-alexa-offer-to-master', 'POST'] as const
}

export function usePostV1SendAlexaOfferToMaster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['send-alexa-offer-to-master']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['send-alexa-offer-to-master']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SendAlexaOfferToMasterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['send-alexa-offer-to-master']['$post']> },
      ) => parseResponse(client.v1['send-alexa-offer-to-master'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

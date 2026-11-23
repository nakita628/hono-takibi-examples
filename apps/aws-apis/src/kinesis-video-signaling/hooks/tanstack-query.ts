import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1GetIceServerConfigMutationKey() {
  return ['v1', '/v1/get-ice-server-config', 'POST'] as const
}

export function getPostV1GetIceServerConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['get-ice-server-config']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['get-ice-server-config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GetIceServerConfigMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['get-ice-server-config']['$post']>) {
      return parseResponse(client.v1['get-ice-server-config'].$post(args, options))
    },
  })
}

export function usePostV1GetIceServerConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['get-ice-server-config']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['get-ice-server-config']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1GetIceServerConfigMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SendAlexaOfferToMasterMutationKey() {
  return ['v1', '/v1/send-alexa-offer-to-master', 'POST'] as const
}

export function getPostV1SendAlexaOfferToMasterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['send-alexa-offer-to-master']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['send-alexa-offer-to-master']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SendAlexaOfferToMasterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['send-alexa-offer-to-master']['$post']>,
    ) {
      return parseResponse(client.v1['send-alexa-offer-to-master'].$post(args, options))
    },
  })
}

export function usePostV1SendAlexaOfferToMaster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['send-alexa-offer-to-master']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['send-alexa-offer-to-master']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SendAlexaOfferToMasterMutationOptions<TError, TOnMutateResult>(
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

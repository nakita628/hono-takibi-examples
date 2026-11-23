import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostV1GetIceServerConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1GetIceServerConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1SendAlexaOfferToMaster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SendAlexaOfferToMasterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getStoregatewayV1StoreGatewayServiceKey() {
  return ['storegateway.v1.StoreGatewayService'] as const
}

export function getPostStoregatewayV1StoreGatewayServiceBlockMetadataKey() {
  return [
    'storegateway.v1.StoreGatewayService',
    '/storegateway.v1.StoreGatewayService/BlockMetadata',
    'POST',
  ] as const
}

export function usePostStoregatewayV1StoreGatewayServiceBlockMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['storegateway.v1.StoreGatewayService']['BlockMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['storegateway.v1.StoreGatewayService']['BlockMetadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoregatewayV1StoreGatewayServiceBlockMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['storegateway.v1.StoreGatewayService']['BlockMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['storegateway.v1.StoreGatewayService'].BlockMetadata.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostStoregatewayV1StoreGatewayServiceGetBlockStatsKey() {
  return [
    'storegateway.v1.StoreGatewayService',
    '/storegateway.v1.StoreGatewayService/GetBlockStats',
    'POST',
  ] as const
}

export function usePostStoregatewayV1StoreGatewayServiceGetBlockStats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['storegateway.v1.StoreGatewayService']['GetBlockStats']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['storegateway.v1.StoreGatewayService']['GetBlockStats']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoregatewayV1StoreGatewayServiceGetBlockStatsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['storegateway.v1.StoreGatewayService']['GetBlockStats']['$post']
          >
        },
      ) =>
        parseResponse(
          client['storegateway.v1.StoreGatewayService'].GetBlockStats.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostStoregatewayV1StoreGatewayServiceLabelNamesKey() {
  return [
    'storegateway.v1.StoreGatewayService',
    '/storegateway.v1.StoreGatewayService/LabelNames',
    'POST',
  ] as const
}

export function usePostStoregatewayV1StoreGatewayServiceLabelNames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['storegateway.v1.StoreGatewayService']['LabelNames']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['storegateway.v1.StoreGatewayService']['LabelNames']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoregatewayV1StoreGatewayServiceLabelNamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['storegateway.v1.StoreGatewayService']['LabelNames']['$post']
          >
        },
      ) =>
        parseResponse(
          client['storegateway.v1.StoreGatewayService'].LabelNames.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostStoregatewayV1StoreGatewayServiceLabelValuesKey() {
  return [
    'storegateway.v1.StoreGatewayService',
    '/storegateway.v1.StoreGatewayService/LabelValues',
    'POST',
  ] as const
}

export function usePostStoregatewayV1StoreGatewayServiceLabelValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['storegateway.v1.StoreGatewayService']['LabelValues']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['storegateway.v1.StoreGatewayService']['LabelValues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoregatewayV1StoreGatewayServiceLabelValuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['storegateway.v1.StoreGatewayService']['LabelValues']['$post']
          >
        },
      ) =>
        parseResponse(
          client['storegateway.v1.StoreGatewayService'].LabelValues.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostStoregatewayV1StoreGatewayServiceProfileTypesKey() {
  return [
    'storegateway.v1.StoreGatewayService',
    '/storegateway.v1.StoreGatewayService/ProfileTypes',
    'POST',
  ] as const
}

export function usePostStoregatewayV1StoreGatewayServiceProfileTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['storegateway.v1.StoreGatewayService']['ProfileTypes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['storegateway.v1.StoreGatewayService']['ProfileTypes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoregatewayV1StoreGatewayServiceProfileTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['storegateway.v1.StoreGatewayService']['ProfileTypes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['storegateway.v1.StoreGatewayService'].ProfileTypes.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostStoregatewayV1StoreGatewayServiceSeriesKey() {
  return [
    'storegateway.v1.StoreGatewayService',
    '/storegateway.v1.StoreGatewayService/Series',
    'POST',
  ] as const
}

export function usePostStoregatewayV1StoreGatewayServiceSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['storegateway.v1.StoreGatewayService']['Series']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['storegateway.v1.StoreGatewayService']['Series']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoregatewayV1StoreGatewayServiceSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['storegateway.v1.StoreGatewayService']['Series']['$post']
          >
        },
      ) =>
        parseResponse(
          client['storegateway.v1.StoreGatewayService'].Series.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getStoregatewayV1StoreGatewayServiceKey() {
  return ['storegateway.v1.StoreGatewayService'] as const
}

export function getPostStoregatewayV1StoreGatewayServiceBlockMetadataMutationKey() {
  return [
    'storegateway.v1.StoreGatewayService',
    '/storegateway.v1.StoreGatewayService/BlockMetadata',
    'POST',
  ] as const
}

export function getPostStoregatewayV1StoreGatewayServiceBlockMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['storegateway.v1.StoreGatewayService']['BlockMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostStoregatewayV1StoreGatewayServiceBlockMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['storegateway.v1.StoreGatewayService']['BlockMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['storegateway.v1.StoreGatewayService'].BlockMetadata.$post(args, options),
      )
    },
  })
}

export function usePostStoregatewayV1StoreGatewayServiceBlockMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['storegateway.v1.StoreGatewayService']['BlockMetadata']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoregatewayV1StoreGatewayServiceBlockMetadataMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStoregatewayV1StoreGatewayServiceGetBlockStatsMutationKey() {
  return [
    'storegateway.v1.StoreGatewayService',
    '/storegateway.v1.StoreGatewayService/GetBlockStats',
    'POST',
  ] as const
}

export function getPostStoregatewayV1StoreGatewayServiceGetBlockStatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['storegateway.v1.StoreGatewayService']['GetBlockStats']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostStoregatewayV1StoreGatewayServiceGetBlockStatsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['storegateway.v1.StoreGatewayService']['GetBlockStats']['$post']
      >,
    ) {
      return parseResponse(
        client['storegateway.v1.StoreGatewayService'].GetBlockStats.$post(args, options),
      )
    },
  })
}

export function usePostStoregatewayV1StoreGatewayServiceGetBlockStats<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['storegateway.v1.StoreGatewayService']['GetBlockStats']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoregatewayV1StoreGatewayServiceGetBlockStatsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStoregatewayV1StoreGatewayServiceLabelNamesMutationKey() {
  return [
    'storegateway.v1.StoreGatewayService',
    '/storegateway.v1.StoreGatewayService/LabelNames',
    'POST',
  ] as const
}

export function getPostStoregatewayV1StoreGatewayServiceLabelNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['storegateway.v1.StoreGatewayService']['LabelNames']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoregatewayV1StoreGatewayServiceLabelNamesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['storegateway.v1.StoreGatewayService']['LabelNames']['$post']
      >,
    ) {
      return parseResponse(
        client['storegateway.v1.StoreGatewayService'].LabelNames.$post(args, options),
      )
    },
  })
}

export function usePostStoregatewayV1StoreGatewayServiceLabelNames<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['storegateway.v1.StoreGatewayService']['LabelNames']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoregatewayV1StoreGatewayServiceLabelNamesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStoregatewayV1StoreGatewayServiceLabelValuesMutationKey() {
  return [
    'storegateway.v1.StoreGatewayService',
    '/storegateway.v1.StoreGatewayService/LabelValues',
    'POST',
  ] as const
}

export function getPostStoregatewayV1StoreGatewayServiceLabelValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['storegateway.v1.StoreGatewayService']['LabelValues']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostStoregatewayV1StoreGatewayServiceLabelValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['storegateway.v1.StoreGatewayService']['LabelValues']['$post']
      >,
    ) {
      return parseResponse(
        client['storegateway.v1.StoreGatewayService'].LabelValues.$post(args, options),
      )
    },
  })
}

export function usePostStoregatewayV1StoreGatewayServiceLabelValues<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['storegateway.v1.StoreGatewayService']['LabelValues']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoregatewayV1StoreGatewayServiceLabelValuesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStoregatewayV1StoreGatewayServiceProfileTypesMutationKey() {
  return [
    'storegateway.v1.StoreGatewayService',
    '/storegateway.v1.StoreGatewayService/ProfileTypes',
    'POST',
  ] as const
}

export function getPostStoregatewayV1StoreGatewayServiceProfileTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['storegateway.v1.StoreGatewayService']['ProfileTypes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostStoregatewayV1StoreGatewayServiceProfileTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['storegateway.v1.StoreGatewayService']['ProfileTypes']['$post']
      >,
    ) {
      return parseResponse(
        client['storegateway.v1.StoreGatewayService'].ProfileTypes.$post(args, options),
      )
    },
  })
}

export function usePostStoregatewayV1StoreGatewayServiceProfileTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['storegateway.v1.StoreGatewayService']['ProfileTypes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoregatewayV1StoreGatewayServiceProfileTypesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStoregatewayV1StoreGatewayServiceSeriesMutationKey() {
  return [
    'storegateway.v1.StoreGatewayService',
    '/storegateway.v1.StoreGatewayService/Series',
    'POST',
  ] as const
}

export function getPostStoregatewayV1StoreGatewayServiceSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['storegateway.v1.StoreGatewayService']['Series']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoregatewayV1StoreGatewayServiceSeriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['storegateway.v1.StoreGatewayService']['Series']['$post']
      >,
    ) {
      return parseResponse(
        client['storegateway.v1.StoreGatewayService'].Series.$post(args, options),
      )
    },
  })
}

export function usePostStoregatewayV1StoreGatewayServiceSeries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['storegateway.v1.StoreGatewayService']['Series']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['storegateway.v1.StoreGatewayService']['Series']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoregatewayV1StoreGatewayServiceSeriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

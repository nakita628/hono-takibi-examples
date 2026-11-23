import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetKey() {
  return ['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet'] as const
}

export function getXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportKey() {
  return ['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport'] as const
}

export function getPostXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetMutationKey() {
  return [
    '#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet',
    '/#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSet<
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
                  (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetMutationOptions<
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

export function getPostXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportMutationKey() {
  return [
    '#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport',
    '/#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport',
    'POST',
  ] as const
}

export function getPostXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExport<
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
                  (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportMutationOptions<
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

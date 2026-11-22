import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetKey() {
  return ['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet'] as const
}

export function getXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportKey() {
  return ['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport'] as const
}

export function getPostXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetKey() {
  return [
    '#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet',
    '/#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMarketplaceCommerceAnalytics20150701GenerateDataSetKey()
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
            (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportKey() {
  return [
    '#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport',
    '/#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport',
    'POST',
  ] as const
}

export function usePostXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMarketplaceCommerceAnalytics20150701StartSupportDataExportKey()
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
            (typeof client)['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

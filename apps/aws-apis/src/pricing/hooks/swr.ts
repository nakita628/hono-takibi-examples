import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSPriceListServiceDescribeServicesKey() {
  return ['#X-Amz-Target=AWSPriceListService.DescribeServices'] as const
}

export function getXAmzTargetAWSPriceListServiceGetAttributeValuesKey() {
  return ['#X-Amz-Target=AWSPriceListService.GetAttributeValues'] as const
}

export function getXAmzTargetAWSPriceListServiceGetPriceListFileUrlKey() {
  return ['#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl'] as const
}

export function getXAmzTargetAWSPriceListServiceGetProductsKey() {
  return ['#X-Amz-Target=AWSPriceListService.GetProducts'] as const
}

export function getXAmzTargetAWSPriceListServiceListPriceListsKey() {
  return ['#X-Amz-Target=AWSPriceListService.ListPriceLists'] as const
}

export function getPostXAmzTargetAWSPriceListServiceDescribeServicesKey() {
  return [
    '#X-Amz-Target=AWSPriceListService.DescribeServices',
    '/#X-Amz-Target=AWSPriceListService.DescribeServices',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPriceListServiceDescribeServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPriceListService.DescribeServices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSPriceListService.DescribeServices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPriceListServiceDescribeServicesKey()
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
            (typeof client)['#X-Amz-Target=AWSPriceListService.DescribeServices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPriceListService.DescribeServices'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPriceListServiceGetAttributeValuesKey() {
  return [
    '#X-Amz-Target=AWSPriceListService.GetAttributeValues',
    '/#X-Amz-Target=AWSPriceListService.GetAttributeValues',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPriceListServiceGetAttributeValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPriceListService.GetAttributeValues']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPriceListService.GetAttributeValues']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPriceListServiceGetAttributeValuesKey()
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
            (typeof client)['#X-Amz-Target=AWSPriceListService.GetAttributeValues']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPriceListService.GetAttributeValues'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPriceListServiceGetPriceListFileUrlKey() {
  return [
    '#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl',
    '/#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPriceListServiceGetPriceListFileUrl<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPriceListServiceGetPriceListFileUrlKey()
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
            (typeof client)['#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPriceListServiceGetProductsKey() {
  return [
    '#X-Amz-Target=AWSPriceListService.GetProducts',
    '/#X-Amz-Target=AWSPriceListService.GetProducts',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPriceListServiceGetProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSPriceListService.GetProducts']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSPriceListService.GetProducts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPriceListServiceGetProductsKey()
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
            (typeof client)['#X-Amz-Target=AWSPriceListService.GetProducts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPriceListService.GetProducts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPriceListServiceListPriceListsKey() {
  return [
    '#X-Amz-Target=AWSPriceListService.ListPriceLists',
    '/#X-Amz-Target=AWSPriceListService.ListPriceLists',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPriceListServiceListPriceLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSPriceListService.ListPriceLists']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSPriceListService.ListPriceLists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPriceListServiceListPriceListsKey()
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
            (typeof client)['#X-Amz-Target=AWSPriceListService.ListPriceLists']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPriceListService.ListPriceLists'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

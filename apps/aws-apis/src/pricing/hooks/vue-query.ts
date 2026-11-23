import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostXAmzTargetAWSPriceListServiceDescribeServicesMutationKey() {
  return [
    '#X-Amz-Target=AWSPriceListService.DescribeServices',
    '/#X-Amz-Target=AWSPriceListService.DescribeServices',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPriceListServiceDescribeServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPriceListService.DescribeServices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPriceListServiceDescribeServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPriceListService.DescribeServices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPriceListService.DescribeServices'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSPriceListServiceDescribeServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSPriceListService.DescribeServices']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSPriceListServiceDescribeServicesMutationOptions<
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

export function getPostXAmzTargetAWSPriceListServiceGetAttributeValuesMutationKey() {
  return [
    '#X-Amz-Target=AWSPriceListService.GetAttributeValues',
    '/#X-Amz-Target=AWSPriceListService.GetAttributeValues',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPriceListServiceGetAttributeValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPriceListService.GetAttributeValues']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPriceListServiceGetAttributeValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPriceListService.GetAttributeValues']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPriceListService.GetAttributeValues'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSPriceListServiceGetAttributeValues<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSPriceListService.GetAttributeValues']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSPriceListServiceGetAttributeValuesMutationOptions<
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

export function getPostXAmzTargetAWSPriceListServiceGetPriceListFileUrlMutationKey() {
  return [
    '#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl',
    '/#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPriceListServiceGetPriceListFileUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPriceListServiceGetPriceListFileUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSPriceListServiceGetPriceListFileUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSPriceListServiceGetPriceListFileUrlMutationOptions<
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

export function getPostXAmzTargetAWSPriceListServiceGetProductsMutationKey() {
  return [
    '#X-Amz-Target=AWSPriceListService.GetProducts',
    '/#X-Amz-Target=AWSPriceListService.GetProducts',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPriceListServiceGetProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSPriceListService.GetProducts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPriceListServiceGetProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPriceListService.GetProducts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPriceListService.GetProducts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSPriceListServiceGetProducts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSPriceListService.GetProducts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSPriceListService.GetProducts']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSPriceListServiceGetProductsMutationOptions<
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

export function getPostXAmzTargetAWSPriceListServiceListPriceListsMutationKey() {
  return [
    '#X-Amz-Target=AWSPriceListService.ListPriceLists',
    '/#X-Amz-Target=AWSPriceListService.ListPriceLists',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSPriceListServiceListPriceListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSPriceListService.ListPriceLists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSPriceListServiceListPriceListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSPriceListService.ListPriceLists']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSPriceListService.ListPriceLists'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSPriceListServiceListPriceLists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AWSPriceListService.ListPriceLists']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSPriceListService.ListPriceLists']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSPriceListServiceListPriceListsMutationOptions<
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

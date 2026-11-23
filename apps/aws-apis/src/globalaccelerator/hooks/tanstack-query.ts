import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706AddEndpointsKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706CreateAcceleratorKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706CreateListenerKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DeleteListenerKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes',
  ] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706DescribeListenerKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706ListAcceleratorsKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706ListByoipCidrsKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination',
  ] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706ListListenersKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706ListTagsForResourceKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706RemoveEndpointsKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706TagResourceKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.TagResource'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706UntagResourceKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes',
  ] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706UpdateListenerKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener'] as const
}

export function getXAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrKey() {
  return ['#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr'] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpoints<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706AddEndpointsMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706AddEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706AddEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706AddEndpoints<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints']['$post']
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
  const mutationDefaults = getPostXAmzTargetGlobalAcceleratorV20180706AddEndpointsMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidr<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTraffic<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateAcceleratorMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateAcceleratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706CreateAcceleratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706CreateAccelerator<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706CreateAcceleratorMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAccelerator<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroup<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListener<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706CreateEndpointGroup<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateListenerMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateListenerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706CreateListenerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706CreateListener<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener']['$post']
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
  const mutationDefaults = getPostXAmzTargetGlobalAcceleratorV20180706CreateListenerMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeleteAccelerator<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAccelerator<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroup<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListener<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroup<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteListenerMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteListenerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706DeleteListenerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeleteListener<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener']['$post']
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
  const mutationDefaults = getPostXAmzTargetGlobalAcceleratorV20180706DeleteListenerMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTraffic<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidr<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeAccelerator<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributes<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAccelerator<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributes<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroup<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListener<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroup<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeListenerMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeListenerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706DescribeListenerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeListener<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706DescribeListenerMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706ListAcceleratorsMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListAcceleratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706ListAcceleratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListAccelerators<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706ListAcceleratorsMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706ListByoipCidrsMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListByoipCidrsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706ListByoipCidrsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListByoipCidrs<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs']['$post']
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
  const mutationDefaults = getPostXAmzTargetGlobalAcceleratorV20180706ListByoipCidrsMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAccelerators<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroups<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListeners<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappings<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestination<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListEndpointGroups<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706ListListenersMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListListenersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706ListListenersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListListeners<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners']['$post']
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
  const mutationDefaults = getPostXAmzTargetGlobalAcceleratorV20180706ListListenersMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidr<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpoints<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706RemoveEndpointsMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706RemoveEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706RemoveEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706RemoveEndpoints<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706RemoveEndpointsMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706TagResourceMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.TagResource',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706TagResource<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.TagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetGlobalAcceleratorV20180706TagResourceMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UntagResource<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetGlobalAcceleratorV20180706UntagResourceMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateAccelerator<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributes<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAccelerator<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributes<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListener<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroup<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateListenerMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateListenerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706UpdateListenerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateListener<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener']['$post']
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
  const mutationDefaults = getPostXAmzTargetGlobalAcceleratorV20180706UpdateListenerMutationOptions<
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

export function getPostXAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrMutationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr',
    'POST',
  ] as const
}

export function getPostXAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidr<
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
                  (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr']['$post']
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
    getPostXAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrMutationOptions<
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

import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpoints<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706AddEndpointsKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706AddEndpoints<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706AddEndpointsKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidr<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTraffic<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateAcceleratorKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706CreateAccelerator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706CreateAcceleratorKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAccelerator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListener<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706CreateEndpointGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706CreateListenerKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706CreateListener<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706CreateListenerKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeleteAccelerator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAccelerator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListener<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeleteListenerKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeleteListener<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DeleteListenerKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTraffic<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidr<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeAccelerator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAccelerator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListener<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706DescribeListenerKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706DescribeListener<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706DescribeListenerKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListAcceleratorsKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListAccelerators<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706ListAcceleratorsKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListByoipCidrsKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListByoipCidrs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706ListByoipCidrsKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAccelerators<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListeners<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestination<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListEndpointGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListListenersKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListListeners<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706ListListenersKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidr<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpoints<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706RemoveEndpointsKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706RemoveEndpoints<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706RemoveEndpointsKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706TagResourceKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.TagResource',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706TagResourceKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UntagResourceKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateAccelerator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAccelerator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListener<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706UpdateListenerKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706UpdateListener<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706UpdateListenerKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrKey() {
  return [
    '#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr',
    '/#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr',
    'POST',
  ] as const
}

export function usePostXAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidr<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrKey()
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
            (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

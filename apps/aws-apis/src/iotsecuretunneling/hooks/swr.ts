import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetIoTSecuredTunnelingCloseTunnelKey() {
  return ['#X-Amz-Target=IoTSecuredTunneling.CloseTunnel'] as const
}

export function getXAmzTargetIoTSecuredTunnelingDescribeTunnelKey() {
  return ['#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel'] as const
}

export function getXAmzTargetIoTSecuredTunnelingListTagsForResourceKey() {
  return ['#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource'] as const
}

export function getXAmzTargetIoTSecuredTunnelingListTunnelsKey() {
  return ['#X-Amz-Target=IoTSecuredTunneling.ListTunnels'] as const
}

export function getXAmzTargetIoTSecuredTunnelingOpenTunnelKey() {
  return ['#X-Amz-Target=IoTSecuredTunneling.OpenTunnel'] as const
}

export function getXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenKey() {
  return ['#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken'] as const
}

export function getXAmzTargetIoTSecuredTunnelingTagResourceKey() {
  return ['#X-Amz-Target=IoTSecuredTunneling.TagResource'] as const
}

export function getXAmzTargetIoTSecuredTunnelingUntagResourceKey() {
  return ['#X-Amz-Target=IoTSecuredTunneling.UntagResource'] as const
}

export function getPostXAmzTargetIoTSecuredTunnelingCloseTunnelKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.CloseTunnel',
    '/#X-Amz-Target=IoTSecuredTunneling.CloseTunnel',
    'POST',
  ] as const
}

export function usePostXAmzTargetIoTSecuredTunnelingCloseTunnel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.CloseTunnel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.CloseTunnel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIoTSecuredTunnelingCloseTunnelKey()
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
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.CloseTunnel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IoTSecuredTunneling.CloseTunnel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIoTSecuredTunnelingDescribeTunnelKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel',
    '/#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel',
    'POST',
  ] as const
}

export function usePostXAmzTargetIoTSecuredTunnelingDescribeTunnel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIoTSecuredTunnelingDescribeTunnelKey()
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
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIoTSecuredTunnelingListTagsForResourceKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource',
    '/#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetIoTSecuredTunnelingListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIoTSecuredTunnelingListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIoTSecuredTunnelingListTunnelsKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.ListTunnels',
    '/#X-Amz-Target=IoTSecuredTunneling.ListTunnels',
    'POST',
  ] as const
}

export function usePostXAmzTargetIoTSecuredTunnelingListTunnels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTunnels']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTunnels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIoTSecuredTunnelingListTunnelsKey()
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
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTunnels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IoTSecuredTunneling.ListTunnels'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIoTSecuredTunnelingOpenTunnelKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.OpenTunnel',
    '/#X-Amz-Target=IoTSecuredTunneling.OpenTunnel',
    'POST',
  ] as const
}

export function usePostXAmzTargetIoTSecuredTunnelingOpenTunnel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.OpenTunnel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.OpenTunnel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIoTSecuredTunnelingOpenTunnelKey()
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
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.OpenTunnel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IoTSecuredTunneling.OpenTunnel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken',
    '/#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetIoTSecuredTunnelingRotateTunnelAccessToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenKey()
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
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIoTSecuredTunnelingTagResourceKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.TagResource',
    '/#X-Amz-Target=IoTSecuredTunneling.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetIoTSecuredTunnelingTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIoTSecuredTunnelingTagResourceKey()
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
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IoTSecuredTunneling.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIoTSecuredTunnelingUntagResourceKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.UntagResource',
    '/#X-Amz-Target=IoTSecuredTunneling.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetIoTSecuredTunnelingUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIoTSecuredTunnelingUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IoTSecuredTunneling.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getPostXAmzTargetIoTSecuredTunnelingCloseTunnelMutationKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.CloseTunnel',
    '/#X-Amz-Target=IoTSecuredTunneling.CloseTunnel',
    'POST',
  ] as const
}

export function getPostXAmzTargetIoTSecuredTunnelingCloseTunnelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.CloseTunnel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIoTSecuredTunnelingCloseTunnelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IoTSecuredTunneling.CloseTunnel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IoTSecuredTunneling.CloseTunnel'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetIoTSecuredTunnelingCloseTunnel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=IoTSecuredTunneling.CloseTunnel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.CloseTunnel']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetIoTSecuredTunnelingCloseTunnelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetIoTSecuredTunnelingDescribeTunnelMutationKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel',
    '/#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel',
    'POST',
  ] as const
}

export function getPostXAmzTargetIoTSecuredTunnelingDescribeTunnelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIoTSecuredTunnelingDescribeTunnelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetIoTSecuredTunnelingDescribeTunnel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetIoTSecuredTunnelingDescribeTunnelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetIoTSecuredTunnelingListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource',
    '/#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetIoTSecuredTunnelingListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIoTSecuredTunnelingListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetIoTSecuredTunnelingListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetIoTSecuredTunnelingListTagsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetIoTSecuredTunnelingListTunnelsMutationKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.ListTunnels',
    '/#X-Amz-Target=IoTSecuredTunneling.ListTunnels',
    'POST',
  ] as const
}

export function getPostXAmzTargetIoTSecuredTunnelingListTunnelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTunnels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIoTSecuredTunnelingListTunnelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTunnels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IoTSecuredTunneling.ListTunnels'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetIoTSecuredTunnelingListTunnels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTunnels']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTunnels']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetIoTSecuredTunnelingListTunnelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetIoTSecuredTunnelingOpenTunnelMutationKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.OpenTunnel',
    '/#X-Amz-Target=IoTSecuredTunneling.OpenTunnel',
    'POST',
  ] as const
}

export function getPostXAmzTargetIoTSecuredTunnelingOpenTunnelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.OpenTunnel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIoTSecuredTunnelingOpenTunnelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IoTSecuredTunneling.OpenTunnel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IoTSecuredTunneling.OpenTunnel'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetIoTSecuredTunnelingOpenTunnel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=IoTSecuredTunneling.OpenTunnel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.OpenTunnel']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetIoTSecuredTunnelingOpenTunnelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenMutationKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken',
    '/#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetIoTSecuredTunnelingRotateTunnelAccessToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetIoTSecuredTunnelingTagResourceMutationKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.TagResource',
    '/#X-Amz-Target=IoTSecuredTunneling.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetIoTSecuredTunnelingTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIoTSecuredTunnelingTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IoTSecuredTunneling.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IoTSecuredTunneling.TagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetIoTSecuredTunnelingTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=IoTSecuredTunneling.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.TagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetIoTSecuredTunnelingTagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetIoTSecuredTunnelingUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=IoTSecuredTunneling.UntagResource',
    '/#X-Amz-Target=IoTSecuredTunneling.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetIoTSecuredTunnelingUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIoTSecuredTunnelingUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IoTSecuredTunneling.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IoTSecuredTunneling.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetIoTSecuredTunnelingUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=IoTSecuredTunneling.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=IoTSecuredTunneling.UntagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetIoTSecuredTunnelingUntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

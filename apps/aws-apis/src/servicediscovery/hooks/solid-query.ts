import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314CreateServiceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314DeleteNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314DeleteServiceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314DeregisterInstanceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314DiscoverInstancesKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314GetInstanceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314GetNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314GetOperationKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314GetServiceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.GetService'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314ListInstancesKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314ListNamespacesKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314ListOperationsKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314ListServicesKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314ListTagsForResourceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314RegisterInstanceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314TagResourceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314UntagResourceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314UpdateServiceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService'] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespace<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespace<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespace<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314CreateServiceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.CreateService',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreateService',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314CreateServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314CreateServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314CreateService<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314CreateServiceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314DeleteNamespaceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314DeleteNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314DeleteNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314DeleteNamespace<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314DeleteNamespaceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314DeleteServiceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314DeleteServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314DeleteServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314DeleteService<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314DeleteServiceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314DeregisterInstanceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314DeregisterInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314DeregisterInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314DeregisterInstance<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314DeregisterInstanceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314DiscoverInstancesMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314DiscoverInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314DiscoverInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314DiscoverInstances<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314DiscoverInstancesMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314GetInstanceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314GetInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314GetInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314GetInstance<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetRoute53AutoNamingV20170314GetInstanceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatus<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314GetNamespaceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314GetNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314GetNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314GetNamespace<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace']['$post']
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
    const mutationDefaults = getPostXAmzTargetRoute53AutoNamingV20170314GetNamespaceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314GetOperationMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314GetOperationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314GetOperationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314GetOperation<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation']['$post']
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
    const mutationDefaults = getPostXAmzTargetRoute53AutoNamingV20170314GetOperationMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314GetServiceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.GetService',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetService',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314GetServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetService']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetService']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314GetServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.GetService'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314GetService<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetService']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetService']['$post']
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
    const mutationDefaults = getPostXAmzTargetRoute53AutoNamingV20170314GetServiceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314ListInstancesMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314ListInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314ListInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314ListInstances<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314ListInstancesMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314ListNamespacesMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314ListNamespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314ListNamespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314ListNamespaces<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314ListNamespacesMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314ListOperationsMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314ListOperationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314ListOperationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314ListOperations<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314ListOperationsMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314ListServicesMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.ListServices',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListServices',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314ListServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314ListServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314ListServices<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices']['$post']
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
    const mutationDefaults = getPostXAmzTargetRoute53AutoNamingV20170314ListServicesMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314ListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314RegisterInstanceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314RegisterInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314RegisterInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314RegisterInstance<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314RegisterInstanceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314TagResourceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.TagResource',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314TagResource<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource']['$post']
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
    const mutationDefaults = getPostXAmzTargetRoute53AutoNamingV20170314TagResourceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314UntagResource<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314UntagResourceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespace<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatus<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespace<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespace<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceMutationOptions<
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

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdateServiceMutationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdateServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53AutoNamingV20170314UpdateServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53AutoNamingV20170314UpdateService<
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
                    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService']['$post']
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
      getPostXAmzTargetRoute53AutoNamingV20170314UpdateServiceMutationOptions<
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

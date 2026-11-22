import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAppRunnerAssociateCustomDomainKey() {
  return ['#X-Amz-Target=AppRunner.AssociateCustomDomain'] as const
}

export function getXAmzTargetAppRunnerCreateAutoScalingConfigurationKey() {
  return ['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration'] as const
}

export function getXAmzTargetAppRunnerCreateConnectionKey() {
  return ['#X-Amz-Target=AppRunner.CreateConnection'] as const
}

export function getXAmzTargetAppRunnerCreateObservabilityConfigurationKey() {
  return ['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration'] as const
}

export function getXAmzTargetAppRunnerCreateServiceKey() {
  return ['#X-Amz-Target=AppRunner.CreateService'] as const
}

export function getXAmzTargetAppRunnerCreateVpcConnectorKey() {
  return ['#X-Amz-Target=AppRunner.CreateVpcConnector'] as const
}

export function getXAmzTargetAppRunnerCreateVpcIngressConnectionKey() {
  return ['#X-Amz-Target=AppRunner.CreateVpcIngressConnection'] as const
}

export function getXAmzTargetAppRunnerDeleteAutoScalingConfigurationKey() {
  return ['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration'] as const
}

export function getXAmzTargetAppRunnerDeleteConnectionKey() {
  return ['#X-Amz-Target=AppRunner.DeleteConnection'] as const
}

export function getXAmzTargetAppRunnerDeleteObservabilityConfigurationKey() {
  return ['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration'] as const
}

export function getXAmzTargetAppRunnerDeleteServiceKey() {
  return ['#X-Amz-Target=AppRunner.DeleteService'] as const
}

export function getXAmzTargetAppRunnerDeleteVpcConnectorKey() {
  return ['#X-Amz-Target=AppRunner.DeleteVpcConnector'] as const
}

export function getXAmzTargetAppRunnerDeleteVpcIngressConnectionKey() {
  return ['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection'] as const
}

export function getXAmzTargetAppRunnerDescribeAutoScalingConfigurationKey() {
  return ['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration'] as const
}

export function getXAmzTargetAppRunnerDescribeCustomDomainsKey() {
  return ['#X-Amz-Target=AppRunner.DescribeCustomDomains'] as const
}

export function getXAmzTargetAppRunnerDescribeObservabilityConfigurationKey() {
  return ['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration'] as const
}

export function getXAmzTargetAppRunnerDescribeServiceKey() {
  return ['#X-Amz-Target=AppRunner.DescribeService'] as const
}

export function getXAmzTargetAppRunnerDescribeVpcConnectorKey() {
  return ['#X-Amz-Target=AppRunner.DescribeVpcConnector'] as const
}

export function getXAmzTargetAppRunnerDescribeVpcIngressConnectionKey() {
  return ['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection'] as const
}

export function getXAmzTargetAppRunnerDisassociateCustomDomainKey() {
  return ['#X-Amz-Target=AppRunner.DisassociateCustomDomain'] as const
}

export function getXAmzTargetAppRunnerListAutoScalingConfigurationsKey() {
  return ['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations'] as const
}

export function getXAmzTargetAppRunnerListConnectionsKey() {
  return ['#X-Amz-Target=AppRunner.ListConnections'] as const
}

export function getXAmzTargetAppRunnerListObservabilityConfigurationsKey() {
  return ['#X-Amz-Target=AppRunner.ListObservabilityConfigurations'] as const
}

export function getXAmzTargetAppRunnerListOperationsKey() {
  return ['#X-Amz-Target=AppRunner.ListOperations'] as const
}

export function getXAmzTargetAppRunnerListServicesKey() {
  return ['#X-Amz-Target=AppRunner.ListServices'] as const
}

export function getXAmzTargetAppRunnerListTagsForResourceKey() {
  return ['#X-Amz-Target=AppRunner.ListTagsForResource'] as const
}

export function getXAmzTargetAppRunnerListVpcConnectorsKey() {
  return ['#X-Amz-Target=AppRunner.ListVpcConnectors'] as const
}

export function getXAmzTargetAppRunnerListVpcIngressConnectionsKey() {
  return ['#X-Amz-Target=AppRunner.ListVpcIngressConnections'] as const
}

export function getXAmzTargetAppRunnerPauseServiceKey() {
  return ['#X-Amz-Target=AppRunner.PauseService'] as const
}

export function getXAmzTargetAppRunnerResumeServiceKey() {
  return ['#X-Amz-Target=AppRunner.ResumeService'] as const
}

export function getXAmzTargetAppRunnerStartDeploymentKey() {
  return ['#X-Amz-Target=AppRunner.StartDeployment'] as const
}

export function getXAmzTargetAppRunnerTagResourceKey() {
  return ['#X-Amz-Target=AppRunner.TagResource'] as const
}

export function getXAmzTargetAppRunnerUntagResourceKey() {
  return ['#X-Amz-Target=AppRunner.UntagResource'] as const
}

export function getXAmzTargetAppRunnerUpdateServiceKey() {
  return ['#X-Amz-Target=AppRunner.UpdateService'] as const
}

export function getXAmzTargetAppRunnerUpdateVpcIngressConnectionKey() {
  return ['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection'] as const
}

export function getPostXAmzTargetAppRunnerAssociateCustomDomainMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.AssociateCustomDomain',
    '/#X-Amz-Target=AppRunner.AssociateCustomDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerAssociateCustomDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.AssociateCustomDomain']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.AssociateCustomDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerAssociateCustomDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.AssociateCustomDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.AssociateCustomDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerAssociateCustomDomain<
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
                    (typeof client)['#X-Amz-Target=AppRunner.AssociateCustomDomain']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.AssociateCustomDomain']['$post']
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
    const mutationDefaults = getPostXAmzTargetAppRunnerAssociateCustomDomainMutationOptions<
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

export function getPostXAmzTargetAppRunnerCreateAutoScalingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration',
    '/#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerCreateAutoScalingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerCreateAutoScalingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerCreateAutoScalingConfiguration<
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
                    (typeof client)['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration']['$post']
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
      getPostXAmzTargetAppRunnerCreateAutoScalingConfigurationMutationOptions<
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

export function getPostXAmzTargetAppRunnerCreateConnectionMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.CreateConnection',
    '/#X-Amz-Target=AppRunner.CreateConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerCreateConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.CreateConnection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerCreateConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateConnection']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.CreateConnection'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerCreateConnection<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.CreateConnection']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateConnection']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerCreateConnectionMutationOptions<
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

export function getPostXAmzTargetAppRunnerCreateObservabilityConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.CreateObservabilityConfiguration',
    '/#X-Amz-Target=AppRunner.CreateObservabilityConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerCreateObservabilityConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerCreateObservabilityConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerCreateObservabilityConfiguration<
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
                    (typeof client)['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration']['$post']
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
      getPostXAmzTargetAppRunnerCreateObservabilityConfigurationMutationOptions<
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

export function getPostXAmzTargetAppRunnerCreateServiceMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.CreateService',
    '/#X-Amz-Target=AppRunner.CreateService',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerCreateServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.CreateService']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateService']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerCreateServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateService']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.CreateService'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerCreateService<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.CreateService']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateService']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerCreateServiceMutationOptions<
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

export function getPostXAmzTargetAppRunnerCreateVpcConnectorMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.CreateVpcConnector',
    '/#X-Amz-Target=AppRunner.CreateVpcConnector',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerCreateVpcConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.CreateVpcConnector']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateVpcConnector']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerCreateVpcConnectorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.CreateVpcConnector']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.CreateVpcConnector'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerCreateVpcConnector<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.CreateVpcConnector']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateVpcConnector']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerCreateVpcConnectorMutationOptions<
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

export function getPostXAmzTargetAppRunnerCreateVpcIngressConnectionMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.CreateVpcIngressConnection',
    '/#X-Amz-Target=AppRunner.CreateVpcIngressConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerCreateVpcIngressConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.CreateVpcIngressConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.CreateVpcIngressConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerCreateVpcIngressConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.CreateVpcIngressConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.CreateVpcIngressConnection'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerCreateVpcIngressConnection<
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
                    (typeof client)['#X-Amz-Target=AppRunner.CreateVpcIngressConnection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.CreateVpcIngressConnection']['$post']
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
    const mutationDefaults = getPostXAmzTargetAppRunnerCreateVpcIngressConnectionMutationOptions<
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

export function getPostXAmzTargetAppRunnerDeleteAutoScalingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration',
    '/#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerDeleteAutoScalingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerDeleteAutoScalingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerDeleteAutoScalingConfiguration<
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
                    (typeof client)['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration']['$post']
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
      getPostXAmzTargetAppRunnerDeleteAutoScalingConfigurationMutationOptions<
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

export function getPostXAmzTargetAppRunnerDeleteConnectionMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.DeleteConnection',
    '/#X-Amz-Target=AppRunner.DeleteConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerDeleteConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DeleteConnection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerDeleteConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteConnection']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.DeleteConnection'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerDeleteConnection<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DeleteConnection']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteConnection']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerDeleteConnectionMutationOptions<
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

export function getPostXAmzTargetAppRunnerDeleteObservabilityConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration',
    '/#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerDeleteObservabilityConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerDeleteObservabilityConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerDeleteObservabilityConfiguration<
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
                    (typeof client)['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration']['$post']
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
      getPostXAmzTargetAppRunnerDeleteObservabilityConfigurationMutationOptions<
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

export function getPostXAmzTargetAppRunnerDeleteServiceMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.DeleteService',
    '/#X-Amz-Target=AppRunner.DeleteService',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerDeleteServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DeleteService']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteService']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerDeleteServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteService']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.DeleteService'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerDeleteService<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DeleteService']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteService']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerDeleteServiceMutationOptions<
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

export function getPostXAmzTargetAppRunnerDeleteVpcConnectorMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.DeleteVpcConnector',
    '/#X-Amz-Target=AppRunner.DeleteVpcConnector',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerDeleteVpcConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DeleteVpcConnector']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteVpcConnector']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerDeleteVpcConnectorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.DeleteVpcConnector']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.DeleteVpcConnector'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerDeleteVpcConnector<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DeleteVpcConnector']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteVpcConnector']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerDeleteVpcConnectorMutationOptions<
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

export function getPostXAmzTargetAppRunnerDeleteVpcIngressConnectionMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.DeleteVpcIngressConnection',
    '/#X-Amz-Target=AppRunner.DeleteVpcIngressConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerDeleteVpcIngressConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerDeleteVpcIngressConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerDeleteVpcIngressConnection<
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
                    (typeof client)['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection']['$post']
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
    const mutationDefaults = getPostXAmzTargetAppRunnerDeleteVpcIngressConnectionMutationOptions<
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

export function getPostXAmzTargetAppRunnerDescribeAutoScalingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration',
    '/#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerDescribeAutoScalingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerDescribeAutoScalingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerDescribeAutoScalingConfiguration<
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
                    (typeof client)['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration']['$post']
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
      getPostXAmzTargetAppRunnerDescribeAutoScalingConfigurationMutationOptions<
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

export function getPostXAmzTargetAppRunnerDescribeCustomDomainsMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.DescribeCustomDomains',
    '/#X-Amz-Target=AppRunner.DescribeCustomDomains',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerDescribeCustomDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DescribeCustomDomains']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DescribeCustomDomains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerDescribeCustomDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.DescribeCustomDomains']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.DescribeCustomDomains'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerDescribeCustomDomains<
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
                    (typeof client)['#X-Amz-Target=AppRunner.DescribeCustomDomains']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.DescribeCustomDomains']['$post']
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
    const mutationDefaults = getPostXAmzTargetAppRunnerDescribeCustomDomainsMutationOptions<
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

export function getPostXAmzTargetAppRunnerDescribeObservabilityConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration',
    '/#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerDescribeObservabilityConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerDescribeObservabilityConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerDescribeObservabilityConfiguration<
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
                    (typeof client)['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration']['$post']
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
      getPostXAmzTargetAppRunnerDescribeObservabilityConfigurationMutationOptions<
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

export function getPostXAmzTargetAppRunnerDescribeServiceMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.DescribeService',
    '/#X-Amz-Target=AppRunner.DescribeService',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerDescribeServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DescribeService']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DescribeService']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerDescribeServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DescribeService']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.DescribeService'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerDescribeService<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DescribeService']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DescribeService']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerDescribeServiceMutationOptions<
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

export function getPostXAmzTargetAppRunnerDescribeVpcConnectorMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.DescribeVpcConnector',
    '/#X-Amz-Target=AppRunner.DescribeVpcConnector',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerDescribeVpcConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DescribeVpcConnector']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DescribeVpcConnector']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerDescribeVpcConnectorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.DescribeVpcConnector']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.DescribeVpcConnector'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerDescribeVpcConnector<
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
                    (typeof client)['#X-Amz-Target=AppRunner.DescribeVpcConnector']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.DescribeVpcConnector']['$post']
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
    const mutationDefaults = getPostXAmzTargetAppRunnerDescribeVpcConnectorMutationOptions<
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

export function getPostXAmzTargetAppRunnerDescribeVpcIngressConnectionMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.DescribeVpcIngressConnection',
    '/#X-Amz-Target=AppRunner.DescribeVpcIngressConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerDescribeVpcIngressConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerDescribeVpcIngressConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerDescribeVpcIngressConnection<
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
                    (typeof client)['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection']['$post']
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
    const mutationDefaults = getPostXAmzTargetAppRunnerDescribeVpcIngressConnectionMutationOptions<
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

export function getPostXAmzTargetAppRunnerDisassociateCustomDomainMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.DisassociateCustomDomain',
    '/#X-Amz-Target=AppRunner.DisassociateCustomDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerDisassociateCustomDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DisassociateCustomDomain']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DisassociateCustomDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerDisassociateCustomDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.DisassociateCustomDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.DisassociateCustomDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerDisassociateCustomDomain<
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
                    (typeof client)['#X-Amz-Target=AppRunner.DisassociateCustomDomain']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.DisassociateCustomDomain']['$post']
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
    const mutationDefaults = getPostXAmzTargetAppRunnerDisassociateCustomDomainMutationOptions<
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

export function getPostXAmzTargetAppRunnerListAutoScalingConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.ListAutoScalingConfigurations',
    '/#X-Amz-Target=AppRunner.ListAutoScalingConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerListAutoScalingConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerListAutoScalingConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerListAutoScalingConfigurations<
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
                    (typeof client)['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations']['$post']
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
    const mutationDefaults = getPostXAmzTargetAppRunnerListAutoScalingConfigurationsMutationOptions<
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

export function getPostXAmzTargetAppRunnerListConnectionsMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.ListConnections',
    '/#X-Amz-Target=AppRunner.ListConnections',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerListConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListConnections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListConnections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerListConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListConnections']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.ListConnections'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerListConnections<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListConnections']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListConnections']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerListConnectionsMutationOptions<
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

export function getPostXAmzTargetAppRunnerListObservabilityConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.ListObservabilityConfigurations',
    '/#X-Amz-Target=AppRunner.ListObservabilityConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerListObservabilityConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.ListObservabilityConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.ListObservabilityConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerListObservabilityConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.ListObservabilityConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.ListObservabilityConfigurations'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerListObservabilityConfigurations<
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
                    (typeof client)['#X-Amz-Target=AppRunner.ListObservabilityConfigurations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.ListObservabilityConfigurations']['$post']
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
      getPostXAmzTargetAppRunnerListObservabilityConfigurationsMutationOptions<
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

export function getPostXAmzTargetAppRunnerListOperationsMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.ListOperations',
    '/#X-Amz-Target=AppRunner.ListOperations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerListOperationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListOperations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListOperations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerListOperationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListOperations']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.ListOperations'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerListOperations<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListOperations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListOperations']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerListOperationsMutationOptions<
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

export function getPostXAmzTargetAppRunnerListServicesMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.ListServices',
    '/#X-Amz-Target=AppRunner.ListServices',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerListServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListServices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListServices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerListServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListServices']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.ListServices'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerListServices<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListServices']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListServices']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerListServicesMutationOptions<
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

export function getPostXAmzTargetAppRunnerListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.ListTagsForResource',
    '/#X-Amz-Target=AppRunner.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListTagsForResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=AppRunner.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListTagsForResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAppRunnerListVpcConnectorsMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.ListVpcConnectors',
    '/#X-Amz-Target=AppRunner.ListVpcConnectors',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerListVpcConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListVpcConnectors']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListVpcConnectors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerListVpcConnectorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListVpcConnectors']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.ListVpcConnectors'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerListVpcConnectors<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListVpcConnectors']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListVpcConnectors']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerListVpcConnectorsMutationOptions<
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

export function getPostXAmzTargetAppRunnerListVpcIngressConnectionsMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.ListVpcIngressConnections',
    '/#X-Amz-Target=AppRunner.ListVpcIngressConnections',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerListVpcIngressConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.ListVpcIngressConnections']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListVpcIngressConnections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerListVpcIngressConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.ListVpcIngressConnections']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.ListVpcIngressConnections'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerListVpcIngressConnections<
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
                    (typeof client)['#X-Amz-Target=AppRunner.ListVpcIngressConnections']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.ListVpcIngressConnections']['$post']
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
    const mutationDefaults = getPostXAmzTargetAppRunnerListVpcIngressConnectionsMutationOptions<
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

export function getPostXAmzTargetAppRunnerPauseServiceMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.PauseService',
    '/#X-Amz-Target=AppRunner.PauseService',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerPauseServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.PauseService']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.PauseService']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerPauseServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.PauseService']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.PauseService'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerPauseService<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.PauseService']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.PauseService']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerPauseServiceMutationOptions<
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

export function getPostXAmzTargetAppRunnerResumeServiceMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.ResumeService',
    '/#X-Amz-Target=AppRunner.ResumeService',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerResumeServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ResumeService']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ResumeService']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerResumeServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ResumeService']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.ResumeService'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerResumeService<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ResumeService']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ResumeService']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerResumeServiceMutationOptions<
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

export function getPostXAmzTargetAppRunnerStartDeploymentMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.StartDeployment',
    '/#X-Amz-Target=AppRunner.StartDeployment',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerStartDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.StartDeployment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.StartDeployment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerStartDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.StartDeployment']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.StartDeployment'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerStartDeployment<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.StartDeployment']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.StartDeployment']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerStartDeploymentMutationOptions<
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

export function getPostXAmzTargetAppRunnerTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.TagResource',
    '/#X-Amz-Target=AppRunner.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.TagResource'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerTagResource<
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
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.TagResource']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.TagResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerTagResourceMutationOptions<
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

export function getPostXAmzTargetAppRunnerUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.UntagResource',
    '/#X-Amz-Target=AppRunner.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.UntagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.UntagResource'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerUntagResource<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.UntagResource']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.UntagResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerUntagResourceMutationOptions<
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

export function getPostXAmzTargetAppRunnerUpdateServiceMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.UpdateService',
    '/#X-Amz-Target=AppRunner.UpdateService',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerUpdateServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.UpdateService']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.UpdateService']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerUpdateServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.UpdateService']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AppRunner.UpdateService'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAppRunnerUpdateService<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AppRunner.UpdateService']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.UpdateService']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAppRunnerUpdateServiceMutationOptions<
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

export function getPostXAmzTargetAppRunnerUpdateVpcIngressConnectionMutationKey() {
  return [
    '#X-Amz-Target=AppRunner.UpdateVpcIngressConnection',
    '/#X-Amz-Target=AppRunner.UpdateVpcIngressConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAppRunnerUpdateVpcIngressConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAppRunnerUpdateVpcIngressConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAppRunnerUpdateVpcIngressConnection<
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
                    (typeof client)['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection']['$post']
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
    const mutationDefaults = getPostXAmzTargetAppRunnerUpdateVpcIngressConnectionMutationOptions<
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

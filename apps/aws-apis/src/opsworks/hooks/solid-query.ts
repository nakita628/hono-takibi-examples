import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetOpsWorks_20130218AssignInstanceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.AssignInstance'] as const
}

export function getXAmzTargetOpsWorks_20130218AssignVolumeKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.AssignVolume'] as const
}

export function getXAmzTargetOpsWorks_20130218AssociateElasticIpKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp'] as const
}

export function getXAmzTargetOpsWorks_20130218AttachElasticLoadBalancerKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer'] as const
}

export function getXAmzTargetOpsWorks_20130218CloneStackKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.CloneStack'] as const
}

export function getXAmzTargetOpsWorks_20130218CreateAppKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.CreateApp'] as const
}

export function getXAmzTargetOpsWorks_20130218CreateDeploymentKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.CreateDeployment'] as const
}

export function getXAmzTargetOpsWorks_20130218CreateInstanceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.CreateInstance'] as const
}

export function getXAmzTargetOpsWorks_20130218CreateLayerKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.CreateLayer'] as const
}

export function getXAmzTargetOpsWorks_20130218CreateStackKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.CreateStack'] as const
}

export function getXAmzTargetOpsWorks_20130218CreateUserProfileKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.CreateUserProfile'] as const
}

export function getXAmzTargetOpsWorks_20130218DeleteAppKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DeleteApp'] as const
}

export function getXAmzTargetOpsWorks_20130218DeleteInstanceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DeleteInstance'] as const
}

export function getXAmzTargetOpsWorks_20130218DeleteLayerKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DeleteLayer'] as const
}

export function getXAmzTargetOpsWorks_20130218DeleteStackKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DeleteStack'] as const
}

export function getXAmzTargetOpsWorks_20130218DeleteUserProfileKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile'] as const
}

export function getXAmzTargetOpsWorks_20130218DeregisterEcsClusterKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster'] as const
}

export function getXAmzTargetOpsWorks_20130218DeregisterElasticIpKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp'] as const
}

export function getXAmzTargetOpsWorks_20130218DeregisterInstanceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DeregisterInstance'] as const
}

export function getXAmzTargetOpsWorks_20130218DeregisterRdsDbInstanceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance'] as const
}

export function getXAmzTargetOpsWorks_20130218DeregisterVolumeKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DeregisterVolume'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeAgentVersionsKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeAppsKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeApps'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeCommandsKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeCommands'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeDeploymentsKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeDeployments'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeEcsClustersKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeElasticIpsKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeElasticLoadBalancersKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeInstancesKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeInstances'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeLayersKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeLayers'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeLoadBasedAutoScalingKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeMyUserProfileKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeOperatingSystemsKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribePermissionsKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribePermissions'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeRaidArraysKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeRdsDbInstancesKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeServiceErrorsKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeStackProvisioningParametersKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeStackSummaryKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeStacksKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeStacks'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeTimeBasedAutoScalingKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeUserProfilesKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles'] as const
}

export function getXAmzTargetOpsWorks_20130218DescribeVolumesKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DescribeVolumes'] as const
}

export function getXAmzTargetOpsWorks_20130218DetachElasticLoadBalancerKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer'] as const
}

export function getXAmzTargetOpsWorks_20130218DisassociateElasticIpKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp'] as const
}

export function getXAmzTargetOpsWorks_20130218GetHostnameSuggestionKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion'] as const
}

export function getXAmzTargetOpsWorks_20130218GrantAccessKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.GrantAccess'] as const
}

export function getXAmzTargetOpsWorks_20130218ListTagsKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.ListTags'] as const
}

export function getXAmzTargetOpsWorks_20130218RebootInstanceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.RebootInstance'] as const
}

export function getXAmzTargetOpsWorks_20130218RegisterEcsClusterKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster'] as const
}

export function getXAmzTargetOpsWorks_20130218RegisterElasticIpKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp'] as const
}

export function getXAmzTargetOpsWorks_20130218RegisterInstanceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.RegisterInstance'] as const
}

export function getXAmzTargetOpsWorks_20130218RegisterRdsDbInstanceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance'] as const
}

export function getXAmzTargetOpsWorks_20130218RegisterVolumeKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.RegisterVolume'] as const
}

export function getXAmzTargetOpsWorks_20130218SetLoadBasedAutoScalingKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling'] as const
}

export function getXAmzTargetOpsWorks_20130218SetPermissionKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.SetPermission'] as const
}

export function getXAmzTargetOpsWorks_20130218SetTimeBasedAutoScalingKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling'] as const
}

export function getXAmzTargetOpsWorks_20130218StartInstanceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.StartInstance'] as const
}

export function getXAmzTargetOpsWorks_20130218StartStackKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.StartStack'] as const
}

export function getXAmzTargetOpsWorks_20130218StopInstanceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.StopInstance'] as const
}

export function getXAmzTargetOpsWorks_20130218StopStackKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.StopStack'] as const
}

export function getXAmzTargetOpsWorks_20130218TagResourceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.TagResource'] as const
}

export function getXAmzTargetOpsWorks_20130218UnassignInstanceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.UnassignInstance'] as const
}

export function getXAmzTargetOpsWorks_20130218UnassignVolumeKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.UnassignVolume'] as const
}

export function getXAmzTargetOpsWorks_20130218UntagResourceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.UntagResource'] as const
}

export function getXAmzTargetOpsWorks_20130218UpdateAppKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.UpdateApp'] as const
}

export function getXAmzTargetOpsWorks_20130218UpdateElasticIpKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp'] as const
}

export function getXAmzTargetOpsWorks_20130218UpdateInstanceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.UpdateInstance'] as const
}

export function getXAmzTargetOpsWorks_20130218UpdateLayerKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.UpdateLayer'] as const
}

export function getXAmzTargetOpsWorks_20130218UpdateMyUserProfileKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile'] as const
}

export function getXAmzTargetOpsWorks_20130218UpdateRdsDbInstanceKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance'] as const
}

export function getXAmzTargetOpsWorks_20130218UpdateStackKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.UpdateStack'] as const
}

export function getXAmzTargetOpsWorks_20130218UpdateUserProfileKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile'] as const
}

export function getXAmzTargetOpsWorks_20130218UpdateVolumeKey() {
  return ['#X-Amz-Target=OpsWorks_20130218.UpdateVolume'] as const
}

export function getPostXAmzTargetOpsWorks20130218AssignInstanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.AssignInstance',
    '/#X-Amz-Target=OpsWorks_20130218.AssignInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218AssignInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218AssignInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.AssignInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218AssignInstance<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218AssignInstanceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218AssignVolumeMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.AssignVolume',
    '/#X-Amz-Target=OpsWorks_20130218.AssignVolume',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218AssignVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignVolume']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignVolume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218AssignVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignVolume']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.AssignVolume'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218AssignVolume<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignVolume']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignVolume']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218AssignVolumeMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218AssociateElasticIpMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp',
    '/#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218AssociateElasticIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218AssociateElasticIpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218AssociateElasticIp<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218AssociateElasticIpMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218AttachElasticLoadBalancerMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer',
    '/#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218AttachElasticLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218AttachElasticLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218AttachElasticLoadBalancer<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer']['$post']
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
      getPostXAmzTargetOpsWorks20130218AttachElasticLoadBalancerMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218CloneStackMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CloneStack',
    '/#X-Amz-Target=OpsWorks_20130218.CloneStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218CloneStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CloneStack']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CloneStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218CloneStackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.CloneStack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.CloneStack'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218CloneStack<
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
                  ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CloneStack']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CloneStack']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218CloneStackMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218CreateAppMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CreateApp',
    '/#X-Amz-Target=OpsWorks_20130218.CreateApp',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218CreateAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateApp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateApp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218CreateAppMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateApp']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=OpsWorks_20130218.CreateApp'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218CreateApp<
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
                  ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateApp']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateApp']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218CreateAppMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218CreateDeploymentMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CreateDeployment',
    '/#X-Amz-Target=OpsWorks_20130218.CreateDeployment',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218CreateDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateDeployment']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateDeployment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218CreateDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateDeployment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.CreateDeployment'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218CreateDeployment<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateDeployment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateDeployment']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218CreateDeploymentMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218CreateInstanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CreateInstance',
    '/#X-Amz-Target=OpsWorks_20130218.CreateInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218CreateInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218CreateInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.CreateInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218CreateInstance<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218CreateInstanceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218CreateLayerMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CreateLayer',
    '/#X-Amz-Target=OpsWorks_20130218.CreateLayer',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218CreateLayerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateLayer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateLayer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218CreateLayerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateLayer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.CreateLayer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218CreateLayer<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateLayer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateLayer']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218CreateLayerMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218CreateStackMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CreateStack',
    '/#X-Amz-Target=OpsWorks_20130218.CreateStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218CreateStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateStack']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218CreateStackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateStack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.CreateStack'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218CreateStack<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateStack']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateStack']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218CreateStackMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218CreateUserProfileMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CreateUserProfile',
    '/#X-Amz-Target=OpsWorks_20130218.CreateUserProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218CreateUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateUserProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateUserProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218CreateUserProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateUserProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.CreateUserProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218CreateUserProfile<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateUserProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateUserProfile']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218CreateUserProfileMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DeleteAppMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeleteApp',
    '/#X-Amz-Target=OpsWorks_20130218.DeleteApp',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DeleteAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteApp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteApp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DeleteAppMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteApp']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=OpsWorks_20130218.DeleteApp'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DeleteApp<
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
                  ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteApp']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteApp']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DeleteAppMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DeleteInstanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeleteInstance',
    '/#X-Amz-Target=OpsWorks_20130218.DeleteInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DeleteInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DeleteInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DeleteInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DeleteInstance<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DeleteInstanceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DeleteLayerMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeleteLayer',
    '/#X-Amz-Target=OpsWorks_20130218.DeleteLayer',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DeleteLayerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteLayer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteLayer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DeleteLayerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteLayer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DeleteLayer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DeleteLayer<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteLayer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteLayer']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DeleteLayerMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DeleteStackMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeleteStack',
    '/#X-Amz-Target=OpsWorks_20130218.DeleteStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DeleteStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteStack']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DeleteStackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteStack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DeleteStack'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DeleteStack<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteStack']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteStack']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DeleteStackMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DeleteUserProfileMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile',
    '/#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DeleteUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DeleteUserProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DeleteUserProfile<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DeleteUserProfileMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DeregisterEcsClusterMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster',
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DeregisterEcsClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DeregisterEcsClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DeregisterEcsCluster<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DeregisterEcsClusterMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DeregisterElasticIpMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp',
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DeregisterElasticIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DeregisterElasticIpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DeregisterElasticIp<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DeregisterElasticIpMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DeregisterInstanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeregisterInstance',
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DeregisterInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DeregisterInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DeregisterInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DeregisterInstance<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DeregisterInstanceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DeregisterRdsDbInstanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance',
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DeregisterRdsDbInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DeregisterRdsDbInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DeregisterRdsDbInstance<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance']['$post']
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
      getPostXAmzTargetOpsWorks20130218DeregisterRdsDbInstanceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DeregisterVolumeMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeregisterVolume',
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterVolume',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DeregisterVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterVolume']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterVolume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DeregisterVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterVolume']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DeregisterVolume'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DeregisterVolume<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterVolume']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterVolume']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DeregisterVolumeMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeAgentVersionsMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeAgentVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeAgentVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeAgentVersions<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeAgentVersionsMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeAppsMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeApps',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeApps',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeApps']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeApps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeApps']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeApps'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeApps<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeApps']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeApps']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeAppsMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeCommandsMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeCommands',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeCommands',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeCommandsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeCommands']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeCommands']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeCommandsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeCommands']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeCommands'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeCommands<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeCommands']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeCommands']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeCommandsMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeDeploymentsMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeDeployments',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeDeployments',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeDeployments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeDeployments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeDeployments']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeDeployments'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeDeployments<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeDeployments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeDeployments']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeDeploymentsMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeEcsClustersMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeEcsClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeEcsClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeEcsClusters<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeEcsClustersMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeElasticIpsMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeElasticIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeElasticIpsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeElasticIps<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeElasticIpsMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeElasticLoadBalancersMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeElasticLoadBalancersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeElasticLoadBalancersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeElasticLoadBalancers<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers']['$post']
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
      getPostXAmzTargetOpsWorks20130218DescribeElasticLoadBalancersMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeInstancesMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeInstances',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeInstances'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeInstances<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeInstances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeInstances']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeInstancesMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeLayersMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeLayers',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeLayers',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeLayersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLayers']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLayers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeLayersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLayers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeLayers'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeLayers<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLayers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLayers']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeLayersMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeLoadBasedAutoScaling<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling']['$post']
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
      getPostXAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeMyUserProfileMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeMyUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeMyUserProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeMyUserProfile<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeMyUserProfileMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeOperatingSystemsMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeOperatingSystemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeOperatingSystemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeOperatingSystems<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems']['$post']
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
      getPostXAmzTargetOpsWorks20130218DescribeOperatingSystemsMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribePermissionsMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribePermissions',
    '/#X-Amz-Target=OpsWorks_20130218.DescribePermissions',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribePermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribePermissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribePermissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribePermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribePermissions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribePermissions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribePermissions<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribePermissions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribePermissions']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribePermissionsMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeRaidArraysMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeRaidArraysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeRaidArraysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeRaidArrays<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeRaidArraysMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeRdsDbInstancesMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeRdsDbInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeRdsDbInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeRdsDbInstances<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeRdsDbInstancesMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeServiceErrorsMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeServiceErrorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeServiceErrorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeServiceErrors<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeServiceErrorsMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeStackProvisioningParametersMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeStackProvisioningParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeStackProvisioningParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeStackProvisioningParameters<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters']['$post']
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
      getPostXAmzTargetOpsWorks20130218DescribeStackProvisioningParametersMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeStackSummaryMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeStackSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeStackSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeStackSummary<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeStackSummaryMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeStacksMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeStacks',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeStacks',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeStacksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStacks']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStacks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeStacksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStacks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeStacks'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeStacks<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStacks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStacks']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeStacksMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeTimeBasedAutoScaling<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling']['$post']
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
      getPostXAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeUserProfilesMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeUserProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeUserProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeUserProfiles<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeUserProfilesMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DescribeVolumesMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeVolumes',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeVolumes',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DescribeVolumesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeVolumes']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeVolumes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DescribeVolumesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeVolumes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DescribeVolumes'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DescribeVolumes<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeVolumes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeVolumes']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DescribeVolumesMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DetachElasticLoadBalancerMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer',
    '/#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DetachElasticLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DetachElasticLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DetachElasticLoadBalancer<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer']['$post']
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
      getPostXAmzTargetOpsWorks20130218DetachElasticLoadBalancerMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218DisassociateElasticIpMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp',
    '/#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218DisassociateElasticIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218DisassociateElasticIpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218DisassociateElasticIp<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218DisassociateElasticIpMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218GetHostnameSuggestionMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion',
    '/#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218GetHostnameSuggestionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218GetHostnameSuggestionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218GetHostnameSuggestion<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218GetHostnameSuggestionMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218GrantAccessMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.GrantAccess',
    '/#X-Amz-Target=OpsWorks_20130218.GrantAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218GrantAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.GrantAccess']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.GrantAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218GrantAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.GrantAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.GrantAccess'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218GrantAccess<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.GrantAccess']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.GrantAccess']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218GrantAccessMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218ListTagsMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.ListTags',
    '/#X-Amz-Target=OpsWorks_20130218.ListTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218ListTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.ListTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.ListTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218ListTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.ListTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=OpsWorks_20130218.ListTags'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218ListTags<
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
                  ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.ListTags']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.ListTags']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218ListTagsMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218RebootInstanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.RebootInstance',
    '/#X-Amz-Target=OpsWorks_20130218.RebootInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218RebootInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.RebootInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.RebootInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218RebootInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.RebootInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.RebootInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218RebootInstance<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.RebootInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.RebootInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218RebootInstanceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218RegisterEcsClusterMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster',
    '/#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218RegisterEcsClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218RegisterEcsClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218RegisterEcsCluster<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218RegisterEcsClusterMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218RegisterElasticIpMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp',
    '/#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218RegisterElasticIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218RegisterElasticIpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218RegisterElasticIp<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218RegisterElasticIpMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218RegisterInstanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.RegisterInstance',
    '/#X-Amz-Target=OpsWorks_20130218.RegisterInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218RegisterInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218RegisterInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.RegisterInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218RegisterInstance<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218RegisterInstanceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218RegisterRdsDbInstanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance',
    '/#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218RegisterRdsDbInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218RegisterRdsDbInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218RegisterRdsDbInstance<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218RegisterRdsDbInstanceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218RegisterVolumeMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.RegisterVolume',
    '/#X-Amz-Target=OpsWorks_20130218.RegisterVolume',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218RegisterVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterVolume']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterVolume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218RegisterVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterVolume']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.RegisterVolume'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218RegisterVolume<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterVolume']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterVolume']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218RegisterVolumeMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218SetLoadBasedAutoScalingMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling',
    '/#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218SetLoadBasedAutoScalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218SetLoadBasedAutoScalingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218SetLoadBasedAutoScaling<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling']['$post']
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
      getPostXAmzTargetOpsWorks20130218SetLoadBasedAutoScalingMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218SetPermissionMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.SetPermission',
    '/#X-Amz-Target=OpsWorks_20130218.SetPermission',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218SetPermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.SetPermission']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.SetPermission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218SetPermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetPermission']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.SetPermission'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218SetPermission<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetPermission']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetPermission']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218SetPermissionMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218SetTimeBasedAutoScalingMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling',
    '/#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218SetTimeBasedAutoScalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218SetTimeBasedAutoScalingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218SetTimeBasedAutoScaling<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling']['$post']
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
      getPostXAmzTargetOpsWorks20130218SetTimeBasedAutoScalingMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218StartInstanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.StartInstance',
    '/#X-Amz-Target=OpsWorks_20130218.StartInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218StartInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StartInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StartInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218StartInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.StartInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.StartInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218StartInstance<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.StartInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.StartInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218StartInstanceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218StartStackMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.StartStack',
    '/#X-Amz-Target=OpsWorks_20130218.StartStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218StartStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StartStack']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StartStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218StartStackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.StartStack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.StartStack'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218StartStack<
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
                  ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StartStack']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StartStack']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218StartStackMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218StopInstanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.StopInstance',
    '/#X-Amz-Target=OpsWorks_20130218.StopInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218StopInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StopInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StopInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218StopInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.StopInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.StopInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218StopInstance<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.StopInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.StopInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218StopInstanceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218StopStackMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.StopStack',
    '/#X-Amz-Target=OpsWorks_20130218.StopStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218StopStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StopStack']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StopStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218StopStackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StopStack']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=OpsWorks_20130218.StopStack'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218StopStack<
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
                  ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StopStack']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StopStack']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218StopStackMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218TagResourceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.TagResource',
    '/#X-Amz-Target=OpsWorks_20130218.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.TagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218TagResource<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.TagResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218TagResourceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218UnassignInstanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UnassignInstance',
    '/#X-Amz-Target=OpsWorks_20130218.UnassignInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218UnassignInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218UnassignInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.UnassignInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218UnassignInstance<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218UnassignInstanceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218UnassignVolumeMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UnassignVolume',
    '/#X-Amz-Target=OpsWorks_20130218.UnassignVolume',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218UnassignVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignVolume']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignVolume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218UnassignVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignVolume']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.UnassignVolume'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218UnassignVolume<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignVolume']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignVolume']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218UnassignVolumeMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UntagResource',
    '/#X-Amz-Target=OpsWorks_20130218.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218UntagResource<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UntagResource']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218UntagResourceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218UpdateAppMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateApp',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateApp',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218UpdateAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateApp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateApp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218UpdateAppMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateApp']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=OpsWorks_20130218.UpdateApp'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218UpdateApp<
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
                  ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateApp']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateApp']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218UpdateAppMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218UpdateElasticIpMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218UpdateElasticIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218UpdateElasticIpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218UpdateElasticIp<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218UpdateElasticIpMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218UpdateInstanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateInstance',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218UpdateInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateInstance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218UpdateInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.UpdateInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218UpdateInstance<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218UpdateInstanceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218UpdateLayerMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateLayer',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateLayer',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218UpdateLayerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateLayer']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateLayer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218UpdateLayerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateLayer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.UpdateLayer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218UpdateLayer<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateLayer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateLayer']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218UpdateLayerMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218UpdateMyUserProfileMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218UpdateMyUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218UpdateMyUserProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218UpdateMyUserProfile<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218UpdateMyUserProfileMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218UpdateRdsDbInstanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218UpdateRdsDbInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218UpdateRdsDbInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218UpdateRdsDbInstance<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218UpdateRdsDbInstanceMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218UpdateStackMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateStack',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218UpdateStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateStack']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateStack']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218UpdateStackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateStack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.UpdateStack'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218UpdateStack<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateStack']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateStack']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218UpdateStackMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218UpdateUserProfileMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218UpdateUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218UpdateUserProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218UpdateUserProfile<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218UpdateUserProfileMutationOptions<
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

export function getPostXAmzTargetOpsWorks20130218UpdateVolumeMutationKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateVolume',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateVolume',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorks20130218UpdateVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateVolume']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateVolume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorks20130218UpdateVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateVolume']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorks_20130218.UpdateVolume'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetOpsWorks20130218UpdateVolume<
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
                    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateVolume']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateVolume']['$post']
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
    const mutationDefaults = getPostXAmzTargetOpsWorks20130218UpdateVolumeMutationOptions<
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

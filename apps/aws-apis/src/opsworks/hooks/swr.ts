import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetOpsWorks20130218AssignInstanceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.AssignInstance',
    '/#X-Amz-Target=OpsWorks_20130218.AssignInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218AssignInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218AssignInstanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.AssignInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218AssignVolumeKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.AssignVolume',
    '/#X-Amz-Target=OpsWorks_20130218.AssignVolume',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218AssignVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignVolume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218AssignVolumeKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.AssignVolume'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218AssociateElasticIpKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp',
    '/#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218AssociateElasticIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218AssociateElasticIpKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218AttachElasticLoadBalancerKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer',
    '/#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218AttachElasticLoadBalancer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218AttachElasticLoadBalancerKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218CloneStackKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CloneStack',
    '/#X-Amz-Target=OpsWorks_20130218.CloneStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218CloneStack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CloneStack']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218CloneStackKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.CloneStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.CloneStack'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218CreateAppKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CreateApp',
    '/#X-Amz-Target=OpsWorks_20130218.CreateApp',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218CreateApp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateApp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateApp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218CreateAppKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateApp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.CreateApp'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218CreateDeploymentKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CreateDeployment',
    '/#X-Amz-Target=OpsWorks_20130218.CreateDeployment',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218CreateDeployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateDeployment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218CreateDeploymentKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateDeployment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.CreateDeployment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218CreateInstanceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CreateInstance',
    '/#X-Amz-Target=OpsWorks_20130218.CreateInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218CreateInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218CreateInstanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.CreateInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218CreateLayerKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CreateLayer',
    '/#X-Amz-Target=OpsWorks_20130218.CreateLayer',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218CreateLayer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateLayer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218CreateLayerKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateLayer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.CreateLayer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218CreateStackKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CreateStack',
    '/#X-Amz-Target=OpsWorks_20130218.CreateStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218CreateStack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateStack']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218CreateStackKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.CreateStack'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218CreateUserProfileKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.CreateUserProfile',
    '/#X-Amz-Target=OpsWorks_20130218.CreateUserProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218CreateUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateUserProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218CreateUserProfileKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateUserProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.CreateUserProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DeleteAppKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeleteApp',
    '/#X-Amz-Target=OpsWorks_20130218.DeleteApp',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DeleteApp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteApp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteApp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DeleteAppKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteApp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DeleteApp'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DeleteInstanceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeleteInstance',
    '/#X-Amz-Target=OpsWorks_20130218.DeleteInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DeleteInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DeleteInstanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DeleteInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DeleteLayerKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeleteLayer',
    '/#X-Amz-Target=OpsWorks_20130218.DeleteLayer',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DeleteLayer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteLayer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DeleteLayerKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteLayer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DeleteLayer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DeleteStackKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeleteStack',
    '/#X-Amz-Target=OpsWorks_20130218.DeleteStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DeleteStack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteStack']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DeleteStackKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DeleteStack'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DeleteUserProfileKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile',
    '/#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DeleteUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DeleteUserProfileKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DeregisterEcsClusterKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster',
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DeregisterEcsCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DeregisterEcsClusterKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DeregisterElasticIpKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp',
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DeregisterElasticIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DeregisterElasticIpKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DeregisterInstanceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeregisterInstance',
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DeregisterInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DeregisterInstanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DeregisterInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DeregisterRdsDbInstanceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance',
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DeregisterRdsDbInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DeregisterRdsDbInstanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DeregisterVolumeKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DeregisterVolume',
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterVolume',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DeregisterVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterVolume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DeregisterVolumeKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DeregisterVolume'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeAgentVersionsKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeAgentVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeAgentVersionsKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeAppsKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeApps',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeApps',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeApps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeAppsKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeApps']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeApps'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeCommandsKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeCommands',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeCommands',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeCommands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeCommands']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeCommandsKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeCommands']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeCommands'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeDeploymentsKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeDeployments',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeDeployments',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeDeployments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeDeploymentsKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeDeployments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeDeployments'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeEcsClustersKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeEcsClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeEcsClustersKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeElasticIpsKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeElasticIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeElasticIpsKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeElasticLoadBalancersKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeElasticLoadBalancers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeElasticLoadBalancersKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeInstancesKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeInstances',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeInstances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeInstancesKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeInstances'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeLayersKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeLayers',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeLayers',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeLayers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLayers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeLayersKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLayers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeLayers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeLoadBasedAutoScaling<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeMyUserProfileKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeMyUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeMyUserProfileKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeOperatingSystemsKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeOperatingSystems<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeOperatingSystemsKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribePermissionsKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribePermissions',
    '/#X-Amz-Target=OpsWorks_20130218.DescribePermissions',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribePermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribePermissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribePermissionsKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribePermissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribePermissions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeRaidArraysKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeRaidArrays<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeRaidArraysKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeRdsDbInstancesKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeRdsDbInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeRdsDbInstancesKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeServiceErrorsKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeServiceErrors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeServiceErrorsKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeStackProvisioningParametersKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeStackProvisioningParameters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetOpsWorks20130218DescribeStackProvisioningParametersKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeStackSummaryKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeStackSummary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeStackSummaryKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeStacksKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeStacks',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeStacks',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeStacks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStacks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeStacksKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStacks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeStacks'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeTimeBasedAutoScaling<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeUserProfilesKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeUserProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeUserProfilesKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DescribeVolumesKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DescribeVolumes',
    '/#X-Amz-Target=OpsWorks_20130218.DescribeVolumes',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DescribeVolumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeVolumes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DescribeVolumesKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeVolumes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DescribeVolumes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DetachElasticLoadBalancerKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer',
    '/#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DetachElasticLoadBalancer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DetachElasticLoadBalancerKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218DisassociateElasticIpKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp',
    '/#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218DisassociateElasticIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218DisassociateElasticIpKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218GetHostnameSuggestionKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion',
    '/#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218GetHostnameSuggestion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218GetHostnameSuggestionKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218GrantAccessKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.GrantAccess',
    '/#X-Amz-Target=OpsWorks_20130218.GrantAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218GrantAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.GrantAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218GrantAccessKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.GrantAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.GrantAccess'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218ListTagsKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.ListTags',
    '/#X-Amz-Target=OpsWorks_20130218.ListTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218ListTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.ListTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.ListTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218ListTagsKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.ListTags']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=OpsWorks_20130218.ListTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218RebootInstanceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.RebootInstance',
    '/#X-Amz-Target=OpsWorks_20130218.RebootInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218RebootInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.RebootInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218RebootInstanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.RebootInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.RebootInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218RegisterEcsClusterKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster',
    '/#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218RegisterEcsCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218RegisterEcsClusterKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218RegisterElasticIpKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp',
    '/#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218RegisterElasticIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218RegisterElasticIpKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218RegisterInstanceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.RegisterInstance',
    '/#X-Amz-Target=OpsWorks_20130218.RegisterInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218RegisterInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218RegisterInstanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.RegisterInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218RegisterRdsDbInstanceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance',
    '/#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218RegisterRdsDbInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218RegisterRdsDbInstanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218RegisterVolumeKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.RegisterVolume',
    '/#X-Amz-Target=OpsWorks_20130218.RegisterVolume',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218RegisterVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterVolume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218RegisterVolumeKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.RegisterVolume'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218SetLoadBasedAutoScalingKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling',
    '/#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218SetLoadBasedAutoScaling<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218SetLoadBasedAutoScalingKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218SetPermissionKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.SetPermission',
    '/#X-Amz-Target=OpsWorks_20130218.SetPermission',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218SetPermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.SetPermission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218SetPermissionKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetPermission']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.SetPermission'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218SetTimeBasedAutoScalingKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling',
    '/#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218SetTimeBasedAutoScaling<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218SetTimeBasedAutoScalingKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218StartInstanceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.StartInstance',
    '/#X-Amz-Target=OpsWorks_20130218.StartInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218StartInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StartInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218StartInstanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.StartInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.StartInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218StartStackKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.StartStack',
    '/#X-Amz-Target=OpsWorks_20130218.StartStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218StartStack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StartStack']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218StartStackKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.StartStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.StartStack'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218StopInstanceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.StopInstance',
    '/#X-Amz-Target=OpsWorks_20130218.StopInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218StopInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StopInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218StopInstanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.StopInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.StopInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218StopStackKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.StopStack',
    '/#X-Amz-Target=OpsWorks_20130218.StopStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218StopStack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StopStack']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StopStack']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218StopStackKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.StopStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.StopStack'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218TagResourceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.TagResource',
    '/#X-Amz-Target=OpsWorks_20130218.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218TagResourceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218UnassignInstanceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UnassignInstance',
    '/#X-Amz-Target=OpsWorks_20130218.UnassignInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218UnassignInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218UnassignInstanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.UnassignInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218UnassignVolumeKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UnassignVolume',
    '/#X-Amz-Target=OpsWorks_20130218.UnassignVolume',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218UnassignVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignVolume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218UnassignVolumeKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.UnassignVolume'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218UntagResourceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UntagResource',
    '/#X-Amz-Target=OpsWorks_20130218.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218UpdateAppKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateApp',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateApp',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218UpdateApp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateApp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateApp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218UpdateAppKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateApp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.UpdateApp'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218UpdateElasticIpKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218UpdateElasticIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218UpdateElasticIpKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218UpdateInstanceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateInstance',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218UpdateInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218UpdateInstanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.UpdateInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218UpdateLayerKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateLayer',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateLayer',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218UpdateLayer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateLayer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218UpdateLayerKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateLayer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.UpdateLayer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218UpdateMyUserProfileKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218UpdateMyUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218UpdateMyUserProfileKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218UpdateRdsDbInstanceKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218UpdateRdsDbInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218UpdateRdsDbInstanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218UpdateStackKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateStack',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218UpdateStack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateStack']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218UpdateStackKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.UpdateStack'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218UpdateUserProfileKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218UpdateUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218UpdateUserProfileKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorks20130218UpdateVolumeKey() {
  return [
    '#X-Amz-Target=OpsWorks_20130218.UpdateVolume',
    '/#X-Amz-Target=OpsWorks_20130218.UpdateVolume',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorks20130218UpdateVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateVolume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorks20130218UpdateVolumeKey()
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
            (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorks_20130218.UpdateVolume'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

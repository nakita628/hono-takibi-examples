import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetOpsWorks20130218AssignInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.AssignInstance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218AssignVolume(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.AssignVolume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.AssignVolume'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218AssociateElasticIp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218AttachElasticLoadBalancer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218CloneStack(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CloneStack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.CloneStack'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218CreateApp(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateApp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.CreateApp'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218CreateDeployment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateDeployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.CreateDeployment'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218CreateInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.CreateInstance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218CreateLayer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateLayer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.CreateLayer'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218CreateStack(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateStack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.CreateStack'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218CreateUserProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.CreateUserProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.CreateUserProfile'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DeleteApp(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteApp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DeleteApp'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DeleteInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DeleteInstance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DeleteLayer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteLayer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DeleteLayer'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DeleteStack(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteStack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DeleteStack'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DeleteUserProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DeregisterEcsCluster(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DeregisterElasticIp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DeregisterInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DeregisterInstance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DeregisterRdsDbInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DeregisterVolume(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DeregisterVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DeregisterVolume'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeAgentVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeApps(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeApps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeApps'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeCommands(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeCommands']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeCommands'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeDeployments(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeDeployments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeDeployments'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeEcsClusters(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeElasticIps(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeElasticLoadBalancers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeInstances'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeLayers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLayers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeLayers'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeLoadBasedAutoScaling(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeMyUserProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeOperatingSystems(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribePermissions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribePermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribePermissions'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeRaidArrays(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeRdsDbInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeServiceErrors(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeStackProvisioningParameters(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeStackSummary(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeStacks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeStacks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeStacks'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeTimeBasedAutoScaling(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeUserProfiles(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DescribeVolumes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DescribeVolumes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DescribeVolumes'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DetachElasticLoadBalancer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218DisassociateElasticIp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218GetHostnameSuggestion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218GrantAccess(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.GrantAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.GrantAccess'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218ListTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.ListTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.ListTags'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218RebootInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.RebootInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.RebootInstance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218RegisterEcsCluster(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218RegisterElasticIp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218RegisterInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.RegisterInstance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218RegisterRdsDbInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218RegisterVolume(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.RegisterVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.RegisterVolume'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218SetLoadBasedAutoScaling(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218SetPermission(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.SetPermission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.SetPermission'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218SetTimeBasedAutoScaling(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218StartInstance(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StartInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.StartInstance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218StartStack(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StartStack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.StartStack'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218StopInstance(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StopInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.StopInstance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218StopStack(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.StopStack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.StopStack'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218UnassignInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.UnassignInstance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218UnassignVolume(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UnassignVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.UnassignVolume'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218UntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218UpdateApp(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateApp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.UpdateApp'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218UpdateElasticIp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218UpdateInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.UpdateInstance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218UpdateLayer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateLayer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.UpdateLayer'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218UpdateMyUserProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218UpdateRdsDbInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218UpdateStack(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateStack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.UpdateStack'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218UpdateUserProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorks20130218UpdateVolume(
  args: InferRequestType<(typeof client)['#X-Amz-Target=OpsWorks_20130218.UpdateVolume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorks_20130218.UpdateVolume'].$post(args, options),
  )
}

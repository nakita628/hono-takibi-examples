import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionAcceptReservedNodeExchange(
  args: InferRequestType<(typeof client)['#Action=AcceptReservedNodeExchange']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AcceptReservedNodeExchange'].$get(args, options))
}

export async function postActionAcceptReservedNodeExchange(
  args: InferRequestType<(typeof client)['#Action=AcceptReservedNodeExchange']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AcceptReservedNodeExchange'].$post(args, options))
}

export async function getActionAddPartner(
  args: InferRequestType<(typeof client)['#Action=AddPartner']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddPartner'].$get(args, options))
}

export async function postActionAddPartner(
  args: InferRequestType<(typeof client)['#Action=AddPartner']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddPartner'].$post(args, options))
}

export async function getActionAssociateDataShareConsumer(
  args: InferRequestType<(typeof client)['#Action=AssociateDataShareConsumer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateDataShareConsumer'].$get(args, options))
}

export async function postActionAssociateDataShareConsumer(
  args: InferRequestType<(typeof client)['#Action=AssociateDataShareConsumer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AssociateDataShareConsumer'].$post(args, options))
}

export async function getActionAuthorizeClusterSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AuthorizeClusterSecurityGroupIngress'].$get(args, options),
  )
}

export async function postActionAuthorizeClusterSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=AuthorizeClusterSecurityGroupIngress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AuthorizeClusterSecurityGroupIngress'].$post(args, options),
  )
}

export async function getActionAuthorizeDataShare(
  args: InferRequestType<(typeof client)['#Action=AuthorizeDataShare']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeDataShare'].$get(args, options))
}

export async function postActionAuthorizeDataShare(
  args: InferRequestType<(typeof client)['#Action=AuthorizeDataShare']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeDataShare'].$post(args, options))
}

export async function getActionAuthorizeEndpointAccess(
  args: InferRequestType<(typeof client)['#Action=AuthorizeEndpointAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeEndpointAccess'].$get(args, options))
}

export async function postActionAuthorizeEndpointAccess(
  args: InferRequestType<(typeof client)['#Action=AuthorizeEndpointAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeEndpointAccess'].$post(args, options))
}

export async function getActionAuthorizeSnapshotAccess(
  args: InferRequestType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeSnapshotAccess'].$get(args, options))
}

export async function postActionAuthorizeSnapshotAccess(
  args: InferRequestType<(typeof client)['#Action=AuthorizeSnapshotAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeSnapshotAccess'].$post(args, options))
}

export async function getActionBatchDeleteClusterSnapshots(
  args: InferRequestType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchDeleteClusterSnapshots'].$get(args, options))
}

export async function postActionBatchDeleteClusterSnapshots(
  args: InferRequestType<(typeof client)['#Action=BatchDeleteClusterSnapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchDeleteClusterSnapshots'].$post(args, options))
}

export async function getActionBatchModifyClusterSnapshots(
  args: InferRequestType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchModifyClusterSnapshots'].$get(args, options))
}

export async function postActionBatchModifyClusterSnapshots(
  args: InferRequestType<(typeof client)['#Action=BatchModifyClusterSnapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchModifyClusterSnapshots'].$post(args, options))
}

export async function getActionCancelResize(
  args: InferRequestType<(typeof client)['#Action=CancelResize']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelResize'].$get(args, options))
}

export async function postActionCancelResize(
  args: InferRequestType<(typeof client)['#Action=CancelResize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelResize'].$post(args, options))
}

export async function getActionCopyClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=CopyClusterSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyClusterSnapshot'].$get(args, options))
}

export async function postActionCopyClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=CopyClusterSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyClusterSnapshot'].$post(args, options))
}

export async function getActionCreateAuthenticationProfile(
  args: InferRequestType<(typeof client)['#Action=CreateAuthenticationProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateAuthenticationProfile'].$get(args, options))
}

export async function postActionCreateAuthenticationProfile(
  args: InferRequestType<(typeof client)['#Action=CreateAuthenticationProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateAuthenticationProfile'].$post(args, options))
}

export async function getActionCreateCluster(
  args: InferRequestType<(typeof client)['#Action=CreateCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCluster'].$get(args, options))
}

export async function postActionCreateCluster(
  args: InferRequestType<(typeof client)['#Action=CreateCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCluster'].$post(args, options))
}

export async function getActionCreateClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=CreateClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateClusterParameterGroup'].$get(args, options))
}

export async function postActionCreateClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=CreateClusterParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateClusterParameterGroup'].$post(args, options))
}

export async function getActionCreateClusterSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSecurityGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateClusterSecurityGroup'].$get(args, options))
}

export async function postActionCreateClusterSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSecurityGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateClusterSecurityGroup'].$post(args, options))
}

export async function getActionCreateClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateClusterSnapshot'].$get(args, options))
}

export async function postActionCreateClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateClusterSnapshot'].$post(args, options))
}

export async function getActionCreateClusterSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateClusterSubnetGroup'].$get(args, options))
}

export async function postActionCreateClusterSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=CreateClusterSubnetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateClusterSubnetGroup'].$post(args, options))
}

export async function getActionCreateEndpointAccess(
  args: InferRequestType<(typeof client)['#Action=CreateEndpointAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateEndpointAccess'].$get(args, options))
}

export async function postActionCreateEndpointAccess(
  args: InferRequestType<(typeof client)['#Action=CreateEndpointAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateEndpointAccess'].$post(args, options))
}

export async function getActionCreateEventSubscription(
  args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateEventSubscription'].$get(args, options))
}

export async function postActionCreateEventSubscription(
  args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateEventSubscription'].$post(args, options))
}

export async function getActionCreateHsmClientCertificate(
  args: InferRequestType<(typeof client)['#Action=CreateHsmClientCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateHsmClientCertificate'].$get(args, options))
}

export async function postActionCreateHsmClientCertificate(
  args: InferRequestType<(typeof client)['#Action=CreateHsmClientCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateHsmClientCertificate'].$post(args, options))
}

export async function getActionCreateHsmConfiguration(
  args: InferRequestType<(typeof client)['#Action=CreateHsmConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateHsmConfiguration'].$get(args, options))
}

export async function postActionCreateHsmConfiguration(
  args: InferRequestType<(typeof client)['#Action=CreateHsmConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateHsmConfiguration'].$post(args, options))
}

export async function getActionCreateScheduledAction(
  args: InferRequestType<(typeof client)['#Action=CreateScheduledAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateScheduledAction'].$get(args, options))
}

export async function postActionCreateScheduledAction(
  args: InferRequestType<(typeof client)['#Action=CreateScheduledAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateScheduledAction'].$post(args, options))
}

export async function getActionCreateSnapshotCopyGrant(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSnapshotCopyGrant'].$get(args, options))
}

export async function postActionCreateSnapshotCopyGrant(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshotCopyGrant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSnapshotCopyGrant'].$post(args, options))
}

export async function getActionCreateSnapshotSchedule(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshotSchedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSnapshotSchedule'].$get(args, options))
}

export async function postActionCreateSnapshotSchedule(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshotSchedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSnapshotSchedule'].$post(args, options))
}

export async function getActionCreateTags(
  args: InferRequestType<(typeof client)['#Action=CreateTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTags'].$get(args, options))
}

export async function postActionCreateTags(
  args: InferRequestType<(typeof client)['#Action=CreateTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTags'].$post(args, options))
}

export async function getActionCreateUsageLimit(
  args: InferRequestType<(typeof client)['#Action=CreateUsageLimit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateUsageLimit'].$get(args, options))
}

export async function postActionCreateUsageLimit(
  args: InferRequestType<(typeof client)['#Action=CreateUsageLimit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateUsageLimit'].$post(args, options))
}

export async function getActionDeauthorizeDataShare(
  args: InferRequestType<(typeof client)['#Action=DeauthorizeDataShare']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeauthorizeDataShare'].$get(args, options))
}

export async function postActionDeauthorizeDataShare(
  args: InferRequestType<(typeof client)['#Action=DeauthorizeDataShare']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeauthorizeDataShare'].$post(args, options))
}

export async function getActionDeleteAuthenticationProfile(
  args: InferRequestType<(typeof client)['#Action=DeleteAuthenticationProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAuthenticationProfile'].$get(args, options))
}

export async function postActionDeleteAuthenticationProfile(
  args: InferRequestType<(typeof client)['#Action=DeleteAuthenticationProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAuthenticationProfile'].$post(args, options))
}

export async function getActionDeleteCluster(
  args: InferRequestType<(typeof client)['#Action=DeleteCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCluster'].$get(args, options))
}

export async function postActionDeleteCluster(
  args: InferRequestType<(typeof client)['#Action=DeleteCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCluster'].$post(args, options))
}

export async function getActionDeleteClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteClusterParameterGroup'].$get(args, options))
}

export async function postActionDeleteClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteClusterParameterGroup'].$post(args, options))
}

export async function getActionDeleteClusterSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteClusterSecurityGroup'].$get(args, options))
}

export async function postActionDeleteClusterSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSecurityGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteClusterSecurityGroup'].$post(args, options))
}

export async function getActionDeleteClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteClusterSnapshot'].$get(args, options))
}

export async function postActionDeleteClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteClusterSnapshot'].$post(args, options))
}

export async function getActionDeleteClusterSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteClusterSubnetGroup'].$get(args, options))
}

export async function postActionDeleteClusterSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteClusterSubnetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteClusterSubnetGroup'].$post(args, options))
}

export async function getActionDeleteEndpointAccess(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpointAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteEndpointAccess'].$get(args, options))
}

export async function postActionDeleteEndpointAccess(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpointAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteEndpointAccess'].$post(args, options))
}

export async function getActionDeleteEventSubscription(
  args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteEventSubscription'].$get(args, options))
}

export async function postActionDeleteEventSubscription(
  args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteEventSubscription'].$post(args, options))
}

export async function getActionDeleteHsmClientCertificate(
  args: InferRequestType<(typeof client)['#Action=DeleteHsmClientCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteHsmClientCertificate'].$get(args, options))
}

export async function postActionDeleteHsmClientCertificate(
  args: InferRequestType<(typeof client)['#Action=DeleteHsmClientCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteHsmClientCertificate'].$post(args, options))
}

export async function getActionDeleteHsmConfiguration(
  args: InferRequestType<(typeof client)['#Action=DeleteHsmConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteHsmConfiguration'].$get(args, options))
}

export async function postActionDeleteHsmConfiguration(
  args: InferRequestType<(typeof client)['#Action=DeleteHsmConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteHsmConfiguration'].$post(args, options))
}

export async function getActionDeletePartner(
  args: InferRequestType<(typeof client)['#Action=DeletePartner']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePartner'].$get(args, options))
}

export async function postActionDeletePartner(
  args: InferRequestType<(typeof client)['#Action=DeletePartner']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePartner'].$post(args, options))
}

export async function getActionDeleteScheduledAction(
  args: InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteScheduledAction'].$get(args, options))
}

export async function postActionDeleteScheduledAction(
  args: InferRequestType<(typeof client)['#Action=DeleteScheduledAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteScheduledAction'].$post(args, options))
}

export async function getActionDeleteSnapshotCopyGrant(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSnapshotCopyGrant'].$get(args, options))
}

export async function postActionDeleteSnapshotCopyGrant(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshotCopyGrant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSnapshotCopyGrant'].$post(args, options))
}

export async function getActionDeleteSnapshotSchedule(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshotSchedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSnapshotSchedule'].$get(args, options))
}

export async function postActionDeleteSnapshotSchedule(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshotSchedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSnapshotSchedule'].$post(args, options))
}

export async function getActionDeleteTags(
  args: InferRequestType<(typeof client)['#Action=DeleteTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTags'].$get(args, options))
}

export async function postActionDeleteTags(
  args: InferRequestType<(typeof client)['#Action=DeleteTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTags'].$post(args, options))
}

export async function getActionDeleteUsageLimit(
  args: InferRequestType<(typeof client)['#Action=DeleteUsageLimit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteUsageLimit'].$get(args, options))
}

export async function postActionDeleteUsageLimit(
  args: InferRequestType<(typeof client)['#Action=DeleteUsageLimit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteUsageLimit'].$post(args, options))
}

export async function getActionDescribeAccountAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountAttributes'].$get(args, options))
}

export async function postActionDescribeAccountAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountAttributes'].$post(args, options))
}

export async function getActionDescribeAuthenticationProfiles(
  args: InferRequestType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAuthenticationProfiles'].$get(args, options))
}

export async function postActionDescribeAuthenticationProfiles(
  args: InferRequestType<(typeof client)['#Action=DescribeAuthenticationProfiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAuthenticationProfiles'].$post(args, options))
}

export async function getActionDescribeClusterDbRevisions(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterDbRevisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterDbRevisions'].$get(args, options))
}

export async function postActionDescribeClusterDbRevisions(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterDbRevisions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterDbRevisions'].$post(args, options))
}

export async function getActionDescribeClusterParameterGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterParameterGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterParameterGroups'].$get(args, options))
}

export async function postActionDescribeClusterParameterGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterParameterGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterParameterGroups'].$post(args, options))
}

export async function getActionDescribeClusterParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterParameters'].$get(args, options))
}

export async function postActionDescribeClusterParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterParameters'].$post(args, options))
}

export async function getActionDescribeClusterSecurityGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterSecurityGroups'].$get(args, options))
}

export async function postActionDescribeClusterSecurityGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSecurityGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterSecurityGroups'].$post(args, options))
}

export async function getActionDescribeClusterSnapshots(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSnapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterSnapshots'].$get(args, options))
}

export async function postActionDescribeClusterSnapshots(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSnapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterSnapshots'].$post(args, options))
}

export async function getActionDescribeClusterSubnetGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterSubnetGroups'].$get(args, options))
}

export async function postActionDescribeClusterSubnetGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterSubnetGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterSubnetGroups'].$post(args, options))
}

export async function getActionDescribeClusterTracks(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterTracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterTracks'].$get(args, options))
}

export async function postActionDescribeClusterTracks(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterTracks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterTracks'].$post(args, options))
}

export async function getActionDescribeClusterVersions(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterVersions'].$get(args, options))
}

export async function postActionDescribeClusterVersions(
  args: InferRequestType<(typeof client)['#Action=DescribeClusterVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusterVersions'].$post(args, options))
}

export async function getActionDescribeClusters(
  args: InferRequestType<(typeof client)['#Action=DescribeClusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusters'].$get(args, options))
}

export async function postActionDescribeClusters(
  args: InferRequestType<(typeof client)['#Action=DescribeClusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeClusters'].$post(args, options))
}

export async function getActionDescribeDataShares(
  args: InferRequestType<(typeof client)['#Action=DescribeDataShares']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDataShares'].$get(args, options))
}

export async function postActionDescribeDataShares(
  args: InferRequestType<(typeof client)['#Action=DescribeDataShares']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDataShares'].$post(args, options))
}

export async function getActionDescribeDataSharesForConsumer(
  args: InferRequestType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDataSharesForConsumer'].$get(args, options))
}

export async function postActionDescribeDataSharesForConsumer(
  args: InferRequestType<(typeof client)['#Action=DescribeDataSharesForConsumer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDataSharesForConsumer'].$post(args, options))
}

export async function getActionDescribeDataSharesForProducer(
  args: InferRequestType<(typeof client)['#Action=DescribeDataSharesForProducer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDataSharesForProducer'].$get(args, options))
}

export async function postActionDescribeDataSharesForProducer(
  args: InferRequestType<(typeof client)['#Action=DescribeDataSharesForProducer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDataSharesForProducer'].$post(args, options))
}

export async function getActionDescribeDefaultClusterParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDefaultClusterParameters'].$get(args, options))
}

export async function postActionDescribeDefaultClusterParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeDefaultClusterParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeDefaultClusterParameters'].$post(args, options),
  )
}

export async function getActionDescribeEndpointAccess(
  args: InferRequestType<(typeof client)['#Action=DescribeEndpointAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEndpointAccess'].$get(args, options))
}

export async function postActionDescribeEndpointAccess(
  args: InferRequestType<(typeof client)['#Action=DescribeEndpointAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEndpointAccess'].$post(args, options))
}

export async function getActionDescribeEndpointAuthorization(
  args: InferRequestType<(typeof client)['#Action=DescribeEndpointAuthorization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEndpointAuthorization'].$get(args, options))
}

export async function postActionDescribeEndpointAuthorization(
  args: InferRequestType<(typeof client)['#Action=DescribeEndpointAuthorization']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEndpointAuthorization'].$post(args, options))
}

export async function getActionDescribeEventCategories(
  args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEventCategories'].$get(args, options))
}

export async function postActionDescribeEventCategories(
  args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEventCategories'].$post(args, options))
}

export async function getActionDescribeEventSubscriptions(
  args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEventSubscriptions'].$get(args, options))
}

export async function postActionDescribeEventSubscriptions(
  args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEventSubscriptions'].$post(args, options))
}

export async function getActionDescribeEvents(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEvents'].$get(args, options))
}

export async function postActionDescribeEvents(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEvents'].$post(args, options))
}

export async function getActionDescribeHsmClientCertificates(
  args: InferRequestType<(typeof client)['#Action=DescribeHsmClientCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeHsmClientCertificates'].$get(args, options))
}

export async function postActionDescribeHsmClientCertificates(
  args: InferRequestType<(typeof client)['#Action=DescribeHsmClientCertificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeHsmClientCertificates'].$post(args, options))
}

export async function getActionDescribeHsmConfigurations(
  args: InferRequestType<(typeof client)['#Action=DescribeHsmConfigurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeHsmConfigurations'].$get(args, options))
}

export async function postActionDescribeHsmConfigurations(
  args: InferRequestType<(typeof client)['#Action=DescribeHsmConfigurations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeHsmConfigurations'].$post(args, options))
}

export async function getActionDescribeLoggingStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeLoggingStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLoggingStatus'].$get(args, options))
}

export async function postActionDescribeLoggingStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeLoggingStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLoggingStatus'].$post(args, options))
}

export async function getActionDescribeNodeConfigurationOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeNodeConfigurationOptions'].$get(args, options))
}

export async function postActionDescribeNodeConfigurationOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeNodeConfigurationOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeNodeConfigurationOptions'].$post(args, options),
  )
}

export async function getActionDescribeOrderableClusterOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeOrderableClusterOptions'].$get(args, options))
}

export async function postActionDescribeOrderableClusterOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeOrderableClusterOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeOrderableClusterOptions'].$post(args, options))
}

export async function getActionDescribePartners(
  args: InferRequestType<(typeof client)['#Action=DescribePartners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePartners'].$get(args, options))
}

export async function postActionDescribePartners(
  args: InferRequestType<(typeof client)['#Action=DescribePartners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePartners'].$post(args, options))
}

export async function getActionDescribeReservedNodeExchangeStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeReservedNodeExchangeStatus'].$get(args, options),
  )
}

export async function postActionDescribeReservedNodeExchangeStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodeExchangeStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeReservedNodeExchangeStatus'].$post(args, options),
  )
}

export async function getActionDescribeReservedNodeOfferings(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReservedNodeOfferings'].$get(args, options))
}

export async function postActionDescribeReservedNodeOfferings(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodeOfferings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReservedNodeOfferings'].$post(args, options))
}

export async function getActionDescribeReservedNodes(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReservedNodes'].$get(args, options))
}

export async function postActionDescribeReservedNodes(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedNodes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReservedNodes'].$post(args, options))
}

export async function getActionDescribeResize(
  args: InferRequestType<(typeof client)['#Action=DescribeResize']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeResize'].$get(args, options))
}

export async function postActionDescribeResize(
  args: InferRequestType<(typeof client)['#Action=DescribeResize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeResize'].$post(args, options))
}

export async function getActionDescribeScheduledActions(
  args: InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeScheduledActions'].$get(args, options))
}

export async function postActionDescribeScheduledActions(
  args: InferRequestType<(typeof client)['#Action=DescribeScheduledActions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeScheduledActions'].$post(args, options))
}

export async function getActionDescribeSnapshotCopyGrants(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSnapshotCopyGrants'].$get(args, options))
}

export async function postActionDescribeSnapshotCopyGrants(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotCopyGrants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSnapshotCopyGrants'].$post(args, options))
}

export async function getActionDescribeSnapshotSchedules(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotSchedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSnapshotSchedules'].$get(args, options))
}

export async function postActionDescribeSnapshotSchedules(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshotSchedules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSnapshotSchedules'].$post(args, options))
}

export async function getActionDescribeStorage(
  args: InferRequestType<(typeof client)['#Action=DescribeStorage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStorage'].$get(args, options))
}

export async function postActionDescribeStorage(
  args: InferRequestType<(typeof client)['#Action=DescribeStorage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStorage'].$post(args, options))
}

export async function getActionDescribeTableRestoreStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeTableRestoreStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTableRestoreStatus'].$get(args, options))
}

export async function postActionDescribeTableRestoreStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeTableRestoreStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTableRestoreStatus'].$post(args, options))
}

export async function getActionDescribeTags(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTags'].$get(args, options))
}

export async function postActionDescribeTags(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTags'].$post(args, options))
}

export async function getActionDescribeUsageLimits(
  args: InferRequestType<(typeof client)['#Action=DescribeUsageLimits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeUsageLimits'].$get(args, options))
}

export async function postActionDescribeUsageLimits(
  args: InferRequestType<(typeof client)['#Action=DescribeUsageLimits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeUsageLimits'].$post(args, options))
}

export async function getActionDisableLogging(
  args: InferRequestType<(typeof client)['#Action=DisableLogging']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableLogging'].$get(args, options))
}

export async function postActionDisableLogging(
  args: InferRequestType<(typeof client)['#Action=DisableLogging']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableLogging'].$post(args, options))
}

export async function getActionDisableSnapshotCopy(
  args: InferRequestType<(typeof client)['#Action=DisableSnapshotCopy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableSnapshotCopy'].$get(args, options))
}

export async function postActionDisableSnapshotCopy(
  args: InferRequestType<(typeof client)['#Action=DisableSnapshotCopy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisableSnapshotCopy'].$post(args, options))
}

export async function getActionDisassociateDataShareConsumer(
  args: InferRequestType<(typeof client)['#Action=DisassociateDataShareConsumer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateDataShareConsumer'].$get(args, options))
}

export async function postActionDisassociateDataShareConsumer(
  args: InferRequestType<(typeof client)['#Action=DisassociateDataShareConsumer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DisassociateDataShareConsumer'].$post(args, options))
}

export async function getActionEnableLogging(
  args: InferRequestType<(typeof client)['#Action=EnableLogging']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableLogging'].$get(args, options))
}

export async function postActionEnableLogging(
  args: InferRequestType<(typeof client)['#Action=EnableLogging']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableLogging'].$post(args, options))
}

export async function getActionEnableSnapshotCopy(
  args: InferRequestType<(typeof client)['#Action=EnableSnapshotCopy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableSnapshotCopy'].$get(args, options))
}

export async function postActionEnableSnapshotCopy(
  args: InferRequestType<(typeof client)['#Action=EnableSnapshotCopy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableSnapshotCopy'].$post(args, options))
}

export async function getActionGetClusterCredentials(
  args: InferRequestType<(typeof client)['#Action=GetClusterCredentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetClusterCredentials'].$get(args, options))
}

export async function postActionGetClusterCredentials(
  args: InferRequestType<(typeof client)['#Action=GetClusterCredentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetClusterCredentials'].$post(args, options))
}

export async function getActionGetClusterCredentialsWithIAM(
  args: InferRequestType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetClusterCredentialsWithIAM'].$get(args, options))
}

export async function postActionGetClusterCredentialsWithIAM(
  args: InferRequestType<(typeof client)['#Action=GetClusterCredentialsWithIAM']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetClusterCredentialsWithIAM'].$post(args, options))
}

export async function getActionGetReservedNodeExchangeConfigurationOptions(
  args: InferRequestType<
    (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetReservedNodeExchangeConfigurationOptions'].$get(args, options),
  )
}

export async function postActionGetReservedNodeExchangeConfigurationOptions(
  args: InferRequestType<
    (typeof client)['#Action=GetReservedNodeExchangeConfigurationOptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetReservedNodeExchangeConfigurationOptions'].$post(args, options),
  )
}

export async function getActionGetReservedNodeExchangeOfferings(
  args: InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetReservedNodeExchangeOfferings'].$get(args, options))
}

export async function postActionGetReservedNodeExchangeOfferings(
  args: InferRequestType<(typeof client)['#Action=GetReservedNodeExchangeOfferings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetReservedNodeExchangeOfferings'].$post(args, options),
  )
}

export async function getActionModifyAquaConfiguration(
  args: InferRequestType<(typeof client)['#Action=ModifyAquaConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyAquaConfiguration'].$get(args, options))
}

export async function postActionModifyAquaConfiguration(
  args: InferRequestType<(typeof client)['#Action=ModifyAquaConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyAquaConfiguration'].$post(args, options))
}

export async function getActionModifyAuthenticationProfile(
  args: InferRequestType<(typeof client)['#Action=ModifyAuthenticationProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyAuthenticationProfile'].$get(args, options))
}

export async function postActionModifyAuthenticationProfile(
  args: InferRequestType<(typeof client)['#Action=ModifyAuthenticationProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyAuthenticationProfile'].$post(args, options))
}

export async function getActionModifyCluster(
  args: InferRequestType<(typeof client)['#Action=ModifyCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCluster'].$get(args, options))
}

export async function postActionModifyCluster(
  args: InferRequestType<(typeof client)['#Action=ModifyCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCluster'].$post(args, options))
}

export async function getActionModifyClusterDbRevision(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterDbRevision']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterDbRevision'].$get(args, options))
}

export async function postActionModifyClusterDbRevision(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterDbRevision']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterDbRevision'].$post(args, options))
}

export async function getActionModifyClusterIamRoles(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterIamRoles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterIamRoles'].$get(args, options))
}

export async function postActionModifyClusterIamRoles(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterIamRoles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterIamRoles'].$post(args, options))
}

export async function getActionModifyClusterMaintenance(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterMaintenance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterMaintenance'].$get(args, options))
}

export async function postActionModifyClusterMaintenance(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterMaintenance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterMaintenance'].$post(args, options))
}

export async function getActionModifyClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterParameterGroup'].$get(args, options))
}

export async function postActionModifyClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterParameterGroup'].$post(args, options))
}

export async function getActionModifyClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterSnapshot'].$get(args, options))
}

export async function postActionModifyClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterSnapshot'].$post(args, options))
}

export async function getActionModifyClusterSnapshotSchedule(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterSnapshotSchedule'].$get(args, options))
}

export async function postActionModifyClusterSnapshotSchedule(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSnapshotSchedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterSnapshotSchedule'].$post(args, options))
}

export async function getActionModifyClusterSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterSubnetGroup'].$get(args, options))
}

export async function postActionModifyClusterSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyClusterSubnetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyClusterSubnetGroup'].$post(args, options))
}

export async function getActionModifyEndpointAccess(
  args: InferRequestType<(typeof client)['#Action=ModifyEndpointAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyEndpointAccess'].$get(args, options))
}

export async function postActionModifyEndpointAccess(
  args: InferRequestType<(typeof client)['#Action=ModifyEndpointAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyEndpointAccess'].$post(args, options))
}

export async function getActionModifyEventSubscription(
  args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyEventSubscription'].$get(args, options))
}

export async function postActionModifyEventSubscription(
  args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyEventSubscription'].$post(args, options))
}

export async function getActionModifyScheduledAction(
  args: InferRequestType<(typeof client)['#Action=ModifyScheduledAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyScheduledAction'].$get(args, options))
}

export async function postActionModifyScheduledAction(
  args: InferRequestType<(typeof client)['#Action=ModifyScheduledAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyScheduledAction'].$post(args, options))
}

export async function getActionModifySnapshotCopyRetentionPeriod(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifySnapshotCopyRetentionPeriod'].$get(args, options),
  )
}

export async function postActionModifySnapshotCopyRetentionPeriod(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotCopyRetentionPeriod']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifySnapshotCopyRetentionPeriod'].$post(args, options),
  )
}

export async function getActionModifySnapshotSchedule(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotSchedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifySnapshotSchedule'].$get(args, options))
}

export async function postActionModifySnapshotSchedule(
  args: InferRequestType<(typeof client)['#Action=ModifySnapshotSchedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifySnapshotSchedule'].$post(args, options))
}

export async function getActionModifyUsageLimit(
  args: InferRequestType<(typeof client)['#Action=ModifyUsageLimit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyUsageLimit'].$get(args, options))
}

export async function postActionModifyUsageLimit(
  args: InferRequestType<(typeof client)['#Action=ModifyUsageLimit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyUsageLimit'].$post(args, options))
}

export async function getActionPauseCluster(
  args: InferRequestType<(typeof client)['#Action=PauseCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PauseCluster'].$get(args, options))
}

export async function postActionPauseCluster(
  args: InferRequestType<(typeof client)['#Action=PauseCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PauseCluster'].$post(args, options))
}

export async function getActionPurchaseReservedNodeOffering(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PurchaseReservedNodeOffering'].$get(args, options))
}

export async function postActionPurchaseReservedNodeOffering(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedNodeOffering']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PurchaseReservedNodeOffering'].$post(args, options))
}

export async function getActionRebootCluster(
  args: InferRequestType<(typeof client)['#Action=RebootCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RebootCluster'].$get(args, options))
}

export async function postActionRebootCluster(
  args: InferRequestType<(typeof client)['#Action=RebootCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RebootCluster'].$post(args, options))
}

export async function getActionRejectDataShare(
  args: InferRequestType<(typeof client)['#Action=RejectDataShare']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RejectDataShare'].$get(args, options))
}

export async function postActionRejectDataShare(
  args: InferRequestType<(typeof client)['#Action=RejectDataShare']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RejectDataShare'].$post(args, options))
}

export async function getActionResetClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ResetClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetClusterParameterGroup'].$get(args, options))
}

export async function postActionResetClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ResetClusterParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetClusterParameterGroup'].$post(args, options))
}

export async function getActionResizeCluster(
  args: InferRequestType<(typeof client)['#Action=ResizeCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResizeCluster'].$get(args, options))
}

export async function postActionResizeCluster(
  args: InferRequestType<(typeof client)['#Action=ResizeCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResizeCluster'].$post(args, options))
}

export async function getActionRestoreFromClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreFromClusterSnapshot'].$get(args, options))
}

export async function postActionRestoreFromClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=RestoreFromClusterSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreFromClusterSnapshot'].$post(args, options))
}

export async function getActionRestoreTableFromClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreTableFromClusterSnapshot'].$get(args, options))
}

export async function postActionRestoreTableFromClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=RestoreTableFromClusterSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreTableFromClusterSnapshot'].$post(args, options))
}

export async function getActionResumeCluster(
  args: InferRequestType<(typeof client)['#Action=ResumeCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResumeCluster'].$get(args, options))
}

export async function postActionResumeCluster(
  args: InferRequestType<(typeof client)['#Action=ResumeCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResumeCluster'].$post(args, options))
}

export async function getActionRevokeClusterSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RevokeClusterSecurityGroupIngress'].$get(args, options),
  )
}

export async function postActionRevokeClusterSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=RevokeClusterSecurityGroupIngress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RevokeClusterSecurityGroupIngress'].$post(args, options),
  )
}

export async function getActionRevokeEndpointAccess(
  args: InferRequestType<(typeof client)['#Action=RevokeEndpointAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeEndpointAccess'].$get(args, options))
}

export async function postActionRevokeEndpointAccess(
  args: InferRequestType<(typeof client)['#Action=RevokeEndpointAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeEndpointAccess'].$post(args, options))
}

export async function getActionRevokeSnapshotAccess(
  args: InferRequestType<(typeof client)['#Action=RevokeSnapshotAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeSnapshotAccess'].$get(args, options))
}

export async function postActionRevokeSnapshotAccess(
  args: InferRequestType<(typeof client)['#Action=RevokeSnapshotAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeSnapshotAccess'].$post(args, options))
}

export async function getActionRotateEncryptionKey(
  args: InferRequestType<(typeof client)['#Action=RotateEncryptionKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RotateEncryptionKey'].$get(args, options))
}

export async function postActionRotateEncryptionKey(
  args: InferRequestType<(typeof client)['#Action=RotateEncryptionKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RotateEncryptionKey'].$post(args, options))
}

export async function getActionUpdatePartnerStatus(
  args: InferRequestType<(typeof client)['#Action=UpdatePartnerStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdatePartnerStatus'].$get(args, options))
}

export async function postActionUpdatePartnerStatus(
  args: InferRequestType<(typeof client)['#Action=UpdatePartnerStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdatePartnerStatus'].$post(args, options))
}

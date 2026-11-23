import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationFleet'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.AssociateApplicationToEntitlement'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceAssociateFleet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.AssociateFleet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.AssociateFleet'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStack(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.BatchAssociateUserStack'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStack(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.BatchDisassociateUserStack'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceCopyImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CopyImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.CopyImage'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceCreateAppBlock(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.CreateAppBlock'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceCreateApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.CreateApplication'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceCreateDirectoryConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.CreateDirectoryConfig'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceCreateEntitlement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.CreateEntitlement'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceCreateFleet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateFleet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.CreateFleet'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceCreateImageBuilder(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilder'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURL(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.CreateImageBuilderStreamingURL'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceCreateStack(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.CreateStack'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceCreateStreamingURL(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.CreateStreamingURL'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceCreateUpdatedImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.CreateUpdatedImage'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.CreateUsageReportSubscription'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceCreateUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.CreateUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.CreateUser'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDeleteAppBlock(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DeleteAppBlock'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDeleteApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DeleteApplication'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DeleteDirectoryConfig'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDeleteEntitlement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DeleteEntitlement'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDeleteFleet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteFleet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DeleteFleet'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDeleteImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DeleteImage'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDeleteImageBuilder(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DeleteImageBuilder'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDeleteImagePermissions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DeleteImagePermissions'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDeleteStack(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteStack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DeleteStack'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DeleteUsageReportSubscription'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDeleteUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DeleteUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DeleteUser'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeAppBlocks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeAppBlocks'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeApplicationFleetAssociations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeApplications(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeApplications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeApplications'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeDirectoryConfigs'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeEntitlements(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeEntitlements'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeFleets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeFleets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeFleets'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeImageBuilders(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeImageBuilders'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeImagePermissions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeImagePermissions'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeImages(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeImages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeImages'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeSessions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeSessions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeSessions'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeStacks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeStacks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeStacks'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeUsageReportSubscriptions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeUserStackAssociations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDescribeUsers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DescribeUsers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DescribeUsers'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDisableUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisableUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DisableUser'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFleet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DisassociateApplicationFromEntitlement'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceDisassociateFleet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.DisassociateFleet'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceEnableUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.EnableUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.EnableUser'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceExpireSession(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ExpireSession']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.ExpireSession'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceListAssociatedFleets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedFleets'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceListAssociatedStacks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.ListAssociatedStacks'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceListEntitledApplications(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.ListEntitledApplications'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceStartFleet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartFleet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.StartFleet'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceStartImageBuilder(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.StartImageBuilder'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceStopFleet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopFleet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.StopFleet'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceStopImageBuilder(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.StopImageBuilder'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceTagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceUpdateApplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateApplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.UpdateApplication'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.UpdateDirectoryConfig'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceUpdateEntitlement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.UpdateEntitlement'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceUpdateFleet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateFleet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.UpdateFleet'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceUpdateImagePermissions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.UpdateImagePermissions'].$post(args, options),
  )
}

export async function postXAmzTargetPhotonAdminProxyServiceUpdateStack(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PhotonAdminProxyService.UpdateStack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PhotonAdminProxyService.UpdateStack'].$post(args, options),
  )
}

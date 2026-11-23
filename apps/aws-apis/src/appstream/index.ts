import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetHandler,
  xAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementHandler,
  xAmzTargetPhotonAdminProxyServiceAssociateFleetHandler,
  xAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackHandler,
  xAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackHandler,
  xAmzTargetPhotonAdminProxyServiceCopyImageHandler,
  xAmzTargetPhotonAdminProxyServiceCreateAppBlockHandler,
  xAmzTargetPhotonAdminProxyServiceCreateApplicationHandler,
  xAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigHandler,
  xAmzTargetPhotonAdminProxyServiceCreateEntitlementHandler,
  xAmzTargetPhotonAdminProxyServiceCreateFleetHandler,
  xAmzTargetPhotonAdminProxyServiceCreateImageBuilderHandler,
  xAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingUrlHandler,
  xAmzTargetPhotonAdminProxyServiceCreateStackHandler,
  xAmzTargetPhotonAdminProxyServiceCreateStreamingUrlHandler,
  xAmzTargetPhotonAdminProxyServiceCreateUpdatedImageHandler,
  xAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionHandler,
  xAmzTargetPhotonAdminProxyServiceCreateUserHandler,
  xAmzTargetPhotonAdminProxyServiceDeleteAppBlockHandler,
  xAmzTargetPhotonAdminProxyServiceDeleteApplicationHandler,
  xAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigHandler,
  xAmzTargetPhotonAdminProxyServiceDeleteEntitlementHandler,
  xAmzTargetPhotonAdminProxyServiceDeleteFleetHandler,
  xAmzTargetPhotonAdminProxyServiceDeleteImageBuilderHandler,
  xAmzTargetPhotonAdminProxyServiceDeleteImageHandler,
  xAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsHandler,
  xAmzTargetPhotonAdminProxyServiceDeleteStackHandler,
  xAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionHandler,
  xAmzTargetPhotonAdminProxyServiceDeleteUserHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeAppBlocksHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeApplicationsHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeEntitlementsHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeFleetsHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeImageBuildersHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeImagesHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeSessionsHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeStacksHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeUsersHandler,
  xAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsHandler,
  xAmzTargetPhotonAdminProxyServiceDisableUserHandler,
  xAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetHandler,
  xAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementHandler,
  xAmzTargetPhotonAdminProxyServiceDisassociateFleetHandler,
  xAmzTargetPhotonAdminProxyServiceEnableUserHandler,
  xAmzTargetPhotonAdminProxyServiceExpireSessionHandler,
  xAmzTargetPhotonAdminProxyServiceListAssociatedFleetsHandler,
  xAmzTargetPhotonAdminProxyServiceListAssociatedStacksHandler,
  xAmzTargetPhotonAdminProxyServiceListEntitledApplicationsHandler,
  xAmzTargetPhotonAdminProxyServiceListTagsForResourceHandler,
  xAmzTargetPhotonAdminProxyServiceStartFleetHandler,
  xAmzTargetPhotonAdminProxyServiceStartImageBuilderHandler,
  xAmzTargetPhotonAdminProxyServiceStopFleetHandler,
  xAmzTargetPhotonAdminProxyServiceStopImageBuilderHandler,
  xAmzTargetPhotonAdminProxyServiceTagResourceHandler,
  xAmzTargetPhotonAdminProxyServiceUntagResourceHandler,
  xAmzTargetPhotonAdminProxyServiceUpdateApplicationHandler,
  xAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigHandler,
  xAmzTargetPhotonAdminProxyServiceUpdateEntitlementHandler,
  xAmzTargetPhotonAdminProxyServiceUpdateFleetHandler,
  xAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsHandler,
  xAmzTargetPhotonAdminProxyServiceUpdateStackHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceAssociateFleetHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceCopyImageHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceCreateAppBlockHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceCreateApplicationHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceCreateEntitlementHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceCreateFleetHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceCreateImageBuilderHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingUrlHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceCreateStackHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceCreateStreamingUrlHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceCreateUpdatedImageHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceCreateUserHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDeleteAppBlockHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDeleteApplicationHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDeleteEntitlementHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDeleteFleetHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDeleteImageHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDeleteImageBuilderHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDeleteStackHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDeleteUserHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeAppBlocksHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeApplicationsHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeEntitlementsHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeFleetsHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeImageBuildersHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeImagesHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeSessionsHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeStacksHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDescribeUsersHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDisableUserHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceDisassociateFleetHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceEnableUserHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceExpireSessionHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceListAssociatedFleetsHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceListAssociatedStacksHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceListEntitledApplicationsHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceListTagsForResourceHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceStartFleetHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceStartImageBuilderHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceStopFleetHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceStopImageBuilderHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceTagResourceHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceUntagResourceHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceUpdateApplicationHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceUpdateEntitlementHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceUpdateFleetHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsHandler)
  .route('/', xAmzTargetPhotonAdminProxyServiceUpdateStackHandler)

export default app

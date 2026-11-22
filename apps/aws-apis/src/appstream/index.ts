import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetHandler,
  XAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementHandler,
  XAmzTargetPhotonAdminProxyServiceAssociateFleetHandler,
  XAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackHandler,
  XAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackHandler,
  XAmzTargetPhotonAdminProxyServiceCopyImageHandler,
  XAmzTargetPhotonAdminProxyServiceCreateAppBlockHandler,
  XAmzTargetPhotonAdminProxyServiceCreateApplicationHandler,
  XAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigHandler,
  XAmzTargetPhotonAdminProxyServiceCreateEntitlementHandler,
  XAmzTargetPhotonAdminProxyServiceCreateFleetHandler,
  XAmzTargetPhotonAdminProxyServiceCreateImageBuilderHandler,
  XAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLHandler,
  XAmzTargetPhotonAdminProxyServiceCreateStackHandler,
  XAmzTargetPhotonAdminProxyServiceCreateStreamingURLHandler,
  XAmzTargetPhotonAdminProxyServiceCreateUpdatedImageHandler,
  XAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionHandler,
  XAmzTargetPhotonAdminProxyServiceCreateUserHandler,
  XAmzTargetPhotonAdminProxyServiceDeleteAppBlockHandler,
  XAmzTargetPhotonAdminProxyServiceDeleteApplicationHandler,
  XAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigHandler,
  XAmzTargetPhotonAdminProxyServiceDeleteEntitlementHandler,
  XAmzTargetPhotonAdminProxyServiceDeleteFleetHandler,
  XAmzTargetPhotonAdminProxyServiceDeleteImageBuilderHandler,
  XAmzTargetPhotonAdminProxyServiceDeleteImageHandler,
  XAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsHandler,
  XAmzTargetPhotonAdminProxyServiceDeleteStackHandler,
  XAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionHandler,
  XAmzTargetPhotonAdminProxyServiceDeleteUserHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeAppBlocksHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeApplicationsHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeEntitlementsHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeFleetsHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeImageBuildersHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeImagesHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeSessionsHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeStacksHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeUsersHandler,
  XAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsHandler,
  XAmzTargetPhotonAdminProxyServiceDisableUserHandler,
  XAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetHandler,
  XAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementHandler,
  XAmzTargetPhotonAdminProxyServiceDisassociateFleetHandler,
  XAmzTargetPhotonAdminProxyServiceEnableUserHandler,
  XAmzTargetPhotonAdminProxyServiceExpireSessionHandler,
  XAmzTargetPhotonAdminProxyServiceListAssociatedFleetsHandler,
  XAmzTargetPhotonAdminProxyServiceListAssociatedStacksHandler,
  XAmzTargetPhotonAdminProxyServiceListEntitledApplicationsHandler,
  XAmzTargetPhotonAdminProxyServiceListTagsForResourceHandler,
  XAmzTargetPhotonAdminProxyServiceStartFleetHandler,
  XAmzTargetPhotonAdminProxyServiceStartImageBuilderHandler,
  XAmzTargetPhotonAdminProxyServiceStopFleetHandler,
  XAmzTargetPhotonAdminProxyServiceStopImageBuilderHandler,
  XAmzTargetPhotonAdminProxyServiceTagResourceHandler,
  XAmzTargetPhotonAdminProxyServiceUntagResourceHandler,
  XAmzTargetPhotonAdminProxyServiceUpdateApplicationHandler,
  XAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigHandler,
  XAmzTargetPhotonAdminProxyServiceUpdateEntitlementHandler,
  XAmzTargetPhotonAdminProxyServiceUpdateFleetHandler,
  XAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsHandler,
  XAmzTargetPhotonAdminProxyServiceUpdateStackHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceAssociateFleetHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceCopyImageHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceCreateAppBlockHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceCreateApplicationHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceCreateEntitlementHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceCreateFleetHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceCreateImageBuilderHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceCreateStackHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceCreateStreamingURLHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceCreateUpdatedImageHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceCreateUsageReportSubscriptionHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceCreateUserHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDeleteAppBlockHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDeleteApplicationHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDeleteEntitlementHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDeleteFleetHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDeleteImageHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDeleteImageBuilderHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDeleteStackHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDeleteUsageReportSubscriptionHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDeleteUserHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeAppBlocksHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeApplicationFleetAssociationsHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeApplicationsHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeEntitlementsHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeFleetsHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeImageBuildersHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeImagesHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeSessionsHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeStacksHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeUsageReportSubscriptionsHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDescribeUsersHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDisableUserHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDisassociateApplicationFleetHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceDisassociateFleetHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceEnableUserHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceExpireSessionHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceListAssociatedFleetsHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceListAssociatedStacksHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceListEntitledApplicationsHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceListTagsForResourceHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceStartFleetHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceStartImageBuilderHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceStopFleetHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceStopImageBuilderHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceTagResourceHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceUntagResourceHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceUpdateApplicationHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceUpdateEntitlementHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceUpdateFleetHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsHandler)
  .route('/', XAmzTargetPhotonAdminProxyServiceUpdateStackHandler)

export default app

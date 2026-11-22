import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetDirectoryService20150416AcceptSharedDirectoryHandler,
  XAmzTargetDirectoryService20150416AddIpRoutesHandler,
  XAmzTargetDirectoryService20150416AddRegionHandler,
  XAmzTargetDirectoryService20150416AddTagsToResourceHandler,
  XAmzTargetDirectoryService20150416CancelSchemaExtensionHandler,
  XAmzTargetDirectoryService20150416ConnectDirectoryHandler,
  XAmzTargetDirectoryService20150416CreateAliasHandler,
  XAmzTargetDirectoryService20150416CreateComputerHandler,
  XAmzTargetDirectoryService20150416CreateConditionalForwarderHandler,
  XAmzTargetDirectoryService20150416CreateDirectoryHandler,
  XAmzTargetDirectoryService20150416CreateLogSubscriptionHandler,
  XAmzTargetDirectoryService20150416CreateMicrosoftADHandler,
  XAmzTargetDirectoryService20150416CreateSnapshotHandler,
  XAmzTargetDirectoryService20150416CreateTrustHandler,
  XAmzTargetDirectoryService20150416DeleteConditionalForwarderHandler,
  XAmzTargetDirectoryService20150416DeleteDirectoryHandler,
  XAmzTargetDirectoryService20150416DeleteLogSubscriptionHandler,
  XAmzTargetDirectoryService20150416DeleteSnapshotHandler,
  XAmzTargetDirectoryService20150416DeleteTrustHandler,
  XAmzTargetDirectoryService20150416DeregisterCertificateHandler,
  XAmzTargetDirectoryService20150416DeregisterEventTopicHandler,
  XAmzTargetDirectoryService20150416DescribeCertificateHandler,
  XAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsHandler,
  XAmzTargetDirectoryService20150416DescribeConditionalForwardersHandler,
  XAmzTargetDirectoryService20150416DescribeDirectoriesHandler,
  XAmzTargetDirectoryService20150416DescribeDomainControllersHandler,
  XAmzTargetDirectoryService20150416DescribeEventTopicsHandler,
  XAmzTargetDirectoryService20150416DescribeLDAPSSettingsHandler,
  XAmzTargetDirectoryService20150416DescribeRegionsHandler,
  XAmzTargetDirectoryService20150416DescribeSettingsHandler,
  XAmzTargetDirectoryService20150416DescribeSharedDirectoriesHandler,
  XAmzTargetDirectoryService20150416DescribeSnapshotsHandler,
  XAmzTargetDirectoryService20150416DescribeTrustsHandler,
  XAmzTargetDirectoryService20150416DescribeUpdateDirectoryHandler,
  XAmzTargetDirectoryService20150416DisableClientAuthenticationHandler,
  XAmzTargetDirectoryService20150416DisableLDAPSHandler,
  XAmzTargetDirectoryService20150416DisableRadiusHandler,
  XAmzTargetDirectoryService20150416DisableSsoHandler,
  XAmzTargetDirectoryService20150416EnableClientAuthenticationHandler,
  XAmzTargetDirectoryService20150416EnableLDAPSHandler,
  XAmzTargetDirectoryService20150416EnableRadiusHandler,
  XAmzTargetDirectoryService20150416EnableSsoHandler,
  XAmzTargetDirectoryService20150416GetDirectoryLimitsHandler,
  XAmzTargetDirectoryService20150416GetSnapshotLimitsHandler,
  XAmzTargetDirectoryService20150416ListCertificatesHandler,
  XAmzTargetDirectoryService20150416ListIpRoutesHandler,
  XAmzTargetDirectoryService20150416ListLogSubscriptionsHandler,
  XAmzTargetDirectoryService20150416ListSchemaExtensionsHandler,
  XAmzTargetDirectoryService20150416ListTagsForResourceHandler,
  XAmzTargetDirectoryService20150416RegisterCertificateHandler,
  XAmzTargetDirectoryService20150416RegisterEventTopicHandler,
  XAmzTargetDirectoryService20150416RejectSharedDirectoryHandler,
  XAmzTargetDirectoryService20150416RemoveIpRoutesHandler,
  XAmzTargetDirectoryService20150416RemoveRegionHandler,
  XAmzTargetDirectoryService20150416RemoveTagsFromResourceHandler,
  XAmzTargetDirectoryService20150416ResetUserPasswordHandler,
  XAmzTargetDirectoryService20150416RestoreFromSnapshotHandler,
  XAmzTargetDirectoryService20150416ShareDirectoryHandler,
  XAmzTargetDirectoryService20150416StartSchemaExtensionHandler,
  XAmzTargetDirectoryService20150416UnshareDirectoryHandler,
  XAmzTargetDirectoryService20150416UpdateConditionalForwarderHandler,
  XAmzTargetDirectoryService20150416UpdateDirectorySetupHandler,
  XAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersHandler,
  XAmzTargetDirectoryService20150416UpdateRadiusHandler,
  XAmzTargetDirectoryService20150416UpdateSettingsHandler,
  XAmzTargetDirectoryService20150416UpdateTrustHandler,
  XAmzTargetDirectoryService20150416VerifyTrustHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetDirectoryService20150416AcceptSharedDirectoryHandler)
  .route('/', XAmzTargetDirectoryService20150416AddIpRoutesHandler)
  .route('/', XAmzTargetDirectoryService20150416AddRegionHandler)
  .route('/', XAmzTargetDirectoryService20150416AddTagsToResourceHandler)
  .route('/', XAmzTargetDirectoryService20150416CancelSchemaExtensionHandler)
  .route('/', XAmzTargetDirectoryService20150416ConnectDirectoryHandler)
  .route('/', XAmzTargetDirectoryService20150416CreateAliasHandler)
  .route('/', XAmzTargetDirectoryService20150416CreateComputerHandler)
  .route('/', XAmzTargetDirectoryService20150416CreateConditionalForwarderHandler)
  .route('/', XAmzTargetDirectoryService20150416CreateDirectoryHandler)
  .route('/', XAmzTargetDirectoryService20150416CreateLogSubscriptionHandler)
  .route('/', XAmzTargetDirectoryService20150416CreateMicrosoftADHandler)
  .route('/', XAmzTargetDirectoryService20150416CreateSnapshotHandler)
  .route('/', XAmzTargetDirectoryService20150416CreateTrustHandler)
  .route('/', XAmzTargetDirectoryService20150416DeleteConditionalForwarderHandler)
  .route('/', XAmzTargetDirectoryService20150416DeleteDirectoryHandler)
  .route('/', XAmzTargetDirectoryService20150416DeleteLogSubscriptionHandler)
  .route('/', XAmzTargetDirectoryService20150416DeleteSnapshotHandler)
  .route('/', XAmzTargetDirectoryService20150416DeleteTrustHandler)
  .route('/', XAmzTargetDirectoryService20150416DeregisterCertificateHandler)
  .route('/', XAmzTargetDirectoryService20150416DeregisterEventTopicHandler)
  .route('/', XAmzTargetDirectoryService20150416DescribeCertificateHandler)
  .route('/', XAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsHandler)
  .route('/', XAmzTargetDirectoryService20150416DescribeConditionalForwardersHandler)
  .route('/', XAmzTargetDirectoryService20150416DescribeDirectoriesHandler)
  .route('/', XAmzTargetDirectoryService20150416DescribeDomainControllersHandler)
  .route('/', XAmzTargetDirectoryService20150416DescribeEventTopicsHandler)
  .route('/', XAmzTargetDirectoryService20150416DescribeLDAPSSettingsHandler)
  .route('/', XAmzTargetDirectoryService20150416DescribeRegionsHandler)
  .route('/', XAmzTargetDirectoryService20150416DescribeSettingsHandler)
  .route('/', XAmzTargetDirectoryService20150416DescribeSharedDirectoriesHandler)
  .route('/', XAmzTargetDirectoryService20150416DescribeSnapshotsHandler)
  .route('/', XAmzTargetDirectoryService20150416DescribeTrustsHandler)
  .route('/', XAmzTargetDirectoryService20150416DescribeUpdateDirectoryHandler)
  .route('/', XAmzTargetDirectoryService20150416DisableClientAuthenticationHandler)
  .route('/', XAmzTargetDirectoryService20150416DisableLDAPSHandler)
  .route('/', XAmzTargetDirectoryService20150416DisableRadiusHandler)
  .route('/', XAmzTargetDirectoryService20150416DisableSsoHandler)
  .route('/', XAmzTargetDirectoryService20150416EnableClientAuthenticationHandler)
  .route('/', XAmzTargetDirectoryService20150416EnableLDAPSHandler)
  .route('/', XAmzTargetDirectoryService20150416EnableRadiusHandler)
  .route('/', XAmzTargetDirectoryService20150416EnableSsoHandler)
  .route('/', XAmzTargetDirectoryService20150416GetDirectoryLimitsHandler)
  .route('/', XAmzTargetDirectoryService20150416GetSnapshotLimitsHandler)
  .route('/', XAmzTargetDirectoryService20150416ListCertificatesHandler)
  .route('/', XAmzTargetDirectoryService20150416ListIpRoutesHandler)
  .route('/', XAmzTargetDirectoryService20150416ListLogSubscriptionsHandler)
  .route('/', XAmzTargetDirectoryService20150416ListSchemaExtensionsHandler)
  .route('/', XAmzTargetDirectoryService20150416ListTagsForResourceHandler)
  .route('/', XAmzTargetDirectoryService20150416RegisterCertificateHandler)
  .route('/', XAmzTargetDirectoryService20150416RegisterEventTopicHandler)
  .route('/', XAmzTargetDirectoryService20150416RejectSharedDirectoryHandler)
  .route('/', XAmzTargetDirectoryService20150416RemoveIpRoutesHandler)
  .route('/', XAmzTargetDirectoryService20150416RemoveRegionHandler)
  .route('/', XAmzTargetDirectoryService20150416RemoveTagsFromResourceHandler)
  .route('/', XAmzTargetDirectoryService20150416ResetUserPasswordHandler)
  .route('/', XAmzTargetDirectoryService20150416RestoreFromSnapshotHandler)
  .route('/', XAmzTargetDirectoryService20150416ShareDirectoryHandler)
  .route('/', XAmzTargetDirectoryService20150416StartSchemaExtensionHandler)
  .route('/', XAmzTargetDirectoryService20150416UnshareDirectoryHandler)
  .route('/', XAmzTargetDirectoryService20150416UpdateConditionalForwarderHandler)
  .route('/', XAmzTargetDirectoryService20150416UpdateDirectorySetupHandler)
  .route('/', XAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersHandler)
  .route('/', XAmzTargetDirectoryService20150416UpdateRadiusHandler)
  .route('/', XAmzTargetDirectoryService20150416UpdateSettingsHandler)
  .route('/', XAmzTargetDirectoryService20150416UpdateTrustHandler)
  .route('/', XAmzTargetDirectoryService20150416VerifyTrustHandler)

export default app

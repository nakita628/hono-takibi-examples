import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetDirectoryService20150416AcceptSharedDirectoryHandler,
  xAmzTargetDirectoryService20150416AddIpRoutesHandler,
  xAmzTargetDirectoryService20150416AddRegionHandler,
  xAmzTargetDirectoryService20150416AddTagsToResourceHandler,
  xAmzTargetDirectoryService20150416CancelSchemaExtensionHandler,
  xAmzTargetDirectoryService20150416ConnectDirectoryHandler,
  xAmzTargetDirectoryService20150416CreateAliasHandler,
  xAmzTargetDirectoryService20150416CreateComputerHandler,
  xAmzTargetDirectoryService20150416CreateConditionalForwarderHandler,
  xAmzTargetDirectoryService20150416CreateDirectoryHandler,
  xAmzTargetDirectoryService20150416CreateLogSubscriptionHandler,
  xAmzTargetDirectoryService20150416CreateMicrosoftAdHandler,
  xAmzTargetDirectoryService20150416CreateSnapshotHandler,
  xAmzTargetDirectoryService20150416CreateTrustHandler,
  xAmzTargetDirectoryService20150416DeleteConditionalForwarderHandler,
  xAmzTargetDirectoryService20150416DeleteDirectoryHandler,
  xAmzTargetDirectoryService20150416DeleteLogSubscriptionHandler,
  xAmzTargetDirectoryService20150416DeleteSnapshotHandler,
  xAmzTargetDirectoryService20150416DeleteTrustHandler,
  xAmzTargetDirectoryService20150416DeregisterCertificateHandler,
  xAmzTargetDirectoryService20150416DeregisterEventTopicHandler,
  xAmzTargetDirectoryService20150416DescribeCertificateHandler,
  xAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsHandler,
  xAmzTargetDirectoryService20150416DescribeConditionalForwardersHandler,
  xAmzTargetDirectoryService20150416DescribeDirectoriesHandler,
  xAmzTargetDirectoryService20150416DescribeDomainControllersHandler,
  xAmzTargetDirectoryService20150416DescribeEventTopicsHandler,
  xAmzTargetDirectoryService20150416DescribeLdapsSettingsHandler,
  xAmzTargetDirectoryService20150416DescribeRegionsHandler,
  xAmzTargetDirectoryService20150416DescribeSettingsHandler,
  xAmzTargetDirectoryService20150416DescribeSharedDirectoriesHandler,
  xAmzTargetDirectoryService20150416DescribeSnapshotsHandler,
  xAmzTargetDirectoryService20150416DescribeTrustsHandler,
  xAmzTargetDirectoryService20150416DescribeUpdateDirectoryHandler,
  xAmzTargetDirectoryService20150416DisableClientAuthenticationHandler,
  xAmzTargetDirectoryService20150416DisableLdapsHandler,
  xAmzTargetDirectoryService20150416DisableRadiusHandler,
  xAmzTargetDirectoryService20150416DisableSsoHandler,
  xAmzTargetDirectoryService20150416EnableClientAuthenticationHandler,
  xAmzTargetDirectoryService20150416EnableLdapsHandler,
  xAmzTargetDirectoryService20150416EnableRadiusHandler,
  xAmzTargetDirectoryService20150416EnableSsoHandler,
  xAmzTargetDirectoryService20150416GetDirectoryLimitsHandler,
  xAmzTargetDirectoryService20150416GetSnapshotLimitsHandler,
  xAmzTargetDirectoryService20150416ListCertificatesHandler,
  xAmzTargetDirectoryService20150416ListIpRoutesHandler,
  xAmzTargetDirectoryService20150416ListLogSubscriptionsHandler,
  xAmzTargetDirectoryService20150416ListSchemaExtensionsHandler,
  xAmzTargetDirectoryService20150416ListTagsForResourceHandler,
  xAmzTargetDirectoryService20150416RegisterCertificateHandler,
  xAmzTargetDirectoryService20150416RegisterEventTopicHandler,
  xAmzTargetDirectoryService20150416RejectSharedDirectoryHandler,
  xAmzTargetDirectoryService20150416RemoveIpRoutesHandler,
  xAmzTargetDirectoryService20150416RemoveRegionHandler,
  xAmzTargetDirectoryService20150416RemoveTagsFromResourceHandler,
  xAmzTargetDirectoryService20150416ResetUserPasswordHandler,
  xAmzTargetDirectoryService20150416RestoreFromSnapshotHandler,
  xAmzTargetDirectoryService20150416ShareDirectoryHandler,
  xAmzTargetDirectoryService20150416StartSchemaExtensionHandler,
  xAmzTargetDirectoryService20150416UnshareDirectoryHandler,
  xAmzTargetDirectoryService20150416UpdateConditionalForwarderHandler,
  xAmzTargetDirectoryService20150416UpdateDirectorySetupHandler,
  xAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersHandler,
  xAmzTargetDirectoryService20150416UpdateRadiusHandler,
  xAmzTargetDirectoryService20150416UpdateSettingsHandler,
  xAmzTargetDirectoryService20150416UpdateTrustHandler,
  xAmzTargetDirectoryService20150416VerifyTrustHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetDirectoryService20150416AcceptSharedDirectoryHandler)
  .route('/', xAmzTargetDirectoryService20150416AddIpRoutesHandler)
  .route('/', xAmzTargetDirectoryService20150416AddRegionHandler)
  .route('/', xAmzTargetDirectoryService20150416AddTagsToResourceHandler)
  .route('/', xAmzTargetDirectoryService20150416CancelSchemaExtensionHandler)
  .route('/', xAmzTargetDirectoryService20150416ConnectDirectoryHandler)
  .route('/', xAmzTargetDirectoryService20150416CreateAliasHandler)
  .route('/', xAmzTargetDirectoryService20150416CreateComputerHandler)
  .route('/', xAmzTargetDirectoryService20150416CreateConditionalForwarderHandler)
  .route('/', xAmzTargetDirectoryService20150416CreateDirectoryHandler)
  .route('/', xAmzTargetDirectoryService20150416CreateLogSubscriptionHandler)
  .route('/', xAmzTargetDirectoryService20150416CreateMicrosoftAdHandler)
  .route('/', xAmzTargetDirectoryService20150416CreateSnapshotHandler)
  .route('/', xAmzTargetDirectoryService20150416CreateTrustHandler)
  .route('/', xAmzTargetDirectoryService20150416DeleteConditionalForwarderHandler)
  .route('/', xAmzTargetDirectoryService20150416DeleteDirectoryHandler)
  .route('/', xAmzTargetDirectoryService20150416DeleteLogSubscriptionHandler)
  .route('/', xAmzTargetDirectoryService20150416DeleteSnapshotHandler)
  .route('/', xAmzTargetDirectoryService20150416DeleteTrustHandler)
  .route('/', xAmzTargetDirectoryService20150416DeregisterCertificateHandler)
  .route('/', xAmzTargetDirectoryService20150416DeregisterEventTopicHandler)
  .route('/', xAmzTargetDirectoryService20150416DescribeCertificateHandler)
  .route('/', xAmzTargetDirectoryService20150416DescribeClientAuthenticationSettingsHandler)
  .route('/', xAmzTargetDirectoryService20150416DescribeConditionalForwardersHandler)
  .route('/', xAmzTargetDirectoryService20150416DescribeDirectoriesHandler)
  .route('/', xAmzTargetDirectoryService20150416DescribeDomainControllersHandler)
  .route('/', xAmzTargetDirectoryService20150416DescribeEventTopicsHandler)
  .route('/', xAmzTargetDirectoryService20150416DescribeLdapsSettingsHandler)
  .route('/', xAmzTargetDirectoryService20150416DescribeRegionsHandler)
  .route('/', xAmzTargetDirectoryService20150416DescribeSettingsHandler)
  .route('/', xAmzTargetDirectoryService20150416DescribeSharedDirectoriesHandler)
  .route('/', xAmzTargetDirectoryService20150416DescribeSnapshotsHandler)
  .route('/', xAmzTargetDirectoryService20150416DescribeTrustsHandler)
  .route('/', xAmzTargetDirectoryService20150416DescribeUpdateDirectoryHandler)
  .route('/', xAmzTargetDirectoryService20150416DisableClientAuthenticationHandler)
  .route('/', xAmzTargetDirectoryService20150416DisableLdapsHandler)
  .route('/', xAmzTargetDirectoryService20150416DisableRadiusHandler)
  .route('/', xAmzTargetDirectoryService20150416DisableSsoHandler)
  .route('/', xAmzTargetDirectoryService20150416EnableClientAuthenticationHandler)
  .route('/', xAmzTargetDirectoryService20150416EnableLdapsHandler)
  .route('/', xAmzTargetDirectoryService20150416EnableRadiusHandler)
  .route('/', xAmzTargetDirectoryService20150416EnableSsoHandler)
  .route('/', xAmzTargetDirectoryService20150416GetDirectoryLimitsHandler)
  .route('/', xAmzTargetDirectoryService20150416GetSnapshotLimitsHandler)
  .route('/', xAmzTargetDirectoryService20150416ListCertificatesHandler)
  .route('/', xAmzTargetDirectoryService20150416ListIpRoutesHandler)
  .route('/', xAmzTargetDirectoryService20150416ListLogSubscriptionsHandler)
  .route('/', xAmzTargetDirectoryService20150416ListSchemaExtensionsHandler)
  .route('/', xAmzTargetDirectoryService20150416ListTagsForResourceHandler)
  .route('/', xAmzTargetDirectoryService20150416RegisterCertificateHandler)
  .route('/', xAmzTargetDirectoryService20150416RegisterEventTopicHandler)
  .route('/', xAmzTargetDirectoryService20150416RejectSharedDirectoryHandler)
  .route('/', xAmzTargetDirectoryService20150416RemoveIpRoutesHandler)
  .route('/', xAmzTargetDirectoryService20150416RemoveRegionHandler)
  .route('/', xAmzTargetDirectoryService20150416RemoveTagsFromResourceHandler)
  .route('/', xAmzTargetDirectoryService20150416ResetUserPasswordHandler)
  .route('/', xAmzTargetDirectoryService20150416RestoreFromSnapshotHandler)
  .route('/', xAmzTargetDirectoryService20150416ShareDirectoryHandler)
  .route('/', xAmzTargetDirectoryService20150416StartSchemaExtensionHandler)
  .route('/', xAmzTargetDirectoryService20150416UnshareDirectoryHandler)
  .route('/', xAmzTargetDirectoryService20150416UpdateConditionalForwarderHandler)
  .route('/', xAmzTargetDirectoryService20150416UpdateDirectorySetupHandler)
  .route('/', xAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersHandler)
  .route('/', xAmzTargetDirectoryService20150416UpdateRadiusHandler)
  .route('/', xAmzTargetDirectoryService20150416UpdateSettingsHandler)
  .route('/', xAmzTargetDirectoryService20150416UpdateTrustHandler)
  .route('/', xAmzTargetDirectoryService20150416VerifyTrustHandler)

export default app

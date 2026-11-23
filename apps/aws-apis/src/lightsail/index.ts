import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetLightsail20161128AllocateStaticIpHandler,
  xAmzTargetLightsail20161128AttachCertificateToDistributionHandler,
  xAmzTargetLightsail20161128AttachDiskHandler,
  xAmzTargetLightsail20161128AttachInstancesToLoadBalancerHandler,
  xAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateHandler,
  xAmzTargetLightsail20161128AttachStaticIpHandler,
  xAmzTargetLightsail20161128CloseInstancePublicPortsHandler,
  xAmzTargetLightsail20161128CopySnapshotHandler,
  xAmzTargetLightsail20161128CreateBucketAccessKeyHandler,
  xAmzTargetLightsail20161128CreateBucketHandler,
  xAmzTargetLightsail20161128CreateCertificateHandler,
  xAmzTargetLightsail20161128CreateCloudFormationStackHandler,
  xAmzTargetLightsail20161128CreateContactMethodHandler,
  xAmzTargetLightsail20161128CreateContainerServiceDeploymentHandler,
  xAmzTargetLightsail20161128CreateContainerServiceHandler,
  xAmzTargetLightsail20161128CreateContainerServiceRegistryLoginHandler,
  xAmzTargetLightsail20161128CreateDiskFromSnapshotHandler,
  xAmzTargetLightsail20161128CreateDiskHandler,
  xAmzTargetLightsail20161128CreateDiskSnapshotHandler,
  xAmzTargetLightsail20161128CreateDistributionHandler,
  xAmzTargetLightsail20161128CreateDomainEntryHandler,
  xAmzTargetLightsail20161128CreateDomainHandler,
  xAmzTargetLightsail20161128CreateGuiSessionAccessDetailsHandler,
  xAmzTargetLightsail20161128CreateInstancesFromSnapshotHandler,
  xAmzTargetLightsail20161128CreateInstancesHandler,
  xAmzTargetLightsail20161128CreateInstanceSnapshotHandler,
  xAmzTargetLightsail20161128CreateKeyPairHandler,
  xAmzTargetLightsail20161128CreateLoadBalancerHandler,
  xAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateHandler,
  xAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotHandler,
  xAmzTargetLightsail20161128CreateRelationalDatabaseHandler,
  xAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotHandler,
  xAmzTargetLightsail20161128DeleteAlarmHandler,
  xAmzTargetLightsail20161128DeleteAutoSnapshotHandler,
  xAmzTargetLightsail20161128DeleteBucketAccessKeyHandler,
  xAmzTargetLightsail20161128DeleteBucketHandler,
  xAmzTargetLightsail20161128DeleteCertificateHandler,
  xAmzTargetLightsail20161128DeleteContactMethodHandler,
  xAmzTargetLightsail20161128DeleteContainerImageHandler,
  xAmzTargetLightsail20161128DeleteContainerServiceHandler,
  xAmzTargetLightsail20161128DeleteDiskHandler,
  xAmzTargetLightsail20161128DeleteDiskSnapshotHandler,
  xAmzTargetLightsail20161128DeleteDistributionHandler,
  xAmzTargetLightsail20161128DeleteDomainEntryHandler,
  xAmzTargetLightsail20161128DeleteDomainHandler,
  xAmzTargetLightsail20161128DeleteInstanceHandler,
  xAmzTargetLightsail20161128DeleteInstanceSnapshotHandler,
  xAmzTargetLightsail20161128DeleteKeyPairHandler,
  xAmzTargetLightsail20161128DeleteKnownHostKeysHandler,
  xAmzTargetLightsail20161128DeleteLoadBalancerHandler,
  xAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateHandler,
  xAmzTargetLightsail20161128DeleteRelationalDatabaseHandler,
  xAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotHandler,
  xAmzTargetLightsail20161128DetachCertificateFromDistributionHandler,
  xAmzTargetLightsail20161128DetachDiskHandler,
  xAmzTargetLightsail20161128DetachInstancesFromLoadBalancerHandler,
  xAmzTargetLightsail20161128DetachStaticIpHandler,
  xAmzTargetLightsail20161128DisableAddOnHandler,
  xAmzTargetLightsail20161128DownloadDefaultKeyPairHandler,
  xAmzTargetLightsail20161128EnableAddOnHandler,
  xAmzTargetLightsail20161128ExportSnapshotHandler,
  xAmzTargetLightsail20161128GetActiveNamesHandler,
  xAmzTargetLightsail20161128GetAlarmsHandler,
  xAmzTargetLightsail20161128GetAutoSnapshotsHandler,
  xAmzTargetLightsail20161128GetBlueprintsHandler,
  xAmzTargetLightsail20161128GetBucketAccessKeysHandler,
  xAmzTargetLightsail20161128GetBucketBundlesHandler,
  xAmzTargetLightsail20161128GetBucketMetricDataHandler,
  xAmzTargetLightsail20161128GetBucketsHandler,
  xAmzTargetLightsail20161128GetBundlesHandler,
  xAmzTargetLightsail20161128GetCertificatesHandler,
  xAmzTargetLightsail20161128GetCloudFormationStackRecordsHandler,
  xAmzTargetLightsail20161128GetContactMethodsHandler,
  xAmzTargetLightsail20161128GetContainerApiMetadataHandler,
  xAmzTargetLightsail20161128GetContainerImagesHandler,
  xAmzTargetLightsail20161128GetContainerLogHandler,
  xAmzTargetLightsail20161128GetContainerServiceDeploymentsHandler,
  xAmzTargetLightsail20161128GetContainerServiceMetricDataHandler,
  xAmzTargetLightsail20161128GetContainerServicePowersHandler,
  xAmzTargetLightsail20161128GetContainerServicesHandler,
  xAmzTargetLightsail20161128GetCostEstimateHandler,
  xAmzTargetLightsail20161128GetDiskHandler,
  xAmzTargetLightsail20161128GetDisksHandler,
  xAmzTargetLightsail20161128GetDiskSnapshotHandler,
  xAmzTargetLightsail20161128GetDiskSnapshotsHandler,
  xAmzTargetLightsail20161128GetDistributionBundlesHandler,
  xAmzTargetLightsail20161128GetDistributionLatestCacheResetHandler,
  xAmzTargetLightsail20161128GetDistributionMetricDataHandler,
  xAmzTargetLightsail20161128GetDistributionsHandler,
  xAmzTargetLightsail20161128GetDomainHandler,
  xAmzTargetLightsail20161128GetDomainsHandler,
  xAmzTargetLightsail20161128GetExportSnapshotRecordsHandler,
  xAmzTargetLightsail20161128GetInstanceAccessDetailsHandler,
  xAmzTargetLightsail20161128GetInstanceHandler,
  xAmzTargetLightsail20161128GetInstanceMetricDataHandler,
  xAmzTargetLightsail20161128GetInstancePortStatesHandler,
  xAmzTargetLightsail20161128GetInstancesHandler,
  xAmzTargetLightsail20161128GetInstanceSnapshotHandler,
  xAmzTargetLightsail20161128GetInstanceSnapshotsHandler,
  xAmzTargetLightsail20161128GetInstanceStateHandler,
  xAmzTargetLightsail20161128GetKeyPairHandler,
  xAmzTargetLightsail20161128GetKeyPairsHandler,
  xAmzTargetLightsail20161128GetLoadBalancerHandler,
  xAmzTargetLightsail20161128GetLoadBalancerMetricDataHandler,
  xAmzTargetLightsail20161128GetLoadBalancersHandler,
  xAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesHandler,
  xAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesHandler,
  xAmzTargetLightsail20161128GetOperationHandler,
  xAmzTargetLightsail20161128GetOperationsForResourceHandler,
  xAmzTargetLightsail20161128GetOperationsHandler,
  xAmzTargetLightsail20161128GetRegionsHandler,
  xAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsHandler,
  xAmzTargetLightsail20161128GetRelationalDatabaseBundlesHandler,
  xAmzTargetLightsail20161128GetRelationalDatabaseEventsHandler,
  xAmzTargetLightsail20161128GetRelationalDatabaseHandler,
  xAmzTargetLightsail20161128GetRelationalDatabaseLogEventsHandler,
  xAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsHandler,
  xAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordHandler,
  xAmzTargetLightsail20161128GetRelationalDatabaseMetricDataHandler,
  xAmzTargetLightsail20161128GetRelationalDatabaseParametersHandler,
  xAmzTargetLightsail20161128GetRelationalDatabasesHandler,
  xAmzTargetLightsail20161128GetRelationalDatabaseSnapshotHandler,
  xAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsHandler,
  xAmzTargetLightsail20161128GetStaticIpHandler,
  xAmzTargetLightsail20161128GetStaticIpsHandler,
  xAmzTargetLightsail20161128ImportKeyPairHandler,
  xAmzTargetLightsail20161128IsVpcPeeredHandler,
  xAmzTargetLightsail20161128OpenInstancePublicPortsHandler,
  xAmzTargetLightsail20161128PeerVpcHandler,
  xAmzTargetLightsail20161128PutAlarmHandler,
  xAmzTargetLightsail20161128PutInstancePublicPortsHandler,
  xAmzTargetLightsail20161128RebootInstanceHandler,
  xAmzTargetLightsail20161128RebootRelationalDatabaseHandler,
  xAmzTargetLightsail20161128RegisterContainerImageHandler,
  xAmzTargetLightsail20161128ReleaseStaticIpHandler,
  xAmzTargetLightsail20161128ResetDistributionCacheHandler,
  xAmzTargetLightsail20161128SendContactMethodVerificationHandler,
  xAmzTargetLightsail20161128SetIpAddressTypeHandler,
  xAmzTargetLightsail20161128SetResourceAccessForBucketHandler,
  xAmzTargetLightsail20161128StartGuiSessionHandler,
  xAmzTargetLightsail20161128StartInstanceHandler,
  xAmzTargetLightsail20161128StartRelationalDatabaseHandler,
  xAmzTargetLightsail20161128StopGuiSessionHandler,
  xAmzTargetLightsail20161128StopInstanceHandler,
  xAmzTargetLightsail20161128StopRelationalDatabaseHandler,
  xAmzTargetLightsail20161128TagResourceHandler,
  xAmzTargetLightsail20161128TestAlarmHandler,
  xAmzTargetLightsail20161128UnpeerVpcHandler,
  xAmzTargetLightsail20161128UntagResourceHandler,
  xAmzTargetLightsail20161128UpdateBucketBundleHandler,
  xAmzTargetLightsail20161128UpdateBucketHandler,
  xAmzTargetLightsail20161128UpdateContainerServiceHandler,
  xAmzTargetLightsail20161128UpdateDistributionBundleHandler,
  xAmzTargetLightsail20161128UpdateDistributionHandler,
  xAmzTargetLightsail20161128UpdateDomainEntryHandler,
  xAmzTargetLightsail20161128UpdateInstanceMetadataOptionsHandler,
  xAmzTargetLightsail20161128UpdateLoadBalancerAttributeHandler,
  xAmzTargetLightsail20161128UpdateRelationalDatabaseHandler,
  xAmzTargetLightsail20161128UpdateRelationalDatabaseParametersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetLightsail20161128AllocateStaticIpHandler)
  .route('/', xAmzTargetLightsail20161128AttachCertificateToDistributionHandler)
  .route('/', xAmzTargetLightsail20161128AttachDiskHandler)
  .route('/', xAmzTargetLightsail20161128AttachInstancesToLoadBalancerHandler)
  .route('/', xAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateHandler)
  .route('/', xAmzTargetLightsail20161128AttachStaticIpHandler)
  .route('/', xAmzTargetLightsail20161128CloseInstancePublicPortsHandler)
  .route('/', xAmzTargetLightsail20161128CopySnapshotHandler)
  .route('/', xAmzTargetLightsail20161128CreateBucketHandler)
  .route('/', xAmzTargetLightsail20161128CreateBucketAccessKeyHandler)
  .route('/', xAmzTargetLightsail20161128CreateCertificateHandler)
  .route('/', xAmzTargetLightsail20161128CreateCloudFormationStackHandler)
  .route('/', xAmzTargetLightsail20161128CreateContactMethodHandler)
  .route('/', xAmzTargetLightsail20161128CreateContainerServiceHandler)
  .route('/', xAmzTargetLightsail20161128CreateContainerServiceDeploymentHandler)
  .route('/', xAmzTargetLightsail20161128CreateContainerServiceRegistryLoginHandler)
  .route('/', xAmzTargetLightsail20161128CreateDiskHandler)
  .route('/', xAmzTargetLightsail20161128CreateDiskFromSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128CreateDiskSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128CreateDistributionHandler)
  .route('/', xAmzTargetLightsail20161128CreateDomainHandler)
  .route('/', xAmzTargetLightsail20161128CreateDomainEntryHandler)
  .route('/', xAmzTargetLightsail20161128CreateGuiSessionAccessDetailsHandler)
  .route('/', xAmzTargetLightsail20161128CreateInstanceSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128CreateInstancesHandler)
  .route('/', xAmzTargetLightsail20161128CreateInstancesFromSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128CreateKeyPairHandler)
  .route('/', xAmzTargetLightsail20161128CreateLoadBalancerHandler)
  .route('/', xAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateHandler)
  .route('/', xAmzTargetLightsail20161128CreateRelationalDatabaseHandler)
  .route('/', xAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128DeleteAlarmHandler)
  .route('/', xAmzTargetLightsail20161128DeleteAutoSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128DeleteBucketHandler)
  .route('/', xAmzTargetLightsail20161128DeleteBucketAccessKeyHandler)
  .route('/', xAmzTargetLightsail20161128DeleteCertificateHandler)
  .route('/', xAmzTargetLightsail20161128DeleteContactMethodHandler)
  .route('/', xAmzTargetLightsail20161128DeleteContainerImageHandler)
  .route('/', xAmzTargetLightsail20161128DeleteContainerServiceHandler)
  .route('/', xAmzTargetLightsail20161128DeleteDiskHandler)
  .route('/', xAmzTargetLightsail20161128DeleteDiskSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128DeleteDistributionHandler)
  .route('/', xAmzTargetLightsail20161128DeleteDomainHandler)
  .route('/', xAmzTargetLightsail20161128DeleteDomainEntryHandler)
  .route('/', xAmzTargetLightsail20161128DeleteInstanceHandler)
  .route('/', xAmzTargetLightsail20161128DeleteInstanceSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128DeleteKeyPairHandler)
  .route('/', xAmzTargetLightsail20161128DeleteKnownHostKeysHandler)
  .route('/', xAmzTargetLightsail20161128DeleteLoadBalancerHandler)
  .route('/', xAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateHandler)
  .route('/', xAmzTargetLightsail20161128DeleteRelationalDatabaseHandler)
  .route('/', xAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128DetachCertificateFromDistributionHandler)
  .route('/', xAmzTargetLightsail20161128DetachDiskHandler)
  .route('/', xAmzTargetLightsail20161128DetachInstancesFromLoadBalancerHandler)
  .route('/', xAmzTargetLightsail20161128DetachStaticIpHandler)
  .route('/', xAmzTargetLightsail20161128DisableAddOnHandler)
  .route('/', xAmzTargetLightsail20161128DownloadDefaultKeyPairHandler)
  .route('/', xAmzTargetLightsail20161128EnableAddOnHandler)
  .route('/', xAmzTargetLightsail20161128ExportSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128GetActiveNamesHandler)
  .route('/', xAmzTargetLightsail20161128GetAlarmsHandler)
  .route('/', xAmzTargetLightsail20161128GetAutoSnapshotsHandler)
  .route('/', xAmzTargetLightsail20161128GetBlueprintsHandler)
  .route('/', xAmzTargetLightsail20161128GetBucketAccessKeysHandler)
  .route('/', xAmzTargetLightsail20161128GetBucketBundlesHandler)
  .route('/', xAmzTargetLightsail20161128GetBucketMetricDataHandler)
  .route('/', xAmzTargetLightsail20161128GetBucketsHandler)
  .route('/', xAmzTargetLightsail20161128GetBundlesHandler)
  .route('/', xAmzTargetLightsail20161128GetCertificatesHandler)
  .route('/', xAmzTargetLightsail20161128GetCloudFormationStackRecordsHandler)
  .route('/', xAmzTargetLightsail20161128GetContactMethodsHandler)
  .route('/', xAmzTargetLightsail20161128GetContainerApiMetadataHandler)
  .route('/', xAmzTargetLightsail20161128GetContainerImagesHandler)
  .route('/', xAmzTargetLightsail20161128GetContainerLogHandler)
  .route('/', xAmzTargetLightsail20161128GetContainerServiceDeploymentsHandler)
  .route('/', xAmzTargetLightsail20161128GetContainerServiceMetricDataHandler)
  .route('/', xAmzTargetLightsail20161128GetContainerServicePowersHandler)
  .route('/', xAmzTargetLightsail20161128GetContainerServicesHandler)
  .route('/', xAmzTargetLightsail20161128GetCostEstimateHandler)
  .route('/', xAmzTargetLightsail20161128GetDiskHandler)
  .route('/', xAmzTargetLightsail20161128GetDiskSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128GetDiskSnapshotsHandler)
  .route('/', xAmzTargetLightsail20161128GetDisksHandler)
  .route('/', xAmzTargetLightsail20161128GetDistributionBundlesHandler)
  .route('/', xAmzTargetLightsail20161128GetDistributionLatestCacheResetHandler)
  .route('/', xAmzTargetLightsail20161128GetDistributionMetricDataHandler)
  .route('/', xAmzTargetLightsail20161128GetDistributionsHandler)
  .route('/', xAmzTargetLightsail20161128GetDomainHandler)
  .route('/', xAmzTargetLightsail20161128GetDomainsHandler)
  .route('/', xAmzTargetLightsail20161128GetExportSnapshotRecordsHandler)
  .route('/', xAmzTargetLightsail20161128GetInstanceHandler)
  .route('/', xAmzTargetLightsail20161128GetInstanceAccessDetailsHandler)
  .route('/', xAmzTargetLightsail20161128GetInstanceMetricDataHandler)
  .route('/', xAmzTargetLightsail20161128GetInstancePortStatesHandler)
  .route('/', xAmzTargetLightsail20161128GetInstanceSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128GetInstanceSnapshotsHandler)
  .route('/', xAmzTargetLightsail20161128GetInstanceStateHandler)
  .route('/', xAmzTargetLightsail20161128GetInstancesHandler)
  .route('/', xAmzTargetLightsail20161128GetKeyPairHandler)
  .route('/', xAmzTargetLightsail20161128GetKeyPairsHandler)
  .route('/', xAmzTargetLightsail20161128GetLoadBalancerHandler)
  .route('/', xAmzTargetLightsail20161128GetLoadBalancerMetricDataHandler)
  .route('/', xAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesHandler)
  .route('/', xAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesHandler)
  .route('/', xAmzTargetLightsail20161128GetLoadBalancersHandler)
  .route('/', xAmzTargetLightsail20161128GetOperationHandler)
  .route('/', xAmzTargetLightsail20161128GetOperationsHandler)
  .route('/', xAmzTargetLightsail20161128GetOperationsForResourceHandler)
  .route('/', xAmzTargetLightsail20161128GetRegionsHandler)
  .route('/', xAmzTargetLightsail20161128GetRelationalDatabaseHandler)
  .route('/', xAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsHandler)
  .route('/', xAmzTargetLightsail20161128GetRelationalDatabaseBundlesHandler)
  .route('/', xAmzTargetLightsail20161128GetRelationalDatabaseEventsHandler)
  .route('/', xAmzTargetLightsail20161128GetRelationalDatabaseLogEventsHandler)
  .route('/', xAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsHandler)
  .route('/', xAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordHandler)
  .route('/', xAmzTargetLightsail20161128GetRelationalDatabaseMetricDataHandler)
  .route('/', xAmzTargetLightsail20161128GetRelationalDatabaseParametersHandler)
  .route('/', xAmzTargetLightsail20161128GetRelationalDatabaseSnapshotHandler)
  .route('/', xAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsHandler)
  .route('/', xAmzTargetLightsail20161128GetRelationalDatabasesHandler)
  .route('/', xAmzTargetLightsail20161128GetStaticIpHandler)
  .route('/', xAmzTargetLightsail20161128GetStaticIpsHandler)
  .route('/', xAmzTargetLightsail20161128ImportKeyPairHandler)
  .route('/', xAmzTargetLightsail20161128IsVpcPeeredHandler)
  .route('/', xAmzTargetLightsail20161128OpenInstancePublicPortsHandler)
  .route('/', xAmzTargetLightsail20161128PeerVpcHandler)
  .route('/', xAmzTargetLightsail20161128PutAlarmHandler)
  .route('/', xAmzTargetLightsail20161128PutInstancePublicPortsHandler)
  .route('/', xAmzTargetLightsail20161128RebootInstanceHandler)
  .route('/', xAmzTargetLightsail20161128RebootRelationalDatabaseHandler)
  .route('/', xAmzTargetLightsail20161128RegisterContainerImageHandler)
  .route('/', xAmzTargetLightsail20161128ReleaseStaticIpHandler)
  .route('/', xAmzTargetLightsail20161128ResetDistributionCacheHandler)
  .route('/', xAmzTargetLightsail20161128SendContactMethodVerificationHandler)
  .route('/', xAmzTargetLightsail20161128SetIpAddressTypeHandler)
  .route('/', xAmzTargetLightsail20161128SetResourceAccessForBucketHandler)
  .route('/', xAmzTargetLightsail20161128StartGuiSessionHandler)
  .route('/', xAmzTargetLightsail20161128StartInstanceHandler)
  .route('/', xAmzTargetLightsail20161128StartRelationalDatabaseHandler)
  .route('/', xAmzTargetLightsail20161128StopGuiSessionHandler)
  .route('/', xAmzTargetLightsail20161128StopInstanceHandler)
  .route('/', xAmzTargetLightsail20161128StopRelationalDatabaseHandler)
  .route('/', xAmzTargetLightsail20161128TagResourceHandler)
  .route('/', xAmzTargetLightsail20161128TestAlarmHandler)
  .route('/', xAmzTargetLightsail20161128UnpeerVpcHandler)
  .route('/', xAmzTargetLightsail20161128UntagResourceHandler)
  .route('/', xAmzTargetLightsail20161128UpdateBucketHandler)
  .route('/', xAmzTargetLightsail20161128UpdateBucketBundleHandler)
  .route('/', xAmzTargetLightsail20161128UpdateContainerServiceHandler)
  .route('/', xAmzTargetLightsail20161128UpdateDistributionHandler)
  .route('/', xAmzTargetLightsail20161128UpdateDistributionBundleHandler)
  .route('/', xAmzTargetLightsail20161128UpdateDomainEntryHandler)
  .route('/', xAmzTargetLightsail20161128UpdateInstanceMetadataOptionsHandler)
  .route('/', xAmzTargetLightsail20161128UpdateLoadBalancerAttributeHandler)
  .route('/', xAmzTargetLightsail20161128UpdateRelationalDatabaseHandler)
  .route('/', xAmzTargetLightsail20161128UpdateRelationalDatabaseParametersHandler)

export default app

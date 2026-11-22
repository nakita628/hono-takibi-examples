import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetLightsail20161128AllocateStaticIpHandler,
  XAmzTargetLightsail20161128AttachCertificateToDistributionHandler,
  XAmzTargetLightsail20161128AttachDiskHandler,
  XAmzTargetLightsail20161128AttachInstancesToLoadBalancerHandler,
  XAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateHandler,
  XAmzTargetLightsail20161128AttachStaticIpHandler,
  XAmzTargetLightsail20161128CloseInstancePublicPortsHandler,
  XAmzTargetLightsail20161128CopySnapshotHandler,
  XAmzTargetLightsail20161128CreateBucketAccessKeyHandler,
  XAmzTargetLightsail20161128CreateBucketHandler,
  XAmzTargetLightsail20161128CreateCertificateHandler,
  XAmzTargetLightsail20161128CreateCloudFormationStackHandler,
  XAmzTargetLightsail20161128CreateContactMethodHandler,
  XAmzTargetLightsail20161128CreateContainerServiceDeploymentHandler,
  XAmzTargetLightsail20161128CreateContainerServiceHandler,
  XAmzTargetLightsail20161128CreateContainerServiceRegistryLoginHandler,
  XAmzTargetLightsail20161128CreateDiskFromSnapshotHandler,
  XAmzTargetLightsail20161128CreateDiskHandler,
  XAmzTargetLightsail20161128CreateDiskSnapshotHandler,
  XAmzTargetLightsail20161128CreateDistributionHandler,
  XAmzTargetLightsail20161128CreateDomainEntryHandler,
  XAmzTargetLightsail20161128CreateDomainHandler,
  XAmzTargetLightsail20161128CreateGUISessionAccessDetailsHandler,
  XAmzTargetLightsail20161128CreateInstancesFromSnapshotHandler,
  XAmzTargetLightsail20161128CreateInstancesHandler,
  XAmzTargetLightsail20161128CreateInstanceSnapshotHandler,
  XAmzTargetLightsail20161128CreateKeyPairHandler,
  XAmzTargetLightsail20161128CreateLoadBalancerHandler,
  XAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateHandler,
  XAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotHandler,
  XAmzTargetLightsail20161128CreateRelationalDatabaseHandler,
  XAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotHandler,
  XAmzTargetLightsail20161128DeleteAlarmHandler,
  XAmzTargetLightsail20161128DeleteAutoSnapshotHandler,
  XAmzTargetLightsail20161128DeleteBucketAccessKeyHandler,
  XAmzTargetLightsail20161128DeleteBucketHandler,
  XAmzTargetLightsail20161128DeleteCertificateHandler,
  XAmzTargetLightsail20161128DeleteContactMethodHandler,
  XAmzTargetLightsail20161128DeleteContainerImageHandler,
  XAmzTargetLightsail20161128DeleteContainerServiceHandler,
  XAmzTargetLightsail20161128DeleteDiskHandler,
  XAmzTargetLightsail20161128DeleteDiskSnapshotHandler,
  XAmzTargetLightsail20161128DeleteDistributionHandler,
  XAmzTargetLightsail20161128DeleteDomainEntryHandler,
  XAmzTargetLightsail20161128DeleteDomainHandler,
  XAmzTargetLightsail20161128DeleteInstanceHandler,
  XAmzTargetLightsail20161128DeleteInstanceSnapshotHandler,
  XAmzTargetLightsail20161128DeleteKeyPairHandler,
  XAmzTargetLightsail20161128DeleteKnownHostKeysHandler,
  XAmzTargetLightsail20161128DeleteLoadBalancerHandler,
  XAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateHandler,
  XAmzTargetLightsail20161128DeleteRelationalDatabaseHandler,
  XAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotHandler,
  XAmzTargetLightsail20161128DetachCertificateFromDistributionHandler,
  XAmzTargetLightsail20161128DetachDiskHandler,
  XAmzTargetLightsail20161128DetachInstancesFromLoadBalancerHandler,
  XAmzTargetLightsail20161128DetachStaticIpHandler,
  XAmzTargetLightsail20161128DisableAddOnHandler,
  XAmzTargetLightsail20161128DownloadDefaultKeyPairHandler,
  XAmzTargetLightsail20161128EnableAddOnHandler,
  XAmzTargetLightsail20161128ExportSnapshotHandler,
  XAmzTargetLightsail20161128GetActiveNamesHandler,
  XAmzTargetLightsail20161128GetAlarmsHandler,
  XAmzTargetLightsail20161128GetAutoSnapshotsHandler,
  XAmzTargetLightsail20161128GetBlueprintsHandler,
  XAmzTargetLightsail20161128GetBucketAccessKeysHandler,
  XAmzTargetLightsail20161128GetBucketBundlesHandler,
  XAmzTargetLightsail20161128GetBucketMetricDataHandler,
  XAmzTargetLightsail20161128GetBucketsHandler,
  XAmzTargetLightsail20161128GetBundlesHandler,
  XAmzTargetLightsail20161128GetCertificatesHandler,
  XAmzTargetLightsail20161128GetCloudFormationStackRecordsHandler,
  XAmzTargetLightsail20161128GetContactMethodsHandler,
  XAmzTargetLightsail20161128GetContainerAPIMetadataHandler,
  XAmzTargetLightsail20161128GetContainerImagesHandler,
  XAmzTargetLightsail20161128GetContainerLogHandler,
  XAmzTargetLightsail20161128GetContainerServiceDeploymentsHandler,
  XAmzTargetLightsail20161128GetContainerServiceMetricDataHandler,
  XAmzTargetLightsail20161128GetContainerServicePowersHandler,
  XAmzTargetLightsail20161128GetContainerServicesHandler,
  XAmzTargetLightsail20161128GetCostEstimateHandler,
  XAmzTargetLightsail20161128GetDiskHandler,
  XAmzTargetLightsail20161128GetDisksHandler,
  XAmzTargetLightsail20161128GetDiskSnapshotHandler,
  XAmzTargetLightsail20161128GetDiskSnapshotsHandler,
  XAmzTargetLightsail20161128GetDistributionBundlesHandler,
  XAmzTargetLightsail20161128GetDistributionLatestCacheResetHandler,
  XAmzTargetLightsail20161128GetDistributionMetricDataHandler,
  XAmzTargetLightsail20161128GetDistributionsHandler,
  XAmzTargetLightsail20161128GetDomainHandler,
  XAmzTargetLightsail20161128GetDomainsHandler,
  XAmzTargetLightsail20161128GetExportSnapshotRecordsHandler,
  XAmzTargetLightsail20161128GetInstanceAccessDetailsHandler,
  XAmzTargetLightsail20161128GetInstanceHandler,
  XAmzTargetLightsail20161128GetInstanceMetricDataHandler,
  XAmzTargetLightsail20161128GetInstancePortStatesHandler,
  XAmzTargetLightsail20161128GetInstancesHandler,
  XAmzTargetLightsail20161128GetInstanceSnapshotHandler,
  XAmzTargetLightsail20161128GetInstanceSnapshotsHandler,
  XAmzTargetLightsail20161128GetInstanceStateHandler,
  XAmzTargetLightsail20161128GetKeyPairHandler,
  XAmzTargetLightsail20161128GetKeyPairsHandler,
  XAmzTargetLightsail20161128GetLoadBalancerHandler,
  XAmzTargetLightsail20161128GetLoadBalancerMetricDataHandler,
  XAmzTargetLightsail20161128GetLoadBalancersHandler,
  XAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesHandler,
  XAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesHandler,
  XAmzTargetLightsail20161128GetOperationHandler,
  XAmzTargetLightsail20161128GetOperationsForResourceHandler,
  XAmzTargetLightsail20161128GetOperationsHandler,
  XAmzTargetLightsail20161128GetRegionsHandler,
  XAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsHandler,
  XAmzTargetLightsail20161128GetRelationalDatabaseBundlesHandler,
  XAmzTargetLightsail20161128GetRelationalDatabaseEventsHandler,
  XAmzTargetLightsail20161128GetRelationalDatabaseHandler,
  XAmzTargetLightsail20161128GetRelationalDatabaseLogEventsHandler,
  XAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsHandler,
  XAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordHandler,
  XAmzTargetLightsail20161128GetRelationalDatabaseMetricDataHandler,
  XAmzTargetLightsail20161128GetRelationalDatabaseParametersHandler,
  XAmzTargetLightsail20161128GetRelationalDatabasesHandler,
  XAmzTargetLightsail20161128GetRelationalDatabaseSnapshotHandler,
  XAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsHandler,
  XAmzTargetLightsail20161128GetStaticIpHandler,
  XAmzTargetLightsail20161128GetStaticIpsHandler,
  XAmzTargetLightsail20161128ImportKeyPairHandler,
  XAmzTargetLightsail20161128IsVpcPeeredHandler,
  XAmzTargetLightsail20161128OpenInstancePublicPortsHandler,
  XAmzTargetLightsail20161128PeerVpcHandler,
  XAmzTargetLightsail20161128PutAlarmHandler,
  XAmzTargetLightsail20161128PutInstancePublicPortsHandler,
  XAmzTargetLightsail20161128RebootInstanceHandler,
  XAmzTargetLightsail20161128RebootRelationalDatabaseHandler,
  XAmzTargetLightsail20161128RegisterContainerImageHandler,
  XAmzTargetLightsail20161128ReleaseStaticIpHandler,
  XAmzTargetLightsail20161128ResetDistributionCacheHandler,
  XAmzTargetLightsail20161128SendContactMethodVerificationHandler,
  XAmzTargetLightsail20161128SetIpAddressTypeHandler,
  XAmzTargetLightsail20161128SetResourceAccessForBucketHandler,
  XAmzTargetLightsail20161128StartGUISessionHandler,
  XAmzTargetLightsail20161128StartInstanceHandler,
  XAmzTargetLightsail20161128StartRelationalDatabaseHandler,
  XAmzTargetLightsail20161128StopGUISessionHandler,
  XAmzTargetLightsail20161128StopInstanceHandler,
  XAmzTargetLightsail20161128StopRelationalDatabaseHandler,
  XAmzTargetLightsail20161128TagResourceHandler,
  XAmzTargetLightsail20161128TestAlarmHandler,
  XAmzTargetLightsail20161128UnpeerVpcHandler,
  XAmzTargetLightsail20161128UntagResourceHandler,
  XAmzTargetLightsail20161128UpdateBucketBundleHandler,
  XAmzTargetLightsail20161128UpdateBucketHandler,
  XAmzTargetLightsail20161128UpdateContainerServiceHandler,
  XAmzTargetLightsail20161128UpdateDistributionBundleHandler,
  XAmzTargetLightsail20161128UpdateDistributionHandler,
  XAmzTargetLightsail20161128UpdateDomainEntryHandler,
  XAmzTargetLightsail20161128UpdateInstanceMetadataOptionsHandler,
  XAmzTargetLightsail20161128UpdateLoadBalancerAttributeHandler,
  XAmzTargetLightsail20161128UpdateRelationalDatabaseHandler,
  XAmzTargetLightsail20161128UpdateRelationalDatabaseParametersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetLightsail20161128AllocateStaticIpHandler)
  .route('/', XAmzTargetLightsail20161128AttachCertificateToDistributionHandler)
  .route('/', XAmzTargetLightsail20161128AttachDiskHandler)
  .route('/', XAmzTargetLightsail20161128AttachInstancesToLoadBalancerHandler)
  .route('/', XAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateHandler)
  .route('/', XAmzTargetLightsail20161128AttachStaticIpHandler)
  .route('/', XAmzTargetLightsail20161128CloseInstancePublicPortsHandler)
  .route('/', XAmzTargetLightsail20161128CopySnapshotHandler)
  .route('/', XAmzTargetLightsail20161128CreateBucketHandler)
  .route('/', XAmzTargetLightsail20161128CreateBucketAccessKeyHandler)
  .route('/', XAmzTargetLightsail20161128CreateCertificateHandler)
  .route('/', XAmzTargetLightsail20161128CreateCloudFormationStackHandler)
  .route('/', XAmzTargetLightsail20161128CreateContactMethodHandler)
  .route('/', XAmzTargetLightsail20161128CreateContainerServiceHandler)
  .route('/', XAmzTargetLightsail20161128CreateContainerServiceDeploymentHandler)
  .route('/', XAmzTargetLightsail20161128CreateContainerServiceRegistryLoginHandler)
  .route('/', XAmzTargetLightsail20161128CreateDiskHandler)
  .route('/', XAmzTargetLightsail20161128CreateDiskFromSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128CreateDiskSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128CreateDistributionHandler)
  .route('/', XAmzTargetLightsail20161128CreateDomainHandler)
  .route('/', XAmzTargetLightsail20161128CreateDomainEntryHandler)
  .route('/', XAmzTargetLightsail20161128CreateGUISessionAccessDetailsHandler)
  .route('/', XAmzTargetLightsail20161128CreateInstanceSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128CreateInstancesHandler)
  .route('/', XAmzTargetLightsail20161128CreateInstancesFromSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128CreateKeyPairHandler)
  .route('/', XAmzTargetLightsail20161128CreateLoadBalancerHandler)
  .route('/', XAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateHandler)
  .route('/', XAmzTargetLightsail20161128CreateRelationalDatabaseHandler)
  .route('/', XAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128DeleteAlarmHandler)
  .route('/', XAmzTargetLightsail20161128DeleteAutoSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128DeleteBucketHandler)
  .route('/', XAmzTargetLightsail20161128DeleteBucketAccessKeyHandler)
  .route('/', XAmzTargetLightsail20161128DeleteCertificateHandler)
  .route('/', XAmzTargetLightsail20161128DeleteContactMethodHandler)
  .route('/', XAmzTargetLightsail20161128DeleteContainerImageHandler)
  .route('/', XAmzTargetLightsail20161128DeleteContainerServiceHandler)
  .route('/', XAmzTargetLightsail20161128DeleteDiskHandler)
  .route('/', XAmzTargetLightsail20161128DeleteDiskSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128DeleteDistributionHandler)
  .route('/', XAmzTargetLightsail20161128DeleteDomainHandler)
  .route('/', XAmzTargetLightsail20161128DeleteDomainEntryHandler)
  .route('/', XAmzTargetLightsail20161128DeleteInstanceHandler)
  .route('/', XAmzTargetLightsail20161128DeleteInstanceSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128DeleteKeyPairHandler)
  .route('/', XAmzTargetLightsail20161128DeleteKnownHostKeysHandler)
  .route('/', XAmzTargetLightsail20161128DeleteLoadBalancerHandler)
  .route('/', XAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateHandler)
  .route('/', XAmzTargetLightsail20161128DeleteRelationalDatabaseHandler)
  .route('/', XAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128DetachCertificateFromDistributionHandler)
  .route('/', XAmzTargetLightsail20161128DetachDiskHandler)
  .route('/', XAmzTargetLightsail20161128DetachInstancesFromLoadBalancerHandler)
  .route('/', XAmzTargetLightsail20161128DetachStaticIpHandler)
  .route('/', XAmzTargetLightsail20161128DisableAddOnHandler)
  .route('/', XAmzTargetLightsail20161128DownloadDefaultKeyPairHandler)
  .route('/', XAmzTargetLightsail20161128EnableAddOnHandler)
  .route('/', XAmzTargetLightsail20161128ExportSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128GetActiveNamesHandler)
  .route('/', XAmzTargetLightsail20161128GetAlarmsHandler)
  .route('/', XAmzTargetLightsail20161128GetAutoSnapshotsHandler)
  .route('/', XAmzTargetLightsail20161128GetBlueprintsHandler)
  .route('/', XAmzTargetLightsail20161128GetBucketAccessKeysHandler)
  .route('/', XAmzTargetLightsail20161128GetBucketBundlesHandler)
  .route('/', XAmzTargetLightsail20161128GetBucketMetricDataHandler)
  .route('/', XAmzTargetLightsail20161128GetBucketsHandler)
  .route('/', XAmzTargetLightsail20161128GetBundlesHandler)
  .route('/', XAmzTargetLightsail20161128GetCertificatesHandler)
  .route('/', XAmzTargetLightsail20161128GetCloudFormationStackRecordsHandler)
  .route('/', XAmzTargetLightsail20161128GetContactMethodsHandler)
  .route('/', XAmzTargetLightsail20161128GetContainerAPIMetadataHandler)
  .route('/', XAmzTargetLightsail20161128GetContainerImagesHandler)
  .route('/', XAmzTargetLightsail20161128GetContainerLogHandler)
  .route('/', XAmzTargetLightsail20161128GetContainerServiceDeploymentsHandler)
  .route('/', XAmzTargetLightsail20161128GetContainerServiceMetricDataHandler)
  .route('/', XAmzTargetLightsail20161128GetContainerServicePowersHandler)
  .route('/', XAmzTargetLightsail20161128GetContainerServicesHandler)
  .route('/', XAmzTargetLightsail20161128GetCostEstimateHandler)
  .route('/', XAmzTargetLightsail20161128GetDiskHandler)
  .route('/', XAmzTargetLightsail20161128GetDiskSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128GetDiskSnapshotsHandler)
  .route('/', XAmzTargetLightsail20161128GetDisksHandler)
  .route('/', XAmzTargetLightsail20161128GetDistributionBundlesHandler)
  .route('/', XAmzTargetLightsail20161128GetDistributionLatestCacheResetHandler)
  .route('/', XAmzTargetLightsail20161128GetDistributionMetricDataHandler)
  .route('/', XAmzTargetLightsail20161128GetDistributionsHandler)
  .route('/', XAmzTargetLightsail20161128GetDomainHandler)
  .route('/', XAmzTargetLightsail20161128GetDomainsHandler)
  .route('/', XAmzTargetLightsail20161128GetExportSnapshotRecordsHandler)
  .route('/', XAmzTargetLightsail20161128GetInstanceHandler)
  .route('/', XAmzTargetLightsail20161128GetInstanceAccessDetailsHandler)
  .route('/', XAmzTargetLightsail20161128GetInstanceMetricDataHandler)
  .route('/', XAmzTargetLightsail20161128GetInstancePortStatesHandler)
  .route('/', XAmzTargetLightsail20161128GetInstanceSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128GetInstanceSnapshotsHandler)
  .route('/', XAmzTargetLightsail20161128GetInstanceStateHandler)
  .route('/', XAmzTargetLightsail20161128GetInstancesHandler)
  .route('/', XAmzTargetLightsail20161128GetKeyPairHandler)
  .route('/', XAmzTargetLightsail20161128GetKeyPairsHandler)
  .route('/', XAmzTargetLightsail20161128GetLoadBalancerHandler)
  .route('/', XAmzTargetLightsail20161128GetLoadBalancerMetricDataHandler)
  .route('/', XAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesHandler)
  .route('/', XAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesHandler)
  .route('/', XAmzTargetLightsail20161128GetLoadBalancersHandler)
  .route('/', XAmzTargetLightsail20161128GetOperationHandler)
  .route('/', XAmzTargetLightsail20161128GetOperationsHandler)
  .route('/', XAmzTargetLightsail20161128GetOperationsForResourceHandler)
  .route('/', XAmzTargetLightsail20161128GetRegionsHandler)
  .route('/', XAmzTargetLightsail20161128GetRelationalDatabaseHandler)
  .route('/', XAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsHandler)
  .route('/', XAmzTargetLightsail20161128GetRelationalDatabaseBundlesHandler)
  .route('/', XAmzTargetLightsail20161128GetRelationalDatabaseEventsHandler)
  .route('/', XAmzTargetLightsail20161128GetRelationalDatabaseLogEventsHandler)
  .route('/', XAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsHandler)
  .route('/', XAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordHandler)
  .route('/', XAmzTargetLightsail20161128GetRelationalDatabaseMetricDataHandler)
  .route('/', XAmzTargetLightsail20161128GetRelationalDatabaseParametersHandler)
  .route('/', XAmzTargetLightsail20161128GetRelationalDatabaseSnapshotHandler)
  .route('/', XAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsHandler)
  .route('/', XAmzTargetLightsail20161128GetRelationalDatabasesHandler)
  .route('/', XAmzTargetLightsail20161128GetStaticIpHandler)
  .route('/', XAmzTargetLightsail20161128GetStaticIpsHandler)
  .route('/', XAmzTargetLightsail20161128ImportKeyPairHandler)
  .route('/', XAmzTargetLightsail20161128IsVpcPeeredHandler)
  .route('/', XAmzTargetLightsail20161128OpenInstancePublicPortsHandler)
  .route('/', XAmzTargetLightsail20161128PeerVpcHandler)
  .route('/', XAmzTargetLightsail20161128PutAlarmHandler)
  .route('/', XAmzTargetLightsail20161128PutInstancePublicPortsHandler)
  .route('/', XAmzTargetLightsail20161128RebootInstanceHandler)
  .route('/', XAmzTargetLightsail20161128RebootRelationalDatabaseHandler)
  .route('/', XAmzTargetLightsail20161128RegisterContainerImageHandler)
  .route('/', XAmzTargetLightsail20161128ReleaseStaticIpHandler)
  .route('/', XAmzTargetLightsail20161128ResetDistributionCacheHandler)
  .route('/', XAmzTargetLightsail20161128SendContactMethodVerificationHandler)
  .route('/', XAmzTargetLightsail20161128SetIpAddressTypeHandler)
  .route('/', XAmzTargetLightsail20161128SetResourceAccessForBucketHandler)
  .route('/', XAmzTargetLightsail20161128StartGUISessionHandler)
  .route('/', XAmzTargetLightsail20161128StartInstanceHandler)
  .route('/', XAmzTargetLightsail20161128StartRelationalDatabaseHandler)
  .route('/', XAmzTargetLightsail20161128StopGUISessionHandler)
  .route('/', XAmzTargetLightsail20161128StopInstanceHandler)
  .route('/', XAmzTargetLightsail20161128StopRelationalDatabaseHandler)
  .route('/', XAmzTargetLightsail20161128TagResourceHandler)
  .route('/', XAmzTargetLightsail20161128TestAlarmHandler)
  .route('/', XAmzTargetLightsail20161128UnpeerVpcHandler)
  .route('/', XAmzTargetLightsail20161128UntagResourceHandler)
  .route('/', XAmzTargetLightsail20161128UpdateBucketHandler)
  .route('/', XAmzTargetLightsail20161128UpdateBucketBundleHandler)
  .route('/', XAmzTargetLightsail20161128UpdateContainerServiceHandler)
  .route('/', XAmzTargetLightsail20161128UpdateDistributionHandler)
  .route('/', XAmzTargetLightsail20161128UpdateDistributionBundleHandler)
  .route('/', XAmzTargetLightsail20161128UpdateDomainEntryHandler)
  .route('/', XAmzTargetLightsail20161128UpdateInstanceMetadataOptionsHandler)
  .route('/', XAmzTargetLightsail20161128UpdateLoadBalancerAttributeHandler)
  .route('/', XAmzTargetLightsail20161128UpdateRelationalDatabaseHandler)
  .route('/', XAmzTargetLightsail20161128UpdateRelationalDatabaseParametersHandler)

export default app

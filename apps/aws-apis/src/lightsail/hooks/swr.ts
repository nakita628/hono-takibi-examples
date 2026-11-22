import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetLightsail_20161128AllocateStaticIpKey() {
  return ['#X-Amz-Target=Lightsail_20161128.AllocateStaticIp'] as const
}

export function getXAmzTargetLightsail_20161128AttachCertificateToDistributionKey() {
  return ['#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution'] as const
}

export function getXAmzTargetLightsail_20161128AttachDiskKey() {
  return ['#X-Amz-Target=Lightsail_20161128.AttachDisk'] as const
}

export function getXAmzTargetLightsail_20161128AttachInstancesToLoadBalancerKey() {
  return ['#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer'] as const
}

export function getXAmzTargetLightsail_20161128AttachLoadBalancerTlsCertificateKey() {
  return ['#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate'] as const
}

export function getXAmzTargetLightsail_20161128AttachStaticIpKey() {
  return ['#X-Amz-Target=Lightsail_20161128.AttachStaticIp'] as const
}

export function getXAmzTargetLightsail_20161128CloseInstancePublicPortsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts'] as const
}

export function getXAmzTargetLightsail_20161128CopySnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CopySnapshot'] as const
}

export function getXAmzTargetLightsail_20161128CreateBucketKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateBucket'] as const
}

export function getXAmzTargetLightsail_20161128CreateBucketAccessKeyKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey'] as const
}

export function getXAmzTargetLightsail_20161128CreateCertificateKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateCertificate'] as const
}

export function getXAmzTargetLightsail_20161128CreateCloudFormationStackKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack'] as const
}

export function getXAmzTargetLightsail_20161128CreateContactMethodKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateContactMethod'] as const
}

export function getXAmzTargetLightsail_20161128CreateContainerServiceKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateContainerService'] as const
}

export function getXAmzTargetLightsail_20161128CreateContainerServiceDeploymentKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment'] as const
}

export function getXAmzTargetLightsail_20161128CreateContainerServiceRegistryLoginKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin'] as const
}

export function getXAmzTargetLightsail_20161128CreateDiskKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateDisk'] as const
}

export function getXAmzTargetLightsail_20161128CreateDiskFromSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128CreateDiskSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128CreateDistributionKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateDistribution'] as const
}

export function getXAmzTargetLightsail_20161128CreateDomainKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateDomain'] as const
}

export function getXAmzTargetLightsail_20161128CreateDomainEntryKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateDomainEntry'] as const
}

export function getXAmzTargetLightsail_20161128CreateGUISessionAccessDetailsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails'] as const
}

export function getXAmzTargetLightsail_20161128CreateInstanceSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128CreateInstancesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateInstances'] as const
}

export function getXAmzTargetLightsail_20161128CreateInstancesFromSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128CreateKeyPairKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateKeyPair'] as const
}

export function getXAmzTargetLightsail_20161128CreateLoadBalancerKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer'] as const
}

export function getXAmzTargetLightsail_20161128CreateLoadBalancerTlsCertificateKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate'] as const
}

export function getXAmzTargetLightsail_20161128CreateRelationalDatabaseKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase'] as const
}

export function getXAmzTargetLightsail_20161128CreateRelationalDatabaseFromSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128CreateRelationalDatabaseSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128DeleteAlarmKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteAlarm'] as const
}

export function getXAmzTargetLightsail_20161128DeleteAutoSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128DeleteBucketKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteBucket'] as const
}

export function getXAmzTargetLightsail_20161128DeleteBucketAccessKeyKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey'] as const
}

export function getXAmzTargetLightsail_20161128DeleteCertificateKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteCertificate'] as const
}

export function getXAmzTargetLightsail_20161128DeleteContactMethodKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteContactMethod'] as const
}

export function getXAmzTargetLightsail_20161128DeleteContainerImageKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteContainerImage'] as const
}

export function getXAmzTargetLightsail_20161128DeleteContainerServiceKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteContainerService'] as const
}

export function getXAmzTargetLightsail_20161128DeleteDiskKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteDisk'] as const
}

export function getXAmzTargetLightsail_20161128DeleteDiskSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128DeleteDistributionKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteDistribution'] as const
}

export function getXAmzTargetLightsail_20161128DeleteDomainKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteDomain'] as const
}

export function getXAmzTargetLightsail_20161128DeleteDomainEntryKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry'] as const
}

export function getXAmzTargetLightsail_20161128DeleteInstanceKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteInstance'] as const
}

export function getXAmzTargetLightsail_20161128DeleteInstanceSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128DeleteKeyPairKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteKeyPair'] as const
}

export function getXAmzTargetLightsail_20161128DeleteKnownHostKeysKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys'] as const
}

export function getXAmzTargetLightsail_20161128DeleteLoadBalancerKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer'] as const
}

export function getXAmzTargetLightsail_20161128DeleteLoadBalancerTlsCertificateKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate'] as const
}

export function getXAmzTargetLightsail_20161128DeleteRelationalDatabaseKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase'] as const
}

export function getXAmzTargetLightsail_20161128DeleteRelationalDatabaseSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128DetachCertificateFromDistributionKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution'] as const
}

export function getXAmzTargetLightsail_20161128DetachDiskKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DetachDisk'] as const
}

export function getXAmzTargetLightsail_20161128DetachInstancesFromLoadBalancerKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer'] as const
}

export function getXAmzTargetLightsail_20161128DetachStaticIpKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DetachStaticIp'] as const
}

export function getXAmzTargetLightsail_20161128DisableAddOnKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DisableAddOn'] as const
}

export function getXAmzTargetLightsail_20161128DownloadDefaultKeyPairKey() {
  return ['#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair'] as const
}

export function getXAmzTargetLightsail_20161128EnableAddOnKey() {
  return ['#X-Amz-Target=Lightsail_20161128.EnableAddOn'] as const
}

export function getXAmzTargetLightsail_20161128ExportSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.ExportSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128GetActiveNamesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetActiveNames'] as const
}

export function getXAmzTargetLightsail_20161128GetAlarmsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetAlarms'] as const
}

export function getXAmzTargetLightsail_20161128GetAutoSnapshotsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots'] as const
}

export function getXAmzTargetLightsail_20161128GetBlueprintsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetBlueprints'] as const
}

export function getXAmzTargetLightsail_20161128GetBucketAccessKeysKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys'] as const
}

export function getXAmzTargetLightsail_20161128GetBucketBundlesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetBucketBundles'] as const
}

export function getXAmzTargetLightsail_20161128GetBucketMetricDataKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetBucketMetricData'] as const
}

export function getXAmzTargetLightsail_20161128GetBucketsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetBuckets'] as const
}

export function getXAmzTargetLightsail_20161128GetBundlesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetBundles'] as const
}

export function getXAmzTargetLightsail_20161128GetCertificatesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetCertificates'] as const
}

export function getXAmzTargetLightsail_20161128GetCloudFormationStackRecordsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords'] as const
}

export function getXAmzTargetLightsail_20161128GetContactMethodsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetContactMethods'] as const
}

export function getXAmzTargetLightsail_20161128GetContainerAPIMetadataKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata'] as const
}

export function getXAmzTargetLightsail_20161128GetContainerImagesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetContainerImages'] as const
}

export function getXAmzTargetLightsail_20161128GetContainerLogKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetContainerLog'] as const
}

export function getXAmzTargetLightsail_20161128GetContainerServiceDeploymentsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments'] as const
}

export function getXAmzTargetLightsail_20161128GetContainerServiceMetricDataKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData'] as const
}

export function getXAmzTargetLightsail_20161128GetContainerServicePowersKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers'] as const
}

export function getXAmzTargetLightsail_20161128GetContainerServicesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetContainerServices'] as const
}

export function getXAmzTargetLightsail_20161128GetCostEstimateKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetCostEstimate'] as const
}

export function getXAmzTargetLightsail_20161128GetDiskKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetDisk'] as const
}

export function getXAmzTargetLightsail_20161128GetDiskSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128GetDiskSnapshotsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots'] as const
}

export function getXAmzTargetLightsail_20161128GetDisksKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetDisks'] as const
}

export function getXAmzTargetLightsail_20161128GetDistributionBundlesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetDistributionBundles'] as const
}

export function getXAmzTargetLightsail_20161128GetDistributionLatestCacheResetKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset'] as const
}

export function getXAmzTargetLightsail_20161128GetDistributionMetricDataKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData'] as const
}

export function getXAmzTargetLightsail_20161128GetDistributionsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetDistributions'] as const
}

export function getXAmzTargetLightsail_20161128GetDomainKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetDomain'] as const
}

export function getXAmzTargetLightsail_20161128GetDomainsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetDomains'] as const
}

export function getXAmzTargetLightsail_20161128GetExportSnapshotRecordsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords'] as const
}

export function getXAmzTargetLightsail_20161128GetInstanceKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetInstance'] as const
}

export function getXAmzTargetLightsail_20161128GetInstanceAccessDetailsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails'] as const
}

export function getXAmzTargetLightsail_20161128GetInstanceMetricDataKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData'] as const
}

export function getXAmzTargetLightsail_20161128GetInstancePortStatesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetInstancePortStates'] as const
}

export function getXAmzTargetLightsail_20161128GetInstanceSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128GetInstanceSnapshotsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots'] as const
}

export function getXAmzTargetLightsail_20161128GetInstanceStateKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetInstanceState'] as const
}

export function getXAmzTargetLightsail_20161128GetInstancesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetInstances'] as const
}

export function getXAmzTargetLightsail_20161128GetKeyPairKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetKeyPair'] as const
}

export function getXAmzTargetLightsail_20161128GetKeyPairsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetKeyPairs'] as const
}

export function getXAmzTargetLightsail_20161128GetLoadBalancerKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetLoadBalancer'] as const
}

export function getXAmzTargetLightsail_20161128GetLoadBalancerMetricDataKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData'] as const
}

export function getXAmzTargetLightsail_20161128GetLoadBalancerTlsCertificatesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates'] as const
}

export function getXAmzTargetLightsail_20161128GetLoadBalancerTlsPoliciesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies'] as const
}

export function getXAmzTargetLightsail_20161128GetLoadBalancersKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetLoadBalancers'] as const
}

export function getXAmzTargetLightsail_20161128GetOperationKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetOperation'] as const
}

export function getXAmzTargetLightsail_20161128GetOperationsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetOperations'] as const
}

export function getXAmzTargetLightsail_20161128GetOperationsForResourceKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetOperationsForResource'] as const
}

export function getXAmzTargetLightsail_20161128GetRegionsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetRegions'] as const
}

export function getXAmzTargetLightsail_20161128GetRelationalDatabaseKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase'] as const
}

export function getXAmzTargetLightsail_20161128GetRelationalDatabaseBlueprintsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints'] as const
}

export function getXAmzTargetLightsail_20161128GetRelationalDatabaseBundlesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles'] as const
}

export function getXAmzTargetLightsail_20161128GetRelationalDatabaseEventsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents'] as const
}

export function getXAmzTargetLightsail_20161128GetRelationalDatabaseLogEventsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents'] as const
}

export function getXAmzTargetLightsail_20161128GetRelationalDatabaseLogStreamsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams'] as const
}

export function getXAmzTargetLightsail_20161128GetRelationalDatabaseMasterUserPasswordKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword'] as const
}

export function getXAmzTargetLightsail_20161128GetRelationalDatabaseMetricDataKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData'] as const
}

export function getXAmzTargetLightsail_20161128GetRelationalDatabaseParametersKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters'] as const
}

export function getXAmzTargetLightsail_20161128GetRelationalDatabaseSnapshotKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot'] as const
}

export function getXAmzTargetLightsail_20161128GetRelationalDatabaseSnapshotsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots'] as const
}

export function getXAmzTargetLightsail_20161128GetRelationalDatabasesKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases'] as const
}

export function getXAmzTargetLightsail_20161128GetStaticIpKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetStaticIp'] as const
}

export function getXAmzTargetLightsail_20161128GetStaticIpsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.GetStaticIps'] as const
}

export function getXAmzTargetLightsail_20161128ImportKeyPairKey() {
  return ['#X-Amz-Target=Lightsail_20161128.ImportKeyPair'] as const
}

export function getXAmzTargetLightsail_20161128IsVpcPeeredKey() {
  return ['#X-Amz-Target=Lightsail_20161128.IsVpcPeered'] as const
}

export function getXAmzTargetLightsail_20161128OpenInstancePublicPortsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts'] as const
}

export function getXAmzTargetLightsail_20161128PeerVpcKey() {
  return ['#X-Amz-Target=Lightsail_20161128.PeerVpc'] as const
}

export function getXAmzTargetLightsail_20161128PutAlarmKey() {
  return ['#X-Amz-Target=Lightsail_20161128.PutAlarm'] as const
}

export function getXAmzTargetLightsail_20161128PutInstancePublicPortsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts'] as const
}

export function getXAmzTargetLightsail_20161128RebootInstanceKey() {
  return ['#X-Amz-Target=Lightsail_20161128.RebootInstance'] as const
}

export function getXAmzTargetLightsail_20161128RebootRelationalDatabaseKey() {
  return ['#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase'] as const
}

export function getXAmzTargetLightsail_20161128RegisterContainerImageKey() {
  return ['#X-Amz-Target=Lightsail_20161128.RegisterContainerImage'] as const
}

export function getXAmzTargetLightsail_20161128ReleaseStaticIpKey() {
  return ['#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp'] as const
}

export function getXAmzTargetLightsail_20161128ResetDistributionCacheKey() {
  return ['#X-Amz-Target=Lightsail_20161128.ResetDistributionCache'] as const
}

export function getXAmzTargetLightsail_20161128SendContactMethodVerificationKey() {
  return ['#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification'] as const
}

export function getXAmzTargetLightsail_20161128SetIpAddressTypeKey() {
  return ['#X-Amz-Target=Lightsail_20161128.SetIpAddressType'] as const
}

export function getXAmzTargetLightsail_20161128SetResourceAccessForBucketKey() {
  return ['#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket'] as const
}

export function getXAmzTargetLightsail_20161128StartGUISessionKey() {
  return ['#X-Amz-Target=Lightsail_20161128.StartGUISession'] as const
}

export function getXAmzTargetLightsail_20161128StartInstanceKey() {
  return ['#X-Amz-Target=Lightsail_20161128.StartInstance'] as const
}

export function getXAmzTargetLightsail_20161128StartRelationalDatabaseKey() {
  return ['#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase'] as const
}

export function getXAmzTargetLightsail_20161128StopGUISessionKey() {
  return ['#X-Amz-Target=Lightsail_20161128.StopGUISession'] as const
}

export function getXAmzTargetLightsail_20161128StopInstanceKey() {
  return ['#X-Amz-Target=Lightsail_20161128.StopInstance'] as const
}

export function getXAmzTargetLightsail_20161128StopRelationalDatabaseKey() {
  return ['#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase'] as const
}

export function getXAmzTargetLightsail_20161128TagResourceKey() {
  return ['#X-Amz-Target=Lightsail_20161128.TagResource'] as const
}

export function getXAmzTargetLightsail_20161128TestAlarmKey() {
  return ['#X-Amz-Target=Lightsail_20161128.TestAlarm'] as const
}

export function getXAmzTargetLightsail_20161128UnpeerVpcKey() {
  return ['#X-Amz-Target=Lightsail_20161128.UnpeerVpc'] as const
}

export function getXAmzTargetLightsail_20161128UntagResourceKey() {
  return ['#X-Amz-Target=Lightsail_20161128.UntagResource'] as const
}

export function getXAmzTargetLightsail_20161128UpdateBucketKey() {
  return ['#X-Amz-Target=Lightsail_20161128.UpdateBucket'] as const
}

export function getXAmzTargetLightsail_20161128UpdateBucketBundleKey() {
  return ['#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle'] as const
}

export function getXAmzTargetLightsail_20161128UpdateContainerServiceKey() {
  return ['#X-Amz-Target=Lightsail_20161128.UpdateContainerService'] as const
}

export function getXAmzTargetLightsail_20161128UpdateDistributionKey() {
  return ['#X-Amz-Target=Lightsail_20161128.UpdateDistribution'] as const
}

export function getXAmzTargetLightsail_20161128UpdateDistributionBundleKey() {
  return ['#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle'] as const
}

export function getXAmzTargetLightsail_20161128UpdateDomainEntryKey() {
  return ['#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry'] as const
}

export function getXAmzTargetLightsail_20161128UpdateInstanceMetadataOptionsKey() {
  return ['#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions'] as const
}

export function getXAmzTargetLightsail_20161128UpdateLoadBalancerAttributeKey() {
  return ['#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute'] as const
}

export function getXAmzTargetLightsail_20161128UpdateRelationalDatabaseKey() {
  return ['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase'] as const
}

export function getXAmzTargetLightsail_20161128UpdateRelationalDatabaseParametersKey() {
  return ['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters'] as const
}

export function getPostXAmzTargetLightsail20161128AllocateStaticIpKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.AllocateStaticIp',
    '/#X-Amz-Target=Lightsail_20161128.AllocateStaticIp',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128AllocateStaticIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.AllocateStaticIp']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.AllocateStaticIp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128AllocateStaticIpKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.AllocateStaticIp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.AllocateStaticIp'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128AttachCertificateToDistributionKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution',
    '/#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128AttachCertificateToDistribution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128AttachCertificateToDistributionKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128AttachDiskKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.AttachDisk',
    '/#X-Amz-Target=Lightsail_20161128.AttachDisk',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128AttachDisk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.AttachDisk']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.AttachDisk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128AttachDiskKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachDisk']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.AttachDisk'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128AttachInstancesToLoadBalancerKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer',
    '/#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128AttachInstancesToLoadBalancer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128AttachInstancesToLoadBalancerKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate',
    '/#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128AttachLoadBalancerTlsCertificate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128AttachStaticIpKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.AttachStaticIp',
    '/#X-Amz-Target=Lightsail_20161128.AttachStaticIp',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128AttachStaticIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.AttachStaticIp']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.AttachStaticIp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128AttachStaticIpKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachStaticIp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.AttachStaticIp'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CloseInstancePublicPortsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts',
    '/#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CloseInstancePublicPorts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CloseInstancePublicPortsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CopySnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CopySnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CopySnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CopySnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CopySnapshot']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CopySnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CopySnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CopySnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CopySnapshot'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateBucketKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateBucket',
    '/#X-Amz-Target=Lightsail_20161128.CreateBucket',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateBucket<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucket']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucket']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateBucketKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucket']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateBucket'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateBucketAccessKeyKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey',
    '/#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateBucketAccessKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateBucketAccessKeyKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateCertificateKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateCertificate',
    '/#X-Amz-Target=Lightsail_20161128.CreateCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateCertificateKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateCloudFormationStackKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack',
    '/#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateCloudFormationStack<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateCloudFormationStackKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateContactMethodKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateContactMethod',
    '/#X-Amz-Target=Lightsail_20161128.CreateContactMethod',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateContactMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContactMethod']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContactMethod']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateContactMethodKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContactMethod']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateContactMethod'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateContainerServiceKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateContainerService',
    '/#X-Amz-Target=Lightsail_20161128.CreateContainerService',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateContainerService<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerService']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerService']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateContainerServiceKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateContainerService'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateContainerServiceDeploymentKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment',
    '/#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateContainerServiceDeployment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetLightsail20161128CreateContainerServiceDeploymentKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateContainerServiceRegistryLoginKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin',
    '/#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateContainerServiceRegistryLogin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetLightsail20161128CreateContainerServiceRegistryLoginKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateDiskKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateDisk',
    '/#X-Amz-Target=Lightsail_20161128.CreateDisk',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateDisk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDisk']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDisk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateDiskKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDisk']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateDisk'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateDiskFromSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateDiskFromSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateDiskFromSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateDiskSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateDiskSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateDiskSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateDistributionKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateDistribution',
    '/#X-Amz-Target=Lightsail_20161128.CreateDistribution',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateDistribution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDistribution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDistribution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateDistributionKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDistribution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateDistribution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateDomainKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateDomain',
    '/#X-Amz-Target=Lightsail_20161128.CreateDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomain']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateDomainKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateDomainEntryKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateDomainEntry',
    '/#X-Amz-Target=Lightsail_20161128.CreateDomainEntry',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateDomainEntry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomainEntry']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomainEntry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateDomainEntryKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomainEntry']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateDomainEntry'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateGUISessionAccessDetailsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails',
    '/#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateGUISessionAccessDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateGUISessionAccessDetailsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateInstanceSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateInstanceSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateInstanceSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateInstancesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateInstances',
    '/#X-Amz-Target=Lightsail_20161128.CreateInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstances']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateInstancesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateInstances'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateInstancesFromSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateInstancesFromSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateInstancesFromSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateKeyPairKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateKeyPair',
    '/#X-Amz-Target=Lightsail_20161128.CreateKeyPair',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateKeyPair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateKeyPair']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateKeyPair']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateKeyPairKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateKeyPair']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateKeyPair'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateLoadBalancerKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer',
    '/#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateLoadBalancer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateLoadBalancerKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate',
    '/#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateLoadBalancerTlsCertificate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateRelationalDatabaseKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateRelationalDatabase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128CreateRelationalDatabaseKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128CreateRelationalDatabaseSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteAlarmKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteAlarm',
    '/#X-Amz-Target=Lightsail_20161128.DeleteAlarm',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteAlarm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAlarm']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAlarm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteAlarmKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAlarm']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteAlarm'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteAutoSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteAutoSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteAutoSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteBucketKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteBucket',
    '/#X-Amz-Target=Lightsail_20161128.DeleteBucket',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteBucket<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucket']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucket']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteBucketKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucket']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteBucket'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteBucketAccessKeyKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey',
    '/#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteBucketAccessKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteBucketAccessKeyKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteCertificateKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteCertificate',
    '/#X-Amz-Target=Lightsail_20161128.DeleteCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteCertificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteCertificateKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteCertificate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteContactMethodKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteContactMethod',
    '/#X-Amz-Target=Lightsail_20161128.DeleteContactMethod',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteContactMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContactMethod']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContactMethod']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteContactMethodKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContactMethod']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteContactMethod'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteContainerImageKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteContainerImage',
    '/#X-Amz-Target=Lightsail_20161128.DeleteContainerImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteContainerImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteContainerImageKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteContainerImage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteContainerServiceKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteContainerService',
    '/#X-Amz-Target=Lightsail_20161128.DeleteContainerService',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteContainerService<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerService']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerService']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteContainerServiceKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteContainerService'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteDiskKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteDisk',
    '/#X-Amz-Target=Lightsail_20161128.DeleteDisk',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteDisk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDisk']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDisk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteDiskKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDisk']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteDisk'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteDiskSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteDiskSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteDiskSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteDistributionKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteDistribution',
    '/#X-Amz-Target=Lightsail_20161128.DeleteDistribution',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteDistribution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDistribution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDistribution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteDistributionKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDistribution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteDistribution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteDomainKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteDomain',
    '/#X-Amz-Target=Lightsail_20161128.DeleteDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomain']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteDomainKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteDomainEntryKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry',
    '/#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteDomainEntry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteDomainEntryKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteInstanceKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteInstance',
    '/#X-Amz-Target=Lightsail_20161128.DeleteInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstance']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteInstanceKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteInstanceSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteInstanceSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteInstanceSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteKeyPairKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteKeyPair',
    '/#X-Amz-Target=Lightsail_20161128.DeleteKeyPair',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteKeyPair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKeyPair']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKeyPair']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteKeyPairKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKeyPair']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteKeyPair'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteKnownHostKeysKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys',
    '/#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteKnownHostKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteKnownHostKeysKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteLoadBalancerKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer',
    '/#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteLoadBalancer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteLoadBalancerKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate',
    '/#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteRelationalDatabaseKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteRelationalDatabase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DeleteRelationalDatabaseKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DetachCertificateFromDistributionKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution',
    '/#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DetachCertificateFromDistribution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetLightsail20161128DetachCertificateFromDistributionKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DetachDiskKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DetachDisk',
    '/#X-Amz-Target=Lightsail_20161128.DetachDisk',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DetachDisk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DetachDisk']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DetachDisk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DetachDiskKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachDisk']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DetachDisk'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DetachInstancesFromLoadBalancerKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer',
    '/#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DetachInstancesFromLoadBalancer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DetachInstancesFromLoadBalancerKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DetachStaticIpKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DetachStaticIp',
    '/#X-Amz-Target=Lightsail_20161128.DetachStaticIp',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DetachStaticIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DetachStaticIp']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DetachStaticIp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DetachStaticIpKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachStaticIp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DetachStaticIp'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DisableAddOnKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DisableAddOn',
    '/#X-Amz-Target=Lightsail_20161128.DisableAddOn',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DisableAddOn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DisableAddOn']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DisableAddOn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DisableAddOnKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DisableAddOn']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DisableAddOn'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128DownloadDefaultKeyPairKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair',
    '/#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128DownloadDefaultKeyPair<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128DownloadDefaultKeyPairKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128EnableAddOnKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.EnableAddOn',
    '/#X-Amz-Target=Lightsail_20161128.EnableAddOn',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128EnableAddOn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.EnableAddOn']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.EnableAddOn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128EnableAddOnKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.EnableAddOn']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.EnableAddOn'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128ExportSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.ExportSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.ExportSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128ExportSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.ExportSnapshot']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.ExportSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128ExportSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.ExportSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.ExportSnapshot'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetActiveNamesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetActiveNames',
    '/#X-Amz-Target=Lightsail_20161128.GetActiveNames',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetActiveNames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetActiveNames']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetActiveNames']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetActiveNamesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetActiveNames']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetActiveNames'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetAlarmsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetAlarms',
    '/#X-Amz-Target=Lightsail_20161128.GetAlarms',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetAlarms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetAlarms']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetAlarms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetAlarmsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetAlarms']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetAlarms'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetAutoSnapshotsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots',
    '/#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetAutoSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetAutoSnapshotsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetBlueprintsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetBlueprints',
    '/#X-Amz-Target=Lightsail_20161128.GetBlueprints',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetBlueprints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBlueprints']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBlueprints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetBlueprintsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBlueprints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetBlueprints'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetBucketAccessKeysKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys',
    '/#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetBucketAccessKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetBucketAccessKeysKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetBucketBundlesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetBucketBundles',
    '/#X-Amz-Target=Lightsail_20161128.GetBucketBundles',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetBucketBundles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketBundles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketBundles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetBucketBundlesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketBundles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetBucketBundles'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetBucketMetricDataKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetBucketMetricData',
    '/#X-Amz-Target=Lightsail_20161128.GetBucketMetricData',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetBucketMetricData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketMetricData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketMetricData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetBucketMetricDataKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketMetricData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetBucketMetricData'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetBucketsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetBuckets',
    '/#X-Amz-Target=Lightsail_20161128.GetBuckets',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetBuckets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBuckets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBuckets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetBucketsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBuckets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetBuckets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetBundlesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetBundles',
    '/#X-Amz-Target=Lightsail_20161128.GetBundles',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetBundles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBundles']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBundles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetBundlesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBundles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetBundles'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetCertificatesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetCertificates',
    '/#X-Amz-Target=Lightsail_20161128.GetCertificates',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetCertificates']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetCertificatesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCertificates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetCertificates'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetCloudFormationStackRecordsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords',
    '/#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetCloudFormationStackRecords<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetCloudFormationStackRecordsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetContactMethodsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContactMethods',
    '/#X-Amz-Target=Lightsail_20161128.GetContactMethods',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetContactMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContactMethods']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetContactMethods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetContactMethodsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContactMethods']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetContactMethods'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetContainerAPIMetadataKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetContainerAPIMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetContainerAPIMetadataKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetContainerImagesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerImages',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerImages',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetContainerImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerImages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerImages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetContainerImagesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerImages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetContainerImages'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetContainerLogKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerLog',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerLog',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetContainerLog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerLog']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerLog']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetContainerLogKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerLog']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetContainerLog'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetContainerServiceDeploymentsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetContainerServiceDeployments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetContainerServiceDeploymentsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetContainerServiceMetricDataKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetContainerServiceMetricData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetContainerServiceMetricDataKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetContainerServicePowersKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetContainerServicePowers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetContainerServicePowersKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetContainerServicesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerServices',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerServices',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetContainerServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetContainerServicesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetContainerServices'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetCostEstimateKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetCostEstimate',
    '/#X-Amz-Target=Lightsail_20161128.GetCostEstimate',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetCostEstimate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetCostEstimate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetCostEstimate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetCostEstimateKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCostEstimate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetCostEstimate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetDiskKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDisk',
    '/#X-Amz-Target=Lightsail_20161128.GetDisk',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetDisk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetDiskKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisk']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=Lightsail_20161128.GetDisk'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetDiskSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetDiskSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetDiskSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetDiskSnapshotsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots',
    '/#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetDiskSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetDiskSnapshotsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetDisksKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDisks',
    '/#X-Amz-Target=Lightsail_20161128.GetDisks',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetDisks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetDisksKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetDisks'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetDistributionBundlesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDistributionBundles',
    '/#X-Amz-Target=Lightsail_20161128.GetDistributionBundles',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetDistributionBundles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionBundles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionBundles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetDistributionBundlesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionBundles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetDistributionBundles'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetDistributionLatestCacheResetKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset',
    '/#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetDistributionLatestCacheReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetDistributionLatestCacheResetKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetDistributionMetricDataKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData',
    '/#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetDistributionMetricData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetDistributionMetricDataKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetDistributionsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDistributions',
    '/#X-Amz-Target=Lightsail_20161128.GetDistributions',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetDistributions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetDistributionsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetDistributions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetDomainKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDomain',
    '/#X-Amz-Target=Lightsail_20161128.GetDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomain']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetDomainKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetDomainsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDomains',
    '/#X-Amz-Target=Lightsail_20161128.GetDomains',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomains']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetDomainsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomains']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetDomains'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetExportSnapshotRecordsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords',
    '/#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetExportSnapshotRecords<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetExportSnapshotRecordsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetInstanceKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstance',
    '/#X-Amz-Target=Lightsail_20161128.GetInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstance']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetInstanceKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetInstanceAccessDetailsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails',
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetInstanceAccessDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetInstanceAccessDetailsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetInstanceMetricDataKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData',
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetInstanceMetricData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetInstanceMetricDataKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetInstancePortStatesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstancePortStates',
    '/#X-Amz-Target=Lightsail_20161128.GetInstancePortStates',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetInstancePortStates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstancePortStates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstancePortStates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetInstancePortStatesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstancePortStates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetInstancePortStates'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetInstanceSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetInstanceSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetInstanceSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetInstanceSnapshotsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots',
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetInstanceSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetInstanceSnapshotsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetInstanceStateKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstanceState',
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceState',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetInstanceState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceState']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceState']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetInstanceStateKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceState']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetInstanceState'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetInstancesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstances',
    '/#X-Amz-Target=Lightsail_20161128.GetInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstances']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetInstancesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetInstances'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetKeyPairKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetKeyPair',
    '/#X-Amz-Target=Lightsail_20161128.GetKeyPair',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetKeyPair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPair']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPair']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetKeyPairKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPair']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetKeyPair'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetKeyPairsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetKeyPairs',
    '/#X-Amz-Target=Lightsail_20161128.GetKeyPairs',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetKeyPairs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPairs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPairs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetKeyPairsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPairs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetKeyPairs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancerKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetLoadBalancer',
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancer',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetLoadBalancer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetLoadBalancerKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancerMetricDataKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData',
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetLoadBalancerMetricData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetLoadBalancerMetricDataKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates',
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetLoadBalancerTlsCertificates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies',
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetLoadBalancerTlsPolicies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancersKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetLoadBalancers',
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancers',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetLoadBalancers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetLoadBalancersKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetOperationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetOperation',
    '/#X-Amz-Target=Lightsail_20161128.GetOperation',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetOperation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperation']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetOperationKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetOperation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetOperationsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetOperations',
    '/#X-Amz-Target=Lightsail_20161128.GetOperations',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetOperations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetOperationsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetOperations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetOperationsForResourceKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetOperationsForResource',
    '/#X-Amz-Target=Lightsail_20161128.GetOperationsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetOperationsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperationsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperationsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetOperationsForResourceKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperationsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetOperationsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetRegionsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRegions',
    '/#X-Amz-Target=Lightsail_20161128.GetRegions',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetRegions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetRegions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetRegions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetRegionsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRegions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetRegions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetRelationalDatabaseKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseBlueprints<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseBundlesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseBundles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetRelationalDatabaseBundlesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseEventsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseEvents<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetRelationalDatabaseEventsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseLogEventsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseLogEvents<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetRelationalDatabaseLogEventsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseLogStreams<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseMetricDataKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseMetricData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetRelationalDatabaseMetricDataKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseParametersKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseParameters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetRelationalDatabaseParametersKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshots<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabasesKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetRelationalDatabasesKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetStaticIpKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetStaticIp',
    '/#X-Amz-Target=Lightsail_20161128.GetStaticIp',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetStaticIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIp']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetStaticIpKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetStaticIp'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128GetStaticIpsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetStaticIps',
    '/#X-Amz-Target=Lightsail_20161128.GetStaticIps',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128GetStaticIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIps']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128GetStaticIpsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIps']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.GetStaticIps'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128ImportKeyPairKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.ImportKeyPair',
    '/#X-Amz-Target=Lightsail_20161128.ImportKeyPair',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128ImportKeyPair<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.ImportKeyPair']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.ImportKeyPair']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128ImportKeyPairKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.ImportKeyPair']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.ImportKeyPair'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128IsVpcPeeredKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.IsVpcPeered',
    '/#X-Amz-Target=Lightsail_20161128.IsVpcPeered',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128IsVpcPeered<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.IsVpcPeered']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.IsVpcPeered']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128IsVpcPeeredKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.IsVpcPeered']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.IsVpcPeered'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128OpenInstancePublicPortsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts',
    '/#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128OpenInstancePublicPorts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128OpenInstancePublicPortsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128PeerVpcKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.PeerVpc',
    '/#X-Amz-Target=Lightsail_20161128.PeerVpc',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128PeerVpc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PeerVpc']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PeerVpc']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128PeerVpcKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.PeerVpc']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=Lightsail_20161128.PeerVpc'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128PutAlarmKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.PutAlarm',
    '/#X-Amz-Target=Lightsail_20161128.PutAlarm',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128PutAlarm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PutAlarm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PutAlarm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128PutAlarmKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.PutAlarm']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.PutAlarm'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128PutInstancePublicPortsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts',
    '/#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128PutInstancePublicPorts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128PutInstancePublicPortsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128RebootInstanceKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.RebootInstance',
    '/#X-Amz-Target=Lightsail_20161128.RebootInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128RebootInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.RebootInstance']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.RebootInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128RebootInstanceKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.RebootInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.RebootInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128RebootRelationalDatabaseKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128RebootRelationalDatabase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128RebootRelationalDatabaseKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128RegisterContainerImageKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.RegisterContainerImage',
    '/#X-Amz-Target=Lightsail_20161128.RegisterContainerImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128RegisterContainerImage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.RegisterContainerImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.RegisterContainerImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128RegisterContainerImageKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.RegisterContainerImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.RegisterContainerImage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128ReleaseStaticIpKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp',
    '/#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128ReleaseStaticIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128ReleaseStaticIpKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128ResetDistributionCacheKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.ResetDistributionCache',
    '/#X-Amz-Target=Lightsail_20161128.ResetDistributionCache',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128ResetDistributionCache<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.ResetDistributionCache']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.ResetDistributionCache']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128ResetDistributionCacheKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.ResetDistributionCache']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.ResetDistributionCache'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128SendContactMethodVerificationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification',
    '/#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128SendContactMethodVerification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128SendContactMethodVerificationKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128SetIpAddressTypeKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.SetIpAddressType',
    '/#X-Amz-Target=Lightsail_20161128.SetIpAddressType',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128SetIpAddressType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.SetIpAddressType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.SetIpAddressType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128SetIpAddressTypeKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.SetIpAddressType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.SetIpAddressType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128SetResourceAccessForBucketKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket',
    '/#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128SetResourceAccessForBucket<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128SetResourceAccessForBucketKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128StartGUISessionKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.StartGUISession',
    '/#X-Amz-Target=Lightsail_20161128.StartGUISession',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128StartGUISession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.StartGUISession']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.StartGUISession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128StartGUISessionKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.StartGUISession']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.StartGUISession'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128StartInstanceKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.StartInstance',
    '/#X-Amz-Target=Lightsail_20161128.StartInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128StartInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.StartInstance']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.StartInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128StartInstanceKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.StartInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.StartInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128StartRelationalDatabaseKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128StartRelationalDatabase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128StartRelationalDatabaseKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128StopGUISessionKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.StopGUISession',
    '/#X-Amz-Target=Lightsail_20161128.StopGUISession',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128StopGUISession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.StopGUISession']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.StopGUISession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128StopGUISessionKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.StopGUISession']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.StopGUISession'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128StopInstanceKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.StopInstance',
    '/#X-Amz-Target=Lightsail_20161128.StopInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128StopInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.StopInstance']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.StopInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128StopInstanceKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.StopInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.StopInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128StopRelationalDatabaseKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128StopRelationalDatabase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128StopRelationalDatabaseKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128TagResourceKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.TagResource',
    '/#X-Amz-Target=Lightsail_20161128.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128TagResourceKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128TestAlarmKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.TestAlarm',
    '/#X-Amz-Target=Lightsail_20161128.TestAlarm',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128TestAlarm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.TestAlarm']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.TestAlarm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128TestAlarmKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.TestAlarm']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.TestAlarm'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128UnpeerVpcKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UnpeerVpc',
    '/#X-Amz-Target=Lightsail_20161128.UnpeerVpc',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128UnpeerVpc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.UnpeerVpc']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.UnpeerVpc']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128UnpeerVpcKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UnpeerVpc']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.UnpeerVpc'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128UntagResourceKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UntagResource',
    '/#X-Amz-Target=Lightsail_20161128.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128UpdateBucketKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateBucket',
    '/#X-Amz-Target=Lightsail_20161128.UpdateBucket',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128UpdateBucket<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucket']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucket']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128UpdateBucketKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucket']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.UpdateBucket'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128UpdateBucketBundleKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle',
    '/#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128UpdateBucketBundle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128UpdateBucketBundleKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128UpdateContainerServiceKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateContainerService',
    '/#X-Amz-Target=Lightsail_20161128.UpdateContainerService',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128UpdateContainerService<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateContainerService']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateContainerService']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128UpdateContainerServiceKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateContainerService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.UpdateContainerService'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128UpdateDistributionKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateDistribution',
    '/#X-Amz-Target=Lightsail_20161128.UpdateDistribution',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128UpdateDistribution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistribution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistribution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128UpdateDistributionKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistribution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.UpdateDistribution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128UpdateDistributionBundleKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle',
    '/#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128UpdateDistributionBundle<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128UpdateDistributionBundleKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128UpdateDomainEntryKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry',
    '/#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128UpdateDomainEntry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128UpdateDomainEntryKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128UpdateInstanceMetadataOptionsKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions',
    '/#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128UpdateInstanceMetadataOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128UpdateInstanceMetadataOptionsKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128UpdateLoadBalancerAttributeKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute',
    '/#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128UpdateLoadBalancerAttribute<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128UpdateLoadBalancerAttributeKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128UpdateRelationalDatabaseKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128UpdateRelationalDatabase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLightsail20161128UpdateRelationalDatabaseKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLightsail20161128UpdateRelationalDatabaseParametersKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters',
    '/#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters',
    'POST',
  ] as const
}

export function usePostXAmzTargetLightsail20161128UpdateRelationalDatabaseParameters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetLightsail20161128UpdateRelationalDatabaseParametersKey()
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
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostXAmzTargetLightsail20161128AllocateStaticIpMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.AllocateStaticIp',
    '/#X-Amz-Target=Lightsail_20161128.AllocateStaticIp',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128AllocateStaticIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.AllocateStaticIp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128AllocateStaticIpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.AllocateStaticIp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.AllocateStaticIp'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128AllocateStaticIp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.AllocateStaticIp']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128AllocateStaticIpMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128AttachCertificateToDistributionMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution',
    '/#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128AttachCertificateToDistributionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128AttachCertificateToDistributionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128AttachCertificateToDistribution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128AttachCertificateToDistributionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128AttachDiskMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.AttachDisk',
    '/#X-Amz-Target=Lightsail_20161128.AttachDisk',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128AttachDiskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.AttachDisk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128AttachDiskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachDisk']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.AttachDisk'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128AttachDisk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachDisk']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.AttachDisk']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128AttachDiskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128AttachInstancesToLoadBalancerMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer',
    '/#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128AttachInstancesToLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128AttachInstancesToLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128AttachInstancesToLoadBalancer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128AttachInstancesToLoadBalancerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate',
    '/#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128AttachLoadBalancerTlsCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128AttachStaticIpMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.AttachStaticIp',
    '/#X-Amz-Target=Lightsail_20161128.AttachStaticIp',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128AttachStaticIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.AttachStaticIp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128AttachStaticIpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachStaticIp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.AttachStaticIp'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128AttachStaticIp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachStaticIp']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachStaticIp']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128AttachStaticIpMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CloseInstancePublicPortsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts',
    '/#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CloseInstancePublicPortsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CloseInstancePublicPortsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CloseInstancePublicPorts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128CloseInstancePublicPortsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CopySnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CopySnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CopySnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CopySnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CopySnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CopySnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CopySnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CopySnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CopySnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.CopySnapshot']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CopySnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CopySnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateBucketMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateBucket',
    '/#X-Amz-Target=Lightsail_20161128.CreateBucket',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateBucketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucket']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateBucketMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucket']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateBucket'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateBucket<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucket']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucket']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateBucketMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateBucketAccessKeyMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey',
    '/#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateBucketAccessKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateBucketAccessKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateBucketAccessKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateBucketAccessKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateCertificateMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateCertificate',
    '/#X-Amz-Target=Lightsail_20161128.CreateCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCertificate']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateCloudFormationStackMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack',
    '/#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateCloudFormationStackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateCloudFormationStackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateCloudFormationStack<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128CreateCloudFormationStackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateContactMethodMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateContactMethod',
    '/#X-Amz-Target=Lightsail_20161128.CreateContactMethod',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateContactMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContactMethod']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateContactMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContactMethod']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateContactMethod'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateContactMethod<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContactMethod']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateContactMethodMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateContainerServiceMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateContainerService',
    '/#X-Amz-Target=Lightsail_20161128.CreateContainerService',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateContainerServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerService']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateContainerServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateContainerService'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateContainerService<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerService']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateContainerServiceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateContainerServiceDeploymentMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment',
    '/#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateContainerServiceDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateContainerServiceDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateContainerServiceDeployment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128CreateContainerServiceDeploymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateContainerServiceRegistryLoginMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin',
    '/#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateContainerServiceRegistryLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateContainerServiceRegistryLoginMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateContainerServiceRegistryLogin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128CreateContainerServiceRegistryLoginMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateDiskMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateDisk',
    '/#X-Amz-Target=Lightsail_20161128.CreateDisk',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateDiskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDisk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateDiskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDisk']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateDisk'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateDisk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDisk']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDisk']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateDiskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateDiskFromSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateDiskFromSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateDiskFromSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateDiskFromSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateDiskFromSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateDiskSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateDiskSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateDiskSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateDiskSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateDiskSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateDistributionMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateDistribution',
    '/#X-Amz-Target=Lightsail_20161128.CreateDistribution',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateDistributionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDistribution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateDistributionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDistribution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateDistribution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateDistribution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDistribution']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateDistributionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateDomainMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateDomain',
    '/#X-Amz-Target=Lightsail_20161128.CreateDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateDomain'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomain']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomain']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateDomainMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateDomainEntryMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateDomainEntry',
    '/#X-Amz-Target=Lightsail_20161128.CreateDomainEntry',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateDomainEntryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomainEntry']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateDomainEntryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomainEntry']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateDomainEntry'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateDomainEntry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomainEntry']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateDomainEntryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateGUISessionAccessDetailsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails',
    '/#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateGUISessionAccessDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateGUISessionAccessDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateGUISessionAccessDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128CreateGUISessionAccessDetailsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateInstanceSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateInstanceSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateInstanceSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateInstanceSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateInstanceSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateInstancesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateInstances',
    '/#X-Amz-Target=Lightsail_20161128.CreateInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateInstances'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstances']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateInstancesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateInstancesFromSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateInstancesFromSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateInstancesFromSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateInstancesFromSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128CreateInstancesFromSnapshotMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateKeyPairMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateKeyPair',
    '/#X-Amz-Target=Lightsail_20161128.CreateKeyPair',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateKeyPairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateKeyPair']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateKeyPairMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateKeyPair']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateKeyPair'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateKeyPair<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateKeyPair']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateKeyPair']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateKeyPairMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateLoadBalancerMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer',
    '/#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateLoadBalancer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128CreateLoadBalancerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate',
    '/#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateLoadBalancerTlsCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateRelationalDatabaseMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateRelationalDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateRelationalDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateRelationalDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128CreateRelationalDatabaseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128CreateRelationalDatabaseSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteAlarmMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteAlarm',
    '/#X-Amz-Target=Lightsail_20161128.DeleteAlarm',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteAlarmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAlarm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteAlarmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAlarm']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteAlarm'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteAlarm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAlarm']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAlarm']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteAlarmMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteAutoSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteAutoSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteAutoSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteAutoSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteAutoSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteBucketMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteBucket',
    '/#X-Amz-Target=Lightsail_20161128.DeleteBucket',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteBucketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucket']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteBucketMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucket']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteBucket'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteBucket<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucket']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucket']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteBucketMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteBucketAccessKeyMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey',
    '/#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteBucketAccessKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteBucketAccessKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteBucketAccessKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteBucketAccessKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteCertificateMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteCertificate',
    '/#X-Amz-Target=Lightsail_20161128.DeleteCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteCertificate']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteCertificateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteContactMethodMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteContactMethod',
    '/#X-Amz-Target=Lightsail_20161128.DeleteContactMethod',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteContactMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContactMethod']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteContactMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContactMethod']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteContactMethod'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteContactMethod<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContactMethod']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteContactMethodMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteContainerImageMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteContainerImage',
    '/#X-Amz-Target=Lightsail_20161128.DeleteContainerImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteContainerImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteContainerImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteContainerImage'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteContainerImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerImage']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteContainerImageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteContainerServiceMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteContainerService',
    '/#X-Amz-Target=Lightsail_20161128.DeleteContainerService',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteContainerServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerService']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteContainerServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteContainerService'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteContainerService<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerService']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteContainerServiceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteDiskMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteDisk',
    '/#X-Amz-Target=Lightsail_20161128.DeleteDisk',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteDiskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDisk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteDiskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDisk']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteDisk'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteDisk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDisk']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDisk']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteDiskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteDiskSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteDiskSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteDiskSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteDiskSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteDiskSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteDistributionMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteDistribution',
    '/#X-Amz-Target=Lightsail_20161128.DeleteDistribution',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteDistributionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDistribution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteDistributionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDistribution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteDistribution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteDistribution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDistribution']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteDistributionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteDomainMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteDomain',
    '/#X-Amz-Target=Lightsail_20161128.DeleteDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteDomain'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomain']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomain']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteDomainMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteDomainEntryMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry',
    '/#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteDomainEntryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteDomainEntryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteDomainEntry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteDomainEntryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteInstanceMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteInstance',
    '/#X-Amz-Target=Lightsail_20161128.DeleteInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteInstance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstance']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteInstanceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteInstanceSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteInstanceSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteInstanceSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteInstanceSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteInstanceSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteKeyPairMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteKeyPair',
    '/#X-Amz-Target=Lightsail_20161128.DeleteKeyPair',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteKeyPairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKeyPair']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteKeyPairMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKeyPair']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteKeyPair'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteKeyPair<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKeyPair']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKeyPair']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteKeyPairMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteKnownHostKeysMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys',
    '/#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteKnownHostKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteKnownHostKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteKnownHostKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteKnownHostKeysMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteLoadBalancerMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer',
    '/#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteLoadBalancer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DeleteLoadBalancerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate',
    '/#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteRelationalDatabaseMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteRelationalDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteRelationalDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteRelationalDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128DeleteRelationalDatabaseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DetachCertificateFromDistributionMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution',
    '/#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DetachCertificateFromDistributionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DetachCertificateFromDistributionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DetachCertificateFromDistribution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128DetachCertificateFromDistributionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DetachDiskMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DetachDisk',
    '/#X-Amz-Target=Lightsail_20161128.DetachDisk',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DetachDiskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DetachDisk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DetachDiskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachDisk']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DetachDisk'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DetachDisk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachDisk']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DetachDisk']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DetachDiskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DetachInstancesFromLoadBalancerMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer',
    '/#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DetachInstancesFromLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DetachInstancesFromLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DetachInstancesFromLoadBalancer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128DetachInstancesFromLoadBalancerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DetachStaticIpMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DetachStaticIp',
    '/#X-Amz-Target=Lightsail_20161128.DetachStaticIp',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DetachStaticIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DetachStaticIp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DetachStaticIpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachStaticIp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DetachStaticIp'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DetachStaticIp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachStaticIp']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachStaticIp']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DetachStaticIpMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DisableAddOnMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DisableAddOn',
    '/#X-Amz-Target=Lightsail_20161128.DisableAddOn',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DisableAddOnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DisableAddOn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DisableAddOnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DisableAddOn']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DisableAddOn'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DisableAddOn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.DisableAddOn']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DisableAddOn']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DisableAddOnMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128DownloadDefaultKeyPairMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair',
    '/#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128DownloadDefaultKeyPairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128DownloadDefaultKeyPairMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128DownloadDefaultKeyPair<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128DownloadDefaultKeyPairMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128EnableAddOnMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.EnableAddOn',
    '/#X-Amz-Target=Lightsail_20161128.EnableAddOn',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128EnableAddOnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.EnableAddOn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128EnableAddOnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.EnableAddOn']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.EnableAddOn'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128EnableAddOn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.EnableAddOn']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.EnableAddOn']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128EnableAddOnMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128ExportSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.ExportSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.ExportSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128ExportSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.ExportSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128ExportSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.ExportSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.ExportSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128ExportSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.ExportSnapshot']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.ExportSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128ExportSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetActiveNamesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetActiveNames',
    '/#X-Amz-Target=Lightsail_20161128.GetActiveNames',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetActiveNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetActiveNames']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetActiveNamesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetActiveNames']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetActiveNames'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetActiveNames<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetActiveNames']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetActiveNames']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetActiveNamesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetAlarmsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetAlarms',
    '/#X-Amz-Target=Lightsail_20161128.GetAlarms',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetAlarmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetAlarms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetAlarmsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetAlarms']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetAlarms'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetAlarms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetAlarms']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetAlarmsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetAutoSnapshotsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots',
    '/#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetAutoSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetAutoSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetAutoSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetAutoSnapshotsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetBlueprintsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetBlueprints',
    '/#X-Amz-Target=Lightsail_20161128.GetBlueprints',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetBlueprintsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBlueprints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetBlueprintsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBlueprints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetBlueprints'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetBlueprints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBlueprints']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBlueprints']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetBlueprintsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetBucketAccessKeysMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys',
    '/#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetBucketAccessKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetBucketAccessKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetBucketAccessKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetBucketAccessKeysMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetBucketBundlesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetBucketBundles',
    '/#X-Amz-Target=Lightsail_20161128.GetBucketBundles',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetBucketBundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketBundles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetBucketBundlesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketBundles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetBucketBundles'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetBucketBundles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketBundles']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetBucketBundlesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetBucketMetricDataMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetBucketMetricData',
    '/#X-Amz-Target=Lightsail_20161128.GetBucketMetricData',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetBucketMetricDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketMetricData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetBucketMetricDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketMetricData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetBucketMetricData'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetBucketMetricData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketMetricData']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetBucketMetricDataMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetBucketsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetBuckets',
    '/#X-Amz-Target=Lightsail_20161128.GetBuckets',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetBucketsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBuckets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetBucketsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBuckets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetBuckets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetBuckets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBuckets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBuckets']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetBucketsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetBundlesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetBundles',
    '/#X-Amz-Target=Lightsail_20161128.GetBundles',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetBundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBundles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetBundlesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBundles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetBundles'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetBundles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBundles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBundles']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetBundlesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetCertificatesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetCertificates',
    '/#X-Amz-Target=Lightsail_20161128.GetCertificates',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCertificates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetCertificates'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetCertificates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCertificates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCertificates']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetCertificatesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetCloudFormationStackRecordsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords',
    '/#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetCloudFormationStackRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetCloudFormationStackRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetCloudFormationStackRecords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetCloudFormationStackRecordsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetContactMethodsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContactMethods',
    '/#X-Amz-Target=Lightsail_20161128.GetContactMethods',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetContactMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContactMethods']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetContactMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContactMethods']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetContactMethods'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetContactMethods<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContactMethods']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetContactMethodsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetContainerAPIMetadataMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetContainerAPIMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetContainerAPIMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetContainerAPIMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetContainerAPIMetadataMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetContainerImagesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerImages',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerImages',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetContainerImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerImages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetContainerImagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerImages']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetContainerImages'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetContainerImages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerImages']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetContainerImagesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetContainerLogMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerLog',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerLog',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetContainerLogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerLog']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetContainerLogMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerLog']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetContainerLog'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetContainerLog<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerLog']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerLog']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetContainerLogMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetContainerServiceDeploymentsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetContainerServiceDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetContainerServiceDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetContainerServiceDeployments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetContainerServiceDeploymentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetContainerServiceMetricDataMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetContainerServiceMetricDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetContainerServiceMetricDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetContainerServiceMetricData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetContainerServiceMetricDataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetContainerServicePowersMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetContainerServicePowersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetContainerServicePowersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetContainerServicePowers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetContainerServicePowersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetContainerServicesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetContainerServices',
    '/#X-Amz-Target=Lightsail_20161128.GetContainerServices',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetContainerServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetContainerServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetContainerServices'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetContainerServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServices']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetContainerServicesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetCostEstimateMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetCostEstimate',
    '/#X-Amz-Target=Lightsail_20161128.GetCostEstimate',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetCostEstimateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetCostEstimate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetCostEstimateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCostEstimate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetCostEstimate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetCostEstimate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCostEstimate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCostEstimate']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetCostEstimateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetDiskMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDisk',
    '/#X-Amz-Target=Lightsail_20161128.GetDisk',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetDiskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetDiskMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisk']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Lightsail_20161128.GetDisk'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetDisk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisk']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisk']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetDiskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetDiskSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetDiskSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetDiskSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetDiskSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetDiskSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetDiskSnapshotsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots',
    '/#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetDiskSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetDiskSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetDiskSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetDiskSnapshotsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetDisksMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDisks',
    '/#X-Amz-Target=Lightsail_20161128.GetDisks',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetDisksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetDisksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisks']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Lightsail_20161128.GetDisks'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetDisks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisks']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisks']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetDisksMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetDistributionBundlesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDistributionBundles',
    '/#X-Amz-Target=Lightsail_20161128.GetDistributionBundles',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetDistributionBundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionBundles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetDistributionBundlesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionBundles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetDistributionBundles'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetDistributionBundles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionBundles']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetDistributionBundlesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetDistributionLatestCacheResetMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset',
    '/#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetDistributionLatestCacheResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetDistributionLatestCacheResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetDistributionLatestCacheReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetDistributionLatestCacheResetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetDistributionMetricDataMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData',
    '/#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetDistributionMetricDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetDistributionMetricDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetDistributionMetricData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetDistributionMetricDataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetDistributionsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDistributions',
    '/#X-Amz-Target=Lightsail_20161128.GetDistributions',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetDistributionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetDistributionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetDistributions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetDistributions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributions']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetDistributionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetDomainMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDomain',
    '/#X-Amz-Target=Lightsail_20161128.GetDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetDomain'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomain']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetDomainMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetDomainsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetDomains',
    '/#X-Amz-Target=Lightsail_20161128.GetDomains',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomains']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetDomains'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetDomains<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomains']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomains']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetDomainsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetExportSnapshotRecordsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords',
    '/#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetExportSnapshotRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetExportSnapshotRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetExportSnapshotRecords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetExportSnapshotRecordsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetInstanceMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstance',
    '/#X-Amz-Target=Lightsail_20161128.GetInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetInstance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstance']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetInstanceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetInstanceAccessDetailsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails',
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetInstanceAccessDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetInstanceAccessDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetInstanceAccessDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetInstanceAccessDetailsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetInstanceMetricDataMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData',
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetInstanceMetricDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetInstanceMetricDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetInstanceMetricData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetInstanceMetricDataMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetInstancePortStatesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstancePortStates',
    '/#X-Amz-Target=Lightsail_20161128.GetInstancePortStates',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetInstancePortStatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstancePortStates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetInstancePortStatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstancePortStates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetInstancePortStates'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetInstancePortStates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstancePortStates']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetInstancePortStatesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetInstanceSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetInstanceSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetInstanceSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetInstanceSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetInstanceSnapshotMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetInstanceSnapshotsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots',
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetInstanceSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetInstanceSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetInstanceSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetInstanceSnapshotsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetInstanceStateMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstanceState',
    '/#X-Amz-Target=Lightsail_20161128.GetInstanceState',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetInstanceStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceState']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetInstanceStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceState']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetInstanceState'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetInstanceState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceState']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetInstanceStateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetInstancesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetInstances',
    '/#X-Amz-Target=Lightsail_20161128.GetInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetInstances'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstances']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetInstancesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetKeyPairMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetKeyPair',
    '/#X-Amz-Target=Lightsail_20161128.GetKeyPair',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetKeyPairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPair']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetKeyPairMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPair']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetKeyPair'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetKeyPair<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPair']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPair']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetKeyPairMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetKeyPairsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetKeyPairs',
    '/#X-Amz-Target=Lightsail_20161128.GetKeyPairs',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetKeyPairsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPairs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetKeyPairsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPairs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetKeyPairs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetKeyPairs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPairs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPairs']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetKeyPairsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancerMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetLoadBalancer',
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancer',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetLoadBalancerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetLoadBalancer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancer']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetLoadBalancerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancerMetricDataMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData',
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancerMetricDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetLoadBalancerMetricDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetLoadBalancerMetricData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetLoadBalancerMetricDataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates',
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetLoadBalancerTlsCertificates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies',
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetLoadBalancerTlsPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancersMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetLoadBalancers',
    '/#X-Amz-Target=Lightsail_20161128.GetLoadBalancers',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetLoadBalancersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetLoadBalancersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancers'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetLoadBalancers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancers']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetLoadBalancersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetOperationMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetOperation',
    '/#X-Amz-Target=Lightsail_20161128.GetOperation',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetOperationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetOperationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetOperation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetOperation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperation']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetOperationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetOperationsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetOperations',
    '/#X-Amz-Target=Lightsail_20161128.GetOperations',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetOperationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetOperationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetOperations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetOperations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperations']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetOperationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetOperationsForResourceMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetOperationsForResource',
    '/#X-Amz-Target=Lightsail_20161128.GetOperationsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetOperationsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperationsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetOperationsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperationsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetOperationsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetOperationsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperationsForResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetOperationsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetRegionsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRegions',
    '/#X-Amz-Target=Lightsail_20161128.GetRegions',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetRegionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetRegions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetRegionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRegions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetRegions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetRegions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRegions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetRegions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetRegionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetRelationalDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetRelationalDatabaseMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseBlueprints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseBundlesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseBundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetRelationalDatabaseBundlesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseBundles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetRelationalDatabaseBundlesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseEventsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetRelationalDatabaseEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetRelationalDatabaseEventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseLogEventsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseLogEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetRelationalDatabaseLogEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseLogEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetRelationalDatabaseLogEventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseLogStreams<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseMetricDataMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseMetricDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetRelationalDatabaseMetricDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseMetricData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetRelationalDatabaseMetricDataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseParametersMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetRelationalDatabaseParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseParameters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetRelationalDatabaseParametersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabasesMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases',
    '/#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetRelationalDatabasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetRelationalDatabasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetRelationalDatabases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetRelationalDatabasesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetStaticIpMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetStaticIp',
    '/#X-Amz-Target=Lightsail_20161128.GetStaticIp',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetStaticIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetStaticIpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetStaticIp'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetStaticIp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIp']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIp']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetStaticIpMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128GetStaticIpsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.GetStaticIps',
    '/#X-Amz-Target=Lightsail_20161128.GetStaticIps',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128GetStaticIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128GetStaticIpsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIps']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.GetStaticIps'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128GetStaticIps<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIps']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIps']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128GetStaticIpsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128ImportKeyPairMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.ImportKeyPair',
    '/#X-Amz-Target=Lightsail_20161128.ImportKeyPair',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128ImportKeyPairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.ImportKeyPair']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128ImportKeyPairMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.ImportKeyPair']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.ImportKeyPair'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128ImportKeyPair<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.ImportKeyPair']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.ImportKeyPair']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128ImportKeyPairMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128IsVpcPeeredMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.IsVpcPeered',
    '/#X-Amz-Target=Lightsail_20161128.IsVpcPeered',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128IsVpcPeeredMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.IsVpcPeered']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128IsVpcPeeredMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.IsVpcPeered']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.IsVpcPeered'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128IsVpcPeered<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.IsVpcPeered']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.IsVpcPeered']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128IsVpcPeeredMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128OpenInstancePublicPortsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts',
    '/#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128OpenInstancePublicPortsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128OpenInstancePublicPortsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128OpenInstancePublicPorts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128OpenInstancePublicPortsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128PeerVpcMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.PeerVpc',
    '/#X-Amz-Target=Lightsail_20161128.PeerVpc',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128PeerVpcMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PeerVpc']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PeerVpc']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128PeerVpcMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PeerVpc']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Lightsail_20161128.PeerVpc'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetLightsail20161128PeerVpc<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PeerVpc']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PeerVpc']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128PeerVpcMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128PutAlarmMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.PutAlarm',
    '/#X-Amz-Target=Lightsail_20161128.PutAlarm',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128PutAlarmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PutAlarm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PutAlarm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128PutAlarmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PutAlarm']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Lightsail_20161128.PutAlarm'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetLightsail20161128PutAlarm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PutAlarm']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PutAlarm']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128PutAlarmMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128PutInstancePublicPortsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts',
    '/#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128PutInstancePublicPortsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128PutInstancePublicPortsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128PutInstancePublicPorts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128PutInstancePublicPortsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128RebootInstanceMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.RebootInstance',
    '/#X-Amz-Target=Lightsail_20161128.RebootInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128RebootInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.RebootInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128RebootInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.RebootInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.RebootInstance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128RebootInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.RebootInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.RebootInstance']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128RebootInstanceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128RebootRelationalDatabaseMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128RebootRelationalDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128RebootRelationalDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128RebootRelationalDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128RebootRelationalDatabaseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128RegisterContainerImageMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.RegisterContainerImage',
    '/#X-Amz-Target=Lightsail_20161128.RegisterContainerImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128RegisterContainerImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.RegisterContainerImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128RegisterContainerImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.RegisterContainerImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.RegisterContainerImage'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128RegisterContainerImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.RegisterContainerImage']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128RegisterContainerImageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128ReleaseStaticIpMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp',
    '/#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128ReleaseStaticIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128ReleaseStaticIpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128ReleaseStaticIp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128ReleaseStaticIpMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128ResetDistributionCacheMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.ResetDistributionCache',
    '/#X-Amz-Target=Lightsail_20161128.ResetDistributionCache',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128ResetDistributionCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.ResetDistributionCache']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128ResetDistributionCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.ResetDistributionCache']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.ResetDistributionCache'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128ResetDistributionCache<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.ResetDistributionCache']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128ResetDistributionCacheMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128SendContactMethodVerificationMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification',
    '/#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128SendContactMethodVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128SendContactMethodVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128SendContactMethodVerification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128SendContactMethodVerificationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128SetIpAddressTypeMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.SetIpAddressType',
    '/#X-Amz-Target=Lightsail_20161128.SetIpAddressType',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128SetIpAddressTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.SetIpAddressType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128SetIpAddressTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.SetIpAddressType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.SetIpAddressType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128SetIpAddressType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.SetIpAddressType']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128SetIpAddressTypeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128SetResourceAccessForBucketMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket',
    '/#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128SetResourceAccessForBucketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128SetResourceAccessForBucketMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128SetResourceAccessForBucket<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128SetResourceAccessForBucketMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128StartGUISessionMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.StartGUISession',
    '/#X-Amz-Target=Lightsail_20161128.StartGUISession',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128StartGUISessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.StartGUISession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128StartGUISessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.StartGUISession']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.StartGUISession'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128StartGUISession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.StartGUISession']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.StartGUISession']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128StartGUISessionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128StartInstanceMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.StartInstance',
    '/#X-Amz-Target=Lightsail_20161128.StartInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128StartInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.StartInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128StartInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.StartInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.StartInstance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128StartInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.StartInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.StartInstance']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128StartInstanceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128StartRelationalDatabaseMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128StartRelationalDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128StartRelationalDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128StartRelationalDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128StartRelationalDatabaseMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128StopGUISessionMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.StopGUISession',
    '/#X-Amz-Target=Lightsail_20161128.StopGUISession',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128StopGUISessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.StopGUISession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128StopGUISessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.StopGUISession']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.StopGUISession'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128StopGUISession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.StopGUISession']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.StopGUISession']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128StopGUISessionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128StopInstanceMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.StopInstance',
    '/#X-Amz-Target=Lightsail_20161128.StopInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128StopInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.StopInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128StopInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.StopInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.StopInstance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128StopInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.StopInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.StopInstance']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128StopInstanceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128StopRelationalDatabaseMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128StopRelationalDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128StopRelationalDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128StopRelationalDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128StopRelationalDatabaseMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128TagResourceMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.TagResource',
    '/#X-Amz-Target=Lightsail_20161128.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.TagResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128TagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128TestAlarmMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.TestAlarm',
    '/#X-Amz-Target=Lightsail_20161128.TestAlarm',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128TestAlarmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.TestAlarm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128TestAlarmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.TestAlarm']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.TestAlarm'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128TestAlarm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.TestAlarm']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128TestAlarmMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128UnpeerVpcMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UnpeerVpc',
    '/#X-Amz-Target=Lightsail_20161128.UnpeerVpc',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128UnpeerVpcMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.UnpeerVpc']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128UnpeerVpcMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.UnpeerVpc']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.UnpeerVpc'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128UnpeerVpc<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.UnpeerVpc']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128UnpeerVpcMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UntagResource',
    '/#X-Amz-Target=Lightsail_20161128.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UntagResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128UntagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128UpdateBucketMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateBucket',
    '/#X-Amz-Target=Lightsail_20161128.UpdateBucket',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128UpdateBucketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucket']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128UpdateBucketMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucket']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.UpdateBucket'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128UpdateBucket<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucket']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucket']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128UpdateBucketMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128UpdateBucketBundleMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle',
    '/#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128UpdateBucketBundleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128UpdateBucketBundleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128UpdateBucketBundle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128UpdateBucketBundleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128UpdateContainerServiceMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateContainerService',
    '/#X-Amz-Target=Lightsail_20161128.UpdateContainerService',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128UpdateContainerServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateContainerService']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128UpdateContainerServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateContainerService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.UpdateContainerService'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128UpdateContainerService<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateContainerService']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128UpdateContainerServiceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128UpdateDistributionMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateDistribution',
    '/#X-Amz-Target=Lightsail_20161128.UpdateDistribution',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128UpdateDistributionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistribution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128UpdateDistributionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistribution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.UpdateDistribution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128UpdateDistribution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistribution']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128UpdateDistributionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128UpdateDistributionBundleMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle',
    '/#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128UpdateDistributionBundleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128UpdateDistributionBundleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128UpdateDistributionBundle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128UpdateDistributionBundleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128UpdateDomainEntryMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry',
    '/#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128UpdateDomainEntryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128UpdateDomainEntryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128UpdateDomainEntry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetLightsail20161128UpdateDomainEntryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128UpdateInstanceMetadataOptionsMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions',
    '/#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128UpdateInstanceMetadataOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128UpdateInstanceMetadataOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128UpdateInstanceMetadataOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128UpdateInstanceMetadataOptionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128UpdateLoadBalancerAttributeMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute',
    '/#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128UpdateLoadBalancerAttributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128UpdateLoadBalancerAttributeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128UpdateLoadBalancerAttribute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128UpdateLoadBalancerAttributeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128UpdateRelationalDatabaseMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase',
    '/#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128UpdateRelationalDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128UpdateRelationalDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128UpdateRelationalDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128UpdateRelationalDatabaseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetLightsail20161128UpdateRelationalDatabaseParametersMutationKey() {
  return [
    '#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters',
    '/#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters',
    'POST',
  ] as const
}

export function getPostXAmzTargetLightsail20161128UpdateRelationalDatabaseParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLightsail20161128UpdateRelationalDatabaseParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetLightsail20161128UpdateRelationalDatabaseParameters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetLightsail20161128UpdateRelationalDatabaseParametersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

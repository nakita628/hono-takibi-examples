import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetLightsail20161128AllocateStaticIp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.AllocateStaticIp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.AllocateStaticIp'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128AttachCertificateToDistribution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128AttachDisk(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.AttachDisk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.AttachDisk'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128AttachInstancesToLoadBalancer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128AttachLoadBalancerTlsCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetLightsail20161128AttachStaticIp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.AttachStaticIp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.AttachStaticIp'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CloseInstancePublicPorts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CopySnapshot(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CopySnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CopySnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateBucket(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucket']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateBucket'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateBucketAccessKey(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateCloudFormationStack(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateContactMethod(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContactMethod']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateContactMethod'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateContainerService(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateContainerService'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateContainerServiceDeployment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetLightsail20161128CreateContainerServiceRegistryLogin(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetLightsail20161128CreateDisk(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDisk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateDisk'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateDiskFromSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateDiskSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateDistribution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDistribution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateDistribution'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateDomain(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateDomain'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateDomainEntry(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateDomainEntry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateDomainEntry'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateGUISessionAccessDetails(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateInstanceSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateInstances'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateInstancesFromSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateKeyPair(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateKeyPair']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateKeyPair'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateLoadBalancer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateLoadBalancerTlsCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetLightsail20161128CreateRelationalDatabase(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetLightsail20161128CreateRelationalDatabaseSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetLightsail20161128DeleteAlarm(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAlarm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteAlarm'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteAutoSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteBucket(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucket']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteBucket'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteBucketAccessKey(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteContactMethod(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContactMethod']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteContactMethod'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteContainerImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteContainerImage'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteContainerService(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteContainerService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteContainerService'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteDisk(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDisk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteDisk'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteDiskSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteDistribution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDistribution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteDistribution'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteDomain(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteDomain'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteDomainEntry(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteInstance'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteInstanceSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteKeyPair(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKeyPair']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteKeyPair'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteKnownHostKeys(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteLoadBalancer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetLightsail20161128DeleteRelationalDatabase(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetLightsail20161128DetachCertificateFromDistribution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetLightsail20161128DetachDisk(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DetachDisk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DetachDisk'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DetachInstancesFromLoadBalancer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DetachStaticIp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DetachStaticIp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DetachStaticIp'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DisableAddOn(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.DisableAddOn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DisableAddOn'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128DownloadDefaultKeyPair(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128EnableAddOn(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.EnableAddOn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.EnableAddOn'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128ExportSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.ExportSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.ExportSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetActiveNames(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetActiveNames']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetActiveNames'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetAlarms(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetAlarms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetAlarms'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetAutoSnapshots(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetBlueprints(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBlueprints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetBlueprints'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetBucketAccessKeys(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetBucketBundles(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketBundles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetBucketBundles'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetBucketMetricData(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetBucketMetricData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetBucketMetricData'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetBuckets(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBuckets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetBuckets'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetBundles(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetBundles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetBundles'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetCertificates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCertificates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetCertificates'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetCloudFormationStackRecords(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetContactMethods(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContactMethods']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetContactMethods'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetContainerAPIMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetContainerImages(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerImages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetContainerImages'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetContainerLog(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerLog']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetContainerLog'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetContainerServiceDeployments(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetContainerServiceMetricData(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetContainerServicePowers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetContainerServices(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetContainerServices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetContainerServices'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetCostEstimate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetCostEstimate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetCostEstimate'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetDisk(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetDisk'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetDiskSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetDiskSnapshots(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetDisks(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDisks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetDisks'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetDistributionBundles(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionBundles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetDistributionBundles'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetDistributionLatestCacheReset(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetDistributionMetricData(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetDistributions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetDistributions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetDistributions'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetDomain(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetDomain'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetDomains(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetDomains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetDomains'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetExportSnapshotRecords(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetInstance(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetInstance'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetInstanceAccessDetails(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetInstanceMetricData(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetInstancePortStates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstancePortStates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetInstancePortStates'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetInstanceSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetInstanceSnapshots(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetInstanceState(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstanceState']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetInstanceState'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetInstances(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetInstances'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetKeyPair(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPair']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetKeyPair'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetKeyPairs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetKeyPairs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetKeyPairs'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetLoadBalancer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancer'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetLoadBalancerMetricData(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetLoadBalancerTlsCertificates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetLoadBalancerTlsPolicies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetLoadBalancers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetLoadBalancers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetLoadBalancers'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetOperation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetOperation'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetOperations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetOperations'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetOperationsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetOperationsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetOperationsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetRegions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetRegions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetRegions'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetRelationalDatabase(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetRelationalDatabaseBlueprints(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetRelationalDatabaseBundles(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetRelationalDatabaseEvents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetRelationalDatabaseLogEvents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetRelationalDatabaseLogStreams(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetRelationalDatabaseMasterUserPassword(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetLightsail20161128GetRelationalDatabaseMetricData(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetRelationalDatabaseParameters(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetRelationalDatabaseSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetRelationalDatabaseSnapshots(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetRelationalDatabases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetStaticIp(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetStaticIp'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128GetStaticIps(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.GetStaticIps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.GetStaticIps'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128ImportKeyPair(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.ImportKeyPair']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.ImportKeyPair'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128IsVpcPeered(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.IsVpcPeered']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.IsVpcPeered'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128OpenInstancePublicPorts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128PeerVpc(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PeerVpc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.PeerVpc'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128PutAlarm(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.PutAlarm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.PutAlarm'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128PutInstancePublicPorts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128RebootInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.RebootInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.RebootInstance'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128RebootRelationalDatabase(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128RegisterContainerImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.RegisterContainerImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.RegisterContainerImage'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128ReleaseStaticIp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128ResetDistributionCache(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.ResetDistributionCache']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.ResetDistributionCache'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128SendContactMethodVerification(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128SetIpAddressType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.SetIpAddressType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.SetIpAddressType'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128SetResourceAccessForBucket(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128StartGUISession(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.StartGUISession']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.StartGUISession'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128StartInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.StartInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.StartInstance'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128StartRelationalDatabase(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128StopGUISession(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.StopGUISession']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.StopGUISession'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128StopInstance(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.StopInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.StopInstance'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128StopRelationalDatabase(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128TestAlarm(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.TestAlarm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.TestAlarm'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128UnpeerVpc(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.UnpeerVpc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.UnpeerVpc'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128UpdateBucket(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucket']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.UpdateBucket'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128UpdateBucketBundle(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128UpdateContainerService(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateContainerService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.UpdateContainerService'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128UpdateDistribution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistribution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.UpdateDistribution'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128UpdateDistributionBundle(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128UpdateDomainEntry(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128UpdateInstanceMetadataOptions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128UpdateLoadBalancerAttribute(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128UpdateRelationalDatabase(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase'].$post(args, options),
  )
}

export async function postXAmzTargetLightsail20161128UpdateRelationalDatabaseParameters(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters'].$post(
      args,
      options,
    ),
  )
}

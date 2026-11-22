import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountIdVaultsVaultNameMultipartUploadsUploadId(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$get(args, options),
  )
}

export async function putAccountIdVaultsVaultNameMultipartUploadsUploadId(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$put(args, options),
  )
}

export async function postAccountIdVaultsVaultNameMultipartUploadsUploadId(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$post(
      args,
      options,
    ),
  )
}

export async function deleteAccountIdVaultsVaultNameMultipartUploadsUploadId(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$delete(
      args,
      options,
    ),
  )
}

export async function getAccountIdVaultsVaultNameLockPolicy(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['lock-policy'].$get(args, options),
  )
}

export async function postAccountIdVaultsVaultNameLockPolicy(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['lock-policy'].$post(args, options),
  )
}

export async function deleteAccountIdVaultsVaultNameLockPolicy(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['lock-policy'].$delete(args, options),
  )
}

export async function postAccountIdVaultsVaultNameTagsOperationAdd(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=add']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['tags#operation=add'].$post(args, options),
  )
}

export async function postAccountIdVaultsVaultNameLockPolicyLockId(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy'][':lockId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['lock-policy'][':lockId'].$post(args, options),
  )
}

export async function getAccountIdVaultsVaultName(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':accountId'].vaults[':vaultName'].$get(args, options))
}

export async function putAccountIdVaultsVaultName(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':accountId'].vaults[':vaultName'].$put(args, options))
}

export async function deleteAccountIdVaultsVaultName(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':accountId'].vaults[':vaultName'].$delete(args, options))
}

export async function deleteAccountIdVaultsVaultNameArchivesArchiveId(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['archives'][':archiveId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName'].archives[':archiveId'].$delete(args, options),
  )
}

export async function getAccountIdVaultsVaultNameAccessPolicy(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['access-policy'].$get(args, options),
  )
}

export async function putAccountIdVaultsVaultNameAccessPolicy(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['access-policy'].$put(args, options),
  )
}

export async function deleteAccountIdVaultsVaultNameAccessPolicy(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['access-policy'].$delete(args, options),
  )
}

export async function getAccountIdVaultsVaultNameNotificationConfiguration(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['notification-configuration'].$get(args, options),
  )
}

export async function putAccountIdVaultsVaultNameNotificationConfiguration(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['notification-configuration'].$put(args, options),
  )
}

export async function deleteAccountIdVaultsVaultNameNotificationConfiguration(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['notification-configuration'].$delete(args, options),
  )
}

export async function getAccountIdVaultsVaultNameJobsJobId(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName'].jobs[':jobId'].$get(args, options),
  )
}

export async function getAccountIdPoliciesDataRetrieval(
  args: InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':accountId'].policies['data-retrieval'].$get(args, options))
}

export async function putAccountIdPoliciesDataRetrieval(
  args: InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':accountId'].policies['data-retrieval'].$put(args, options))
}

export async function getAccountIdVaultsVaultNameJobsJobIdOutput(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName'].jobs[':jobId'].output.$get(args, options),
  )
}

export async function getAccountIdVaultsVaultNameJobs(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':accountId'].vaults[':vaultName'].jobs.$get(args, options))
}

export async function postAccountIdVaultsVaultNameJobs(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':accountId'].vaults[':vaultName'].jobs.$post(args, options))
}

export async function getAccountIdVaultsVaultNameMultipartUploads(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['multipart-uploads'].$get(args, options),
  )
}

export async function postAccountIdVaultsVaultNameMultipartUploads(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['multipart-uploads'].$post(args, options),
  )
}

export async function getAccountIdProvisionedCapacity(
  args: InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':accountId']['provisioned-capacity'].$get(args, options))
}

export async function postAccountIdProvisionedCapacity(
  args: InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':accountId']['provisioned-capacity'].$post(args, options))
}

export async function getAccountIdVaultsVaultNameTags(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':accountId'].vaults[':vaultName'].tags.$get(args, options))
}

export async function getAccountIdVaults(
  args: InferRequestType<(typeof client)[':accountId']['vaults']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':accountId'].vaults.$get(args, options))
}

export async function postAccountIdVaultsVaultNameTagsOperationRemove(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName']['tags#operation=remove'].$post(args, options),
  )
}

export async function postAccountIdVaultsVaultNameArchives(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['archives']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':accountId'].vaults[':vaultName'].archives.$post(args, options),
  )
}

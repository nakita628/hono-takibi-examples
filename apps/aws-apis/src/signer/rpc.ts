import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSigningProfilesProfileNamePermissions(
  args: InferRequestType<
    (typeof client)['signing-profiles'][':profileName']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['signing-profiles'][':profileName'].permissions.$get(args, options),
  )
}

export async function postSigningProfilesProfileNamePermissions(
  args: InferRequestType<
    (typeof client)['signing-profiles'][':profileName']['permissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['signing-profiles'][':profileName'].permissions.$post(args, options),
  )
}

export async function getSigningProfilesProfileName(
  args: InferRequestType<(typeof client)['signing-profiles'][':profileName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['signing-profiles'][':profileName'].$get(args, options))
}

export async function putSigningProfilesProfileName(
  args: InferRequestType<(typeof client)['signing-profiles'][':profileName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['signing-profiles'][':profileName'].$put(args, options))
}

export async function deleteSigningProfilesProfileName(
  args: InferRequestType<(typeof client)['signing-profiles'][':profileName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['signing-profiles'][':profileName'].$delete(args, options))
}

export async function getSigningJobsJobId(
  args: InferRequestType<(typeof client)['signing-jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['signing-jobs'][':jobId'].$get(args, options))
}

export async function getSigningPlatformsPlatformId(
  args: InferRequestType<(typeof client)['signing-platforms'][':platformId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['signing-platforms'][':platformId'].$get(args, options))
}

export async function getSigningJobs(
  args: InferRequestType<(typeof client)['signing-jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['signing-jobs'].$get(args, options))
}

export async function postSigningJobs(
  args: InferRequestType<(typeof client)['signing-jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['signing-jobs'].$post(args, options))
}

export async function getSigningPlatforms(
  args: InferRequestType<(typeof client)['signing-platforms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['signing-platforms'].$get(args, options))
}

export async function getSigningProfiles(
  args: InferRequestType<(typeof client)['signing-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['signing-profiles'].$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function deleteSigningProfilesProfileNamePermissionsStatementIdRevisionId(
  args: InferRequestType<
    (typeof client)['signing-profiles'][':profileName']['permissions'][':statementId#revisionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['signing-profiles'][':profileName'].permissions[':statementId#revisionId'].$delete(
      args,
      options,
    ),
  )
}

export async function putSigningJobsJobIdRevoke(
  args: InferRequestType<(typeof client)['signing-jobs'][':jobId']['revoke']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['signing-jobs'][':jobId'].revoke.$put(args, options))
}

export async function putSigningProfilesProfileNameRevoke(
  args: InferRequestType<(typeof client)['signing-profiles'][':profileName']['revoke']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['signing-profiles'][':profileName'].revoke.$put(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

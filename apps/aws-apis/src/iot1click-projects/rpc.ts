import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateName(
  args: InferRequestType<
    (typeof client.projects)[':projectName']['placements'][':placementName']['devices'][':deviceTemplateName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectName'].placements[':placementName'].devices[
      ':deviceTemplateName'
    ].$put(args, options),
  )
}

export async function deleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateName(
  args: InferRequestType<
    (typeof client.projects)[':projectName']['placements'][':placementName']['devices'][':deviceTemplateName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectName'].placements[':placementName'].devices[
      ':deviceTemplateName'
    ].$delete(args, options),
  )
}

export async function getProjectsProjectNamePlacements(
  args: InferRequestType<(typeof client.projects)[':projectName']['placements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectName'].placements.$get(args, options))
}

export async function postProjectsProjectNamePlacements(
  args: InferRequestType<(typeof client.projects)[':projectName']['placements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectName'].placements.$post(args, options))
}

export async function getProjects(
  args: InferRequestType<typeof client.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$get(args, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function getProjectsProjectNamePlacementsPlacementName(
  args: InferRequestType<
    (typeof client.projects)[':projectName']['placements'][':placementName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectName'].placements[':placementName'].$get(args, options),
  )
}

export async function putProjectsProjectNamePlacementsPlacementName(
  args: InferRequestType<
    (typeof client.projects)[':projectName']['placements'][':placementName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectName'].placements[':placementName'].$put(args, options),
  )
}

export async function deleteProjectsProjectNamePlacementsPlacementName(
  args: InferRequestType<
    (typeof client.projects)[':projectName']['placements'][':placementName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectName'].placements[':placementName'].$delete(args, options),
  )
}

export async function getProjectsProjectName(
  args: InferRequestType<(typeof client.projects)[':projectName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectName'].$get(args, options))
}

export async function putProjectsProjectName(
  args: InferRequestType<(typeof client.projects)[':projectName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectName'].$put(args, options))
}

export async function deleteProjectsProjectName(
  args: InferRequestType<(typeof client.projects)[':projectName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectName'].$delete(args, options))
}

export async function getProjectsProjectNamePlacementsPlacementNameDevices(
  args: InferRequestType<
    (typeof client.projects)[':projectName']['placements'][':placementName']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectName'].placements[':placementName'].devices.$get(args, options),
  )
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

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

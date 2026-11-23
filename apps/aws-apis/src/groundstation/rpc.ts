import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getContactContactId(
  args: InferRequestType<(typeof client.contact)[':contactId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact[':contactId'].$get(args, options))
}

export async function deleteContactContactId(
  args: InferRequestType<(typeof client.contact)[':contactId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact[':contactId'].$delete(args, options))
}

export async function getConfig(
  args: InferRequestType<typeof client.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.$get(args, options))
}

export async function postConfig(
  args: InferRequestType<typeof client.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.$post(args, options))
}

export async function getDataflowEndpointGroup(
  args: InferRequestType<typeof client.dataflowEndpointGroup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataflowEndpointGroup.$get(args, options))
}

export async function postDataflowEndpointGroup(
  args: InferRequestType<typeof client.dataflowEndpointGroup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataflowEndpointGroup.$post(args, options))
}

export async function postEphemeris(
  args: InferRequestType<typeof client.ephemeris.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ephemeris.$post(args, options))
}

export async function getMissionprofile(
  args: InferRequestType<typeof client.missionprofile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.missionprofile.$get(args, options))
}

export async function postMissionprofile(
  args: InferRequestType<typeof client.missionprofile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.missionprofile.$post(args, options))
}

export async function getConfigConfigTypeConfigId(
  args: InferRequestType<(typeof client.config)[':configType'][':configId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config[':configType'][':configId'].$get(args, options))
}

export async function putConfigConfigTypeConfigId(
  args: InferRequestType<(typeof client.config)[':configType'][':configId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config[':configType'][':configId'].$put(args, options))
}

export async function deleteConfigConfigTypeConfigId(
  args: InferRequestType<(typeof client.config)[':configType'][':configId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config[':configType'][':configId'].$delete(args, options))
}

export async function getDataflowEndpointGroupDataflowEndpointGroupId(
  args: InferRequestType<(typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dataflowEndpointGroup[':dataflowEndpointGroupId'].$get(args, options),
  )
}

export async function deleteDataflowEndpointGroupDataflowEndpointGroupId(
  args: InferRequestType<
    (typeof client.dataflowEndpointGroup)[':dataflowEndpointGroupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dataflowEndpointGroup[':dataflowEndpointGroupId'].$delete(args, options),
  )
}

export async function getEphemerisEphemerisId(
  args: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ephemeris[':ephemerisId'].$get(args, options))
}

export async function putEphemerisEphemerisId(
  args: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ephemeris[':ephemerisId'].$put(args, options))
}

export async function deleteEphemerisEphemerisId(
  args: InferRequestType<(typeof client.ephemeris)[':ephemerisId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ephemeris[':ephemerisId'].$delete(args, options))
}

export async function getMissionprofileMissionProfileId(
  args: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.missionprofile[':missionProfileId'].$get(args, options))
}

export async function putMissionprofileMissionProfileId(
  args: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.missionprofile[':missionProfileId'].$put(args, options))
}

export async function deleteMissionprofileMissionProfileId(
  args: InferRequestType<(typeof client.missionprofile)[':missionProfileId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.missionprofile[':missionProfileId'].$delete(args, options))
}

export async function getAgentAgentIdConfiguration(
  args: InferRequestType<(typeof client.agent)[':agentId']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent[':agentId'].configuration.$get(args, options))
}

export async function postMinuteUsage(
  args: InferRequestType<(typeof client)['minute-usage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['minute-usage'].$post(args, options))
}

export async function getSatelliteSatelliteId(
  args: InferRequestType<(typeof client.satellite)[':satelliteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.satellite[':satelliteId'].$get(args, options))
}

export async function postContacts(
  args: InferRequestType<typeof client.contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$post(args, options))
}

export async function postEphemerides(
  args: InferRequestType<typeof client.ephemerides.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ephemerides.$post(args, options))
}

export async function getGroundstation(
  args: InferRequestType<typeof client.groundstation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groundstation.$get(args, options))
}

export async function getSatellite(
  args: InferRequestType<typeof client.satellite.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.satellite.$get(args, options))
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

export async function postAgent(
  args: InferRequestType<typeof client.agent.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent.$post(args, options))
}

export async function postContact(
  args: InferRequestType<typeof client.contact.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function putAgentAgentId(
  args: InferRequestType<(typeof client.agent)[':agentId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent[':agentId'].$put(args, options))
}

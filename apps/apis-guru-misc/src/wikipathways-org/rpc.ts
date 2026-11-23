import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCreatePathway(
  args: InferRequestType<typeof client.createPathway.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createPathway.$post(args, options))
}

export async function getFindInteractions(
  args: InferRequestType<typeof client.findInteractions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findInteractions.$get(args, options))
}

export async function getFindPathwaysByLiterature(
  args: InferRequestType<typeof client.findPathwaysByLiterature.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findPathwaysByLiterature.$get(args, options))
}

export async function getFindPathwaysByText(
  args: InferRequestType<typeof client.findPathwaysByText.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findPathwaysByText.$get(args, options))
}

export async function getFindPathwaysByXref(
  args: InferRequestType<typeof client.findPathwaysByXref.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findPathwaysByXref.$get(args, options))
}

export async function getGetColoredPathway(
  args: InferRequestType<typeof client.getColoredPathway.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getColoredPathway.$get(args, options))
}

export async function getGetCurationTagHistory(
  args: InferRequestType<typeof client.getCurationTagHistory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getCurationTagHistory.$get(args, options))
}

export async function getGetCurationTags(
  args: InferRequestType<typeof client.getCurationTags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getCurationTags.$get(args, options))
}

export async function getGetCurationTagsByName(
  args: InferRequestType<typeof client.getCurationTagsByName.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getCurationTagsByName.$get(args, options))
}

export async function getGetOntologyTermsByPathway(
  args: InferRequestType<typeof client.getOntologyTermsByPathway.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getOntologyTermsByPathway.$get(args, options))
}

export async function getGetPathway(
  args: InferRequestType<typeof client.getPathway.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getPathway.$get(args, options))
}

export async function getGetPathwayAs(
  args: InferRequestType<typeof client.getPathwayAs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getPathwayAs.$get(args, options))
}

export async function getGetPathwayHistory(
  args: InferRequestType<typeof client.getPathwayHistory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getPathwayHistory.$get(args, options))
}

export async function getGetPathwayInfo(
  args: InferRequestType<typeof client.getPathwayInfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getPathwayInfo.$get(args, options))
}

export async function getGetPathwaysByOntologyTerm(
  args: InferRequestType<typeof client.getPathwaysByOntologyTerm.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getPathwaysByOntologyTerm.$get(args, options))
}

export async function getGetPathwaysByParentOntologyTerm(
  args: InferRequestType<typeof client.getPathwaysByParentOntologyTerm.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getPathwaysByParentOntologyTerm.$get(args, options))
}

export async function getGetRecentChanges(
  args: InferRequestType<typeof client.getRecentChanges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getRecentChanges.$get(args, options))
}

export async function getGetUserByOrcid(
  args: InferRequestType<typeof client.getUserByOrcid.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getUserByOrcid.$get(args, options))
}

export async function getGetXrefList(
  args: InferRequestType<typeof client.getXrefList.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getXrefList.$get(args, options))
}

export async function getListOrganisms(
  args: InferRequestType<typeof client.listOrganisms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listOrganisms.$get(args, options))
}

export async function getListPathways(
  args: InferRequestType<typeof client.listPathways.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listPathways.$get(args, options))
}

export async function getLogin(
  args: InferRequestType<typeof client.login.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.login.$get(args, options))
}

export async function getRemoveCurationTag(
  args: InferRequestType<typeof client.removeCurationTag.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.removeCurationTag.$get(args, options))
}

export async function getRemoveOntologyTag(
  args: InferRequestType<typeof client.removeOntologyTag.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.removeOntologyTag.$get(args, options))
}

export async function getSaveCurationTag(
  args: InferRequestType<typeof client.saveCurationTag.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saveCurationTag.$get(args, options))
}

export async function getSaveOntologyTag(
  args: InferRequestType<typeof client.saveOntologyTag.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saveOntologyTag.$get(args, options))
}

export async function getUpdatePathway(
  args: InferRequestType<typeof client.updatePathway.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updatePathway.$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEnmDbInvestigation(
  args: InferRequestType<(typeof client.enm)[':db']['investigation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enm[':db'].investigation.$get(args, options))
}

export async function getEnmDbQueryCompoundTermRepresentation(
  args: InferRequestType<
    (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enm[':db'].query.compound[':term'][':representation'].$get(args, options),
  )
}

export async function getEnmDbQuerySimilarity(
  args: InferRequestType<(typeof client.enm)[':db']['query']['similarity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enm[':db'].query.similarity.$get(args, options))
}

export async function getEnmDbQuerySmarts(
  args: InferRequestType<(typeof client.enm)[':db']['query']['smarts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enm[':db'].query.smarts.$get(args, options))
}

export async function getEnmDbQueryStudy(
  args: InferRequestType<(typeof client.enm)[':db']['query']['study']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enm[':db'].query.study.$get(args, options))
}

export async function getEnmDbSubstance(
  args: InferRequestType<(typeof client.enm)[':db']['substance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enm[':db'].substance.$get(args, options))
}

export async function getEnmDbSubstanceUuid(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enm[':db'].substance[':uuid'].$get(args, options))
}

export async function getEnmDbSubstanceUuidComposition(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enm[':db'].substance[':uuid'].composition.$get(args, options))
}

export async function getEnmDbSubstanceUuidStructures(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enm[':db'].substance[':uuid'].structures.$get(args, options))
}

export async function getEnmDbSubstanceUuidStudy(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enm[':db'].substance[':uuid'].study.$get(args, options))
}

export async function getEnmDbSubstanceUuidStudySummary(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enm[':db'].substance[':uuid'].studySummary.$get(args, options))
}

export async function getSelect(
  args: InferRequestType<typeof client.select.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.select.$get(args, options))
}

export async function postSelect(
  args: InferRequestType<typeof client.select.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.select.$post(args, options))
}

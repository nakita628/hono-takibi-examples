import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1AutnumAutnumId(
  args: InferRequestType<(typeof client.v1.autnum)[':autnumId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.autnum[':autnumId'].$get(args, options))
}

export async function getV1DomainDomainName(
  args: InferRequestType<(typeof client.v1.domain)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domain[':domainName'].$get(args, options))
}

export async function getV1Domains(
  args: InferRequestType<typeof client.v1.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.$get(args, options))
}

export async function getV1Entities(
  args: InferRequestType<typeof client.v1.entities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.entities.$get(args, options))
}

export async function getV1EntityEntityId(
  args: InferRequestType<(typeof client.v1.entity)[':entityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.entity[':entityId'].$get(args, options))
}

export async function getV1Help(
  args: InferRequestType<typeof client.v1.help.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.help.$get(args, options))
}

export async function getV1Ip(
  args: InferRequestType<typeof client.v1.ip.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ip.$get(args, options))
}

export async function getV1IpIpIdIpId1(
  args: InferRequestType<(typeof client.v1.ip)[':ipId'][':ipId1']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ip[':ipId'][':ipId1'].$get(args, options))
}

export async function getV1NameserverNameserverId(
  args: InferRequestType<(typeof client.v1.nameserver)[':nameserverId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.nameserver[':nameserverId'].$get(args, options))
}

export async function getV1Nameservers(
  args: InferRequestType<typeof client.v1.nameservers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.nameservers.$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getProjectNameZonesZonePools(
  args: InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':projectName'].zones[':zone'].pools.$get(args, options))
}

export async function postProjectNameZonesZonePools(
  args: InferRequestType<(typeof client)[':projectName']['zones'][':zone']['pools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':projectName'].zones[':zone'].pools.$post(args, options))
}

export async function getProjectNameZonesZonePoolsPoolName(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectName'].zones[':zone'].pools[':poolName'].$get(args, options),
  )
}

export async function postProjectNameZonesZonePoolsPoolName(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectName'].zones[':zone'].pools[':poolName'].$post(args, options),
  )
}

export async function getProjectNameZonesZonePoolsPoolNameReplicas(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectName'].zones[':zone'].pools[':poolName'].replicas.$get(args, options),
  )
}

export async function getProjectNameZonesZonePoolsPoolNameReplicasReplicaName(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectName'].zones[':zone'].pools[':poolName'].replicas[':replicaName'].$get(
      args,
      options,
    ),
  )
}

export async function postProjectNameZonesZonePoolsPoolNameReplicasReplicaName(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectName'].zones[':zone'].pools[':poolName'].replicas[':replicaName'].$post(
      args,
      options,
    ),
  )
}

export async function postProjectNameZonesZonePoolsPoolNameReplicasReplicaNameRestart(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['replicas'][':replicaName']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectName'].zones[':zone'].pools[':poolName'].replicas[':replicaName'].restart.$post(
      args,
      options,
    ),
  )
}

export async function postProjectNameZonesZonePoolsPoolNameResize(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['resize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectName'].zones[':zone'].pools[':poolName'].resize.$post(args, options),
  )
}

export async function postProjectNameZonesZonePoolsPoolNameUpdateTemplate(
  args: InferRequestType<
    (typeof client)[':projectName']['zones'][':zone']['pools'][':poolName']['updateTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectName'].zones[':zone'].pools[':poolName'].updateTemplate.$post(args, options),
  )
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1BusinessItemId(
  args: InferRequestType<(typeof client.api.v1.BusinessItem)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.BusinessItem[':id'].$get(args, options))
}

export async function getApiV1LayingBody(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.LayingBody.$get(undefined, options))
}

export async function getApiV1Procedure(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.Procedure.$get(undefined, options))
}

export async function getApiV1ProcedureId(
  args: InferRequestType<(typeof client.api.v1.Procedure)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.Procedure[':id'].$get(args, options))
}

export async function getApiV1ProposedNegativeStatutoryInstrument(
  args: InferRequestType<typeof client.api.v1.ProposedNegativeStatutoryInstrument.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.ProposedNegativeStatutoryInstrument.$get(args, options))
}

export async function getApiV1ProposedNegativeStatutoryInstrumentId(
  args: InferRequestType<(typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.ProposedNegativeStatutoryInstrument[':id'].$get(args, options),
  )
}

export async function getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItems(
  args: InferRequestType<
    (typeof client.api.v1.ProposedNegativeStatutoryInstrument)[':id']['BusinessItems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.ProposedNegativeStatutoryInstrument[':id'].BusinessItems.$get(args, options),
  )
}

export async function getApiV1StatutoryInstrument(
  args: InferRequestType<typeof client.api.v1.StatutoryInstrument.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.StatutoryInstrument.$get(args, options))
}

export async function getApiV1StatutoryInstrumentId(
  args: InferRequestType<(typeof client.api.v1.StatutoryInstrument)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.StatutoryInstrument[':id'].$get(args, options))
}

export async function getApiV1StatutoryInstrumentIdBusinessItems(
  args: InferRequestType<
    (typeof client.api.v1.StatutoryInstrument)[':id']['BusinessItems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.StatutoryInstrument[':id'].BusinessItems.$get(args, options),
  )
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAuth(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.$get(undefined, options))
}

export async function getBelegeBelegUuid(
  args: InferRequestType<(typeof client.belege)[':belegUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.belege[':belegUuid'].$get(args, options))
}

export async function getExportCsvRegistrierkassenRegistrierkasseUuidBelege(
  args: InferRequestType<
    (typeof client.export.csv.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.export.csv.registrierkassen[':registrierkasseUuid'].belege.$get(args, options),
  )
}

export async function getExportDep131RegistrierkassenRegistrierkasseUuidBelege(
  args: InferRequestType<
    (typeof client.export.dep131.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.export.dep131.registrierkassen[':registrierkasseUuid'].belege.$get(args, options),
  )
}

export async function getExportDep7RegistrierkassenRegistrierkasseUuidBelege(
  args: InferRequestType<
    (typeof client.export.dep7.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.export.dep7.registrierkassen[':registrierkasseUuid'].belege.$get(args, options),
  )
}

export async function getExportGobdRegistrierkassenRegistrierkasseUuid(
  args: InferRequestType<
    (typeof client.export.gobd.registrierkassen)[':registrierkasseUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.export.gobd.registrierkassen[':registrierkasseUuid'].$get(args, options),
  )
}

export async function getExportHtmlBelegeBelegUuid(
  args: InferRequestType<(typeof client.export.html.belege)[':belegUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.html.belege[':belegUuid'].$get(args, options))
}

export async function getExportPdfBelegeBelegUuid(
  args: InferRequestType<(typeof client.export.pdf.belege)[':belegUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.pdf.belege[':belegUuid'].$get(args, options))
}

export async function getExportQrBelegeBelegUuid(
  args: InferRequestType<(typeof client.export.qr.belege)[':belegUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.qr.belege[':belegUuid'].$get(args, options))
}

export async function getExportThermalPrintBelegeBelegUuid(
  args: InferRequestType<(typeof client.export)['thermal-print']['belege'][':belegUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.export['thermal-print'].belege[':belegUuid'].$get(args, options),
  )
}

export async function getExportXlsRegistrierkassenRegistrierkasseUuidBelege(
  args: InferRequestType<
    (typeof client.export.xls.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.export.xls.registrierkassen[':registrierkasseUuid'].belege.$get(args, options),
  )
}

export async function getRegistrierkassenRegistrierkasseUuid(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registrierkassen[':registrierkasseUuid'].$get(args, options))
}

export async function postRegistrierkassenRegistrierkasseUuidAbschluss(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['abschluss']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrierkassen[':registrierkasseUuid'].abschluss.$post(args, options),
  )
}

export async function getRegistrierkassenRegistrierkasseUuidBelege(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrierkassen[':registrierkasseUuid'].belege.$get(args, options),
  )
}

export async function getRegistrierkassenRegistrierkasseUuidBelegeBelegUuid(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrierkassen[':registrierkasseUuid'].belege[':belegUuid'].$get(args, options),
  )
}

export async function putRegistrierkassenRegistrierkasseUuidBelegeBelegUuid(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['belege'][':belegUuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrierkassen[':registrierkasseUuid'].belege[':belegUuid'].$put(args, options),
  )
}

export async function getRegistrierkassenRegistrierkasseUuidDep(
  args: InferRequestType<(typeof client.registrierkassen)[':registrierkasseUuid']['dep']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrierkassen[':registrierkasseUuid'].dep.$get(args, options),
  )
}

export async function getRegistrierkassenRegistrierkasseUuidMonatsbelege(
  args: InferRequestType<
    (typeof client.registrierkassen)[':registrierkasseUuid']['monatsbelege']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrierkassen[':registrierkasseUuid'].monatsbelege.$get(args, options),
  )
}

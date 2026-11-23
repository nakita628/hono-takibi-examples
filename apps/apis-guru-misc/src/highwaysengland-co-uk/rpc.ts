import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getVVersionAreas(
  args: InferRequestType<(typeof client)['v{version}']['areas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v{version}'].areas.$get(args, options))
}

export async function getVVersionAreasAreaIds(
  args: InferRequestType<(typeof client)['v{version}']['areas'][':area_Ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v{version}'].areas[':area_Ids'].$get(args, options))
}

export async function getVVersionQualityDaily(
  args: InferRequestType<(typeof client)['v{version}']['quality']['daily']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v{version}'].quality.daily.$get(args, options))
}

export async function getVVersionQualityOverall(
  args: InferRequestType<(typeof client)['v{version}']['quality']['overall']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v{version}'].quality.overall.$get(args, options))
}

export async function getVVersionReportsReportType(
  args: InferRequestType<(typeof client)['v{version}']['reports'][':report_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v{version}'].reports[':report_type'].$get(args, options))
}

export async function getVVersionReportsStartDateToEndDateReportType(
  args: InferRequestType<
    (typeof client)['v{version}']['reports'][':start_date']['to'][':end_date'][':report_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v{version}'].reports[':start_date'].to[':end_date'][':report_type'].$get(args, options),
  )
}

export async function getVVersionSites(
  args: InferRequestType<(typeof client)['v{version}']['sites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v{version}'].sites.$get(args, options))
}

export async function getVVersionSitesSiteIds(
  args: InferRequestType<(typeof client)['v{version}']['sites'][':site_Ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v{version}'].sites[':site_Ids'].$get(args, options))
}

export async function getVVersionSitetypes(
  args: InferRequestType<(typeof client)['v{version}']['sitetypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v{version}'].sitetypes.$get(args, options))
}

export async function getVVersionSitetypesSiteTypeIdSites(
  args: InferRequestType<
    (typeof client)['v{version}']['sitetypes'][':siteType_Id']['sites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v{version}'].sitetypes[':siteType_Id'].sites.$get(args, options),
  )
}

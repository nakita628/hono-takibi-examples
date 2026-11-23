import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getVisualCrossingWebServicesRestServicesTimelineLocation(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.VisualCrossingWebServices.rest.services.timeline[':location'].$get(args, options),
  )
}

export async function getVisualCrossingWebServicesRestServicesTimelineLocationStartdate(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.VisualCrossingWebServices.rest.services.timeline[':location'][':startdate'].$get(
      args,
      options,
    ),
  )
}

export async function getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.VisualCrossingWebServices.rest.services.timeline[':location'][':startdate'][
      ':enddate'
    ].$get(args, options),
  )
}

export async function getVisualCrossingWebServicesRestServicesWeatherdataForecast(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get(args, options),
  )
}

export async function getVisualCrossingWebServicesRestServicesWeatherdataHistory(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.VisualCrossingWebServices.rest.services.weatherdata.history.$get(args, options),
  )
}

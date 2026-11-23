import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCustomerServiceMetricCustomerServiceMetricTypeEvaluationType(
  args: InferRequestType<
    (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customer_service_metric[':customer_service_metric_type'][':evaluation_type'].$get(
      args,
      options,
    ),
  )
}

export async function getSellerStandardsProfile(options?: ClientRequestOptions) {
  return await parseResponse(client.seller_standards_profile.$get(undefined, options))
}

export async function getSellerStandardsProfileProgramCycle(
  args: InferRequestType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.seller_standards_profile[':program'][':cycle'].$get(args, options),
  )
}

export async function getTrafficReport(
  args: InferRequestType<typeof client.traffic_report.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.traffic_report.$get(args, options))
}

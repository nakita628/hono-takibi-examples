import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1Behavior(
  args: InferRequestType<typeof client.v1.behavior.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.behavior.$post(args, options))
}

export async function getV1Checks(
  args: InferRequestType<typeof client.v1.checks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.checks.$get(args, options))
}

export async function postV1Checks(
  args: InferRequestType<typeof client.v1.checks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.checks.$post(args, options))
}

export async function getV1ChecksHealth(
  args: InferRequestType<typeof client.v1.checks.health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.checks.health.$get(args, options))
}

export async function getV1ChecksCheckId(
  args: InferRequestType<(typeof client.v1.checks)[':check_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.checks[':check_id'].$get(args, options))
}

export async function getV1ChecksCheckIdDetails(
  args: InferRequestType<(typeof client.v1.checks)[':check_id']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.checks[':check_id'].details.$get(args, options))
}

export async function getV1ChecksCheckIdPdf(
  args: InferRequestType<(typeof client.v1.checks)[':check_id']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.checks[':check_id'].pdf.$get(args, options))
}

export async function postV1ChecksCheckIdPdf(
  args: InferRequestType<(typeof client.v1.checks)[':check_id']['pdf']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.checks[':check_id'].pdf.$post(args, options))
}

export async function getV1Config(
  args: InferRequestType<typeof client.v1.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.config.$get(args, options))
}

export async function putV1Config(
  args: InferRequestType<typeof client.v1.config.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.config.$put(args, options))
}

export async function postV1Config(
  args: InferRequestType<typeof client.v1.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.config.$post(args, options))
}

export async function deleteV1Config(
  args: InferRequestType<typeof client.v1.config.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.config.$delete(args, options))
}

export async function getV1ContinuousChecks(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['continuous-checks'].$get(undefined, options))
}

export async function postV1ContinuousChecks(
  args: InferRequestType<(typeof client.v1)['continuous-checks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['continuous-checks'].$post(args, options))
}

export async function getV1ContinuousChecksContinuousCheckId(
  args: InferRequestType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['continuous-checks'][':continuous_check_id'].$get(args, options),
  )
}

export async function putV1ContinuousChecksContinuousCheckId(
  args: InferRequestType<(typeof client.v1)['continuous-checks'][':continuous_check_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['continuous-checks'][':continuous_check_id'].$put(args, options),
  )
}

export async function getV1ContinuousChecksContinuousCheckIdHistory(
  args: InferRequestType<
    (typeof client.v1)['continuous-checks'][':continuous_check_id']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['continuous-checks'][':continuous_check_id'].history.$get(args, options),
  )
}

export async function getV1Hooks(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.hooks.$get(undefined, options))
}

export async function postV1Hooks(
  args: InferRequestType<typeof client.v1.hooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hooks.$post(args, options))
}

export async function putV1HooksHookId(
  args: InferRequestType<(typeof client.v1.hooks)[':hook_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hooks[':hook_id'].$put(args, options))
}

export async function deleteV1HooksHookId(
  args: InferRequestType<(typeof client.v1.hooks)[':hook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hooks[':hook_id'].$delete(args, options))
}

export async function getV1Reports(
  args: InferRequestType<typeof client.v1.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reports.$get(args, options))
}

export async function postV1Reports(
  args: InferRequestType<typeof client.v1.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reports.$post(args, options))
}

export async function getV1ReportsReportId(
  args: InferRequestType<(typeof client.v1.reports)[':report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reports[':report_id'].$get(args, options))
}

export async function postV1ReportsReportIdUpload(
  args: InferRequestType<(typeof client.v1.reports)[':report_id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reports[':report_id'].upload.$post(args, options))
}

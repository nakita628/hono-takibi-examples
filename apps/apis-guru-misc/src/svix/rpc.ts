import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1AppIndex(
  args: InferRequestType<typeof client.api.v1.app.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app.index.$get(args, options))
}

export async function postApiV1AppIndex(
  args: InferRequestType<typeof client.api.v1.app.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app.index.$post(args, options))
}

export async function getApiV1AppAppIdIndex(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].index.$get(args, options))
}

export async function putApiV1AppAppIdIndex(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].index.$put(args, options))
}

export async function deleteApiV1AppAppIdIndex(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].index.$delete(args, options))
}

export async function getApiV1AppAppIdAttemptEndpointEndpointIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].attempt.endpoint[':endpoint_id'].index.$get(args, options),
  )
}

export async function getApiV1AppAppIdAttemptMsgMsgIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].attempt.msg[':msg_id'].index.$get(args, options),
  )
}

export async function getApiV1AppAppIdEndpointIndex(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].endpoint.index.$get(args, options))
}

export async function postApiV1AppAppIdEndpointIndex(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].endpoint.index.$post(args, options))
}

export async function getApiV1AppAppIdEndpointEndpointIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].index.$get(args, options),
  )
}

export async function putApiV1AppAppIdEndpointEndpointIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].index.$put(args, options),
  )
}

export async function deleteApiV1AppAppIdEndpointEndpointIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].index.$delete(args, options),
  )
}

export async function getApiV1AppAppIdEndpointEndpointIdHeadersIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.index.$get(args, options),
  )
}

export async function putApiV1AppAppIdEndpointEndpointIdHeadersIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.index.$put(args, options),
  )
}

export async function patchApiV1AppAppIdEndpointEndpointIdHeadersIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.index.$patch(args, options),
  )
}

export async function getApiV1AppAppIdEndpointEndpointIdMsgIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].msg.index.$get(args, options),
  )
}

export async function postApiV1AppAppIdEndpointEndpointIdRecoverIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].recover.index.$post(args, options),
  )
}

export async function postApiV1AppAppIdEndpointEndpointIdReplayMissingIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['replay-missing']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id']['replay-missing'].index.$post(
      args,
      options,
    ),
  )
}

export async function getApiV1AppAppIdEndpointEndpointIdSecretIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.index.$get(args, options),
  )
}

export async function postApiV1AppAppIdEndpointEndpointIdSecretRotateIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.rotate.index.$post(args, options),
  )
}

export async function getApiV1AppAppIdEndpointEndpointIdStatsIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].stats.index.$get(args, options),
  )
}

export async function getApiV1AppAppIdEndpointEndpointIdTransformationIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].transformation.index.$get(args, options),
  )
}

export async function patchApiV1AppAppIdEndpointEndpointIdTransformationIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['transformation']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].transformation.index.$patch(
      args,
      options,
    ),
  )
}

export async function getApiV1AppAppIdIntegrationIndex(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].integration.index.$get(args, options))
}

export async function postApiV1AppAppIdIntegrationIndex(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['integration']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].integration.index.$post(args, options))
}

export async function getApiV1AppAppIdIntegrationIntegIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].integration[':integ_id'].index.$get(args, options),
  )
}

export async function putApiV1AppAppIdIntegrationIntegIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].integration[':integ_id'].index.$put(args, options),
  )
}

export async function deleteApiV1AppAppIdIntegrationIntegIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].integration[':integ_id'].index.$delete(args, options),
  )
}

export async function getApiV1AppAppIdIntegrationIntegIdKeyIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].integration[':integ_id'].key.index.$get(args, options),
  )
}

export async function postApiV1AppAppIdIntegrationIntegIdKeyRotateIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['integration'][':integ_id']['key']['rotate']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].integration[':integ_id'].key.rotate.index.$post(args, options),
  )
}

export async function getApiV1AppAppIdMsgIndex(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].msg.index.$get(args, options))
}

export async function postApiV1AppAppIdMsgIndex(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].msg.index.$post(args, options))
}

export async function getApiV1AppAppIdMsgMsgIdIndex(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].msg[':msg_id'].index.$get(args, options))
}

export async function getApiV1AppAppIdMsgMsgIdAttemptIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].msg[':msg_id'].attempt.index.$get(args, options),
  )
}

export async function getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].index.$get(args, options),
  )
}

export async function deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].content.index.$delete(
      args,
      options,
    ),
  )
}

export async function deleteApiV1AppAppIdMsgMsgIdContentIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].msg[':msg_id'].content.index.$delete(args, options),
  )
}

export async function getApiV1AppAppIdMsgMsgIdEndpointIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].msg[':msg_id'].endpoint.index.$get(args, options),
  )
}

export async function getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['attempt']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].msg[':msg_id'].endpoint[':endpoint_id'].attempt.index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndex(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].msg[':msg_id'].endpoint[':endpoint_id'].resend.index.$post(
      args,
      options,
    ),
  )
}

export async function postApiV1AuthAppPortalAccessAppIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.auth)['app-portal-access'][':app_id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.auth['app-portal-access'][':app_id'].index.$post(args, options),
  )
}

export async function postApiV1AuthAppAppIdExpireAllIndex(
  args: InferRequestType<
    (typeof client.api.v1.auth.app)[':app_id']['expire-all']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.auth.app[':app_id']['expire-all'].index.$post(args, options),
  )
}

export async function postApiV1AuthDashboardAccessAppIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.auth)['dashboard-access'][':app_id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.auth['dashboard-access'][':app_id'].index.$post(args, options),
  )
}

export async function postApiV1AuthLogoutIndex(
  args: InferRequestType<typeof client.api.v1.auth.logout.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.auth.logout.index.$post(args, options))
}

export async function getApiV1BackgroundTaskIndex(
  args: InferRequestType<(typeof client.api.v1)['background-task']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['background-task'].index.$get(args, options))
}

export async function getApiV1BackgroundTaskTaskIdIndex(
  args: InferRequestType<(typeof client.api.v1)['background-task'][':task_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['background-task'][':task_id'].index.$get(args, options))
}

export async function getApiV1EventTypeIndex(
  args: InferRequestType<(typeof client.api.v1)['event-type']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['event-type'].index.$get(args, options))
}

export async function postApiV1EventTypeIndex(
  args: InferRequestType<(typeof client.api.v1)['event-type']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['event-type'].index.$post(args, options))
}

export async function getApiV1EventTypeEventTypeNameIndex(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['event-type'][':event_type_name'].index.$get(args, options),
  )
}

export async function putApiV1EventTypeEventTypeNameIndex(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['event-type'][':event_type_name'].index.$put(args, options),
  )
}

export async function deleteApiV1EventTypeEventTypeNameIndex(
  args: InferRequestType<
    (typeof client.api.v1)['event-type'][':event_type_name']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['event-type'][':event_type_name'].index.$delete(args, options),
  )
}

export async function getApiV1HealthIndex(
  args: InferRequestType<typeof client.api.v1.health.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.health.index.$get(args, options))
}

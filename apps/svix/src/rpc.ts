import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1HealthPing(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.health.ping.$get(undefined, options))
}

export async function headApiV1HealthPing(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.health.ping.$head(undefined, options))
}

export async function getApiV1Health(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.health.$get(undefined, options))
}

export async function headApiV1Health(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.health.$head(undefined, options))
}

export async function postApiV1AuthLogout(
  args: InferRequestType<typeof client.api.v1.auth.logout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.auth.logout.$post(args, options))
}

export async function postApiV1AuthAppPortalAccessAppId(
  args: InferRequestType<(typeof client.api.v1.auth)['app-portal-access'][':app_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.auth['app-portal-access'][':app_id'].$post(args, options),
  )
}

export async function getApiV1App(
  args: InferRequestType<typeof client.api.v1.app.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app.$get(args, options))
}

export async function postApiV1App(
  args: InferRequestType<typeof client.api.v1.app.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app.$post(args, options))
}

export async function getApiV1AppAppId(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].$get(args, options))
}

export async function putApiV1AppAppId(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].$put(args, options))
}

export async function deleteApiV1AppAppId(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].$delete(args, options))
}

export async function patchApiV1AppAppId(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].$patch(args, options))
}

export async function getApiV1AppAppIdEndpoint(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].endpoint.$get(args, options))
}

export async function postApiV1AppAppIdEndpoint(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].endpoint.$post(args, options))
}

export async function getApiV1AppAppIdEndpointEndpointId(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$get(args, options),
  )
}

export async function putApiV1AppAppIdEndpointEndpointId(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$put(args, options),
  )
}

export async function deleteApiV1AppAppIdEndpointEndpointId(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$delete(args, options),
  )
}

export async function patchApiV1AppAppIdEndpointEndpointId(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].$patch(args, options),
  )
}

export async function getApiV1AppAppIdEndpointEndpointIdSecret(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.$get(args, options),
  )
}

export async function postApiV1AppAppIdEndpointEndpointIdSecretRotate(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['secret']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].secret.rotate.$post(args, options),
  )
}

export async function getApiV1AppAppIdEndpointEndpointIdStats(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].stats.$get(args, options),
  )
}

export async function postApiV1AppAppIdEndpointEndpointIdSendExample(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['send-example']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id']['send-example'].$post(args, options),
  )
}

export async function postApiV1AppAppIdEndpointEndpointIdRecover(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['recover']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].recover.$post(args, options),
  )
}

export async function getApiV1AppAppIdEndpointEndpointIdHeaders(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.$get(args, options),
  )
}

export async function putApiV1AppAppIdEndpointEndpointIdHeaders(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.$put(args, options),
  )
}

export async function patchApiV1AppAppIdEndpointEndpointIdHeaders(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['headers']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].headers.$patch(args, options),
  )
}

export async function getApiV1EventType(
  args: InferRequestType<(typeof client.api.v1)['event-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['event-type'].$get(args, options))
}

export async function postApiV1EventType(
  args: InferRequestType<(typeof client.api.v1)['event-type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['event-type'].$post(args, options))
}

export async function getApiV1EventTypeEventTypeName(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['event-type'][':event_type_name'].$get(args, options))
}

export async function putApiV1EventTypeEventTypeName(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['event-type'][':event_type_name'].$put(args, options))
}

export async function deleteApiV1EventTypeEventTypeName(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['event-type'][':event_type_name'].$delete(args, options))
}

export async function patchApiV1EventTypeEventTypeName(
  args: InferRequestType<(typeof client.api.v1)['event-type'][':event_type_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['event-type'][':event_type_name'].$patch(args, options))
}

export async function getApiV1AppAppIdMsg(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].msg.$get(args, options))
}

export async function postApiV1AppAppIdMsg(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].msg.$post(args, options))
}

export async function getApiV1AppAppIdMsgMsgId(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].msg[':msg_id'].$get(args, options))
}

export async function deleteApiV1AppAppIdMsgMsgIdContent(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['content']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].msg[':msg_id'].content.$delete(args, options),
  )
}

export async function postApiV1AppAppIdMsgBulkExpunge(
  args: InferRequestType<(typeof client.api.v1.app)[':app_id']['msg']['bulk-expunge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.app[':app_id'].msg['bulk-expunge'].$post(args, options))
}

export async function getApiV1AppAppIdMsgMsgIdAttemptAttemptId(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].$get(args, options),
  )
}

export async function deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContent(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['attempt'][':attempt_id']['content']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].msg[':msg_id'].attempt[':attempt_id'].content.$delete(
      args,
      options,
    ),
  )
}

export async function getApiV1AppAppIdMsgMsgIdEndpoint(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].msg[':msg_id'].endpoint.$get(args, options),
  )
}

export async function postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResend(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['msg'][':msg_id']['endpoint'][':endpoint_id']['resend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].msg[':msg_id'].endpoint[':endpoint_id'].resend.$post(
      args,
      options,
    ),
  )
}

export async function getApiV1AppAppIdEndpointEndpointIdMsg(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['endpoint'][':endpoint_id']['msg']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].endpoint[':endpoint_id'].msg.$get(args, options),
  )
}

export async function getApiV1AppAppIdAttemptEndpointEndpointId(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['endpoint'][':endpoint_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].attempt.endpoint[':endpoint_id'].$get(args, options),
  )
}

export async function getApiV1AppAppIdAttemptMsgMsgId(
  args: InferRequestType<
    (typeof client.api.v1.app)[':app_id']['attempt']['msg'][':msg_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.app[':app_id'].attempt.msg[':msg_id'].$get(args, options),
  )
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOcsV2PhpAppsAppApiApiV1Log(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['log']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.log.$post(args, options))
}

export async function getOcsV2PhpAppsAppApiApiV1Users(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.users.$get(args, options))
}

export async function putOcsV2PhpAppsAppApiAppsStatusAppId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['apps']['status'][':appId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.apps.status[':appId'].$put(args, options),
  )
}

export async function putOcsV2PhpAppsAppApiExAppStatus(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.app_api['ex-app'].status.$put(args, options))
}

export async function getOcsV2PhpAppsAppApiExAppState(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.app_api['ex-app'].state.$get(args, options))
}

export async function getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsolute(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.info.nextcloud_url.absolute.$get(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1ExAppConfig(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].config.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsAppApiApiV1ExAppConfig(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].config.$delete(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1ExAppConfigGetValues(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['get-values']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].config['get-values'].$post(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1ExAppPreference(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].preference.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsAppApiApiV1ExAppPreference(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].preference.$delete(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValues(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['get-values']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].preference['get-values'].$post(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1Notification(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['notification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.notification.$post(args, options),
  )
}

export async function getOcsV2PhpAppsAppApiApiV1OccCommand(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.occ_command.$get(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1OccCommand(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.occ_command.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsAppApiApiV1OccCommand(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.occ_command.$delete(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1TalkBot(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.talk_bot.$post(args, options))
}

export async function deleteOcsV2PhpAppsAppApiApiV1TalkBot(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.talk_bot.$delete(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRoute(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_proxy'][':appId'][':route']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.talk_proxy[':appId'][':route'].$post(args, options),
  )
}

export async function getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenu(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui['files-actions-menu'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1UiFilesActionsMenu(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui['files-actions-menu'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenu(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui['files-actions-menu'].$delete(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV2UiFilesActionsMenu(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v2']['ui']['files-actions-menu']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v2.ui['files-actions-menu'].$post(args, options),
  )
}

export async function getOcsV2PhpAppsAppApiApiV1UiTopMenu(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui['top-menu'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1UiTopMenu(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui['top-menu'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsAppApiApiV1UiTopMenu(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui['top-menu'].$delete(args, options),
  )
}

export async function getOcsV2PhpAppsAppApiApiV1UiInitialState(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui['initial-state'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1UiInitialState(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui['initial-state'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsAppApiApiV1UiInitialState(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui['initial-state'].$delete(args, options),
  )
}

export async function getOcsV2PhpAppsAppApiApiV1UiScript(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.ui.script.$get(args, options))
}

export async function postOcsV2PhpAppsAppApiApiV1UiScript(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui.script.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsAppApiApiV1UiScript(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui.script.$delete(args, options),
  )
}

export async function getOcsV2PhpAppsAppApiApiV1UiStyle(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.ui.style.$get(args, options))
}

export async function postOcsV2PhpAppsAppApiApiV1UiStyle(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.ui.style.$post(args, options))
}

export async function deleteOcsV2PhpAppsAppApiApiV1UiStyle(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui.style.$delete(args, options),
  )
}

export async function getOcsV2PhpAppsAppApiApiV1UiSettings(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui.settings.$get(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1UiSettings(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui.settings.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsAppApiApiV1UiSettings(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ui.settings.$delete(args, options),
  )
}

export async function getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessing(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ai_provider.task_processing.$get(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessing(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ai_provider.task_processing.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessing(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.ai_provider.task_processing.$delete(args, options),
  )
}

export async function postOcsV2PhpAppsAppApiApiV1SetupCheck(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.setup_check.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsAppApiApiV1SetupCheck(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.app_api.api.v1.setup_check.$delete(args, options),
  )
}

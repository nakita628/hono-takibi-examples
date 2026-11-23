import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getKGuestGuestSpaceIdV1AppJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['app.json'].$get(args, options))
}

export async function getKGuestGuestSpaceIdV1AppAclJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1.app['acl.json'].$get(args, options))
}

export async function putKGuestGuestSpaceIdV1AppAclJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['app']['acl.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1.app['acl.json'].$put(args, options))
}

export async function getKGuestGuestSpaceIdV1AppActionsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['actions.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app['actions.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1AppAdminNotesJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['adminNotes.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app['adminNotes.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1AppCustomizeJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['customize.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app['customize.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1AppFormFieldsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['fields.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app.form['fields.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1AppFormLayoutJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['form']['layout.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app.form['layout.json'].$get(args, options),
  )
}

export async function postKGuestGuestSpaceIdV1AppMoveJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['move.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app['move.json'].$post(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1AppNotificationsGeneralJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['general.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app.notifications['general.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1AppNotificationsPerRecordJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['perRecord.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app.notifications['perRecord.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1AppNotificationsReminderJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['notifications']['reminder.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app.notifications['reminder.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1AppPluginsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['plugins.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app['plugins.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1AppReportsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['reports.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app['reports.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1AppSettingsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['settings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app['settings.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1AppStatusJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['status.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app['status.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1AppViewsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['app']['views.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.app['views.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1AppsJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['apps.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['apps.json'].$get(args, options))
}

export async function getKGuestGuestSpaceIdV1AppsStatisticsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['apps']['statistics.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.apps['statistics.json'].$get(args, options),
  )
}

export async function postKGuestGuestSpaceIdV1BulkRequestJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['bulkRequest.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1['bulkRequest.json'].$post(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1FieldAclJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.field['acl.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1FieldAclJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['field']['acl.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.field['acl.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1FileJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['file.json'].$get(args, options))
}

export async function postKGuestGuestSpaceIdV1FileJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['file.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['file.json'].$post(args, options))
}

export async function getKGuestGuestSpaceIdV1FormJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['form.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['form.json'].$get(args, options))
}

export async function postKGuestGuestSpaceIdV1GuestsJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['guests.json'].$post(args, options))
}

export async function deleteKGuestGuestSpaceIdV1GuestsJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['guests.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1['guests.json'].$delete(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1PluginJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['plugin.json'].$put(args, options))
}

export async function postKGuestGuestSpaceIdV1PluginJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['plugin.json'].$post(args, options))
}

export async function deleteKGuestGuestSpaceIdV1PluginJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugin.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1['plugin.json'].$delete(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PluginAppsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugin']['apps.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.plugin['apps.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PluginsJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['plugins.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['plugins.json'].$get(args, options))
}

export async function getKGuestGuestSpaceIdV1PluginsRequiredJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['plugins']['required.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.plugins['required.json'].$get(args, options),
  )
}

export async function postKGuestGuestSpaceIdV1PreviewAppJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview['app.json'].$post(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppAclJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['acl.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewAppAclJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['acl.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['acl.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppActionsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['actions.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewAppActionsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['actions.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['actions.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppAdminNotesJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['adminNotes.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewAppAdminNotesJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['adminNotes.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['adminNotes.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppCustomizeJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['customize.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewAppCustomizeJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['customize.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['customize.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppDeployJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['deploy.json'].$get(args, options),
  )
}

export async function postKGuestGuestSpaceIdV1PreviewAppDeployJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['deploy.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['deploy.json'].$post(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppFormFieldsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewAppFormFieldsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$put(args, options),
  )
}

export async function postKGuestGuestSpaceIdV1PreviewAppFormFieldsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$post(args, options),
  )
}

export async function deleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['fields.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app.form['fields.json'].$delete(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppFormLayoutJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app.form['layout.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewAppFormLayoutJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['form']['layout.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app.form['layout.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app.notifications['general.json'].$get(
      args,
      options,
    ),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['general.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app.notifications['general.json'].$put(
      args,
      options,
    ),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app.notifications['perRecord.json'].$get(
      args,
      options,
    ),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['perRecord.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app.notifications['perRecord.json'].$put(
      args,
      options,
    ),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app.notifications['reminder.json'].$get(
      args,
      options,
    ),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['notifications']['reminder.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app.notifications['reminder.json'].$put(
      args,
      options,
    ),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppPluginsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['plugins.json'].$get(args, options),
  )
}

export async function postKGuestGuestSpaceIdV1PreviewAppPluginsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['plugins.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['plugins.json'].$post(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppReportsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['reports.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewAppReportsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['reports.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['reports.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppSettingsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['settings.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewAppSettingsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['settings.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['settings.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppStatusJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['status.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewAppStatusJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['status.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['status.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewAppViewsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['views.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewAppViewsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['app']['views.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.app['views.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewFieldAclJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.field['acl.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewFieldAclJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['field']['acl.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.field['acl.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewFormJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['form.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview['form.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1PreviewRecordAclJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.record['acl.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1PreviewRecordAclJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['preview']['record']['acl.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.preview.record['acl.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1RecordJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['record.json'].$get(args, options))
}

export async function putKGuestGuestSpaceIdV1RecordJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['record.json'].$put(args, options))
}

export async function postKGuestGuestSpaceIdV1RecordJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['record.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['record.json'].$post(args, options))
}

export async function getKGuestGuestSpaceIdV1RecordAclJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.record['acl.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1RecordAclJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['acl.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.record['acl.json'].$put(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1RecordAssigneesJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['assignees.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.record['assignees.json'].$put(args, options),
  )
}

export async function postKGuestGuestSpaceIdV1RecordCommentJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.record['comment.json'].$post(args, options),
  )
}

export async function deleteKGuestGuestSpaceIdV1RecordCommentJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comment.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.record['comment.json'].$delete(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1RecordCommentsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['comments.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.record['comments.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1RecordStatusJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['record']['status.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.record['status.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1RecordsJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['records.json'].$get(args, options))
}

export async function putKGuestGuestSpaceIdV1RecordsJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['records.json'].$put(args, options))
}

export async function postKGuestGuestSpaceIdV1RecordsJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1['records.json'].$post(args, options),
  )
}

export async function deleteKGuestGuestSpaceIdV1RecordsJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['records.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1['records.json'].$delete(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1RecordsAclEvaluateJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['acl']['evaluate.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.records.acl['evaluate.json'].$get(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1RecordsCursorJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.records['cursor.json'].$get(args, options),
  )
}

export async function postKGuestGuestSpaceIdV1RecordsCursorJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.records['cursor.json'].$post(args, options),
  )
}

export async function deleteKGuestGuestSpaceIdV1RecordsCursorJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['cursor.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.records['cursor.json'].$delete(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1RecordsStatusJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['records']['status.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.records['status.json'].$put(args, options),
  )
}

export async function postKGuestGuestSpaceIdV1SearchJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['search.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['search.json'].$post(args, options))
}

export async function getKGuestGuestSpaceIdV1SpaceJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['space.json'].$get(args, options))
}

export async function putKGuestGuestSpaceIdV1SpaceJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest[':guestSpaceId'].v1['space.json'].$put(args, options))
}

export async function deleteKGuestGuestSpaceIdV1SpaceJson(
  args: InferRequestType<(typeof client.k.guest)[':guestSpaceId']['v1']['space.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1['space.json'].$delete(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1SpaceBodyJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['body.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.space['body.json'].$put(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1SpaceGuestsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['guests.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.space['guests.json'].$put(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1SpaceMembersJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.space['members.json'].$get(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1SpaceMembersJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['members.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.space['members.json'].$put(args, options),
  )
}

export async function putKGuestGuestSpaceIdV1SpaceThreadJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.space['thread.json'].$put(args, options),
  )
}

export async function postKGuestGuestSpaceIdV1SpaceThreadJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.space['thread.json'].$post(args, options),
  )
}

export async function postKGuestGuestSpaceIdV1SpaceThreadCommentJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['space']['thread']['comment.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.space.thread['comment.json'].$post(args, options),
  )
}

export async function getKGuestGuestSpaceIdV1SpacesStatisticsJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['spaces']['statistics.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.spaces['statistics.json'].$get(args, options),
  )
}

export async function postKGuestGuestSpaceIdV1TemplateSpaceJson(
  args: InferRequestType<
    (typeof client.k.guest)[':guestSpaceId']['v1']['template']['space.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.guest[':guestSpaceId'].v1.template['space.json'].$post(args, options),
  )
}

export async function postKGuestV1SearchJson(
  args: InferRequestType<(typeof client.k.guest.v1)['search.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.guest.v1['search.json'].$post(args, options))
}

export async function getKV1AppJson(
  args: InferRequestType<(typeof client.k.v1)['app.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['app.json'].$get(args, options))
}

export async function getKV1AppAclJson(
  args: InferRequestType<(typeof client.k.v1.app)['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app['acl.json'].$get(args, options))
}

export async function putKV1AppAclJson(
  args: InferRequestType<(typeof client.k.v1.app)['acl.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app['acl.json'].$put(args, options))
}

export async function getKV1AppActionsJson(
  args: InferRequestType<(typeof client.k.v1.app)['actions.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app['actions.json'].$get(args, options))
}

export async function getKV1AppAdminNotesJson(
  args: InferRequestType<(typeof client.k.v1.app)['adminNotes.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app['adminNotes.json'].$get(args, options))
}

export async function getKV1AppCustomizeJson(
  args: InferRequestType<(typeof client.k.v1.app)['customize.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app['customize.json'].$get(args, options))
}

export async function getKV1AppFormFieldsJson(
  args: InferRequestType<(typeof client.k.v1.app.form)['fields.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app.form['fields.json'].$get(args, options))
}

export async function getKV1AppFormLayoutJson(
  args: InferRequestType<(typeof client.k.v1.app.form)['layout.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app.form['layout.json'].$get(args, options))
}

export async function postKV1AppMoveJson(
  args: InferRequestType<(typeof client.k.v1.app)['move.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app['move.json'].$post(args, options))
}

export async function getKV1AppNotificationsGeneralJson(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['general.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app.notifications['general.json'].$get(args, options))
}

export async function getKV1AppNotificationsPerRecordJson(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['perRecord.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app.notifications['perRecord.json'].$get(args, options))
}

export async function getKV1AppNotificationsReminderJson(
  args: InferRequestType<(typeof client.k.v1.app.notifications)['reminder.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app.notifications['reminder.json'].$get(args, options))
}

export async function getKV1AppPluginsJson(
  args: InferRequestType<(typeof client.k.v1.app)['plugins.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app['plugins.json'].$get(args, options))
}

export async function getKV1AppReportsJson(
  args: InferRequestType<(typeof client.k.v1.app)['reports.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app['reports.json'].$get(args, options))
}

export async function getKV1AppSettingsJson(
  args: InferRequestType<(typeof client.k.v1.app)['settings.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app['settings.json'].$get(args, options))
}

export async function getKV1AppStatusJson(
  args: InferRequestType<(typeof client.k.v1.app)['status.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app['status.json'].$get(args, options))
}

export async function getKV1AppViewsJson(
  args: InferRequestType<(typeof client.k.v1.app)['views.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.app['views.json'].$get(args, options))
}

export async function getKV1AppsJson(
  args: InferRequestType<(typeof client.k.v1)['apps.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['apps.json'].$get(args, options))
}

export async function getKV1AppsStatisticsJson(
  args: InferRequestType<(typeof client.k.v1.apps)['statistics.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.apps['statistics.json'].$get(args, options))
}

export async function postKV1BulkRequestJson(
  args: InferRequestType<(typeof client.k.v1)['bulkRequest.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['bulkRequest.json'].$post(args, options))
}

export async function getKV1FieldAclJson(
  args: InferRequestType<(typeof client.k.v1.field)['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.field['acl.json'].$get(args, options))
}

export async function putKV1FieldAclJson(
  args: InferRequestType<(typeof client.k.v1.field)['acl.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.field['acl.json'].$put(args, options))
}

export async function getKV1FileJson(
  args: InferRequestType<(typeof client.k.v1)['file.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['file.json'].$get(args, options))
}

export async function postKV1FileJson(
  args: InferRequestType<(typeof client.k.v1)['file.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['file.json'].$post(args, options))
}

export async function getKV1FormJson(
  args: InferRequestType<(typeof client.k.v1)['form.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['form.json'].$get(args, options))
}

export async function postKV1GuestsJson(
  args: InferRequestType<(typeof client.k.v1)['guests.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['guests.json'].$post(args, options))
}

export async function deleteKV1GuestsJson(
  args: InferRequestType<(typeof client.k.v1)['guests.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['guests.json'].$delete(args, options))
}

export async function putKV1PluginJson(
  args: InferRequestType<(typeof client.k.v1)['plugin.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['plugin.json'].$put(args, options))
}

export async function postKV1PluginJson(
  args: InferRequestType<(typeof client.k.v1)['plugin.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['plugin.json'].$post(args, options))
}

export async function deleteKV1PluginJson(
  args: InferRequestType<(typeof client.k.v1)['plugin.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['plugin.json'].$delete(args, options))
}

export async function getKV1PluginAppsJson(
  args: InferRequestType<(typeof client.k.v1.plugin)['apps.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.plugin['apps.json'].$get(args, options))
}

export async function getKV1PluginsJson(
  args: InferRequestType<(typeof client.k.v1)['plugins.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['plugins.json'].$get(args, options))
}

export async function getKV1PluginsRequiredJson(
  args: InferRequestType<(typeof client.k.v1.plugins)['required.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.plugins['required.json'].$get(args, options))
}

export async function postKV1PreviewAppJson(
  args: InferRequestType<(typeof client.k.v1.preview)['app.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview['app.json'].$post(args, options))
}

export async function getKV1PreviewAppAclJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['acl.json'].$get(args, options))
}

export async function putKV1PreviewAppAclJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['acl.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['acl.json'].$put(args, options))
}

export async function getKV1PreviewAppActionsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['actions.json'].$get(args, options))
}

export async function putKV1PreviewAppActionsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['actions.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['actions.json'].$put(args, options))
}

export async function getKV1PreviewAppAdminNotesJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['adminNotes.json'].$get(args, options))
}

export async function putKV1PreviewAppAdminNotesJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['adminNotes.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['adminNotes.json'].$put(args, options))
}

export async function getKV1PreviewAppCustomizeJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['customize.json'].$get(args, options))
}

export async function putKV1PreviewAppCustomizeJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['customize.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['customize.json'].$put(args, options))
}

export async function getKV1PreviewAppDeployJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['deploy.json'].$get(args, options))
}

export async function postKV1PreviewAppDeployJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['deploy.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['deploy.json'].$post(args, options))
}

export async function getKV1PreviewAppFormFieldsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app.form['fields.json'].$get(args, options))
}

export async function putKV1PreviewAppFormFieldsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app.form['fields.json'].$put(args, options))
}

export async function postKV1PreviewAppFormFieldsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app.form['fields.json'].$post(args, options))
}

export async function deleteKV1PreviewAppFormFieldsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['fields.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app.form['fields.json'].$delete(args, options))
}

export async function getKV1PreviewAppFormLayoutJson(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app.form['layout.json'].$get(args, options))
}

export async function putKV1PreviewAppFormLayoutJson(
  args: InferRequestType<(typeof client.k.v1.preview.app.form)['layout.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app.form['layout.json'].$put(args, options))
}

export async function getKV1PreviewAppNotificationsGeneralJson(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.v1.preview.app.notifications['general.json'].$get(args, options),
  )
}

export async function putKV1PreviewAppNotificationsGeneralJson(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['general.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.v1.preview.app.notifications['general.json'].$put(args, options),
  )
}

export async function getKV1PreviewAppNotificationsPerRecordJson(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.v1.preview.app.notifications['perRecord.json'].$get(args, options),
  )
}

export async function putKV1PreviewAppNotificationsPerRecordJson(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['perRecord.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.v1.preview.app.notifications['perRecord.json'].$put(args, options),
  )
}

export async function getKV1PreviewAppNotificationsReminderJson(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.v1.preview.app.notifications['reminder.json'].$get(args, options),
  )
}

export async function putKV1PreviewAppNotificationsReminderJson(
  args: InferRequestType<(typeof client.k.v1.preview.app.notifications)['reminder.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.k.v1.preview.app.notifications['reminder.json'].$put(args, options),
  )
}

export async function getKV1PreviewAppPluginsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['plugins.json'].$get(args, options))
}

export async function postKV1PreviewAppPluginsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['plugins.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['plugins.json'].$post(args, options))
}

export async function getKV1PreviewAppReportsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['reports.json'].$get(args, options))
}

export async function putKV1PreviewAppReportsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['reports.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['reports.json'].$put(args, options))
}

export async function getKV1PreviewAppSettingsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['settings.json'].$get(args, options))
}

export async function putKV1PreviewAppSettingsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['settings.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['settings.json'].$put(args, options))
}

export async function getKV1PreviewAppStatusJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['status.json'].$get(args, options))
}

export async function putKV1PreviewAppStatusJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['status.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['status.json'].$put(args, options))
}

export async function getKV1PreviewAppViewsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['views.json'].$get(args, options))
}

export async function putKV1PreviewAppViewsJson(
  args: InferRequestType<(typeof client.k.v1.preview.app)['views.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.app['views.json'].$put(args, options))
}

export async function getKV1PreviewFieldAclJson(
  args: InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.field['acl.json'].$get(args, options))
}

export async function putKV1PreviewFieldAclJson(
  args: InferRequestType<(typeof client.k.v1.preview.field)['acl.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.field['acl.json'].$put(args, options))
}

export async function getKV1PreviewFormJson(
  args: InferRequestType<(typeof client.k.v1.preview)['form.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview['form.json'].$get(args, options))
}

export async function getKV1PreviewRecordAclJson(
  args: InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.record['acl.json'].$get(args, options))
}

export async function putKV1PreviewRecordAclJson(
  args: InferRequestType<(typeof client.k.v1.preview.record)['acl.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.preview.record['acl.json'].$put(args, options))
}

export async function getKV1RecordJson(
  args: InferRequestType<(typeof client.k.v1)['record.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['record.json'].$get(args, options))
}

export async function putKV1RecordJson(
  args: InferRequestType<(typeof client.k.v1)['record.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['record.json'].$put(args, options))
}

export async function postKV1RecordJson(
  args: InferRequestType<(typeof client.k.v1)['record.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['record.json'].$post(args, options))
}

export async function getKV1RecordAclJson(
  args: InferRequestType<(typeof client.k.v1.record)['acl.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.record['acl.json'].$get(args, options))
}

export async function putKV1RecordAclJson(
  args: InferRequestType<(typeof client.k.v1.record)['acl.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.record['acl.json'].$put(args, options))
}

export async function putKV1RecordAssigneesJson(
  args: InferRequestType<(typeof client.k.v1.record)['assignees.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.record['assignees.json'].$put(args, options))
}

export async function postKV1RecordAsyncTokenJson(
  args: InferRequestType<(typeof client.k.v1.record.async)['token.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.record.async['token.json'].$post(args, options))
}

export async function postKV1RecordCommentJson(
  args: InferRequestType<(typeof client.k.v1.record)['comment.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.record['comment.json'].$post(args, options))
}

export async function deleteKV1RecordCommentJson(
  args: InferRequestType<(typeof client.k.v1.record)['comment.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.record['comment.json'].$delete(args, options))
}

export async function getKV1RecordCommentsJson(
  args: InferRequestType<(typeof client.k.v1.record)['comments.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.record['comments.json'].$get(args, options))
}

export async function putKV1RecordStatusJson(
  args: InferRequestType<(typeof client.k.v1.record)['status.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.record['status.json'].$put(args, options))
}

export async function getKV1RecordsJson(
  args: InferRequestType<(typeof client.k.v1)['records.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['records.json'].$get(args, options))
}

export async function putKV1RecordsJson(
  args: InferRequestType<(typeof client.k.v1)['records.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['records.json'].$put(args, options))
}

export async function postKV1RecordsJson(
  args: InferRequestType<(typeof client.k.v1)['records.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['records.json'].$post(args, options))
}

export async function deleteKV1RecordsJson(
  args: InferRequestType<(typeof client.k.v1)['records.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['records.json'].$delete(args, options))
}

export async function getKV1RecordsAclEvaluateJson(
  args: InferRequestType<(typeof client.k.v1.records.acl)['evaluate.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.records.acl['evaluate.json'].$get(args, options))
}

export async function getKV1RecordsCursorJson(
  args: InferRequestType<(typeof client.k.v1.records)['cursor.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.records['cursor.json'].$get(args, options))
}

export async function postKV1RecordsCursorJson(
  args: InferRequestType<(typeof client.k.v1.records)['cursor.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.records['cursor.json'].$post(args, options))
}

export async function deleteKV1RecordsCursorJson(
  args: InferRequestType<(typeof client.k.v1.records)['cursor.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.records['cursor.json'].$delete(args, options))
}

export async function putKV1RecordsStatusJson(
  args: InferRequestType<(typeof client.k.v1.records)['status.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.records['status.json'].$put(args, options))
}

export async function postKV1SearchJson(
  args: InferRequestType<(typeof client.k.v1)['search.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['search.json'].$post(args, options))
}

export async function getKV1SpaceJson(
  args: InferRequestType<(typeof client.k.v1)['space.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['space.json'].$get(args, options))
}

export async function putKV1SpaceJson(
  args: InferRequestType<(typeof client.k.v1)['space.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['space.json'].$put(args, options))
}

export async function deleteKV1SpaceJson(
  args: InferRequestType<(typeof client.k.v1)['space.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1['space.json'].$delete(args, options))
}

export async function putKV1SpaceBodyJson(
  args: InferRequestType<(typeof client.k.v1.space)['body.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.space['body.json'].$put(args, options))
}

export async function getKV1SpaceMembersJson(
  args: InferRequestType<(typeof client.k.v1.space)['members.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.space['members.json'].$get(args, options))
}

export async function putKV1SpaceMembersJson(
  args: InferRequestType<(typeof client.k.v1.space)['members.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.space['members.json'].$put(args, options))
}

export async function putKV1SpaceThreadJson(
  args: InferRequestType<(typeof client.k.v1.space)['thread.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.space['thread.json'].$put(args, options))
}

export async function postKV1SpaceThreadJson(
  args: InferRequestType<(typeof client.k.v1.space)['thread.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.space['thread.json'].$post(args, options))
}

export async function postKV1SpaceThreadCommentJson(
  args: InferRequestType<(typeof client.k.v1.space.thread)['comment.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.space.thread['comment.json'].$post(args, options))
}

export async function getKV1SpacesStatisticsJson(
  args: InferRequestType<(typeof client.k.v1.spaces)['statistics.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.spaces['statistics.json'].$get(args, options))
}

export async function postKV1TemplateSpaceJson(
  args: InferRequestType<(typeof client.k.v1.template)['space.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.k.v1.template['space.json'].$post(args, options))
}

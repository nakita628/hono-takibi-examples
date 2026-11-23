import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postRestApi3AgentsBulkInvokeBatch(
  args: InferRequestType<
    (typeof client.rest.api)['3']['agents']['bulk']['invoke']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].agents.bulk.invoke.batch.$post(args, options))
}

export async function postRestApi3AgentsBulkInvokeUniform(
  args: InferRequestType<
    (typeof client.rest.api)['3']['agents']['bulk']['invoke']['uniform']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].agents.bulk.invoke.uniform.$post(args, options))
}

export async function getRestApi3AnnouncementBanner(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].announcementBanner.$get(undefined, options))
}

export async function putRestApi3AnnouncementBanner(
  args: InferRequestType<(typeof client.rest.api)['3']['announcementBanner']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].announcementBanner.$put(args, options))
}

export async function postRestApi3AppFieldContextConfigurationList(
  args: InferRequestType<
    (typeof client.rest.api)['3']['app']['field']['context']['configuration']['list']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].app.field.context.configuration.list.$post(args, options),
  )
}

export async function postRestApi3AppFieldValue(
  args: InferRequestType<(typeof client.rest.api)['3']['app']['field']['value']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].app.field.value.$post(args, options))
}

export async function getRestApi3AppFieldFieldIdOrKeyContextConfiguration(
  args: InferRequestType<
    (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['context']['configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].app.field[':fieldIdOrKey'].context.configuration.$get(args, options),
  )
}

export async function putRestApi3AppFieldFieldIdOrKeyContextConfiguration(
  args: InferRequestType<
    (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['context']['configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].app.field[':fieldIdOrKey'].context.configuration.$put(args, options),
  )
}

export async function putRestApi3AppFieldFieldIdOrKeyValue(
  args: InferRequestType<
    (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].app.field[':fieldIdOrKey'].value.$put(args, options),
  )
}

export async function getRestApi3ApplicationProperties(
  args: InferRequestType<(typeof client.rest.api)['3']['application-properties']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3']['application-properties'].$get(args, options))
}

export async function getRestApi3ApplicationPropertiesAdvancedSettings(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3']['application-properties']['advanced-settings'].$get(undefined, options),
  )
}

export async function putRestApi3ApplicationPropertiesId(
  args: InferRequestType<(typeof client.rest.api)['3']['application-properties'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3']['application-properties'][':id'].$put(args, options),
  )
}

export async function getRestApi3Applicationrole(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].applicationrole.$get(undefined, options))
}

export async function getRestApi3ApplicationroleKey(
  args: InferRequestType<(typeof client.rest.api)['3']['applicationrole'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].applicationrole[':key'].$get(args, options))
}

export async function getRestApi3AttachmentContentId(
  args: InferRequestType<(typeof client.rest.api)['3']['attachment']['content'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].attachment.content[':id'].$get(args, options))
}

export async function getRestApi3AttachmentMeta(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].attachment.meta.$get(undefined, options))
}

export async function getRestApi3AttachmentThumbnailId(
  args: InferRequestType<(typeof client.rest.api)['3']['attachment']['thumbnail'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].attachment.thumbnail[':id'].$get(args, options))
}

export async function getRestApi3AttachmentId(
  args: InferRequestType<(typeof client.rest.api)['3']['attachment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].attachment[':id'].$get(args, options))
}

export async function deleteRestApi3AttachmentId(
  args: InferRequestType<(typeof client.rest.api)['3']['attachment'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].attachment[':id'].$delete(args, options))
}

export async function getRestApi3AttachmentIdExpandHuman(
  args: InferRequestType<
    (typeof client.rest.api)['3']['attachment'][':id']['expand']['human']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].attachment[':id'].expand.human.$get(args, options),
  )
}

export async function getRestApi3AttachmentIdExpandRaw(
  args: InferRequestType<
    (typeof client.rest.api)['3']['attachment'][':id']['expand']['raw']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].attachment[':id'].expand.raw.$get(args, options))
}

export async function getRestApi3AuditingRecord(
  args: InferRequestType<(typeof client.rest.api)['3']['auditing']['record']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].auditing.record.$get(args, options))
}

export async function getRestApi3AvatarTypeSystem(
  args: InferRequestType<(typeof client.rest.api)['3']['avatar'][':type']['system']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].avatar[':type'].system.$get(args, options))
}

export async function postRestApi3BulkIssuesDelete(
  args: InferRequestType<(typeof client.rest.api)['3']['bulk']['issues']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].bulk.issues.delete.$post(args, options))
}

export async function getRestApi3BulkIssuesFields(
  args: InferRequestType<(typeof client.rest.api)['3']['bulk']['issues']['fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].bulk.issues.fields.$get(args, options))
}

export async function postRestApi3BulkIssuesFields(
  args: InferRequestType<(typeof client.rest.api)['3']['bulk']['issues']['fields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].bulk.issues.fields.$post(args, options))
}

export async function postRestApi3BulkIssuesMove(
  args: InferRequestType<(typeof client.rest.api)['3']['bulk']['issues']['move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].bulk.issues.move.$post(args, options))
}

export async function getRestApi3BulkIssuesTransition(
  args: InferRequestType<(typeof client.rest.api)['3']['bulk']['issues']['transition']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].bulk.issues.transition.$get(args, options))
}

export async function postRestApi3BulkIssuesTransition(
  args: InferRequestType<(typeof client.rest.api)['3']['bulk']['issues']['transition']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].bulk.issues.transition.$post(args, options))
}

export async function postRestApi3BulkIssuesUnwatch(
  args: InferRequestType<(typeof client.rest.api)['3']['bulk']['issues']['unwatch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].bulk.issues.unwatch.$post(args, options))
}

export async function postRestApi3BulkIssuesWatch(
  args: InferRequestType<(typeof client.rest.api)['3']['bulk']['issues']['watch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].bulk.issues.watch.$post(args, options))
}

export async function getRestApi3BulkQueueTaskId(
  args: InferRequestType<(typeof client.rest.api)['3']['bulk']['queue'][':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].bulk.queue[':taskId'].$get(args, options))
}

export async function postRestApi3ChangelogBulkfetch(
  args: InferRequestType<(typeof client.rest.api)['3']['changelog']['bulkfetch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].changelog.bulkfetch.$post(args, options))
}

export async function getRestApi3ClassificationLevels(
  args: InferRequestType<(typeof client.rest.api)['3']['classification-levels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3']['classification-levels'].$get(args, options))
}

export async function postRestApi3CommentList(
  args: InferRequestType<(typeof client.rest.api)['3']['comment']['list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].comment.list.$post(args, options))
}

export async function getRestApi3CommentCommentIdProperties(
  args: InferRequestType<
    (typeof client.rest.api)['3']['comment'][':commentId']['properties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].comment[':commentId'].properties.$get(args, options),
  )
}

export async function getRestApi3CommentCommentIdPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].comment[':commentId'].properties[':propertyKey'].$get(args, options),
  )
}

export async function putRestApi3CommentCommentIdPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].comment[':commentId'].properties[':propertyKey'].$put(args, options),
  )
}

export async function deleteRestApi3CommentCommentIdPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].comment[':commentId'].properties[':propertyKey'].$delete(args, options),
  )
}

export async function getRestApi3Component(
  args: InferRequestType<(typeof client.rest.api)['3']['component']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].component.$get(args, options))
}

export async function postRestApi3Component(
  args: InferRequestType<(typeof client.rest.api)['3']['component']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].component.$post(args, options))
}

export async function getRestApi3ComponentId(
  args: InferRequestType<(typeof client.rest.api)['3']['component'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].component[':id'].$get(args, options))
}

export async function putRestApi3ComponentId(
  args: InferRequestType<(typeof client.rest.api)['3']['component'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].component[':id'].$put(args, options))
}

export async function deleteRestApi3ComponentId(
  args: InferRequestType<(typeof client.rest.api)['3']['component'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].component[':id'].$delete(args, options))
}

export async function getRestApi3ComponentIdRelatedIssueCounts(
  args: InferRequestType<
    (typeof client.rest.api)['3']['component'][':id']['relatedIssueCounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].component[':id'].relatedIssueCounts.$get(args, options),
  )
}

export async function getRestApi3ConfigFieldschemes(
  args: InferRequestType<(typeof client.rest.api)['3']['config']['fieldschemes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].config.fieldschemes.$get(args, options))
}

export async function postRestApi3ConfigFieldschemes(
  args: InferRequestType<(typeof client.rest.api)['3']['config']['fieldschemes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].config.fieldschemes.$post(args, options))
}

export async function putRestApi3ConfigFieldschemesFields(
  args: InferRequestType<(typeof client.rest.api)['3']['config']['fieldschemes']['fields']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].config.fieldschemes.fields.$put(args, options))
}

export async function deleteRestApi3ConfigFieldschemesFields(
  args: InferRequestType<
    (typeof client.rest.api)['3']['config']['fieldschemes']['fields']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].config.fieldschemes.fields.$delete(args, options))
}

export async function putRestApi3ConfigFieldschemesFieldsParameters(
  args: InferRequestType<
    (typeof client.rest.api)['3']['config']['fieldschemes']['fields']['parameters']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].config.fieldschemes.fields.parameters.$put(args, options),
  )
}

export async function deleteRestApi3ConfigFieldschemesFieldsParameters(
  args: InferRequestType<
    (typeof client.rest.api)['3']['config']['fieldschemes']['fields']['parameters']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].config.fieldschemes.fields.parameters.$delete(args, options),
  )
}

export async function getRestApi3ConfigFieldschemesProjects(
  args: InferRequestType<
    (typeof client.rest.api)['3']['config']['fieldschemes']['projects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].config.fieldschemes.projects.$get(args, options))
}

export async function putRestApi3ConfigFieldschemesProjects(
  args: InferRequestType<
    (typeof client.rest.api)['3']['config']['fieldschemes']['projects']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].config.fieldschemes.projects.$put(args, options))
}

export async function getRestApi3ConfigFieldschemesId(
  args: InferRequestType<(typeof client.rest.api)['3']['config']['fieldschemes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].config.fieldschemes[':id'].$get(args, options))
}

export async function putRestApi3ConfigFieldschemesId(
  args: InferRequestType<(typeof client.rest.api)['3']['config']['fieldschemes'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].config.fieldschemes[':id'].$put(args, options))
}

export async function deleteRestApi3ConfigFieldschemesId(
  args: InferRequestType<(typeof client.rest.api)['3']['config']['fieldschemes'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].config.fieldschemes[':id'].$delete(args, options))
}

export async function postRestApi3ConfigFieldschemesIdClone(
  args: InferRequestType<
    (typeof client.rest.api)['3']['config']['fieldschemes'][':id']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].config.fieldschemes[':id'].clone.$post(args, options),
  )
}

export async function getRestApi3ConfigFieldschemesIdFields(
  args: InferRequestType<
    (typeof client.rest.api)['3']['config']['fieldschemes'][':id']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].config.fieldschemes[':id'].fields.$get(args, options),
  )
}

export async function getRestApi3ConfigFieldschemesIdFieldsFieldIdParameters(
  args: InferRequestType<
    (typeof client.rest.api)['3']['config']['fieldschemes'][':id']['fields'][':fieldId']['parameters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].config.fieldschemes[':id'].fields[':fieldId'].parameters.$get(
      args,
      options,
    ),
  )
}

export async function getRestApi3ConfigFieldschemesIdProjects(
  args: InferRequestType<
    (typeof client.rest.api)['3']['config']['fieldschemes'][':id']['projects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].config.fieldschemes[':id'].projects.$get(args, options),
  )
}

export async function getRestApi3Configuration(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].configuration.$get(undefined, options))
}

export async function getRestApi3ConfigurationTimetracking(options?: ClientRequestOptions) {
  return await parseResponse(
    client.rest.api['3'].configuration.timetracking.$get(undefined, options),
  )
}

export async function putRestApi3ConfigurationTimetracking(
  args: InferRequestType<(typeof client.rest.api)['3']['configuration']['timetracking']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].configuration.timetracking.$put(args, options))
}

export async function getRestApi3ConfigurationTimetrackingList(options?: ClientRequestOptions) {
  return await parseResponse(
    client.rest.api['3'].configuration.timetracking.list.$get(undefined, options),
  )
}

export async function getRestApi3ConfigurationTimetrackingOptions(options?: ClientRequestOptions) {
  return await parseResponse(
    client.rest.api['3'].configuration.timetracking.options.$get(undefined, options),
  )
}

export async function putRestApi3ConfigurationTimetrackingOptions(
  args: InferRequestType<
    (typeof client.rest.api)['3']['configuration']['timetracking']['options']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].configuration.timetracking.options.$put(args, options),
  )
}

export async function getRestApi3CustomFieldOptionId(
  args: InferRequestType<(typeof client.rest.api)['3']['customFieldOption'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].customFieldOption[':id'].$get(args, options))
}

export async function getRestApi3Dashboard(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].dashboard.$get(args, options))
}

export async function postRestApi3Dashboard(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].dashboard.$post(args, options))
}

export async function putRestApi3DashboardBulkEdit(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard']['bulk']['edit']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].dashboard.bulk.edit.$put(args, options))
}

export async function getRestApi3DashboardGadgets(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].dashboard.gadgets.$get(undefined, options))
}

export async function getRestApi3DashboardSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].dashboard.search.$get(args, options))
}

export async function getRestApi3DashboardDashboardIdGadget(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].dashboard[':dashboardId'].gadget.$get(args, options),
  )
}

export async function postRestApi3DashboardDashboardIdGadget(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].dashboard[':dashboardId'].gadget.$post(args, options),
  )
}

export async function putRestApi3DashboardDashboardIdGadgetGadgetId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget'][':gadgetId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].dashboard[':dashboardId'].gadget[':gadgetId'].$put(args, options),
  )
}

export async function deleteRestApi3DashboardDashboardIdGadgetGadgetId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget'][':gadgetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].dashboard[':dashboardId'].gadget[':gadgetId'].$delete(args, options),
  )
}

export async function getRestApi3DashboardDashboardIdItemsItemIdProperties(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].dashboard[':dashboardId'].items[':itemId'].properties.$get(args, options),
  )
}

export async function getRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].dashboard[':dashboardId'].items[':itemId'].properties[':propertyKey'].$get(
      args,
      options,
    ),
  )
}

export async function putRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].dashboard[':dashboardId'].items[':itemId'].properties[':propertyKey'].$put(
      args,
      options,
    ),
  )
}

export async function deleteRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].dashboard[':dashboardId'].items[':itemId'].properties[
      ':propertyKey'
    ].$delete(args, options),
  )
}

export async function getRestApi3DashboardId(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].dashboard[':id'].$get(args, options))
}

export async function putRestApi3DashboardId(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].dashboard[':id'].$put(args, options))
}

export async function deleteRestApi3DashboardId(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].dashboard[':id'].$delete(args, options))
}

export async function postRestApi3DashboardIdCopy(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard'][':id']['copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].dashboard[':id'].copy.$post(args, options))
}

export async function getRestApi3DataPolicy(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3']['data-policy'].$get(undefined, options))
}

export async function getRestApi3DataPolicyProject(
  args: InferRequestType<(typeof client.rest.api)['3']['data-policy']['project']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3']['data-policy'].project.$get(args, options))
}

export async function getRestApi3Events(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].events.$get(undefined, options))
}

export async function postRestApi3ExpressionAnalyse(
  args: InferRequestType<(typeof client.rest.api)['3']['expression']['analyse']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].expression.analyse.$post(args, options))
}

export async function postRestApi3ExpressionEval(
  args: InferRequestType<(typeof client.rest.api)['3']['expression']['eval']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].expression.eval.$post(args, options))
}

export async function postRestApi3ExpressionEvaluate(
  args: InferRequestType<(typeof client.rest.api)['3']['expression']['evaluate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].expression.evaluate.$post(args, options))
}

export async function getRestApi3Field(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].field.$get(undefined, options))
}

export async function postRestApi3Field(
  args: InferRequestType<(typeof client.rest.api)['3']['field']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field.$post(args, options))
}

export async function putRestApi3FieldAssociation(
  args: InferRequestType<(typeof client.rest.api)['3']['field']['association']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field.association.$put(args, options))
}

export async function deleteRestApi3FieldAssociation(
  args: InferRequestType<(typeof client.rest.api)['3']['field']['association']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field.association.$delete(args, options))
}

export async function getRestApi3FieldSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['field']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field.search.$get(args, options))
}

export async function getRestApi3FieldSearchTrashed(
  args: InferRequestType<(typeof client.rest.api)['3']['field']['search']['trashed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field.search.trashed.$get(args, options))
}

export async function putRestApi3FieldFieldId(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field[':fieldId'].$put(args, options))
}

export async function getRestApi3FieldFieldIdAssociationProject(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['association']['project']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].association.project.$get(args, options),
  )
}

export async function getRestApi3FieldFieldIdContext(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['context']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field[':fieldId'].context.$get(args, options))
}

export async function postRestApi3FieldFieldIdContext(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['context']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field[':fieldId'].context.$post(args, options))
}

export async function getRestApi3FieldFieldIdContextDefaultValue(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context.defaultValue.$get(args, options),
  )
}

export async function putRestApi3FieldFieldIdContextDefaultValue(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValue']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context.defaultValue.$put(args, options),
  )
}

export async function getRestApi3FieldFieldIdContextDefaultValues(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context.defaultValues.$get(args, options),
  )
}

export async function putRestApi3FieldFieldIdContextDefaultValues(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValues']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context.defaultValues.$put(args, options),
  )
}

export async function getRestApi3FieldFieldIdContextIssuetypemapping(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['issuetypemapping']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context.issuetypemapping.$get(args, options),
  )
}

export async function postRestApi3FieldFieldIdContextMapping(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['mapping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context.mapping.$post(args, options),
  )
}

export async function getRestApi3FieldFieldIdContextProjectmapping(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['projectmapping']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context.projectmapping.$get(args, options),
  )
}

export async function putRestApi3FieldFieldIdContextContextId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context[':contextId'].$put(args, options),
  )
}

export async function deleteRestApi3FieldFieldIdContextContextId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context[':contextId'].$delete(args, options),
  )
}

export async function putRestApi3FieldFieldIdContextContextIdIssuetype(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['issuetype']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context[':contextId'].issuetype.$put(args, options),
  )
}

export async function postRestApi3FieldFieldIdContextContextIdIssuetypeRemove(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['issuetype']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context[':contextId'].issuetype.remove.$post(
      args,
      options,
    ),
  )
}

export async function getRestApi3FieldFieldIdContextContextIdOption(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context[':contextId'].option.$get(args, options),
  )
}

export async function putRestApi3FieldFieldIdContextContextIdOption(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context[':contextId'].option.$put(args, options),
  )
}

export async function postRestApi3FieldFieldIdContextContextIdOption(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context[':contextId'].option.$post(args, options),
  )
}

export async function putRestApi3FieldFieldIdContextContextIdOptionMove(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['move']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context[':contextId'].option.move.$put(args, options),
  )
}

export async function deleteRestApi3FieldFieldIdContextContextIdOptionOptionId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option'][':optionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context[':contextId'].option[':optionId'].$delete(
      args,
      options,
    ),
  )
}

export async function deleteRestApi3FieldFieldIdContextContextIdOptionOptionIdIssue(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option'][':optionId']['issue']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context[':contextId'].option[':optionId'].issue.$delete(
      args,
      options,
    ),
  )
}

export async function putRestApi3FieldFieldIdContextContextIdProject(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['project']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context[':contextId'].project.$put(args, options),
  )
}

export async function postRestApi3FieldFieldIdContextContextIdProjectRemove(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['project']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldId'].context[':contextId'].project.remove.$post(
      args,
      options,
    ),
  )
}

export async function getRestApi3FieldFieldIdContexts(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['contexts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field[':fieldId'].contexts.$get(args, options))
}

export async function getRestApi3FieldFieldIdScreens(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['screens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field[':fieldId'].screens.$get(args, options))
}

export async function getRestApi3FieldFieldKeyOption(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldKey']['option']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field[':fieldKey'].option.$get(args, options))
}

export async function postRestApi3FieldFieldKeyOption(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldKey']['option']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field[':fieldKey'].option.$post(args, options))
}

export async function getRestApi3FieldFieldKeyOptionSuggestionsEdit(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['edit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldKey'].option.suggestions.edit.$get(args, options),
  )
}

export async function getRestApi3FieldFieldKeyOptionSuggestionsSearch(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldKey'].option.suggestions.search.$get(args, options),
  )
}

export async function getRestApi3FieldFieldKeyOptionOptionId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldKey'].option[':optionId'].$get(args, options),
  )
}

export async function putRestApi3FieldFieldKeyOptionOptionId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldKey'].option[':optionId'].$put(args, options),
  )
}

export async function deleteRestApi3FieldFieldKeyOptionOptionId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldKey'].option[':optionId'].$delete(args, options),
  )
}

export async function deleteRestApi3FieldFieldKeyOptionOptionIdIssue(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['issue']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].field[':fieldKey'].option[':optionId'].issue.$delete(args, options),
  )
}

export async function deleteRestApi3FieldId(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field[':id'].$delete(args, options))
}

export async function postRestApi3FieldIdRestore(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':id']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field[':id'].restore.$post(args, options))
}

export async function postRestApi3FieldIdTrash(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':id']['trash']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].field[':id'].trash.$post(args, options))
}

export async function getRestApi3Fieldconfiguration(
  args: InferRequestType<(typeof client.rest.api)['3']['fieldconfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].fieldconfiguration.$get(args, options))
}

export async function postRestApi3Fieldconfiguration(
  args: InferRequestType<(typeof client.rest.api)['3']['fieldconfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].fieldconfiguration.$post(args, options))
}

export async function putRestApi3FieldconfigurationId(
  args: InferRequestType<(typeof client.rest.api)['3']['fieldconfiguration'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].fieldconfiguration[':id'].$put(args, options))
}

export async function deleteRestApi3FieldconfigurationId(
  args: InferRequestType<(typeof client.rest.api)['3']['fieldconfiguration'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].fieldconfiguration[':id'].$delete(args, options))
}

export async function getRestApi3FieldconfigurationIdFields(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfiguration'][':id']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].fieldconfiguration[':id'].fields.$get(args, options),
  )
}

export async function putRestApi3FieldconfigurationIdFields(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfiguration'][':id']['fields']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].fieldconfiguration[':id'].fields.$put(args, options),
  )
}

export async function getRestApi3Fieldconfigurationscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['fieldconfigurationscheme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].fieldconfigurationscheme.$get(args, options))
}

export async function postRestApi3Fieldconfigurationscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['fieldconfigurationscheme']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].fieldconfigurationscheme.$post(args, options))
}

export async function getRestApi3FieldconfigurationschemeMapping(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfigurationscheme']['mapping']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].fieldconfigurationscheme.mapping.$get(args, options),
  )
}

export async function getRestApi3FieldconfigurationschemeProject(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfigurationscheme']['project']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].fieldconfigurationscheme.project.$get(args, options),
  )
}

export async function putRestApi3FieldconfigurationschemeProject(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfigurationscheme']['project']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].fieldconfigurationscheme.project.$put(args, options),
  )
}

export async function putRestApi3FieldconfigurationschemeId(
  args: InferRequestType<(typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].fieldconfigurationscheme[':id'].$put(args, options),
  )
}

export async function deleteRestApi3FieldconfigurationschemeId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].fieldconfigurationscheme[':id'].$delete(args, options),
  )
}

export async function putRestApi3FieldconfigurationschemeIdMapping(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['mapping']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].fieldconfigurationscheme[':id'].mapping.$put(args, options),
  )
}

export async function postRestApi3FieldconfigurationschemeIdMappingDelete(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['mapping']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].fieldconfigurationscheme[':id'].mapping.delete.$post(args, options),
  )
}

export async function postRestApi3Filter(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter.$post(args, options))
}

export async function getRestApi3FilterDefaultShareScope(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].filter.defaultShareScope.$get(undefined, options))
}

export async function putRestApi3FilterDefaultShareScope(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['defaultShareScope']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter.defaultShareScope.$put(args, options))
}

export async function getRestApi3FilterFavourite(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['favourite']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter.favourite.$get(args, options))
}

export async function getRestApi3FilterMy(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['my']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter.my.$get(args, options))
}

export async function getRestApi3FilterSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter.search.$get(args, options))
}

export async function getRestApi3FilterId(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter[':id'].$get(args, options))
}

export async function putRestApi3FilterId(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter[':id'].$put(args, options))
}

export async function deleteRestApi3FilterId(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter[':id'].$delete(args, options))
}

export async function getRestApi3FilterIdColumns(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter[':id'].columns.$get(args, options))
}

export async function putRestApi3FilterIdColumns(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter[':id'].columns.$put(args, options))
}

export async function deleteRestApi3FilterIdColumns(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter[':id'].columns.$delete(args, options))
}

export async function putRestApi3FilterIdFavourite(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['favourite']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter[':id'].favourite.$put(args, options))
}

export async function deleteRestApi3FilterIdFavourite(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['favourite']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter[':id'].favourite.$delete(args, options))
}

export async function putRestApi3FilterIdOwner(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['owner']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter[':id'].owner.$put(args, options))
}

export async function getRestApi3FilterIdPermission(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['permission']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter[':id'].permission.$get(args, options))
}

export async function postRestApi3FilterIdPermission(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['permission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].filter[':id'].permission.$post(args, options))
}

export async function getRestApi3FilterIdPermissionPermissionId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['filter'][':id']['permission'][':permissionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].filter[':id'].permission[':permissionId'].$get(args, options),
  )
}

export async function deleteRestApi3FilterIdPermissionPermissionId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['filter'][':id']['permission'][':permissionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].filter[':id'].permission[':permissionId'].$delete(args, options),
  )
}

export async function postRestApi3ForgePanelActionBulkAsync(
  args: InferRequestType<
    (typeof client.rest.api)['3']['forge']['panel']['action']['bulk']['async']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].forge.panel.action.bulk.async.$post(args, options),
  )
}

export async function postRestApi3ForgePanelActionBulkStatus(
  args: InferRequestType<
    (typeof client.rest.api)['3']['forge']['panel']['action']['bulk']['status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].forge.panel.action.bulk.status.$post(args, options),
  )
}

export async function getRestApi3Group(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].group.$get(args, options))
}

export async function postRestApi3Group(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].group.$post(args, options))
}

export async function deleteRestApi3Group(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].group.$delete(args, options))
}

export async function getRestApi3GroupBulk(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['bulk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].group.bulk.$get(args, options))
}

export async function getRestApi3GroupMember(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].group.member.$get(args, options))
}

export async function postRestApi3GroupUser(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].group.user.$post(args, options))
}

export async function deleteRestApi3GroupUser(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['user']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].group.user.$delete(args, options))
}

export async function getRestApi3GroupsPicker(
  args: InferRequestType<(typeof client.rest.api)['3']['groups']['picker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].groups.picker.$get(args, options))
}

export async function getRestApi3Groupuserpicker(
  args: InferRequestType<(typeof client.rest.api)['3']['groupuserpicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].groupuserpicker.$get(args, options))
}

export async function getRestApi3InstanceLicense(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].instance.license.$get(undefined, options))
}

export async function getRestApi3InvalidJqlsAccessLog(
  args: InferRequestType<(typeof client.rest.api)['3']['invalid-jqls-access-log']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3']['invalid-jqls-access-log'].$get(args, options))
}

export async function postRestApi3Issue(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue.$post(args, options))
}

export async function putRestApi3IssueArchive(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['archive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue.archive.$put(args, options))
}

export async function postRestApi3IssueArchive(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue.archive.$post(args, options))
}

export async function postRestApi3IssueBulk(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue.bulk.$post(args, options))
}

export async function postRestApi3IssueBulkfetch(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['bulkfetch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue.bulkfetch.$post(args, options))
}

export async function getRestApi3IssueCreatemeta(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['createmeta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue.createmeta.$get(args, options))
}

export async function getRestApi3IssueCreatemetaProjectIdOrKeyIssuetypes(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue']['createmeta'][':projectIdOrKey']['issuetypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue.createmeta[':projectIdOrKey'].issuetypes.$get(args, options),
  )
}

export async function getRestApi3IssueCreatemetaProjectIdOrKeyIssuetypesIssueTypeId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue']['createmeta'][':projectIdOrKey']['issuetypes'][':issueTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue.createmeta[':projectIdOrKey'].issuetypes[':issueTypeId'].$get(
      args,
      options,
    ),
  )
}

export async function getRestApi3IssueLimitAdfReport(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['limit']['adf']['report']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue.limit.adf.report.$get(args, options))
}

export async function getRestApi3IssueLimitReport(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['limit']['report']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue.limit.report.$get(args, options))
}

export async function getRestApi3IssuePicker(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['picker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue.picker.$get(args, options))
}

export async function postRestApi3IssueProperties(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['properties']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue.properties.$post(args, options))
}

export async function postRestApi3IssuePropertiesMulti(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['properties']['multi']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue.properties.multi.$post(args, options))
}

export async function putRestApi3IssuePropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue']['properties'][':propertyKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue.properties[':propertyKey'].$put(args, options),
  )
}

export async function deleteRestApi3IssuePropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue']['properties'][':propertyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue.properties[':propertyKey'].$delete(args, options),
  )
}

export async function putRestApi3IssueUnarchive(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['unarchive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue.unarchive.$put(args, options))
}

export async function postRestApi3IssueWatching(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['watching']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue.watching.$post(args, options))
}

export async function getRestApi3IssueIssueIdOrKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue[':issueIdOrKey'].$get(args, options))
}

export async function putRestApi3IssueIssueIdOrKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue[':issueIdOrKey'].$put(args, options))
}

export async function deleteRestApi3IssueIssueIdOrKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue[':issueIdOrKey'].$delete(args, options))
}

export async function putRestApi3IssueIssueIdOrKeyAssignee(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['assignee']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].assignee.$put(args, options),
  )
}

export async function postRestApi3IssueIssueIdOrKeyAttachments(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['attachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].attachments.$post(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyChangelog(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['changelog']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].changelog.$get(args, options),
  )
}

export async function postRestApi3IssueIssueIdOrKeyChangelogList(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['changelog']['list']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].changelog.list.$post(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyComment(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].comment.$get(args, options),
  )
}

export async function postRestApi3IssueIssueIdOrKeyComment(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].comment.$post(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyCommentId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].comment[':id'].$get(args, options),
  )
}

export async function putRestApi3IssueIssueIdOrKeyCommentId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].comment[':id'].$put(args, options),
  )
}

export async function deleteRestApi3IssueIssueIdOrKeyCommentId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].comment[':id'].$delete(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyEditmeta(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['editmeta']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].editmeta.$get(args, options),
  )
}

export async function postRestApi3IssueIssueIdOrKeyNotify(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['notify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].notify.$post(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyProperties(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].properties.$get(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].properties[':propertyKey'].$get(args, options),
  )
}

export async function putRestApi3IssueIssueIdOrKeyPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].properties[':propertyKey'].$put(args, options),
  )
}

export async function deleteRestApi3IssueIssueIdOrKeyPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].properties[':propertyKey'].$delete(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyRemotelink(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].remotelink.$get(args, options),
  )
}

export async function postRestApi3IssueIssueIdOrKeyRemotelink(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].remotelink.$post(args, options),
  )
}

export async function deleteRestApi3IssueIssueIdOrKeyRemotelink(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].remotelink.$delete(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyRemotelinkLinkId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].remotelink[':linkId'].$get(args, options),
  )
}

export async function putRestApi3IssueIssueIdOrKeyRemotelinkLinkId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].remotelink[':linkId'].$put(args, options),
  )
}

export async function deleteRestApi3IssueIssueIdOrKeyRemotelinkLinkId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].remotelink[':linkId'].$delete(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyTransitions(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['transitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].transitions.$get(args, options),
  )
}

export async function postRestApi3IssueIssueIdOrKeyTransitions(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['transitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].transitions.$post(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyVotes(
  args: InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue[':issueIdOrKey'].votes.$get(args, options))
}

export async function postRestApi3IssueIssueIdOrKeyVotes(
  args: InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issue[':issueIdOrKey'].votes.$post(args, options))
}

export async function deleteRestApi3IssueIssueIdOrKeyVotes(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].votes.$delete(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyWatchers(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].watchers.$get(args, options),
  )
}

export async function postRestApi3IssueIssueIdOrKeyWatchers(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].watchers.$post(args, options),
  )
}

export async function deleteRestApi3IssueIssueIdOrKeyWatchers(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].watchers.$delete(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyWorklog(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].worklog.$get(args, options),
  )
}

export async function postRestApi3IssueIssueIdOrKeyWorklog(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].worklog.$post(args, options),
  )
}

export async function deleteRestApi3IssueIssueIdOrKeyWorklog(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].worklog.$delete(args, options),
  )
}

export async function postRestApi3IssueIssueIdOrKeyWorklogMove(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].worklog.move.$post(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyWorklogId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].worklog[':id'].$get(args, options),
  )
}

export async function putRestApi3IssueIssueIdOrKeyWorklogId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].worklog[':id'].$put(args, options),
  )
}

export async function deleteRestApi3IssueIssueIdOrKeyWorklogId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].worklog[':id'].$delete(args, options),
  )
}

export async function getRestApi3IssueIssueIdOrKeyWorklogWorklogIdProperties(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].worklog[':worklogId'].properties.$get(
      args,
      options,
    ),
  )
}

export async function getRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].worklog[':worklogId'].properties[
      ':propertyKey'
    ].$get(args, options),
  )
}

export async function putRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].worklog[':worklogId'].properties[
      ':propertyKey'
    ].$put(args, options),
  )
}

export async function deleteRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issue[':issueIdOrKey'].worklog[':worklogId'].properties[
      ':propertyKey'
    ].$delete(args, options),
  )
}

export async function postRestApi3IssueLink(
  args: InferRequestType<(typeof client.rest.api)['3']['issueLink']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issueLink.$post(args, options))
}

export async function getRestApi3IssueLinkLinkId(
  args: InferRequestType<(typeof client.rest.api)['3']['issueLink'][':linkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issueLink[':linkId'].$get(args, options))
}

export async function deleteRestApi3IssueLinkLinkId(
  args: InferRequestType<(typeof client.rest.api)['3']['issueLink'][':linkId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issueLink[':linkId'].$delete(args, options))
}

export async function getRestApi3IssueLinkType(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].issueLinkType.$get(undefined, options))
}

export async function postRestApi3IssueLinkType(
  args: InferRequestType<(typeof client.rest.api)['3']['issueLinkType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issueLinkType.$post(args, options))
}

export async function getRestApi3IssueLinkTypeIssueLinkTypeId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issueLinkType[':issueLinkTypeId'].$get(args, options),
  )
}

export async function putRestApi3IssueLinkTypeIssueLinkTypeId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issueLinkType[':issueLinkTypeId'].$put(args, options),
  )
}

export async function deleteRestApi3IssueLinkTypeIssueLinkTypeId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issueLinkType[':issueLinkTypeId'].$delete(args, options),
  )
}

export async function putRestApi3IssuesArchiveExport(
  args: InferRequestType<(typeof client.rest.api)['3']['issues']['archive']['export']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issues.archive.export.$put(args, options))
}

export async function getRestApi3Issuesecurityschemes(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].issuesecurityschemes.$get(undefined, options))
}

export async function postRestApi3Issuesecurityschemes(
  args: InferRequestType<(typeof client.rest.api)['3']['issuesecurityschemes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuesecurityschemes.$post(args, options))
}

export async function getRestApi3IssuesecurityschemesLevel(
  args: InferRequestType<(typeof client.rest.api)['3']['issuesecurityschemes']['level']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuesecurityschemes.level.$get(args, options))
}

export async function putRestApi3IssuesecurityschemesLevelDefault(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuesecurityschemes']['level']['default']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuesecurityschemes.level.default.$put(args, options),
  )
}

export async function getRestApi3IssuesecurityschemesLevelMember(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuesecurityschemes']['level']['member']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuesecurityschemes.level.member.$get(args, options),
  )
}

export async function getRestApi3IssuesecurityschemesProject(
  args: InferRequestType<(typeof client.rest.api)['3']['issuesecurityschemes']['project']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuesecurityschemes.project.$get(args, options))
}

export async function putRestApi3IssuesecurityschemesProject(
  args: InferRequestType<(typeof client.rest.api)['3']['issuesecurityschemes']['project']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuesecurityschemes.project.$put(args, options))
}

export async function getRestApi3IssuesecurityschemesSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['issuesecurityschemes']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuesecurityschemes.search.$get(args, options))
}

export async function getRestApi3IssuesecurityschemesId(
  args: InferRequestType<(typeof client.rest.api)['3']['issuesecurityschemes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuesecurityschemes[':id'].$get(args, options))
}

export async function putRestApi3IssuesecurityschemesId(
  args: InferRequestType<(typeof client.rest.api)['3']['issuesecurityschemes'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuesecurityschemes[':id'].$put(args, options))
}

export async function getRestApi3IssuesecurityschemesIssueSecuritySchemeIdMembers(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuesecurityschemes'][':issueSecuritySchemeId']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuesecurityschemes[':issueSecuritySchemeId'].members.$get(args, options),
  )
}

export async function deleteRestApi3IssuesecurityschemesSchemeId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuesecurityschemes'][':schemeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuesecurityschemes[':schemeId'].$delete(args, options),
  )
}

export async function putRestApi3IssuesecurityschemesSchemeIdLevel(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuesecurityschemes'][':schemeId']['level']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuesecurityschemes[':schemeId'].level.$put(args, options),
  )
}

export async function putRestApi3IssuesecurityschemesSchemeIdLevelLevelId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuesecurityschemes'][':schemeId']['level'][':levelId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuesecurityschemes[':schemeId'].level[':levelId'].$put(args, options),
  )
}

export async function deleteRestApi3IssuesecurityschemesSchemeIdLevelLevelId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuesecurityschemes'][':schemeId']['level'][':levelId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuesecurityschemes[':schemeId'].level[':levelId'].$delete(args, options),
  )
}

export async function putRestApi3IssuesecurityschemesSchemeIdLevelLevelIdMember(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuesecurityschemes'][':schemeId']['level'][':levelId']['member']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuesecurityschemes[':schemeId'].level[':levelId'].member.$put(
      args,
      options,
    ),
  )
}

export async function deleteRestApi3IssuesecurityschemesSchemeIdLevelLevelIdMemberMemberId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuesecurityschemes'][':schemeId']['level'][':levelId']['member'][':memberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuesecurityschemes[':schemeId'].level[':levelId'].member[
      ':memberId'
    ].$delete(args, options),
  )
}

export async function getRestApi3Issuetype(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].issuetype.$get(undefined, options))
}

export async function postRestApi3Issuetype(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetype.$post(args, options))
}

export async function getRestApi3IssuetypeProject(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype']['project']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetype.project.$get(args, options))
}

export async function getRestApi3IssuetypeId(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetype[':id'].$get(args, options))
}

export async function putRestApi3IssuetypeId(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetype[':id'].$put(args, options))
}

export async function deleteRestApi3IssuetypeId(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetype[':id'].$delete(args, options))
}

export async function getRestApi3IssuetypeIdAlternatives(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['alternatives']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetype[':id'].alternatives.$get(args, options))
}

export async function postRestApi3IssuetypeIdAvatar2(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['avatar2']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetype[':id'].avatar2.$post(args, options))
}

export async function getRestApi3IssuetypeIssueTypeIdProperties(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetype[':issueTypeId'].properties.$get(args, options),
  )
}

export async function getRestApi3IssuetypeIssueTypeIdPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetype[':issueTypeId'].properties[':propertyKey'].$get(args, options),
  )
}

export async function putRestApi3IssuetypeIssueTypeIdPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetype[':issueTypeId'].properties[':propertyKey'].$put(args, options),
  )
}

export async function deleteRestApi3IssuetypeIssueTypeIdPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetype[':issueTypeId'].properties[':propertyKey'].$delete(
      args,
      options,
    ),
  )
}

export async function getRestApi3Issuetypescheme(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetypescheme.$get(args, options))
}

export async function postRestApi3Issuetypescheme(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetypescheme.$post(args, options))
}

export async function getRestApi3IssuetypeschemeMapping(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['mapping']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetypescheme.mapping.$get(args, options))
}

export async function getRestApi3IssuetypeschemeProject(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['project']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetypescheme.project.$get(args, options))
}

export async function putRestApi3IssuetypeschemeProject(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['project']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetypescheme.project.$put(args, options))
}

export async function putRestApi3IssuetypeschemeIssueTypeSchemeId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetypescheme[':issueTypeSchemeId'].$put(args, options),
  )
}

export async function deleteRestApi3IssuetypeschemeIssueTypeSchemeId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetypescheme[':issueTypeSchemeId'].$delete(args, options),
  )
}

export async function putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetype(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['issuetype']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetypescheme[':issueTypeSchemeId'].issuetype.$put(args, options),
  )
}

export async function putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeMove(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['issuetype']['move']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetypescheme[':issueTypeSchemeId'].issuetype.move.$put(args, options),
  )
}

export async function deleteRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeIssueTypeId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['issuetype'][':issueTypeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetypescheme[':issueTypeSchemeId'].issuetype[':issueTypeId'].$delete(
      args,
      options,
    ),
  )
}

export async function getRestApi3Issuetypescreenscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetypescreenscheme.$get(args, options))
}

export async function postRestApi3Issuetypescreenscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetypescreenscheme.$post(args, options))
}

export async function getRestApi3IssuetypescreenschemeMapping(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['mapping']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetypescreenscheme.mapping.$get(args, options))
}

export async function getRestApi3IssuetypescreenschemeProject(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['project']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetypescreenscheme.project.$get(args, options))
}

export async function putRestApi3IssuetypescreenschemeProject(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['project']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].issuetypescreenscheme.project.$put(args, options))
}

export async function putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetypescreenscheme[':issueTypeScreenSchemeId'].$put(args, options),
  )
}

export async function deleteRestApi3IssuetypescreenschemeIssueTypeScreenSchemeId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetypescreenscheme[':issueTypeScreenSchemeId'].$delete(args, options),
  )
}

export async function putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMapping(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['mapping']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetypescreenscheme[':issueTypeScreenSchemeId'].mapping.$put(
      args,
      options,
    ),
  )
}

export async function putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingDefault(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['mapping']['default']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetypescreenscheme[':issueTypeScreenSchemeId'].mapping.default.$put(
      args,
      options,
    ),
  )
}

export async function postRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRemove(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['mapping']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetypescreenscheme[':issueTypeScreenSchemeId'].mapping.remove.$post(
      args,
      options,
    ),
  )
}

export async function getRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdProject(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['project']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].issuetypescreenscheme[':issueTypeScreenSchemeId'].project.$get(
      args,
      options,
    ),
  )
}

export async function getRestApi3JqlAutocompletedata(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].jql.autocompletedata.$get(undefined, options))
}

export async function postRestApi3JqlAutocompletedata(
  args: InferRequestType<(typeof client.rest.api)['3']['jql']['autocompletedata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].jql.autocompletedata.$post(args, options))
}

export async function getRestApi3JqlAutocompletedataSuggestions(
  args: InferRequestType<
    (typeof client.rest.api)['3']['jql']['autocompletedata']['suggestions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].jql.autocompletedata.suggestions.$get(args, options),
  )
}

export async function getRestApi3JqlFunctionComputation(
  args: InferRequestType<(typeof client.rest.api)['3']['jql']['function']['computation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].jql.function.computation.$get(args, options))
}

export async function postRestApi3JqlFunctionComputation(
  args: InferRequestType<(typeof client.rest.api)['3']['jql']['function']['computation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].jql.function.computation.$post(args, options))
}

export async function postRestApi3JqlFunctionComputationSearch(
  args: InferRequestType<
    (typeof client.rest.api)['3']['jql']['function']['computation']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].jql.function.computation.search.$post(args, options),
  )
}

export async function postRestApi3JqlMatch(
  args: InferRequestType<(typeof client.rest.api)['3']['jql']['match']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].jql.match.$post(args, options))
}

export async function postRestApi3JqlParse(
  args: InferRequestType<(typeof client.rest.api)['3']['jql']['parse']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].jql.parse.$post(args, options))
}

export async function postRestApi3JqlPdcleaner(
  args: InferRequestType<(typeof client.rest.api)['3']['jql']['pdcleaner']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].jql.pdcleaner.$post(args, options))
}

export async function postRestApi3JqlSanitize(
  args: InferRequestType<(typeof client.rest.api)['3']['jql']['sanitize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].jql.sanitize.$post(args, options))
}

export async function getRestApi3Label(
  args: InferRequestType<(typeof client.rest.api)['3']['label']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].label.$get(args, options))
}

export async function getRestApi3LicenseApproximateLicenseCount(options?: ClientRequestOptions) {
  return await parseResponse(
    client.rest.api['3'].license.approximateLicenseCount.$get(undefined, options),
  )
}

export async function getRestApi3LicenseApproximateLicenseCountProductApplicationKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['license']['approximateLicenseCount']['product'][':applicationKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].license.approximateLicenseCount.product[':applicationKey'].$get(
      args,
      options,
    ),
  )
}

export async function getRestApi3Mypermissions(
  args: InferRequestType<(typeof client.rest.api)['3']['mypermissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].mypermissions.$get(args, options))
}

export async function getRestApi3Mypreferences(
  args: InferRequestType<(typeof client.rest.api)['3']['mypreferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].mypreferences.$get(args, options))
}

export async function putRestApi3Mypreferences(
  args: InferRequestType<(typeof client.rest.api)['3']['mypreferences']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].mypreferences.$put(args, options))
}

export async function deleteRestApi3Mypreferences(
  args: InferRequestType<(typeof client.rest.api)['3']['mypreferences']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].mypreferences.$delete(args, options))
}

export async function getRestApi3MypreferencesLocale(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].mypreferences.locale.$get(undefined, options))
}

export async function putRestApi3MypreferencesLocale(
  args: InferRequestType<(typeof client.rest.api)['3']['mypreferences']['locale']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].mypreferences.locale.$put(args, options))
}

export async function getRestApi3Myself(
  args: InferRequestType<(typeof client.rest.api)['3']['myself']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].myself.$get(args, options))
}

export async function getRestApi3Notificationscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].notificationscheme.$get(args, options))
}

export async function postRestApi3Notificationscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].notificationscheme.$post(args, options))
}

export async function getRestApi3NotificationschemeProject(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme']['project']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].notificationscheme.project.$get(args, options))
}

export async function getRestApi3NotificationschemeId(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].notificationscheme[':id'].$get(args, options))
}

export async function putRestApi3NotificationschemeId(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].notificationscheme[':id'].$put(args, options))
}

export async function putRestApi3NotificationschemeIdNotification(
  args: InferRequestType<
    (typeof client.rest.api)['3']['notificationscheme'][':id']['notification']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].notificationscheme[':id'].notification.$put(args, options),
  )
}

export async function deleteRestApi3NotificationschemeNotificationSchemeId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['notificationscheme'][':notificationSchemeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].notificationscheme[':notificationSchemeId'].$delete(args, options),
  )
}

export async function deleteRestApi3NotificationschemeNotificationSchemeIdNotificationNotificationId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['notificationscheme'][':notificationSchemeId']['notification'][':notificationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].notificationscheme[':notificationSchemeId'].notification[
      ':notificationId'
    ].$delete(args, options),
  )
}

export async function getRestApi3Permissions(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].permissions.$get(undefined, options))
}

export async function postRestApi3PermissionsCheck(
  args: InferRequestType<(typeof client.rest.api)['3']['permissions']['check']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].permissions.check.$post(args, options))
}

export async function postRestApi3PermissionsProject(
  args: InferRequestType<(typeof client.rest.api)['3']['permissions']['project']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].permissions.project.$post(args, options))
}

export async function getRestApi3Permissionscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['permissionscheme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].permissionscheme.$get(args, options))
}

export async function postRestApi3Permissionscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['permissionscheme']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].permissionscheme.$post(args, options))
}

export async function getRestApi3PermissionschemeSchemeId(
  args: InferRequestType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].permissionscheme[':schemeId'].$get(args, options))
}

export async function putRestApi3PermissionschemeSchemeId(
  args: InferRequestType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].permissionscheme[':schemeId'].$put(args, options))
}

export async function deleteRestApi3PermissionschemeSchemeId(
  args: InferRequestType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].permissionscheme[':schemeId'].$delete(args, options),
  )
}

export async function getRestApi3PermissionschemeSchemeIdPermission(
  args: InferRequestType<
    (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].permissionscheme[':schemeId'].permission.$get(args, options),
  )
}

export async function postRestApi3PermissionschemeSchemeIdPermission(
  args: InferRequestType<
    (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].permissionscheme[':schemeId'].permission.$post(args, options),
  )
}

export async function getRestApi3PermissionschemeSchemeIdPermissionPermissionId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission'][':permissionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].permissionscheme[':schemeId'].permission[':permissionId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteRestApi3PermissionschemeSchemeIdPermissionPermissionId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission'][':permissionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].permissionscheme[':schemeId'].permission[':permissionId'].$delete(
      args,
      options,
    ),
  )
}

export async function getRestApi3PlansPlan(
  args: InferRequestType<(typeof client.rest.api)['3']['plans']['plan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].plans.plan.$get(args, options))
}

export async function postRestApi3PlansPlan(
  args: InferRequestType<(typeof client.rest.api)['3']['plans']['plan']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].plans.plan.$post(args, options))
}

export async function getRestApi3PlansPlanPlanId(
  args: InferRequestType<(typeof client.rest.api)['3']['plans']['plan'][':planId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].plans.plan[':planId'].$get(args, options))
}

export async function putRestApi3PlansPlanPlanId(
  args: InferRequestType<(typeof client.rest.api)['3']['plans']['plan'][':planId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].plans.plan[':planId'].$put(args, options))
}

export async function putRestApi3PlansPlanPlanIdArchive(
  args: InferRequestType<
    (typeof client.rest.api)['3']['plans']['plan'][':planId']['archive']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].plans.plan[':planId'].archive.$put(args, options))
}

export async function postRestApi3PlansPlanPlanIdDuplicate(
  args: InferRequestType<
    (typeof client.rest.api)['3']['plans']['plan'][':planId']['duplicate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].plans.plan[':planId'].duplicate.$post(args, options),
  )
}

export async function getRestApi3PlansPlanPlanIdTeam(
  args: InferRequestType<(typeof client.rest.api)['3']['plans']['plan'][':planId']['team']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].plans.plan[':planId'].team.$get(args, options))
}

export async function postRestApi3PlansPlanPlanIdTeamAtlassian(
  args: InferRequestType<
    (typeof client.rest.api)['3']['plans']['plan'][':planId']['team']['atlassian']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].plans.plan[':planId'].team.atlassian.$post(args, options),
  )
}

export async function getRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['plans']['plan'][':planId']['team']['atlassian'][':atlassianTeamId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].plans.plan[':planId'].team.atlassian[':atlassianTeamId'].$get(
      args,
      options,
    ),
  )
}

export async function putRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['plans']['plan'][':planId']['team']['atlassian'][':atlassianTeamId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].plans.plan[':planId'].team.atlassian[':atlassianTeamId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['plans']['plan'][':planId']['team']['atlassian'][':atlassianTeamId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].plans.plan[':planId'].team.atlassian[':atlassianTeamId'].$delete(
      args,
      options,
    ),
  )
}

export async function postRestApi3PlansPlanPlanIdTeamPlanonly(
  args: InferRequestType<
    (typeof client.rest.api)['3']['plans']['plan'][':planId']['team']['planonly']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].plans.plan[':planId'].team.planonly.$post(args, options),
  )
}

export async function getRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['plans']['plan'][':planId']['team']['planonly'][':planOnlyTeamId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].plans.plan[':planId'].team.planonly[':planOnlyTeamId'].$get(args, options),
  )
}

export async function putRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['plans']['plan'][':planId']['team']['planonly'][':planOnlyTeamId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].plans.plan[':planId'].team.planonly[':planOnlyTeamId'].$put(args, options),
  )
}

export async function deleteRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['plans']['plan'][':planId']['team']['planonly'][':planOnlyTeamId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].plans.plan[':planId'].team.planonly[':planOnlyTeamId'].$delete(
      args,
      options,
    ),
  )
}

export async function putRestApi3PlansPlanPlanIdTrash(
  args: InferRequestType<
    (typeof client.rest.api)['3']['plans']['plan'][':planId']['trash']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].plans.plan[':planId'].trash.$put(args, options))
}

export async function getRestApi3Policies(
  args: InferRequestType<(typeof client.rest.api)['3']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].policies.$get(args, options))
}

export async function getRestApi3PoliciesProjectProjectIdOrKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['policies']['project'][':projectIdOrKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].policies.project[':projectIdOrKey'].$get(args, options),
  )
}

export async function putRestApi3PoliciesProjectProjectIdOrKeyPolicies(
  args: InferRequestType<
    (typeof client.rest.api)['3']['policies']['project'][':projectIdOrKey']['policies']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].policies.project[':projectIdOrKey'].policies.$put(args, options),
  )
}

export async function getRestApi3PoliciesProjectProjectIdOrKeyRules(
  args: InferRequestType<
    (typeof client.rest.api)['3']['policies']['project'][':projectIdOrKey']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].policies.project[':projectIdOrKey'].rules.$get(args, options),
  )
}

export async function postRestApi3PoliciesProjectProjectIdOrKeyValidate(
  args: InferRequestType<
    (typeof client.rest.api)['3']['policies']['project'][':projectIdOrKey']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].policies.project[':projectIdOrKey'].validate.$post(args, options),
  )
}

export async function postRestApi3PoliciesPolicyIdApply(
  args: InferRequestType<(typeof client.rest.api)['3']['policies'][':policyId']['apply']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].policies[':policyId'].apply.$post(args, options))
}

export async function postRestApi3PoliciesPolicyIdRemove(
  args: InferRequestType<(typeof client.rest.api)['3']['policies'][':policyId']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].policies[':policyId'].remove.$post(args, options))
}

export async function getRestApi3Priority(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].priority.$get(undefined, options))
}

export async function postRestApi3Priority(
  args: InferRequestType<(typeof client.rest.api)['3']['priority']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].priority.$post(args, options))
}

export async function putRestApi3PriorityDefault(
  args: InferRequestType<(typeof client.rest.api)['3']['priority']['default']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].priority.default.$put(args, options))
}

export async function putRestApi3PriorityMove(
  args: InferRequestType<(typeof client.rest.api)['3']['priority']['move']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].priority.move.$put(args, options))
}

export async function getRestApi3PrioritySearch(
  args: InferRequestType<(typeof client.rest.api)['3']['priority']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].priority.search.$get(args, options))
}

export async function getRestApi3PriorityId(
  args: InferRequestType<(typeof client.rest.api)['3']['priority'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].priority[':id'].$get(args, options))
}

export async function putRestApi3PriorityId(
  args: InferRequestType<(typeof client.rest.api)['3']['priority'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].priority[':id'].$put(args, options))
}

export async function deleteRestApi3PriorityId(
  args: InferRequestType<(typeof client.rest.api)['3']['priority'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].priority[':id'].$delete(args, options))
}

export async function getRestApi3Priorityscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['priorityscheme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].priorityscheme.$get(args, options))
}

export async function postRestApi3Priorityscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['priorityscheme']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].priorityscheme.$post(args, options))
}

export async function postRestApi3PriorityschemeMappings(
  args: InferRequestType<(typeof client.rest.api)['3']['priorityscheme']['mappings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].priorityscheme.mappings.$post(args, options))
}

export async function getRestApi3PriorityschemePrioritiesAvailable(
  args: InferRequestType<
    (typeof client.rest.api)['3']['priorityscheme']['priorities']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].priorityscheme.priorities.available.$get(args, options),
  )
}

export async function putRestApi3PriorityschemeSchemeId(
  args: InferRequestType<(typeof client.rest.api)['3']['priorityscheme'][':schemeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].priorityscheme[':schemeId'].$put(args, options))
}

export async function deleteRestApi3PriorityschemeSchemeId(
  args: InferRequestType<(typeof client.rest.api)['3']['priorityscheme'][':schemeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].priorityscheme[':schemeId'].$delete(args, options),
  )
}

export async function getRestApi3PriorityschemeSchemeIdPriorities(
  args: InferRequestType<
    (typeof client.rest.api)['3']['priorityscheme'][':schemeId']['priorities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].priorityscheme[':schemeId'].priorities.$get(args, options),
  )
}

export async function getRestApi3PriorityschemeSchemeIdProjects(
  args: InferRequestType<
    (typeof client.rest.api)['3']['priorityscheme'][':schemeId']['projects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].priorityscheme[':schemeId'].projects.$get(args, options),
  )
}

export async function getRestApi3Project(
  args: InferRequestType<(typeof client.rest.api)['3']['project']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].project.$get(args, options))
}

export async function postRestApi3Project(
  args: InferRequestType<(typeof client.rest.api)['3']['project']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].project.$post(args, options))
}

export async function postRestApi3ProjectTemplate(
  args: InferRequestType<(typeof client.rest.api)['3']['project-template']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3']['project-template'].$post(args, options))
}

export async function putRestApi3ProjectTemplateEditTemplate(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project-template']['edit-template']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3']['project-template']['edit-template'].$put(args, options),
  )
}

export async function getRestApi3ProjectTemplateLiveTemplate(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project-template']['live-template']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3']['project-template']['live-template'].$get(args, options),
  )
}

export async function deleteRestApi3ProjectTemplateRemoveTemplate(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project-template']['remove-template']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3']['project-template']['remove-template'].$delete(args, options),
  )
}

export async function postRestApi3ProjectTemplateSaveTemplate(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project-template']['save-template']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3']['project-template']['save-template'].$post(args, options),
  )
}

export async function getRestApi3ProjectRecent(
  args: InferRequestType<(typeof client.rest.api)['3']['project']['recent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].project.recent.$get(args, options))
}

export async function getRestApi3ProjectSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['project']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].project.search.$get(args, options))
}

export async function getRestApi3ProjectType(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].project.type.$get(undefined, options))
}

export async function getRestApi3ProjectTypeAccessible(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].project.type.accessible.$get(undefined, options))
}

export async function getRestApi3ProjectTypeProjectTypeKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project.type[':projectTypeKey'].$get(args, options),
  )
}

export async function getRestApi3ProjectTypeProjectTypeKeyAccessible(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['accessible']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project.type[':projectTypeKey'].accessible.$get(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKey(
  args: InferRequestType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].project[':projectIdOrKey'].$get(args, options))
}

export async function putRestApi3ProjectProjectIdOrKey(
  args: InferRequestType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].project[':projectIdOrKey'].$put(args, options))
}

export async function deleteRestApi3ProjectProjectIdOrKey(
  args: InferRequestType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].project[':projectIdOrKey'].$delete(args, options))
}

export async function postRestApi3ProjectProjectIdOrKeyArchive(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].archive.$post(args, options),
  )
}

export async function putRestApi3ProjectProjectIdOrKeyAvatar(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatar']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].avatar.$put(args, options),
  )
}

export async function deleteRestApi3ProjectProjectIdOrKeyAvatarId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatar'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].avatar[':id'].$delete(args, options),
  )
}

export async function postRestApi3ProjectProjectIdOrKeyAvatar2(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatar2']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].avatar2.$post(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyAvatars(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatars']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].avatars.$get(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyClassificationConfig(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['classification-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey']['classification-config'].$get(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyClassificationLevelDefault(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['classification-level']['default']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey']['classification-level'].default.$get(
      args,
      options,
    ),
  )
}

export async function putRestApi3ProjectProjectIdOrKeyClassificationLevelDefault(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['classification-level']['default']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey']['classification-level'].default.$put(
      args,
      options,
    ),
  )
}

export async function deleteRestApi3ProjectProjectIdOrKeyClassificationLevelDefault(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['classification-level']['default']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey']['classification-level'].default.$delete(
      args,
      options,
    ),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyComponent(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['component']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].component.$get(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyComponents(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['components']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].components.$get(args, options),
  )
}

export async function postRestApi3ProjectProjectIdOrKeyDelete(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].delete.$post(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyFeatures(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].features.$get(args, options),
  )
}

export async function putRestApi3ProjectProjectIdOrKeyFeaturesFeatureKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['features'][':featureKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].features[':featureKey'].$put(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyProperties(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].properties.$get(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].properties[':propertyKey'].$get(args, options),
  )
}

export async function putRestApi3ProjectProjectIdOrKeyPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].properties[':propertyKey'].$put(args, options),
  )
}

export async function deleteRestApi3ProjectProjectIdOrKeyPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].properties[':propertyKey'].$delete(
      args,
      options,
    ),
  )
}

export async function postRestApi3ProjectProjectIdOrKeyRestore(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].restore.$post(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyRole(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].role.$get(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyRoleId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].role[':id'].$get(args, options),
  )
}

export async function putRestApi3ProjectProjectIdOrKeyRoleId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].role[':id'].$put(args, options),
  )
}

export async function postRestApi3ProjectProjectIdOrKeyRoleId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].role[':id'].$post(args, options),
  )
}

export async function deleteRestApi3ProjectProjectIdOrKeyRoleId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].role[':id'].$delete(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyRoledetails(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['roledetails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].roledetails.$get(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyStatuses(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].statuses.$get(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyVersion(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].version.$get(args, options),
  )
}

export async function getRestApi3ProjectProjectIdOrKeyVersions(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectIdOrKey'].versions.$get(args, options),
  )
}

export async function getRestApi3ProjectProjectIdEmail(
  args: InferRequestType<(typeof client.rest.api)['3']['project'][':projectId']['email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].project[':projectId'].email.$get(args, options))
}

export async function putRestApi3ProjectProjectIdEmail(
  args: InferRequestType<(typeof client.rest.api)['3']['project'][':projectId']['email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].project[':projectId'].email.$put(args, options))
}

export async function getRestApi3ProjectProjectIdHierarchy(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectId']['hierarchy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectId'].hierarchy.$get(args, options),
  )
}

export async function getRestApi3ProjectProjectKeyOrIdIssuesecuritylevelscheme(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['issuesecuritylevelscheme']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectKeyOrId'].issuesecuritylevelscheme.$get(args, options),
  )
}

export async function getRestApi3ProjectProjectKeyOrIdNotificationscheme(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['notificationscheme']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectKeyOrId'].notificationscheme.$get(args, options),
  )
}

export async function getRestApi3ProjectProjectKeyOrIdPermissionscheme(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['permissionscheme']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectKeyOrId'].permissionscheme.$get(args, options),
  )
}

export async function putRestApi3ProjectProjectKeyOrIdPermissionscheme(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['permissionscheme']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectKeyOrId'].permissionscheme.$put(args, options),
  )
}

export async function getRestApi3ProjectProjectKeyOrIdSecuritylevel(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['securitylevel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].project[':projectKeyOrId'].securitylevel.$get(args, options),
  )
}

export async function getRestApi3ProjectCategory(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].projectCategory.$get(undefined, options))
}

export async function postRestApi3ProjectCategory(
  args: InferRequestType<(typeof client.rest.api)['3']['projectCategory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].projectCategory.$post(args, options))
}

export async function getRestApi3ProjectCategoryId(
  args: InferRequestType<(typeof client.rest.api)['3']['projectCategory'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].projectCategory[':id'].$get(args, options))
}

export async function putRestApi3ProjectCategoryId(
  args: InferRequestType<(typeof client.rest.api)['3']['projectCategory'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].projectCategory[':id'].$put(args, options))
}

export async function deleteRestApi3ProjectCategoryId(
  args: InferRequestType<(typeof client.rest.api)['3']['projectCategory'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].projectCategory[':id'].$delete(args, options))
}

export async function getRestApi3ProjectsFields(
  args: InferRequestType<(typeof client.rest.api)['3']['projects']['fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].projects.fields.$get(args, options))
}

export async function getRestApi3ProjectvalidateKey(
  args: InferRequestType<(typeof client.rest.api)['3']['projectvalidate']['key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].projectvalidate.key.$get(args, options))
}

export async function getRestApi3ProjectvalidateValidProjectKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['projectvalidate']['validProjectKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].projectvalidate.validProjectKey.$get(args, options),
  )
}

export async function getRestApi3ProjectvalidateValidProjectName(
  args: InferRequestType<
    (typeof client.rest.api)['3']['projectvalidate']['validProjectName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].projectvalidate.validProjectName.$get(args, options),
  )
}

export async function postRestApi3Redact(
  args: InferRequestType<(typeof client.rest.api)['3']['redact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].redact.$post(args, options))
}

export async function getRestApi3RedactStatusJobId(
  args: InferRequestType<(typeof client.rest.api)['3']['redact']['status'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].redact.status[':jobId'].$get(args, options))
}

export async function getRestApi3Resolution(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].resolution.$get(undefined, options))
}

export async function postRestApi3Resolution(
  args: InferRequestType<(typeof client.rest.api)['3']['resolution']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].resolution.$post(args, options))
}

export async function putRestApi3ResolutionDefault(
  args: InferRequestType<(typeof client.rest.api)['3']['resolution']['default']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].resolution.default.$put(args, options))
}

export async function putRestApi3ResolutionMove(
  args: InferRequestType<(typeof client.rest.api)['3']['resolution']['move']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].resolution.move.$put(args, options))
}

export async function getRestApi3ResolutionSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['resolution']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].resolution.search.$get(args, options))
}

export async function getRestApi3ResolutionId(
  args: InferRequestType<(typeof client.rest.api)['3']['resolution'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].resolution[':id'].$get(args, options))
}

export async function putRestApi3ResolutionId(
  args: InferRequestType<(typeof client.rest.api)['3']['resolution'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].resolution[':id'].$put(args, options))
}

export async function deleteRestApi3ResolutionId(
  args: InferRequestType<(typeof client.rest.api)['3']['resolution'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].resolution[':id'].$delete(args, options))
}

export async function getRestApi3Role(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].role.$get(undefined, options))
}

export async function postRestApi3Role(
  args: InferRequestType<(typeof client.rest.api)['3']['role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].role.$post(args, options))
}

export async function getRestApi3RoleId(
  args: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].role[':id'].$get(args, options))
}

export async function putRestApi3RoleId(
  args: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].role[':id'].$put(args, options))
}

export async function postRestApi3RoleId(
  args: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].role[':id'].$post(args, options))
}

export async function deleteRestApi3RoleId(
  args: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].role[':id'].$delete(args, options))
}

export async function getRestApi3RoleIdActors(
  args: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['actors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].role[':id'].actors.$get(args, options))
}

export async function postRestApi3RoleIdActors(
  args: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['actors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].role[':id'].actors.$post(args, options))
}

export async function deleteRestApi3RoleIdActors(
  args: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['actors']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].role[':id'].actors.$delete(args, options))
}

export async function getRestApi3Screens(
  args: InferRequestType<(typeof client.rest.api)['3']['screens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].screens.$get(args, options))
}

export async function postRestApi3Screens(
  args: InferRequestType<(typeof client.rest.api)['3']['screens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].screens.$post(args, options))
}

export async function postRestApi3ScreensAddToDefaultFieldId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens']['addToDefault'][':fieldId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].screens.addToDefault[':fieldId'].$post(args, options),
  )
}

export async function getRestApi3ScreensTabs(
  args: InferRequestType<(typeof client.rest.api)['3']['screens']['tabs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].screens.tabs.$get(args, options))
}

export async function putRestApi3ScreensScreenId(
  args: InferRequestType<(typeof client.rest.api)['3']['screens'][':screenId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].screens[':screenId'].$put(args, options))
}

export async function deleteRestApi3ScreensScreenId(
  args: InferRequestType<(typeof client.rest.api)['3']['screens'][':screenId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].screens[':screenId'].$delete(args, options))
}

export async function getRestApi3ScreensScreenIdAvailableFields(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['availableFields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].screens[':screenId'].availableFields.$get(args, options),
  )
}

export async function getRestApi3ScreensScreenIdTabs(
  args: InferRequestType<(typeof client.rest.api)['3']['screens'][':screenId']['tabs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].screens[':screenId'].tabs.$get(args, options))
}

export async function postRestApi3ScreensScreenIdTabs(
  args: InferRequestType<(typeof client.rest.api)['3']['screens'][':screenId']['tabs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].screens[':screenId'].tabs.$post(args, options))
}

export async function putRestApi3ScreensScreenIdTabsTabId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].screens[':screenId'].tabs[':tabId'].$put(args, options),
  )
}

export async function deleteRestApi3ScreensScreenIdTabsTabId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].screens[':screenId'].tabs[':tabId'].$delete(args, options),
  )
}

export async function getRestApi3ScreensScreenIdTabsTabIdFields(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].screens[':screenId'].tabs[':tabId'].fields.$get(args, options),
  )
}

export async function postRestApi3ScreensScreenIdTabsTabIdFields(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].screens[':screenId'].tabs[':tabId'].fields.$post(args, options),
  )
}

export async function deleteRestApi3ScreensScreenIdTabsTabIdFieldsId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].screens[':screenId'].tabs[':tabId'].fields[':id'].$delete(args, options),
  )
}

export async function postRestApi3ScreensScreenIdTabsTabIdFieldsIdMove(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields'][':id']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].screens[':screenId'].tabs[':tabId'].fields[':id'].move.$post(
      args,
      options,
    ),
  )
}

export async function postRestApi3ScreensScreenIdTabsTabIdMovePos(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['move'][':pos']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].screens[':screenId'].tabs[':tabId'].move[':pos'].$post(args, options),
  )
}

export async function getRestApi3Screenscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['screenscheme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].screenscheme.$get(args, options))
}

export async function postRestApi3Screenscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['screenscheme']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].screenscheme.$post(args, options))
}

export async function putRestApi3ScreenschemeScreenSchemeId(
  args: InferRequestType<(typeof client.rest.api)['3']['screenscheme'][':screenSchemeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].screenscheme[':screenSchemeId'].$put(args, options),
  )
}

export async function deleteRestApi3ScreenschemeScreenSchemeId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screenscheme'][':screenSchemeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].screenscheme[':screenSchemeId'].$delete(args, options),
  )
}

export async function getRestApi3Search(
  args: InferRequestType<(typeof client.rest.api)['3']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].search.$get(args, options))
}

export async function postRestApi3Search(
  args: InferRequestType<(typeof client.rest.api)['3']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].search.$post(args, options))
}

export async function postRestApi3SearchApproximateCount(
  args: InferRequestType<(typeof client.rest.api)['3']['search']['approximate-count']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].search['approximate-count'].$post(args, options))
}

export async function getRestApi3SearchJql(
  args: InferRequestType<(typeof client.rest.api)['3']['search']['jql']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].search.jql.$get(args, options))
}

export async function postRestApi3SearchJql(
  args: InferRequestType<(typeof client.rest.api)['3']['search']['jql']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].search.jql.$post(args, options))
}

export async function getRestApi3SecuritylevelId(
  args: InferRequestType<(typeof client.rest.api)['3']['securitylevel'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].securitylevel[':id'].$get(args, options))
}

export async function getRestApi3ServerInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].serverInfo.$get(undefined, options))
}

export async function getRestApi3SettingsColumns(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].settings.columns.$get(undefined, options))
}

export async function putRestApi3SettingsColumns(
  args: InferRequestType<(typeof client.rest.api)['3']['settings']['columns']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].settings.columns.$put(args, options))
}

export async function getRestApi3Status(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].status.$get(undefined, options))
}

export async function getRestApi3StatusIdOrName(
  args: InferRequestType<(typeof client.rest.api)['3']['status'][':idOrName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].status[':idOrName'].$get(args, options))
}

export async function getRestApi3Statuscategory(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].statuscategory.$get(undefined, options))
}

export async function getRestApi3StatuscategoryIdOrKey(
  args: InferRequestType<(typeof client.rest.api)['3']['statuscategory'][':idOrKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].statuscategory[':idOrKey'].$get(args, options))
}

export async function getRestApi3Statuses(
  args: InferRequestType<(typeof client.rest.api)['3']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].statuses.$get(args, options))
}

export async function putRestApi3Statuses(
  args: InferRequestType<(typeof client.rest.api)['3']['statuses']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].statuses.$put(args, options))
}

export async function postRestApi3Statuses(
  args: InferRequestType<(typeof client.rest.api)['3']['statuses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].statuses.$post(args, options))
}

export async function deleteRestApi3Statuses(
  args: InferRequestType<(typeof client.rest.api)['3']['statuses']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].statuses.$delete(args, options))
}

export async function getRestApi3StatusesByNames(
  args: InferRequestType<(typeof client.rest.api)['3']['statuses']['byNames']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].statuses.byNames.$get(args, options))
}

export async function getRestApi3StatusesSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['statuses']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].statuses.search.$get(args, options))
}

export async function getRestApi3StatusesStatusIdProjectProjectIdIssueTypeUsages(
  args: InferRequestType<
    (typeof client.rest.api)['3']['statuses'][':statusId']['project'][':projectId']['issueTypeUsages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].statuses[':statusId'].project[':projectId'].issueTypeUsages.$get(
      args,
      options,
    ),
  )
}

export async function getRestApi3StatusesStatusIdProjectUsages(
  args: InferRequestType<
    (typeof client.rest.api)['3']['statuses'][':statusId']['projectUsages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].statuses[':statusId'].projectUsages.$get(args, options),
  )
}

export async function getRestApi3StatusesStatusIdWorkflowUsages(
  args: InferRequestType<
    (typeof client.rest.api)['3']['statuses'][':statusId']['workflowUsages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].statuses[':statusId'].workflowUsages.$get(args, options),
  )
}

export async function getRestApi3TaskTaskId(
  args: InferRequestType<(typeof client.rest.api)['3']['task'][':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].task[':taskId'].$get(args, options))
}

export async function postRestApi3TaskTaskIdCancel(
  args: InferRequestType<(typeof client.rest.api)['3']['task'][':taskId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].task[':taskId'].cancel.$post(args, options))
}

export async function getRestApi3UiModifications(
  args: InferRequestType<(typeof client.rest.api)['3']['uiModifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].uiModifications.$get(args, options))
}

export async function postRestApi3UiModifications(
  args: InferRequestType<(typeof client.rest.api)['3']['uiModifications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].uiModifications.$post(args, options))
}

export async function putRestApi3UiModificationsUiModificationId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['uiModifications'][':uiModificationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].uiModifications[':uiModificationId'].$put(args, options),
  )
}

export async function deleteRestApi3UiModificationsUiModificationId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['uiModifications'][':uiModificationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].uiModifications[':uiModificationId'].$delete(args, options),
  )
}

export async function getRestApi3UniversalAvatarTypeTypeOwnerEntityId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':entityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].universal_avatar.type[':type'].owner[':entityId'].$get(args, options),
  )
}

export async function postRestApi3UniversalAvatarTypeTypeOwnerEntityId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':entityId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].universal_avatar.type[':type'].owner[':entityId'].$post(args, options),
  )
}

export async function deleteRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':owningObjectId']['avatar'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].universal_avatar.type[':type'].owner[':owningObjectId'].avatar[
      ':id'
    ].$delete(args, options),
  )
}

export async function getRestApi3UniversalAvatarViewTypeType(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].universal_avatar.view.type[':type'].$get(args, options),
  )
}

export async function getRestApi3UniversalAvatarViewTypeTypeAvatarId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['avatar'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].universal_avatar.view.type[':type'].avatar[':id'].$get(args, options),
  )
}

export async function getRestApi3UniversalAvatarViewTypeTypeOwnerEntityId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['owner'][':entityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].universal_avatar.view.type[':type'].owner[':entityId'].$get(args, options),
  )
}

export async function getRestApi3User(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.$get(args, options))
}

export async function postRestApi3User(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.$post(args, options))
}

export async function deleteRestApi3User(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.$delete(args, options))
}

export async function getRestApi3UserAssignableMultiProjectSearch(
  args: InferRequestType<
    (typeof client.rest.api)['3']['user']['assignable']['multiProjectSearch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].user.assignable.multiProjectSearch.$get(args, options),
  )
}

export async function getRestApi3UserAssignableSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['assignable']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.assignable.search.$get(args, options))
}

export async function getRestApi3UserBulk(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['bulk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.bulk.$get(args, options))
}

export async function getRestApi3UserBulkMigration(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['bulk']['migration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.bulk.migration.$get(args, options))
}

export async function getRestApi3UserColumns(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['columns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.columns.$get(args, options))
}

export async function putRestApi3UserColumns(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['columns']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.columns.$put(args, options))
}

export async function deleteRestApi3UserColumns(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['columns']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.columns.$delete(args, options))
}

export async function getRestApi3UserEmail(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.email.$get(args, options))
}

export async function getRestApi3UserEmailBulk(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['email']['bulk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.email.bulk.$get(args, options))
}

export async function getRestApi3UserGroups(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.groups.$get(args, options))
}

export async function getRestApi3UserPermissionSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['permission']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.permission.search.$get(args, options))
}

export async function getRestApi3UserPicker(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['picker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.picker.$get(args, options))
}

export async function getRestApi3UserProperties(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['properties']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.properties.$get(args, options))
}

export async function getRestApi3UserPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].user.properties[':propertyKey'].$get(args, options),
  )
}

export async function putRestApi3UserPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].user.properties[':propertyKey'].$put(args, options),
  )
}

export async function deleteRestApi3UserPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].user.properties[':propertyKey'].$delete(args, options),
  )
}

export async function getRestApi3UserSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.search.$get(args, options))
}

export async function getRestApi3UserSearchQuery(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['search']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.search.query.$get(args, options))
}

export async function getRestApi3UserSearchQueryKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['search']['query']['key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.search.query.key.$get(args, options))
}

export async function getRestApi3UserViewissueSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['viewissue']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].user.viewissue.search.$get(args, options))
}

export async function getRestApi3Users(
  args: InferRequestType<(typeof client.rest.api)['3']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].users.$get(args, options))
}

export async function getRestApi3UsersSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['users']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].users.search.$get(args, options))
}

export async function postRestApi3Version(
  args: InferRequestType<(typeof client.rest.api)['3']['version']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].version.$post(args, options))
}

export async function getRestApi3VersionId(
  args: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].version[':id'].$get(args, options))
}

export async function putRestApi3VersionId(
  args: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].version[':id'].$put(args, options))
}

export async function deleteRestApi3VersionId(
  args: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].version[':id'].$delete(args, options))
}

export async function putRestApi3VersionIdMergetoMoveIssuesTo(
  args: InferRequestType<
    (typeof client.rest.api)['3']['version'][':id']['mergeto'][':moveIssuesTo']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].version[':id'].mergeto[':moveIssuesTo'].$put(args, options),
  )
}

export async function postRestApi3VersionIdMove(
  args: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].version[':id'].move.$post(args, options))
}

export async function getRestApi3VersionIdRelatedIssueCounts(
  args: InferRequestType<
    (typeof client.rest.api)['3']['version'][':id']['relatedIssueCounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].version[':id'].relatedIssueCounts.$get(args, options),
  )
}

export async function getRestApi3VersionIdRelatedwork(
  args: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['relatedwork']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].version[':id'].relatedwork.$get(args, options))
}

export async function putRestApi3VersionIdRelatedwork(
  args: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['relatedwork']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].version[':id'].relatedwork.$put(args, options))
}

export async function postRestApi3VersionIdRelatedwork(
  args: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['relatedwork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].version[':id'].relatedwork.$post(args, options))
}

export async function postRestApi3VersionIdRemoveAndSwap(
  args: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['removeAndSwap']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].version[':id'].removeAndSwap.$post(args, options))
}

export async function getRestApi3VersionIdUnresolvedIssueCount(
  args: InferRequestType<
    (typeof client.rest.api)['3']['version'][':id']['unresolvedIssueCount']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].version[':id'].unresolvedIssueCount.$get(args, options),
  )
}

export async function deleteRestApi3VersionVersionIdRelatedworkRelatedWorkId(
  args: InferRequestType<
    (typeof client.rest.api)['3']['version'][':versionId']['relatedwork'][':relatedWorkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].version[':versionId'].relatedwork[':relatedWorkId'].$delete(args, options),
  )
}

export async function getRestApi3Webhook(
  args: InferRequestType<(typeof client.rest.api)['3']['webhook']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].webhook.$get(args, options))
}

export async function postRestApi3Webhook(
  args: InferRequestType<(typeof client.rest.api)['3']['webhook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].webhook.$post(args, options))
}

export async function deleteRestApi3Webhook(
  args: InferRequestType<(typeof client.rest.api)['3']['webhook']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].webhook.$delete(args, options))
}

export async function getRestApi3WebhookFailed(
  args: InferRequestType<(typeof client.rest.api)['3']['webhook']['failed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].webhook.failed.$get(args, options))
}

export async function putRestApi3WebhookRefresh(
  args: InferRequestType<(typeof client.rest.api)['3']['webhook']['refresh']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].webhook.refresh.$put(args, options))
}

export async function postRestApi3WorkflowHistory(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['history']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflow.history.$post(args, options))
}

export async function postRestApi3WorkflowHistoryList(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['history']['list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflow.history.list.$post(args, options))
}

export async function getRestApi3WorkflowRuleConfig(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['rule']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflow.rule.config.$get(args, options))
}

export async function putRestApi3WorkflowRuleConfig(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['rule']['config']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflow.rule.config.$put(args, options))
}

export async function putRestApi3WorkflowRuleConfigDelete(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflow']['rule']['config']['delete']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflow.rule.config.delete.$put(args, options))
}

export async function getRestApi3WorkflowSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflow.search.$get(args, options))
}

export async function deleteRestApi3WorkflowEntityId(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow'][':entityId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflow[':entityId'].$delete(args, options))
}

export async function getRestApi3WorkflowWorkflowIdProjectProjectIdIssueTypeUsages(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflow'][':workflowId']['project'][':projectId']['issueTypeUsages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflow[':workflowId'].project[':projectId'].issueTypeUsages.$get(
      args,
      options,
    ),
  )
}

export async function getRestApi3WorkflowWorkflowIdProjectUsages(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflow'][':workflowId']['projectUsages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflow[':workflowId'].projectUsages.$get(args, options),
  )
}

export async function getRestApi3WorkflowWorkflowIdWorkflowSchemes(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflow'][':workflowId']['workflowSchemes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflow[':workflowId'].workflowSchemes.$get(args, options),
  )
}

export async function postRestApi3Workflows(
  args: InferRequestType<(typeof client.rest.api)['3']['workflows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflows.$post(args, options))
}

export async function getRestApi3WorkflowsCapabilities(
  args: InferRequestType<(typeof client.rest.api)['3']['workflows']['capabilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflows.capabilities.$get(args, options))
}

export async function postRestApi3WorkflowsCopy(
  args: InferRequestType<(typeof client.rest.api)['3']['workflows']['copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflows.copy.$post(args, options))
}

export async function postRestApi3WorkflowsCreate(
  args: InferRequestType<(typeof client.rest.api)['3']['workflows']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflows.create.$post(args, options))
}

export async function postRestApi3WorkflowsCreateValidation(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflows']['create']['validation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflows.create.validation.$post(args, options))
}

export async function getRestApi3WorkflowsDefaultEditor(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.api['3'].workflows.defaultEditor.$get(undefined, options))
}

export async function postRestApi3WorkflowsPreview(
  args: InferRequestType<(typeof client.rest.api)['3']['workflows']['preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflows.preview.$post(args, options))
}

export async function getRestApi3WorkflowsSearch(
  args: InferRequestType<(typeof client.rest.api)['3']['workflows']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflows.search.$get(args, options))
}

export async function postRestApi3WorkflowsUpdate(
  args: InferRequestType<(typeof client.rest.api)['3']['workflows']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflows.update.$post(args, options))
}

export async function postRestApi3WorkflowsUpdateValidation(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflows']['update']['validation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflows.update.validation.$post(args, options))
}

export async function getRestApi3Workflowscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflowscheme.$get(args, options))
}

export async function postRestApi3Workflowscheme(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflowscheme.$post(args, options))
}

export async function getRestApi3WorkflowschemeProject(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['project']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflowscheme.project.$get(args, options))
}

export async function putRestApi3WorkflowschemeProject(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['project']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflowscheme.project.$put(args, options))
}

export async function postRestApi3WorkflowschemeProjectSwitch(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme']['project']['switch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme.project.switch.$post(args, options),
  )
}

export async function postRestApi3WorkflowschemeRead(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflowscheme.read.$post(args, options))
}

export async function postRestApi3WorkflowschemeUpdate(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflowscheme.update.$post(args, options))
}

export async function postRestApi3WorkflowschemeUpdateMappings(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme']['update']['mappings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme.update.mappings.$post(args, options),
  )
}

export async function getRestApi3WorkflowschemeId(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflowscheme[':id'].$get(args, options))
}

export async function putRestApi3WorkflowschemeId(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflowscheme[':id'].$put(args, options))
}

export async function deleteRestApi3WorkflowschemeId(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflowscheme[':id'].$delete(args, options))
}

export async function postRestApi3WorkflowschemeIdCreatedraft(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['createdraft']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].createdraft.$post(args, options),
  )
}

export async function getRestApi3WorkflowschemeIdDefault(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflowscheme[':id'].default.$get(args, options))
}

export async function putRestApi3WorkflowschemeIdDefault(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflowscheme[':id'].default.$put(args, options))
}

export async function deleteRestApi3WorkflowschemeIdDefault(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].default.$delete(args, options),
  )
}

export async function getRestApi3WorkflowschemeIdDraft(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflowscheme[':id'].draft.$get(args, options))
}

export async function putRestApi3WorkflowschemeIdDraft(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].workflowscheme[':id'].draft.$put(args, options))
}

export async function deleteRestApi3WorkflowschemeIdDraft(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].draft.$delete(args, options),
  )
}

export async function getRestApi3WorkflowschemeIdDraftDefault(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].draft.default.$get(args, options),
  )
}

export async function putRestApi3WorkflowschemeIdDraftDefault(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].draft.default.$put(args, options),
  )
}

export async function deleteRestApi3WorkflowschemeIdDraftDefault(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].draft.default.$delete(args, options),
  )
}

export async function getRestApi3WorkflowschemeIdDraftIssuetypeIssueType(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].draft.issuetype[':issueType'].$get(args, options),
  )
}

export async function putRestApi3WorkflowschemeIdDraftIssuetypeIssueType(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].draft.issuetype[':issueType'].$put(args, options),
  )
}

export async function deleteRestApi3WorkflowschemeIdDraftIssuetypeIssueType(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].draft.issuetype[':issueType'].$delete(args, options),
  )
}

export async function postRestApi3WorkflowschemeIdDraftPublish(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].draft.publish.$post(args, options),
  )
}

export async function getRestApi3WorkflowschemeIdDraftWorkflow(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].draft.workflow.$get(args, options),
  )
}

export async function putRestApi3WorkflowschemeIdDraftWorkflow(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].draft.workflow.$put(args, options),
  )
}

export async function deleteRestApi3WorkflowschemeIdDraftWorkflow(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].draft.workflow.$delete(args, options),
  )
}

export async function getRestApi3WorkflowschemeIdIssuetypeIssueType(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].issuetype[':issueType'].$get(args, options),
  )
}

export async function putRestApi3WorkflowschemeIdIssuetypeIssueType(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].issuetype[':issueType'].$put(args, options),
  )
}

export async function deleteRestApi3WorkflowschemeIdIssuetypeIssueType(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].issuetype[':issueType'].$delete(args, options),
  )
}

export async function getRestApi3WorkflowschemeIdWorkflow(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].workflow.$get(args, options),
  )
}

export async function putRestApi3WorkflowschemeIdWorkflow(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].workflow.$put(args, options),
  )
}

export async function deleteRestApi3WorkflowschemeIdWorkflow(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':id'].workflow.$delete(args, options),
  )
}

export async function getRestApi3WorkflowschemeWorkflowSchemeIdProjectUsages(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':workflowSchemeId']['projectUsages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.api['3'].workflowscheme[':workflowSchemeId'].projectUsages.$get(args, options),
  )
}

export async function getRestApi3WorklogDeleted(
  args: InferRequestType<(typeof client.rest.api)['3']['worklog']['deleted']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].worklog.deleted.$get(args, options))
}

export async function postRestApi3WorklogList(
  args: InferRequestType<(typeof client.rest.api)['3']['worklog']['list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].worklog.list.$post(args, options))
}

export async function getRestApi3WorklogUpdated(
  args: InferRequestType<(typeof client.rest.api)['3']['worklog']['updated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.api['3'].worklog.updated.$get(args, options))
}

export async function getRestAtlassianConnect1AddonsAddonKeyProperties(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest['atlassian-connect']['1'].addons[':addonKey'].properties.$get(args, options),
  )
}

export async function getRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest['atlassian-connect']['1'].addons[':addonKey'].properties[':propertyKey'].$get(
      args,
      options,
    ),
  )
}

export async function putRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest['atlassian-connect']['1'].addons[':addonKey'].properties[':propertyKey'].$put(
      args,
      options,
    ),
  )
}

export async function deleteRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest['atlassian-connect']['1'].addons[':addonKey'].properties[':propertyKey'].$delete(
      args,
      options,
    ),
  )
}

export async function getRestAtlassianConnect1AppModuleDynamic(options?: ClientRequestOptions) {
  return await parseResponse(
    client.rest['atlassian-connect']['1'].app.module.dynamic.$get(undefined, options),
  )
}

export async function postRestAtlassianConnect1AppModuleDynamic(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest['atlassian-connect']['1'].app.module.dynamic.$post(args, options),
  )
}

export async function deleteRestAtlassianConnect1AppModuleDynamic(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest['atlassian-connect']['1'].app.module.dynamic.$delete(args, options),
  )
}

export async function putRestAtlassianConnect1MigrationField(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['migration']['field']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest['atlassian-connect']['1'].migration.field.$put(args, options),
  )
}

export async function putRestAtlassianConnect1MigrationPropertiesEntityType(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['migration']['properties'][':entityType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest['atlassian-connect']['1'].migration.properties[':entityType'].$put(args, options),
  )
}

export async function postRestAtlassianConnect1MigrationWorkflowRuleSearch(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['migration']['workflow']['rule']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest['atlassian-connect']['1'].migration.workflow.rule.search.$post(args, options),
  )
}

export async function getRestAtlassianConnect1MigrationConnectKeyJiraIssueFieldsKeyTask(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['migration'][':connectKey'][':jiraIssueFieldsKey']['task']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest['atlassian-connect']['1'].migration[':connectKey'][':jiraIssueFieldsKey'].task.$get(
      args,
      options,
    ),
  )
}

export async function postRestAtlassianConnect1MigrationConnectKeyJiraIssueFieldsKeyTask(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['migration'][':connectKey'][':jiraIssueFieldsKey']['task']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest['atlassian-connect']['1'].migration[':connectKey'][
      ':jiraIssueFieldsKey'
    ].task.$post(args, options),
  )
}

export async function getRestAtlassianConnect1ServiceRegistry(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['service-registry']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest['atlassian-connect']['1']['service-registry'].$get(args, options),
  )
}

export async function getRestForge1AppProperties(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.forge['1'].app.properties.$get(undefined, options))
}

export async function getRestForge1AppPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.forge)['1']['app']['properties'][':propertyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.forge['1'].app.properties[':propertyKey'].$get(args, options),
  )
}

export async function putRestForge1AppPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.forge)['1']['app']['properties'][':propertyKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.forge['1'].app.properties[':propertyKey'].$put(args, options),
  )
}

export async function deleteRestForge1AppPropertiesPropertyKey(
  args: InferRequestType<
    (typeof client.rest.forge)['1']['app']['properties'][':propertyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.forge['1'].app.properties[':propertyKey'].$delete(args, options),
  )
}

export async function postRestInternalApiLatestWorklogBulk(
  args: InferRequestType<typeof client.rest.internal.api.latest.worklog.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.internal.api.latest.worklog.bulk.$post(args, options))
}

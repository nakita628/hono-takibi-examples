import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1ObjectsCollectionId(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.objects[':collection'][':id'].$get(args, options))
}

export async function putV1ObjectsCollectionId(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.objects[':collection'][':id'].$put(args, options))
}

export async function deleteV1ObjectsCollectionId(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.objects[':collection'][':id'].$delete(args, options))
}

export async function putV1UsersUserIdGuidesMessagesInteracted(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['guides']['messages']['interacted']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].guides.messages.interacted.$put(args, options),
  )
}

export async function postV1IntegrationsCensusCustomDestination(
  args: InferRequestType<(typeof client.v1.integrations.census)['custom-destination']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.integrations.census['custom-destination'].$post(args, options),
  )
}

export async function getV1UsersUserIdSubscriptions(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].subscriptions.$get(args, options))
}

export async function postV1WorkflowsKeyCancel(
  args: InferRequestType<(typeof client.v1.workflows)[':key']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':key'].cancel.$post(args, options))
}

export async function putV1UsersUserIdGuidesMessagesArchived(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].guides.messages.archived.$put(args, options),
  )
}

export async function deleteV1UsersUserIdGuidesMessagesArchived(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].guides.messages.archived.$delete(args, options),
  )
}

export async function putV1UsersUserIdPreferencesIdChannelTypes(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].preferences[':id'].channel_types.$put(args, options),
  )
}

export async function putV1ObjectsCollectionObjectIdPreferencesIdCategories(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].preferences[':id'].categories.$put(
      args,
      options,
    ),
  )
}

export async function getV1Messages(
  args: InferRequestType<typeof client.v1.messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages.$get(args, options))
}

export async function putV1UsersUserIdPreferencesIdChannelTypesType(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types'][':type']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].preferences[':id'].channel_types[':type'].$put(args, options),
  )
}

export async function getV1ProvidersMsTeamsChannelIdChannels(
  args: InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.providers['ms-teams'][':channel_id'].channels.$get(args, options),
  )
}

export async function putV1MessagesMessageIdInteracted(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['interacted']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].interacted.$put(args, options))
}

export async function getV1MessagesMessageIdEvents(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].events.$get(args, options))
}

export async function getV1UsersUserIdMessages(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].messages.$get(args, options))
}

export async function putV1ProvidersSlackChannelIdRevokeAccess(
  args: InferRequestType<
    (typeof client.v1.providers.slack)[':channel_id']['revoke_access']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.providers.slack[':channel_id'].revoke_access.$put(args, options),
  )
}

export async function postV1ObjectsCollectionBulkDelete(
  args: InferRequestType<(typeof client.v1.objects)[':collection']['bulk']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.objects[':collection'].bulk.delete.$post(args, options))
}

export async function putV1UsersUserIdPreferencesIdWorkflows(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].preferences[':id'].workflows.$put(args, options),
  )
}

export async function getV1UsersUserIdGuidesChannelId(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].guides[':channel_id'].$get(args, options))
}

export async function getV1UsersUserIdSchedules(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].schedules.$get(args, options))
}

export async function putV1ObjectsCollectionObjectIdPreferencesIdCategoriesKey(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].preferences[':id'].categories[':key'].$put(
      args,
      options,
    ),
  )
}

export async function putV1UsersUserIdPreferencesIdCategoriesKey(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['preferences'][':id']['categories'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].preferences[':id'].categories[':key'].$put(args, options),
  )
}

export async function getV1MessagesMessageIdContent(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].content.$get(args, options))
}

export async function getV1ProvidersMsTeamsChannelIdAuthCheck(
  args: InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.providers['ms-teams'][':channel_id'].auth_check.$get(args, options),
  )
}

export async function putV1ProvidersMsTeamsChannelIdRevokeAccess(
  args: InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['revoke_access']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.providers['ms-teams'][':channel_id'].revoke_access.$put(args, options),
  )
}

export async function getV1UsersUserIdFeedsIdSettings(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].feeds[':id'].settings.$get(args, options))
}

export async function putV1UsersUserIdGuidesEngagementsReset(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['guides']['engagements']['reset']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].guides.engagements.reset.$put(args, options),
  )
}

export async function getV1ObjectsCollectionObjectIdPreferences(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].preferences.$get(args, options),
  )
}

export async function getV1MessagesMessageIdActivities(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].activities.$get(args, options))
}

export async function getV1Tenants(
  args: InferRequestType<typeof client.v1.tenants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tenants.$get(args, options))
}

export async function putV1ObjectsCollectionObjectIdPreferencesIdWorkflows(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].preferences[':id'].workflows.$put(args, options),
  )
}

export async function getV1ObjectsCollectionIdMessages(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.objects[':collection'][':id'].messages.$get(args, options))
}

export async function postV1Notify(
  args: InferRequestType<typeof client.v1.notify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notify.$post(args, options))
}

export async function postV1MessagesBatchArchived(
  args: InferRequestType<typeof client.v1.messages.batch.archived.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages.batch.archived.$post(args, options))
}

export async function getV1UsersUserIdFeedsId(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].feeds[':id'].$get(args, options))
}

export async function postV1MessagesBatchUnarchived(
  args: InferRequestType<typeof client.v1.messages.batch.unarchived.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages.batch.unarchived.$post(args, options))
}

export async function getV1ProvidersMsTeamsChannelIdTeams(
  args: InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.providers['ms-teams'][':channel_id'].teams.$get(args, options),
  )
}

export async function postV1UsersUserIdMerge(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].merge.$post(args, options))
}

export async function postV1ObjectsCollectionBulkSubscriptionsDelete(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'].bulk.subscriptions.delete.$post(args, options),
  )
}

export async function putV1UsersUserIdPreferencesIdCategories(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['preferences'][':id']['categories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].preferences[':id'].categories.$put(args, options),
  )
}

export async function getV1ObjectsCollection(
  args: InferRequestType<(typeof client.v1.objects)[':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.objects[':collection'].$get(args, options))
}

export async function getV1Users(
  args: InferRequestType<typeof client.v1.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.$get(args, options))
}

export async function getV1WorkflowRecipientRunsId(
  args: InferRequestType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflow_recipient_runs[':id'].$get(args, options))
}

export async function putV1MessagesMessageIdSeen(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['seen']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].seen.$put(args, options))
}

export async function deleteV1MessagesMessageIdSeen(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['seen']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].seen.$delete(args, options))
}

export async function getV1ProvidersSlackChannelIdAuthCheck(
  args: InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.providers.slack[':channel_id'].auth_check.$get(args, options),
  )
}

export async function postV1UsersBulkDelete(
  args: InferRequestType<typeof client.v1.users.bulk.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.bulk.delete.$post(args, options))
}

export async function postV1NotifyCancel(
  args: InferRequestType<typeof client.v1.notify.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notify.cancel.$post(args, options))
}

export async function putV1ObjectsCollectionObjectIdPreferencesIdChannelTypesType(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types'][':type']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].preferences[':id'].channel_types[':type'].$put(
      args,
      options,
    ),
  )
}

export async function putV1ObjectsCollectionObjectIdPreferencesIdChannelTypes(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].preferences[':id'].channel_types.$put(
      args,
      options,
    ),
  )
}

export async function postV1UsersBulkIdentify(
  args: InferRequestType<typeof client.v1.users.bulk.identify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.bulk.identify.$post(args, options))
}

export async function postV1TenantsBulkSet(
  args: InferRequestType<typeof client.v1.tenants.bulk.set.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tenants.bulk.set.$post(args, options))
}

export async function getV1AudiencesKeyMembers(
  args: InferRequestType<(typeof client.v1.audiences)[':key']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audiences[':key'].members.$get(args, options))
}

export async function postV1AudiencesKeyMembers(
  args: InferRequestType<(typeof client.v1.audiences)[':key']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audiences[':key'].members.$post(args, options))
}

export async function deleteV1AudiencesKeyMembers(
  args: InferRequestType<(typeof client.v1.audiences)[':key']['members']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audiences[':key'].members.$delete(args, options))
}

export async function putV1MessagesMessageIdArchived(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['archived']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].archived.$put(args, options))
}

export async function deleteV1MessagesMessageIdArchived(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['archived']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].archived.$delete(args, options))
}

export async function postV1WorkflowsKeyTrigger(
  args: InferRequestType<(typeof client.v1.workflows)[':key']['trigger']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':key'].trigger.$post(args, options))
}

export async function putV1UsersUserIdGuidesMessagesMessageIdArchived(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['archived']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].guides.messages[':message_id'].archived.$put(args, options),
  )
}

export async function postV1TenantsBulkDelete(
  args: InferRequestType<typeof client.v1.tenants.bulk.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tenants.bulk.delete.$post(args, options))
}

export async function deleteV1MessagesMessageIdUnread(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['unread']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].unread.$delete(args, options))
}

export async function getV1UsersUserId(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].$get(args, options))
}

export async function putV1UsersUserId(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].$put(args, options))
}

export async function deleteV1UsersUserId(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].$delete(args, options))
}

export async function postV1MessagesBatchInteracted(
  args: InferRequestType<typeof client.v1.messages.batch.interacted.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages.batch.interacted.$post(args, options))
}

export async function getV1TenantsId(
  args: InferRequestType<(typeof client.v1.tenants)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tenants[':id'].$get(args, options))
}

export async function putV1TenantsId(
  args: InferRequestType<(typeof client.v1.tenants)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tenants[':id'].$put(args, options))
}

export async function deleteV1TenantsId(
  args: InferRequestType<(typeof client.v1.tenants)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tenants[':id'].$delete(args, options))
}

export async function putV1UsersUserIdGuidesMessagesSeen(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['guides']['messages']['seen']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].guides.messages.seen.$put(args, options))
}

export async function deleteV1MessagesMessageIdUnseen(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['unseen']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].unseen.$delete(args, options))
}

export async function getV1ObjectsCollectionObjectIdSubscriptions(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].subscriptions.$get(args, options),
  )
}

export async function postV1ObjectsCollectionObjectIdSubscriptions(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].subscriptions.$post(args, options),
  )
}

export async function deleteV1ObjectsCollectionObjectIdSubscriptions(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].subscriptions.$delete(args, options),
  )
}

export async function putV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKey(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].preferences[':id'].workflows[':key'].$put(
      args,
      options,
    ),
  )
}

export async function putV1MessagesMessageIdRead(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['read']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].read.$put(args, options))
}

export async function deleteV1MessagesMessageIdRead(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['read']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].read.$delete(args, options))
}

export async function getV1UsersUserIdPreferenceCenterConfig(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['preference_center']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].preference_center.config.$get(args, options),
  )
}

export async function getV1UsersUserIdChannelDataChannelId(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].channel_data[':channel_id'].$get(args, options),
  )
}

export async function putV1UsersUserIdChannelDataChannelId(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].channel_data[':channel_id'].$put(args, options),
  )
}

export async function deleteV1UsersUserIdChannelDataChannelId(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].channel_data[':channel_id'].$delete(args, options),
  )
}

export async function putV1UsersUserIdPreferencesIdWorkflowsKey(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].preferences[':id'].workflows[':key'].$put(args, options),
  )
}

export async function getV1Schedules(
  args: InferRequestType<typeof client.v1.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.schedules.$get(args, options))
}

export async function putV1Schedules(
  args: InferRequestType<typeof client.v1.schedules.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.schedules.$put(args, options))
}

export async function postV1Schedules(
  args: InferRequestType<typeof client.v1.schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.schedules.$post(args, options))
}

export async function deleteV1Schedules(
  args: InferRequestType<typeof client.v1.schedules.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.schedules.$delete(args, options))
}

export async function getV1ObjectsCollectionObjectIdPreferencesId(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].preferences[':id'].$get(args, options),
  )
}

export async function putV1ObjectsCollectionObjectIdPreferencesId(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].preferences[':id'].$put(args, options),
  )
}

export async function deleteV1ObjectsCollectionObjectIdPreferencesId(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].preferences[':id'].$delete(args, options),
  )
}

export async function putV1UsersUserIdGuidesMessagesMessageIdSeen(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['seen']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].guides.messages[':message_id'].seen.$put(args, options),
  )
}

export async function postV1ObjectsCollectionBulkSet(
  args: InferRequestType<(typeof client.v1.objects)[':collection']['bulk']['set']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.objects[':collection'].bulk.set.$post(args, options))
}

export async function postV1IntegrationsHightouchEmbeddedDestination(
  args: InferRequestType<
    (typeof client.v1.integrations.hightouch)['embedded-destination']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.integrations.hightouch['embedded-destination'].$post(args, options),
  )
}

export async function postV1MessagesBatchUnseen(
  args: InferRequestType<typeof client.v1.messages.batch.unseen.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages.batch.unseen.$post(args, options))
}

export async function getV1ObjectsCollectionIdSchedules(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.objects[':collection'][':id'].schedules.$get(args, options))
}

export async function postV1SchedulesBulkCreate(
  args: InferRequestType<typeof client.v1.schedules.bulk.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.schedules.bulk.create.$post(args, options))
}

export async function getV1ObjectsCollectionObjectIdChannelDataChannelId(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].channel_data[':channel_id'].$get(args, options),
  )
}

export async function putV1ObjectsCollectionObjectIdChannelDataChannelId(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].channel_data[':channel_id'].$put(args, options),
  )
}

export async function deleteV1ObjectsCollectionObjectIdChannelDataChannelId(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'][':object_id'].channel_data[':channel_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1MessagesBatchUnread(
  args: InferRequestType<typeof client.v1.messages.batch.unread.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages.batch.unread.$post(args, options))
}

export async function getV1ProvidersSlackChannelIdChannels(
  args: InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.providers.slack[':channel_id'].channels.$get(args, options))
}

export async function getV1WorkflowRecipientRuns(
  args: InferRequestType<typeof client.v1.workflow_recipient_runs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflow_recipient_runs.$get(args, options))
}

export async function postV1MessagesBatchSeen(
  args: InferRequestType<typeof client.v1.messages.batch.seen.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages.batch.seen.$post(args, options))
}

export async function postV1UsersBulkPreferences(
  args: InferRequestType<typeof client.v1.users.bulk.preferences.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.bulk.preferences.$post(args, options))
}

export async function postV1MessagesBatchRead(
  args: InferRequestType<typeof client.v1.messages.batch.read.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages.batch.read.$post(args, options))
}

export async function getV1MessagesBatchContent(
  args: InferRequestType<typeof client.v1.messages.batch.content.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages.batch.content.$get(args, options))
}

export async function getV1MessagesMessageIdDeliveryLogs(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].delivery_logs.$get(args, options))
}

export async function putV1UsersUserIdGuidesMessagesMessageIdInteracted(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['interacted']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].guides.messages[':message_id'].interacted.$put(args, options),
  )
}

export async function getV1MessagesMessageId(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].$get(args, options))
}

export async function postV1ChannelsChannelIdMessagesBulkAction(
  args: InferRequestType<
    (typeof client.v1.channels)[':channel_id']['messages']['bulk'][':action']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.channels[':channel_id'].messages.bulk[':action'].$post(args, options),
  )
}

export async function deleteV1MessagesMessageIdUnarchived(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['unarchived']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.messages[':message_id'].unarchived.$delete(args, options))
}

export async function getV1BulkOperationsId(
  args: InferRequestType<(typeof client.v1.bulk_operations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bulk_operations[':id'].$get(args, options))
}

export async function getV1UsersUserIdPreferences(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].preferences.$get(args, options))
}

export async function getV1UsersUserIdPreferencesId(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].preferences[':id'].$get(args, options))
}

export async function putV1UsersUserIdPreferencesId(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].preferences[':id'].$put(args, options))
}

export async function deleteV1UsersUserIdPreferencesId(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':user_id'].preferences[':id'].$delete(args, options))
}

export async function postV1ObjectsCollectionBulkSubscriptionsAdd(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['add']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.objects[':collection'].bulk.subscriptions.add.$post(args, options),
  )
}

export async function postV1UsersUserIdPreferenceCenterSignedUrl(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['preference_center']['signed_url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':user_id'].preference_center.signed_url.$post(args, options),
  )
}

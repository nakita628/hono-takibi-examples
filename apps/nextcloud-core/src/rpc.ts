import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOcsV2PhpCoreGetapppassword(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['getapppassword']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].core.getapppassword.$get(args, options))
}

export async function deleteOcsV2PhpCoreApppassword(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['apppassword']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].core.apppassword.$delete(args, options))
}

export async function postOcsV2PhpCoreApppasswordRotate(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['apppassword']['rotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].core.apppassword.rotate.$post(args, options))
}

export async function putOcsV2PhpCoreApppasswordConfirm(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['apppassword']['confirm']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].core.apppassword.confirm.$put(args, options))
}

export async function getOcsV2PhpCoreGetapppasswordOnetime(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['getapppassword-onetime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].core['getapppassword-onetime'].$get(args, options),
  )
}

export async function getOcsV2PhpCoreAutocompleteGet(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['autocomplete']['get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].core.autocomplete.get.$get(args, options))
}

export async function getOcsV2PhpCollaborationResourcesCollectionsCollectionId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].collaboration.resources.collections[':collectionId'].$get(args, options),
  )
}

export async function putOcsV2PhpCollaborationResourcesCollectionsCollectionId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].collaboration.resources.collections[':collectionId'].$put(args, options),
  )
}

export async function postOcsV2PhpCollaborationResourcesCollectionsCollectionId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].collaboration.resources.collections[':collectionId'].$post(args, options),
  )
}

export async function deleteOcsV2PhpCollaborationResourcesCollectionsCollectionId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections'][':collectionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].collaboration.resources.collections[':collectionId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpCollaborationResourcesCollectionsSearchFilter(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources']['collections']['search'][':filter']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].collaboration.resources.collections.search[':filter'].$get(args, options),
  )
}

export async function getOcsV2PhpCollaborationResourcesResourceTypeResourceId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources'][':resourceType'][':resourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].collaboration.resources[':resourceType'][':resourceId'].$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['collaboration']['resources'][':baseResourceType'][':baseResourceId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].collaboration.resources[':baseResourceType'][':baseResourceId'].$post(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpHovercardV1UserId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['hovercard']['v1'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].hovercard.v1[':userId'].$get(args, options))
}

export async function getOcsV2PhpCoreNavigationApps(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['navigation']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].core.navigation.apps.$get(args, options))
}

export async function getOcsV2PhpCoreNavigationSettings(
  args: InferRequestType<(typeof client.ocs)['v2.php']['core']['navigation']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].core.navigation.settings.$get(args, options))
}

export async function getOcsV2PhpCloudCapabilities(
  args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['capabilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].cloud.capabilities.$get(args, options))
}

export async function getOcsV2PhpProfileTargetUserId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].profile[':targetUserId'].$get(args, options))
}

export async function putOcsV2PhpProfileTargetUserId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['profile'][':targetUserId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].profile[':targetUserId'].$put(args, options))
}

export async function postOcsV2PhpReferencesExtract(
  args: InferRequestType<(typeof client.ocs)['v2.php']['references']['extract']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].references.extract.$post(args, options))
}

export async function postOcsV2PhpReferencesExtractPublic(
  args: InferRequestType<(typeof client.ocs)['v2.php']['references']['extractPublic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].references.extractPublic.$post(args, options))
}

export async function getOcsV2PhpReferencesResolve(
  args: InferRequestType<(typeof client.ocs)['v2.php']['references']['resolve']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].references.resolve.$get(args, options))
}

export async function postOcsV2PhpReferencesResolve(
  args: InferRequestType<(typeof client.ocs)['v2.php']['references']['resolve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].references.resolve.$post(args, options))
}

export async function getOcsV2PhpReferencesResolvePublic(
  args: InferRequestType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].references.resolvePublic.$get(args, options))
}

export async function postOcsV2PhpReferencesResolvePublic(
  args: InferRequestType<(typeof client.ocs)['v2.php']['references']['resolvePublic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].references.resolvePublic.$post(args, options))
}

export async function getOcsV2PhpReferencesProviders(
  args: InferRequestType<(typeof client.ocs)['v2.php']['references']['providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].references.providers.$get(args, options))
}

export async function putOcsV2PhpReferencesProviderProviderId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['references']['provider'][':providerId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].references.provider[':providerId'].$put(args, options),
  )
}

export async function getOcsV2PhpTaskprocessingTasktypes(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['tasktypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].taskprocessing.tasktypes.$get(args, options))
}

export async function postOcsV2PhpTaskprocessingSchedule(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['schedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].taskprocessing.schedule.$post(args, options))
}

export async function getOcsV2PhpTaskprocessingTaskId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].taskprocessing.task[':id'].$get(args, options))
}

export async function deleteOcsV2PhpTaskprocessingTaskId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['task'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].taskprocessing.task[':id'].$delete(args, options))
}

export async function getOcsV2PhpTaskprocessingTasksAppAppId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks']['app'][':appId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks.app[':appId'].$get(args, options),
  )
}

export async function getOcsV2PhpTaskprocessingTasks(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].taskprocessing.tasks.$get(args, options))
}

export async function getOcsV2PhpTaskprocessingTasksTaskIdFileFileId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['file'][':fileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks[':taskId'].file[':fileId'].$get(args, options),
  )
}

export async function postOcsV2PhpTaskprocessingTasksTaskIdCancel(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks[':taskId'].cancel.$post(args, options),
  )
}

export async function getOcsV2PhpTaskprocessingTasksTaskIdQueuePosition(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks'][':taskId']['queue_position']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks[':taskId'].queue_position.$get(args, options),
  )
}

export async function getOcsV2PhpTeamsTeamIdResources(
  args: InferRequestType<(typeof client.ocs)['v2.php']['teams'][':teamId']['resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].teams[':teamId'].resources.$get(args, options))
}

export async function getOcsV2PhpTeamsResourcesProviderIdResourceId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['teams']['resources'][':providerId'][':resourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].teams.resources[':providerId'][':resourceId'].$get(args, options),
  )
}

export async function getOcsV2PhpTextprocessingTasktypes(
  args: InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['tasktypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].textprocessing.tasktypes.$get(args, options))
}

export async function postOcsV2PhpTextprocessingSchedule(
  args: InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['schedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].textprocessing.schedule.$post(args, options))
}

export async function getOcsV2PhpTextprocessingTaskId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].textprocessing.task[':id'].$get(args, options))
}

export async function deleteOcsV2PhpTextprocessingTaskId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['textprocessing']['task'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].textprocessing.task[':id'].$delete(args, options))
}

export async function getOcsV2PhpTextprocessingTasksAppAppId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['textprocessing']['tasks']['app'][':appId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].textprocessing.tasks.app[':appId'].$get(args, options),
  )
}

export async function getOcsV2PhpText2imageIsAvailable(
  args: InferRequestType<(typeof client.ocs)['v2.php']['text2image']['is_available']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].text2image.is_available.$get(args, options))
}

export async function postOcsV2PhpText2imageSchedule(
  args: InferRequestType<(typeof client.ocs)['v2.php']['text2image']['schedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].text2image.schedule.$post(args, options))
}

export async function getOcsV2PhpText2imageTaskId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].text2image.task[':id'].$get(args, options))
}

export async function deleteOcsV2PhpText2imageTaskId(
  args: InferRequestType<(typeof client.ocs)['v2.php']['text2image']['task'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].text2image.task[':id'].$delete(args, options))
}

export async function getOcsV2PhpText2imageTaskIdImageIndex(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['text2image']['task'][':id']['image'][':index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].text2image.task[':id'].image[':index'].$get(args, options),
  )
}

export async function getOcsV2PhpText2imageTasksAppAppId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['text2image']['tasks']['app'][':appId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].text2image.tasks.app[':appId'].$get(args, options),
  )
}

export async function getOcsV2PhpTranslationLanguages(
  args: InferRequestType<(typeof client.ocs)['v2.php']['translation']['languages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].translation.languages.$get(args, options))
}

export async function postOcsV2PhpTranslationTranslate(
  args: InferRequestType<(typeof client.ocs)['v2.php']['translation']['translate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].translation.translate.$post(args, options))
}

export async function getOcsV2PhpSearchProviders(
  args: InferRequestType<(typeof client.ocs)['v2.php']['search']['providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].search.providers.$get(args, options))
}

export async function getOcsV2PhpSearchProvidersProviderIdSearch(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['search']['providers'][':providerId']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].search.providers[':providerId'].search.$get(args, options),
  )
}

export async function getIndexPhpAvatarUserIdSizeDark(
  args: InferRequestType<
    (typeof client)['index.php']['avatar'][':userId'][':size']['dark']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['index.php'].avatar[':userId'][':size'].dark.$get(args, options),
  )
}

export async function getIndexPhpAvatarUserIdSize(
  args: InferRequestType<(typeof client)['index.php']['avatar'][':userId'][':size']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].avatar[':userId'][':size'].$get(args, options))
}

export async function getIndexPhpCsrftoken(options?: ClientRequestOptions) {
  return await parseResponse(client['index.php'].csrftoken.$get(undefined, options))
}

export async function postIndexPhpLoginV2Poll(
  args: InferRequestType<(typeof client)['index.php']['login']['v2']['poll']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].login.v2.poll.$post(args, options))
}

export async function postIndexPhpLoginV2(
  args: InferRequestType<(typeof client)['index.php']['login']['v2']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].login.v2.$post(args, options))
}

export async function getIndexPhpAvatarGuestGuestNameSize(
  args: InferRequestType<
    (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['index.php'].avatar.guest[':guestName'][':size'].$get(args, options),
  )
}

export async function getIndexPhpAvatarGuestGuestNameSizeDark(
  args: InferRequestType<
    (typeof client)['index.php']['avatar']['guest'][':guestName'][':size']['dark']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['index.php'].avatar.guest[':guestName'][':size'].dark.$get(args, options),
  )
}

export async function postIndexPhpLoginConfirm(
  args: InferRequestType<(typeof client)['index.php']['login']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].login.confirm.$post(args, options))
}

export async function getIndexPhpOcmProvider(options?: ClientRequestOptions) {
  return await parseResponse(client['index.php']['ocm-provider'].$get(undefined, options))
}

export async function getIndexPhpCorePreviewPng(
  args: InferRequestType<(typeof client)['index.php']['core']['preview.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].core['preview.png'].$get(args, options))
}

export async function getIndexPhpCorePreview(
  args: InferRequestType<(typeof client)['index.php']['core']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].core.preview.$get(args, options))
}

export async function getIndexPhpCoreMimeicon(
  args: InferRequestType<(typeof client)['index.php']['core']['mimeicon']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].core.mimeicon.$get(args, options))
}

export async function getIndexPhpCoreReferencesPreviewReferenceId(
  args: InferRequestType<
    (typeof client)['index.php']['core']['references']['preview'][':referenceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['index.php'].core.references.preview[':referenceId'].$get(args, options),
  )
}

export async function postIndexPhpCoreWipeCheck(
  args: InferRequestType<(typeof client)['index.php']['core']['wipe']['check']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].core.wipe.check.$post(args, options))
}

export async function postIndexPhpCoreWipeSuccess(
  args: InferRequestType<(typeof client)['index.php']['core']['wipe']['success']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].core.wipe.success.$post(args, options))
}

export async function getStatusPhp(options?: ClientRequestOptions) {
  return await parseResponse(client['status.php'].$get(undefined, options))
}

export async function getOcsV2PhpTaskprocessingTasksConsumerTasktypes(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasktypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks_consumer.tasktypes.$get(args, options),
  )
}

export async function postOcsV2PhpTaskprocessingTasksConsumerSchedule(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['schedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks_consumer.schedule.$post(args, options),
  )
}

export async function getOcsV2PhpTaskprocessingTasksConsumerTaskId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks_consumer.task[':id'].$get(args, options),
  )
}

export async function deleteOcsV2PhpTaskprocessingTasksConsumerTaskId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['task'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks_consumer.task[':id'].$delete(args, options),
  )
}

export async function getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file'][':fileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks_provider[':taskId'].file[':fileId'].$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpTaskprocessingTasksProviderTaskIdFile(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['file']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks_provider[':taskId'].file.$post(args, options),
  )
}

export async function postOcsV2PhpTaskprocessingTasksProviderTaskIdProgress(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['progress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks_provider[':taskId'].progress.$post(args, options),
  )
}

export async function postOcsV2PhpTaskprocessingTasksProviderTaskIdResult(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['result']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks_provider[':taskId'].result.$post(args, options),
  )
}

export async function postOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResult(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider'][':taskId']['stream-result']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks_provider[':taskId']['stream-result'].$post(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancel(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_consumer']['tasks'][':taskId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks_consumer.tasks[':taskId'].cancel.$post(args, options),
  )
}

export async function getOcsV2PhpTaskprocessingTasksProviderNext(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks_provider.next.$get(args, options),
  )
}

export async function getOcsV2PhpTaskprocessingTasksProviderNextBatch(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['taskprocessing']['tasks_provider']['next_batch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].taskprocessing.tasks_provider.next_batch.$get(args, options),
  )
}

export async function getOcsV2PhpTaskprocessingQueueStats(
  args: InferRequestType<(typeof client.ocs)['v2.php']['taskprocessing']['queue_stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].taskprocessing.queue_stats.$get(args, options))
}

export async function getOcsV2PhpTwofactorState(
  args: InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].twofactor.state.$get(args, options))
}

export async function postOcsV2PhpTwofactorEnable(
  args: InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].twofactor.enable.$post(args, options))
}

export async function postOcsV2PhpTwofactorDisable(
  args: InferRequestType<(typeof client.ocs)['v2.php']['twofactor']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].twofactor.disable.$post(args, options))
}

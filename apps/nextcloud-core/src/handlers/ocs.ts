import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute,
  deleteOcsV2PhpCoreApppasswordRoute,
  deleteOcsV2PhpTaskprocessingTaskIdRoute,
  deleteOcsV2PhpTaskprocessingTasksConsumerTaskIdRoute,
  deleteOcsV2PhpText2imageTaskIdRoute,
  deleteOcsV2PhpTextprocessingTaskIdRoute,
  getOcsV2PhpCloudCapabilitiesRoute,
  getOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute,
  getOcsV2PhpCollaborationResourcesCollectionsSearchFilterRoute,
  getOcsV2PhpCollaborationResourcesResourceTypeResourceIdRoute,
  getOcsV2PhpCoreAutocompleteGetRoute,
  getOcsV2PhpCoreGetapppasswordOnetimeRoute,
  getOcsV2PhpCoreGetapppasswordRoute,
  getOcsV2PhpCoreNavigationAppsRoute,
  getOcsV2PhpCoreNavigationSettingsRoute,
  getOcsV2PhpHovercardV1UserIdRoute,
  getOcsV2PhpProfileTargetUserIdRoute,
  getOcsV2PhpReferencesProvidersRoute,
  getOcsV2PhpReferencesResolvePublicRoute,
  getOcsV2PhpReferencesResolveRoute,
  getOcsV2PhpSearchProvidersProviderIdSearchRoute,
  getOcsV2PhpSearchProvidersRoute,
  getOcsV2PhpTaskprocessingQueueStatsRoute,
  getOcsV2PhpTaskprocessingTaskIdRoute,
  getOcsV2PhpTaskprocessingTasksAppAppIdRoute,
  getOcsV2PhpTaskprocessingTasksConsumerTaskIdRoute,
  getOcsV2PhpTaskprocessingTasksConsumerTasktypesRoute,
  getOcsV2PhpTaskprocessingTasksProviderNextBatchRoute,
  getOcsV2PhpTaskprocessingTasksProviderNextRoute,
  getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdRoute,
  getOcsV2PhpTaskprocessingTasksRoute,
  getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdRoute,
  getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionRoute,
  getOcsV2PhpTaskprocessingTasktypesRoute,
  getOcsV2PhpTeamsResourcesProviderIdResourceIdRoute,
  getOcsV2PhpTeamsTeamIdResourcesRoute,
  getOcsV2PhpText2imageIsAvailableRoute,
  getOcsV2PhpText2imageTaskIdImageIndexRoute,
  getOcsV2PhpText2imageTaskIdRoute,
  getOcsV2PhpText2imageTasksAppAppIdRoute,
  getOcsV2PhpTextprocessingTaskIdRoute,
  getOcsV2PhpTextprocessingTasksAppAppIdRoute,
  getOcsV2PhpTextprocessingTasktypesRoute,
  getOcsV2PhpTranslationLanguagesRoute,
  getOcsV2PhpTwofactorStateRoute,
  postOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceIdRoute,
  postOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute,
  postOcsV2PhpCoreApppasswordRotateRoute,
  postOcsV2PhpReferencesExtractPublicRoute,
  postOcsV2PhpReferencesExtractRoute,
  postOcsV2PhpReferencesResolvePublicRoute,
  postOcsV2PhpReferencesResolveRoute,
  postOcsV2PhpTaskprocessingScheduleRoute,
  postOcsV2PhpTaskprocessingTasksConsumerScheduleRoute,
  postOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancelRoute,
  postOcsV2PhpTaskprocessingTasksProviderTaskIdFileRoute,
  postOcsV2PhpTaskprocessingTasksProviderTaskIdProgressRoute,
  postOcsV2PhpTaskprocessingTasksProviderTaskIdResultRoute,
  postOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResultRoute,
  postOcsV2PhpTaskprocessingTasksTaskIdCancelRoute,
  postOcsV2PhpText2imageScheduleRoute,
  postOcsV2PhpTextprocessingScheduleRoute,
  postOcsV2PhpTranslationTranslateRoute,
  postOcsV2PhpTwofactorDisableRoute,
  postOcsV2PhpTwofactorEnableRoute,
  putOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute,
  putOcsV2PhpCoreApppasswordConfirmRoute,
  putOcsV2PhpProfileTargetUserIdRoute,
  putOcsV2PhpReferencesProviderProviderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app
  .openapi(getOcsV2PhpCoreGetapppasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpCoreApppasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCoreApppasswordRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpCoreApppasswordConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCoreGetapppasswordOnetimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCoreAutocompleteGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCollaborationResourcesCollectionsSearchFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCollaborationResourcesResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpHovercardV1UserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCoreNavigationAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCoreNavigationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpProfileTargetUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpProfileTargetUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpReferencesExtractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpReferencesExtractPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpReferencesResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpReferencesResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpReferencesResolvePublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpReferencesResolvePublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpReferencesProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpReferencesProviderProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasktypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpTaskprocessingTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksAppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTeamsTeamIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTeamsResourcesProviderIdResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTextprocessingTasktypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTextprocessingScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTextprocessingTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpTextprocessingTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTextprocessingTasksAppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpText2imageIsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpText2imageScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpText2imageTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpText2imageTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpText2imageTaskIdImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpText2imageTasksAppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTranslationLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTranslationTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpSearchProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpSearchProvidersProviderIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksConsumerTasktypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksConsumerScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksConsumerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpTaskprocessingTasksConsumerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksProviderTaskIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksProviderTaskIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksProviderTaskIdResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksProviderNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksProviderNextBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingQueueStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTwofactorStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTwofactorEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTwofactorDisableRoute, (c) => {
    throw new Error('Not implemented')
  })

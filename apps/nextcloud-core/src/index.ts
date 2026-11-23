import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute,
  deleteOcsV2PhpCoreApppasswordRoute,
  deleteOcsV2PhpTaskprocessingTaskIdRoute,
  deleteOcsV2PhpTaskprocessingTasksConsumerTaskIdRoute,
  deleteOcsV2PhpText2imageTaskIdRoute,
  deleteOcsV2PhpTextprocessingTaskIdRoute,
  getIndexPhpAvatarGuestGuestNameSizeDarkRoute,
  getIndexPhpAvatarGuestGuestNameSizeRoute,
  getIndexPhpAvatarUserIdSizeDarkRoute,
  getIndexPhpAvatarUserIdSizeRoute,
  getIndexPhpCoreMimeiconRoute,
  getIndexPhpCorePreviewPngRoute,
  getIndexPhpCorePreviewRoute,
  getIndexPhpCoreReferencesPreviewReferenceIdRoute,
  getIndexPhpCsrftokenRoute,
  getIndexPhpOcmProviderRoute,
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
  getStatusPhpRoute,
  postIndexPhpCoreWipeCheckRoute,
  postIndexPhpCoreWipeSuccessRoute,
  postIndexPhpLoginConfirmRoute,
  postIndexPhpLoginV2PollRoute,
  postIndexPhpLoginV2Route,
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
} from './routes'
import {
  deleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdRouteHandler,
  deleteOcsV2PhpCoreApppasswordRouteHandler,
  deleteOcsV2PhpTaskprocessingTaskIdRouteHandler,
  deleteOcsV2PhpTaskprocessingTasksConsumerTaskIdRouteHandler,
  deleteOcsV2PhpText2imageTaskIdRouteHandler,
  deleteOcsV2PhpTextprocessingTaskIdRouteHandler,
  getIndexPhpAvatarGuestGuestNameSizeDarkRouteHandler,
  getIndexPhpAvatarGuestGuestNameSizeRouteHandler,
  getIndexPhpAvatarUserIdSizeDarkRouteHandler,
  getIndexPhpAvatarUserIdSizeRouteHandler,
  getIndexPhpCoreMimeiconRouteHandler,
  getIndexPhpCorePreviewPngRouteHandler,
  getIndexPhpCorePreviewRouteHandler,
  getIndexPhpCoreReferencesPreviewReferenceIdRouteHandler,
  getIndexPhpCsrftokenRouteHandler,
  getIndexPhpOcmProviderRouteHandler,
  getOcsV2PhpCloudCapabilitiesRouteHandler,
  getOcsV2PhpCollaborationResourcesCollectionsCollectionIdRouteHandler,
  getOcsV2PhpCollaborationResourcesCollectionsSearchFilterRouteHandler,
  getOcsV2PhpCollaborationResourcesResourceTypeResourceIdRouteHandler,
  getOcsV2PhpCoreAutocompleteGetRouteHandler,
  getOcsV2PhpCoreGetapppasswordOnetimeRouteHandler,
  getOcsV2PhpCoreGetapppasswordRouteHandler,
  getOcsV2PhpCoreNavigationAppsRouteHandler,
  getOcsV2PhpCoreNavigationSettingsRouteHandler,
  getOcsV2PhpHovercardV1UserIdRouteHandler,
  getOcsV2PhpProfileTargetUserIdRouteHandler,
  getOcsV2PhpReferencesProvidersRouteHandler,
  getOcsV2PhpReferencesResolvePublicRouteHandler,
  getOcsV2PhpReferencesResolveRouteHandler,
  getOcsV2PhpSearchProvidersProviderIdSearchRouteHandler,
  getOcsV2PhpSearchProvidersRouteHandler,
  getOcsV2PhpTaskprocessingQueueStatsRouteHandler,
  getOcsV2PhpTaskprocessingTaskIdRouteHandler,
  getOcsV2PhpTaskprocessingTasksAppAppIdRouteHandler,
  getOcsV2PhpTaskprocessingTasksConsumerTaskIdRouteHandler,
  getOcsV2PhpTaskprocessingTasksConsumerTasktypesRouteHandler,
  getOcsV2PhpTaskprocessingTasksProviderNextBatchRouteHandler,
  getOcsV2PhpTaskprocessingTasksProviderNextRouteHandler,
  getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdRouteHandler,
  getOcsV2PhpTaskprocessingTasksRouteHandler,
  getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdRouteHandler,
  getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionRouteHandler,
  getOcsV2PhpTaskprocessingTasktypesRouteHandler,
  getOcsV2PhpTeamsResourcesProviderIdResourceIdRouteHandler,
  getOcsV2PhpTeamsTeamIdResourcesRouteHandler,
  getOcsV2PhpText2imageIsAvailableRouteHandler,
  getOcsV2PhpText2imageTaskIdImageIndexRouteHandler,
  getOcsV2PhpText2imageTaskIdRouteHandler,
  getOcsV2PhpText2imageTasksAppAppIdRouteHandler,
  getOcsV2PhpTextprocessingTaskIdRouteHandler,
  getOcsV2PhpTextprocessingTasksAppAppIdRouteHandler,
  getOcsV2PhpTextprocessingTasktypesRouteHandler,
  getOcsV2PhpTranslationLanguagesRouteHandler,
  getOcsV2PhpTwofactorStateRouteHandler,
  getStatusPhpRouteHandler,
  postIndexPhpCoreWipeCheckRouteHandler,
  postIndexPhpCoreWipeSuccessRouteHandler,
  postIndexPhpLoginConfirmRouteHandler,
  postIndexPhpLoginV2PollRouteHandler,
  postIndexPhpLoginV2RouteHandler,
  postOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceIdRouteHandler,
  postOcsV2PhpCollaborationResourcesCollectionsCollectionIdRouteHandler,
  postOcsV2PhpCoreApppasswordRotateRouteHandler,
  postOcsV2PhpReferencesExtractPublicRouteHandler,
  postOcsV2PhpReferencesExtractRouteHandler,
  postOcsV2PhpReferencesResolvePublicRouteHandler,
  postOcsV2PhpReferencesResolveRouteHandler,
  postOcsV2PhpTaskprocessingScheduleRouteHandler,
  postOcsV2PhpTaskprocessingTasksConsumerScheduleRouteHandler,
  postOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancelRouteHandler,
  postOcsV2PhpTaskprocessingTasksProviderTaskIdFileRouteHandler,
  postOcsV2PhpTaskprocessingTasksProviderTaskIdProgressRouteHandler,
  postOcsV2PhpTaskprocessingTasksProviderTaskIdResultRouteHandler,
  postOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResultRouteHandler,
  postOcsV2PhpTaskprocessingTasksTaskIdCancelRouteHandler,
  postOcsV2PhpText2imageScheduleRouteHandler,
  postOcsV2PhpTextprocessingScheduleRouteHandler,
  postOcsV2PhpTranslationTranslateRouteHandler,
  postOcsV2PhpTwofactorDisableRouteHandler,
  postOcsV2PhpTwofactorEnableRouteHandler,
  putOcsV2PhpCollaborationResourcesCollectionsCollectionIdRouteHandler,
  putOcsV2PhpCoreApppasswordConfirmRouteHandler,
  putOcsV2PhpProfileTargetUserIdRouteHandler,
  putOcsV2PhpReferencesProviderProviderIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getOcsV2PhpCoreGetapppasswordRoute, getOcsV2PhpCoreGetapppasswordRouteHandler)
  .openapi(deleteOcsV2PhpCoreApppasswordRoute, deleteOcsV2PhpCoreApppasswordRouteHandler)
  .openapi(postOcsV2PhpCoreApppasswordRotateRoute, postOcsV2PhpCoreApppasswordRotateRouteHandler)
  .openapi(putOcsV2PhpCoreApppasswordConfirmRoute, putOcsV2PhpCoreApppasswordConfirmRouteHandler)
  .openapi(
    getOcsV2PhpCoreGetapppasswordOnetimeRoute,
    getOcsV2PhpCoreGetapppasswordOnetimeRouteHandler,
  )
  .openapi(getOcsV2PhpCoreAutocompleteGetRoute, getOcsV2PhpCoreAutocompleteGetRouteHandler)
  .openapi(
    getOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute,
    getOcsV2PhpCollaborationResourcesCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    postOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute,
    postOcsV2PhpCollaborationResourcesCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute,
    deleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    putOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute,
    putOcsV2PhpCollaborationResourcesCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    getOcsV2PhpCollaborationResourcesCollectionsSearchFilterRoute,
    getOcsV2PhpCollaborationResourcesCollectionsSearchFilterRouteHandler,
  )
  .openapi(
    getOcsV2PhpCollaborationResourcesResourceTypeResourceIdRoute,
    getOcsV2PhpCollaborationResourcesResourceTypeResourceIdRouteHandler,
  )
  .openapi(
    postOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceIdRoute,
    postOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceIdRouteHandler,
  )
  .openapi(getOcsV2PhpHovercardV1UserIdRoute, getOcsV2PhpHovercardV1UserIdRouteHandler)
  .openapi(getOcsV2PhpCoreNavigationAppsRoute, getOcsV2PhpCoreNavigationAppsRouteHandler)
  .openapi(getOcsV2PhpCoreNavigationSettingsRoute, getOcsV2PhpCoreNavigationSettingsRouteHandler)
  .openapi(getOcsV2PhpCloudCapabilitiesRoute, getOcsV2PhpCloudCapabilitiesRouteHandler)
  .openapi(putOcsV2PhpProfileTargetUserIdRoute, putOcsV2PhpProfileTargetUserIdRouteHandler)
  .openapi(getOcsV2PhpProfileTargetUserIdRoute, getOcsV2PhpProfileTargetUserIdRouteHandler)
  .openapi(postOcsV2PhpReferencesExtractRoute, postOcsV2PhpReferencesExtractRouteHandler)
  .openapi(
    postOcsV2PhpReferencesExtractPublicRoute,
    postOcsV2PhpReferencesExtractPublicRouteHandler,
  )
  .openapi(getOcsV2PhpReferencesResolveRoute, getOcsV2PhpReferencesResolveRouteHandler)
  .openapi(postOcsV2PhpReferencesResolveRoute, postOcsV2PhpReferencesResolveRouteHandler)
  .openapi(getOcsV2PhpReferencesResolvePublicRoute, getOcsV2PhpReferencesResolvePublicRouteHandler)
  .openapi(
    postOcsV2PhpReferencesResolvePublicRoute,
    postOcsV2PhpReferencesResolvePublicRouteHandler,
  )
  .openapi(getOcsV2PhpReferencesProvidersRoute, getOcsV2PhpReferencesProvidersRouteHandler)
  .openapi(
    putOcsV2PhpReferencesProviderProviderIdRoute,
    putOcsV2PhpReferencesProviderProviderIdRouteHandler,
  )
  .openapi(getOcsV2PhpTaskprocessingTasktypesRoute, getOcsV2PhpTaskprocessingTasktypesRouteHandler)
  .openapi(postOcsV2PhpTaskprocessingScheduleRoute, postOcsV2PhpTaskprocessingScheduleRouteHandler)
  .openapi(getOcsV2PhpTaskprocessingTaskIdRoute, getOcsV2PhpTaskprocessingTaskIdRouteHandler)
  .openapi(deleteOcsV2PhpTaskprocessingTaskIdRoute, deleteOcsV2PhpTaskprocessingTaskIdRouteHandler)
  .openapi(
    getOcsV2PhpTaskprocessingTasksAppAppIdRoute,
    getOcsV2PhpTaskprocessingTasksAppAppIdRouteHandler,
  )
  .openapi(getOcsV2PhpTaskprocessingTasksRoute, getOcsV2PhpTaskprocessingTasksRouteHandler)
  .openapi(
    getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdRoute,
    getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdRouteHandler,
  )
  .openapi(
    postOcsV2PhpTaskprocessingTasksTaskIdCancelRoute,
    postOcsV2PhpTaskprocessingTasksTaskIdCancelRouteHandler,
  )
  .openapi(
    getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionRoute,
    getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionRouteHandler,
  )
  .openapi(getOcsV2PhpTeamsTeamIdResourcesRoute, getOcsV2PhpTeamsTeamIdResourcesRouteHandler)
  .openapi(
    getOcsV2PhpTeamsResourcesProviderIdResourceIdRoute,
    getOcsV2PhpTeamsResourcesProviderIdResourceIdRouteHandler,
  )
  .openapi(getOcsV2PhpTextprocessingTasktypesRoute, getOcsV2PhpTextprocessingTasktypesRouteHandler)
  .openapi(postOcsV2PhpTextprocessingScheduleRoute, postOcsV2PhpTextprocessingScheduleRouteHandler)
  .openapi(getOcsV2PhpTextprocessingTaskIdRoute, getOcsV2PhpTextprocessingTaskIdRouteHandler)
  .openapi(deleteOcsV2PhpTextprocessingTaskIdRoute, deleteOcsV2PhpTextprocessingTaskIdRouteHandler)
  .openapi(
    getOcsV2PhpTextprocessingTasksAppAppIdRoute,
    getOcsV2PhpTextprocessingTasksAppAppIdRouteHandler,
  )
  .openapi(getOcsV2PhpText2imageIsAvailableRoute, getOcsV2PhpText2imageIsAvailableRouteHandler)
  .openapi(postOcsV2PhpText2imageScheduleRoute, postOcsV2PhpText2imageScheduleRouteHandler)
  .openapi(getOcsV2PhpText2imageTaskIdRoute, getOcsV2PhpText2imageTaskIdRouteHandler)
  .openapi(deleteOcsV2PhpText2imageTaskIdRoute, deleteOcsV2PhpText2imageTaskIdRouteHandler)
  .openapi(
    getOcsV2PhpText2imageTaskIdImageIndexRoute,
    getOcsV2PhpText2imageTaskIdImageIndexRouteHandler,
  )
  .openapi(getOcsV2PhpText2imageTasksAppAppIdRoute, getOcsV2PhpText2imageTasksAppAppIdRouteHandler)
  .openapi(getOcsV2PhpTranslationLanguagesRoute, getOcsV2PhpTranslationLanguagesRouteHandler)
  .openapi(postOcsV2PhpTranslationTranslateRoute, postOcsV2PhpTranslationTranslateRouteHandler)
  .openapi(getOcsV2PhpSearchProvidersRoute, getOcsV2PhpSearchProvidersRouteHandler)
  .openapi(
    getOcsV2PhpSearchProvidersProviderIdSearchRoute,
    getOcsV2PhpSearchProvidersProviderIdSearchRouteHandler,
  )
  .openapi(getIndexPhpAvatarUserIdSizeDarkRoute, getIndexPhpAvatarUserIdSizeDarkRouteHandler)
  .openapi(getIndexPhpAvatarUserIdSizeRoute, getIndexPhpAvatarUserIdSizeRouteHandler)
  .openapi(getIndexPhpCsrftokenRoute, getIndexPhpCsrftokenRouteHandler)
  .openapi(postIndexPhpLoginV2PollRoute, postIndexPhpLoginV2PollRouteHandler)
  .openapi(postIndexPhpLoginV2Route, postIndexPhpLoginV2RouteHandler)
  .openapi(
    getIndexPhpAvatarGuestGuestNameSizeRoute,
    getIndexPhpAvatarGuestGuestNameSizeRouteHandler,
  )
  .openapi(
    getIndexPhpAvatarGuestGuestNameSizeDarkRoute,
    getIndexPhpAvatarGuestGuestNameSizeDarkRouteHandler,
  )
  .openapi(postIndexPhpLoginConfirmRoute, postIndexPhpLoginConfirmRouteHandler)
  .openapi(getIndexPhpOcmProviderRoute, getIndexPhpOcmProviderRouteHandler)
  .openapi(getIndexPhpCorePreviewPngRoute, getIndexPhpCorePreviewPngRouteHandler)
  .openapi(getIndexPhpCorePreviewRoute, getIndexPhpCorePreviewRouteHandler)
  .openapi(getIndexPhpCoreMimeiconRoute, getIndexPhpCoreMimeiconRouteHandler)
  .openapi(
    getIndexPhpCoreReferencesPreviewReferenceIdRoute,
    getIndexPhpCoreReferencesPreviewReferenceIdRouteHandler,
  )
  .openapi(postIndexPhpCoreWipeCheckRoute, postIndexPhpCoreWipeCheckRouteHandler)
  .openapi(postIndexPhpCoreWipeSuccessRoute, postIndexPhpCoreWipeSuccessRouteHandler)
  .openapi(getStatusPhpRoute, getStatusPhpRouteHandler)
  .openapi(
    getOcsV2PhpTaskprocessingTasksConsumerTasktypesRoute,
    getOcsV2PhpTaskprocessingTasksConsumerTasktypesRouteHandler,
  )
  .openapi(
    postOcsV2PhpTaskprocessingTasksConsumerScheduleRoute,
    postOcsV2PhpTaskprocessingTasksConsumerScheduleRouteHandler,
  )
  .openapi(
    getOcsV2PhpTaskprocessingTasksConsumerTaskIdRoute,
    getOcsV2PhpTaskprocessingTasksConsumerTaskIdRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpTaskprocessingTasksConsumerTaskIdRoute,
    deleteOcsV2PhpTaskprocessingTasksConsumerTaskIdRouteHandler,
  )
  .openapi(
    getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdRoute,
    getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdRouteHandler,
  )
  .openapi(
    postOcsV2PhpTaskprocessingTasksProviderTaskIdFileRoute,
    postOcsV2PhpTaskprocessingTasksProviderTaskIdFileRouteHandler,
  )
  .openapi(
    postOcsV2PhpTaskprocessingTasksProviderTaskIdProgressRoute,
    postOcsV2PhpTaskprocessingTasksProviderTaskIdProgressRouteHandler,
  )
  .openapi(
    postOcsV2PhpTaskprocessingTasksProviderTaskIdResultRoute,
    postOcsV2PhpTaskprocessingTasksProviderTaskIdResultRouteHandler,
  )
  .openapi(
    postOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResultRoute,
    postOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResultRouteHandler,
  )
  .openapi(
    postOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancelRoute,
    postOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancelRouteHandler,
  )
  .openapi(
    getOcsV2PhpTaskprocessingTasksProviderNextRoute,
    getOcsV2PhpTaskprocessingTasksProviderNextRouteHandler,
  )
  .openapi(
    getOcsV2PhpTaskprocessingTasksProviderNextBatchRoute,
    getOcsV2PhpTaskprocessingTasksProviderNextBatchRouteHandler,
  )
  .openapi(
    getOcsV2PhpTaskprocessingQueueStatsRoute,
    getOcsV2PhpTaskprocessingQueueStatsRouteHandler,
  )
  .openapi(getOcsV2PhpTwofactorStateRoute, getOcsV2PhpTwofactorStateRouteHandler)
  .openapi(postOcsV2PhpTwofactorEnableRoute, postOcsV2PhpTwofactorEnableRouteHandler)
  .openapi(postOcsV2PhpTwofactorDisableRoute, postOcsV2PhpTwofactorDisableRouteHandler)

export default app

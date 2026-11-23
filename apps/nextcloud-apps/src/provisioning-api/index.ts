import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute,
  deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRoute,
  deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRoute,
  deleteOcsV2PhpCloudAppsAppRoute,
  deleteOcsV2PhpCloudGroupsGroupIdRoute,
  deleteOcsV2PhpCloudUsersUserIdGroupsRoute,
  deleteOcsV2PhpCloudUsersUserIdRoute,
  deleteOcsV2PhpCloudUsersUserIdSubadminsRoute,
  getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute,
  getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppRoute,
  getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsRoute,
  getOcsV2PhpCloudAppsAppRoute,
  getOcsV2PhpCloudAppsRoute,
  getOcsV2PhpCloudGroupsDetailsRoute,
  getOcsV2PhpCloudGroupsGroupIdRoute,
  getOcsV2PhpCloudGroupsGroupIdSubadminsRoute,
  getOcsV2PhpCloudGroupsGroupIdUsersDetailsRoute,
  getOcsV2PhpCloudGroupsGroupIdUsersRoute,
  getOcsV2PhpCloudGroupsRoute,
  getOcsV2PhpCloudUserAppsRoute,
  getOcsV2PhpCloudUserFieldsRoute,
  getOcsV2PhpCloudUserFieldsUserIdRoute,
  getOcsV2PhpCloudUserRoute,
  getOcsV2PhpCloudUsersDetailsRoute,
  getOcsV2PhpCloudUsersDisabledRoute,
  getOcsV2PhpCloudUsersRecentRoute,
  getOcsV2PhpCloudUsersRoute,
  getOcsV2PhpCloudUsersUserIdGroupsDetailsRoute,
  getOcsV2PhpCloudUsersUserIdGroupsRoute,
  getOcsV2PhpCloudUsersUserIdRoute,
  getOcsV2PhpCloudUsersUserIdSubadminsDetailsRoute,
  getOcsV2PhpCloudUsersUserIdSubadminsRoute,
  patchOcsV2PhpCloudUsersUserIdRoute,
  postOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute,
  postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRoute,
  postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRoute,
  postOcsV2PhpCloudAppsAppRoute,
  postOcsV2PhpCloudGroupsRoute,
  postOcsV2PhpCloudUsersRoute,
  postOcsV2PhpCloudUsersSearchByPhoneRoute,
  postOcsV2PhpCloudUsersUserIdGroupsRoute,
  postOcsV2PhpCloudUsersUserIdSubadminsRoute,
  postOcsV2PhpCloudUsersUserIdWelcomeRoute,
  postOcsV2PhpCloudUsersUserIdWipeRoute,
  putOcsV2PhpCloudGroupsGroupIdRoute,
  putOcsV2PhpCloudUsersUserIdCollectionNameRoute,
  putOcsV2PhpCloudUsersUserIdDisableRoute,
  putOcsV2PhpCloudUsersUserIdEnableRoute,
  putOcsV2PhpCloudUsersUserIdRoute,
} from './routes'
import {
  deleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRouteHandler,
  deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRouteHandler,
  deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRouteHandler,
  deleteOcsV2PhpCloudAppsAppRouteHandler,
  deleteOcsV2PhpCloudGroupsGroupIdRouteHandler,
  deleteOcsV2PhpCloudUsersUserIdGroupsRouteHandler,
  deleteOcsV2PhpCloudUsersUserIdRouteHandler,
  deleteOcsV2PhpCloudUsersUserIdSubadminsRouteHandler,
  getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRouteHandler,
  getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppRouteHandler,
  getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsRouteHandler,
  getOcsV2PhpCloudAppsAppRouteHandler,
  getOcsV2PhpCloudAppsRouteHandler,
  getOcsV2PhpCloudGroupsDetailsRouteHandler,
  getOcsV2PhpCloudGroupsGroupIdRouteHandler,
  getOcsV2PhpCloudGroupsGroupIdSubadminsRouteHandler,
  getOcsV2PhpCloudGroupsGroupIdUsersDetailsRouteHandler,
  getOcsV2PhpCloudGroupsGroupIdUsersRouteHandler,
  getOcsV2PhpCloudGroupsRouteHandler,
  getOcsV2PhpCloudUserAppsRouteHandler,
  getOcsV2PhpCloudUserFieldsRouteHandler,
  getOcsV2PhpCloudUserFieldsUserIdRouteHandler,
  getOcsV2PhpCloudUserRouteHandler,
  getOcsV2PhpCloudUsersDetailsRouteHandler,
  getOcsV2PhpCloudUsersDisabledRouteHandler,
  getOcsV2PhpCloudUsersRecentRouteHandler,
  getOcsV2PhpCloudUsersRouteHandler,
  getOcsV2PhpCloudUsersUserIdGroupsDetailsRouteHandler,
  getOcsV2PhpCloudUsersUserIdGroupsRouteHandler,
  getOcsV2PhpCloudUsersUserIdRouteHandler,
  getOcsV2PhpCloudUsersUserIdSubadminsDetailsRouteHandler,
  getOcsV2PhpCloudUsersUserIdSubadminsRouteHandler,
  patchOcsV2PhpCloudUsersUserIdRouteHandler,
  postOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRouteHandler,
  postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRouteHandler,
  postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRouteHandler,
  postOcsV2PhpCloudAppsAppRouteHandler,
  postOcsV2PhpCloudGroupsRouteHandler,
  postOcsV2PhpCloudUsersRouteHandler,
  postOcsV2PhpCloudUsersSearchByPhoneRouteHandler,
  postOcsV2PhpCloudUsersUserIdGroupsRouteHandler,
  postOcsV2PhpCloudUsersUserIdSubadminsRouteHandler,
  postOcsV2PhpCloudUsersUserIdWelcomeRouteHandler,
  postOcsV2PhpCloudUsersUserIdWipeRouteHandler,
  putOcsV2PhpCloudGroupsGroupIdRouteHandler,
  putOcsV2PhpCloudUsersUserIdCollectionNameRouteHandler,
  putOcsV2PhpCloudUsersUserIdDisableRouteHandler,
  putOcsV2PhpCloudUsersUserIdEnableRouteHandler,
  putOcsV2PhpCloudUsersUserIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getOcsV2PhpCloudAppsRoute, getOcsV2PhpCloudAppsRouteHandler)
  .openapi(getOcsV2PhpCloudAppsAppRoute, getOcsV2PhpCloudAppsAppRouteHandler)
  .openapi(postOcsV2PhpCloudAppsAppRoute, postOcsV2PhpCloudAppsAppRouteHandler)
  .openapi(deleteOcsV2PhpCloudAppsAppRoute, deleteOcsV2PhpCloudAppsAppRouteHandler)
  .openapi(
    getOcsV2PhpCloudGroupsGroupIdSubadminsRoute,
    getOcsV2PhpCloudGroupsGroupIdSubadminsRouteHandler,
  )
  .openapi(postOcsV2PhpCloudGroupsRoute, postOcsV2PhpCloudGroupsRouteHandler)
  .openapi(getOcsV2PhpCloudGroupsRoute, getOcsV2PhpCloudGroupsRouteHandler)
  .openapi(putOcsV2PhpCloudGroupsGroupIdRoute, putOcsV2PhpCloudGroupsGroupIdRouteHandler)
  .openapi(deleteOcsV2PhpCloudGroupsGroupIdRoute, deleteOcsV2PhpCloudGroupsGroupIdRouteHandler)
  .openapi(getOcsV2PhpCloudGroupsGroupIdRoute, getOcsV2PhpCloudGroupsGroupIdRouteHandler)
  .openapi(getOcsV2PhpCloudUsersRecentRoute, getOcsV2PhpCloudUsersRecentRouteHandler)
  .openapi(
    getOcsV2PhpCloudUsersUserIdSubadminsRoute,
    getOcsV2PhpCloudUsersUserIdSubadminsRouteHandler,
  )
  .openapi(
    postOcsV2PhpCloudUsersUserIdSubadminsRoute,
    postOcsV2PhpCloudUsersUserIdSubadminsRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpCloudUsersUserIdSubadminsRoute,
    deleteOcsV2PhpCloudUsersUserIdSubadminsRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsRoute,
    getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppRoute,
    getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute,
    getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute,
    deleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute,
    postOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRouteHandler,
  )
  .openapi(getOcsV2PhpCloudGroupsDetailsRoute, getOcsV2PhpCloudGroupsDetailsRouteHandler)
  .openapi(getOcsV2PhpCloudGroupsGroupIdUsersRoute, getOcsV2PhpCloudGroupsGroupIdUsersRouteHandler)
  .openapi(
    getOcsV2PhpCloudGroupsGroupIdUsersDetailsRoute,
    getOcsV2PhpCloudGroupsGroupIdUsersDetailsRouteHandler,
  )
  .openapi(getOcsV2PhpCloudUsersRoute, getOcsV2PhpCloudUsersRouteHandler)
  .openapi(postOcsV2PhpCloudUsersRoute, postOcsV2PhpCloudUsersRouteHandler)
  .openapi(getOcsV2PhpCloudUsersDetailsRoute, getOcsV2PhpCloudUsersDetailsRouteHandler)
  .openapi(getOcsV2PhpCloudUsersDisabledRoute, getOcsV2PhpCloudUsersDisabledRouteHandler)
  .openapi(
    postOcsV2PhpCloudUsersSearchByPhoneRoute,
    postOcsV2PhpCloudUsersSearchByPhoneRouteHandler,
  )
  .openapi(getOcsV2PhpCloudUsersUserIdRoute, getOcsV2PhpCloudUsersUserIdRouteHandler)
  .openapi(putOcsV2PhpCloudUsersUserIdRoute, putOcsV2PhpCloudUsersUserIdRouteHandler)
  .openapi(patchOcsV2PhpCloudUsersUserIdRoute, patchOcsV2PhpCloudUsersUserIdRouteHandler)
  .openapi(deleteOcsV2PhpCloudUsersUserIdRoute, deleteOcsV2PhpCloudUsersUserIdRouteHandler)
  .openapi(getOcsV2PhpCloudUserRoute, getOcsV2PhpCloudUserRouteHandler)
  .openapi(getOcsV2PhpCloudUserFieldsRoute, getOcsV2PhpCloudUserFieldsRouteHandler)
  .openapi(getOcsV2PhpCloudUserFieldsUserIdRoute, getOcsV2PhpCloudUserFieldsUserIdRouteHandler)
  .openapi(getOcsV2PhpCloudUserAppsRoute, getOcsV2PhpCloudUserAppsRouteHandler)
  .openapi(
    putOcsV2PhpCloudUsersUserIdCollectionNameRoute,
    putOcsV2PhpCloudUsersUserIdCollectionNameRouteHandler,
  )
  .openapi(postOcsV2PhpCloudUsersUserIdWipeRoute, postOcsV2PhpCloudUsersUserIdWipeRouteHandler)
  .openapi(putOcsV2PhpCloudUsersUserIdEnableRoute, putOcsV2PhpCloudUsersUserIdEnableRouteHandler)
  .openapi(putOcsV2PhpCloudUsersUserIdDisableRoute, putOcsV2PhpCloudUsersUserIdDisableRouteHandler)
  .openapi(getOcsV2PhpCloudUsersUserIdGroupsRoute, getOcsV2PhpCloudUsersUserIdGroupsRouteHandler)
  .openapi(postOcsV2PhpCloudUsersUserIdGroupsRoute, postOcsV2PhpCloudUsersUserIdGroupsRouteHandler)
  .openapi(
    deleteOcsV2PhpCloudUsersUserIdGroupsRoute,
    deleteOcsV2PhpCloudUsersUserIdGroupsRouteHandler,
  )
  .openapi(
    getOcsV2PhpCloudUsersUserIdGroupsDetailsRoute,
    getOcsV2PhpCloudUsersUserIdGroupsDetailsRouteHandler,
  )
  .openapi(
    getOcsV2PhpCloudUsersUserIdSubadminsDetailsRoute,
    getOcsV2PhpCloudUsersUserIdSubadminsDetailsRouteHandler,
  )
  .openapi(
    postOcsV2PhpCloudUsersUserIdWelcomeRoute,
    postOcsV2PhpCloudUsersUserIdWelcomeRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRoute,
    postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRoute,
    deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRoute,
    postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRoute,
    deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRouteHandler,
  )

export default app

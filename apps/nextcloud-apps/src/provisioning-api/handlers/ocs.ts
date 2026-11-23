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
} from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app
  .openapi(getOcsV2PhpCloudAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudAppsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudAppsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpCloudAppsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudGroupsGroupIdSubadminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpCloudGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpCloudGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudUsersRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudUsersUserIdSubadminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudUsersUserIdSubadminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpCloudUsersUserIdSubadminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudGroupsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudGroupsGroupIdUsersDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudUsersDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudUsersDisabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudUsersSearchByPhoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpCloudUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOcsV2PhpCloudUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpCloudUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudUserFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudUserFieldsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudUserAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpCloudUsersUserIdCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudUsersUserIdWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpCloudUsersUserIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpCloudUsersUserIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudUsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudUsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpCloudUsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudUsersUserIdGroupsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudUsersUserIdSubadminsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudUsersUserIdWelcomeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })

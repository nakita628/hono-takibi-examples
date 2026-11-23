import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFolderDeleteRoute,
  deleteItemDeleteRoute,
  deleteSecureSendRevokeRoute,
  deleteWebauthnDeleteRoute,
  getDevicePairingCapabilitiesRoute,
  getFolderListFoldersRoute,
  getFolderWritableFoldersRoute,
  getItemAllTagsRoute,
  getItemChangesRoute,
  getItemFindByUrlRoute,
  getItemGetOtpRoute,
  getItemGetRoute,
  getItemInFoldersRoute,
  getMiscRefreshExtensionSettingsRoute,
  getOpenapiJsonRoute,
  getSecureSendListRoute,
  getSecureSendPolicyRoute,
  getUserListRoute,
  getWebauthnListRoute,
  postAuthLogoutRoute,
  postAuthorizeRoute,
  postAuthorizeTokenRoute,
  postDevicePairingClaimRoute,
  postDevicePairingConsumeRoute,
  postDevicePairingCredentialStatusRoute,
  postDevicePairingStatusRoute,
  postFolderCreateRoute,
  postItemCreateRoute,
  postMiscRefreshExtensionSettingsRoute,
  postSecureSendCreateRoute,
  postWebauthnAssertRoute,
  postWebauthnCreateRoute,
  putFolderUpdateRoute,
  putItemUpdateRoute,
} from './routes'
import {
  deleteFolderDeleteRouteHandler,
  deleteItemDeleteRouteHandler,
  deleteSecureSendRevokeRouteHandler,
  deleteWebauthnDeleteRouteHandler,
  getDevicePairingCapabilitiesRouteHandler,
  getFolderListFoldersRouteHandler,
  getFolderWritableFoldersRouteHandler,
  getItemAllTagsRouteHandler,
  getItemChangesRouteHandler,
  getItemFindByUrlRouteHandler,
  getItemGetOtpRouteHandler,
  getItemGetRouteHandler,
  getItemInFoldersRouteHandler,
  getMiscRefreshExtensionSettingsRouteHandler,
  getOpenapiJsonRouteHandler,
  getSecureSendListRouteHandler,
  getSecureSendPolicyRouteHandler,
  getUserListRouteHandler,
  getWebauthnListRouteHandler,
  postAuthLogoutRouteHandler,
  postAuthorizeRouteHandler,
  postAuthorizeTokenRouteHandler,
  postDevicePairingClaimRouteHandler,
  postDevicePairingConsumeRouteHandler,
  postDevicePairingCredentialStatusRouteHandler,
  postDevicePairingStatusRouteHandler,
  postFolderCreateRouteHandler,
  postItemCreateRouteHandler,
  postMiscRefreshExtensionSettingsRouteHandler,
  postSecureSendCreateRouteHandler,
  postWebauthnAssertRouteHandler,
  postWebauthnCreateRouteHandler,
  putFolderUpdateRouteHandler,
  putItemUpdateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAuthorizeRoute, postAuthorizeRouteHandler)
  .openapi(postAuthorizeTokenRoute, postAuthorizeTokenRouteHandler)
  .openapi(postAuthLogoutRoute, postAuthLogoutRouteHandler)
  .openapi(getItemGetRoute, getItemGetRouteHandler)
  .openapi(getItemInFoldersRoute, getItemInFoldersRouteHandler)
  .openapi(getItemFindByUrlRoute, getItemFindByUrlRouteHandler)
  .openapi(getItemGetOtpRoute, getItemGetOtpRouteHandler)
  .openapi(getItemChangesRoute, getItemChangesRouteHandler)
  .openapi(getItemAllTagsRoute, getItemAllTagsRouteHandler)
  .openapi(postItemCreateRoute, postItemCreateRouteHandler)
  .openapi(putItemUpdateRoute, putItemUpdateRouteHandler)
  .openapi(deleteItemDeleteRoute, deleteItemDeleteRouteHandler)
  .openapi(getFolderListFoldersRoute, getFolderListFoldersRouteHandler)
  .openapi(getFolderWritableFoldersRoute, getFolderWritableFoldersRouteHandler)
  .openapi(postFolderCreateRoute, postFolderCreateRouteHandler)
  .openapi(putFolderUpdateRoute, putFolderUpdateRouteHandler)
  .openapi(deleteFolderDeleteRoute, deleteFolderDeleteRouteHandler)
  .openapi(getUserListRoute, getUserListRouteHandler)
  .openapi(getMiscRefreshExtensionSettingsRoute, getMiscRefreshExtensionSettingsRouteHandler)
  .openapi(postMiscRefreshExtensionSettingsRoute, postMiscRefreshExtensionSettingsRouteHandler)
  .openapi(postWebauthnCreateRoute, postWebauthnCreateRouteHandler)
  .openapi(getWebauthnListRoute, getWebauthnListRouteHandler)
  .openapi(postWebauthnAssertRoute, postWebauthnAssertRouteHandler)
  .openapi(deleteWebauthnDeleteRoute, deleteWebauthnDeleteRouteHandler)
  .openapi(getSecureSendPolicyRoute, getSecureSendPolicyRouteHandler)
  .openapi(postSecureSendCreateRoute, postSecureSendCreateRouteHandler)
  .openapi(getSecureSendListRoute, getSecureSendListRouteHandler)
  .openapi(deleteSecureSendRevokeRoute, deleteSecureSendRevokeRouteHandler)
  .openapi(getOpenapiJsonRoute, getOpenapiJsonRouteHandler)
  .openapi(getDevicePairingCapabilitiesRoute, getDevicePairingCapabilitiesRouteHandler)
  .openapi(postDevicePairingCredentialStatusRoute, postDevicePairingCredentialStatusRouteHandler)
  .openapi(postDevicePairingClaimRoute, postDevicePairingClaimRouteHandler)
  .openapi(postDevicePairingStatusRoute, postDevicePairingStatusRouteHandler)
  .openapi(postDevicePairingConsumeRoute, postDevicePairingConsumeRouteHandler)

export default app

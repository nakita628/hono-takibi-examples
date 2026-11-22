import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute,
  getApiV1OrgsOrgIdSdkinvitesRoute,
  getApiV1OrgsOrgIdSdkinvitesSdkinviteIdQrcodeRoute,
  getApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute,
  postApiV1OrgsOrgIdSdkinvitesRoute,
  postApiV1OrgsOrgIdSdkinvitesSdkinviteIdEmailRoute,
  postApiV1OrgsOrgIdSdkinvitesSdkinviteIdSmsRoute,
  putApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsSDKInvitesHandler = app
  .openapi(getApiV1OrgsOrgIdSdkinvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSdkinvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSdkinvitesSdkinviteIdEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSdkinvitesSdkinviteIdQrcodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSdkinvitesSdkinviteIdSmsRoute, (c) => {
    throw new Error('Not implemented')
  })

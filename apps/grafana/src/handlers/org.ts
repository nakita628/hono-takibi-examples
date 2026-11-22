import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgInvitesInvitationCodeRevokeRoute,
  deleteOrgUsersUserIdRoute,
  getOrgInvitesRoute,
  getOrgPreferencesRoute,
  getOrgRoute,
  getOrgUsersLookupRoute,
  getOrgUsersRoute,
  patchOrgPreferencesRoute,
  patchOrgUsersUserIdRoute,
  postOrgInvitesRoute,
  postOrgUsersRoute,
  putOrgAddressRoute,
  putOrgPreferencesRoute,
  putOrgRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgHandler = app
  .openapi(getOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgInvitesInvitationCodeRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgUsersLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })

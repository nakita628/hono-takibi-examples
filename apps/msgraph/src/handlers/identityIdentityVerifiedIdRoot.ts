import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityVerifiedIdProfilesVerifiedIdProfileIdRoute,
  deleteIdentityVerifiedIdRoute,
  getIdentityVerifiedIdProfilesCountRoute,
  getIdentityVerifiedIdProfilesRoute,
  getIdentityVerifiedIdProfilesVerifiedIdProfileIdRoute,
  getIdentityVerifiedIdRoute,
  patchIdentityVerifiedIdProfilesVerifiedIdProfileIdRoute,
  patchIdentityVerifiedIdRoute,
  postIdentityVerifiedIdProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityIdentityVerifiedIdRootHandler = app
  .openapi(getIdentityVerifiedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityVerifiedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityVerifiedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityVerifiedIdProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityVerifiedIdProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityVerifiedIdProfilesVerifiedIdProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityVerifiedIdProfilesVerifiedIdProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityVerifiedIdProfilesVerifiedIdProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityVerifiedIdProfilesCountRoute, (c) => {
    throw new Error('Not implemented')
  })

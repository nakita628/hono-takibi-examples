import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSigningProfilesProfileNamePermissionsStatementIdRevisionIdRoute,
  deleteSigningProfilesProfileNameRoute,
  getSigningProfilesProfileNamePermissionsRoute,
  getSigningProfilesProfileNameRoute,
  getSigningProfilesRoute,
  postSigningProfilesProfileNamePermissionsRoute,
  putSigningProfilesProfileNameRevokeRoute,
  putSigningProfilesProfileNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const signingProfilesHandler = app
  .openapi(postSigningProfilesProfileNamePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigningProfilesProfileNamePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSigningProfilesProfileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigningProfilesProfileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSigningProfilesProfileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigningProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSigningProfilesProfileNamePermissionsStatementIdRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSigningProfilesProfileNameRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })

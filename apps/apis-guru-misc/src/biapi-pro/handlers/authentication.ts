import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthTokenRoute,
  deleteUsersIdUserRoute,
  getAuthTokenCodeRoute,
  getCertificateTypeRoute,
  getWebauthRoute,
  postAdminJwtRoute,
  postAuthInitRoute,
  postAuthJwtRoute,
  postAuthRenewRoute,
  postAuthTokenAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postAdminJwtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthJwtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthTokenCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificateTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebauthRoute, (c) => {
    throw new Error('Not implemented')
  })

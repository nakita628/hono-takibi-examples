import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityProfilesInstanceIdSecurityProfileIdRoute,
  getSecurityProfilesInstanceIdSecurityProfileIdRoute,
  postSecurityProfilesInstanceIdSecurityProfileIdRoute,
  putSecurityProfilesInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityProfilesHandler = app
  .openapi(putSecurityProfilesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityProfilesInstanceIdSecurityProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityProfilesInstanceIdSecurityProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityProfilesInstanceIdSecurityProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })

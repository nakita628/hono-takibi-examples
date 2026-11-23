import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityProfilesSecurityProfileNameRoute,
  deleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnRoute,
  getSecurityProfilesRoute,
  getSecurityProfilesSecurityProfileNameRoute,
  getSecurityProfilesSecurityProfileNameTargetsRoute,
  patchSecurityProfilesSecurityProfileNameRoute,
  postSecurityProfilesSecurityProfileNameRoute,
  putSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityProfilesHandler = app
  .openapi(putSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityProfilesSecurityProfileNameTargetsSecurityProfileTargetArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityProfilesSecurityProfileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityProfilesSecurityProfileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityProfilesSecurityProfileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityProfilesSecurityProfileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityProfilesSecurityProfileNameTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRoute,
  getSecuritySecureScoreControlProfilesRoute,
  getSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRoute,
  patchSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRoute,
  postSecuritySecureScoreControlProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securitySecureScoreControlProfileHandler = app
  .openapi(getSecuritySecureScoreControlProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecuritySecureScoreControlProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecuritySecureScoreControlProfilesSecureScoreControlProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })

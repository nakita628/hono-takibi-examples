import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecuritySecureScoresSecureScoreIdRoute,
  getSecuritySecureScoresRoute,
  getSecuritySecureScoresSecureScoreIdRoute,
  patchSecuritySecureScoresSecureScoreIdRoute,
  postSecuritySecureScoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securitySecureScoreHandler = app
  .openapi(getSecuritySecureScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecuritySecureScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecuritySecureScoresSecureScoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySecureScoresSecureScoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecuritySecureScoresSecureScoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })

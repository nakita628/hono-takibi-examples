import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthFactorsIdRoute,
  getAuthFactorsIdRoute,
  postAuthFactorsEnrollRoute,
  postAuthFactorsIdChallengeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const multiFactorAuthHandler = app
  .openapi(postAuthFactorsEnrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthFactorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthFactorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthFactorsIdChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })

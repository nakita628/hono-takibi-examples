import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthFactorsIdRoute,
  getAuthFactorsIdRoute,
  postAuthChallengesIdVerifyRoute,
  postAuthFactorsEnrollRoute,
  postAuthFactorsIdChallengeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthChallengesIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
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

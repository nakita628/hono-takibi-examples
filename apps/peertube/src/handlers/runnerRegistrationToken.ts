import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1RunnersRegistrationTokensRegistrationTokenIdRoute,
  getApiV1RunnersRegistrationTokensRoute,
  postApiV1RunnersRegistrationTokensGenerateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const runnerRegistrationTokenHandler = app
  .openapi(postApiV1RunnersRegistrationTokensGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RunnersRegistrationTokensRegistrationTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RunnersRegistrationTokensRoute, (c) => {
    throw new Error('Not implemented')
  })

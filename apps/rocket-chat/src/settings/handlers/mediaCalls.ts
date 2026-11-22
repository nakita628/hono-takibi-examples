import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1MediaCallsInfoRoute, getApiV1MediaCallsStateRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaCallsHandler = app
  .openapi(getApiV1MediaCallsStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MediaCallsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })

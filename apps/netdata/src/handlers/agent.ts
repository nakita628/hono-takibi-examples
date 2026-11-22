import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2InfoRoute, getApiV2VersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const agentHandler = app
  .openapi(getApiV2InfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VersionsRoute, (c) => {
    throw new Error('Not implemented')
  })

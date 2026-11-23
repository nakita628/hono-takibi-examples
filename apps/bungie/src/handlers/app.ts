import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppApiUsageApplicationIdIndexRoute, getAppFirstPartyIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const appHandler = app
  .openapi(getAppApiUsageApplicationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppFirstPartyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

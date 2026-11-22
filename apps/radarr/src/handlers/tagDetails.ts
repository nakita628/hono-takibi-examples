import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3TagDetailIdRoute, getApiV3TagDetailRoute } from '../routes'

const app = new OpenAPIHono()

export const tagDetailsHandler = app
  .openapi(getApiV3TagDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3TagDetailIdRoute, (c) => {
    throw new Error('Not implemented')
  })

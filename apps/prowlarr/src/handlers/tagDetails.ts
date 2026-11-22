import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1TagDetailIdRoute, getApiV1TagDetailRoute } from '../routes'

const app = new OpenAPIHono()

export const tagDetailsHandler = app
  .openapi(getApiV1TagDetailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagDetailRoute, (c) => {
    throw new Error('Not implemented')
  })

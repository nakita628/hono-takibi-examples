import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1MenuIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const menuHandler = app.openapi(getApiV1MenuIndexRoute, (c) => {
  throw new Error('Not implemented')
})

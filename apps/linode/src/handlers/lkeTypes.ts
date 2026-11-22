import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionLkeTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const lkeTypesHandler = app.openapi(getApiVersionLkeTypesRoute, (c) => {
  throw new Error('Not implemented')
})

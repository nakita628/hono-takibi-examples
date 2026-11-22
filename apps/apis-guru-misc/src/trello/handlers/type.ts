import { OpenAPIHono } from '@hono/zod-openapi'
import { getTypesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const typeHandler = app.openapi(getTypesIdRoute, (c) => {
  throw new Error('Not implemented')
})

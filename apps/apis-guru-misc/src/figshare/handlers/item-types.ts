import { OpenAPIHono } from '@hono/zod-openapi'
import { getItemTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const itemTypesHandler = app.openapi(getItemTypesRoute, (c) => {
  throw new Error('Not implemented')
})

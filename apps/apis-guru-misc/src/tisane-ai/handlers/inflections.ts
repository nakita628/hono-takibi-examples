import { OpenAPIHono } from '@hono/zod-openapi'
import { getInflectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const inflectionsHandler = app.openapi(getInflectionsRoute, (c) => {
  throw new Error('Not implemented')
})

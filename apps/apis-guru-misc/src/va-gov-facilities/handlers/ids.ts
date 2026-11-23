import { OpenAPIHono } from '@hono/zod-openapi'
import { getIdsRoute } from '../routes'

const app = new OpenAPIHono()

export const idsHandler = app.openapi(getIdsRoute, (c) => {
  throw new Error('Not implemented')
})

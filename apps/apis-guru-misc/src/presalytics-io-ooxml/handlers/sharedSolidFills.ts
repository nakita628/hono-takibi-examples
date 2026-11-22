import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedSolidFillsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedSolidFillsHandler = app.openapi(getSharedSolidFillsIdRoute, (c) => {
  throw new Error('Not implemented')
})

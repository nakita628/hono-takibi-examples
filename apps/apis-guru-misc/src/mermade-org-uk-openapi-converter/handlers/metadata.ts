import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app.openapi(getStatusRoute, (c) => {
  throw new Error('Not implemented')
})

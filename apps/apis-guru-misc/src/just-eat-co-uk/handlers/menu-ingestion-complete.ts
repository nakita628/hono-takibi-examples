import { OpenAPIHono } from '@hono/zod-openapi'
import { postMenuIngestionCompleteRoute } from '../routes'

const app = new OpenAPIHono()

export const menuIngestionCompleteHandler = app.openapi(postMenuIngestionCompleteRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedLinesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedLinesHandler = app.openapi(getSharedLinesIdRoute, (c) => {
  throw new Error('Not implemented')
})

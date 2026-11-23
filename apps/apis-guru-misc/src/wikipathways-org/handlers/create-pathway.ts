import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreatePathwayRoute } from '../routes'

const app = new OpenAPIHono()

export const createPathwayHandler = app.openapi(postCreatePathwayRoute, (c) => {
  throw new Error('Not implemented')
})

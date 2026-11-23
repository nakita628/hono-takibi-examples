import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const createFleetHandler = app.openapi(postCreateFleetRoute, (c) => {
  throw new Error('Not implemented')
})

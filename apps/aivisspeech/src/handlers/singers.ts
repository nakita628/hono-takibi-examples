import { OpenAPIHono } from '@hono/zod-openapi'
import { getSingersRoute } from '../routes'

const app = new OpenAPIHono()

export const singersHandler = app.openapi(getSingersRoute, (c) => {
  throw new Error('Not implemented')
})

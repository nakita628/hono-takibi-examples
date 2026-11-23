import { OpenAPIHono } from '@hono/zod-openapi'
import { getMeshRoute } from '../routes'

const app = new OpenAPIHono()

export const meshHandler = app.openapi(getMeshRoute, (c) => {
  throw new Error('Not implemented')
})

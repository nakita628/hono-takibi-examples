import { OpenAPIHono } from '@hono/zod-openapi'
import { getExampleRoute } from '../routes'

const app = new OpenAPIHono()

export const exampleHandler = app.openapi(getExampleRoute, (c) => {
  throw new Error('Not implemented')
})

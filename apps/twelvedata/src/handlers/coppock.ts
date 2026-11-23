import { OpenAPIHono } from '@hono/zod-openapi'
import { getCoppockRoute } from '../routes'

const app = new OpenAPIHono()

export const coppockHandler = app.openapi(getCoppockRoute, (c) => {
  throw new Error('Not implemented')
})

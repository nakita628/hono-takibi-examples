import { OpenAPIHono } from '@hono/zod-openapi'
import { getPipsRoute } from '../routes'

const app = new OpenAPIHono()

export const pipsHandler = app.openapi(getPipsRoute, (c) => {
  throw new Error('Not implemented')
})

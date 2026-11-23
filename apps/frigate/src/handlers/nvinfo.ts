import { OpenAPIHono } from '@hono/zod-openapi'
import { getNvinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const nvinfoHandler = app.openapi(getNvinfoRoute, (c) => {
  throw new Error('Not implemented')
})

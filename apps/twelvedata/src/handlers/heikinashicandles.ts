import { OpenAPIHono } from '@hono/zod-openapi'
import { getHeikinashicandlesRoute } from '../routes'

const app = new OpenAPIHono()

export const heikinashicandlesHandler = app.openapi(getHeikinashicandlesRoute, (c) => {
  throw new Error('Not implemented')
})

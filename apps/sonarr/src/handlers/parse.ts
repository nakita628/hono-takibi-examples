import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3ParseRoute } from '../routes'

const app = new OpenAPIHono()

export const parseHandler = app.openapi(getApiV3ParseRoute, (c) => {
  throw new Error('Not implemented')
})

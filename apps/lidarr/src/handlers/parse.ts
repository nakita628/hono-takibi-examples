import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ParseRoute } from '../routes'

const app = new OpenAPIHono()

export const parseHandler = app.openapi(getApiV1ParseRoute, (c) => {
  throw new Error('Not implemented')
})

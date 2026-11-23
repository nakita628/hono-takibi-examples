import { OpenAPIHono } from '@hono/zod-openapi'
import { getRadAnalystIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const radAnalystHandler = app.openapi(getRadAnalystIndexRoute, (c) => {
  throw new Error('Not implemented')
})

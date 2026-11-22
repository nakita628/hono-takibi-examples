import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiJobJobIdStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const jobHandler = app.openapi(getApiJobJobIdStatusRoute, (c) => {
  throw new Error('Not implemented')
})

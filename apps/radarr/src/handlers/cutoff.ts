import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3WantedCutoffRoute } from '../routes'

const app = new OpenAPIHono()

export const cutoffHandler = app.openapi(getApiV3WantedCutoffRoute, (c) => {
  throw new Error('Not implemented')
})

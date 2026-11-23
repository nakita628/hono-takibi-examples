import { OpenAPIHono } from '@hono/zod-openapi'
import { getSplitsRoute } from '../routes'

const app = new OpenAPIHono()

export const splitsHandler = app.openapi(getSplitsRoute, (c) => {
  throw new Error('Not implemented')
})

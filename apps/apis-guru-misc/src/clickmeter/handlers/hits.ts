import { OpenAPIHono } from '@hono/zod-openapi'
import { getHitsRoute } from '../routes'

const app = new OpenAPIHono()

export const hitsHandler = app.openapi(getHitsRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getGoGuidRoute } from '../routes'

const app = new OpenAPIHono()

export const goHandler = app.openapi(getGoGuidRoute, (c) => {
  throw new Error('Not implemented')
})

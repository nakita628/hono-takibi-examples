import { OpenAPIHono } from '@hono/zod-openapi'
import { getTrailersRoute } from '../routes'

const app = new OpenAPIHono()

export const trailerHandler = app.openapi(getTrailersRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getSimilarRoute } from '../routes'

const app = new OpenAPIHono()

export const similarHandler = app.openapi(getSimilarRoute, (c) => {
  throw new Error('Not implemented')
})

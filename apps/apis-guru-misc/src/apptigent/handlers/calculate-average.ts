import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateAverageRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateAverageHandler = app.openapi(postCalculateAverageRoute, (c) => {
  throw new Error('Not implemented')
})

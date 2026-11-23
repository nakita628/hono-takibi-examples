import { OpenAPIHono } from '@hono/zod-openapi'
import { getCoachesRoute } from '../routes'

const app = new OpenAPIHono()

export const coachesHandler = app.openapi(getCoachesRoute, (c) => {
  throw new Error('Not implemented')
})

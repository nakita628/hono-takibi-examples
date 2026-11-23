import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlansIdRoute } from '../routes'

const app = new OpenAPIHono()

export const plansHandler = app.openapi(getPlansIdRoute, (c) => {
  throw new Error('Not implemented')
})

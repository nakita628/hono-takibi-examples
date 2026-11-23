import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlansRoute } from '../routes'

const app = new OpenAPIHono()

export const plansHandler = app.openapi(getPlansRoute, (c) => {
  throw new Error('Not implemented')
})

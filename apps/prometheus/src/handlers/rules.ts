import { OpenAPIHono } from '@hono/zod-openapi'
import { getRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const rulesHandler = app.openapi(getRulesRoute, (c) => {
  throw new Error('Not implemented')
})

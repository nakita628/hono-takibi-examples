import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateLogarithmRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateLogarithmHandler = app.openapi(postCalculateLogarithmRoute, (c) => {
  throw new Error('Not implemented')
})

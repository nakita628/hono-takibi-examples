import { OpenAPIHono } from '@hono/zod-openapi'
import { getKeltnerRoute } from '../routes'

const app = new OpenAPIHono()

export const keltnerHandler = app.openapi(getKeltnerRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getCityRoute } from '../routes'

const app = new OpenAPIHono()

export const cityHandler = app.openapi(getCityRoute, (c) => {
  throw new Error('Not implemented')
})

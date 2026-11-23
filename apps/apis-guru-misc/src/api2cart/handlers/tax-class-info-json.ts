import { OpenAPIHono } from '@hono/zod-openapi'
import { getTaxClassInfoJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const taxClassInfoJsonHandler = app.openapi(getTaxClassInfoJsonRoute, (c) => {
  throw new Error('Not implemented')
})

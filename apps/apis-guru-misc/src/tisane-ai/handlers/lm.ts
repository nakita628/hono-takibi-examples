import { OpenAPIHono } from '@hono/zod-openapi'
import { getLmFamilyRoute } from '../routes'

const app = new OpenAPIHono()

export const lmHandler = app.openapi(getLmFamilyRoute, (c) => {
  throw new Error('Not implemented')
})

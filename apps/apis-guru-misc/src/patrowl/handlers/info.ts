import { OpenAPIHono } from '@hono/zod-openapi'
import { getInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const infoHandler = app.openapi(getInfoRoute, (c) => {
  throw new Error('Not implemented')
})

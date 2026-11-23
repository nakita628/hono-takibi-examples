import { OpenAPIHono } from '@hono/zod-openapi'
import { getDripRoute } from '../routes'

const app = new OpenAPIHono()

export const dripHandler = app.openapi(getDripRoute, (c) => {
  throw new Error('Not implemented')
})

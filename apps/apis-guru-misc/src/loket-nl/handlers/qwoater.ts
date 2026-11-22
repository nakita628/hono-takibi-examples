import { OpenAPIHono } from '@hono/zod-openapi'
import { getQwoaterEmployersRoute } from '../routes'

const app = new OpenAPIHono()

export const qwoaterHandler = app.openapi(getQwoaterEmployersRoute, (c) => {
  throw new Error('Not implemented')
})

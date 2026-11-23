import { OpenAPIHono } from '@hono/zod-openapi'
import { getMinmaxRoute } from '../routes'

const app = new OpenAPIHono()

export const minmaxHandler = app.openapi(getMinmaxRoute, (c) => {
  throw new Error('Not implemented')
})

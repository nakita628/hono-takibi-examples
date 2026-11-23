import { OpenAPIHono } from '@hono/zod-openapi'
import { postDateTimeDifferenceRoute } from '../routes'

const app = new OpenAPIHono()

export const dateTimeDifferenceHandler = app.openapi(postDateTimeDifferenceRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postMoraLengthRoute } from '../routes'

const app = new OpenAPIHono()

export const moraLengthHandler = app.openapi(postMoraLengthRoute, (c) => {
  throw new Error('Not implemented')
})

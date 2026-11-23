import { OpenAPIHono } from '@hono/zod-openapi'
import { postRetrieve3ds2ResultRoute } from '../routes'

const app = new OpenAPIHono()

export const retrieve3ds2ResultHandler = app.openapi(postRetrieve3ds2ResultRoute, (c) => {
  throw new Error('Not implemented')
})

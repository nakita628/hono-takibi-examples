import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthorise3ds2Route } from '../routes'

const app = new OpenAPIHono()

export const authorise3ds2Handler = app.openapi(postAuthorise3ds2Route, (c) => {
  throw new Error('Not implemented')
})

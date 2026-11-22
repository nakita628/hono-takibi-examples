import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV4RolloutsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const rolloutsHandler = app.openapi(postApiV4RolloutsIdRoute, (c) => {
  throw new Error('Not implemented')
})

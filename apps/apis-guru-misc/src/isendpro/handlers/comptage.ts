import { OpenAPIHono } from '@hono/zod-openapi'
import { postComptageRoute } from '../routes'

const app = new OpenAPIHono()

export const comptageHandler = app.openapi(postComptageRoute, (c) => {
  throw new Error('Not implemented')
})

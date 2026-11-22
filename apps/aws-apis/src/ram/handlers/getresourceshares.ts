import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetresourcesharesRoute } from '../routes'

const app = new OpenAPIHono()

export const getresourcesharesHandler = app.openapi(postGetresourcesharesRoute, (c) => {
  throw new Error('Not implemented')
})

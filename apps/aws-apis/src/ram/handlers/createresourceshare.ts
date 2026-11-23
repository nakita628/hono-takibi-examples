import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateresourceshareRoute } from '../routes'

const app = new OpenAPIHono()

export const createresourceshareHandler = app.openapi(postCreateresourceshareRoute, (c) => {
  throw new Error('Not implemented')
})

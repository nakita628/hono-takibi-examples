import { OpenAPIHono } from '@hono/zod-openapi'
import { postStatus401Route } from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app.openapi(postStatus401Route, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubmitRoute } from '../routes'

const app = new OpenAPIHono()

export const submitHandler = app.openapi(postSubmitRoute, (c) => {
  throw new Error('Not implemented')
})

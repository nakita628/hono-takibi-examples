import { OpenAPIHono } from '@hono/zod-openapi'
import { postChangeStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const changeStatusHandler = app.openapi(postChangeStatusRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postDisablePermitRoute } from '../routes'

const app = new OpenAPIHono()

export const disablePermitHandler = app.openapi(postDisablePermitRoute, (c) => {
  throw new Error('Not implemented')
})

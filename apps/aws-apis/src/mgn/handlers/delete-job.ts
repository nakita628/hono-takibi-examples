import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteJobRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteJobHandler = app.openapi(postDeleteJobRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteObjectsOnCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteObjectsOnCancelHandler = app.openapi(postDeleteObjectsOnCancelRoute, (c) => {
  throw new Error('Not implemented')
})

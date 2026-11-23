import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeleteresourceshareResourceShareArnRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteresourceshareResourceShareArnHandler = app.openapi(
  deleteDeleteresourceshareResourceShareArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

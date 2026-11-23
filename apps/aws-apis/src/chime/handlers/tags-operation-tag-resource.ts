import { OpenAPIHono } from '@hono/zod-openapi'
import { postTagsOperationTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsOperationTagResourceHandler = app.openapi(
  postTagsOperationTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

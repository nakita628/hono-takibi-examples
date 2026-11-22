import { OpenAPIHono } from '@hono/zod-openapi'
import { postTagsOperationUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsOperationUntagResourceHandler = app.openapi(
  postTagsOperationUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

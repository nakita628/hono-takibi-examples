import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemoveLFTagsFromResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const removeLfTagsFromResourceHandler = app.openapi(
  postRemoveLFTagsFromResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

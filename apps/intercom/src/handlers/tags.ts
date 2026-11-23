import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteTagsTagIdRoute, getTagsRoute, getTagsTagIdRoute, postTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteTagsIdRoute, getTagsRoute, postTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

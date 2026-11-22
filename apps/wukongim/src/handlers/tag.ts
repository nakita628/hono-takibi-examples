import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagRoute, getTagsRoute, postTagRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const tagHandler = app
  .openapi(getTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })

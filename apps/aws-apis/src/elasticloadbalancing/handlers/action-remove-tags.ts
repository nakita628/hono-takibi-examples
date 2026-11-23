import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRemoveTagsRoute, postActionRemoveTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionRemoveTagsHandler = app
  .openapi(getActionRemoveTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRemoveTagsRoute, (c) => {
    throw new Error('Not implemented')
  })

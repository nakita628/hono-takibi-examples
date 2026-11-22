import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAddTagsRoute, postActionAddTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAddTagsHandler = app
  .openapi(getActionAddTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAddTagsRoute, (c) => {
    throw new Error('Not implemented')
  })

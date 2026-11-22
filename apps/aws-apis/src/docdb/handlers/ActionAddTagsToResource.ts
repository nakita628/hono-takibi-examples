import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAddTagsToResourceRoute, postActionAddTagsToResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAddTagsToResourceHandler = app
  .openapi(getActionAddTagsToResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAddTagsToResourceRoute, (c) => {
    throw new Error('Not implemented')
  })

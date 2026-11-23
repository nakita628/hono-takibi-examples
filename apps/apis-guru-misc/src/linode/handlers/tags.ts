import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteTagsLabelRoute, getTagsLabelRoute, getTagsRoute, postTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsLabelRoute, (c) => {
    throw new Error('Not implemented')
  })

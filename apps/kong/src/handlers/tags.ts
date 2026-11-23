import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagsRoute, getTagsTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })

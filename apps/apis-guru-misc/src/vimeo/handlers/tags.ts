import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagsWordRoute, getTagsWordVideosRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsWordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsWordVideosRoute, (c) => {
    throw new Error('Not implemented')
  })

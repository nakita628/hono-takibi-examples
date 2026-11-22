import { OpenAPIHono } from '@hono/zod-openapi'
import { getStreamsTagsRoute, getTagsStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })

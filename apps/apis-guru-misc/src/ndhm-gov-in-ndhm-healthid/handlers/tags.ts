import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1HaTagsRoute, getV1HaTagsRoute, postV1HaTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(deleteV1HaTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HaTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HaTagsRoute, (c) => {
    throw new Error('Not implemented')
  })

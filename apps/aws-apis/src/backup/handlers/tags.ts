import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagsResourceArnIndexRoute, postTagsResourceArnRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsResourceArnIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })

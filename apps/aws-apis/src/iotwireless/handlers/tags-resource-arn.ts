import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagsResourceArnRoute, postTagsResourceArnRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsResourceArnHandler = app
  .openapi(getTagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })

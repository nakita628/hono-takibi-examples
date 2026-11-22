import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceARNTagKeysRoute,
  getTagsResourceARNRoute,
  postTagsResourceARNRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsResourceARNRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsResourceARNRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsResourceARNTagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })

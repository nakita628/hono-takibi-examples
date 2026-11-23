import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  getTagsResourceArnRoute,
  putTagsResourceArnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsResourceArnTagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })

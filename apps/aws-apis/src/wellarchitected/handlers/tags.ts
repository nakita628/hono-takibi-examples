import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsWorkloadArnTagKeysRoute,
  getTagsWorkloadArnRoute,
  postTagsWorkloadArnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsWorkloadArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsWorkloadArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsWorkloadArnTagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })

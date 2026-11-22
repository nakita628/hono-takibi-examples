import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TagsTagNameRoute,
  getV1TagsRoute,
  postV1TagsTagNameRoute,
  putV1TagsTagNameNewTagNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TagsTagNameNewTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })

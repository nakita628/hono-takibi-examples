import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsTagIdRoute,
  getTagsRoute,
  getTagsTagIdBookmarksRoute,
  getTagsTagIdRoute,
  patchTagsTagIdRoute,
  postTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagIdBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })

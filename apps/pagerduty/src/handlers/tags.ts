import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsIdRoute,
  getEntityTypeIdTagsRoute,
  getTagsIdEntityTypeRoute,
  getTagsIdRoute,
  getTagsRoute,
  postEntityTypeIdChangeTagsRoute,
  postTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(postEntityTypeIdChangeTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntityTypeIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsIdEntityTypeRoute, (c) => {
    throw new Error('Not implemented')
  })

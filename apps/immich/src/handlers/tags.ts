import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsIdAssetsRoute,
  deleteTagsIdRoute,
  getTagsIdRoute,
  getTagsRoute,
  postTagsRoute,
  putTagsAssetsRoute,
  putTagsIdAssetsRoute,
  putTagsIdRoute,
  putTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTagsAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTagsIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTagsIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })

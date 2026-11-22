import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1TagsIdRoute,
  getApiV1TagsCreateRoute,
  getApiV1TagsIdEditRoute,
  getApiV1TagsIdRoute,
  getApiV1TagsRoute,
  postApiV1TagsBulkRoute,
  postApiV1TagsRoute,
  putApiV1TagsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getApiV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })

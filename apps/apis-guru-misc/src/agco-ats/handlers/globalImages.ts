import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2GlobalImagesIDRoute,
  getApiV2GlobalImagesIDImageContentsRoute,
  getApiV2GlobalImagesIDRoute,
  getApiV2GlobalImagesRoute,
  postApiV2GlobalImagesRoute,
  putApiV2GlobalImagesIDImageContentsRoute,
  putApiV2GlobalImagesIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalImagesHandler = app
  .openapi(getApiV2GlobalImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GlobalImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2GlobalImagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GlobalImagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2GlobalImagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GlobalImagesIDImageContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2GlobalImagesIDImageContentsRoute, (c) => {
    throw new Error('Not implemented')
  })

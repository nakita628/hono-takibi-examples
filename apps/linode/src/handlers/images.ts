import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionImagesImageIdRoute,
  getApiVersionImagesImageIdRoute,
  getApiVersionImagesRoute,
  postApiVersionImagesImageIdRegionsRoute,
  postApiVersionImagesRoute,
  postApiVersionImagesUploadRoute,
  putApiVersionImagesImageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(postApiVersionImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionImagesUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionImagesImageIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })

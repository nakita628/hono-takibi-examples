import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteImagesImageIdRoute,
  getImagesImageIdRoute,
  getImagesRoute,
  postImagesRoute,
  postImagesUploadRoute,
  putImagesImageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(getImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImagesUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })

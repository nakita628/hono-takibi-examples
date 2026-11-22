import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppPreviewsIdRoute,
  getV1AppPreviewsIdRoute,
  patchV1AppPreviewsIdRoute,
  postV1AppPreviewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appPreviewsHandler = app
  .openapi(postV1AppPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppPreviewsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPreviewsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppPreviewsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

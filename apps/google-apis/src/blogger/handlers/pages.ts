import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3BlogsBlogIdPagesPageIdRoute,
  getV3BlogsBlogIdPagesPageIdRoute,
  getV3BlogsBlogIdPagesRoute,
  patchV3BlogsBlogIdPagesPageIdRoute,
  postV3BlogsBlogIdPagesPageIdPublishRoute,
  postV3BlogsBlogIdPagesPageIdRevertRoute,
  postV3BlogsBlogIdPagesRoute,
  putV3BlogsBlogIdPagesPageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pagesHandler = app
  .openapi(getV3BlogsBlogIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BlogsBlogIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3BlogsBlogIdPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BlogsBlogIdPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3BlogsBlogIdPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3BlogsBlogIdPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BlogsBlogIdPagesPageIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BlogsBlogIdPagesPageIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })

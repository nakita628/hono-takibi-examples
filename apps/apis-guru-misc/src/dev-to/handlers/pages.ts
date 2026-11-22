import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPagesIdRoute,
  getApiPagesIdRoute,
  getApiPagesRoute,
  postApiPagesRoute,
  putApiPagesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pagesHandler = app
  .openapi(getApiPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

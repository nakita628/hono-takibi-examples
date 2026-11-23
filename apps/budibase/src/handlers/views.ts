import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteViewsViewIdRoute,
  getViewsViewIdRoute,
  postViewsRoute,
  postViewsSearchRoute,
  postViewsViewIdRowsSearchRoute,
  putViewsViewIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const viewsHandler = app
  .openapi(postViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postViewsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postViewsViewIdRowsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })

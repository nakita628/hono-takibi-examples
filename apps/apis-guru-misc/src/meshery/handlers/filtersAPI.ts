import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiFilterIdRoute,
  getApiFilterFileIdRoute,
  getApiFilterIdRoute,
  getApiFilterRoute,
  postApiFilterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filtersAPIHandler = app
  .openapi(getApiFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFilterFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })

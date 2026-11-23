import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePathNameRoute,
  getPathNameRoute,
  postPathIndexRoute,
  postPathNameRoute,
  postPathNameRwHtmlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pathHandler = app
  .openapi(postPathIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePathNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPathNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPathNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPathNameRwHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })

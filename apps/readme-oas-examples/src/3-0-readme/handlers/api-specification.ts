import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiSpecificationIdRoute,
  getApiSpecificationRoute,
  postApiSpecificationRoute,
  putApiSpecificationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiSpecificationHandler = app
  .openapi(getApiSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiSpecificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSpecificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })

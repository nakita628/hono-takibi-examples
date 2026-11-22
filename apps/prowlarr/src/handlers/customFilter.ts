import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1CustomfilterIdRoute,
  getApiV1CustomfilterIdRoute,
  getApiV1CustomfilterRoute,
  postApiV1CustomfilterRoute,
  putApiV1CustomfilterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customFilterHandler = app
  .openapi(getApiV1CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomfilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomfilterRoute, (c) => {
    throw new Error('Not implemented')
  })

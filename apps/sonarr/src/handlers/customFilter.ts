import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3CustomfilterIdRoute,
  getApiV3CustomfilterIdRoute,
  getApiV3CustomfilterRoute,
  postApiV3CustomfilterRoute,
  putApiV3CustomfilterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customFilterHandler = app
  .openapi(getApiV3CustomfilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3CustomfilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CustomfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })

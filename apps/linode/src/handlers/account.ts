import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionAccountRoute,
  postApiVersionAccountCancelRoute,
  putApiVersionAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getApiVersionAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountCancelRoute, (c) => {
    throw new Error('Not implemented')
  })

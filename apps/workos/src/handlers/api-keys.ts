import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeysIdRoute,
  postApiKeysIdExpireRoute,
  postApiKeysValidationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(postApiKeysValidationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeysIdExpireRoute, (c) => {
    throw new Error('Not implemented')
  })

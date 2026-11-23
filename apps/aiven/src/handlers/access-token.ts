import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccessTokenTokenPrefixRoute,
  getAccessTokenRoute,
  postAccessTokenRoute,
  putAccessTokenTokenPrefixRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessTokenHandler = app
  .openapi(postAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccessTokenTokenPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccessTokenTokenPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })

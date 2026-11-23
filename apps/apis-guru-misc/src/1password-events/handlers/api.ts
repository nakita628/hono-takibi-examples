import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAuthIntrospectRoute,
  postApiV1ItemusagesRoute,
  postApiV1SigninattemptsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiAuthIntrospectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ItemusagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SigninattemptsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSigninSigninIdRoute,
  getSigninSigninIdRoute,
  postSigninRoute,
  putSigninSigninIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const signinHandler = app
  .openapi(postSigninRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSigninSigninIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigninSigninIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSigninSigninIdRoute, (c) => {
    throw new Error('Not implemented')
  })

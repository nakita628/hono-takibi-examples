import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSigninSigninIdRoute,
  getSigninSigninIdRoute,
  getSigninsRoute,
  postSigninRoute,
  putSigninSigninIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attendeesSigninsHandler = app
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
  .openapi(getSigninsRoute, (c) => {
    throw new Error('Not implemented')
  })

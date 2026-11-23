import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthorizationsAuthIDRoute,
  getAuthorizationsAuthIDRoute,
  getAuthorizationsRoute,
  patchAuthorizationsAuthIDRoute,
  postAuthorizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorizationsHandler = app
  .openapi(getAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthorizationsAuthIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationsAuthIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthorizationsAuthIDRoute, (c) => {
    throw new Error('Not implemented')
  })

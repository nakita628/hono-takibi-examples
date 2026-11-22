import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSignRequestsRoute,
  getSignRequestsSignRequestIdRoute,
  postSignRequestsRoute,
  postSignRequestsSignRequestIdCancelRoute,
  postSignRequestsSignRequestIdResendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boxSignRequestsHandler = app
  .openapi(postSignRequestsSignRequestIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignRequestsSignRequestIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSignRequestsSignRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSignRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })

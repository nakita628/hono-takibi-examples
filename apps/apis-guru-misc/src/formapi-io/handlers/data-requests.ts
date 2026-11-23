import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDataRequestsDataRequestIdRoute,
  postDataRequestsDataRequestIdTokensRoute,
  putDataRequestsDataRequestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataRequestsHandler = app
  .openapi(getDataRequestsDataRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataRequestsDataRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataRequestsDataRequestIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })

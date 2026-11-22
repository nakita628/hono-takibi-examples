import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicInternetGatewaysIdRoute,
  getPublicInternetGatewaysIdRoute,
  getPublicInternetGatewaysRoute,
  postPublicInternetGatewaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicInternetGatewaysHandler = app
  .openapi(getPublicInternetGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicInternetGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicInternetGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicInternetGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })

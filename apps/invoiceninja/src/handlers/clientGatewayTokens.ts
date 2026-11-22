import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ClientGatewayTokensIdRoute,
  getApiV1ClientGatewayTokensCreateRoute,
  getApiV1ClientGatewayTokensIdEditRoute,
  getApiV1ClientGatewayTokensIdRoute,
  getApiV1ClientGatewayTokensRoute,
  postApiV1ClientGatewayTokensRoute,
  putApiV1ClientGatewayTokensIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientGatewayTokensHandler = app
  .openapi(getApiV1ClientGatewayTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientGatewayTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientGatewayTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ClientGatewayTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ClientGatewayTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientGatewayTokensIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientGatewayTokensCreateRoute, (c) => {
    throw new Error('Not implemented')
  })

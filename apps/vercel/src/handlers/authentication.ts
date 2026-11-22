import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3UserTokensTokenIdRoute,
  getV5UserTokensTokenIdRoute,
  getV6UserTokensRoute,
  postV1IntegrationsSsoTokenRoute,
  postV3UserTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postV1IntegrationsSsoTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV6UserTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3UserTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV5UserTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3UserTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })

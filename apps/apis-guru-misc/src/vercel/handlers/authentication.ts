import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3UserTokensTokenIdRoute,
  getRegistrationVerifyRoute,
  getV5UserTokensRoute,
  getV5UserTokensTokenIdRoute,
  postRegistrationRoute,
  postV3UserTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3UserTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3UserTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV5UserTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV5UserTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })

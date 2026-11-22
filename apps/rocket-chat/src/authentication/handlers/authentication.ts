import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1MeRoute,
  postApiV1LoginCodeRedeemRoute,
  postApiV1LoginRoute,
  postApiV1LogoutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postApiV1LoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LoginCodeRedeemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MeRoute, (c) => {
    throw new Error('Not implemented')
  })

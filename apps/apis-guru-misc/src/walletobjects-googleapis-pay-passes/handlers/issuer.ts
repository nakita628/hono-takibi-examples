import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1IssuerResourceIdRoute,
  getWalletobjectsV1IssuerRoute,
  patchWalletobjectsV1IssuerResourceIdRoute,
  postWalletobjectsV1IssuerRoute,
  putWalletobjectsV1IssuerResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issuerHandler = app
  .openapi(getWalletobjectsV1IssuerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1IssuerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1IssuerResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1IssuerResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1IssuerResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

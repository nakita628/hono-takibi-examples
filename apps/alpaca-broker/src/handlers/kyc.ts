import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AccountsAccountIdCipRoute,
  getV1AccountsAccountIdOnfidoSdkTokensRoute,
  patchV1AccountsAccountIdOnfidoSdkRoute,
  postV1AccountsAccountIdCipRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kycHandler = app
  .openapi(getV1AccountsAccountIdCipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdCipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AccountsAccountIdOnfidoSdkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdOnfidoSdkTokensRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlatformApiV1AccountsAccountIdRoute,
  getPlatformApiV1AccountsAccountIdRoute,
  patchPlatformApiV1AccountsAccountIdRoute,
  postPlatformApiV1AccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(postPlatformApiV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformApiV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlatformApiV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlatformApiV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })

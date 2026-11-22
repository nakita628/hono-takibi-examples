import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1PermissionsResourceIdRoute,
  putWalletobjectsV1PermissionsResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(getWalletobjectsV1PermissionsResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1PermissionsResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRestServicedeskapiCustomerRoute,
  putRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customerHandler = app
  .openapi(postRestServicedeskapiCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccessRoute, (c) => {
    throw new Error('Not implemented')
  })

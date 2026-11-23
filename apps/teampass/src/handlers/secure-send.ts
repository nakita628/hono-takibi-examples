import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecureSendRevokeRoute,
  getSecureSendListRoute,
  getSecureSendPolicyRoute,
  postSecureSendCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secureSendHandler = app
  .openapi(getSecureSendPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecureSendCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecureSendListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecureSendRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })

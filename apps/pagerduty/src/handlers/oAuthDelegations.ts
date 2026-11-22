import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOauthDelegationsRoute,
  getOauthDelegationsRevocationRequestsStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthDelegationsHandler = app
  .openapi(deleteOauthDelegationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthDelegationsRevocationRequestsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

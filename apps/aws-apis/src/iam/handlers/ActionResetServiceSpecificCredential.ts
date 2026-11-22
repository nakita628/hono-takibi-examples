import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionResetServiceSpecificCredentialRoute,
  postActionResetServiceSpecificCredentialRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionResetServiceSpecificCredentialHandler = app
  .openapi(getActionResetServiceSpecificCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResetServiceSpecificCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetIdentityVerificationAttributesRoute,
  postActionGetIdentityVerificationAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetIdentityVerificationAttributesHandler = app
  .openapi(getActionGetIdentityVerificationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetIdentityVerificationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })

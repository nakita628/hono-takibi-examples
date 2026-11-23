import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetIdentityMailFromDomainAttributesRoute,
  postActionGetIdentityMailFromDomainAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetIdentityMailFromDomainAttributesHandler = app
  .openapi(getActionGetIdentityMailFromDomainAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetIdentityMailFromDomainAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })

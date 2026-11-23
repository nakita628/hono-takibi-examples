import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetIdentityMailFromDomainRoute,
  postActionSetIdentityMailFromDomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSetIdentityMailFromDomainHandler = app
  .openapi(getActionSetIdentityMailFromDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetIdentityMailFromDomainRoute, (c) => {
    throw new Error('Not implemented')
  })

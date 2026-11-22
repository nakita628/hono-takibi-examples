import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserCustomerZendeskTokenRoute,
  postV2UserCustomerSecurityLogoutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customer__SecurityHandler = app
  .openapi(postV2UserCustomerSecurityLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerZendeskTokenRoute, (c) => {
    throw new Error('Not implemented')
  })

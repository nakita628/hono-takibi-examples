import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionResetAddressAttributeRoute,
  postActionResetAddressAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionResetAddressAttributeHandler = app
  .openapi(getActionResetAddressAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResetAddressAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })

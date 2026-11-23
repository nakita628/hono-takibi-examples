import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionResetInstanceAttributeRoute,
  postActionResetInstanceAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionResetInstanceAttributeHandler = app
  .openapi(getActionResetInstanceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResetInstanceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })

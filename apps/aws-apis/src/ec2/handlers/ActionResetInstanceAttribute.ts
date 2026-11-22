import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionResetInstanceAttributeRoute,
  postActionResetInstanceAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionResetInstanceAttributeHandler = app
  .openapi(getActionResetInstanceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResetInstanceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })

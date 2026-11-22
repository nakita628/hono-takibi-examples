import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifySubnetAttributeRoute,
  postActionModifySubnetAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifySubnetAttributeHandler = app
  .openapi(getActionModifySubnetAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifySubnetAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })

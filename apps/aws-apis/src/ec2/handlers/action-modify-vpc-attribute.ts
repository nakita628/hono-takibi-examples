import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyVpcAttributeRoute, postActionModifyVpcAttributeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyVpcAttributeHandler = app
  .openapi(getActionModifyVpcAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVpcAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })

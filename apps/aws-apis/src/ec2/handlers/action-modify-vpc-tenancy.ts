import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyVpcTenancyRoute, postActionModifyVpcTenancyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyVpcTenancyHandler = app
  .openapi(getActionModifyVpcTenancyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVpcTenancyRoute, (c) => {
    throw new Error('Not implemented')
  })

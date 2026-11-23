import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVpcPeeringConnectionOptionsRoute,
  postActionModifyVpcPeeringConnectionOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyVpcPeeringConnectionOptionsHandler = app
  .openapi(getActionModifyVpcPeeringConnectionOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVpcPeeringConnectionOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

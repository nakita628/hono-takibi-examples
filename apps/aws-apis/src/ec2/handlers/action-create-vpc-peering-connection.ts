import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateVpcPeeringConnectionRoute,
  postActionCreateVpcPeeringConnectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateVpcPeeringConnectionHandler = app
  .openapi(getActionCreateVpcPeeringConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVpcPeeringConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteVpcPeeringConnectionRoute,
  postActionDeleteVpcPeeringConnectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteVpcPeeringConnectionHandler = app
  .openapi(getActionDeleteVpcPeeringConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVpcPeeringConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })

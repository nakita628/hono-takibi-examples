import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVpcIdRoute,
  getVpcIdRoute,
  getVpcRoute,
  postVpcRoute,
  putVpcIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vpcManagementHandler = app
  .openapi(postVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })

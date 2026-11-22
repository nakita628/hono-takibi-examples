import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVpcVpcIdSubnetIdRoute,
  getVpcVpcIdSubnetIdRoute,
  getVpcVpcIdSubnetRoute,
  postVpcVpcIdSubnetRoute,
  putVpcVpcIdSubnetIdRoute,
  putVpcVpcIdSubnetSubnetIdAttachRoute,
  putVpcVpcIdSubnetSubnetIdDetachRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vpcSubnetHandler = app
  .openapi(putVpcVpcIdSubnetSubnetIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpcVpcIdSubnetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVpcVpcIdSubnetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVpcVpcIdSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVpcVpcIdSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpcVpcIdSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVpcVpcIdSubnetSubnetIdDetachRoute, (c) => {
    throw new Error('Not implemented')
  })

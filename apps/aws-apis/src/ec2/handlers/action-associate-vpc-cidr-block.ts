import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateVpcCidrBlockRoute,
  postActionAssociateVpcCidrBlockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAssociateVpcCidrBlockHandler = app
  .openapi(getActionAssociateVpcCidrBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateVpcCidrBlockRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateVpcCidrBlockRoute,
  postActionDisassociateVpcCidrBlockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisassociateVpcCidrBlockHandler = app
  .openapi(getActionDisassociateVpcCidrBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateVpcCidrBlockRoute, (c) => {
    throw new Error('Not implemented')
  })

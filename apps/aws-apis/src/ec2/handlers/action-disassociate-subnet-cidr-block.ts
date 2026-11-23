import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateSubnetCidrBlockRoute,
  postActionDisassociateSubnetCidrBlockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisassociateSubnetCidrBlockHandler = app
  .openapi(getActionDisassociateSubnetCidrBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateSubnetCidrBlockRoute, (c) => {
    throw new Error('Not implemented')
  })

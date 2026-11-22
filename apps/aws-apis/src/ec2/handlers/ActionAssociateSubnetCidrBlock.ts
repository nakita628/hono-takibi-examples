import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateSubnetCidrBlockRoute,
  postActionAssociateSubnetCidrBlockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAssociateSubnetCidrBlockHandler = app
  .openapi(getActionAssociateSubnetCidrBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateSubnetCidrBlockRoute, (c) => {
    throw new Error('Not implemented')
  })

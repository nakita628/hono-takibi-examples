import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateInstanceEventWindowRoute,
  postActionAssociateInstanceEventWindowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAssociateInstanceEventWindowHandler = app
  .openapi(getActionAssociateInstanceEventWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateInstanceEventWindowRoute, (c) => {
    throw new Error('Not implemented')
  })

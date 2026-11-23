import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateInstanceEventWindowRoute,
  postActionDisassociateInstanceEventWindowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisassociateInstanceEventWindowHandler = app
  .openapi(getActionDisassociateInstanceEventWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateInstanceEventWindowRoute, (c) => {
    throw new Error('Not implemented')
  })

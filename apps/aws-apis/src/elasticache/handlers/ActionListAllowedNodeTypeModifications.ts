import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListAllowedNodeTypeModificationsRoute,
  postActionListAllowedNodeTypeModificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListAllowedNodeTypeModificationsHandler = app
  .openapi(getActionListAllowedNodeTypeModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListAllowedNodeTypeModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })

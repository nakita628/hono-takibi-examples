import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateEnvironmentOperationsRoleRoute,
  postActionDisassociateEnvironmentOperationsRoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisassociateEnvironmentOperationsRoleHandler = app
  .openapi(getActionDisassociateEnvironmentOperationsRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateEnvironmentOperationsRoleRoute, (c) => {
    throw new Error('Not implemented')
  })

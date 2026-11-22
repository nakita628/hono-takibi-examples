import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateEnvironmentOperationsRoleRoute,
  postActionAssociateEnvironmentOperationsRoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAssociateEnvironmentOperationsRoleHandler = app
  .openapi(getActionAssociateEnvironmentOperationsRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateEnvironmentOperationsRoleRoute, (c) => {
    throw new Error('Not implemented')
  })

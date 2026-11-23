import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateEnvironmentOperationsRoleRoute,
  postActionAssociateEnvironmentOperationsRoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAssociateEnvironmentOperationsRoleHandler = app
  .openapi(getActionAssociateEnvironmentOperationsRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateEnvironmentOperationsRoleRoute, (c) => {
    throw new Error('Not implemented')
  })

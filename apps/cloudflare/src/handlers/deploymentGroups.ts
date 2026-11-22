import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDevicesDeploymentGroupsGroupIdRoute,
  getAccountsAccountIdDevicesDeploymentGroupsGroupIdRoute,
  getAccountsAccountIdDevicesDeploymentGroupsRoute,
  patchAccountsAccountIdDevicesDeploymentGroupsGroupIdRoute,
  postAccountsAccountIdDevicesDeploymentGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploymentGroupsHandler = app
  .openapi(getAccountsAccountIdDevicesDeploymentGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDevicesDeploymentGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDevicesDeploymentGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesDeploymentGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDevicesDeploymentGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })

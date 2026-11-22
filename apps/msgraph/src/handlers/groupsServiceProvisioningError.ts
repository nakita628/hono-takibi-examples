import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGroupsGroupIdServiceProvisioningErrorsCountRoute,
  getGroupsGroupIdServiceProvisioningErrorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsServiceProvisioningErrorHandler = app
  .openapi(getGroupsGroupIdServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })

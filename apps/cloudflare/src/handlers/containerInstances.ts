import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdContainersApplicationsApplicationIdInstancesInstanceIdRoute,
  getAccountsAccountIdContainersApplicationsApplicationIdInstancesRoute,
  getAccountsAccountIdContainersApplicationsApplicationIdInstancesV2Route,
} from '../routes'

const app = new OpenAPIHono()

export const containerInstancesHandler = app
  .openapi(getAccountsAccountIdContainersApplicationsApplicationIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdContainersApplicationsApplicationIdInstancesV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdContainersApplicationsApplicationIdInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

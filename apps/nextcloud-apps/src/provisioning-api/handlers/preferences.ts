import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRoute,
  deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRoute,
  postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRoute,
  postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const preferencesHandler = app
  .openapi(postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })

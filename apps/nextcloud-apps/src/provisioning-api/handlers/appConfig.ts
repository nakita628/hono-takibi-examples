import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute,
  getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute,
  getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppRoute,
  getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsRoute,
  postOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appConfigHandler = app
  .openapi(getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute, (c) => {
    throw new Error('Not implemented')
  })

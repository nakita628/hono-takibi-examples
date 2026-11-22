import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1InstanceConfigurationRoute, postV1InstanceConfigurationSetupRoute } from '../routes'

const app = new OpenAPIHono()

export const instanceConfigurationHandler = app
  .openapi(getV1InstanceConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstanceConfigurationSetupRoute, (c) => {
    throw new Error('Not implemented')
  })

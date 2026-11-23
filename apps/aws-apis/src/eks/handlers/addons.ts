import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAddonsConfigurationSchemasAddonNameAddonVersionRoute,
  getAddonsSupportedVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addonsHandler = app
  .openapi(getAddonsConfigurationSchemasAddonNameAddonVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddonsSupportedVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })

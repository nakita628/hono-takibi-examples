import { OpenAPIHono } from '@hono/zod-openapi'
import { getUtilityLicenseTypesRoute, getUtilityLicensingModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const utilityHandler = app
  .openapi(getUtilityLicenseTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUtilityLicensingModelsRoute, (c) => {
    throw new Error('Not implemented')
  })

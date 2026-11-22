import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAdminFeatureTypesRoute, putApiAdminFeatureTypesIdLifetimeRoute } from '../routes'

const app = new OpenAPIHono()

export const featureTypesHandler = app
  .openapi(getApiAdminFeatureTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminFeatureTypesIdLifetimeRoute, (c) => {
    throw new Error('Not implemented')
  })

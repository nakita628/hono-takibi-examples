import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiAdminPlaygroundAdvancedRoute,
  postApiAdminPlaygroundFeaturesFeatureNameRoute,
  postApiAdminPlaygroundRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playgroundHandler = app
  .openapi(postApiAdminPlaygroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminPlaygroundAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminPlaygroundFeaturesFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })

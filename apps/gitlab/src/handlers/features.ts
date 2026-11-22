import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4FeaturesNameRoute,
  getApiV4FeaturesDefinitionsRoute,
  getApiV4FeaturesRoute,
  postApiV4FeaturesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featuresHandler = app
  .openapi(getApiV4FeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4FeaturesDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4FeaturesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4FeaturesNameRoute, (c) => {
    throw new Error('Not implemented')
  })

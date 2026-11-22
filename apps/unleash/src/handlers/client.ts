import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiClientFeaturesFeatureNameRoute,
  getApiClientFeaturesRoute,
  postApiClientMetricsRoute,
  postApiClientRegisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientHandler = app
  .openapi(getApiClientFeaturesFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClientFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })

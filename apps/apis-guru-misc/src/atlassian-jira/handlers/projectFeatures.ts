import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3ProjectProjectIdOrKeyFeaturesRoute,
  putRestApi3ProjectProjectIdOrKeyFeaturesFeatureKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectFeaturesHandler = app
  .openapi(getRestApi3ProjectProjectIdOrKeyFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdOrKeyFeaturesFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })

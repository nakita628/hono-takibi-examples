import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2FeaturesIdRoute,
  getV2FeatureKeysRoute,
  getV2FeaturesIdRoute,
  getV2FeaturesRoute,
  getV2StaleFeaturesRoute,
  postV2FeaturesIdRevertRoute,
  postV2FeaturesIdRoute,
  postV2FeaturesIdToggleRoute,
  postV2FeaturesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featuresV2Handler = app
  .openapi(getV2FeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2FeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FeaturesIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FeatureKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StaleFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })

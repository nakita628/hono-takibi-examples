import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1FeaturesIdRoute,
  getV1FeatureKeysRoute,
  getV1FeaturesIdRoute,
  getV1FeaturesRoute,
  getV1StaleFeaturesRoute,
  postV1FeaturesIdRevertRoute,
  postV1FeaturesIdRoute,
  postV1FeaturesIdToggleRoute,
  postV1FeaturesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featuresHandler = app
  .openapi(getV1FeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FeatureKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StaleFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })

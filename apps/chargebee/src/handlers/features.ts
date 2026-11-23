import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFeaturesFeatureIdItemEntitlementsRoute,
  getFeaturesFeatureIdRoute,
  getFeaturesRoute,
  postFeaturesFeatureIdActivateCommandRoute,
  postFeaturesFeatureIdArchiveCommandRoute,
  postFeaturesFeatureIdDeleteRoute,
  postFeaturesFeatureIdItemEntitlementsRoute,
  postFeaturesFeatureIdReactivateCommandRoute,
  postFeaturesFeatureIdRoute,
  postFeaturesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featuresHandler = app
  .openapi(getFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeaturesFeatureIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeaturesFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeaturesFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeaturesFeatureIdArchiveCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeaturesFeatureIdActivateCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeaturesFeatureIdReactivateCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeaturesFeatureIdItemEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeaturesFeatureIdItemEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })

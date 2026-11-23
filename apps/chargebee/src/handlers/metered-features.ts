import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMeteredFeaturesMeteredFeatureIdArchiveCommandRoute,
  postMeteredFeaturesMeteredFeatureIdDeleteRoute,
  postMeteredFeaturesMeteredFeatureIdReactivateCommandRoute,
  postMeteredFeaturesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meteredFeaturesHandler = app
  .openapi(postMeteredFeaturesMeteredFeatureIdReactivateCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeteredFeaturesMeteredFeatureIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeteredFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeteredFeaturesMeteredFeatureIdArchiveCommandRoute, (c) => {
    throw new Error('Not implemented')
  })

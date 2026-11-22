import { OpenAPIHono } from '@hono/zod-openapi'
import { getExperimentalFeaturesRoute, patchExperimentalFeaturesRoute } from '../routes'

const app = new OpenAPIHono()

export const experimentalFeaturesHandler = app
  .openapi(getExperimentalFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExperimentalFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })

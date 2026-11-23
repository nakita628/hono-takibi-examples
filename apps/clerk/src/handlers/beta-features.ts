import { OpenAPIHono } from '@hono/zod-openapi'
import { patchBetaFeaturesInstanceSettingsRoute, putBetaFeaturesDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const betaFeaturesHandler = app
  .openapi(patchBetaFeaturesInstanceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBetaFeaturesDomainRoute, (c) => {
    throw new Error('Not implemented')
  })

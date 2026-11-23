import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeaturesRoute, postFeaturesResetRoute } from '../routes'

const app = new OpenAPIHono()

export const featuresHandler = app
  .openapi(getFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeaturesResetRoute, (c) => {
    throw new Error('Not implemented')
  })

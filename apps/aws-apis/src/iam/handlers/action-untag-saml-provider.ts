import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUntagSAMLProviderRoute, postActionUntagSAMLProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUntagSamlProviderHandler = app
  .openapi(getActionUntagSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUntagSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })

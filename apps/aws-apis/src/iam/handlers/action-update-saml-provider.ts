import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateSAMLProviderRoute, postActionUpdateSAMLProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUpdateSamlProviderHandler = app
  .openapi(getActionUpdateSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateSAMLProviderRoute, postActionUpdateSAMLProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateSAMLProviderHandler = app
  .openapi(getActionUpdateSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })

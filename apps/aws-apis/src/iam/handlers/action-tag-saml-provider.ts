import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionTagSAMLProviderRoute, postActionTagSAMLProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const actionTagSamlProviderHandler = app
  .openapi(getActionTagSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTagSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteSAMLProviderRoute, postActionDeleteSAMLProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteSamlProviderHandler = app
  .openapi(getActionDeleteSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })

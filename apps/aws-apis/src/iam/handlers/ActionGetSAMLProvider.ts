import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetSAMLProviderRoute, postActionGetSAMLProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetSAMLProviderHandler = app
  .openapi(getActionGetSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })

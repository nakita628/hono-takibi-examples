import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateSAMLProviderRoute, postActionCreateSAMLProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateSAMLProviderHandler = app
  .openapi(getActionCreateSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateSAMLProviderRoute, (c) => {
    throw new Error('Not implemented')
  })

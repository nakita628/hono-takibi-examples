import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListSAMLProviderTagsRoute, postActionListSAMLProviderTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListSamlProviderTagsHandler = app
  .openapi(getActionListSAMLProviderTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListSAMLProviderTagsRoute, (c) => {
    throw new Error('Not implemented')
  })

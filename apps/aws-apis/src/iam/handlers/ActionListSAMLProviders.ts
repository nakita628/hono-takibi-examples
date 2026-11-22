import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListSAMLProvidersRoute, postActionListSAMLProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListSAMLProvidersHandler = app
  .openapi(getActionListSAMLProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListSAMLProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })

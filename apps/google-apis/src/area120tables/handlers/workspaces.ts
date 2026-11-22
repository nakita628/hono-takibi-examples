import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1alpha1NameRoute, getV1alpha1WorkspacesRoute } from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(getV1alpha1WorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })

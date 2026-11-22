import { OpenAPIHono } from '@hono/zod-openapi'
import { getSecurityControlsDefinitionsRoute, postSecurityControlsBatchGetRoute } from '../routes'

const app = new OpenAPIHono()

export const securityControlsHandler = app
  .openapi(postSecurityControlsBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityControlsDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getResourcesNameRoute, getResourcesServiceServiceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(getResourcesServiceServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesNameRoute, (c) => {
    throw new Error('Not implemented')
  })

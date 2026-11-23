import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourcesAccountKindIdentifierRoute,
  getResourcesAccountKindRoute,
  getResourcesAccountRoute,
  getResourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(getResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesAccountKindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesAccountKindIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })

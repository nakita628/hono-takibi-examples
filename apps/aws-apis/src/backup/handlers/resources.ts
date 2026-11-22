import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourcesIndexRoute,
  getResourcesResourceArnRecoveryPointsIndexRoute,
  getResourcesResourceArnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(getResourcesResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesResourceArnRecoveryPointsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

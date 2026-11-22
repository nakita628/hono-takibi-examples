import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteResourcesResourceArnTagsKeysRoute,
  getResourcesResourceArnTagsRoute,
  postResourcesResourceArnTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(getResourcesResourceArnTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourcesResourceArnTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteResourcesResourceArnTagsKeysRoute, (c) => {
    throw new Error('Not implemented')
  })

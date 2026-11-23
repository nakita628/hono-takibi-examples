import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourcesArnTagsRoute,
  patchResourcesArnTagsRoute,
  postResourcesSearchRoute,
  putResourcesArnTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(getResourcesArnTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putResourcesArnTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchResourcesArnTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourcesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })

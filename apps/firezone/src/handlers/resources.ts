import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteResourcesIdRoute,
  getResourcesIdRoute,
  getResourcesResourceIdPoolMembersRoute,
  getResourcesRoute,
  patchResourcesIdRoute,
  patchResourcesResourceIdPoolMembersRoute,
  postResourcesRoute,
  putResourcesIdRoute,
  putResourcesResourceIdPoolMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(getResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesResourceIdPoolMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchResourcesResourceIdPoolMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putResourcesResourceIdPoolMembersRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourcesResourceIdPoolMembersRoute,
  patchResourcesResourceIdPoolMembersRoute,
  putResourcesResourceIdPoolMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const poolMembersHandler = app
  .openapi(getResourcesResourceIdPoolMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchResourcesResourceIdPoolMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putResourcesResourceIdPoolMembersRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserHierarchyStructureInstanceIdRoute,
  postUserHierarchyStructureInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHierarchyStructureHandler = app
  .openapi(getUserHierarchyStructureInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserHierarchyStructureInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

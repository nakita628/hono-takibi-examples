import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEntitiesByUidUidRoute,
  getEntitiesByNameKindNamespaceNameAncestryRoute,
  getEntitiesByNameKindNamespaceNameRoute,
  getEntitiesByQueryRoute,
  getEntitiesByUidUidRoute,
  getEntitiesRoute,
  postEntitiesByQueryRoute,
  postEntitiesByRefsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entitiesHandler = app
  .openapi(getEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesByUidUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEntitiesByUidUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesByNameKindNamespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesByNameKindNamespaceNameAncestryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEntitiesByRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesByQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEntitiesByQueryRoute, (c) => {
    throw new Error('Not implemented')
  })

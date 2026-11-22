import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameRoute,
  getV2ParentActionsRoute,
  getV2ParentEntitiesRoute,
  getV2ParentEntityTypesRoute,
  patchV2NameRoute,
  postV2ConnectionExecuteSqlQueryRoute,
  postV2EntityTypeEntitiesDeleteEntitiesWithConditionsRoute,
  postV2EntityTypeEntitiesUpdateEntitiesWithConditionsRoute,
  postV2NameExecuteRoute,
  postV2ParentEntitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV2ConnectionExecuteSqlQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EntityTypeEntitiesDeleteEntitiesWithConditionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EntityTypeEntitiesUpdateEntitiesWithConditionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentEntityTypesRoute, (c) => {
    throw new Error('Not implemented')
  })

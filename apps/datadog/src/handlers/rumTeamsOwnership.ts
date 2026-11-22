import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RumConfigTeamsOwnershipMappingsIdRoute,
  getApiV2RumConfigTeamsOwnershipMappingsIdRoute,
  getApiV2RumConfigTeamsOwnershipMappingsRoute,
  getApiV2RumConfigTeamsOwnershipRulesRoute,
  postApiV2RumConfigTeamsOwnershipMappingsOperationsRoute,
  postApiV2RumConfigTeamsOwnershipMappingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumTeamsOwnershipHandler = app
  .openapi(getApiV2RumConfigTeamsOwnershipMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumConfigTeamsOwnershipMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumConfigTeamsOwnershipMappingsOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RumConfigTeamsOwnershipMappingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumConfigTeamsOwnershipMappingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumConfigTeamsOwnershipRulesRoute, (c) => {
    throw new Error('Not implemented')
  })

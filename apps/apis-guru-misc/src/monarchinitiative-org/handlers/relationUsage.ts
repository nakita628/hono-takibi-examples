import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRelationUsageBetweenSubjectCategoryObjectCategoryRoute,
  getRelationUsageIndexRoute,
  getRelationUsagePivotLabelRoute,
  getRelationUsagePivotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const relationUsageHandler = app
  .openapi(getRelationUsageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRelationUsageBetweenSubjectCategoryObjectCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRelationUsagePivotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRelationUsagePivotLabelRoute, (c) => {
    throw new Error('Not implemented')
  })

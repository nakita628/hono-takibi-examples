import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentEvaluationsRoute,
  getV1ParentExecutionsRoute,
  getV1ParentResultsRoute,
  getV1ParentRulesRoute,
  getV1ParentScannedResourcesRoute,
  postV1LocationInsightsWriteInsightRoute,
  postV1NameCancelRoute,
  postV1NameExecutionsRunRoute,
  postV1ParentEvaluationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1LocationInsightsWriteInsightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameExecutionsRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentScannedResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })

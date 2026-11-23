import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeRoute,
  getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringRoute,
  postBatchGetRecordRoute,
  putFeatureGroupFeatureGroupNameRoute,
} from './routes'
import {
  deleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeRouteHandler,
  getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringRouteHandler,
  postBatchGetRecordRouteHandler,
  putFeatureGroupFeatureGroupNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBatchGetRecordRoute, postBatchGetRecordRouteHandler)
  .openapi(
    deleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeRoute,
    deleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeRouteHandler,
  )
  .openapi(
    getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringRoute,
    getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringRouteHandler,
  )
  .openapi(putFeatureGroupFeatureGroupNameRoute, putFeatureGroupFeatureGroupNameRouteHandler)

export default app

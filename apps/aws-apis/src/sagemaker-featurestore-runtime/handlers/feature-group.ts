import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeRoute,
  getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringRoute,
  putFeatureGroupFeatureGroupNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featureGroupHandler = app
  .openapi(deleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFeatureGroupFeatureGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })

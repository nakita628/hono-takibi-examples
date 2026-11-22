import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameRoute,
  getV1betaParentConversionEventsRoute,
  getV1betaParentCustomDimensionsRoute,
  getV1betaParentCustomMetricsRoute,
  getV1betaParentDataStreamsRoute,
  getV1betaParentFirebaseLinksRoute,
  getV1betaParentGoogleAdsLinksRoute,
  getV1betaParentMeasurementProtocolSecretsRoute,
  getV1betaPropertiesRoute,
  patchV1betaNameRoute,
  postV1betaEntityRunAccessReportRoute,
  postV1betaNameArchiveRoute,
  postV1betaParentConversionEventsRoute,
  postV1betaParentCustomDimensionsRoute,
  postV1betaParentCustomMetricsRoute,
  postV1betaParentDataStreamsRoute,
  postV1betaParentFirebaseLinksRoute,
  postV1betaParentGoogleAdsLinksRoute,
  postV1betaParentMeasurementProtocolSecretsRoute,
  postV1betaPropertiesRoute,
  postV1betaPropertyAcknowledgeUserDataCollectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const propertiesHandler = app
  .openapi(getV1betaPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaEntityRunAccessReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentConversionEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentConversionEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentCustomDimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentCustomDimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentCustomMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentCustomMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentDataStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentDataStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentFirebaseLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentFirebaseLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentGoogleAdsLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentGoogleAdsLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentMeasurementProtocolSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentMeasurementProtocolSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaPropertyAcknowledgeUserDataCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })

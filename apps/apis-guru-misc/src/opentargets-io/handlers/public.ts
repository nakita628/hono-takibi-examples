import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPlatformPublicAssociationFilterRoute,
  getPlatformPublicAssociationRoute,
  getPlatformPublicEvidenceFilterRoute,
  getPlatformPublicEvidenceRoute,
  getPlatformPublicSearchRoute,
  getPlatformPublicUtilsMetricsRoute,
  getPlatformPublicUtilsPingRoute,
  getPlatformPublicUtilsStatsRoute,
  getPlatformPublicUtilsTherapeuticareasRoute,
  getPlatformPublicUtilsVersionRoute,
  postPlatformPublicAssociationFilterRoute,
  postPlatformPublicEvidenceFilterRoute,
  postPlatformPublicEvidenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicHandler = app
  .openapi(getPlatformPublicAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicAssociationFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformPublicAssociationFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformPublicEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicEvidenceFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformPublicEvidenceFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicUtilsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicUtilsPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicUtilsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicUtilsTherapeuticareasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicUtilsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })

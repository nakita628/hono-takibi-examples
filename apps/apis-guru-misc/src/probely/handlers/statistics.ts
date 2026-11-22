import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTargetsAllAverageFixTimeIndexRoute,
  getTargetsAllNeedsAttentionPieIndexRoute,
  getTargetsAllNeedsAttentionTopIndexRoute,
  getTargetsAllRiskTrendIndexRoute,
  getTargetsAllSeverityTrendIndexRoute,
  getTargetsAllTopVulnsIndexRoute,
  getTargetsTargetIdAverageFixTimeIndexRoute,
  getTargetsTargetIdRiskTrendIndexRoute,
  getTargetsTargetIdSeverityTrendIndexRoute,
  getTargetsTargetIdTopVulnsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statisticsHandler = app
  .openapi(getTargetsAllAverageFixTimeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsAllNeedsAttentionPieIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsAllNeedsAttentionTopIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsAllRiskTrendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsAllSeverityTrendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsAllTopVulnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdAverageFixTimeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdRiskTrendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdSeverityTrendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdTopVulnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarEntitiesAsnsAsnAsSetRoute,
  getRadarEntitiesAsnsAsnRelRoute,
  getRadarEntitiesAsnsAsnRoute,
  getRadarEntitiesAsnsBotnetThreatFeedRoute,
  getRadarEntitiesAsnsIpRoute,
  getRadarEntitiesAsnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarAutonomousSystemsHandler = app
  .openapi(getRadarEntitiesAsnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEntitiesAsnsBotnetThreatFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEntitiesAsnsIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEntitiesAsnsAsnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEntitiesAsnsAsnAsSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEntitiesAsnsAsnRelRoute, (c) => {
    throw new Error('Not implemented')
  })

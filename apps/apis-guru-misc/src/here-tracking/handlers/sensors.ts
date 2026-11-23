import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSensorsV3Route,
  deleteSensorsV3SensorRuleIdRoute,
  getSensorsV3HealthRoute,
  getSensorsV3Route,
  getSensorsV3SensorRuleIdRoute,
  getSensorsV3VersionRoute,
  postSensorsV3Route,
  putSensorsV3SensorRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sensorsHandler = app
  .openapi(deleteSensorsV3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSensorsV3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSensorsV3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSensorsV3HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSensorsV3VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSensorsV3SensorRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSensorsV3SensorRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSensorsV3SensorRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })

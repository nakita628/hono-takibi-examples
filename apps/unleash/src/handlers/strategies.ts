import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminStrategiesNameRoute,
  getApiAdminContextContextFieldStrategiesRoute,
  getApiAdminProjectsProjectIdContextContextFieldStrategiesRoute,
  getApiAdminStrategiesNameRoute,
  getApiAdminStrategiesRoute,
  postApiAdminSegmentsStrategiesRoute,
  postApiAdminStrategiesRoute,
  postApiAdminStrategiesStrategyNameDeprecateRoute,
  postApiAdminStrategiesStrategyNameReactivateRoute,
  putApiAdminStrategiesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const strategiesHandler = app
  .openapi(getApiAdminStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminStrategiesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminStrategiesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminStrategiesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminStrategiesStrategyNameDeprecateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminStrategiesStrategyNameReactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminContextContextFieldStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdContextContextFieldStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminSegmentsStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })

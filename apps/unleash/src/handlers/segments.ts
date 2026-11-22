import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminSegmentsIdRoute,
  getApiAdminSegmentsIdRoute,
  getApiAdminSegmentsIdStrategiesRoute,
  getApiAdminSegmentsRoute,
  getApiAdminSegmentsStrategiesStrategyIdRoute,
  postApiAdminSegmentsRoute,
  postApiAdminSegmentsValidateRoute,
  putApiAdminSegmentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const segmentsHandler = app
  .openapi(postApiAdminSegmentsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminSegmentsStrategiesStrategyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminSegmentsIdStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AllmetricsRoute,
  getApiV1DataRoute,
  getApiV1VariableRoute,
  getApiV2DataRoute,
  getApiV3AllmetricsRoute,
  getApiV3DataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataHandler = app
  .openapi(getApiV2DataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3DataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AllmetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AllmetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VariableRoute, (c) => {
    throw new Error('Not implemented')
  })

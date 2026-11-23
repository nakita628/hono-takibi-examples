import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDataV1AvailabilityIndexRoute,
  getDataV1ConstraintVariableRoute,
  getDataV1MapNewRoute,
  getDataV1ValuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataHandler = app
  .openapi(getDataV1AvailabilityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataV1ConstraintVariableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataV1MapNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataV1ValuesRoute, (c) => {
    throw new Error('Not implemented')
  })

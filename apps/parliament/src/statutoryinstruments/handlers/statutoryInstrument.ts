import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1StatutoryInstrumentIdBusinessItemsRoute,
  getApiV1StatutoryInstrumentIdRoute,
  getApiV1StatutoryInstrumentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statutoryInstrumentHandler = app
  .openapi(getApiV1StatutoryInstrumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatutoryInstrumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatutoryInstrumentIdBusinessItemsRoute, (c) => {
    throw new Error('Not implemented')
  })

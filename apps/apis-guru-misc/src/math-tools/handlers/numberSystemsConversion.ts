import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNumbersNumeralChineseRoute,
  getNumbersNumeralEgyptianRoute,
  getNumbersNumeralRomanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numberSystemsConversionHandler = app
  .openapi(getNumbersNumeralChineseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersNumeralEgyptianRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersNumeralRomanRoute, (c) => {
    throw new Error('Not implemented')
  })

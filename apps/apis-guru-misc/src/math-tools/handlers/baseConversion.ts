import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNumbersBaseBinaryRoute,
  getNumbersBaseHexRoute,
  getNumbersBaseOctalRoute,
  getNumbersBaseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const baseConversionHandler = app
  .openapi(getNumbersBaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersBaseBinaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersBaseHexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersBaseOctalRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CategoryListOutputFormatRoute,
  getV1IdOutputFormatRoute,
  getV1PocsOutputFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1CategoryListOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PocsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IdOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })

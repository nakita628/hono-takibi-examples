import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFileVersionLegalHoldsFileVersionLegalHoldIdRoute,
  getFileVersionLegalHoldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileVersionLegalHoldsHandler = app
  .openapi(getFileVersionLegalHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileVersionLegalHoldsFileVersionLegalHoldIdRoute, (c) => {
    throw new Error('Not implemented')
  })

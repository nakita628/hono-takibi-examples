import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFileVersionLegalHoldsFileVersionLegalHoldIdRoute,
  getFileVersionLegalHoldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileVersionLegalHoldsHandler = app
  .openapi(getFileVersionLegalHoldsFileVersionLegalHoldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileVersionLegalHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })

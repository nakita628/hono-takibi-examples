import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPositionsResourceIdentifierResourceTypeRoute,
  patchPositionsResourceIdentifierResourceTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const positionsHandler = app
  .openapi(getPositionsResourceIdentifierResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPositionsResourceIdentifierResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })

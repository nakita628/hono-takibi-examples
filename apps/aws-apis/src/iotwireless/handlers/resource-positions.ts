import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourcePositionsResourceIdentifierResourceTypeRoute,
  patchResourcePositionsResourceIdentifierResourceTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcePositionsHandler = app
  .openapi(getResourcePositionsResourceIdentifierResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchResourcePositionsResourceIdentifierResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })

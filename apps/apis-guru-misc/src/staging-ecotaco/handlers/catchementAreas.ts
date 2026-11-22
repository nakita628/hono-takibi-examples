import { OpenAPIHono } from '@hono/zod-openapi'
import { getCatchementAreasIdRoute, getCatchementAreasRoute } from '../routes'

const app = new OpenAPIHono()

export const catchementAreasHandler = app
  .openapi(getCatchementAreasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatchementAreasIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2InstitutionsIdIndexRoute, getApiV2InstitutionsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const institutionsHandler = app
  .openapi(getApiV2InstitutionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2InstitutionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

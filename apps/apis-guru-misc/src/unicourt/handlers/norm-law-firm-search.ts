import { OpenAPIHono } from '@hono/zod-openapi'
import { getNormLawFirmSearchNormLawFirmSearchIdRoute, getNormLawFirmSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const normLawFirmSearchHandler = app
  .openapi(getNormLawFirmSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormLawFirmSearchNormLawFirmSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })

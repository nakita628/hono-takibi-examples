import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ProvincesProvinceIdRoute, getApiV1ProvincesRoute } from '../routes'

const app = new OpenAPIHono()

export const provincesHandler = app
  .openapi(getApiV1ProvincesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProvincesProvinceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

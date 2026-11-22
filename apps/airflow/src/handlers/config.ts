import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2ConfigRoute, getApiV2ConfigSectionSectionOptionOptionRoute } from '../routes'

const app = new OpenAPIHono()

export const configHandler = app
  .openapi(getApiV2ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ConfigSectionSectionOptionOptionRoute, (c) => {
    throw new Error('Not implemented')
  })

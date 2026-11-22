import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2DomainAllowlistRoute, patchApiV2DomainAllowlistRoute } from '../routes'

const app = new OpenAPIHono()

export const domainAllowlistHandler = app
  .openapi(getApiV2DomainAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DomainAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2BrandAgentsBrandAgentIdRoute,
  getApiV2BrandAgentsBrandAgentIdRoute,
  getApiV2BrandAgentsRoute,
  getApiV2BrandsBrandIdAgentsRoute,
  getApiV2UsersUserIdBrandAgentsBrandAgentIdRoute,
  getApiV2UsersUserIdBrandAgentsRoute,
  postApiV2BrandAgentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brandAgentsHandler = app
  .openapi(getApiV2BrandAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BrandAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandAgentsBrandAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2BrandAgentsBrandAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandsBrandIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdBrandAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdBrandAgentsBrandAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPicoLoadmanagementgroupIdRoute, getApiPicoLoadmanagementgroupRoute } from '../routes'

const app = new OpenAPIHono()

export const picoLoadmanagementGroupHandler = app
  .openapi(getApiPicoLoadmanagementgroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPicoLoadmanagementgroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })

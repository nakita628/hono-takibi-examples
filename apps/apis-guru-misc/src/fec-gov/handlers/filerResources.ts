import { OpenAPIHono } from '@hono/zod-openapi'
import { getRadAnalystIndexRoute, getStateElectionOfficeIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const filerResourcesHandler = app
  .openapi(getRadAnalystIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStateElectionOfficeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

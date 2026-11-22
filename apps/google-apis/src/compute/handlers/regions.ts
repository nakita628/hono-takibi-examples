import { OpenAPIHono } from '@hono/zod-openapi'
import { getProjectsProjectRegionsRegionRoute, getProjectsProjectRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const regionsHandler = app
  .openapi(getProjectsProjectRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionRoute, (c) => {
    throw new Error('Not implemented')
  })

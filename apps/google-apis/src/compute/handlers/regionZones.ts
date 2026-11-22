import { OpenAPIHono } from '@hono/zod-openapi'
import { getProjectsProjectRegionsRegionZonesRoute } from '../routes'

const app = new OpenAPIHono()

export const regionZonesHandler = app.openapi(getProjectsProjectRegionsRegionZonesRoute, (c) => {
  throw new Error('Not implemented')
})

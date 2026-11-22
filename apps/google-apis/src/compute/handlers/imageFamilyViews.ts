import { OpenAPIHono } from '@hono/zod-openapi'
import { getProjectsProjectZonesZoneImageFamilyViewsFamilyRoute } from '../routes'

const app = new OpenAPIHono()

export const imageFamilyViewsHandler = app.openapi(
  getProjectsProjectZonesZoneImageFamilyViewsFamilyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdImagesV1FlowsRoute, putZonesZoneIdImagesV1FlowsRoute } from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(getZonesZoneIdImagesV1FlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdImagesV1FlowsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getRadarEntitiesIpRoute } from '../routes'

const app = new OpenAPIHono()

export const radarIPHandler = app.openapi(getRadarEntitiesIpRoute, (c) => {
  throw new Error('Not implemented')
})

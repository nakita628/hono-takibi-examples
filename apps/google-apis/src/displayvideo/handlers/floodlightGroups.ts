import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2FloodlightGroupsFloodlightGroupIdRoute } from '../routes'

const app = new OpenAPIHono()

export const floodlightGroupsHandler = app.openapi(
  getV2FloodlightGroupsFloodlightGroupIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

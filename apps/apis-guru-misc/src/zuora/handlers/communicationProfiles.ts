import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectCommunicationProfileIdRoute } from '../routes'

const app = new OpenAPIHono()

export const communicationProfilesHandler = app.openapi(
  getV1ObjectCommunicationProfileIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

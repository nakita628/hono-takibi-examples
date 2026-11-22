import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportMicrosoftTeamsIdRoute,
  getApiTransportMicrosoftTeamsIdRoute,
  getApiTransportMicrosoftTeamsRoute,
  postApiTransportMicrosoftTeamsRoute,
  putApiTransportMicrosoftTeamsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportMicrosoftTeamsHandler = app
  .openapi(getApiTransportMicrosoftTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMicrosoftTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMicrosoftTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMicrosoftTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMicrosoftTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

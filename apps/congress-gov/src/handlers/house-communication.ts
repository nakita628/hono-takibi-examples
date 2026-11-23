import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHouseCommunicationCongressCommunicationTypeCommunicationNumberRoute,
  getHouseCommunicationCongressCommunicationTypeRoute,
  getHouseCommunicationCongressRoute,
  getHouseCommunicationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const houseCommunicationHandler = app
  .openapi(getHouseCommunicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHouseCommunicationCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHouseCommunicationCongressCommunicationTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHouseCommunicationCongressCommunicationTypeCommunicationNumberRoute, (c) => {
    throw new Error('Not implemented')
  })

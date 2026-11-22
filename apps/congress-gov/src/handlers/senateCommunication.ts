import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSenateCommunicationCongressCommunicationTypeCommunicationNumberRoute,
  getSenateCommunicationCongressCommunicationTypeRoute,
  getSenateCommunicationCongressRoute,
  getSenateCommunicationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const senateCommunicationHandler = app
  .openapi(getSenateCommunicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSenateCommunicationCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSenateCommunicationCongressCommunicationTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSenateCommunicationCongressCommunicationTypeCommunicationNumberRoute, (c) => {
    throw new Error('Not implemented')
  })

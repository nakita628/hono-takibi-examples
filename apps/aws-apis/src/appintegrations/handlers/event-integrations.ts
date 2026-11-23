import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventIntegrationsNameRoute,
  getEventIntegrationsNameAssociationsRoute,
  getEventIntegrationsNameRoute,
  getEventIntegrationsRoute,
  patchEventIntegrationsNameRoute,
  postEventIntegrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventIntegrationsHandler = app
  .openapi(postEventIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventIntegrationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventIntegrationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEventIntegrationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventIntegrationsNameAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })

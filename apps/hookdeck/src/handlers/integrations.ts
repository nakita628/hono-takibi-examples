import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIntegrationsIdRoute,
  getIntegrationsIdRoute,
  getIntegrationsRoute,
  postIntegrationsRoute,
  putIntegrationsIdAttachSourceIdRoute,
  putIntegrationsIdDetachSourceIdRoute,
  putIntegrationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIntegrationsIdAttachSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIntegrationsIdDetachSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

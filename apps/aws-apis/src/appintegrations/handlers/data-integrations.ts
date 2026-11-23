import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDataIntegrationsIdentifierRoute,
  getDataIntegrationsIdentifierAssociationsRoute,
  getDataIntegrationsIdentifierRoute,
  getDataIntegrationsRoute,
  patchDataIntegrationsIdentifierRoute,
  postDataIntegrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataIntegrationsHandler = app
  .openapi(postDataIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataIntegrationsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataIntegrationsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDataIntegrationsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataIntegrationsIdentifierAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })

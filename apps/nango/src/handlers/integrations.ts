import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIntegrationsUniqueKeyFunctionsNameRoute,
  deleteIntegrationsUniqueKeyRoute,
  getIntegrationsRoute,
  getIntegrationsUniqueKeyFunctionsNameCodeRoute,
  getIntegrationsUniqueKeyFunctionsNameRoute,
  getIntegrationsUniqueKeyFunctionsRoute,
  getIntegrationsUniqueKeyRoute,
  patchIntegrationsUniqueKeyRoute,
  postIntegrationsQuickstartRoute,
  postIntegrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsQuickstartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsUniqueKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIntegrationsUniqueKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIntegrationsUniqueKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsUniqueKeyFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsUniqueKeyFunctionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIntegrationsUniqueKeyFunctionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsUniqueKeyFunctionsNameCodeRoute, (c) => {
    throw new Error('Not implemented')
  })

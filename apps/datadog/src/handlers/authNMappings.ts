import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AuthnMappingsAuthnMappingIdRoute,
  getApiV2AuthnMappingsAuthnMappingIdRoute,
  getApiV2AuthnMappingsRoute,
  patchApiV2AuthnMappingsAuthnMappingIdRoute,
  postApiV2AuthnMappingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authNMappingsHandler = app
  .openapi(getApiV2AuthnMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthnMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AuthnMappingsAuthnMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthnMappingsAuthnMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AuthnMappingsAuthnMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })

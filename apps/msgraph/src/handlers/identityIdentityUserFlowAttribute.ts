import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityUserFlowAttributesIdentityUserFlowAttributeIdRoute,
  getIdentityUserFlowAttributesCountRoute,
  getIdentityUserFlowAttributesIdentityUserFlowAttributeIdRoute,
  getIdentityUserFlowAttributesRoute,
  patchIdentityUserFlowAttributesIdentityUserFlowAttributeIdRoute,
  postIdentityUserFlowAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityIdentityUserFlowAttributeHandler = app
  .openapi(getIdentityUserFlowAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityUserFlowAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityUserFlowAttributesIdentityUserFlowAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityUserFlowAttributesIdentityUserFlowAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityUserFlowAttributesIdentityUserFlowAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityUserFlowAttributesCountRoute, (c) => {
    throw new Error('Not implemented')
  })

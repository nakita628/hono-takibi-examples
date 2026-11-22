import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsMicrosoftGraphGetOrderRoute,
  getIdentityIdentityProvidersMicrosoftGraphAvailableProviderTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityFunctionsHandler = app
  .openapi(
    getIdentityB2xUserFlowsB2xIdentityUserFlowIdUserAttributeAssignmentsMicrosoftGraphGetOrderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityIdentityProvidersMicrosoftGraphAvailableProviderTypesRoute, (c) => {
    throw new Error('Not implemented')
  })

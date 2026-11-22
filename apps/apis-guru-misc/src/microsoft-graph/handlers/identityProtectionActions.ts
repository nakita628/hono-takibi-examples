import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIdentityProtectionRiskyServicePrincipalsMicrosoftGraphConfirmCompromisedRoute,
  postIdentityProtectionRiskyServicePrincipalsMicrosoftGraphDismissRoute,
  postIdentityProtectionRiskyUsersMicrosoftGraphConfirmCompromisedRoute,
  postIdentityProtectionRiskyUsersMicrosoftGraphDismissRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityProtectionActionsHandler = app
  .openapi(
    postIdentityProtectionRiskyServicePrincipalsMicrosoftGraphConfirmCompromisedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postIdentityProtectionRiskyServicePrincipalsMicrosoftGraphDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityProtectionRiskyUsersMicrosoftGraphConfirmCompromisedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityProtectionRiskyUsersMicrosoftGraphDismissRoute, (c) => {
    throw new Error('Not implemented')
  })

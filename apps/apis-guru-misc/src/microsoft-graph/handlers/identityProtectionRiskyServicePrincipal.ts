import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdHistoryRiskyServicePrincipalHistoryItemIdRoute,
  deleteIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdRoute,
  getIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdHistoryRiskyServicePrincipalHistoryItemIdRoute,
  getIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdHistoryRoute,
  getIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdRoute,
  getIdentityProtectionRiskyServicePrincipalsRoute,
  patchIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdHistoryRiskyServicePrincipalHistoryItemIdRoute,
  patchIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdRoute,
  postIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdHistoryRoute,
  postIdentityProtectionRiskyServicePrincipalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityProtectionRiskyServicePrincipalHandler = app
  .openapi(getIdentityProtectionRiskyServicePrincipalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityProtectionRiskyServicePrincipalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdHistoryRiskyServicePrincipalHistoryItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdHistoryRiskyServicePrincipalHistoryItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdHistoryRiskyServicePrincipalHistoryItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

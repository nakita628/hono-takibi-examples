import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIdentityProtectionRiskDetectionsCountRoute,
  getIdentityProtectionRiskyServicePrincipalsCountRoute,
  getIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdHistoryCountRoute,
  getIdentityProtectionRiskyUsersCountRoute,
  getIdentityProtectionRiskyUsersRiskyUserIdHistoryCountRoute,
  getIdentityProtectionServicePrincipalRiskDetectionsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityProtectionHandler = app
  .openapi(getIdentityProtectionRiskDetectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityProtectionRiskyServicePrincipalsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentityProtectionRiskyServicePrincipalsRiskyServicePrincipalIdHistoryCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityProtectionRiskyUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityProtectionRiskyUsersRiskyUserIdHistoryCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityProtectionServicePrincipalRiskDetectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })

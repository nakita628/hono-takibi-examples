import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTenantRelationshipsFindTenantInformationByDomainNameDomainNameDomainNameRoute,
  getTenantRelationshipsFindTenantInformationByTenantIdTenantIdTenantIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tenantRelationshipsTenantRelationshipFunctionsHandler = app
  .openapi(
    getTenantRelationshipsFindTenantInformationByDomainNameDomainNameDomainNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTenantRelationshipsFindTenantInformationByTenantIdTenantIdTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })

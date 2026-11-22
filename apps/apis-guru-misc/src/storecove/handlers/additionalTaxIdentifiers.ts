import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute,
  getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute,
  patchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute,
  postLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const additionalTaxIdentifiersHandler = app
  .openapi(postLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute, (c) => {
    throw new Error('Not implemented')
  })

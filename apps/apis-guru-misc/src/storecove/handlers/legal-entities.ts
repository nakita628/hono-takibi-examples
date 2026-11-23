import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegalEntitiesIdRoute,
  deleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute,
  deleteLegalEntitiesLegalEntityIdAdministrationsIdRoute,
  deleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierRoute,
  getLegalEntitiesIdRoute,
  getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute,
  getLegalEntitiesLegalEntityIdAdministrationsIdRoute,
  patchLegalEntitiesIdRoute,
  patchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute,
  patchLegalEntitiesLegalEntityIdAdministrationsIdRoute,
  postLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersRoute,
  postLegalEntitiesLegalEntityIdAdministrationsRoute,
  postLegalEntitiesLegalEntityIdPeppolIdentifiersRoute,
  postLegalEntitiesLegalEntityIdReceivedDocumentsRoute,
  postLegalEntitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const legalEntitiesHandler = app
  .openapi(postLegalEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postLegalEntitiesLegalEntityIdAdministrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegalEntitiesLegalEntityIdAdministrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesLegalEntityIdAdministrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLegalEntitiesLegalEntityIdAdministrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesLegalEntityIdPeppolIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postLegalEntitiesLegalEntityIdReceivedDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })

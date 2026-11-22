import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierRoute,
  postLegalEntitiesLegalEntityIdPeppolIdentifiersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const peppolIdentifiersHandler = app
  .openapi(postLegalEntitiesLegalEntityIdPeppolIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

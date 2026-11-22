import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLegalEntitiesIdPciQuestionnairesPciidRoute,
  getLegalEntitiesIdPciQuestionnairesRoute,
  postLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRoute,
  postLegalEntitiesIdPciQuestionnairesSigningRequiredRoute,
  postLegalEntitiesIdPciQuestionnairesSignPciTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pciQuestionnairesHandler = app
  .openapi(getLegalEntitiesIdPciQuestionnairesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdPciQuestionnairesSignPciTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdPciQuestionnairesSigningRequiredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesIdPciQuestionnairesPciidRoute, (c) => {
    throw new Error('Not implemented')
  })

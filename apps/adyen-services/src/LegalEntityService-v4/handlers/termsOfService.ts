import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRoute,
  getLegalEntitiesIdTermsOfServiceAcceptanceInfosRoute,
  getLegalEntitiesIdTermsOfServiceStatusRoute,
  patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRoute,
  postLegalEntitiesIdTermsOfServiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const termsOfServiceHandler = app
  .openapi(
    getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRoute,
    (c) => {},
  )
  .openapi(postLegalEntitiesIdTermsOfServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesIdTermsOfServiceAcceptanceInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesIdTermsOfServiceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

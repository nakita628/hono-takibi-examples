import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLegalEntitiesIdBusinessLinesRoute,
  getLegalEntitiesIdRoute,
  patchLegalEntitiesIdRoute,
  postLegalEntitiesIdCheckVerificationErrorsRoute,
  postLegalEntitiesIdConfirmDataReviewRoute,
  postLegalEntitiesIdRequestPeriodicReviewRoute,
  postLegalEntitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const legalEntitiesHandler = app
  .openapi(postLegalEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesIdBusinessLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdCheckVerificationErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdConfirmDataReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdRequestPeriodicReviewRoute, (c) => {
    throw new Error('Not implemented')
  })

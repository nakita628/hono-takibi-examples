import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegalHoldsLegalHoldIdCancelDescriptionRoute,
  getLegalHoldsIndexRoute,
  getLegalHoldsLegalHoldIdIndexRoute,
  getLegalHoldsLegalHoldIdRecoveryPointsRoute,
  postLegalHoldsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const legalHoldsHandler = app
  .openapi(deleteLegalHoldsLegalHoldIdCancelDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalHoldsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalHoldsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalHoldsLegalHoldIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalHoldsLegalHoldIdRecoveryPointsRoute, (c) => {
    throw new Error('Not implemented')
  })

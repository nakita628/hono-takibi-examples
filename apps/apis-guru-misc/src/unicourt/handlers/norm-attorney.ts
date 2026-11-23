import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNormAttorneyNormAttorneyIdAssociatedNormJudgesRoute,
  getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsRoute,
  getNormAttorneyNormAttorneyIdAssociatedNormPartiesRoute,
  getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyRoute,
  getNormAttorneyNormAttorneyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const normAttorneyHandler = app
  .openapi(getNormAttorneyNormAttorneyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormAttorneyNormAttorneyIdAssociatedNormJudgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormAttorneyNormAttorneyIdAssociatedNormPartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyRoute, (c) => {
    throw new Error('Not implemented')
  })

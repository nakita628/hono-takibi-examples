import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNormAttorneyNormAttorneyIdAssociatedNormJudgesRoute,
  getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsRoute,
  getNormAttorneyNormAttorneyIdAssociatedNormPartiesRoute,
  getNormAttorneyNormAttorneyIdRoute,
  getNormAttorneySearchNormAttorneySearchIdRoute,
  getNormAttorneySearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attorneyAnalyticsAPIHandler = app
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
  .openapi(getNormAttorneySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormAttorneySearchNormAttorneySearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })

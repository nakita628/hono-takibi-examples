import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEnmDbInvestigationRoute,
  getEnmDbQueryStudyRoute,
  getEnmDbSubstanceUuidStudyRoute,
  getEnmDbSubstanceUuidStudySummaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const studiesHandler = app
  .openapi(getEnmDbInvestigationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbQueryStudyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbSubstanceUuidStudyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbSubstanceUuidStudySummaryRoute, (c) => {
    throw new Error('Not implemented')
  })

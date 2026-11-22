import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompanyAbsencePeriodsIdRoute,
  deleteCompanyTimeOffsIdRoute,
  getCompanyAbsencePeriodsRoute,
  getCompanyTimeOffsIdRoute,
  getCompanyTimeOffsRoute,
  getCompanyTimeOffTypesRoute,
  postCompanyAbsencePeriodsRoute,
  postCompanyTimeOffsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const absencesHandler = app
  .openapi(getCompanyTimeOffTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyTimeOffsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanyTimeOffsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompanyTimeOffsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyTimeOffsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyAbsencePeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanyAbsencePeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompanyAbsencePeriodsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

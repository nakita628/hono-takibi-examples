import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsRoute,
  getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusRoute,
  getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataIntegrityHandler = app
  .openapi(getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesRoute, (c) => {
    throw new Error('Not implemented')
  })

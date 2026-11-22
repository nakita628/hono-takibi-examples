import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDataCompaniesCompanyIdAssessExcelDownloadRoute,
  getDataCompaniesCompanyIdAssessExcelRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingRoute,
  postDataCompaniesCompanyIdAssessExcelDownloadRoute,
  postDataCompaniesCompanyIdAssessExcelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const excelReportsHandler = app
  .openapi(getDataCompaniesCompanyIdAssessExcelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataCompaniesCompanyIdAssessExcelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataCompaniesCompanyIdAssessExcelDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataCompaniesCompanyIdAssessExcelDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

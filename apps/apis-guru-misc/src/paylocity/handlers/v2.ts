import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateRoute,
  deleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeRoute,
  getV2CompaniesCompanyIdCodesCodeResourceRoute,
  getV2CompaniesCompanyIdCustomfieldsCategoryRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataRoute,
  getV2CompaniesCompanyIdEmployeesIndexRoute,
  getV2CompaniesCompanyIdOpenapiRoute,
  patchV2CompaniesCompanyIdEmployeesEmployeeIdRoute,
  postV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesRoute,
  postV2CompaniesCompanyIdEmployeesRoute,
  postV2CredentialsSecretsRoute,
  postV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployeesRoute,
  putV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRatesRoute,
  putV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetupRoute,
  putV2CompaniesCompanyIdEmployeesEmployeeIdEarningsRoute,
  putV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContactsRoute,
  putV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTaxRoute,
  putV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTaxRoute,
  putV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2CompaniesCompanyIdCodesCodeResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdCustomfieldsCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CompaniesCompanyIdEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CompaniesCompanyIdEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CompaniesCompanyIdEmployeesEmployeeIdEarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTaxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTaxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CredentialsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployeesRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  additionalRatesHandler,
  clientCredentialsHandler,
  companyCodesHandler,
  companySpecificSchemaHandler,
  customFieldsHandler,
  directDepositHandler,
  earningsHandler,
  emergencyContactsHandler,
  employeeBenefitSetupHandler,
  employeeHandler,
  employeeStagingHandler,
  localTaxesHandler,
  nonPrimaryStateTaxHandler,
  payStatementsHandler,
  primaryStateTaxHandler,
  sensitiveDataHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', companyCodesHandler)
  .route('/', customFieldsHandler)
  .route('/', employeeHandler)
  .route('/', additionalRatesHandler)
  .route('/', employeeBenefitSetupHandler)
  .route('/', directDepositHandler)
  .route('/', earningsHandler)
  .route('/', emergencyContactsHandler)
  .route('/', localTaxesHandler)
  .route('/', nonPrimaryStateTaxHandler)
  .route('/', payStatementsHandler)
  .route('/', primaryStateTaxHandler)
  .route('/', sensitiveDataHandler)
  .route('/', companySpecificSchemaHandler)
  .route('/', clientCredentialsHandler)
  .route('/', employeeStagingHandler)

export default app

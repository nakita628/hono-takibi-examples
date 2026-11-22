import { OpenAPIHono } from '@hono/zod-openapi'
import {
  account__companyLevelHandler,
  account__merchantLevelHandler,
  account__storeLevelHandler,
  allowedOrigins__companyLevelHandler,
  allowedOrigins__merchantLevelHandler,
  androidFiles__companyLevelHandler,
  apiCredentials__companyLevelHandler,
  apiCredentials__merchantLevelHandler,
  apiKey__companyLevelHandler,
  apiKey__merchantLevelHandler,
  clientCertificates__companyLevelHandler,
  clientKey__companyLevelHandler,
  clientKey__merchantLevelHandler,
  donationCampaignsHandler,
  myAPICredentialHandler,
  paymentMethods__merchantLevelHandler,
  payoutSettings__merchantLevelHandler,
  splitConfiguration__merchantLevelHandler,
  terminalActions__companyLevelHandler,
  terminalActions__terminalLevelHandler,
  terminalOrders__companyLevelHandler,
  terminalOrders__merchantLevelHandler,
  terminals__terminalLevelHandler,
  terminalSettings__companyLevelHandler,
  terminalSettings__merchantLevelHandler,
  terminalSettings__storeLevelHandler,
  terminalSettings__terminalLevelHandler,
  terminalThemes__companyLevelHandler,
  terminalThemes__merchantLevelHandler,
  terminalThemes__storeLevelHandler,
  terminalThemes__terminalLevelHandler,
  users__companyLevelHandler,
  users__merchantLevelHandler,
  webhooks__companyLevelHandler,
  webhooks__merchantLevelHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', account__companyLevelHandler)
  .route('/', androidFiles__companyLevelHandler)
  .route('/', apiCredentials__companyLevelHandler)
  .route('/', allowedOrigins__companyLevelHandler)
  .route('/', apiKey__companyLevelHandler)
  .route('/', clientKey__companyLevelHandler)
  .route('/', terminalOrders__companyLevelHandler)
  .route('/', terminalActions__companyLevelHandler)
  .route('/', terminalSettings__companyLevelHandler)
  .route('/', users__companyLevelHandler)
  .route('/', webhooks__companyLevelHandler)
  .route('/', myAPICredentialHandler)
  .route('/', account__merchantLevelHandler)
  .route('/', apiCredentials__merchantLevelHandler)
  .route('/', allowedOrigins__merchantLevelHandler)
  .route('/', apiKey__merchantLevelHandler)
  .route('/', clientKey__merchantLevelHandler)
  .route('/', terminalOrders__merchantLevelHandler)
  .route('/', paymentMethods__merchantLevelHandler)
  .route('/', payoutSettings__merchantLevelHandler)
  .route('/', splitConfiguration__merchantLevelHandler)
  .route('/', account__storeLevelHandler)
  .route('/', terminalSettings__storeLevelHandler)
  .route('/', terminalSettings__merchantLevelHandler)
  .route('/', users__merchantLevelHandler)
  .route('/', webhooks__merchantLevelHandler)
  .route('/', terminals__terminalLevelHandler)
  .route('/', terminalActions__terminalLevelHandler)
  .route('/', terminalSettings__terminalLevelHandler)
  .route('/', donationCampaignsHandler)
  .route('/', clientCertificates__companyLevelHandler)
  .route('/', terminalThemes__companyLevelHandler)
  .route('/', terminalThemes__merchantLevelHandler)
  .route('/', terminalThemes__storeLevelHandler)
  .route('/', terminalThemes__terminalLevelHandler)

export default app

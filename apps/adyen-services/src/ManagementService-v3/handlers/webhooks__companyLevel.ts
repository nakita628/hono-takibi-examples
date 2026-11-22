import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompaniesCompanyIdWebhooksWebhookIdRoute,
  getCompaniesCompanyIdWebhooksRoute,
  getCompaniesCompanyIdWebhooksWebhookIdRoute,
  patchCompaniesCompanyIdWebhooksWebhookIdRoute,
  postCompaniesCompanyIdWebhooksRoute,
  postCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRoute,
  postCompaniesCompanyIdWebhooksWebhookIdTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooks__companyLevelHandler = app
  .openapi(getCompaniesCompanyIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesCompanyIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdWebhooksWebhookIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OrganizationPaymentConfigOrganizationIdRoute,
  postV1OrganizationPaymentConfigOrganizationIdEndGracePeriodRoute,
  postV1OrganizationPaymentConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationPaymentConfigHandler = app
  .openapi(getV1OrganizationPaymentConfigOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationPaymentConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationPaymentConfigOrganizationIdEndGracePeriodRoute, (c) => {
    throw new Error('Not implemented')
  })

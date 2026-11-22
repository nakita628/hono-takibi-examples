import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PayorsPayorIdBrandingRoute,
  getV1PayorsPayorIdRoute,
  getV2PayorsPayorIdRoute,
  postV1PayorsPayorIdApplicationsApplicationIdKeysRoute,
  postV1PayorsPayorIdApplicationsRoute,
  postV1PayorsPayorIdBrandingLogosRoute,
  postV1PayorsPayorIdReminderEmailsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payorsHandler = app
  .openapi(getV1PayorsPayorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayorsPayorIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayorsPayorIdApplicationsApplicationIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PayorsPayorIdBrandingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayorsPayorIdBrandingLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PayorsPayorIdReminderEmailsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PayorsPayorIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsProjectIdBillingFieldsRoute,
  getV1ProjectsProjectIdUsageFieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fieldsHandler = app
  .openapi(getV1ProjectsProjectIdUsageFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdBillingFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })

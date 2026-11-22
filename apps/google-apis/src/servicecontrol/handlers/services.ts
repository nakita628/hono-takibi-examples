import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2ServicesServiceNameCheckRoute,
  postV2ServicesServiceNameReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(postV2ServicesServiceNameCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ServicesServiceNameReportRoute, (c) => {
    throw new Error('Not implemented')
  })

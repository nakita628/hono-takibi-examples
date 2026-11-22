import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServicesServiceIdJobsJobIdRoute,
  getServicesServiceIdJobsRoute,
  postServicesServiceIdJobsJobIdCancelRoute,
  postServicesServiceIdJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oneOffJobsHandler = app
  .openapi(getServicesServiceIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })

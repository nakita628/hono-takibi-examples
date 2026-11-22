import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsProjectIdRequestsRequestIdRoute,
  getV1ProjectsProjectIdRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestsHandler = app
  .openapi(getV1ProjectsProjectIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsRefAdvisorsPerformanceRoute,
  getV1ProjectsRefAdvisorsSecurityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advisorsHandler = app
  .openapi(getV1ProjectsRefAdvisorsPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefAdvisorsSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })

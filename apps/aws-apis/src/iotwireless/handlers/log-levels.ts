import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLogLevelsResourceIdentifierResourceTypeRoute,
  deleteLogLevelsRoute,
  getLogLevelsResourceIdentifierResourceTypeRoute,
  getLogLevelsRoute,
  postLogLevelsRoute,
  putLogLevelsResourceIdentifierResourceTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logLevelsHandler = app
  .openapi(getLogLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLogLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLogLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogLevelsResourceIdentifierResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLogLevelsResourceIdentifierResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLogLevelsResourceIdentifierResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })

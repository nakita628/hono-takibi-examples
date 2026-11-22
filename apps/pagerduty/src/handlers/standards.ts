import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStandardsRoute,
  getStandardsScoresResourceTypeIdRoute,
  getStandardsScoresResourceTypeRoute,
  putStandardsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const standardsHandler = app
  .openapi(getStandardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStandardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStandardsScoresResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStandardsScoresResourceTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })

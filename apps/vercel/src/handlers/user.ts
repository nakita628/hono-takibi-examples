import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1UserRoute,
  getV1EventsTypesRoute,
  getV2UserRoute,
  getV3EventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getV3EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UserRoute, (c) => {
    throw new Error('Not implemented')
  })

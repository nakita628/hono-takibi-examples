import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1RampScheduleTemplatesIdRoute,
  getV1RampScheduleTemplatesIdRoute,
  getV1RampScheduleTemplatesRoute,
  postV1RampScheduleTemplatesRoute,
  putV1RampScheduleTemplatesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rampScheduleTemplatesHandler = app
  .openapi(getV1RampScheduleTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RampScheduleTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RampScheduleTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampScheduleTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RampScheduleTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })

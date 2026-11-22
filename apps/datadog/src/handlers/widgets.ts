import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2WidgetsExperienceTypeUuidRoute,
  getApiV2WidgetsExperienceTypeRoute,
  getApiV2WidgetsExperienceTypeUuidRoute,
  postApiV2WidgetsExperienceTypeRoute,
  putApiV2WidgetsExperienceTypeUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const widgetsHandler = app
  .openapi(getApiV2WidgetsExperienceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WidgetsExperienceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WidgetsExperienceTypeUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WidgetsExperienceTypeUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2WidgetsExperienceTypeUuidRoute, (c) => {
    throw new Error('Not implemented')
  })

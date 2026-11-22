import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LivechatBusinessHourRoute,
  getApiV1LivechatBusinessHoursRoute,
  postApiV1LivechatBusinessHoursRemoveRoute,
  postApiV1LivechatBusinessHoursSaveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelBusinessHoursHandler = app
  .openapi(getApiV1LivechatBusinessHoursRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatBusinessHourRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatBusinessHoursRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatBusinessHoursSaveRoute, (c) => {
    throw new Error('Not implemented')
  })

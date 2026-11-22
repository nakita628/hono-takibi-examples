import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LivechatMonitorsRoute,
  getApiV1LivechatMonitorsUsernameRoute,
  postApiV1LivechatMonitorsCreateRoute,
  postApiV1LivechatMonitorsDeleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelMonitorsHandler = app
  .openapi(getApiV1LivechatMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatMonitorsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatMonitorsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatMonitorsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1LivechatTriggersIdRoute,
  getApiV1LivechatTriggersIdRoute,
  getApiV1LivechatTriggersRoute,
  postApiV1LivechatTriggersExternalServiceTestRoute,
  postApiV1LivechatTriggersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const livechatTriggersHandler = app
  .openapi(getApiV1LivechatTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatTriggersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatTriggersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatTriggersExternalServiceTestRoute, (c) => {
    throw new Error('Not implemented')
  })

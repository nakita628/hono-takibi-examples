import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAlertServiceIdRoute,
  getApiAlertServiceIdRoute,
  getApiAlertServiceRoute,
  postApiAlertServiceRoute,
  putApiAlertServiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertServiceHandler = app
  .openapi(getApiAlertServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAlertServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAlertServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlertServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAlertServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportMattermostIdRoute,
  getApiTransportMattermostIdRoute,
  getApiTransportMattermostRoute,
  postApiTransportMattermostRoute,
  putApiTransportMattermostIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportMattermostHandler = app
  .openapi(getApiTransportMattermostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMattermostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMattermostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMattermostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMattermostIdRoute, (c) => {
    throw new Error('Not implemented')
  })

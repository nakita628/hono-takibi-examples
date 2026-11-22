import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportContactEveryoneIdRoute,
  getApiTransportContactEveryoneIdRoute,
  getApiTransportContactEveryoneRoute,
  postApiTransportContactEveryoneRoute,
  putApiTransportContactEveryoneIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportContactEveryoneHandler = app
  .openapi(getApiTransportContactEveryoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportContactEveryoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportContactEveryoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportContactEveryoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportContactEveryoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })

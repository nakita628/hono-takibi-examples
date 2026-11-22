import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportOctopushIdRoute,
  getApiTransportOctopushIdRoute,
  getApiTransportOctopushRoute,
  postApiTransportOctopushRoute,
  putApiTransportOctopushIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportOctopushHandler = app
  .openapi(getApiTransportOctopushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportOctopushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportOctopushIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOctopushIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportOctopushIdRoute, (c) => {
    throw new Error('Not implemented')
  })

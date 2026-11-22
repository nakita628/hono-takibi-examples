import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportLinkedInIdRoute,
  getApiTransportLinkedInIdRoute,
  getApiTransportLinkedInRoute,
  postApiTransportLinkedInRoute,
  putApiTransportLinkedInIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportLinkedInHandler = app
  .openapi(getApiTransportLinkedInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportLinkedInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportLinkedInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportLinkedInIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportLinkedInIdRoute, (c) => {
    throw new Error('Not implemented')
  })

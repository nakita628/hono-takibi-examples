import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOriginEndpointsIdRoute,
  getOriginEndpointsIdRoute,
  getOriginEndpointsRoute,
  postOriginEndpointsRoute,
  putOriginEndpointsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const originEndpointsHandler = app
  .openapi(postOriginEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOriginEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOriginEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOriginEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOriginEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportSinchIdRoute,
  getApiTransportSinchIdRoute,
  getApiTransportSinchRoute,
  postApiTransportSinchRoute,
  putApiTransportSinchIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportSinchHandler = app
  .openapi(getApiTransportSinchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSinchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSinchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSinchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSinchIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDevicesIdRoute,
  getDevicesRoute,
  postDevicesRoute,
  putDevicesIdAccumulatorsRoute,
  putDevicesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesIdAccumulatorsRoute, (c) => {
    throw new Error('Not implemented')
  })

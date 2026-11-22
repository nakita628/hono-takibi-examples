import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DrivesNameOrIdRoute,
  getV1DrivesNameOrIdRoute,
  getV1DrivesRoute,
  postV1DrivesNameForkRoute,
  postV1DrivesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const drivesHandler = app
  .openapi(getV1DrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DrivesNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DrivesNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DrivesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DrivesNameForkRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlmawsV1TaskListsPrintoutsPrintoutIdRoute,
  getAlmawsV1TaskListsPrintoutsRoute,
  postAlmawsV1TaskListsPrintoutsPrintoutIdRoute,
  postAlmawsV1TaskListsPrintoutsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const printoutsHandler = app
  .openapi(getAlmawsV1TaskListsPrintoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlmawsV1TaskListsPrintoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlmawsV1TaskListsPrintoutsPrintoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlmawsV1TaskListsPrintoutsPrintoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })

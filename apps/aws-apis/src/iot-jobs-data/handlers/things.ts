import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getThingsThingNameJobsJobIdRoute,
  getThingsThingNameJobsRoute,
  postThingsThingNameJobsJobIdRoute,
  putThingsThingNameJobsNextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const thingsHandler = app
  .openapi(getThingsThingNameJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThingsThingNameJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingsThingNameJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putThingsThingNameJobsNextRoute, (c) => {
    throw new Error('Not implemented')
  })

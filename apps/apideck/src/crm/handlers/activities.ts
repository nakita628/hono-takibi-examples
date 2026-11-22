import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmActivitiesIdRoute,
  getCrmActivitiesIdRoute,
  getCrmActivitiesRoute,
  patchCrmActivitiesIdRoute,
  postCrmActivitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activitiesHandler = app
  .openapi(getCrmActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

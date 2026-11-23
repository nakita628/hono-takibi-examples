import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteThingsThingNameJobsJobIdExecutionNumberExecutionNumberRoute,
  deleteThingsThingNamePrincipalsXAmznPrincipalRoute,
  deleteThingsThingNameRoute,
  getThingsRoute,
  getThingsThingNameJobsJobIdRoute,
  getThingsThingNameJobsRoute,
  getThingsThingNamePrincipalsRoute,
  getThingsThingNameRoute,
  getThingsThingNameThingGroupsRoute,
  patchThingsThingNameRoute,
  postThingsRoute,
  postThingsThingNameRoute,
  putThingsThingNameJobsJobIdCancelRoute,
  putThingsThingNamePrincipalsXAmznPrincipalRoute,
} from '../routes'

const app = new OpenAPIHono()

export const thingsHandler = app
  .openapi(putThingsThingNamePrincipalsXAmznPrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteThingsThingNamePrincipalsXAmznPrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putThingsThingNameJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThingsThingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteThingsThingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingsThingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchThingsThingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteThingsThingNameJobsJobIdExecutionNumberExecutionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingsThingNameJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingsThingNameJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingsThingNameThingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingsThingNamePrincipalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThingsRoute, (c) => {
    throw new Error('Not implemented')
  })

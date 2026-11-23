import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteThingTypesThingTypeNameRoute,
  getThingTypesRoute,
  getThingTypesThingTypeNameRoute,
  postThingTypesThingTypeNameDeprecateRoute,
  postThingTypesThingTypeNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const thingTypesHandler = app
  .openapi(postThingTypesThingTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteThingTypesThingTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingTypesThingTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThingTypesThingTypeNameDeprecateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingTypesRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteThingsThingNameShadowRoute,
  getThingsThingNameShadowRoute,
  postThingsThingNameShadowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const thingsHandler = app
  .openapi(deleteThingsThingNameShadowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingsThingNameShadowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThingsThingNameShadowRoute, (c) => {
    throw new Error('Not implemented')
  })

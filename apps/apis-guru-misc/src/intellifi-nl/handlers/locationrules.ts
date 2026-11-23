import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLocationrulesIdRoute,
  getLocationrulesIdRoute,
  getLocationrulesRoute,
  postLocationrulesRoute,
  putLocationrulesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationrulesHandler = app
  .openapi(getLocationrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLocationrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLocationrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

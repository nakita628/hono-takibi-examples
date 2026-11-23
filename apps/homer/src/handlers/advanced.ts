import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdvancedGuidRoute,
  getAdvancedGuidRoute,
  getAdvancedRoute,
  postAdvancedRoute,
  putAdvancedGuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(getAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdvancedGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdvancedGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdvancedGuidRoute, (c) => {
    throw new Error('Not implemented')
  })

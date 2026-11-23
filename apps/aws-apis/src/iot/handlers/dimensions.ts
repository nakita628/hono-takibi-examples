import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDimensionsNameRoute,
  getDimensionsNameRoute,
  getDimensionsRoute,
  patchDimensionsNameRoute,
  postDimensionsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dimensionsHandler = app
  .openapi(postDimensionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDimensionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDimensionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDimensionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })

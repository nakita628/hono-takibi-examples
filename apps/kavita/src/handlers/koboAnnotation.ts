import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3ContentBookIdAnnotationsRoute,
  patchApiV3ContentBookIdAnnotationsRoute,
  postApiV3ContentCheckforchangesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const koboAnnotationHandler = app
  .openapi(getApiV3ContentBookIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3ContentBookIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ContentCheckforchangesRoute, (c) => {
    throw new Error('Not implemented')
  })

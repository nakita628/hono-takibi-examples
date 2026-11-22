import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSlidesGroupElementTypesIdRoute,
  getSlidesGroupElementTypesRoute,
  getSlidesGroupElementTypesTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const slidesGroupElementTypesHandler = app
  .openapi(getSlidesGroupElementTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesGroupElementTypesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesGroupElementTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

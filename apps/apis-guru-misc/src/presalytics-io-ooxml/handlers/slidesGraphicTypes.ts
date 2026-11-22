import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSlidesGraphicTypesIdRoute,
  getSlidesGraphicTypesRoute,
  getSlidesGraphicTypesTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const slidesGraphicTypesHandler = app
  .openapi(getSlidesGraphicTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesGraphicTypesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesGraphicTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

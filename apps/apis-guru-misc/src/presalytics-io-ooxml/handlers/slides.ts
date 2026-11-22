import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSlidesChildObjectsIdRoute,
  getSlidesDetailsIdRoute,
  getSlidesIdRoute,
  getSlidesOpenOfficeXmlIdRoute,
  getSlidesSvgIdRoute,
  putSlidesOpenOfficeXmlIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const slidesHandler = app
  .openapi(getSlidesChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSlidesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesSvgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

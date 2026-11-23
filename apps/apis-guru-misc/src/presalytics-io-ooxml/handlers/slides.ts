import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSlidesChildObjectsIdRoute,
  getSlidesColorMapsIdRoute,
  getSlidesDetailsIdRoute,
  getSlidesGraphicsIdRoute,
  getSlidesGraphicTypesIdRoute,
  getSlidesGraphicTypesRoute,
  getSlidesGraphicTypesTypeIdTypeIdRoute,
  getSlidesGroupElementsIdRoute,
  getSlidesGroupElementTypesIdRoute,
  getSlidesGroupElementTypesRoute,
  getSlidesGroupElementTypesTypeIdTypeIdRoute,
  getSlidesIdRoute,
  getSlidesOpenOfficeXmlIdRoute,
  getSlidesSlideMastersIdRoute,
  getSlidesSvgIdRoute,
  putSlidesOpenOfficeXmlIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const slidesHandler = app
  .openapi(getSlidesChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesColorMapsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesGraphicTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesGraphicTypesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesGraphicTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesGraphicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesGroupElementTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesGroupElementTypesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesGroupElementTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesGroupElementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSlidesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesSlideMastersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesSvgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlidesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

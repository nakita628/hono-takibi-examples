import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShapesChildObjectsIdRoute,
  getShapesDetailsIdRoute,
  getShapesIdRoute,
  getShapesOpenOfficeXmlIdRoute,
  getShapesSvgIdRoute,
  putShapesOpenOfficeXmlIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shapesHandler = app
  .openapi(getShapesChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShapesDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShapesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShapesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShapesSvgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShapesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

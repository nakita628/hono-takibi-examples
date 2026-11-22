import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConnectionShapesChildObjectsIdRoute,
  getConnectionShapesDetailsIdRoute,
  getConnectionShapesIdRoute,
  getConnectionShapesOpenOfficeXmlIdRoute,
  getConnectionShapesSvgIdRoute,
  putConnectionShapesOpenOfficeXmlIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionShapesHandler = app
  .openapi(getConnectionShapesChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionShapesDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionShapesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionShapesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionShapesSvgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionShapesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

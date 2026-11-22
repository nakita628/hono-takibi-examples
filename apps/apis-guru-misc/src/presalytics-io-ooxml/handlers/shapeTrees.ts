import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShapeTreesChildObjectsIdRoute,
  getShapeTreesDetailsIdRoute,
  getShapeTreesIdRoute,
  getShapeTreesOpenOfficeXmlIdRoute,
  getShapeTreesSvgIdRoute,
  putShapeTreesOpenOfficeXmlIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shapeTreesHandler = app
  .openapi(getShapeTreesChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShapeTreesDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShapeTreesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShapeTreesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShapeTreesSvgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShapeTreesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

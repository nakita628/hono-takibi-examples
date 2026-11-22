import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTablesChildObjectsIdRoute,
  getTablesDetailsIdRoute,
  getTablesIdRoute,
  getTablesOpenOfficeXmlIdRoute,
  getTablesSvgIdRoute,
  getTablesTableUpdateIdRoute,
  putTablesOpenOfficeXmlIdRoute,
  putTablesTableUpdateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tablesHandler = app
  .openapi(getTablesChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTablesOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesSvgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesTableUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTablesTableUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTablesBordersIdRoute,
  getTablesCellsIdRoute,
  getTablesChildObjectsIdRoute,
  getTablesColumnsIdRoute,
  getTablesDetailsIdRoute,
  getTablesIdRoute,
  getTablesOpenOfficeXmlIdRoute,
  getTablesRowsIdRoute,
  getTablesSvgIdRoute,
  getTablesTableUpdateIdRoute,
  putTablesOpenOfficeXmlIdRoute,
  putTablesTableUpdateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tablesHandler = app
  .openapi(getTablesBordersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesCellsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesColumnsIdRoute, (c) => {
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
  .openapi(getTablesRowsIdRoute, (c) => {
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

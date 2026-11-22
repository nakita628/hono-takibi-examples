import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChartsChartUpdateIdRoute,
  getChartsChildObjectsIdRoute,
  getChartsDetailsIdRoute,
  getChartsIdRoute,
  getChartsOpenOfficeXmlIdRoute,
  getChartsSvgIdRoute,
  putChartsChartUpdateIdRoute,
  putChartsOpenOfficeXmlIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chartsHandler = app
  .openapi(getChartsChartUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChartsChartUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChartsOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsSvgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

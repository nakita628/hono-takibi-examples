import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChartsAxesIdRoute,
  getChartsAxisDataTypesIdRoute,
  getChartsAxisDataTypesRoute,
  getChartsAxisDataTypesTypeIdTypeIdRoute,
  getChartsChartDataIdRoute,
  getChartsChartUpdateIdRoute,
  getChartsChildObjectsIdRoute,
  getChartsColumnCollectionsIdRoute,
  getChartsColumnsIdRoute,
  getChartsDataPointsIdRoute,
  getChartsDetailsIdRoute,
  getChartsIdRoute,
  getChartsOpenOfficeXmlIdRoute,
  getChartsPlotTypeIdRoute,
  getChartsPlotTypeRoute,
  getChartsPlotTypeTypeIdTypeIdRoute,
  getChartsRowColIdRoute,
  getChartsRowCollectionsIdRoute,
  getChartsRowColRoute,
  getChartsRowColTypeIdTypeIdRoute,
  getChartsRowNameFormatTypesIdRoute,
  getChartsRowNameFormatTypesRoute,
  getChartsRowNameFormatTypesTypeIdTypeIdRoute,
  getChartsRowsIdRoute,
  getChartsSvgIdRoute,
  putChartsChartUpdateIdRoute,
  putChartsOpenOfficeXmlIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chartsHandler = app
  .openapi(getChartsAxesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsAxisDataTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsAxisDataTypesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsAxisDataTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsChartDataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsChartUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChartsChartUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsColumnCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsColumnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsDataPointsIdRoute, (c) => {
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
  .openapi(getChartsPlotTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsPlotTypeTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsPlotTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsRowColRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsRowColTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsRowColIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsRowCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsRowNameFormatTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsRowNameFormatTypesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsRowNameFormatTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsRowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsSvgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

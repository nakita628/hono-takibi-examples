import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdRoute,
  getV4SpreadsheetsSpreadsheetIdRoute,
  getV4SpreadsheetsSpreadsheetIdValuesBatchGetRoute,
  getV4SpreadsheetsSpreadsheetIdValuesRangeRoute,
  postV4SpreadsheetsRoute,
  postV4SpreadsheetsSpreadsheetIdBatchUpdateRoute,
  postV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearchRoute,
  postV4SpreadsheetsSpreadsheetIdGetByDataFilterRoute,
  postV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyToRoute,
  postV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilterRoute,
  postV4SpreadsheetsSpreadsheetIdValuesBatchClearRoute,
  postV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilterRoute,
  postV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilterRoute,
  postV4SpreadsheetsSpreadsheetIdValuesBatchUpdateRoute,
  postV4SpreadsheetsSpreadsheetIdValuesRangeAppendRoute,
  postV4SpreadsheetsSpreadsheetIdValuesRangeClearRoute,
  putV4SpreadsheetsSpreadsheetIdValuesRangeRoute,
} from './routes'
import {
  getV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdRouteHandler,
  getV4SpreadsheetsSpreadsheetIdRouteHandler,
  getV4SpreadsheetsSpreadsheetIdValuesBatchGetRouteHandler,
  getV4SpreadsheetsSpreadsheetIdValuesRangeRouteHandler,
  postV4SpreadsheetsRouteHandler,
  postV4SpreadsheetsSpreadsheetIdBatchUpdateRouteHandler,
  postV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearchRouteHandler,
  postV4SpreadsheetsSpreadsheetIdGetByDataFilterRouteHandler,
  postV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyToRouteHandler,
  postV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilterRouteHandler,
  postV4SpreadsheetsSpreadsheetIdValuesBatchClearRouteHandler,
  postV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilterRouteHandler,
  postV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilterRouteHandler,
  postV4SpreadsheetsSpreadsheetIdValuesBatchUpdateRouteHandler,
  postV4SpreadsheetsSpreadsheetIdValuesRangeAppendRouteHandler,
  postV4SpreadsheetsSpreadsheetIdValuesRangeClearRouteHandler,
  putV4SpreadsheetsSpreadsheetIdValuesRangeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV4SpreadsheetsRoute, postV4SpreadsheetsRouteHandler)
  .openapi(getV4SpreadsheetsSpreadsheetIdRoute, getV4SpreadsheetsSpreadsheetIdRouteHandler)
  .openapi(
    getV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdRoute,
    getV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdRouteHandler,
  )
  .openapi(
    postV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearchRoute,
    postV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearchRouteHandler,
  )
  .openapi(
    postV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyToRoute,
    postV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyToRouteHandler,
  )
  .openapi(
    getV4SpreadsheetsSpreadsheetIdValuesRangeRoute,
    getV4SpreadsheetsSpreadsheetIdValuesRangeRouteHandler,
  )
  .openapi(
    putV4SpreadsheetsSpreadsheetIdValuesRangeRoute,
    putV4SpreadsheetsSpreadsheetIdValuesRangeRouteHandler,
  )
  .openapi(
    postV4SpreadsheetsSpreadsheetIdValuesRangeAppendRoute,
    postV4SpreadsheetsSpreadsheetIdValuesRangeAppendRouteHandler,
  )
  .openapi(
    postV4SpreadsheetsSpreadsheetIdValuesRangeClearRoute,
    postV4SpreadsheetsSpreadsheetIdValuesRangeClearRouteHandler,
  )
  .openapi(
    postV4SpreadsheetsSpreadsheetIdValuesBatchClearRoute,
    postV4SpreadsheetsSpreadsheetIdValuesBatchClearRouteHandler,
  )
  .openapi(
    postV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilterRoute,
    postV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilterRouteHandler,
  )
  .openapi(
    getV4SpreadsheetsSpreadsheetIdValuesBatchGetRoute,
    getV4SpreadsheetsSpreadsheetIdValuesBatchGetRouteHandler,
  )
  .openapi(
    postV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilterRoute,
    postV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilterRouteHandler,
  )
  .openapi(
    postV4SpreadsheetsSpreadsheetIdValuesBatchUpdateRoute,
    postV4SpreadsheetsSpreadsheetIdValuesBatchUpdateRouteHandler,
  )
  .openapi(
    postV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilterRoute,
    postV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilterRouteHandler,
  )
  .openapi(
    postV4SpreadsheetsSpreadsheetIdBatchUpdateRoute,
    postV4SpreadsheetsSpreadsheetIdBatchUpdateRouteHandler,
  )
  .openapi(
    postV4SpreadsheetsSpreadsheetIdGetByDataFilterRoute,
    postV4SpreadsheetsSpreadsheetIdGetByDataFilterRouteHandler,
  )

export default app

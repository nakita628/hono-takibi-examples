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
} from '../routes'

const app = new OpenAPIHono()

export const spreadsheetsHandler = app
  .openapi(postV4SpreadsheetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SpreadsheetsSpreadsheetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SpreadsheetsSpreadsheetIdDeveloperMetadataMetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SpreadsheetsSpreadsheetIdDeveloperMetadataSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SpreadsheetsSpreadsheetIdSheetsSheetIdCopyToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SpreadsheetsSpreadsheetIdValuesRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SpreadsheetsSpreadsheetIdValuesRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SpreadsheetsSpreadsheetIdValuesRangeAppendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SpreadsheetsSpreadsheetIdValuesRangeClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SpreadsheetsSpreadsheetIdValuesBatchClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SpreadsheetsSpreadsheetIdValuesBatchClearByDataFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SpreadsheetsSpreadsheetIdValuesBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SpreadsheetsSpreadsheetIdValuesBatchGetByDataFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SpreadsheetsSpreadsheetIdValuesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SpreadsheetsSpreadsheetIdValuesBatchUpdateByDataFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SpreadsheetsSpreadsheetIdBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SpreadsheetsSpreadsheetIdGetByDataFilterRoute, (c) => {
    throw new Error('Not implemented')
  })

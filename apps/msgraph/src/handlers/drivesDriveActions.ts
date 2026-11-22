import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDrivesDriveIdItemsDriveItemIdWorkbookNamesWorkbookNamedItemIdRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookNamesWorkbookNamedItemIdRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookNamesWorkbookNamedItemIdRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookNamesWorkbookNamedItemIdRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookNamesWorkbookNamedItemIdRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesItemAtIndexIndexClearFiltersRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesItemAtIndexIndexConvertToRangeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesItemAtIndexIndexReapplyFiltersRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdDataBodyRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdDataBodyRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdDataBodyRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdDataBodyRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdDataBodyRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdHeaderRowRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdHeaderRowRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdHeaderRowRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdHeaderRowRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdHeaderRowRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsWorkbookTableRowIdRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsWorkbookTableRowIdRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsWorkbookTableRowIdRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsWorkbookTableRowIdRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsWorkbookTableRowIdRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdTotalRowRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdTotalRowRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdTotalRowRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdTotalRowRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdTotalRowRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdCellRowRowColumnColumnClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdCellRowRowColumnColumnDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdCellRowRowColumnColumnInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdCellRowRowColumnColumnMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdCellRowRowColumnColumnUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsItemAtIndexIndexSetDataRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsItemAtIndexIndexSetPositionRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsItemNameNameSetDataRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsItemNameNameSetPositionRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesWorkbookNamedItemIdRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesWorkbookNamedItemIdRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesWorkbookNamedItemIdRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesWorkbookNamedItemIdRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesWorkbookNamedItemIdRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeAddressAddressClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeAddressAddressDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeAddressAddressInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeAddressAddressMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeAddressAddressUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesItemAtIndexIndexClearFiltersRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesItemAtIndexIndexConvertToRangeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesItemAtIndexIndexReapplyFiltersRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdDataBodyRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdDataBodyRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdDataBodyRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdDataBodyRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdDataBodyRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdHeaderRowRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdHeaderRowRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdHeaderRowRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdHeaderRowRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdHeaderRowRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsWorkbookTableRowIdRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsWorkbookTableRowIdRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsWorkbookTableRowIdRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsWorkbookTableRowIdRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsWorkbookTableRowIdRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdTotalRowRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdTotalRowRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdTotalRowRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdTotalRowRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdTotalRowRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeUnmergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeValuesOnlyValuesOnlyClearRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeValuesOnlyValuesOnlyDeleteRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeValuesOnlyValuesOnlyInsertRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeValuesOnlyValuesOnlyMergeRoute,
  postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeValuesOnlyValuesOnlyUnmergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const drivesDriveActionsHandler = app
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookNamesWorkbookNamedItemIdRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookNamesWorkbookNamedItemIdRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookNamesWorkbookNamedItemIdRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookNamesWorkbookNamedItemIdRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookNamesWorkbookNamedItemIdRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdDataBodyRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdDataBodyRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdDataBodyRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdDataBodyRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdDataBodyRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdHeaderRowRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdHeaderRowRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdHeaderRowRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdHeaderRowRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdHeaderRowRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRangeClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRangeDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRangeInsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRangeMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRangeUnmergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdTotalRowRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdTotalRowRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdTotalRowRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdTotalRowRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdTotalRowRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsWorkbookTableRowIdRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsWorkbookTableRowIdRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsWorkbookTableRowIdRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsWorkbookTableRowIdRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsWorkbookTableRowIdRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesItemAtIndexIndexClearFiltersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesItemAtIndexIndexConvertToRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookTablesItemAtIndexIndexReapplyFiltersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsItemNameNameSetDataRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsItemNameNameSetPositionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsItemAtIndexIndexSetDataRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsItemAtIndexIndexSetPositionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdCellRowRowColumnColumnClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdCellRowRowColumnColumnDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdCellRowRowColumnColumnInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdCellRowRowColumnColumnMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdCellRowRowColumnColumnUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeAddressAddressClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeAddressAddressDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeAddressAddressInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeAddressAddressMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdRangeAddressAddressUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeValuesOnlyValuesOnlyClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeValuesOnlyValuesOnlyDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeValuesOnlyValuesOnlyInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeValuesOnlyValuesOnlyMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdUsedRangeValuesOnlyValuesOnlyUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesWorkbookNamedItemIdRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesWorkbookNamedItemIdRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesWorkbookNamedItemIdRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesWorkbookNamedItemIdRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesWorkbookNamedItemIdRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdDataBodyRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdHeaderRowRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdTotalRowRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdDataBodyRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdDataBodyRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdDataBodyRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdDataBodyRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdDataBodyRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdHeaderRowRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdHeaderRowRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdHeaderRowRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdHeaderRowRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdHeaderRowRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdTotalRowRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdTotalRowRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdTotalRowRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdTotalRowRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdTotalRowRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsWorkbookTableRowIdRangeClearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsWorkbookTableRowIdRangeDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsWorkbookTableRowIdRangeInsertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsWorkbookTableRowIdRangeMergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsWorkbookTableRowIdRangeUnmergeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesItemAtIndexIndexClearFiltersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesItemAtIndexIndexConvertToRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesItemAtIndexIndexReapplyFiltersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

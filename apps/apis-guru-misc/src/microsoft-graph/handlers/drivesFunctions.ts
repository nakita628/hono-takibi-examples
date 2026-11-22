import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDrivesDriveIdItemsDriveItemIdMicrosoftGraphDeltaRoute,
  getDrivesDriveIdItemsDriveItemIdMicrosoftGraphDeltaTokenTokenRoute,
  getDrivesDriveIdItemsDriveItemIdMicrosoftGraphGetActivitiesByIntervalRoute,
  getDrivesDriveIdItemsDriveItemIdMicrosoftGraphGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
  getDrivesDriveIdItemsDriveItemIdMicrosoftGraphSearchQQRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookMicrosoftGraphSessionInfoResourceKeyKeyRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookMicrosoftGraphTableRowOperationResultKeyKeyRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookNamesWorkbookNamedItemIdMicrosoftGraphRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesMicrosoftGraphCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesMicrosoftGraphItemAtIndexIndexRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsMicrosoftGraphCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsMicrosoftGraphItemAtIndexIndexRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphDataBodyRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphHeaderRowRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphTotalRowRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdMicrosoftGraphDataBodyRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdMicrosoftGraphHeaderRowRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdMicrosoftGraphRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdMicrosoftGraphTotalRowRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsMicrosoftGraphCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsMicrosoftGraphItemAtIndexIndexRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsWorkbookTableRowIdMicrosoftGraphRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsMicrosoftGraphCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsMicrosoftGraphItemAtIndexIndexRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsMicrosoftGraphItemNameNameRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdMicrosoftGraphImageRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdMicrosoftGraphImageWidthWidthHeightHeightFittingModeFittingModeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdMicrosoftGraphImageWidthWidthHeightHeightRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdMicrosoftGraphImageWidthWidthRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdSeriesMicrosoftGraphCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdSeriesMicrosoftGraphItemAtIndexIndexRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdSeriesWorkbookChartSeriesIdPointsMicrosoftGraphCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdSeriesWorkbookChartSeriesIdPointsMicrosoftGraphItemAtIndexIndexRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdMicrosoftGraphCellRowRowColumnColumnRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdMicrosoftGraphRangeAddressAddressRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdMicrosoftGraphRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdMicrosoftGraphUsedRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdMicrosoftGraphUsedRangeValuesOnlyValuesOnlyRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesWorkbookNamedItemIdMicrosoftGraphRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesMicrosoftGraphCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesMicrosoftGraphItemAtIndexIndexRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsMicrosoftGraphCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsMicrosoftGraphItemAtIndexIndexRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphDataBodyRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphHeaderRowRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphTotalRowRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdMicrosoftGraphDataBodyRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdMicrosoftGraphHeaderRowRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdMicrosoftGraphRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdMicrosoftGraphTotalRowRangeRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsMicrosoftGraphCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsMicrosoftGraphItemAtIndexIndexRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsWorkbookTableRowIdMicrosoftGraphRangeRoute,
  getDrivesDriveIdListContentTypesContentTypeIdMicrosoftGraphIsPublishedRoute,
  getDrivesDriveIdListContentTypesMicrosoftGraphGetCompatibleHubContentTypesRoute,
  getDrivesDriveIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalRoute,
  getDrivesDriveIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
  getDrivesDriveIdMicrosoftGraphRecentRoute,
  getDrivesDriveIdMicrosoftGraphSearchQQRoute,
  getDrivesDriveIdMicrosoftGraphSharedWithMeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const drivesFunctionsHandler = app
  .openapi(getDrivesDriveIdItemsDriveItemIdMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsDriveItemIdMicrosoftGraphDeltaTokenTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsDriveItemIdMicrosoftGraphGetActivitiesByIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDrivesDriveIdItemsDriveItemIdMicrosoftGraphGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDrivesDriveIdItemsDriveItemIdMicrosoftGraphSearchQQRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookMicrosoftGraphSessionInfoResourceKeyKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookMicrosoftGraphTableRowOperationResultKeyKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookNamesWorkbookNamedItemIdMicrosoftGraphRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDrivesDriveIdItemsDriveItemIdWorkbookTablesMicrosoftGraphCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesMicrosoftGraphItemAtIndexIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsMicrosoftGraphCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsMicrosoftGraphItemAtIndexIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphDataBodyRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphHeaderRowRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphTotalRowRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdMicrosoftGraphDataBodyRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdMicrosoftGraphHeaderRowRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdMicrosoftGraphRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdMicrosoftGraphTotalRowRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsMicrosoftGraphCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsMicrosoftGraphItemAtIndexIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsWorkbookTableRowIdMicrosoftGraphRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsMicrosoftGraphCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsMicrosoftGraphItemNameNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsMicrosoftGraphItemAtIndexIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdMicrosoftGraphImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdMicrosoftGraphImageWidthWidthRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdMicrosoftGraphImageWidthWidthHeightHeightRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdMicrosoftGraphImageWidthWidthHeightHeightFittingModeFittingModeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdSeriesMicrosoftGraphCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdSeriesMicrosoftGraphItemAtIndexIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdSeriesWorkbookChartSeriesIdPointsMicrosoftGraphCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdSeriesWorkbookChartSeriesIdPointsMicrosoftGraphItemAtIndexIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdMicrosoftGraphCellRowRowColumnColumnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdMicrosoftGraphRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdMicrosoftGraphRangeAddressAddressRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdMicrosoftGraphUsedRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdMicrosoftGraphUsedRangeValuesOnlyValuesOnlyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesWorkbookNamedItemIdMicrosoftGraphRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesMicrosoftGraphCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesMicrosoftGraphItemAtIndexIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsMicrosoftGraphCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsMicrosoftGraphItemAtIndexIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphDataBodyRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphHeaderRowRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsWorkbookTableColumnIdMicrosoftGraphTotalRowRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdMicrosoftGraphDataBodyRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdMicrosoftGraphHeaderRowRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdMicrosoftGraphRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdMicrosoftGraphTotalRowRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsMicrosoftGraphCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsMicrosoftGraphItemAtIndexIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsWorkbookTableRowIdMicrosoftGraphRangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDrivesDriveIdListContentTypesMicrosoftGraphGetCompatibleHubContentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdMicrosoftGraphIsPublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDrivesDriveIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDrivesDriveIdMicrosoftGraphRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdMicrosoftGraphSearchQQRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdMicrosoftGraphSharedWithMeRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDrivesCountRoute,
  getDrivesDriveIdBundlesCountRoute,
  getDrivesDriveIdFollowingCountRoute,
  getDrivesDriveIdItemsCountRoute,
  getDrivesDriveIdItemsDriveItemIdAnalyticsItemActivityStatsCountRoute,
  getDrivesDriveIdItemsDriveItemIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesCountRoute,
  getDrivesDriveIdItemsDriveItemIdChildrenCountRoute,
  getDrivesDriveIdItemsDriveItemIdPermissionsCountRoute,
  getDrivesDriveIdItemsDriveItemIdSubscriptionsCountRoute,
  getDrivesDriveIdItemsDriveItemIdThumbnailsCountRoute,
  getDrivesDriveIdItemsDriveItemIdVersionsCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookCommentsCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookCommentsWorkbookCommentIdRepliesCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookNamesCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookOperationsCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdSeriesCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdSeriesWorkbookChartSeriesIdPointsCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdPivotTablesCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsCountRoute,
  getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsCountRoute,
  getDrivesDriveIdListColumnsCountRoute,
  getDrivesDriveIdListContentTypesContentTypeIdBaseTypesCountRoute,
  getDrivesDriveIdListContentTypesContentTypeIdColumnLinksCountRoute,
  getDrivesDriveIdListContentTypesContentTypeIdColumnPositionsCountRoute,
  getDrivesDriveIdListContentTypesContentTypeIdColumnsCountRoute,
  getDrivesDriveIdListContentTypesCountRoute,
  getDrivesDriveIdListItemsCountRoute,
  getDrivesDriveIdListItemsListItemIdDocumentSetVersionsCountRoute,
  getDrivesDriveIdListItemsListItemIdVersionsCountRoute,
  getDrivesDriveIdListOperationsCountRoute,
  getDrivesDriveIdListSubscriptionsCountRoute,
  getDrivesDriveIdSpecialCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const drivesHandler = app
  .openapi(getDrivesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdBundlesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdFollowingCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsDriveItemIdAnalyticsItemActivityStatsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDrivesDriveIdItemsDriveItemIdAnalyticsItemActivityStatsItemActivityStatIdActivitiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDrivesDriveIdItemsDriveItemIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsDriveItemIdPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsDriveItemIdSubscriptionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsDriveItemIdThumbnailsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsDriveItemIdVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsDriveItemIdWorkbookCommentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookCommentsWorkbookCommentIdRepliesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDrivesDriveIdItemsDriveItemIdWorkbookNamesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsDriveItemIdWorkbookOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsDriveItemIdWorkbookTablesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsDriveItemIdWorkbookTablesWorkbookTableIdRowsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdSeriesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdChartsWorkbookChartIdSeriesWorkbookChartSeriesIdPointsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdNamesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdPivotTablesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdColumnsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdItemsDriveItemIdWorkbookWorksheetsWorkbookWorksheetIdTablesWorkbookTableIdRowsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDrivesDriveIdListColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdBaseTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdColumnLinksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdColumnPositionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdDocumentSetVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListSubscriptionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdSpecialCountRoute, (c) => {
    throw new Error('Not implemented')
  })

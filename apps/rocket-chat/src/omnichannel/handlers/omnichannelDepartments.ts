import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1LivechatDepartmentIdRoute,
  getApiV1LivechatAnalyticsDepartmentsAmountOfChatsRoute,
  getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeRoute,
  getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeRoute,
  getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeRoute,
  getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsRoute,
  getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsRoute,
  getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeRoute,
  getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsRoute,
  getApiV1LivechatDepartmentAutocompleteRoute,
  getApiV1LivechatDepartmentIdAgentsRoute,
  getApiV1LivechatDepartmentIdRoute,
  getApiV1LivechatDepartmentIsDepartmentCreationAvailableRoute,
  getApiV1LivechatDepartmentListByIdsRoute,
  getApiV1LivechatDepartmentRoute,
  getApiV1LivechatDepartmentsArchivedRoute,
  postApiV1LivechatDepartmentIdAgentsRoute,
  postApiV1LivechatDepartmentIdArchiveRoute,
  postApiV1LivechatDepartmentIdUnarchiveRoute,
  postApiV1LivechatDepartmentRoute,
  putApiV1LivechatDepartmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelDepartmentsHandler = app
  .openapi(getApiV1LivechatDepartmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatDepartmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LivechatDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatDepartmentAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatDepartmentIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatDepartmentIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatDepartmentListByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsAmountOfChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatDepartmentsArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatDepartmentIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatDepartmentIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatDepartmentIsDepartmentCreationAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })

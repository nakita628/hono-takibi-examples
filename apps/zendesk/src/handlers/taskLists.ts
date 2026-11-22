import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TaskListsTaskListIdRoute,
  deleteApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute,
  deleteApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksTaskObjectLinkIdRoute,
  getApiV2TaskListsTaskListIdRoute,
  getApiV2TaskListsTaskListIdTaskItemsRoute,
  getApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute,
  getApiV2TicketsTicketIdParentTicketTasksRoute,
  getApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksRoute,
  getApiV2TicketsTicketIdTaskListsRoute,
  postApiV2TaskListsTaskListIdTaskItemsRoute,
  postApiV2TicketsTicketIdTaskItemsTaskItemIdSubticketRoute,
  postApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksRoute,
  postApiV2TicketsTicketIdTaskListsRoute,
  putApiV2TaskListsTaskListIdRoute,
  putApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskListsHandler = app
  .openapi(getApiV2TaskListsTaskListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TaskListsTaskListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TaskListsTaskListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TaskListsTaskListIdTaskItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TaskListsTaskListIdTaskItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdParentTicketTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsTicketIdTaskItemsTaskItemIdSubticketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksTaskObjectLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdTaskListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsTicketIdTaskListsRoute, (c) => {
    throw new Error('Not implemented')
  })

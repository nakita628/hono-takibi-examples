import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiMessagesIdRoute,
  getApiInventoryCategoriesIdRoute,
  getApiInventoryCategoriesRoute,
  getApiInventoryVaccinesIdRoute,
  getApiInventoryVaccinesRoute,
  getApiMessagesIdRoute,
  getApiMessagesRoute,
  getApiOfficesIdRoute,
  getApiOfficesRoute,
  getApiTaskCategoriesIdRoute,
  getApiTaskCategoriesRoute,
  getApiTaskNotesIdRoute,
  getApiTaskNotesRoute,
  getApiTasksIdRoute,
  getApiTasksRoute,
  getApiTaskStatusesIdRoute,
  getApiTaskStatusesRoute,
  getApiTaskTemplatesIdRoute,
  getApiTaskTemplatesRoute,
  patchApiMessagesIdRoute,
  patchApiOfficesIdRoute,
  patchApiTaskCategoriesIdRoute,
  patchApiTaskNotesIdRoute,
  patchApiTasksIdRoute,
  patchApiTaskStatusesIdRoute,
  patchApiTaskTemplatesIdRoute,
  postApiInventoryVaccinesRoute,
  postApiMessagesRoute,
  postApiOfficesIdAddExamRoomRoute,
  postApiTaskCategoriesRoute,
  postApiTaskNotesRoute,
  postApiTasksRoute,
  postApiTaskStatusesRoute,
  postApiTaskTemplatesRoute,
  putApiMessagesIdRoute,
  putApiOfficesIdRoute,
  putApiTaskCategoriesIdRoute,
  putApiTaskNotesIdRoute,
  putApiTasksIdRoute,
  putApiTaskStatusesIdRoute,
  putApiTaskTemplatesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const practiceManagementHandler = app
  .openapi(getApiInventoryCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInventoryCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInventoryVaccinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInventoryVaccinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInventoryVaccinesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOfficesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOfficesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOfficesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiOfficesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOfficesIdAddExamRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaskCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTaskCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTaskCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaskNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTaskNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTaskNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaskStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTaskStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTaskStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaskTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTaskTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTaskTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })

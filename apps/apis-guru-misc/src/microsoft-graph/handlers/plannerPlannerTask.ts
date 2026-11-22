import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  deletePlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  deletePlannerTasksPlannerTaskIdDetailsRoute,
  deletePlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  deletePlannerTasksPlannerTaskIdRoute,
  getPlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  getPlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  getPlannerTasksPlannerTaskIdDetailsRoute,
  getPlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  getPlannerTasksPlannerTaskIdRoute,
  getPlannerTasksRoute,
  patchPlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  patchPlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  patchPlannerTasksPlannerTaskIdDetailsRoute,
  patchPlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  patchPlannerTasksPlannerTaskIdRoute,
  postPlannerTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const plannerPlannerTaskHandler = app
  .openapi(getPlannerTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlannerTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })

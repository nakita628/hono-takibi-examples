import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTasksTaskGidRoute,
  getProjectsProjectGidTasksRoute,
  getSectionsSectionGidTasksRoute,
  getTagsTagGidTasksRoute,
  getTasksRoute,
  getTasksTaskGidDependenciesRoute,
  getTasksTaskGidDependentsRoute,
  getTasksTaskGidRoute,
  getTasksTaskGidSubtasksRoute,
  getUserTaskListsUserTaskListGidTasksRoute,
  getWorkspacesWorkspaceGidTasksSearchRoute,
  postTasksRoute,
  postTasksTaskGidAddDependenciesRoute,
  postTasksTaskGidAddDependentsRoute,
  postTasksTaskGidAddFollowersRoute,
  postTasksTaskGidAddProjectRoute,
  postTasksTaskGidAddTagRoute,
  postTasksTaskGidDuplicateRoute,
  postTasksTaskGidRemoveDependenciesRoute,
  postTasksTaskGidRemoveDependentsRoute,
  postTasksTaskGidRemoveFollowersRoute,
  postTasksTaskGidRemoveProjectRoute,
  postTasksTaskGidRemoveTagRoute,
  postTasksTaskGidSetParentRoute,
  postTasksTaskGidSubtasksRoute,
  putTasksTaskGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getProjectsProjectGidTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSectionsSectionGidTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTagsTagGidTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTasksTaskGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTasksTaskGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidAddDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidAddDependentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidAddFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidAddProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidAddTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskGidDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskGidDependentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidRemoveDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidRemoveDependentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidRemoveFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidRemoveProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidRemoveTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidSetParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskGidSubtasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidSubtasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserTaskListsUserTaskListGidTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidTasksSearchRoute, (c) => {
    throw new Error('Not implemented')
  })

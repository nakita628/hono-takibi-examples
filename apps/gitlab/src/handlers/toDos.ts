import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4TodosRoute,
  postApiV4ProjectsIdIssuesIssueIidTodoRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidTodoRoute,
  postApiV4TodosIdMarkAsDoneRoute,
  postApiV4TodosMarkAsDoneRoute,
} from '../routes'

const app = new OpenAPIHono()

export const toDosHandler = app
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidTodoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesIssueIidTodoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4TodosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4TodosIdMarkAsDoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4TodosMarkAsDoneRoute, (c) => {
    throw new Error('Not implemented')
  })

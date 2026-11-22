import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdLabelsNameRoute,
  deleteApiV4GroupsIdLabelsRoute,
  deleteApiV4ProjectsIdLabelsNameRoute,
  deleteApiV4ProjectsIdLabelsRoute,
  getApiV4GroupsIdLabelsNameRoute,
  getApiV4GroupsIdLabelsRoute,
  getApiV4ProjectsIdLabelsNameRoute,
  getApiV4ProjectsIdLabelsRoute,
  postApiV4GroupsIdLabelsRoute,
  postApiV4ProjectsIdLabelsRoute,
  putApiV4GroupsIdLabelsNameRoute,
  putApiV4GroupsIdLabelsRoute,
  putApiV4ProjectsIdLabelsNamePromoteRoute,
  putApiV4ProjectsIdLabelsNameRoute,
  putApiV4ProjectsIdLabelsPromoteRoute,
  putApiV4ProjectsIdLabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app
  .openapi(getApiV4ProjectsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdLabelsPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdLabelsNamePromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })

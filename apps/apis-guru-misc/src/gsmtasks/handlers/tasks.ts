import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTasksIdDocumentsIndexRoute,
  getTasksIdEventsIndexRoute,
  getTasksIdIndexRoute,
  getTasksIdSignaturesIndexRoute,
  getTasksIndexRoute,
  patchTasksIdIndexRoute,
  postTasksIdAcceptIndexRoute,
  postTasksIdAccountChangeIndexRoute,
  postTasksIdActivateIndexRoute,
  postTasksIdAssignIndexRoute,
  postTasksIdCancelIndexRoute,
  postTasksIdCompleteIndexRoute,
  postTasksIdFailIndexRoute,
  postTasksIdRejectIndexRoute,
  postTasksIdTransitIndexRoute,
  postTasksIdUnacceptIndexRoute,
  postTasksIdUnassignIndexRoute,
  postTasksIndexRoute,
  postTasksReorderIndexRoute,
  postTasksRepositionIndexRoute,
  putTasksIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getTasksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksReorderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksRepositionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTasksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTasksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksIdAcceptIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksIdAccountChangeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksIdActivateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksIdAssignIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksIdCancelIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksIdCompleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksIdDocumentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksIdEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksIdFailIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksIdRejectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksIdSignaturesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksIdTransitIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksIdUnacceptIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksIdUnassignIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

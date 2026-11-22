import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdFileOoxmlAutomationIdRoute,
  deleteIdRoute,
  getIdAnalyticsRoute,
  getIdFileOoxmlAutomationIdRoute,
  getIdOutlineRoute,
  getIdPublicIndexRoute,
  getIdRevealRoute,
  getIdRoute,
  getIdStatusRoute,
  getRoute,
  postFileJsonRoute,
  postFileRoute,
  postIdFileRoute,
  postIdOutlineRoute,
  postRoute,
  putIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storyHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdFileOoxmlAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdFileOoxmlAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdOutlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdOutlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdPublicIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

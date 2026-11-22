import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3VersionIdRoute,
  getRestApi3ProjectProjectIdOrKeyVersionRoute,
  getRestApi3ProjectProjectIdOrKeyVersionsRoute,
  getRestApi3VersionIdRelatedIssueCountsRoute,
  getRestApi3VersionIdRoute,
  getRestApi3VersionIdUnresolvedIssueCountRoute,
  postRestApi3VersionIdMoveRoute,
  postRestApi3VersionIdRemoveAndSwapRoute,
  postRestApi3VersionRoute,
  putRestApi3VersionIdMergetoMoveIssuesToRoute,
  putRestApi3VersionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectVersionsHandler = app
  .openapi(getRestApi3ProjectProjectIdOrKeyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3VersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3VersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3VersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3VersionIdMergetoMoveIssuesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3VersionIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3VersionIdRelatedIssueCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3VersionIdRemoveAndSwapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3VersionIdUnresolvedIssueCountRoute, (c) => {
    throw new Error('Not implemented')
  })

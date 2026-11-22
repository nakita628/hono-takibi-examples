import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV4GroupsIdLabelsSubscribableIdSubscribeRoute,
  postApiV4GroupsIdLabelsSubscribableIdUnsubscribeRoute,
  postApiV4ProjectsIdIssuesSubscribableIdSubscribeRoute,
  postApiV4ProjectsIdIssuesSubscribableIdUnsubscribeRoute,
  postApiV4ProjectsIdLabelsSubscribableIdSubscribeRoute,
  postApiV4ProjectsIdLabelsSubscribableIdUnsubscribeRoute,
  postApiV4ProjectsIdMergeRequestsSubscribableIdSubscribeRoute,
  postApiV4ProjectsIdMergeRequestsSubscribableIdUnsubscribeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceSubscriptionsHandler = app
  .openapi(postApiV4ProjectsIdMergeRequestsSubscribableIdSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsSubscribableIdUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesSubscribableIdSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIssuesSubscribableIdUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdLabelsSubscribableIdSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdLabelsSubscribableIdUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdLabelsSubscribableIdSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdLabelsSubscribableIdUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })

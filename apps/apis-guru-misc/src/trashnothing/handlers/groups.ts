import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGroupsGroupIdRoute,
  getGroupsMultipleRoute,
  getGroupsRoute,
  postGroupsGroupIdAnswersRoute,
  postGroupsGroupIdContactRoute,
  postGroupsGroupIdUnsubscribeRoute,
  postGroupsSubscribeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })

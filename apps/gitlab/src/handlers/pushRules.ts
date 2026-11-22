import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdPushRuleRoute,
  deleteApiV4ProjectsIdPushRuleRoute,
  getApiV4GroupsIdPushRuleRoute,
  getApiV4ProjectsIdPushRuleRoute,
  postApiV4GroupsIdPushRuleRoute,
  postApiV4ProjectsIdPushRuleRoute,
  putApiV4GroupsIdPushRuleRoute,
  putApiV4ProjectsIdPushRuleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pushRulesHandler = app
  .openapi(getApiV4GroupsIdPushRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdPushRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdPushRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdPushRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPushRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPushRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPushRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdPushRuleRoute, (c) => {
    throw new Error('Not implemented')
  })

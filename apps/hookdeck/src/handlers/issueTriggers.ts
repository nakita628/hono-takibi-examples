import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIssueTriggersIdRoute,
  getIssueTriggersIdRoute,
  getIssueTriggersRoute,
  postIssueTriggersRoute,
  putIssueTriggersIdDisableRoute,
  putIssueTriggersIdEnableRoute,
  putIssueTriggersIdRoute,
  putIssueTriggersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueTriggersHandler = app
  .openapi(getIssueTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIssueTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIssueTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssueTriggersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIssueTriggersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIssueTriggersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIssueTriggersIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIssueTriggersIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })

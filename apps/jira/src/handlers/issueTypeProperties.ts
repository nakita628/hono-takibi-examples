import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute,
  getRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute,
  getRestApi3IssuetypeIssueTypeIdPropertiesRoute,
  putRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueTypePropertiesHandler = app
  .openapi(getRestApi3IssuetypeIssueTypeIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })

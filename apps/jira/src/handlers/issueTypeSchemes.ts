import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeIssueTypeIdRoute,
  deleteRestApi3IssuetypeschemeIssueTypeSchemeIdRoute,
  getRestApi3IssuetypeschemeMappingRoute,
  getRestApi3IssuetypeschemeProjectRoute,
  getRestApi3IssuetypeschemeRoute,
  postRestApi3IssuetypeschemeRoute,
  putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeMoveRoute,
  putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeRoute,
  putRestApi3IssuetypeschemeIssueTypeSchemeIdRoute,
  putRestApi3IssuetypeschemeProjectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueTypeSchemesHandler = app
  .openapi(getRestApi3IssuetypeschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuetypeschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeschemeMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypeschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuetypeschemeIssueTypeSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypeschemeIssueTypeSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeIssueTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdRoute,
  getRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdProjectRoute,
  getRestApi3IssuetypescreenschemeMappingRoute,
  getRestApi3IssuetypescreenschemeProjectRoute,
  getRestApi3IssuetypescreenschemeRoute,
  postRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRemoveRoute,
  postRestApi3IssuetypescreenschemeRoute,
  putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingDefaultRoute,
  putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRoute,
  putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdRoute,
  putRestApi3IssuetypescreenschemeProjectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueTypeScreenSchemesHandler = app
  .openapi(getRestApi3IssuetypescreenschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuetypescreenschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypescreenschemeMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypescreenschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypescreenschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdProjectRoute, (c) => {
    throw new Error('Not implemented')
  })

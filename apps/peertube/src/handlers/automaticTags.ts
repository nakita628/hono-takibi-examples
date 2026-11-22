import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AutomaticTagsAccountsAccountNameAvailableRoute,
  getApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsRoute,
  getApiV1AutomaticTagsPoliciesServerVideosRoute,
  getApiV1AutomaticTagsServerAvailableRoute,
  putApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsRoute,
  putApiV1AutomaticTagsPoliciesServerVideosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const automaticTagsHandler = app
  .openapi(getApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AutomaticTagsPoliciesAccountsAccountNameCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutomaticTagsAccountsAccountNameAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutomaticTagsServerAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutomaticTagsPoliciesServerVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AutomaticTagsPoliciesServerVideosRoute, (c) => {
    throw new Error('Not implemented')
  })

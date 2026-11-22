import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionMetadataUrlPathPlaceholderRoute,
  getRuleActionTypeaheadUrlPathPlaceholderRoute,
  postActionOnChangeCallbackPathPlaceholderRoute,
  postActionOnSubmitCallbackPathPlaceholderRoute,
  postRunActionUrlPathPlaceholderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ruleActionsHandler = app
  .openapi(getRuleActionTypeaheadUrlPathPlaceholderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRunActionUrlPathPlaceholderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionMetadataUrlPathPlaceholderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionOnChangeCallbackPathPlaceholderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionOnSubmitCallbackPathPlaceholderRoute, (c) => {
    throw new Error('Not implemented')
  })

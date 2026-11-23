import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionMetadataUrlPathPlaceholderRoute,
  getFormMetadataUrlPathPlaceholderRoute,
  getModalFormTypeaheadUrlPathPlaceholderRoute,
  getResourceTypeaheadUrlPathPlaceholderRoute,
  getRuleActionTypeaheadUrlPathPlaceholderRoute,
  getWidgetMetadataUrlPathPlaceholderRoute,
  postActionOnChangeCallbackPathPlaceholderRoute,
  postActionOnSubmitCallbackPathPlaceholderRoute,
  postOnChangeCallbackPathPlaceholderRoute,
  postOnSubmitCallbackPathPlaceholderRoute,
  postResourceAttachUrlPathPlaceholderRoute,
  postRunActionUrlPathPlaceholderRoute,
} from './routes'
import {
  getActionMetadataUrlPathPlaceholderRouteHandler,
  getFormMetadataUrlPathPlaceholderRouteHandler,
  getModalFormTypeaheadUrlPathPlaceholderRouteHandler,
  getResourceTypeaheadUrlPathPlaceholderRouteHandler,
  getRuleActionTypeaheadUrlPathPlaceholderRouteHandler,
  getWidgetMetadataUrlPathPlaceholderRouteHandler,
  postActionOnChangeCallbackPathPlaceholderRouteHandler,
  postActionOnSubmitCallbackPathPlaceholderRouteHandler,
  postOnChangeCallbackPathPlaceholderRouteHandler,
  postOnSubmitCallbackPathPlaceholderRouteHandler,
  postResourceAttachUrlPathPlaceholderRouteHandler,
  postRunActionUrlPathPlaceholderRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getWidgetMetadataUrlPathPlaceholderRoute,
    getWidgetMetadataUrlPathPlaceholderRouteHandler,
  )
  .openapi(
    postResourceAttachUrlPathPlaceholderRoute,
    postResourceAttachUrlPathPlaceholderRouteHandler,
  )
  .openapi(
    getResourceTypeaheadUrlPathPlaceholderRoute,
    getResourceTypeaheadUrlPathPlaceholderRouteHandler,
  )
  .openapi(getFormMetadataUrlPathPlaceholderRoute, getFormMetadataUrlPathPlaceholderRouteHandler)
  .openapi(
    getModalFormTypeaheadUrlPathPlaceholderRoute,
    getModalFormTypeaheadUrlPathPlaceholderRouteHandler,
  )
  .openapi(
    getRuleActionTypeaheadUrlPathPlaceholderRoute,
    getRuleActionTypeaheadUrlPathPlaceholderRouteHandler,
  )
  .openapi(
    postOnChangeCallbackPathPlaceholderRoute,
    postOnChangeCallbackPathPlaceholderRouteHandler,
  )
  .openapi(
    postOnSubmitCallbackPathPlaceholderRoute,
    postOnSubmitCallbackPathPlaceholderRouteHandler,
  )
  .openapi(postRunActionUrlPathPlaceholderRoute, postRunActionUrlPathPlaceholderRouteHandler)
  .openapi(
    getActionMetadataUrlPathPlaceholderRoute,
    getActionMetadataUrlPathPlaceholderRouteHandler,
  )
  .openapi(
    postActionOnChangeCallbackPathPlaceholderRoute,
    postActionOnChangeCallbackPathPlaceholderRouteHandler,
  )
  .openapi(
    postActionOnSubmitCallbackPathPlaceholderRoute,
    postActionOnSubmitCallbackPathPlaceholderRouteHandler,
  )

export default app

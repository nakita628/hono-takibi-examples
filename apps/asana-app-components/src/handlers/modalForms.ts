import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormMetadataUrlPathPlaceholderRoute,
  getModalFormTypeaheadUrlPathPlaceholderRoute,
  postOnChangeCallbackPathPlaceholderRoute,
  postOnSubmitCallbackPathPlaceholderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modalFormsHandler = app
  .openapi(getFormMetadataUrlPathPlaceholderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModalFormTypeaheadUrlPathPlaceholderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOnChangeCallbackPathPlaceholderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOnSubmitCallbackPathPlaceholderRoute, (c) => {
    throw new Error('Not implemented')
  })

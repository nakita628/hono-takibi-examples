import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LivechatCustomFields2Route,
  getApiV1LivechatCustomFieldsIdRoute,
  postApiV1LivechatCustomFieldRoute,
  postApiV1LivechatCustomFieldsDeleteRoute,
  postApiV1LivechatCustomFieldsRoute,
  postApiV1LivechatCustomFieldsSaveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelCustomFieldsHandler = app
  .openapi(postApiV1LivechatCustomFieldsSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatCustomFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatCustomFields2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatCustomFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatCustomFieldsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })

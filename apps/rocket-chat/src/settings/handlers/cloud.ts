import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CloudRegistrationStatusRoute,
  getApiV1CloudWorkspaceRegisterDataRoute,
  postApiV1CloudConnectWorkspaceRoute,
  postApiV1CloudManualRegisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudHandler = app
  .openapi(postApiV1CloudConnectWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CloudManualRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CloudRegistrationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CloudWorkspaceRegisterDataRoute, (c) => {
    throw new Error('Not implemented')
  })

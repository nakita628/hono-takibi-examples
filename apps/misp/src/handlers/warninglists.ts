import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWarninglistsRoute,
  getWarninglistsViewWarninglistIdRoute,
  postWarninglistsCheckValueRoute,
  postWarninglistsRoute,
  postWarninglistsToggleEnableRoute,
  postWarninglistsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const warninglistsHandler = app
  .openapi(getWarninglistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWarninglistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWarninglistsToggleEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWarninglistsViewWarninglistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWarninglistsCheckValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWarninglistsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })

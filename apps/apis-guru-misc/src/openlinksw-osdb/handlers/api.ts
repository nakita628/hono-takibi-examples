import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ServicesServiceIdRoute,
  getApiV1ActionsServiceIdActionIdHelpRoute,
  getApiV1ActionsServiceIdActionIdRoute,
  getApiV1ActionsServiceIdRoute,
  getApiV1LoginRoute,
  getApiV1LogoutRoute,
  getApiV1ServicesRoute,
  getApiV1ServicesServiceIdRoute,
  postApiV1ActionsServiceIdActionIdExecRoute,
  postApiV1ServicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1ActionsServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ActionsServiceIdActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ActionsServiceIdActionIdExecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ActionsServiceIdActionIdHelpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

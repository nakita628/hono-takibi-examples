import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdDpsMessageDpsMessageIdRoute,
  getEmployerEmployerIdDpsMessageDpsMessageIdRoute,
  getEmployerEmployerIdDpsMessagesRoute,
  patchEmployerEmployerIdDpsMessageDpsMessageIdRoute,
  postEmployerEmployerIdDpsMessagesRoute,
  putEmployerEmployerIdDpsMessageDpsMessageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dpsMessageHandler = app
  .openapi(deleteEmployerEmployerIdDpsMessageDpsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdDpsMessageDpsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdDpsMessageDpsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdDpsMessageDpsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdDpsMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdDpsMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })

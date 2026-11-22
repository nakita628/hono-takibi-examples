import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSendersSenderIdRoute,
  getSendersIpsRoute,
  getSendersRoute,
  getSendersSenderIdIpsRoute,
  postSendersRoute,
  putSendersSenderIdRoute,
  putSendersSenderIdValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sendersHandler = app
  .openapi(getSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSendersIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSendersSenderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSendersSenderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSendersSenderIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSendersSenderIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })

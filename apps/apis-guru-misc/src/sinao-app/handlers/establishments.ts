import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdEstablishmentsIdRoute,
  getAppsAppIdEstablishmentsIdRoute,
  postAppsAppIdEstablishmentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const establishmentsHandler = app
  .openapi(deleteAppsAppIdEstablishmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdEstablishmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdEstablishmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

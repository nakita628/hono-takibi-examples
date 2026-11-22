import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AgreementsEnduserIdIndexRoute,
  getApiV2AgreementsEnduserIdIndexRoute,
  getApiV2AgreementsEnduserIndexRoute,
  postApiV2AgreementsEnduserIndexRoute,
  putApiV2AgreementsEnduserIdAcceptIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agreementsHandler = app
  .openapi(getApiV2AgreementsEnduserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AgreementsEnduserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AgreementsEnduserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgreementsEnduserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AgreementsEnduserIdAcceptIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserCompanyItemIdRoute,
  getUserCompanyUserCompanyIDNameRoute,
  putUserCompanyItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userCompanyHandler = app
  .openapi(getUserCompanyUserCompanyIDNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCompanyItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserCompanyItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })

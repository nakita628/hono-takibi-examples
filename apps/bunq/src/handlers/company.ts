import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDCompanyItemIdRoute,
  getUserUserIDCompanyRoute,
  postUserUserIDCompanyRoute,
  putUserUserIDCompanyItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companyHandler = app
  .openapi(postUserUserIDCompanyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCompanyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCompanyItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDCompanyItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })

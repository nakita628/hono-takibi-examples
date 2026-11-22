import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDMonetaryAccountMonetaryAccountIDExportRibItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDExportRibItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDExportRibRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDExportRibRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportRibHandler = app
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDExportRibRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDExportRibRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDExportRibItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIDMonetaryAccountMonetaryAccountIDExportRibItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })

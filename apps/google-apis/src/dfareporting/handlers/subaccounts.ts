import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdSubaccountsIdRoute,
  getUserprofilesProfileIdSubaccountsRoute,
  patchUserprofilesProfileIdSubaccountsRoute,
  postUserprofilesProfileIdSubaccountsRoute,
  putUserprofilesProfileIdSubaccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subaccountsHandler = app
  .openapi(getUserprofilesProfileIdSubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdSubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdSubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdSubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdSubaccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

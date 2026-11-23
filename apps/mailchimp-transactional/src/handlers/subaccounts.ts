import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSubaccountsAddRoute,
  postSubaccountsDeleteRoute,
  postSubaccountsInfoRoute,
  postSubaccountsListRoute,
  postSubaccountsPauseRoute,
  postSubaccountsResumeRoute,
  postSubaccountsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subaccountsHandler = app
  .openapi(postSubaccountsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubaccountsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubaccountsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubaccountsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubaccountsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubaccountsPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubaccountsResumeRoute, (c) => {
    throw new Error('Not implemented')
  })

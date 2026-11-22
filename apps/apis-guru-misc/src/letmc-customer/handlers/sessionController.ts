import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CustomerShortNameSessionRoute,
  getV2CustomerShortNameSessionRoute,
  postV2CustomerShortNameSessionCreatelandlordloginRoute,
  postV2CustomerShortNameSessionResetpasswordRoute,
  postV2CustomerShortNameSessionRoute,
  putV2CustomerShortNameSessionPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionControllerHandler = app
  .openapi(deleteV2CustomerShortNameSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomerShortNameSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomerShortNameSessionCreatelandlordloginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CustomerShortNameSessionPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomerShortNameSessionResetpasswordRoute, (c) => {
    throw new Error('Not implemented')
  })

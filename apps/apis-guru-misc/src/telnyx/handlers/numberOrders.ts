import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommentsIdRoute,
  getCommentsRoute,
  getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
  getNumberOrderPhoneNumbersRoute,
  getNumberOrdersNumberOrderIdRoute,
  getNumberOrdersRoute,
  getSubNumberOrdersRoute,
  getSubNumberOrdersSubNumberOrderIdRoute,
  patchCommentsIdReadRoute,
  patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
  patchNumberOrdersNumberOrderIdRoute,
  patchSubNumberOrdersSubNumberOrderIdRoute,
  postCommentsRoute,
  postNumberOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numberOrdersHandler = app
  .openapi(getCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommentsIdReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberOrderPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberOrdersNumberOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNumberOrdersNumberOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubNumberOrdersSubNumberOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubNumberOrdersSubNumberOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
